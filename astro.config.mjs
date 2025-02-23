// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { linksInCodePlugin } from './plugins/links-in-expressive-code.js'

// https://astro.build/config
export default defineConfig({

  // for deploying to my site subdirectory
  // base: '/ghostty-reference/',

  // for deploying to github:
  site: 'https://wong-justin.github.io',
  base: 'one-page-ghostty-docs',

	integrations: [
		starlight({
			// title: 'Much Less Verbose Ghostty Documentation',
			// title: 'Terser Ghostty Documentation',
			// title: 'Ghostty Docs that get to the point',
			// title: 'Shorter Ghostty Docs',
			// title: 'Ghostty Docs Reimagined',
			// title: 'Denser Ghostty Docs',
			// title: 'Ghostty Cheatsheet',
			// title: 'Ghostty Reference',
			title: 'Ghostty in One Page',
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'author',
            content: 'jwong',
          },
        },

        /* while testing private deploys */
        /*
        {
          tag: 'meta',
          attrs: {
            name: 'robots',
            content: 'noindex',
          },
        },
        */

      ],
      customCss: [
        './src/custom.css',
      ],
      components: {
        // override default subcomponents with my custom implementations
        // note that these components are different than the importable starlight ui widgets
        SiteTitle: './src/components/SiteTitle.astro',
        PageTitle: './src/components/PageTitle.astro',
        Header: './src/components/Header.astro',
        // Footer: './src/components/Footer.astro',
        // Head: './src/components/Head.astro',
        // Page: './src/components/Page.astro',
        // can't seem to override Page (probably too important or big or something) 
        // (oh i cant override anything outside of starlight/user-components)
        // this means i can't remove the initial ContentPane that used to have the PageTitle
        // i must remove it with css isntead

        // custom components do not need to be listed here
        // CollapsibleSection: './src/components/CollapsibleSection.astro',
        // TwoColumns: './src/components/TwoColumns.astro',
      },
      // pagefind: false, // does a one-page site need a search?
      // actually yes, i think it's more usable, even compared ctrl-f
      pagefind: {
        /* TODO: get highlighted search results */
        highlightParam: 'highlight',
      },
      expressiveCode: {
        plugins: [
          linksInCodePlugin(),
        ],
      },
		}),
	],
});
