import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B4t05KZr.mjs';
import { manifest } from './manifest_DJUbPWO6.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about/about.astro.mjs');
const _page2 = () => import('./pages/blogs/home-mmouzo.astro.mjs');
const _page3 = () => import('./pages/certificates/1. capm.astro.mjs');
const _page4 = () => import('./pages/certificates/2. ef set.astro.mjs');
const _page5 = () => import('./pages/certificates/2. scrum master.astro.mjs');
const _page6 = () => import('./pages/contact/email.astro.mjs');
const _page7 = () => import('./pages/contact/linkedin.astro.mjs');
const _page8 = () => import('./pages/contact/telegram.astro.mjs');
const _page9 = () => import('./pages/projects/spotfilm.astro.mjs');
const _page10 = () => import('./pages/studies/studie1.astro.mjs');
const _page11 = () => import('./pages/studies/studie2.astro.mjs');
const _page12 = () => import('./pages/works/1. third mate.astro.mjs');
const _page13 = () => import('./pages/works/2. community manager.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about/about.md", _page1],
    ["src/pages/blogs/home-mmouzo.md", _page2],
    ["src/pages/certificates/1. CAPM.md", _page3],
    ["src/pages/certificates/2. EF SET.md", _page4],
    ["src/pages/certificates/2. Scrum Master.md", _page5],
    ["src/pages/contact/email.md", _page6],
    ["src/pages/contact/linkedin.md", _page7],
    ["src/pages/contact/telegram.md", _page8],
    ["src/pages/projects/spotfilm.md", _page9],
    ["src/pages/studies/studie1.md", _page10],
    ["src/pages/studies/studie2.md", _page11],
    ["src/pages/works/1. Third Mate.md", _page12],
    ["src/pages/works/2. Community Manager.md", _page13],
    ["src/pages/index.astro", _page14]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f1eaa9de-c3bf-423f-9741-6890a24f2ae8"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
