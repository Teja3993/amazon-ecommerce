const request = require("supertest");
const app = require("../server");

describe("Registration API Tests", () => {
  let email = "test@example.com";

  it("should register a new user successfully", async () => {
    const res = await request(app)
      .post("/api/register")
      .send({ email, password: "123456" });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Registered successfully");
  });

  it("should not allow duplicate registration", async () => {
    const res = await request(app)
      .post("/api/register")
      .send({ email, password: "123456" });

    expect(res.statusCode).toBe(409);
    expect(res.body.message).toBe("User already exists");
  });

  it("should return error if fields are missing", async () => {
    const res = await request(app)
      .post("/api/register")
      .send({});

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Missing fields");
  });
});
