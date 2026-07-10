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

function renderAddCustomer(){
  app.innerHTML = `
    <div class="app-header">
      <div class="header-small">Customer Module</div>
      <div class="header-title">Add Customer</div>
    </div>

    <div class="page">
      <div class="card">
        <h2>Add Customer</h2>

        <input class="input" id="customerName" placeholder="Customer Name">
        <input class="input" id="mobileNumber" placeholder="Mobile Number *">
        <input class="input" id="loginDate" type="date">
        <input class="input" id="disbursementDate" type="date">

        <input class="input" id="vehicleModel" placeholder="Vehicle Model">
        <input class="input" id="vehicleNumber" placeholder="Vehicle Number">

        <input class="input" id="loginDealer" placeholder="Login Dealer">
        <input class="input" id="disbursementDealer" placeholder="Disbursement Dealer">

        <input class="input" id="finoneId" placeholder="FINONE ID / Loan Number">
        <input class="input" id="lanId" placeholder="LAN ID">

        <input class="input" id="emiAmount" placeholder="EMI Amount">
        <input class="input" id="tenure" placeholder="Tenure">

        <h3 style="margin-top:18px;">Reference Details</h3>

        <input class="input" id="ref1Name" placeholder="Ref 1 Name">
        <input class="input" id="ref1Mobile" placeholder="Ref 1 Mobile">
        <input class="input" id="ref1Relation" placeholder="Ref 1 Relation">

        <input class="input" id="ref2Name" placeholder="Ref 2 Name">
        <input class="input" id="ref2Mobile" placeholder="Ref 2 Mobile">
        <input class="input" id="ref2Relation" placeholder="Ref 2 Relation">

        <h3 style="margin-top:18px;">Nominee Details</h3>

        <input class="input" id="nom1Name" placeholder="Nominee 1 Name">
        <input class="input" id="nom1Mobile" placeholder="Nominee 1 Mobile">
        <input class="input" id="nom1Relation" placeholder="Nominee 1 Relation">

        <input class="input" id="nom2Name" placeholder="Nominee 2 Name">
        <input class="input" id="nom2Mobile" placeholder="Nominee 2 Mobile">
        <input class="input" id="nom2Relation" placeholder="Nominee 2 Relation">

        <h3 style="margin-top:18px;">Extra Fields</h3>

        <input class="input" id="extra1" placeholder="Extra 1">
        <input class="input" id="extra2" placeholder="Extra 2">
        <input class="input" id="extra3" placeholder="Extra 3">

        <button class="btn" onclick="saveCustomerDemo()">Save Customer</button>
        <button class="btn btn-dark" onclick="clearAddCustomerForm()">Clear Form</button>
        <button class="btn btn-danger" onclick="Router.navigate('dashboard')">Back to Dashboard</button>
      </div>
    </div>

    ${bottomNav("home")}
  `;
}

function saveCustomerDemo(){
  const mobile = document.getElementById("mobileNumber").value.trim();

  if(!mobile){
    alert("Mobile Number is required");
    return;
  }

  alert("Customer form ready. Google Sheet save will be connected next.");
}

function clearAddCustomerForm(){
  document.querySelectorAll(".input").forEach(input => input.value = "");
}

function renderCustomerList(){
  renderPage("Customer List", "Customer Module", "customers");
}

function renderEmi(){
  renderPage("EMI Calculator", "Finance Module", "emi");
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

Router.register("login", renderLogin);
Router.register("dashboard", renderDashboard);
Router.register("add-customer", renderAddCustomer);
Router.register("customer-list", renderCustomerList);
Router.register("emi", renderEmi);
Router.register("settings", renderSettings);

Router.navigate("login");
