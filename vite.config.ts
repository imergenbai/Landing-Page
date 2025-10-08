import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      // versioned → bare package aliases (this is what makes your versioned imports work)
      "@radix-ui/react-slot@1.1.2": "@radix-ui/react-slot",
      "@radix-ui/react-label@2.1.2": "@radix-ui/react-label",
      "class-variance-authority@0.7.1": "class-variance-authority",

      // you had a bunch more — keep them if they were in your old config:
      "vaul@1.1.2": "vaul",
      "sonner@2.0.3": "sonner",
      "recharts@2.15.2": "recharts",
      "react-resizable-panels@2.1.7": "react-resizable-panels",
      "react-hook-form@7.55.0": "react-hook-form",
      "react-day-picker@8.10.1": "react-day-picker",
      "next-themes@0.4.6": "next-themes",
      "lucide-react@0.487.0": "lucide-react",
      "input-otp@1.4.2": "input-otp",
      "embla-carousel-react@8.6.0": "embla-carousel-react",
      "cmdk@1.1.1": "cmdk",

      // your figma asset remaps
      "figma:asset/ed0f06480b9d00ae68608c4c6e87d141b1989b26.png":
        path.resolve(__dirname, "./src/assets/ed0f06480b9d00ae68608c4c6e87d141b1989b26.png"),
      "figma:asset/a9b7b939ae7546b66e242e814f807b1ca7e30a0e.png":
        path.resolve(__dirname, "./src/assets/a9b7b939ae7546b66e242e814f807b1ca7e30a0e.png"),
      "figma:asset/a7140452eee719e344520aa3aff2cf7a83c9db32.png":
        path.resolve(__dirname, "./src/assets/a7140452eee719e344520aa3aff2cf7a83c9db32.png"),
      "figma:asset/9c5bd42a316516ab117bef97c62bdea84c51b0c7.png":
        path.resolve(__dirname, "./src/assets/9c5bd42a316516ab117bef97c62bdea84c51b0c7.png"),
      "figma:asset/760e396faab9c4d7cd8aa007f95dd21d45c4a56e.png":
        path.resolve(__dirname, "./src/assets/760e396faab9c4d7cd8aa007f95dd21d45c4a56e.png"),
      "figma:asset/6a9488531aff11119fcce6c0f24f53c91faa38c0.png":
        path.resolve(__dirname, "./src/assets/6a9488531aff11119fcce6c0f24f53c91faa38c0.png"),
      "figma:asset/49cad2f56d4a20217ac2cd9dfa3fcb8ac767783c.png":
        path.resolve(__dirname, "./src/assets/49cad2f56d4a20217ac2cd9dfa3fcb8ac767783c.png"),

      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    outDir: "build",
  },
  server: {
    port: 3000,
    open: true,
  },
});
