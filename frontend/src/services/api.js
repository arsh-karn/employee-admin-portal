const API_BASE = "http://localhost:8080";

export async function login(username, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  return await res.json();
}

export async function fetchEmployees(page = 0) {
  const res = await fetch(`${API_BASE}/employees?page=${page}`);
  return await res.json();
}
