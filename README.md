# 🧠 Notion Clone
A powerful Notion-style notes app built with **Next.js**, **Convex**, and **BlockNote**. Create and manage documents in a clean, real-time, and responsive interface.

[Live Demo](https://notion-convex.vercel.app/)

---

## Features
- **Rich Text Editing with BlockNote Editor**  
  Built on the powerful [BlockNote](https://blocknote.dev/) editor, providing a Notion-like experience with nested blocks, headings, bullet points, code, and more.

- **Image Integration**  
  Upload and embed images to create visually engaging notes.

- **Page Creation & Hierarchy**  
  Organize notes in a nested page structure, just like Notion.

- **Data Persistence**  
  Backed by **Convex** for real-time database syncing and secure storage.

---

## 🚀 Tech Stack
| Technology   | Purpose                          |
|--------------|----------------------------------|
| Next.js      | Frontend Framework               |
| React        | UI Logic                         |
| Convex       | Real-time Backend & DB           |
| BlockNote    | Rich-text Editor                 |
| Clerk        | Authentication                   |
| Tailwind CSS | UI Styling                       |

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ved015/Notion-convex.git
cd Notion-convex
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env.local` file in the root and add:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CONVEX_URL=your_convex_url
CONVEX_DEPLOYMENT=your_convex_deployment_id
```

### 4. Start the Convex dev server
```bash
npx convex dev
```

### 5. Start the development server
```bash
npm run dev
```

App runs at http://localhost:3000
