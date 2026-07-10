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
        <div class="stat-card"><div class="stat-number">0</div><div class="stat-label">Today Login</div></div>
        <div class="stat-card"><div class="stat-number">0</div><div class="stat-label">Active Customers</div></div>
        <div class="stat-card"><div class="stat-number">0</div><div class="stat-label">Disbursement</div></div>
        <div class="stat-card"><div class="stat-number">0</div><div class="stat-label">Trash</div></div>
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

    const result = await saveCustomer(customer);

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

function renderCustomerList(){
  renderPage("Customer List", "Customer Module", "customers");
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

            <div class="result-badge">EMI Results</div>
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
  document.getElementById("onRoadPrice").value = "";
  document.getElementById("loanAmount").value = "";
  document.getElementById("productType").value = "13.9";

  document.getElementById("ltvResult").innerText = "0%";
  document.getElementById("emiTable").innerHTML = "";
  document.getElementById("resultBox").style.display = "none";
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