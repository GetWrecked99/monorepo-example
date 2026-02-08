import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    button: "src/button/index.ts",
    card: "src/card/index.ts",
    code: "src/code/index.ts"
  },
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  external: ["react", "react-dom"]
});