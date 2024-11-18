/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B-DG1FgA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>My work after a course in IT Project Management demonstrates familiarity with tools and workflow.</p>";

				const frontmatter = {"title":"Coursework","url":"https://drive.google.com/drive/folders/1kwe10TZwoHyl0EaXD9AUZBvZMKy84oU4","tags":["Project Charter","Project Managemt Plan","Agile","PMI"],"date":2024};
				const file = "C:/cv_site/src/pages/projects/spotfilm.md";
				const url = "/projects/spotfilm";
				function rawContent() {
					return "\nMy work after a course in IT Project Management demonstrates familiarity with tools and workflow.\n";
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
