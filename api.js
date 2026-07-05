const app = document.getElementById("app");

function renderLogin(){
  app.innerHTML = `
    <div class="app-header">
      <div class="header-small">Welcome to</div>
      <div class="header-title">Smart Loan CRM</div>
    </div>

    <div class="page">
      <div class="card">
        <h2>Sign in</h2>
        <p style="margin-top:8px;color:#64748b;font-weight:600;">
          Continue to manage your loan customers.
        </p>

        <button class="btn" onclick="renderDashboard()">
          Continue Demo
        </button>
      </div>
    </div>
  `;
}

function renderDashboard(){
  app.innerHTML = `
    <div class="app-header">
      <div class="header-small">Dashboard</div>
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
      </div>

      <div class="card">
        <button class="btn">➕ Add Customer</button>
        <button class="btn btn-dark">📋 Customer List</button>
        <button class="btn btn-success">🧮 EMI Calculator</button>
      </div>
    </div>

    <div class="bottom-nav">
      <div class="nav-item active">🏠<br>Home</div>
      <div class="nav-item">👥<br>Customers</div>
      <div class="nav-item">🧮<br>EMI</div>
      <div class="nav-item">⚙️<br>Settings</div>
    </div>
  `;
}

renderLogin();
