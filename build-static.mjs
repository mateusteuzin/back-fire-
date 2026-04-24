import { readFileSync, readdirSync, writeFileSync } from "fs";

// Find the compiled JS and CSS files
const assetsDir = "dist/client/assets";
const files = readdirSync(assetsDir);

const cssFile = files.find((f) => f.endsWith(".css"));
const jsFiles = files.filter((f) => f.endsWith(".js") && !f.includes("start") && !f.includes("manifest") && !f.includes("tanstack") && !f.includes("router"));

const cssTag = cssFile
  ? `<link rel="stylesheet" href="/assets/${cssFile}">`
  : "";
const jsTags = jsFiles
  .map((f) => `<script type="module" src="/assets/${f}"></script>`)
  .join("\n    ");

const html = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BackFire — Sites que vendem em até 30 dias</title>
    <meta name="description" content="Desenvolvimento de sites institucionais, landing pages e portfólios profissionais com foco em vendas. Solicite seu orçamento grátis." />
    <link rel="icon" type="image/png" href="/favicon.png?v=2" />
    ${cssTag}
  </head>
  <body>
    <div id="root"></div>
    ${jsTags}
  </body>
</html>
`;

writeFileSync("dist/client/index.html", html);
console.log("✅ index.html generated in dist/client/");
console.log("   CSS:", cssFile);
console.log("   JS:", jsFiles.join(", "));
