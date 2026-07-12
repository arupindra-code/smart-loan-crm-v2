const CONFIG = {
  API_BASE_URL: "https://script.google.com/macros/s/AKfycbzji6oG00RZNTlLUOZhBX9sNgvwcxo9thPAKngknA8elqjPphdyEl-Ks3mZk8wzC3VS/exec"
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
  await fetch(CONFIG.API_BASE_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify({
      action: "addCustomer",
      customer: customer
    })
  });

return {
  success: true,
  message: "Customer Added Successfully ✅"
};
}