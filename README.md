# 🌍 World Explorer

World Explorer is a Next.js App Router project that allows users to explore countries around the world using real REST Countries API data.

Users can view country details, search countries, and navigate through dynamic pages.

---

## 🚀 Project Idea

Build a Country Explorer Website where users can:

- Explore countries
- View detailed information about each country
- Search and filter countries
- Navigate dynamic routes

---

## 🎯 Project Goals

This project demonstrates understanding of:

- Next.js App Router
- File-based routing
- Server & Client Components
- Dynamic routes
- Shared layouts
- Data fetching with async/await
- Static and dynamic rendering
- Caching in Next.js

---

## 🌐 API Used

### All Countries
https://restcountries.com/v3.1/all

### Single Country
https://restcountries.com/v3.1/alpha/AFG

---

## 📄 Pages

---

### 🏠 Home Page (/)

Features:
- Website title
- Hero section
- Welcome message
- Navigation links
- Button to explore countries

Example text:

Explore countries around the world and learn about their flags, capitals, populations, currencies, and languages.

---

### 🌍 Countries Page (/countries)

Features:
- Fetch countries from API
- Show at least 20 countries
- Display:
  - Flag
  - Name
  - Capital
  - Region
  - Population
- Link to details page

Example route:
✔ Server Component  
✔ Cached data fetching  

---

### 🧾 Country Details Page (/countries/[code])

Features:
- Dynamic route using country code
- Fetch single country data
- Display:

✔ Flag  
✔ Name  
✔ Official Name  
✔ Capital  
✔ Region  
✔ Subregion  
✔ Population  
✔ Languages  
✔ Currencies  
✔ Time zones  
✔ Google Maps link  

Example API:
https://restcountries.com/v3.1/alpha/AFG

✔ Dynamic rendering  
✔ Fresh data (no cache)

---

### 🔍 Search Page (/search)

Features:
- Client component
- Search input
- Filter countries by name
- Real-time results

Technologies:
- useState
- input handling
- filtering logic

---

### ℹ️ About Page (/about)

Features:
- Project description
- API information
- Next.js concepts used

Example:

World Explorer is a Next.js project that uses real API data to display countries around the world. It practices App Router, server components, client components, routing, and caching.

---

## 🧩 Components

---

### Navbar

Links:
- Home
- Countries
- Search
- About

---

### Footer

- Visible on all pages
- Simple copyright text

---

### Screenshot

## 🏠 Home Page

<img src="/screenshots/home.png" width="100%" />
