const CONFIG = {
  API_BASE_URL: "https://script.google.com/macros/s/AKfycbxsYmChujJNiSx7f3noJDwguEghlzTrthd-kF95hXn1XPtPotzpBRWysvdKsndFBXhC/exec"
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
async function saveCustomer(customer) {

  const response = await fetch(CONFIG.API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      action: "addCustomer",
      customer: customer
    })
  });

  return await response.json();
}