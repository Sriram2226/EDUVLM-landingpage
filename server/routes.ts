import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Get leaderboard data
  app.get("/api/leaderboard", async (req, res) => {
    try {
      const entries = await storage.getLeaderboardEntries();
      res.json(entries);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch leaderboard data" });
    }
  });

  // Download paper endpoint (placeholder for future implementation)
  app.get("/api/download-paper", async (req, res) => {
    // In a real implementation, this would serve the actual PDF file
    res.json({ 
      message: "PDF download functionality would be implemented here",
      downloadUrl: "/assets/eduvlm-bench-paper.pdf" 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
