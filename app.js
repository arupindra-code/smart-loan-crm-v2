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
  renderPage("Add Customer", "Customer Module", "home");
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
