import React, { useEffect, useState } from "react";
import { fetchProducts } from "../lib/api";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);
  const totalQty = products.reduce((s, p) => s + p.qty, 0);
  const value = products.reduce((s, p) => s + p.qty * (p.price || 0), 0);

  return (
    <div>
      <div className="card">
        <h2>Manager Dashboard</h2>
        <div style={{ display: "flex", gap: 12 }}>
          <div className="card" style={{ flex: 1 }}>
            <h4>SKUs</h4>
            <div>{products.length}</div>
          </div>
          <div className="card" style={{ flex: 1 }}>
            <h4>Total Qty</h4>
            <div>{totalQty}</div>
          </div>
          <div className="card" style={{ flex: 1 }}>
            <h4>Value</h4>
            <div>₹{value}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
