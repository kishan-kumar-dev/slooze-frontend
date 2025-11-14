import React, { useEffect, useState } from "react";

export default function ProductForm({ initial, onSave, onCancel }) {
  const [name, setName] = useState("");
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (initial) {
      setName(initial.name);
      setQty(initial.qty);
      setPrice(initial.price);
    } else {
      setName("");
      setQty(0);
      setPrice(0);
    }
  }, [initial]);

  function submit(e) {
    e.preventDefault();
    if (!name) return alert("Name required");
    onSave({ id: initial?.id, name, qty: Number(qty), price: Number(price) });
  }

  return (
    <form
      onSubmit={submit}
      style={{ display: "flex", flexDirection: "column", gap: 8 }}
    >
      <input
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        className="input"
        type="number"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        placeholder="Quantity"
      />
      <input
        className="input"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <div style={{ display: "flex", gap: 8 }}>
        <button className="button" type="submit">
          Save
        </button>
        <button className="button" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
