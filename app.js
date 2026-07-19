const app = document.getElementById("app");

function renderLogin(){
  app.innerHTML = `
    <div class="app-header">
      <div class="header-small">Smart Loan CRM</div>
      <div class="header-title">Finance CRM for Field Executives</div>
    </div>

    <div class="page">
      <div class="card">
        <h2>Welcome Back</h2>
        <p style="margin-top:8px;color:#64748b;font-weight:600;line-height:1.5;">
          Manage customers, EMI, calls and loan follow-ups from one mobile CRM.
        </p>

        <button class="btn" onclick="Router.navigate('dashboard')">
          Continue to Dashboard
        </button>
      </div>
    </div>
  `;
}

function renderDashboard(){
  app.innerHTML = `
    <div class="app-header">
      <div class="header-small">Good Evening</div>
      <div class="header-title">Smart Loan CRM</div>
    </div>

    <div class="page">
      <div class="stat-grid">

  <div class="stat-card">
    <div
      class="stat-number"
      id="last7DaysLoginCount"
    >
      0
    </div>
    <div class="stat-label">
      Last 7 Days Login
    </div>
  </div>

  <div class="stat-card">
    <div
      class="stat-number"
      id="lastMonthLoginCount"
    >
      0
    </div>
    <div class="stat-label">
      Last Month Login
    </div>
  </div>

  <div class="stat-card">
    <div
      class="stat-number"
      id="last7DaysDisbursementCount"
    >
      0
    </div>
    <div class="stat-label">
      Last 7 Days Disbursement
    </div>
  </div>

  <div class="stat-card">
    <div
      class="stat-number"
      id="lastMonthDisbursementCount"
    >
      0
    </div>
    <div class="stat-label">
      Last Month Disbursement
    </div>
  </div>

</div>


      <div class="quick-actions">
        <div class="action-card" onclick="Router.navigate('add-customer')">
          <div class="action-left"><div class="action-icon">➕</div><div><div class="action-title">Add Customer</div><div class="action-sub">Create new loan customer</div></div></div>
          <div class="arrow">›</div>
        </div>

        <div class="action-card" onclick="Router.navigate('customer-list')">
          <div class="action-left"><div class="action-icon">👥</div><div><div class="action-title">Customer List</div><div class="action-sub">View and manage customers</div></div></div>
          <div class="arrow">›</div>
        </div>

        <div class="action-card" onclick="Router.navigate('emi')">
          <div class="action-left"><div class="action-icon">🧮</div><div><div class="action-title">EMI Calculator</div><div class="action-sub">Calculate finance EMI</div></div></div>
          <div class="arrow">›</div>
        </div>
      </div>
    </div>

    ${bottomNav("home")}
  `;
  loadDashboardStats();
}

async function loadDashboardStats() {
  try {
    const stats = await getDashboardStats();

    setDashboardCount(
      "last7DaysLoginCount",
      stats.last7DaysLogin
    );

    setDashboardCount(
      "lastMonthLoginCount",
      stats.lastMonthLogin
    );

    setDashboardCount(
      "last7DaysDisbursementCount",
      stats.last7DaysDisbursement
    );

    setDashboardCount(
      "lastMonthDisbursementCount",
      stats.lastMonthDisbursement
    );

  } catch (error) {
    console.error(
      "Dashboard statistics error:",
      error
    );
  }
}

function renderPage(title, subtitle, active){
  app.innerHTML = `
    <div class="app-header">
      <div class="header-small">${subtitle}</div>
      <div class="header-title">${title}</div>
    </div>

    <div class="page">
      <div class="card">
        <h2>${title}</h2>
        <p style="margin-top:8px;color:#64748b;font-weight:600;line-height:1.5;">
          This module will be built next.
        </p>

        <button class="btn" onclick="Router.navigate('dashboard')">
          Back to Dashboard
        </button>
      </div>
    </div>

    ${bottomNav(active)}
  `;
}

