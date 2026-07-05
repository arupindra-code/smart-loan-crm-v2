const CONFIG = {
  API_BASE_URL: ""
};

async function apiGet(endpoint, params = {}) {
  if (!CONFIG.API_BASE_URL) {
    throw new Error("API URL not configured.");
  }

  const url = new URL(CONFIG.API_BASE_URL);

  url.searchParams.set("api", endpoint);

  Object.keys(params).forEach(key => {
    url.searchParams.set(key, params[key]);
  });

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return await response.json();
}
