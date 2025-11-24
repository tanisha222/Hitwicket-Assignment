# **README — Hitwicket Cricket Player Profile (Gamified ESPN Redesign)**

**Author:** *Tanisha Chauhan (22BCE3751)*
**Tech:** React.js, Tailwind CSS, Lucide Icons
**Type:** High-Fidelity Gamified UI Prototype
**Project:** Hitwicket Assignment — Player Profile Dashboard

---
Deployment Link (Vercel)
Live Demo: https://hitwicket-assignment-sigma.vercel.app/

---

## **📌 Project Overview**

This project is a complete redesign of a cricket player's profile page, inspired by games like *Valorant*, *EA FC*, and *Fortnite*.
Instead of a simple stats table, the player is showcased as a **hero character** with:

* **Level, XP, Tier, Power rating**
* **Gear Loadout (Bat, Shoes, Kit)**
* **Abilities (Locked/Unlocked)**
* **Training & Drills**
* **Season Snapshot**
* **Match History & Recent Form**
* **Theme Toggle (Dark/Light Mode)**
* **Ownership Wallet Copy Feature**
* **Fully animated, glowing, futuristic UI**

The goal is to turn the static cricket data into a **fun, engaging, game-style experience**.

---

## **🎯 Key Features**

### **1. Hero Player Display**

* Animated avatar bounce
* Glow effects
* Tier badge
* Level & XP progress bar
* Number badge
* Power rating badge

### **2. Full Tab System**

* **OVERVIEW** – power stats, gear, achievements, snapshot
* **ABILITIES** – skills + special moves
* **STATS** – biodata + recent form
* **MATCHES** – detailed logs
* **TRAINING** – drills with progress bars

### **3. Theme Toggle**

Choose between:

* ⚫ Dark Mode (default)
* ⚪ Light Mode

### **4. Gamified UI Elements**

* Rarity gradients (legendary, epic, rare)
* Ability status (locked / unlocked)
* Glow animations
* XP bar highlight
* Futuristic rotating halo rings

### **5. Mini Features**

* Add to Squad
* Compare
* Favorite Player
* Copy Wallet Address
* Upgrade button with glow
* Team + Club display

---

## **🧠 Design Philosophy**

* **Make cricket feel like a video game.**
* Present statistics visually instead of text-heavy blocks.
* Increase user engagement using animations and gradients.
* Clear separation of information through cards & sections.
* Easy interaction through tabs, toggles, and icons.

---

## **🛠 Tech Stack**

* **React.js** — component-based architecture
* **Tailwind CSS** — fast UI styling
* **lucide-react** — clean modern icons
* **Vanilla JS hooks** — animation + state logic

---

## **📁 Folder Structure (Simple)**

```
src/
  components/
    <All stat cards + UI blocks>
  pages/
    CricketPlayerProfile.jsx   ← Main page
  assets/
    hardik.png
  App.jsx
  index.js
public/
  index.html
README.md
```

---

## **⚡ How to Run the Project**

### **1. Install Node.js (required)**

Download from: [https://nodejs.org/](https://nodejs.org/)

### **2. Install dependencies**

```bash
npm install
```

### **3. Start the development server**

```bash
npm start
```

### **4. Open in browser**

```
http://localhost:3000
```

### **5. Build for production**

```bash
npm run build
```

---

## **💡 How to Use This UI**

### ✔ Switch Tabs

Click:
`Overview | Abilities | Stats | Matches | Training`

### ✔ Toggle Dark/Light Mode

Click the sun/moon button.

### ✔ Copy Wallet

Press the copy icon — a ✓ tick appears.

### ✔ Favorite Player

Press ⭐ star.

### ✔ Swap Sections

Scroll inside the right panel to see full stats.

---

## **📦 Key Cards & Their Meaning**

### **1. Power Stats Card**

Shows Batting Power → Bowling Power
With gradients and big numbers.

### **2. Season Snapshot**

* Matches
* Runs
* Wickets
* Catches

### **3. Signature Gear**

Shows gear rarity + boost
(ex: +5 PWR)

### **4. Abilities**

* Level
* Locked/Unlocked
* Icons
* Gradient glow

### **5. Training Drills**

Shows:

* Type
* Duration
* Status (Active, Pending, Completed)
* Progress bar

### **6. Match History**

Shows:

* Date
* Opponent
* Format
* Runs / Wickets
* Points

---

## **🖼 Assets**

* Player Image → `/assets/hardik.png`
  (Replace with your own player image if needed)

---

## **📘 Assignment File Reference**

Your full original assignment document is stored here:
`Hitwicket Assignment(Tanisha Chauhan-22BCE3751).docx`

---

## **🤝 Contributing**

Pull requests should:

* Keep UI consistent with the current theme
* Add reusable components
* Follow Tailwind utility structure
* Avoid inline styles except for special animations

---

## **📜 License**

This is an academic/portfolio project.
You are free to use, modify and showcase it with proper credit.

---

## 👩‍💻 Author

* 💼 [Tanisha Chauhan](https://github.com/tanisha222)
* ✉️ [LinkedIn Profile](https://www.linkedin.com/in/tanisha-chauhan-9227671b0/)

---



