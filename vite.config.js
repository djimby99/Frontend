import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [tailwindcss(), react()],
    server: {
    host: '0.0.0.0', // so it binds to public IP
    port: 5173,      // or whatever port you're using
    allowedHosts: ['ec2-44-244-208-132.us-west-2.compute.amazonaws.com']
  }
  
});