function renderAddCustomer() {
  app.innerHTML = `
    <div class="app-header">
      <div class="header-small">Customer Module</div>
      <div class="header-title">Add Customer</div>
    </div>

    <div class="page">
      <div class="card add-customer-card">

        <!-- BASIC DETAILS -->
        <div class="form-section open">
          <button
            class="section-toggle"
            type="button"
            onclick="toggleFormSection(this)"
          >
            <span>
              <span class="section-icon">👤</span>
              Basic Details
            </span>
            <span class="section-arrow">⌄</span>
          </button>

          <div class="section-content">
            <input
              class="input"
              id="customerName"
              type="text"
              placeholder="Customer Name"
            >

            <input
              class="input"
              id="mobileNumber"
              type="tel"
              inputmode="numeric"
              maxlength="10"
              placeholder="Mobile Number *"
            >

            <label class="field-label" for="loginDate">
              Login Date
            </label>

            <input
              class="input"
              id="loginDate"
              type="date"
            >

            <label class="field-label" for="disbursementDate">
              Disbursement Date
            </label>

            <input
              class="input"
              id="disbursementDate"
              type="date"
            >
          </div>
        </div>

        <!-- LOAN AND VEHICLE -->
        <div class="form-section">
          <button
            class="section-toggle"
            type="button"
            onclick="toggleFormSection(this)"
          >
            <span>
              <span class="section-icon">🏍️</span>
              Loan & Vehicle
            </span>
            <span class="section-arrow">⌄</span>
          </button>

          <div class="section-content">
            <input
              class="input"
              id="vehicleModel"
              type="text"
              placeholder="Vehicle Model"
            >

            <input
              class="input"
              id="vehicleNumber"
              type="text"
              placeholder="Vehicle Number"
            >

            <input
              class="input"
              id="loginDealer"
              type="text"
              placeholder="Login Dealer"
            >

            <input
              class="input"
              id="disbursementDealer"
              type="text"
              placeholder="Disbursement Dealer"
            >

            <input
              class="input"
              id="finoneId"
              type="text"
              placeholder="FINONE ID / Loan Number"
            >

            <input
              class="input"
              id="lanId"
              type="text"
              placeholder="LAN ID"
            >

            <input
              class="input"
              id="emiAmount"
              type="number"
              inputmode="decimal"
              placeholder="EMI Amount"
            >

            <input
              class="input"
              id="tenure"
              type="number"
              inputmode="numeric"
              placeholder="Tenure in Months"
            >
          </div>
        </div>

        <!-- REFERENCE 1 -->
        <div class="form-section">
          <button
            class="section-toggle"
            type="button"
            onclick="toggleFormSection(this)"
          >
            <span>
              <span class="section-icon">📞</span>
              Reference 1
            </span>
            <span class="section-arrow">⌄</span>
          </button>

          <div class="section-content">
            <input
              class="input"
              id="ref1Name"
              type="text"
              placeholder="Reference 1 Name"
            >

            <input
              class="input"
              id="ref1Mobile"
              type="tel"
              inputmode="numeric"
              maxlength="10"
              placeholder="Reference 1 Mobile"
            >

            <input
              class="input"
              id="ref1Relation"
              type="text"
              placeholder="Reference 1 Relation"
            >
          </div>
        </div>

        <!-- REFERENCE 2 -->
        <div class="form-section">
          <button
            class="section-toggle"
            type="button"
            onclick="toggleFormSection(this)"
          >
            <span>
              <span class="section-icon">📞</span>
              Reference 2
            </span>
            <span class="section-arrow">⌄</span>
          </button>

          <div class="section-content">
            <input
              class="input"
              id="ref2Name"
              type="text"
              placeholder="Reference 2 Name"
            >

            <input
              class="input"
              id="ref2Mobile"
              type="tel"
              inputmode="numeric"
              maxlength="10"
              placeholder="Reference 2 Mobile"
            >

            <input
              class="input"
              id="ref2Relation"
              type="text"
              placeholder="Reference 2 Relation"
            >
          </div>
        </div>

        <!-- NOMINEE 1 -->
        <div class="form-section">
          <button
            class="section-toggle"
            type="button"
            onclick="toggleFormSection(this)"
          >
            <span>
              <span class="section-icon">🧑</span>
              Nominee 1
            </span>
            <span class="section-arrow">⌄</span>
          </button>

          <div class="section-content">
            <input
              class="input"
              id="nom1Name"
              type="text"
              placeholder="Nominee 1 Name"
            >

            <input
              class="input"
              id="nom1Mobile"
              type="tel"
              inputmode="numeric"
              maxlength="10"
              placeholder="Nominee 1 Mobile"
            >

            <input
              class="input"
              id="nom1Relation"
              type="text"
              placeholder="Nominee 1 Relation"
            >
          </div>
        </div>

        <!-- NOMINEE 2 -->
        <div class="form-section">
          <button
            class="section-toggle"
            type="button"
            onclick="toggleFormSection(this)"
          >
            <span>
              <span class="section-icon">🧑</span>
              Nominee 2
            </span>
            <span class="section-arrow">⌄</span>
          </button>

          <div class="section-content">
            <input
              class="input"
              id="nom2Name"
              type="text"
              placeholder="Nominee 2 Name"
            >

            <input
              class="input"
              id="nom2Mobile"
              type="tel"
              inputmode="numeric"
              maxlength="10"
              placeholder="Nominee 2 Mobile"
            >

            <input
              class="input"
              id="nom2Relation"
              type="text"
              placeholder="Nominee 2 Relation"
            >
          </div>
        </div>

        <!-- EXTRA DETAILS -->
        <div class="form-section">
          <button
            class="section-toggle"
            type="button"
            onclick="toggleFormSection(this)"
          >
            <span>
              <span class="section-icon">📝</span>
              Extra Details
            </span>
            <span class="section-arrow">⌄</span>
          </button>

          <div class="section-content">
            <input
              class="input"
              id="extra1"
              type="text"
              placeholder="Extra 1"
            >

            <input
              class="input"
              id="extra2"
              type="text"
              placeholder="Extra 2"
            >

            <input
              class="input"
              id="extra3"
              type="text"
              placeholder="Extra 3"
            >
          </div>
        </div>

<hr style="margin:20px 0">

<div class="delivery-photo-section">
  <div class="delivery-photo-title">
    <span class="delivery-photo-icon">📷</span>

    <div>
      <h3>Upload Delivery Photo</h3>
      <p>Select From Camera or Gallery</p>
    </div>
  </div>

  <input
    type="file"
    id="deliveryPhoto"
    accept="image/jpeg,image/png,image/webp"
    onchange="previewDeliveryPhoto(event)"
    hidden
  >

  <label
    for="deliveryPhoto"
    id="deliveryUploadArea"
    class="delivery-upload-area"
  >
    <div class="upload-camera-icon">📸</div>

    <div class="upload-main-text">
      Tap to Select Photo
    </div>

    <div class="upload-sub-text">
      JPG, PNG or WebP
    </div>
  </label>

  <div
    id="deliveryPreviewBox"
    class="delivery-preview-box"
    style="display:none;"
  >
    <img
      id="deliveryPreview"
      alt="Delivery Photo Preview"
    >

    <div class="delivery-preview-footer">
      <div>
        <div class="preview-success">
          ✅ Photo Selected
        </div>

        <div
          id="photoStatus"
          class="preview-file-name"
        ></div>
      </div>

      <button
        type="button"
        class="remove-photo-btn"
        onclick="removeDeliveryPhoto()"
      >
        ✕ Remove
      </button>
    </div>
  </div>
</div>

        <div class="form-action-area">
          <button
            class="btn"
            type="button"
            onclick="saveCustomerDemo()"
          >
            Save Customer
          </button>

          <button
            class="btn btn-dark"
            type="button"
            onclick="clearAddCustomerForm()"
          >
            Clear Form
          </button>

          <button
            class="btn btn-danger"
            type="button"
            onclick="Router.navigate('dashboard')"
          >
            Back to Dashboard
          </button>
        </div>

      </div>
    </div>

    ${bottomNav("home")}
  `;
}


function toggleFormSection(button) {
  const selectedSection = button.closest(".form-section");

  document.querySelectorAll(".form-section").forEach(function(section) {
    if (section !== selectedSection) {
      section.classList.remove("open");
    }
  });

  selectedSection.classList.toggle("open");
}

