import { users, leaderboardEntries, type User, type InsertUser, type LeaderboardEntry, type InsertLeaderboardEntry } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getLeaderboardEntries(): Promise<LeaderboardEntry[]>;
  createLeaderboardEntry(entry: InsertLeaderboardEntry): Promise<LeaderboardEntry>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private leaderboardEntries: Map<number, LeaderboardEntry>;
  private currentUserId: number;
  private currentLeaderboardId: number;

  constructor() {
    this.users = new Map();
    this.leaderboardEntries = new Map();
    this.currentUserId = 1;
    this.currentLeaderboardId = 1;
    
    // Initialize with leaderboard data
    this.initializeLeaderboard();
  }

  private initializeLeaderboard() {
    const entries: Omit<LeaderboardEntry, 'id'>[] = [
      {
        rank: 1,
        modelName: "Flan T5",
        company: "Google",
        size: "250M",
        prerequisiteAccuracy: 78.4,
        conceptRecall: 85.2,
        learningPathQuality: 67.8,
        overallScore: 77.1
      },
      {
        rank: 2,
        modelName: "Gemini 2.0 Flash",
        company: "Google",
        size: "7B",
        prerequisiteAccuracy: 74.3,
        conceptRecall: 82.6,
        learningPathQuality: 61.7,
        overallScore: 72.9
      },
      {
        rank: 3,
        modelName: "GPT-4",
        company: "OpenAI",
        size: "7B",
        prerequisiteAccuracy: 72.1,
        conceptRecall: 79.4,
        learningPathQuality: 63.2,
        overallScore: 71.6
      },
      {
        rank: 4,
        modelName: "GPT-3.5",
        company: "OpenAI",
        size: "4B",
        prerequisiteAccuracy: 65.7,
        conceptRecall: 71.3,
        learningPathQuality: 58.9,
        overallScore: 65.3
      },
      {
        rank: 5,
        modelName: "Flan T5",
        company: "Google",
        size: "2B",
        prerequisiteAccuracy: 62.4,
        conceptRecall: 68.7,
        learningPathQuality: 55.1,
        overallScore: 62.1
      }
    ];

    entries.forEach(entry => {
      const id = this.currentLeaderboardId++;
      this.leaderboardEntries.set(id, { ...entry, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getLeaderboardEntries(): Promise<LeaderboardEntry[]> {
    return Array.from(this.leaderboardEntries.values()).sort((a, b) => a.rank - b.rank);
  }

  async createLeaderboardEntry(insertEntry: InsertLeaderboardEntry): Promise<LeaderboardEntry> {
    const id = this.currentLeaderboardId++;
    const entry: LeaderboardEntry = { ...insertEntry, id };
    this.leaderboardEntries.set(id, entry);
    return entry;
  }
}

export const storage = new MemStorage();
