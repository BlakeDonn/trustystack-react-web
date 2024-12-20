import "@testing-library/jest-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";
import { vi } from "vitest";

expect.extend(matchers);

vi.mock("next-auth/react", async () => {
  const actual = await vi.importActual("next-auth/react");
  return {
    ...actual,
    signIn: vi.fn(() => Promise.resolve()),
    signOut: vi.fn(() => Promise.resolve()),
  };
});
