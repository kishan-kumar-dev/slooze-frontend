---

# ✅ **README.md (Complete & Simple)**

Copy the entire content below.

---

````md
# 🌾 Slooze Front-End Take Home Challenge  
React + Vite | Role-Based Access | Light/Dark Mode | LocalStorage API

This project is a simple **Commodities Management System** built for the Slooze Front-End Challenge.  
Even with zero backend, all required features are implemented using **React + Vite**, **React Router**, and **localStorage**.

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

All challenge requirements are covered.

---

## 👤 Demo Users (for testing)

| Role          | Email                 | Password  |
|---------------|------------------------|-----------|
| **Manager**   | manager@example.com    | password  |
| **StoreKeeper** | store@example.com      | password  |

---

## 🛠️ Tech Stack
- **React** (Vite)
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

* You enter email + password
* Code checks against a predefined user list
* If valid → user saved to localStorage
* App redirects to `/products`

### 2. Role-Based Access

* Manager → can open Dashboard + Products
* StoreKeeper → only Products
* ProtectedRoute component blocks restricted pages

### 3. Data Storage

Products are stored as JSON in:

```
localStorage["slooze_products"]
```

Every action (add/edit/delete) updates this storage.

### 4. Light / Dark Theme

* UI theme value stored in `localStorage["slooze_theme"]`
* CSS variables update instantly

---

## 📸 Screenshots (Optional)

You can add your own:

```
/public/screenshots/login.png
/public/screenshots/products.png
/public/screenshots/dashboard.png
```

Then reference them:

```md
![Login](public/screenshots/login.png)
```

---

## 🧪 Testing (Manual)

1. Login as Manager → check dashboard
2. Add product → verify list updates
3. Edit product → save and confirm changes
4. Delete product → confirm deletion
5. Login as Store Keeper → ensure no dashboard access
6. Try entering `/dashboard` manually → should show "Access Denied"
7. Toggle light/dark mode → refresh page → mode persists

---
