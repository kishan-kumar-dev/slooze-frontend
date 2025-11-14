const KEY = "slooze_products";

function seed() {
  if (localStorage.getItem(KEY)) return;
  const sample = [
    { id: "p1", name: "Wheat", qty: 120, price: 20 },
    { id: "p2", name: "Corn", qty: 80, price: 15 },
  ];
  localStorage.setItem(KEY, JSON.stringify(sample));
}

export async function fetchProducts() {
  seed();
  await new Promise((r) => setTimeout(r, 150));
  return JSON.parse(localStorage.getItem(KEY) || "[]");
}

export async function saveProduct(p) {
  seed();
  const items = JSON.parse(localStorage.getItem(KEY) || "[]");
  if (p.id) {
    const i = items.findIndex((x) => x.id === p.id);
    if (i >= 0) items[i] = p;
    else items.push(p);
  } else {
    p.id = "p" + Math.random().toString(36).slice(2, 8);
    items.push(p);
  }
  localStorage.setItem(KEY, JSON.stringify(items));
  await new Promise((r) => setTimeout(r, 100));
  return p;
}

export async function deleteProduct(id) {
  const items = JSON.parse(localStorage.getItem(KEY) || "[]").filter(
    (x) => x.id !== id
  );
  localStorage.setItem(KEY, JSON.stringify(items));
  await new Promise((r) => setTimeout(r, 80));
  return true;
}
