import type { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import cors from "cors";
import { storage } from "../server/supabase-storage.js";

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/products", async (req, res) => {
  try {
    const products = await storage.getProducts();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.get("/api/content", async (req, res) => {
  try {
    const content = await storage.getContent();
    res.json(content);
  } catch (error) {
    console.error("Error fetching content:", error);
    res.status(500).json({ error: "Failed to fetch content" });
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    const message = await storage.createContactMessage(req.body);
    res.json(message);
  } catch (error) {
    console.error("Error creating contact message:", error);
    res.status(500).json({ error: "Failed to create contact message" });
  }
});

app.post("/api/admin/login", async (req, res) => {
  const { email, password } = req.body;
  
  if (email === "wesleykoech2022@gmail.com" || email === "chepkoechjoan55@gmail.com") {
    if (password === "admin123") {
      res.json({ success: true, user: { email, role: "admin" } });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await storage.createProduct(req.body);
    res.json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Failed to create product" });
  }
});

app.put("/api/products/:id", async (req, res) => {
  try {
    const product = await storage.updateProduct(req.params.id, req.body);
    res.json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Failed to update product" });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  try {
    await storage.deleteProduct(req.params.id);
    res.json({ success: true });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Failed to delete product" });
  }
});

export default function handler(req: VercelRequest, res: VercelResponse) {
  return app(req, res);
}
