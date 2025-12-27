import request from "supertest";
import app from "../index.js";

describe("Snippet Search API", () => {
  it("should return search results", async () => {
    const res = await request(app).get("/api/snippets/search?q=react");

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
});
