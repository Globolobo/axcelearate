import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineWorkspace, configDefaults } from "vitest/config";

import { storybookTest } from "@storybook/experimental-addon-test/vitest-plugin";
import react from "@vitejs/plugin-react";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default defineWorkspace([
  "vite.config.ts",
  {
    extends: "vite.config.ts",
    plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/writing-tests/test-addon#storybooktest
      storybookTest({ configDir: path.join(dirname, ".storybook") }),
    ],
    test: {
      name: "storybook",
      browser: {
        enabled: true,
        headless: true,
        name: "chromium",
        provider: "playwright",
      },
      setupFiles: [".storybook/vitest.setup.ts"],
    },
  },
  // {
  //   extends: "vite.config.ts",
  //   plugins: [react()],
  //   test: {
  //     name: "dom",
  //     browser: {
  //       enabled: true,
  //       provider: "playwright",
  //       instances: [{ browser: "chromium" }],
  //     },
  //     exclude: [...configDefaults.exclude, "stories/*", "*/storybook.test.ts"],
  //   },
  // },
]);
