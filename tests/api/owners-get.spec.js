import { test, expect } from "@playwright/test";
import { OwnersAPI } from "../../support/api/owners.api";
test.describe("API - Owners (GET)", () => {
  test("deve listar owners", async ({ request }) => {
    // Arrange
    const ownersAPI = new OwnersAPI(request);
    // Act
    const response = await ownersAPI.list();
    const body = await response.json();
    // Assert
    expect(response.status()).toBe(200);
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
  });
});