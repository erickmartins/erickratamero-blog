import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// mdsvex config
const mdsvexConfig = {
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		_: './src/mdsvexlayout.svelte' // default mdsvex layout
	},
	remarkPlugins: [],
	rehypePlugins: [
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'wrap'
			}
		]
	]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.html', '.svx', ...mdsvexConfig.extensions],
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
