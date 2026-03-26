import { test, expect } from "@playwright/test";
import { OwnersAPI } from "../../support/api/owners.api";

test.describe("API - Owners (GET)", () => {

  test("deve listar owners", async ({ request }) => {
    const ownersAPI = new OwnersAPI(request);
    const response = await ownersAPI.list();
    expect(response.status()).toBe(200);
  });

  test("deve retornar 404 ao buscar proprietário inexistente", async ({ request }) => {
    const ownersAPI = new OwnersAPI(request);
    const response = await ownersAPI.getById(9999);
    expect(response.status()).toBe(404);
  });

});