async function saveCustomerDemo() {
  const mobile = document
    .getElementById("mobileNumber")
    .value.trim();

  if (!mobile) {
    alert("Mobile Number is required");
    return;
  }

  const customer = {
    customerName: document.getElementById("customerName").value.trim(),
    mobileNumber: mobile,
    loginDate: document.getElementById("loginDate").value,
    disbursementDate: document.getElementById("disbursementDate").value,
    vehicleModel: document.getElementById("vehicleModel").value.trim(),
    vehicleNumber: document.getElementById("vehicleNumber").value.trim(),
    loginDealer: document.getElementById("loginDealer").value.trim(),
    disbursementDealer: document
      .getElementById("disbursementDealer")
      .value.trim(),
    finoneId: document.getElementById("finoneId").value.trim(),
    lanId: document.getElementById("lanId").value.trim(),
    emiAmount: document.getElementById("emiAmount").value.trim(),
    tenure: document.getElementById("tenure").value.trim(),

    ref1Name: document.getElementById("ref1Name").value.trim(),
    ref1Mobile: document.getElementById("ref1Mobile").value.trim(),
    ref1Relation: document.getElementById("ref1Relation").value.trim(),

    ref2Name: document.getElementById("ref2Name").value.trim(),
    ref2Mobile: document.getElementById("ref2Mobile").value.trim(),
    ref2Relation: document.getElementById("ref2Relation").value.trim(),

    nom1Name: document.getElementById("nom1Name").value.trim(),
    nom1Mobile: document.getElementById("nom1Mobile").value.trim(),
    nom1Relation: document.getElementById("nom1Relation").value.trim(),

    nom2Name: document.getElementById("nom2Name").value.trim(),
    nom2Mobile: document.getElementById("nom2Mobile").value.trim(),
    nom2Relation: document.getElementById("nom2Relation").value.trim(),

    extra1: document.getElementById("extra1").value.trim(),
    extra2: document.getElementById("extra2").value.trim(),
    extra3: document.getElementById("extra3").value.trim()
  };

  try {
    const saveButton = event?.target;

    if (saveButton) {
      saveButton.disabled = true;
      saveButton.textContent = "Saving...";
    }
let photoData = null;

if (window.deliveryPhotoData) {
  const vehicleNumber =
    document.getElementById("vehicleNumber").value
      .trim()
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "");

  const mobileNumber =
    document.getElementById("mobileNumber").value.trim();

  const photoFileName =
    (vehicleNumber || mobileNumber || "DELIVERY_PHOTO") +
    "_delivery.jpg";

  photoData = {
    base64: window.deliveryPhotoData.base64,
    mimeType: window.deliveryPhotoData.mimeType,
    fileName: photoFileName
  };
}
    const result = await saveCustomer(customer, photoData);

    alert(result.message || "Customer saved successfully");
    clearAddCustomerForm();

  } catch (error) {
    console.error(error);
    alert("Save failed: " + error.message);

  } finally {
    const saveButton = document.querySelector(
      'button[onclick="saveCustomerDemo()"]'
    );

    if (saveButton) {
      saveButton.disabled = false;
      saveButton.textContent = "Save Customer";
    }
  }
}

async function renderCustomerList() {
  app.innerHTML = `
    <div class="app-header">
      <div class="header-small">Customer Module</div>
      <div class="header-title">Customer List</div>
    </div>

    <div class="page">
      <div class="card customer-list-card">

        <input
          class="input"
          id="customerSearchInput"
          type="search"
          placeholder="Search name, mobile, FINONE or vehicle"
          oninput="filterCustomerList()"
        >

        <div
          id="customerListStatus"
          class="customer-list-status"
        >
          Loading customers...
        </div>

        <div
          id="customerListContainer"
          class="customer-list-container"
        ></div>

      </div>
    </div>

    ${bottomNav("customers")}
  `;

  try {
    const customers = await getCustomers();

    window.customerListData = customers;

    renderCustomerCards(customers);

  } catch (error) {
    console.error(error);

    document.getElementById(
      "customerListStatus"
    ).textContent =
      "Customer list load failed";
  }
}

function renderEmi() {
  app.innerHTML = `
    <div class="app-header">
      <div class="header-small">Finance Tools</div>
      <div class="header-title">EMI Calculator</div>
    </div>

    <div class="page">
      <div class="card premium-emi-card">

        <div class="emi-hero">
          <div class="emi-hero-icon">🧮</div>

          <div>
            <h2>Two-Wheeler EMI</h2>
            <p>Calculate EMI and LTV instantly</p>
          </div>
        </div>

        <div class="emi-form-group">
          <label for="onRoadPrice">On Road Price</label>

          <div class="money-input">
            <span>₹</span>

            <input
              id="onRoadPrice"
              type="number"
              inputmode="decimal"
              placeholder="Enter On Road Price"
            >
          </div>
        </div>

        <div class="emi-form-group">
          <label for="loanAmount">Loan Amount</label>

          <div class="money-input">
            <span>₹</span>

            <input
              id="loanAmount"
              type="number"
              inputmode="decimal"
              placeholder="Enter Loan Amount"
            >
          </div>
        </div>

        <div class="emi-form-group">
          <label for="productType">Select Product</label>

          <select id="productType" class="premium-select">
            <option value="13.9">Commuter — 13.90%</option>
            <option value="13.65">Mid Premium — 13.65%</option>
            <option value="13">Refinance — 13.00%</option>
          </select>
        </div>

        <button
          class="btn emi-calculate-btn"
          type="button"
          onclick="calculateAllEMI()"
        >
          Calculate EMI
        </button>

        <div
          id="resultBox"
          class="premium-result-box"
          style="display:none;"
        >
          <div class="result-top">
            <div>
              <div class="result-small">Loan to Value</div>
              <div id="ltvResult" class="result-ltv">0%</div>
            </div>

            <button
  type="button"
  class="copy-emi-result-btn"
  onclick="copyEmiResults()"
>
  📋 Copy
</button>
          </div>

          <div id="emiTable" class="emi-result-list"></div>
        </div>

        <button
          class="btn btn-dark"
          type="button"
          onclick="clearEmiCalculator()"
        >
          Clear Calculator
        </button>

        <button
          class="btn btn-danger"
          type="button"
          onclick="Router.navigate('dashboard')"
        >
          Back to Dashboard
        </button>

      </div>
    </div>

    ${bottomNav("emi")}
  `;
}

