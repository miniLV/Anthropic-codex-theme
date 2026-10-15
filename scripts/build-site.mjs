// Generates the bilingual landing site in docs/ from share/*.txt
import fs from 'node:fs';
const BASE = 'https://minilv.github.io/Anthropic-codex-theme/';
const REPO = 'https://github.com/miniLV/Anthropic-codex-theme';
const themes = [
  ['Anthropic', 'claude-desktop-light', 'claude-desktop-dark', 'anthropic', '#F8F6F1', '#1E1D1B', '#CA7554'],
  ['Catppuccin', 'catppuccin-latte', 'catppuccin-mocha', 'catppuccin', '#EFF1F5', '#1E1E2E', '#FAB387'],
  ['Nord', 'nord-light', 'nord-dark', 'nord', '#ECEFF4', '#2E3440', '#88C0D0'],
  ['Tokyo Night', 'tokyo-night-light', 'tokyo-night-dark', 'tokyo-night', '#E1E2E7', '#1A1B26', '#7AA2F7'],
  ['Gruvbox', 'gruvbox-light', 'gruvbox-dark', 'gruvbox', '#FBF1C7', '#282828', '#FE8019'],
  ['One Dark / Light', 'one-light', 'one-dark', 'one-dark', '#FAFAFA', '#282C34', '#61AFEF'],
];
const share = (s) => fs.readFileSync(`share/${s}.txt`, 'utf8').trim();
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const T = {
  en: {
    lang: 'en', path: '', other: 'zh/', otherLabel: '中文',
    title: 'Anthropic Codex Theme — Claude-style warm themes for OpenAI Codex',
    desc: 'Give OpenAI Codex the warm ivory and copper look of Claude. Copy one line, paste into Codex → Settings → Appearance → Import. Also includes Catppuccin, Nord, Tokyo Night, Gruvbox and One Dark. Free, MIT.',
    h1: 'Make Codex feel<br>like Claude.',
    sub: 'Warm ivory, soft copper, calm contrast. Copy one line, paste it into Codex, done. Nothing to install.',
    cta: 'Copy Anthropic Light', cta2: 'View on GitHub',
    how: 'Three steps, about ten seconds',
    steps: ['Pick a theme below and press <b>Copy</b>.', 'Open Codex → <b>Settings</b> → <b>Appearance</b> → Import under Light or Dark Theme.', 'Paste the line and confirm.'],
    gallery: 'Themes', light: 'Light', dark: 'Dark', copy: 'Copy', copied: 'Copied',
    before: 'Before and after', beforeL: 'Codex default', afterL: 'With Anthropic theme',
    fonts: 'For the closest feel, install <a href="https://fonts.google.com/specimen/DM+Sans">DM Sans</a> and <a href="https://www.jetbrains.com/lp/mono/">JetBrains Mono</a>. System fonts work fine too.',
    foot: 'Open source under MIT. Not affiliated with Anthropic or OpenAI.',
  },
  zh: {
    lang: 'zh-CN', path: 'zh/', other: '../', otherLabel: 'English',
    title: 'Anthropic Codex 主题 — 让 OpenAI Codex 换上 Claude 的暖色外观',
    desc: '一行字符串，让 Codex 换上 Claude 那种象牙白配铜色的界面。复制后粘贴到 Codex 设置里的导入即可，不用装任何东西。另含 Catppuccin、Nord、Tokyo Night、Gruvbox、One Dark。免费开源。',
    h1: '让 Codex<br>用起来像 Claude。',
    sub: '象牙白底色，柔和的铜色点缀，对比不刺眼。复制一行，粘进 Codex 就好，什么都不用装。',
    cta: '复制 Anthropic 浅色', cta2: '去 GitHub 看看',
    how: '三步，十秒钟',
    steps: ['在下面挑一个主题，点 <b>复制</b>。', '打开 Codex → <b>Settings</b> → <b>Appearance</b> → 在 Light / Dark Theme 里点 Import。', '粘贴，确认。'],
    gallery: '主题', light: '浅色', dark: '深色', copy: '复制', copied: '已复制',
    before: '换前换后', beforeL: 'Codex 默认', afterL: '换上 Anthropic 主题',
    fonts: '想要更接近原版的观感，可以装上 <a href="https://fonts.google.com/specimen/DM+Sans">DM Sans</a> 和 <a href="https://www.jetbrains.com/lp/mono/">JetBrains Mono</a>。不装也能用。',
    foot: 'MIT 开源。与 Anthropic、OpenAI 没有任何关联。',
  },
};
function page(L) {
  const r = L.path ? '../' : '';
  const url = BASE + L.path;
  const ld = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Anthropic Codex Theme', applicationCategory: 'DeveloperApplication', operatingSystem: 'macOS, Windows, Linux', description: L.desc, url, inLanguage: L.lang, license: 'https://opensource.org/licenses/MIT', codeRepository: REPO, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } };
  const cards = themes.map(([n, l, d, shot, sl, sd, ac]) => `
      <article class="card">
        <img src="${r}assets/codex_${shot}.jpg" alt="${n} theme in Codex" loading="lazy">
        <div class="meta"><h3><span class="dot" style="background:${ac}"></span>${n}</h3>
          <div class="btns">
            <button data-s="${esc(share(l))}"><i style="background:${sl}"></i>${L.light} · ${L.copy}</button>
            <button data-s="${esc(share(d))}"><i style="background:${sd}"></i>${L.dark} · ${L.copy}</button>
          </div></div>
      </article>`).join('');
  return `<!doctype html>
<html lang="${L.lang}">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${L.title}</title>
<meta name="description" content="${esc(L.desc)}">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="en" href="${BASE}">
<link rel="alternate" hreflang="zh-CN" href="${BASE}zh/">
<link rel="alternate" hreflang="x-default" href="${BASE}">
<meta property="og:type" content="website"><meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(L.title)}"><meta property="og:description" content="${esc(L.desc)}">
<meta property="og:image" content="${BASE}assets/og.png"><meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#F8F6F1">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='13' fill='%23CA7554'/></svg>">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<style>
:root{--bg:#F8F6F1;--ink:#38342E;--soft:#6B6459;--ac:#CA7554;--card:#FFFDF9;--line:#E8E2D6}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:18px/1.6 "DM Sans",ui-sans-serif,system-ui,-apple-system,"PingFang SC","Noto Sans SC",sans-serif}
a{color:var(--ac)}.wrap{max-width:1120px;margin:0 auto;padding:0 28px}
nav{display:flex;justify-content:space-between;align-items:center;padding:26px 0}nav b{font-size:18px}nav a{text-decoration:none;color:var(--ink);margin-left:22px;font-size:16px}
.hero{padding:80px 0 56px}h1{font-family:Georgia,"Tiempos Headline","Songti SC",serif;font-weight:400;font-size:clamp(44px,7vw,84px);line-height:1.05;margin:0 0 28px;letter-spacing:-.02em}
.sub{font-size:22px;color:var(--soft);max-width:640px;margin:0 0 36px}
.btn{display:inline-block;border:0;border-radius:12px;padding:15px 24px;font:inherit;font-size:17px;cursor:pointer;text-decoration:none;margin:0 12px 12px 0}
.p{background:var(--ac);color:#fff}.s{background:transparent;color:var(--ink);border:1px solid var(--line)}
.shot{margin:40px 0 0;border-radius:18px;overflow:hidden;box-shadow:0 30px 80px -30px rgba(80,50,20,.35);border:1px solid var(--line)}.shot img{width:100%;display:block}
section{padding:88px 0}h2{font-family:Georgia,"Songti SC",serif;font-weight:400;font-size:44px;margin:0 0 36px}
ol.steps{list-style:none;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:22px;counter-reset:s}
ol.steps li{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:28px;counter-increment:s}ol.steps li:before{content:counter(s);display:block;font:400 40px Georgia,serif;color:var(--ac);margin-bottom:8px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(330px,1fr));gap:26px}
.card{background:var(--card);border:1px solid var(--line);border-radius:18px;overflow:hidden}.card img{width:100%;aspect-ratio:16/10;object-fit:cover;object-position:top left;display:block;border-bottom:1px solid var(--line)}
.meta{padding:20px 22px 24px}.meta h3{margin:0 0 14px;font-size:21px;font-weight:600}.dot{display:inline-block;width:12px;height:12px;border-radius:50%;margin-right:10px}
.btns{display:flex;gap:10px;flex-wrap:wrap}.btns button{font:inherit;font-size:15px;background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:9px 14px;cursor:pointer;color:var(--ink)}
.btns button:hover{border-color:var(--ac)}.btns i{display:inline-block;width:12px;height:12px;border-radius:3px;margin-right:8px;border:1px solid #0002;vertical-align:-1px}
.ba{display:grid;grid-template-columns:1fr 1fr;gap:24px}.ba figure{margin:0}.ba img{width:100%;border-radius:14px;border:1px solid var(--line)}.ba figcaption{color:var(--soft);margin-top:10px;font-size:16px}
@media(max-width:760px){.ba{grid-template-columns:1fr}}
.note{color:var(--soft);font-size:17px}footer{padding:48px 0 64px;color:var(--soft);font-size:15px;border-top:1px solid var(--line)}
.toast{position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:var(--ink);color:var(--bg);padding:10px 18px;border-radius:10px;opacity:0;transition:.2s}.toast.on{opacity:1}
</style>
</head>
<body>
<div class="wrap">
<nav><b>Anthropic Codex Theme</b><div><a href="${REPO}">GitHub</a><a href="${L.other}" hreflang="${L.lang === 'en' ? 'zh-CN' : 'en'}">${L.otherLabel}</a></div></nav>
<header class="hero">
  <h1>${L.h1}</h1><p class="sub">${L.sub}</p>
  <button class="btn p" data-s="${esc(share('claude-desktop-light'))}">${L.cta}</button><a class="btn s" href="${REPO}">${L.cta2} →</a>
  <div class="shot"><img src="${r}assets/codex_anthropic.jpg" alt="OpenAI Codex with the Anthropic theme"></div>
</header>
<section><h2>${L.how}</h2><ol class="steps">${L.steps.map((s) => `<li>${s}</li>`).join('')}</ol></section>
<section><h2>${L.gallery}</h2><div class="grid">${cards}</div><p class="note" style="margin-top:32px">${L.fonts}</p></section>
<section><h2>${L.before}</h2><div class="ba"><figure><img src="${r}assets/codex_default.jpg" alt="${L.beforeL}" loading="lazy"><figcaption>${L.beforeL}</figcaption></figure><figure><img src="${r}assets/codex_anthropic.jpg" alt="${L.afterL}" loading="lazy"><figcaption>${L.afterL}</figcaption></figure></div></section>
<footer>${L.foot} · <a href="${REPO}">GitHub</a></footer>
</div>
<div class="toast" id="t">${L.copied}</div>
<script>document.querySelectorAll('[data-s]').forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(b.dataset.s)}catch(e){const a=document.createElement('textarea');a.value=b.dataset.s;document.body.append(a);a.select();document.execCommand('copy');a.remove()}const t=document.getElementById('t');t.classList.add('on');setTimeout(()=>t.classList.remove('on'),1400)})</script>
</body></html>
`;
}
fs.mkdirSync('docs/zh', { recursive: true });
fs.mkdirSync('docs/assets', { recursive: true });
for (const f of fs.readdirSync('screenshots')) fs.copyFileSync(`screenshots/${f}`, `docs/assets/${f}`);
fs.writeFileSync('docs/index.html', page(T.en));
fs.writeFileSync('docs/zh/index.html', page(T.zh));
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync('docs/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${['', 'zh/'].map((p) => `  <url><loc>${BASE}${p}</loc><lastmod>${today}</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="${BASE}"/><xhtml:link rel="alternate" hreflang="zh-CN" href="${BASE}zh/"/></url>`).join('\n')}
</urlset>
`);
fs.writeFileSync('docs/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${BASE}sitemap.xml\n`);
fs.writeFileSync('docs/.nojekyll', '');
