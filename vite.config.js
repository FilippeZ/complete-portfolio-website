// vite.config.js
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'; // Βεβαιωθείτε ότι αυτό ταιριάζει με το project σας (π.χ., vue(), svelte(), ή τίποτα για vanilla JS)

export default defineConfig({
  plugins: [react()], // Εάν δεν χρησιμοποιείτε React/Vue, αφήστε το κενό: plugins: []
  base: "/Filippos-ParaskevasZygouris/",
});
