import React, { useEffect, useState } from "react";
import { fetchProducts, saveProduct, deleteProduct } from "../lib/api";
import { getRole } from "../lib/auth";
import ProductForm from "./ProductForm";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const role = getRole();

  useEffect(() => {
    refresh();
  }, []);

  async function refresh() {
    setProducts(await fetchProducts());
  }

  async function handleSave(p) {
    await saveProduct(p);
    setEditing(null);
    refresh();
  }

  async function handleDelete(id) {
    if (!confirm("Delete?")) return;
    await deleteProduct(id);
    refresh();
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 20 }}>
      <div>
        <div className="card">
          <h2>Products</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.qty}</td>
                  <td>₹{p.price}</td>
                  <td>
                    <button className="button" onClick={() => setEditing(p)}>
                      Edit
                    </button>
                    <button
                      className="button"
                      onClick={() => handleDelete(p.id)}
                      style={{ marginLeft: 8 }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <aside>
        <div className="card">
          <h3>{editing ? "Edit" : "Add"} Product</h3>
          <div className="small-muted">Role: {role}</div>
          <ProductForm
            initial={editing}
            onSave={handleSave}
            onCancel={() => setEditing(null)}
          />
        </div>
      </aside>
    </div>
  );
}
