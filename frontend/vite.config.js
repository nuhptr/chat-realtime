import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   server: {
      // To run the server on port 3000
      port: 3000,
      proxy: {
         // Proxy /api/auth/signup to http://localhost:8000/api/auth/signup
         "/api": {
            target: "http://localhost:8000",
         },
      },
   },
})
