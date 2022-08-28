import { vi } from "vitest";

const t = vi.fn().mockImplementation((str: string) => str);
vi.mock("vue-i18n/dist/vue-i18n.esm-bundler.js", () => ({
  __esModule: true,
  createI18n: () => ({
    t
  }),
  useI18n: () => ({
    t
  })
}));
