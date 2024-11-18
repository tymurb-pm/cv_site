/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B-DG1FgA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Navigated vessel safely worldwide through severe sea conditions and congested waters</li>\n<li>Directed and managed multinational crews in executing critical maritime operations, ensuring seamless task coordination.</li>\n<li>Applied risk management practices to uphold safety and operational efficiency under high-pressure conditions.</li>\n<li>Handled extensive documentation in compliance with international maritime standards, fostering accountability and precision.</li>\n<li>Mentored junior team members, enhancing their skills and readiness through structured training.</li>\n<li>Enhanced team productivity and morale by streamlining workflows and promoting a collaborative atmosphere.</li>\n</ul>";

				const frontmatter = {"title":"Third Mate (Jr Operations Manager)","date":"2023-2024","url":"https://www.stolt-nielsen.com/our-businesses/stolt-tankers/","location":"Worldwide","org":"Stolt Tankers","tags":["Navigation","Safety","Operations Management","Risk Management"]};
				const file = "C:/cv_site/src/pages/works/1. Third Mate.md";
				const url = "/works/1. Third Mate";
				function rawContent() {
					return "\n- Navigated vessel safely worldwide through severe sea conditions and congested waters\n- Directed and managed multinational crews in executing critical maritime operations, ensuring seamless task coordination.\n- Applied risk management practices to uphold safety and operational efficiency under high-pressure conditions.\n- Handled extensive documentation in compliance with international maritime standards, fostering accountability and precision.\n- Mentored junior team members, enhancing their skills and readiness through structured training.\n- Enhanced team productivity and morale by streamlining workflows and promoting a collaborative atmosphere.\n\n";
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
