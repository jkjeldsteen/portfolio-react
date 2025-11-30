import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
  server: {
    port: Number(process.env.PORT) || 3000,
    open: false, // Automatically open the browser on server start
    // Bind to localhost to avoid exposing the dev server to the network
    host: 'localhost',
    // Restrict filesystem access to only project source and public assets
    fs: {
      allow: [
        path.resolve(process.cwd(), 'src'),
        path.resolve(process.cwd(), 'public'),
        process.cwd() // Allow project root for index.html
      ]
    },
    allowedHosts: [
      'jkjeldsteen.com'
    ]
  },
})