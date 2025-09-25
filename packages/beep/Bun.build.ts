await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  external: ["react"],
  format: "esm",
  target: "browser",
  splitting: false,
  minify: false,
});

// Fix "use client" directive positioning
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

function fixUseClientInDir(dir: string) {
  const files = readdirSync(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      fixUseClientInDir(filePath);
    } else if (file.endsWith('.js')) {
      const content = readFileSync(filePath, 'utf8');
      
      if (content.includes('"use client"') && !content.startsWith('"use client"')) {
        const withoutUseClient = content.replace(/["']use client["'];?\s*/g, '');
        const newContent = '"use client";\n\n' + withoutUseClient;
        writeFileSync(filePath, newContent);
        console.log(`Fixed "use client" directive in ${filePath}`);
      }
    }
  }
}

fixUseClientInDir('./dist');

export {};
