const USERS = [
  { email: "manager@example.com", password: "password", role: "Manager" },
  { email: "store@example.com", password: "password", role: "StoreKeeper" },
];

export async function login({ email, password }) {
  await new Promise((r) => setTimeout(r, 200));
  const u = USERS.find((x) => x.email === email && x.password === password);
  if (!u) throw new Error("Invalid credentials");
  const token = btoa(email + "|" + Date.now());
  const payload = { token, email: u.email, role: u.role };
  localStorage.setItem("slooze_auth", JSON.stringify(payload));
  return payload;
}
export function logout() {
  localStorage.removeItem("slooze_auth");
}
export function getAuth() {
  try {
    return JSON.parse(localStorage.getItem("slooze_auth"));
  } catch {
    return null;
  }
}
export function isAuthenticated() {
  return !!getAuth();
}
export function getRole() {
  return getAuth()?.role;
}
