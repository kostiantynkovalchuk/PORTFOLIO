// routes.ts
import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from dist/public (where Vite builds to)
  app.use(express.static(path.resolve("dist/public")));

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Catch-all handler: send back React's index.html file for non-API routes
  app.get("*", (req, res) => {
    // Only catch non-API routes
    if (!req.path.startsWith("/api")) {
      res.sendFile(path.resolve("dist/public/index.html"));
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
