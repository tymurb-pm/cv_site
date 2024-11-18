/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B-DG1FgA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Earners of the globally-recognized Certified Associate in Project Management (CAPM)® have been formally evaluated for demonstrated knowledge, skill and understanding of the processes, terminology, and best practices in Project Management Fundamentals, Predictive Methodologies, Agile Principles and Business Analysis that are needed for effective project management</p>";

				const frontmatter = {"title":"Certified Associate in Project Management (CAPM)®","org":"Project Management Institute (PMI)","tags":["Project Management","Business Analysis","Predicative Methodologies","Agile Principles","Communication Management","Cost Management","Risk Management","Scope Management"],"url":"https://www.credly.com/badges/b00baa81-8e25-4021-8f21-c6d80563c825/public_url","date":2024};
				const file = "C:/cv_site/src/pages/certificates/1. CAPM.md";
				const url = "/certificates/1. CAPM";
				function rawContent() {
					return "\nEarners of the globally-recognized Certified Associate in Project Management (CAPM)® have been formally evaluated for demonstrated knowledge, skill and understanding of the processes, terminology, and best practices in Project Management Fundamentals, Predictive Methodologies, Agile Principles and Business Analysis that are needed for effective project management\n";
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
