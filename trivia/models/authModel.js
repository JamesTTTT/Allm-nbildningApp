import config from "../config/config.json";
export async function createUser(email, password, username) {
  const response = await fetch(`${config.base_url}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, username }),
  });
  return response.json();
}

export async function loginUser(email, password) {
  const response = await fetch(`${config.base_url}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}

export async function getUserInfo(token) {
  const response = await fetch(`${config.base_url}/auth/details`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}
