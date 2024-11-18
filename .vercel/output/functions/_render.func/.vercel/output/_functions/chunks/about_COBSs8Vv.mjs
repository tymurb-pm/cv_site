/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B-DG1FgA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Aspiring IT Project Manager with a CAPM certification, seeking to transition into a role where I can apply my project\nmanagement skills and technical knowledge. A disciplined and detail-oriented leader with hands-on experience\nmanaging cross-functional teams, navigating complex operations, and ensuring project timelines in high-pressure\nenvironments. Experienced in risk management, compliance, and resource planning, with a knowledge of project\nmanagement tools such as Jira, Confluence, and Trello. Highly adept at managing teams and collaborating across\ndiverse environments, with a focus on delivering results within time-sensitive frameworks</p>";

				const frontmatter = {"title":"about","name":"Tymur Buiadzhi","designation":"IT Project Manager","location":"Rye, UK","website":"buiadzhi.com"};
				const file = "C:/cv_site/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\n Aspiring IT Project Manager with a CAPM certification, seeking to transition into a role where I can apply my project\n management skills and technical knowledge. A disciplined and detail-oriented leader with hands-on experience\n managing cross-functional teams, navigating complex operations, and ensuring project timelines in high-pressure\n environments. Experienced in risk management, compliance, and resource planning, with a knowledge of project\n management tools such as Jira, Confluence, and Trello. Highly adept at managing teams and collaborating across\n diverse environments, with a focus on delivering results within time-sensitive frameworks\n";
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

export { _page as _, compiledContent as c, frontmatter as f };
