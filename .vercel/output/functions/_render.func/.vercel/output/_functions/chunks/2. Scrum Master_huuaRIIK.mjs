/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B-DG1FgA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Agile, Scrum, Meetings, Artifacts, Facilitation, Self-Organization</p>";

				const frontmatter = {"title":"Scrum Master Course","org":"iampm.club","url":"https://courses.iampm.club/certificate/98463430.png","date":2024};
				const file = "C:/cv_site/src/pages/certificates/2. Scrum Master.md";
				const url = "/certificates/2. Scrum Master";
				function rawContent() {
					return "\r\nAgile, Scrum, Meetings, Artifacts, Facilitation, Self-Organization";
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
