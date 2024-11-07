import { getEnvVariables } from "~/helpers";

const { VITE_HOST_BACKEND } = getEnvVariables();

const verifyInternet = async () => {
  try {
    const response = await fetch("https://google.com");
    if (!response.ok) throw new Error("No Internet Connection");
  } catch (error) {
    throw new Error("Revise su conexión a internet");
  }
};

const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const token = localStorage.getItem("token");
  const headers = new Headers(options.headers);

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return fetch(`${VITE_HOST_BACKEND}/api${url}`, { ...options, headers });
};

export const CoffeApi = {
  async get(path: string, queryParams: Record<string, any> = {}) {
    await verifyInternet();
    const url = new URL(`${VITE_HOST_BACKEND}/api${path}`);
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });

    const response = await fetchWithAuth(url.toString(), { method: "GET" });
    if (!response.ok) throw new Error(`GET request failed with status ${response.status}`);
    return response.json();
  },

  async post(path: string, data: object) {
    await verifyInternet();
    const response = await fetchWithAuth(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`POST request failed with status ${response.status}`);
    return response.json();
  },

  async postFile(path: string, formData: FormData) {
    await verifyInternet();
    const response = await fetchWithAuth(path, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) throw new Error(`POST file request failed with status ${response.status}`);
    return response.json();
  },

  async put(path: string, data: object, queryParams: Record<string, any> = {}) {
    await verifyInternet();
    const url = new URL(`${VITE_HOST_BACKEND}/api${path}`);
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });

    const response = await fetchWithAuth(url.toString(), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`PUT request failed with status ${response.status}`);
    return response.json();
  },

  async delete(path: string) {
    await verifyInternet();
    const response = await fetchWithAuth(path, { method: "DELETE" });
    if (!response.ok) throw new Error(`DELETE request failed with status ${response.status}`);
    return response.json();
  },
};
