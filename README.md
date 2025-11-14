````md
# 🌾 Slooze Front-End Take Home Challenge  
React + Vite | Role-Based Access | Light/Dark Mode | LocalStorage API

This project is a simple **Commodities Management System** built for the Slooze Front-End Challenge.  
Even with zero backend, all required features are implemented using **React + Vite**, **React Router**, and **localStorage**.

---

## 🔗 Live Demo  
**https://slooze-frontend-eight.vercel.app**

---

## 🚀 Features Completed

### ✅ Authentication
- Login using email + password  
- Mock users stored in code  
- Session stored in `localStorage`  
- Role-based access: **Manager** / **Store Keeper**

### ✅ Core Features
#### **Product Module**
- View all products (Manager + Store Keeper)
- Add new product  
- Edit product  
- Delete product  
- LocalStorage used as the database  
- Simple & clean UI

#### **Dashboard (Manager Only)**
- Total SKUs
- Total Quantity
- Total Inventory Value
- Route protected for Manager only

### ✅ UI Enhancements
- Light / Dark mode toggle  
- Modern card-based layout  
- Clean typography and spacing  
- Responsive UI

### ✅ Bonus — Role-Based Menu Restriction
- Dashboard visible only for Manager  
- Store Keeper is blocked from Manager-only routes  
- Buttons & navigation controlled by role  

All challenge requirements are fully covered ✔️

---

## 👤 Demo Users (for testing)

| Role            | Email               | Password |
|-----------------|---------------------|----------|
| **Manager**     | manager@example.com | password |
| **StoreKeeper** | store@example.com   | password |

---

## 🛠️ Tech Stack
- **React (Vite)**
- **React Router**
- **LocalStorage** (mock API + auth)
- **CSS (custom, lightweight)**

---

## 📦 Installation

Clone the project:

```bash
git clone <your-repo-url>
cd slooze-frontend
````

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Your app will be available at:

```
http://localhost:5173
```

---

## 📁 Folder Structure

```
src/
│── components/
│     ├── Nav.jsx
│     ├── ProtectedRoute.jsx
│     └── ThemeToggle.jsx
│
│── lib/
│     ├── auth.js   (login + session handling)
│     └── api.js    (product CRUD)
│
│── pages/
│     ├── Login.jsx
│     ├── Products.jsx
│     ├── ProductForm.jsx
│     └── Dashboard.jsx
│
│── App.jsx
│── main.jsx
│── styles.css
```

---

## 🧠 How It Works (Simple Explanation)

### 1. Login

* User enters email + password
* Credentials checked against predefined list
* If valid → user saved in localStorage
* App redirects to `/products`

### 2. Role-Based Access

* **Manager** → access Dashboard + Products
* **StoreKeeper** → Products only
* `ProtectedRoute` component restricts pages based on role

### 3. Data Storage

Products stored in:

```
localStorage["slooze_products"]
```

Every action (add / edit / delete) updates this JSON list.

### 4. Light / Dark Theme

* Theme saved in `localStorage["slooze_theme"]`
* CSS variables update instantly
* Works across all pages

---

## 📸 Screenshots (Optional)

You can add images inside `/public/screenshots/`:

```
/public/screenshots/login.png
/public/screenshots/products.png
/public/screenshots/dashboard.png
```

Then reference them like:

```md
![Login](public/screenshots/login.png)
![Products](public/screenshots/products.png)
![Dashboard](public/screenshots/dashboard.png)
```

---

## 📤 Deployment

This project is deployed on **Vercel**.

To deploy your own version:

```bash
npm run build
```

Then connect your GitHub repo to Vercel, select **Vite**, and click **Deploy**.

---

## 🤝 Author

**Kishan Kumar**
GitHub: [https://github.com/kishan-kumar-dev](https://github.com/kishan-kumar-dev)
Live Demo: [https://slooze-frontend-eight.vercel.app](https://slooze-frontend-eight.vercel.app)

---

```