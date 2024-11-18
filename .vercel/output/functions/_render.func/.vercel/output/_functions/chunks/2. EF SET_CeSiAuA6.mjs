/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B-DG1FgA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The achieved level is 68/100 on the EF SET score scale and C1 Advanced according to the Common European Framework of Reference (CEFR).</p>";

				const frontmatter = {"title":"English Certificate (C1 Advanced)","org":"EF SET","url":"https://cert.efset.org/6jRqAY","date":2024};
				const file = "C:/cv_site/src/pages/certificates/2. EF SET.md";
				const url = "/certificates/2. EF SET";
				function rawContent() {
					return "\r\nThe achieved level is 68/100 on the EF SET score scale and C1 Advanced according to the Common European Framework of Reference (CEFR). ";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
