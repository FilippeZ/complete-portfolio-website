// vite.config.js
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'; // Βεβαιωθείτε ότι αυτό ταιριάζει με το project σας (π.χ., vue(), svelte(), ή τίποτα για vanilla JS)

export default defineConfig({
<<<<<<< HEAD
    base: "complete-portfolio-website",
=======
  plugins: [react()], // Εάν δεν χρησιμοποιείτε React/Vue, αφήστε το κενό: plugins: []
  base: "/Filippos-ParaskevasZygouris/",
>>>>>>> 7fe8f7678d8e277f57be43a2c5a532f767b0a6ea
});
