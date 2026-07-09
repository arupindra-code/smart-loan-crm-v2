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
          <div class="stat-number">0</div>
          <div class="stat-label">Today Login</div>
        </div>

        <div class="stat-card">
          <div class="stat-number">0</div>
          <div class="stat-label">Active Customers</div>
        </div>

        <div class="stat-card">
          <div class="stat-number">0</div>
          <div class="stat-label">Disbursement</div>
        </div>

        <div class="stat-card">
          <div class="stat-number">0</div>
          <div class="stat-label">Trash</div>
        </div>
      </div>

      <div class="quick-actions">

        <div class="action-card">
          <div class="action-left">
            <div class="action-icon">➕</div>
            <div>
              <div class="action-title">Add Customer</div>
              <div class="action-sub">Create new loan customer</div>
            </div>
          </div>
          <div class="arrow">›</div>
        </div>

        <div class="action-card">
          <div class="action-left">
            <div class="action-icon">👥</div>
            <div>
              <div class="action-title">Customer List</div>
              <div class="action-sub">View and manage customers</div>
            </div>
          </div>
          <div class="arrow">›</div>
        </div>

        <div class="action-card">
          <div class="action-left">
            <div class="action-icon">🧮</div>
            <div>
              <div class="action-title">EMI Calculator</div>
              <div class="action-sub">Calculate finance EMI</div>
            </div>
          </div>
          <div class="arrow">›</div>
        </div>

      </div>

    </div>

    ${bottomNav("home")}
  `;
}

function bottomNav(active){
  return `
    <div class="bottom-nav">
      <div class="nav-item ${active === "home" ? "active" : ""}" onclick="renderDashboard()">🏠<br>Home</div>
      <div class="nav-item ${active === "customers" ? "active" : ""}">👥<br>Customers</div>
      <div class="nav-item ${active === "emi" ? "active" : ""}">🧮<br>EMI</div>
      <div class="nav-item ${active === "settings" ? "active" : ""}">⚙️<br>Settings</div>
    </div>
  `;
}

Router.register("login", renderLogin);
Router.register("dashboard", renderDashboard);

Router.navigate("login");