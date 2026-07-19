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
async function saveCustomer(customer, photo) {
  await fetch(CONFIG.API_BASE_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify({
      action: "addCustomer",
      customer: customer,
      photo: photo || null
    })
  });

  return {
    success: true,
    message: "Customer Added Successfully ✅"
  };
}

async function getCustomers() {
  const url =
    CONFIG.API_BASE_URL + "?api=listCustomers";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Customer list load failed");
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(
      result.message || "Customer list load failed"
    );
  }

  return result.customers || [];
}

async function getCustomer(rowId) {
  const url =
    CONFIG.API_BASE_URL +
    "?api=getCustomer&rowId=" +
    encodeURIComponent(rowId);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Customer details load failed");
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(
      result.message || "Customer details load failed"
    );
  }

  return result.customer;
}

async function getDeliveryPhoto(fileId) {
  const url =
    CONFIG.API_BASE_URL +
    "?api=getDeliveryPhoto&fileId=" +
    encodeURIComponent(fileId);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Delivery photo load failed");
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(
      result.message || "Delivery photo load failed"
    );
  }

  return result;
}

async function getDeliveryPhoto(fileId) {
  const url =
    CONFIG.API_BASE_URL +
    "?api=getDeliveryPhoto&fileId=" +
    encodeURIComponent(fileId);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Delivery photo load failed");
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(
      result.message || "Delivery photo load failed"
    );
  }

  return result;
}

async function updateCustomer(
  rowId,
  customer,
  photo,
  removePhoto
) {
  await fetch(CONFIG.API_BASE_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify({
      action: "updateCustomer",
      rowId: rowId,
      customer: customer,
      photo: photo || null,
      removePhoto: Boolean(removePhoto)
    })
  });

  return {
    success: true
  };
}

async function getDashboardStats() {
  const url =
    CONFIG.API_BASE_URL +
    "?api=dashboardStats";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      "Dashboard statistics load failed"
    );
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(
      result.message ||
      "Dashboard statistics load failed"
    );
  }

  return result;
}

async function getDashboardStats() {
  const url =
    CONFIG.API_BASE_URL +
    "?api=dashboardStats";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      "Dashboard statistics load failed"
    );
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(
      result.message ||
      "Dashboard statistics load failed"
    );
  }

  return result;
}