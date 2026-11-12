# HostWise - Luxury Hotel & Accommodations Platform

![HostWise Banner](https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80)

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

> **Live Demo:** [https://hotel-booking-nine-black.vercel.app/](https://hotel-booking-nine-black.vercel.app/)

---

## 📖 Overview

**HostWise** is a modern, responsive web application engineered for luxury hotels, coastal resorts, and boutique hospitality stays. Built with **React 18** and styled using **Tailwind CSS**, HostWise delivers an intuitive and visually captivating reservation experience for travelers across desktop, tablet, and mobile devices.

Whether exploring room suites, scheduling dates through the availability checker, browsing categorized photo galleries, or reaching out to the 24/7 concierge, HostWise combines elegant aesthetics with practical hospitality tools.

---

## ✨ Key Features

- **🏖️ Dynamic Home & Hero Showcase:**
  - Engaging hero section with animated statistics counters (Services, Accommodations, Experience).
  - Highlights of signature suites, beachfront views, and guest testimonials.
- **📅 Room Availability & Booking Engine:**
  - Date picker integration (`react-datepicker`) for seamless check-in and check-out selections.
  - Interactive counter controls for adult and child guest capacity.
  - Comprehensive suite listings (VIP Room, Deluxe Room, Family Room, Vintage Room, Asia Room, Love Room) with pricing and square footage specifications.
- **📸 Categorized Interactive Photo Gallery:**
  - Tabbed gallery switching effortlessly between:
    - **Front Exterior:** Panoramic architectural captures.
    - **Hotel Lobby:** Grand entrance and lounge aesthetics.
    - **Rooms & Suites:** Interior designs and luxury setups.
    - **Dining:** Gourmet culinary presentations and restaurant spaces.
    - **Spa & Wellness:** Holistic retreat and therapy rooms.
    - **Pool:** Outdoor sun decks and infinity pool views.
- **🛎️ World-Class Amenities & Services:**
  - Dedicated service directory highlighting Spa & Wellness, Fine Dining, Infinity Pool, Fitness Center, 24/7 Room Service, and Airport Transfers.
- **📰 HostWise Journal / Blog:**
  - Curated travel guides, culinary insights, and wellness tips with reading times and comment metrics.
- **📞 Contact Hub with Primary & Alternative Details:**
  - Direct inquiry form with name, email, phone, and message input validation.
  - **Primary & Alternative contact options** (direct phones, emergency helpline, and dedicated department emails).
  - Embedded responsive Google Maps iframe for exact property navigation.
- **📱 Responsive Navigation & Footer:**
  - Mobile slide-out drawer menu with active route tracking.
  - Comprehensive multi-column footer with newsletter subscription, quick links, and brand accreditation.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 18](https://react.dev/)** | Core UI library for component-based reactive architecture |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first CSS framework for modern, responsive styling |
| **[React Router v6](https://reactrouter.com/)** | Client-side routing with clean navigation |
| **[React Icons](https://react-icons.github.io/react-icons/)** | Comprehensive vector iconography (Material, FontAwesome, Remix) |
| **[React Datepicker](https://reactdatepicker.com/)** | Interactive calendar for reservation date selection |
| **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)** | Scroll-triggered visual entrance effects |

---

## 📂 Project Structure

```text
Host-Wise/
├── public/
│   ├── favicon.ico
│   ├── index.html            # HostWise metadata and document root
│   ├── manifest.json         # PWA / web app manifest
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── blog/             # Editorial imagery
│   │   ├── Gallery_photo/    # Categorized gallery collections (Lobby, Exterior, Dining, Spa, etc.)
│   │   ├── images/           # Showcase and hero assets
│   │   ├── logo/             # Brand logos (SVG and PNG)
│   │   └── rooms/            # Suite accommodation photographs
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky responsive navigation bar with HostWise branding
│   │   ├── Footer.jsx        # Multi-column footer with contact details & newsletter
│   │   └── PhotosComponent.jsx # Reusable multi-image layout component
│   ├── pages/
│   │   ├── Home.jsx          # Landing page with stats, rooms, services & guest reviews
│   │   ├── About.jsx         # HostWise mission and brand story
│   │   ├── Room.jsx          # Availability search and discover room listings
│   │   ├── Services.jsx      # Amenities, dining, and wellness directory
│   │   ├── Gallery.jsx       # Tabbed multi-category visual gallery
│   │   ├── Blog.jsx          # Travel and lifestyle editorial articles
│   │   ├── Contact.jsx       # Contact form, primary & alternative details, Google Map
│   │   ├── Dinning.jsx       # Dining gallery view
│   │   ├── FrontExterior.jsx # Exterior gallery view
│   │   ├── HotelLobby.jsx    # Lobby gallery view
│   │   ├── Hroom.jsx         # Rooms gallery view
│   │   ├── Pool.jsx          # Pool gallery view
│   │   └── Spa.jsx           # Spa gallery view
│   ├── App.css
│   ├── App.js               # Route configuration
│   ├── index.css            # Tailwind directives and custom styles
│   ├── index.js             # Application entry point
│   └── reportWebVitals.js
├── tailwind.config.js       # Tailwind configuration
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to set up and run the HostWise project on your local machine:

### 1. Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 16.x or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 2. Clone the Repository

```bash
git clone https://github.com/your-username/Host-Wise.git
cd Host-Wise
```

### 3. Install Dependencies

```bash
npm install
# or
yarn install
```

### 4. Run the Development Server

```bash
npm start
# or
yarn start
```

The application will start and open automatically at [http://localhost:3000](http://localhost:3000).

### 5. Build for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be output to the `build/` directory, ready to be deployed to Vercel, Netlify, or any static hosting provider.

---

## 📬 Contact Details & Alternative Support

For reservations, corporate events, guest inquiries, or support, use the following contact channels:

| Channel | Primary Details | Alternative Details |
| :--- | :--- | :--- |
| **Email** | [info@hostwise.com](mailto:info@hostwise.com) | [support@hostwise.com](mailto:support@hostwise.com) |
| **Phone** | [+1 (800) 555-0199](tel:+18005550199) | [+1 (555) 234-5678](tel:+15552345678) |
| **Hours** | 24/7 Front Desk & Concierge | 24/7 Guest Assistance Line |
| **Address** | 478 Evergreen Rd, Roseville, CA 95678, USA | - |

---

## 📄 License

This project is open-source and distributed under the [MIT License](LICENSE).

---

&copy; 2026 **HostWise**. All rights reserved. Crafted for memorable journeys.
