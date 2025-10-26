import { Hono } from "hono";

interface Env {
  // Add your environment variables here
  // Example: API_KEY: string;
}

const app = new Hono<{ Bindings: Env }>();

export default app;
