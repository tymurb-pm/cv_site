/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B-DG1FgA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Managed a team of translators, demonstrating ability to work independently and in a remote team environment.</li>\n<li>Coordinated development of social media channels with founders.</li>\n<li>Gained awareness in the IT sphere, particularly in the blockchain</li>\n</ul>";

				const frontmatter = {"title":"Community Manager","date":2022,"url":"https://shardeum.org/","location":"Remote","org":"Shardeum","tags":["Stakeholders Communication","Translation","Remote team","Blockchain","WazirX"]};
				const file = "C:/cv_site/src/pages/works/2. Community Manager.md";
				const url = "/works/2. Community Manager";
				function rawContent() {
					return "\n- Managed a team of translators, demonstrating ability to work independently and in a remote team environment.\n- Coordinated development of social media channels with founders.\n- Gained awareness in the IT sphere, particularly in the blockchain";
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
