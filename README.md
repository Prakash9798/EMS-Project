# 🧑‍💼 Employee Management System (EMS)

A basic Employee Management System built with **React JS** and **Context API**, featuring user **authentication** using a **Mock API**, and a responsive **dashboard UI** with static cards and a hoverable sidebar.

## 🚀 Features

- 🔐 **Authentication System**
  - **Register Page**: New users can register using name, email, and password.
  - **Login Page**: Only users with correct credentials (already registered) can log in.
  - Auth system is implemented using **Mock API** (mockapi.io).

- 🌐 **Routing**
  - Navigations handled with `useNavigate()` from **react-router-dom**.
  - Redirect from login → dashboard, register → login, etc.

- 📄 **Dashboard**
  - After successful login, users are redirected to a dashboard page.
  - Dashboard contains **multiple static cards**:
    - Attendance Card
    - Birthday/Anniversary Card
    - Other info cards
  - Cards are static but designed using **hover effects** and responsive UI.

- 📂 **Sidebar**
  - Sidebar opens on **hover**.
  - Contains navigation items and **Profile** section.

- 👤 **Profile Name Display**
  - Logged-in user’s name (e.g., "Prakash") is dynamically displayed in the sidebar using **Context API**.

- 🔓 **Logout Functionality**
  - Clicking on logout in the sidebar redirects the user to the login page.
  - Clears user session from context.

## 🛠 Tech Stack

- React JS
- Context API (for global state like user session)
- React Router DOM
- Tailwind CSS 
- MockAPI.io (for user data handling)