function renderSettings(){
  renderPage("Settings", "App Preferences", "settings");
}
function bottomNav(active){
  return `
    <div class="bottom-nav">
      <div class="nav-item ${active === "home" ? "active" : ""}" onclick="Router.navigate('dashboard')">🏠<br>Home</div>
      <div class="nav-item ${active === "customers" ? "active" : ""}" onclick="Router.navigate('customer-list')">👥<br>Customers</div>
      <div class="nav-item ${active === "emi" ? "active" : ""}" onclick="Router.navigate('emi')">🧮<br>EMI</div>
      <div class="nav-item ${active === "settings" ? "active" : ""}" onclick="Router.navigate('settings')">⚙️<br>Settings</div>
    </div>
  `;
}
function clearAddCustomerForm() {
  document.querySelectorAll(".input").forEach(function(input) {
    input.value = "";
  });
}

function calculateEMI(totalAmount, tenure, interest) {
  var years = tenure / 12;
  var interestTotalPercent = interest * years;
  var basePercent = 100 + interestTotalPercent;

  var multiplyValue = basePercent * totalAmount;
  var payableTotal = multiplyValue / 100;
  var emi = payableTotal / tenure;

  return emi.toFixed(2);
}


function calculateAllEMI() {
  var loanAmount = parseFloat(
    document.getElementById("loanAmount").value
  );

  var onRoadPrice = parseFloat(
    document.getElementById("onRoadPrice").value
  );

  var interestRate = parseFloat(
    document.getElementById("productType").value
  );

  if (
    !loanAmount ||
    loanAmount <= 0 ||
    !onRoadPrice ||
    onRoadPrice <= 0
  ) {
    alert("Please enter valid Loan Amount and On Road Price!");
    return;
  }

  var ltv = (loanAmount / onRoadPrice) * 100;

  document.getElementById("ltvResult").innerText =
    ltv.toFixed(2) + "%";

window.latestEmiCopyData = {
  onRoadPrice: onRoadPrice,
  loanAmount: loanAmount,
  interestRate: interestRate,
  productName:
    document.getElementById("productType")
      .options[
        document.getElementById("productType").selectedIndex
      ].text,
  ltv: ltv,
  results: []
};

  var tenures = [18, 24, 30, 36];

  var emiTable = document.getElementById("emiTable");
  emiTable.innerHTML = "";

  tenures.forEach(function(tenure) {
    var extra =
      tenure === 18 || tenure === 24
        ? 2500
        : 3500;

    var totalAmount = loanAmount + extra;

    var emiValue = calculateEMI(
      totalAmount,
      tenure,
      interestRate
    );
    
    window.latestEmiCopyData.results.push({
  tenure: tenure,
  emi: Number(emiValue)
});

    emiTable.innerHTML += `
      <div class="premium-emi-row">
        <div class="tenure-box">
          <div class="tenure-number">${tenure}</div>
          <div class="tenure-label">Months</div>
        </div>

        <div class="emi-value-box">
          <div class="emi-value-label">Monthly EMI</div>
          <div class="emi-value">
            ₹${Number(emiValue).toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
          </div>
        </div>
      </div>
    `;
  });

  document.getElementById("resultBox").style.display = "block";

  document.getElementById("resultBox").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


function clearEmiCalculator() {
  window.latestEmiCopyData = null;
  document.getElementById("onRoadPrice").value = "";
  document.getElementById("loanAmount").value = "";
  document.getElementById("productType").value = "13.9";

  document.getElementById("ltvResult").innerText = "0%";
  document.getElementById("emiTable").innerHTML = "";
  document.getElementById("resultBox").style.display = "none";
}

function renderCustomerCards(customers) {
  const container = document.getElementById(
    "customerListContainer"
  );

  const status = document.getElementById(
    "customerListStatus"
  );

  if (!container || !status) {
    return;
  }

  if (!customers || customers.length === 0) {
    status.textContent = "No customers found";
    container.innerHTML = "";
    return;
  }

  status.textContent =
    customers.length + " customer found";

  container.innerHTML = customers
    .map(function(customer) {
      return `
        <div class="customer-list-item">
          <div class="customer-list-top">
            <div class="customer-avatar">
              ${getCustomerInitial(
                customer.customerName
              )}
            </div>

            <div class="customer-main-info">
              <div class="customer-list-name">
                ${escapeHtml(
                  customer.customerName ||
                  "Unnamed Customer"
                )}
              </div>

              <div class="customer-list-mobile">
                ${escapeHtml(
                  customer.mobileNumber || "-"
                )}
              </div>
            </div>
          </div>

          <div class="customer-list-meta">
            <div>
              <span>FINONE</span>
              <strong>
                ${escapeHtml(
                  customer.finoneId || "-"
                )}
              </strong>
            </div>

            <div>
              <span>Vehicle</span>
              <strong>
                ${escapeHtml(
                  customer.vehicleNumber ||
                  customer.vehicleModel ||
                  "-"
                )}
              </strong>
            </div>
          </div>

          <button
            class="mini-btn customer-view-btn"
            type="button"
            onclick="openCustomerDetails(${customer.rowId})"
          >
            View Details
          </button>
        </div>
      `;
    })
    .join("");
}


function filterCustomerList() {
  const input = document.getElementById(
    "customerSearchInput"
  );

  const keyword = String(
    input ? input.value : ""
  )
    .trim()
    .toLowerCase();

  const customers =
    window.customerListData || [];

  if (!keyword) {
    renderCustomerCards(customers);
    return;
  }

  const filtered = customers.filter(
    function(customer) {
      return [
        customer.customerName,
        customer.mobileNumber,
        customer.finoneId,
        customer.vehicleNumber,
        customer.vehicleModel,
        customer.loginDealer,
        customer.disbursementDealer
      ].some(function(value) {
        return String(value || "")
          .toLowerCase()
          .includes(keyword);
      });
    }
  );

  renderCustomerCards(filtered);
}


function getCustomerInitial(name) {
  const cleanName = String(name || "").trim();

  return cleanName
    ? cleanName.charAt(0).toUpperCase()
    : "C";
}


function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


async function openCustomerDetails(rowId) {
  window.selectedCustomerRowId = rowId;

  app.innerHTML = `
    <div class="app-header">
      <div class="header-small">Customer Module</div>
      <div class="header-title">Customer Details</div>
    </div>

    <div class="page">
      <div class="card">
        <div id="customerDetailsStatus">
          Loading customer details...
        </div>

        <div
          id="customerDetailsContainer"
          style="display:none;"
        ></div>
      </div>
    </div>

    ${bottomNav("customers")}
  `;

  try {
    const customer = await getCustomer(rowId);

    window.selectedCustomerData = customer;

    renderCustomerDetails(customer);

  } catch (error) {
    console.error(error);

    document.getElementById(
      "customerDetailsStatus"
    ).textContent =
      "Customer details load failed";
  }
}

function renderCustomerDetails(customer) {
  const status = document.getElementById(
    "customerDetailsStatus"
  );

  const container = document.getElementById(
    "customerDetailsContainer"
  );

  if (!container || !status) return;

  status.style.display = "none";
  container.style.display = "block";

  const customerName =
    customer.customerName || "Unnamed Customer";

  const vehicleText =
    customer.vehicleNumber ||
    customer.vehicleModel ||
    "No Vehicle Details";

  container.innerHTML = `
    <div class="premium-profile-card">
      <div class="premium-profile-top">
        <div class="premium-profile-avatar">
          ${getCustomerInitial(customerName)}
        </div>

        <div class="premium-profile-info">
          <div class="premium-profile-name">
            ${escapeHtml(customerName)}
          </div>

          <div class="premium-profile-mobile">
            ${escapeHtml(customer.mobileNumber || "-")}
          </div>

          <div class="premium-profile-vehicle">
            ${escapeHtml(vehicleText)}
          </div>
        </div>
      </div>

      <div class="profile-quick-actions">
        <button
          type="button"
          class="profile-action-btn call-action"
          onclick="callPhoneNumber('${safePhone(customer.mobileNumber)}')"
        >
          <span>📞</span>
          Call
        </button>

        <button
          type="button"
          class="profile-action-btn whatsapp-action"
          onclick="whatsappCustomer()"
        >
          <span>💬</span>
          WhatsApp
        </button>

        <button
          type="button"
          class="profile-action-btn copy-action"
          onclick="copyCustomerDetails()"
        >
          <span>📋</span>
          Copy Details
        </button>
      </div>
    </div>

    ${renderPremiumInfoSection(
      "💰",
      "Loan Information",
      [
        ["FINONE ID", customer.finoneId],
        ["LAN ID", customer.lanId],
        ["EMI Amount", formatMoneyValue(customer.emiAmount)],
        ["Tenure", formatTenureValue(customer.tenure)]
      ]
    )}

    ${renderPremiumInfoSection(
      "🏍️",
      "Vehicle Information",
      [
        ["Vehicle Model", customer.vehicleModel],
        ["Vehicle Number", customer.vehicleNumber],
        ["Login Date", customer.loginDate],
        ["Disbursement Date", customer.disbursementDate],
        ["Login Dealer", customer.loginDealer],
        ["Disbursement Dealer", customer.disbursementDealer]
      ]
    )}

    <div class="contact-section-card">
      <div class="premium-section-heading">
        <div class="premium-section-icon">👥</div>

        <div>
          <div class="premium-section-title">
            References
          </div>
          <div class="premium-section-subtitle">
            Tap call to contact directly
          </div>
        </div>
      </div>

      <div class="contact-card-grid">
        ${renderContactCard(
          "Reference 1",
          customer.ref1Name,
          customer.ref1Mobile,
          customer.ref1Relation,
          "👤"
        )}

        ${renderContactCard(
          "Reference 2",
          customer.ref2Name,
          customer.ref2Mobile,
          customer.ref2Relation,
          "👤"
        )}
      </div>
    </div>

    <div class="contact-section-card">
      <div class="premium-section-heading">
        <div class="premium-section-icon">🧑</div>

        <div>
          <div class="premium-section-title">
            Nominees
          </div>
          <div class="premium-section-subtitle">
            Nominee contact information
          </div>
        </div>
      </div>

      <div class="contact-card-grid">
        ${renderContactCard(
          "Nominee 1",
          customer.nom1Name,
          customer.nom1Mobile,
          customer.nom1Relation,
          "🧑"
        )}

        ${renderContactCard(
          "Nominee 2",
          customer.nom2Name,
          customer.nom2Mobile,
          customer.nom2Relation,
          "🧑"
        )}
      </div>
    </div>

    ${renderPremiumInfoSection(
      "📝",
      "Extra Details",
      [
        ["Extra 1", customer.extra1],
        ["Extra 2", customer.extra2],
        ["Extra 3", customer.extra3]
      ]
    )}

    <div class="details-bottom-actions">
      <button
        class="btn"
        type="button"
        onclick="viewDeliveryPhoto()"
        ${customer.deliveryPhotoId ? "" : "disabled"}
      >
        📷 ${
          customer.deliveryPhotoId
            ? "View Delivery Photo"
            : "No Delivery Photo"
        }
      </button>

      <button
        class="btn btn-dark"
        type="button"
        onclick="editSelectedCustomer()"
      >
        ✏️ Edit Customer
      </button>

      <button
        class="btn btn-danger"
        type="button"
        onclick="Router.navigate('customer-list')"
      >
        Back to Customer List
      </button>
    </div>
  `;
}

function renderPremiumInfoSection(icon, title, rows) {
  const validRows = rows.filter(function(row) {
    return String(row[1] || "").trim() !== "";
  });

  if (validRows.length === 0) {
    return "";
  }

  return `
    <div class="premium-info-card">
      <div class="premium-section-heading">
        <div class="premium-section-icon">
          ${icon}
        </div>

        <div class="premium-section-title">
          ${escapeHtml(title)}
        </div>
      </div>

      <div class="premium-info-grid">
        ${validRows
          .map(function(row) {
            return `
              <div class="premium-info-item">
                <div class="premium-info-label">
                  ${escapeHtml(row[0])}
                </div>

                <div class="premium-info-value">
                  ${escapeHtml(row[1])}
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}


function renderContactCard(
  title,
  name,
  mobile,
  relation,
  icon
) {
  const cleanName = String(name || "").trim();
  const cleanMobile = String(mobile || "").trim();
  const cleanRelation = String(relation || "").trim();

  if (!cleanName && !cleanMobile && !cleanRelation) {
    return "";
  }

  return `
    <div class="premium-contact-card">
      <div class="contact-card-top">
        <div class="contact-avatar">
          ${icon}
        </div>

        <div class="contact-card-info">
          <div class="contact-card-label">
            ${escapeHtml(title)}
          </div>

          <div class="contact-card-name">
            ${escapeHtml(cleanName || "Not Available")}
          </div>

          ${
            cleanRelation
              ? `
                <div class="contact-card-relation">
                  ${escapeHtml(cleanRelation)}
                </div>
              `
              : ""
          }
        </div>
      </div>

      <div class="contact-number-row">
        <span>
          ${escapeHtml(cleanMobile || "No mobile number")}
        </span>

        <button
          type="button"
          class="contact-call-btn"
          onclick="callPhoneNumber('${safePhone(cleanMobile)}')"
          ${cleanMobile ? "" : "disabled"}
        >
          📞 Call
        </button>
      </div>
    </div>
  `;
}


function safePhone(value) {
  return String(value || "").replace(/\D/g, "");
}


function callPhoneNumber(number) {
  const cleanNumber = safePhone(number);

  if (!cleanNumber) {
    alert("Mobile number not available");
    return;
  }

  window.location.href = "tel:" + cleanNumber;
}


function formatMoneyValue(value) {
  const number = Number(value);

  if (!number) {
    return String(value || "");
  }

  return "₹" + number.toLocaleString("en-IN");
}


function formatTenureValue(value) {
  if (!value) {
    return "";
  }

  return String(value) + " Months";
}



function renderDetailsSection(title, rows) {
  const validRows = rows.filter(function(row) {
    return String(row[1] || "").trim() !== "";
  });

  if (validRows.length === 0) {
    return "";
  }

  return `
    <div class="info-section">
      <div class="info-title">
        ${escapeHtml(title)}
      </div>

      ${validRows
        .map(function(row) {
          return `
            <div class="info-row">
              <span>${escapeHtml(row[0])}</span>
              <b>${escapeHtml(row[1])}</b>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function callCustomer() {
  const customer = window.selectedCustomerData;

  if (!customer || !customer.mobileNumber) {
    alert("Customer mobile number not available");
    return;
  }

  window.location.href =
    "tel:" + customer.mobileNumber;
}


function whatsappCustomer() {
  const customer = window.selectedCustomerData;

  if (!customer || !customer.mobileNumber) {
    alert("Customer mobile number not available");
    return;
  }

  let number = String(customer.mobileNumber)
    .replace(/\D/g, "");

  if (number.length === 10) {
    number = "91" + number;
  }

  window.open(
    "https://wa.me/" + number,
    "_blank"
  );
}

async function viewDeliveryPhoto() {
  const customer = window.selectedCustomerData;

  if (!customer || !customer.deliveryPhotoId) {
    alert("No delivery photo available");
    return;
  }

  showPhotoLoadingModal();

  try {
    const photo = await getDeliveryPhoto(
      customer.deliveryPhotoId
    );

    showDeliveryPhotoModal(photo);

  } catch (error) {
    console.error(error);
    closeDeliveryPhotoModal();

    alert(
      error.message ||
      "Delivery photo load failed"
    );
  }
}

function showPhotoLoadingModal() {
  closeDeliveryPhotoModal();

  const modal = document.createElement("div");
  modal.id = "deliveryPhotoModal";
  modal.className = "photo-modal-overlay";

  modal.innerHTML = `
    <div class="photo-modal-card loading-photo-card">
      <div class="photo-loading-spinner"></div>
      <div class="photo-loading-text">
        Loading delivery photo...
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}


function showDeliveryPhotoModal(photo) {
  const modal = document.getElementById(
    "deliveryPhotoModal"
  );

  if (!modal) return;

  const imageSource =
    "data:" +
    (photo.mimeType || "image/jpeg") +
    ";base64," +
    photo.base64;

  modal.innerHTML = `
    <div class="photo-modal-card">
      <div class="photo-modal-header">
        <div>
          <div class="photo-modal-title">
            Delivery Photo
          </div>

          <div class="photo-modal-file-name">
            ${escapeHtml(
              photo.fileName || "Delivery Photo"
            )}
          </div>
        </div>

        <button
          type="button"
          class="photo-modal-close"
          onclick="closeDeliveryPhotoModal()"
        >
          ✕
        </button>
      </div>

      <div class="photo-modal-image-wrap">
        <img
          src="${imageSource}"
          alt="Delivery Photo"
          class="photo-modal-image"
        >
      </div>

      <button
        type="button"
        class="btn btn-dark"
        onclick="closeDeliveryPhotoModal()"
      >
        Close Photo
      </button>
    </div>
  `;
}


function closeDeliveryPhotoModal() {
  const modal = document.getElementById(
    "deliveryPhotoModal"
  );

  if (modal) {
    modal.remove();
  }
}

function editSelectedCustomer() {
  const customer = window.selectedCustomerData;

  if (!customer) {
    alert("Customer data not available");
    return;
  }

  window.deliveryPhotoData = null;
  window.editRemovePhoto = false;

  // একই Add Customer form ব্যবহার করছি
  renderAddCustomer();

  document.querySelector(".header-title").textContent =
    "Edit Customer";

  const buttons = document.querySelectorAll(
    ".form-action-area .btn"
  );

  buttons[0].textContent = "Update Customer";
  buttons[0].setAttribute(
    "onclick",
    "updateSelectedCustomer()"
  );

  buttons[1].textContent = "Reset Changes";
  buttons[1].setAttribute(
    "onclick",
    "fillEditCustomerForm()"
  );

  buttons[2].textContent = "Back to Details";
  buttons[2].setAttribute(
    "onclick",
    `openCustomerDetails(${customer.rowId})`
  );

  const photoTitle = document.querySelector(
    ".delivery-photo-title h3"
  );

  if (photoTitle) {
    photoTitle.textContent = "Change Delivery Photo";
  }

  fillEditCustomerForm();
  showExistingPhotoOptions();
}

function fillEditCustomerForm() {
  const customer = window.selectedCustomerData;

  if (!customer) return;

  const values = {
    customerName: customer.customerName,
    mobileNumber: customer.mobileNumber,
    loginDate: customer.loginDate,
    disbursementDate: customer.disbursementDate,

    vehicleModel: customer.vehicleModel,
    vehicleNumber: customer.vehicleNumber,
    loginDealer: customer.loginDealer,
    disbursementDealer: customer.disbursementDealer,
    finoneId: customer.finoneId,
    lanId: customer.lanId,
    emiAmount: customer.emiAmount,
    tenure: customer.tenure,

    ref1Name: customer.ref1Name,
    ref1Mobile: customer.ref1Mobile,
    ref1Relation: customer.ref1Relation,

    ref2Name: customer.ref2Name,
    ref2Mobile: customer.ref2Mobile,
    ref2Relation: customer.ref2Relation,

    nom1Name: customer.nom1Name,
    nom1Mobile: customer.nom1Mobile,
    nom1Relation: customer.nom1Relation,

    nom2Name: customer.nom2Name,
    nom2Mobile: customer.nom2Mobile,
    nom2Relation: customer.nom2Relation,

    extra1: customer.extra1,
    extra2: customer.extra2,
    extra3: customer.extra3
  };

  Object.keys(values).forEach(function(id) {
    const field = document.getElementById(id);

    if (field) {
      field.value = values[id] || "";
    }
  });

  window.deliveryPhotoData = null;
  window.editRemovePhoto = false;

  removeDeliveryPhoto();
  showExistingPhotoOptions();
}

function showExistingPhotoOptions() {
  const customer = window.selectedCustomerData;
  const section = document.querySelector(
    ".delivery-photo-section"
  );

  if (!customer || !section) return;

  const oldBox = document.getElementById(
    "existingPhotoActions"
  );

  if (oldBox) {
    oldBox.remove();
  }

  if (!customer.deliveryPhotoId) {
    return;
  }

  const box = document.createElement("div");
  box.id = "existingPhotoActions";
  box.className = "existing-photo-actions";

  box.innerHTML = `
    <div class="existing-photo-text">
      ✅ Current delivery photo available
    </div>

    <div class="existing-photo-buttons">
      <button
        type="button"
        class="existing-photo-view"
        onclick="viewDeliveryPhoto()"
      >
        📷 View Current
      </button>

      <button
        type="button"
        class="existing-photo-remove"
        onclick="removeExistingDeliveryPhoto()"
      >
        🗑 Remove Current
      </button>
    </div>
  `;

  section.insertBefore(
    box,
    document.getElementById("deliveryPhoto")
  );
}

function removeExistingDeliveryPhoto() {
  const confirmed = confirm(
    "Current delivery photo remove করবেন?"
  );

  if (!confirmed) return;

  window.editRemovePhoto = true;

  const box = document.getElementById(
    "existingPhotoActions"
  );

  if (box) {
    box.innerHTML = `
      <div class="photo-remove-warning">
        Current photo will be removed after Update Customer.
      </div>
    `;
  }
}

async function updateSelectedCustomer() {
  const oldCustomer = window.selectedCustomerData;

  if (!oldCustomer || !oldCustomer.rowId) {
    alert("Customer row not found");
    return;
  }

  const getValue = function(id) {
    const field = document.getElementById(id);
    return field ? field.value.trim() : "";
  };

  const customer = {
    customerName: getValue("customerName"),
    mobileNumber: getValue("mobileNumber"),
    loginDate: getValue("loginDate"),
    disbursementDate: getValue("disbursementDate"),

    vehicleModel: getValue("vehicleModel"),
    vehicleNumber: getValue("vehicleNumber"),
    loginDealer: getValue("loginDealer"),
    disbursementDealer: getValue("disbursementDealer"),
    finoneId: getValue("finoneId"),
    lanId: getValue("lanId"),
    emiAmount: getValue("emiAmount"),
    tenure: getValue("tenure"),

    ref1Name: getValue("ref1Name"),
    ref1Mobile: getValue("ref1Mobile"),
    ref1Relation: getValue("ref1Relation"),

    ref2Name: getValue("ref2Name"),
    ref2Mobile: getValue("ref2Mobile"),
    ref2Relation: getValue("ref2Relation"),

    nom1Name: getValue("nom1Name"),
    nom1Mobile: getValue("nom1Mobile"),
    nom1Relation: getValue("nom1Relation"),

    nom2Name: getValue("nom2Name"),
    nom2Mobile: getValue("nom2Mobile"),
    nom2Relation: getValue("nom2Relation"),

    extra1: getValue("extra1"),
    extra2: getValue("extra2"),
    extra3: getValue("extra3")
  };

  if (!customer.mobileNumber) {
    alert("Mobile Number is required");
    return;
  }

  let photoData = null;

  if (window.deliveryPhotoData) {
    const cleanVehicleNumber =
      customer.vehicleNumber
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "");

    const fileName =
      (
        cleanVehicleNumber ||
        customer.mobileNumber ||
        "DELIVERY_PHOTO"
      ) + "_delivery.jpg";

    photoData = {
      base64: window.deliveryPhotoData.base64,
      mimeType: window.deliveryPhotoData.mimeType,
      fileName: fileName
    };
  }

  const updateButton = document.querySelector(
    ".form-action-area .btn"
  );

  try {
    if (updateButton) {
      updateButton.disabled = true;
      updateButton.textContent = "Updating...";
    }

    await updateCustomer(
      oldCustomer.rowId,
      customer,
      photoData,
      window.editRemovePhoto
    );

    alert("Customer Updated Successfully ✅");

    setTimeout(function() {
      openCustomerDetails(oldCustomer.rowId);
    }, 1000);

  } catch (error) {
    console.error(error);

    alert(
      "Update failed: " +
      (error.message || "Unknown error")
    );

    if (updateButton) {
      updateButton.disabled = false;
      updateButton.textContent = "Update Customer";
    }
  }
}

async function copyEmiResults() {
  const data = window.latestEmiCopyData;

  if (
    !data ||
    !data.results ||
    data.results.length === 0
  ) {
    alert("Please calculate EMI first");
    return;
  }

  const formatAmount = function(value) {
    return Number(value || 0).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const resultLines = data.results.map(function(item) {
    return (
      item.tenure +
      " Months - ₹" +
      formatAmount(item.emi)
    );
  });

 const copyText = [
  "━━━━━━━━━━━━━━",
  "",
  resultLines.join("\n"),
  "",
  "━━━━━━━━━━━━━━"
].join("\n");

  try {
    await navigator.clipboard.writeText(copyText);

    alert("EMI Results Copied ✅");

  } catch (error) {
    const textarea = document.createElement("textarea");

    textarea.value = copyText;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";

    document.body.appendChild(textarea);
    textarea.select();

    document.execCommand("copy");
    textarea.remove();

    alert("EMI Results Copied ✅");
  }
}

Router.register("login", renderLogin);
Router.register("dashboard", renderDashboard);
Router.register("add-customer", renderAddCustomer);
Router.register("customer-list", renderCustomerList);
Router.register("emi", renderEmi);
Router.register("settings", renderSettings);

Router.navigate("login");


function toggleFormSection(button) {
  const section = button.closest(".form-section");
  section.classList.toggle("open");
}

window.deliveryPhotoData = null;

async function previewDeliveryPhoto(event) {
  const file = event.target.files[0];

  if (!file) return;

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp"
  ];

  if (!allowedTypes.includes(file.type)) {
    alert("Please select a JPG, PNG or WebP image");
    event.target.value = "";
    return;
  }

  try {
    const compressedPhoto = await compressDeliveryPhoto(file);

    window.deliveryPhotoData = compressedPhoto;

    const preview = document.getElementById("deliveryPreview");
    const previewBox = document.getElementById("deliveryPreviewBox");
    const uploadArea = document.getElementById("deliveryUploadArea");
    const photoStatus = document.getElementById("photoStatus");

    preview.src =
      "data:" +
      compressedPhoto.mimeType +
      ";base64," +
      compressedPhoto.base64;

    const originalKB = Math.round(file.size / 1024);
    const compressedKB = Math.round(
      compressedPhoto.size / 1024
    );

    photoStatus.textContent =
      originalKB +
      " KB → " +
      compressedKB +
      " KB";

    previewBox.style.display = "block";
    uploadArea.style.display = "none";

  } catch (error) {
    alert("Photo processing failed: " + error.message);
    event.target.value = "";
  }
}

function compressDeliveryPhoto(file) {
  return new Promise(function(resolve, reject) {
    const reader = new FileReader();

    reader.onload = function(readerEvent) {
      const image = new Image();

      image.onload = function() {
        const maxWidth = 1280;
        const maxHeight = 1280;

        let width = image.width;
        let height = image.height;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(
            maxWidth / width,
            maxHeight / height
          );

          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const context = canvas.getContext("2d");

        context.drawImage(
          image,
          0,
          0,
          width,
          height
        );

        const mimeType = "image/jpeg";
        const quality = 0.72;

        const dataUrl = canvas.toDataURL(
          mimeType,
          quality
        );

        const base64 = dataUrl.split(",")[1];

        const compressedSize = Math.round(
          (base64.length * 3) / 4
        );

        resolve({
          base64: base64,
          mimeType: mimeType,
          size: compressedSize
        });
      };

      image.onerror = function() {
        reject(new Error("Invalid image file"));
      };

      image.src = readerEvent.target.result;
    };

    reader.onerror = function() {
      reject(new Error("Unable to read image"));
    };

    reader.readAsDataURL(file);
  });
}

function removeDeliveryPhoto() {
  window.deliveryPhotoData = null;
  const photoInput = document.getElementById("deliveryPhoto");
  const preview = document.getElementById("deliveryPreview");
  const previewBox = document.getElementById("deliveryPreviewBox");
  const uploadArea = document.getElementById("deliveryUploadArea");
  const photoStatus = document.getElementById("photoStatus");

  if (photoInput) {
    photoInput.value = "";
  }

  if (preview) {
    preview.src = "";
  }

  if (photoStatus) {
    photoStatus.textContent = "";
  }

  if (previewBox) {
    previewBox.style.display = "none";
  }

  if (uploadArea) {
    uploadArea.style.display = "flex";
  }
}

async function copyCustomerDetails() {
  const customer = window.selectedCustomerData;

  if (!customer) {
    alert("Customer details not available");
    return;
  }

  const lines = [
    "🛵 SMART LOAN CRM",
    "",
    "👤 Customer",
    customer.customerName || "NA",
    "",
    "📞 Mobile",
    customer.mobileNumber || "NA",
    "",
    "🏍 Vehicle",
    customer.vehicleModel || "NA",
    "",
    "🔢 Vehicle No",
    customer.vehicleNumber || "NA",
    "",
    "💰 EMI",
    customer.emiAmount
      ? "₹" + customer.emiAmount
      : "NA",
    "",
    "📅 Tenure",
    customer.tenure
      ? customer.tenure + " Months"
      : "NA",
    "",
    "━━━━━━━━━━━━━━",
    "",
    "👥 Reference 1",
    customer.ref1Name || "NA",
    "📞 " + (customer.ref1Mobile || "NA"),
    "",
    "👥 Reference 2",
    customer.ref2Name || "NA",
    "📞 " + (customer.ref2Mobile || "NA"),
    "",
    "━━━━━━━━━━━━━━",
    "",
    "🧑 Nominee 1",
    customer.nom1Name || "NA",
    "📞 " + (customer.nom1Mobile || "NA"),
    "",
    "🧑 Nominee 2",
    customer.nom2Name || "NA",
    "📞 " + (customer.nom2Mobile || "NA")
  ];

  const copyText = lines.join("\n");

  try {
    await navigator.clipboard.writeText(copyText);

    alert("Customer Details Copied ✅");

  } catch (error) {
    const textarea =
      document.createElement("textarea");

    textarea.value = copyText;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";

    document.body.appendChild(textarea);
    textarea.select();

    document.execCommand("copy");
    textarea.remove();

    alert("Customer Details Copied ✅");
  }
}



function setDashboardCount(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = Number(value) || 0;
  }
}