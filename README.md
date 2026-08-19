# 💐 Bouquet Website — els_bouquets

> **A premium bespoke gift bouquet website** for **els_bouquets** — a creative vendor specialising in stunning custom-made bouquets of roses, money, jewelry, snacks, indomie, chocolates, and more.

---

## 🌐 Live

Deployed via **Vercel**: *(link goes here after first deploy)*

---

## 🎨 Brand

| Token | Value |
|---|---|
| Crimson Depth | `#710014` |
| Warm Sand | `#b38f6f` |
| Soft Pearl | `#f2f1ed` |
| Obsidian Black | `#161616` |

**Typography**: Cormorant Garamond (display) × Plus Jakarta Sans (body)

---

## 📦 Tech Stack

- **Framework**: [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) with ScrollTrigger & SplitText plugins
- **Fonts**: Google Fonts
- **Background Removal**: Python [`rembg`](https://github.com/danielgatis/rembg) (U2Net model)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```
BoquetWebsite_boquetbyel/
├── client/                  # Vite + React app (source)
│   ├── src/
│   │   ├── assets/          # Images, videos, fonts, icons
│   │   ├── components/      # Reusable UI components (Navbar, NavMenu, etc.)
│   │   ├── constants/       # Data definitions (product lists, testimonial cards)
│   │   ├── sections/        # Full-page sections (Hero, Footer, Message, etc.)
│   │   └── utils/           # Helper utilities (media loader, etc.)
│   ├── public/              # Static assets served as-is
│   ├── index.html           # Root HTML with SEO meta tags
│   └── vite.config.ts       # Vite configuration (Vercel-ready)
├── vercel.json              # Vercel deployment configuration
└── README.md
```

---

## 🚀 Getting Started (Local Dev)

```bash
# 1. Install dependencies
cd client
npm install

# 2. Run development server
npm run dev
# → Starts at http://localhost:5173/

# 3. Build for production
npm run build
```

---

## ☁️ Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import GitHub repo
3. Set the **Root Directory** to `client`
4. Vercel will auto-detect **Vite** — leave all settings as default
5. Click **Deploy** 🎉

> The `vercel.json` at root handles SPA rewrites so direct URL navigation works correctly.

---

## 📲 Contact & Socials

| Channel | Handle / Link |
|---|---|
| 📱 WhatsApp / Phone | [08083822886](https://wa.me/2348083822886) |
| 📸 Instagram | [@Bouquets_by_el](https://instagram.com/Bouquets_by_el) |
| 🎵 TikTok | [@els_bouquets](https://tiktok.com/@els_bouquets) |

---

## 🛡️ License

This project was built for **els_bouquets** as a commercial client website.
All bouquet product images, brand assets, and videos are the property of **els_bouquets**.

---

*Made with ❤️ by [blueparticlestudios@gmail.com](mailto:blueparticlestudios@gmail.com)*
