await Bun.build({
  entrypoints: ["./packages/beep/src/index.ts"],
  outdir: "./packages/beep/dist",
  external: ["react"],
});

export {};
