My redesign of [Ghostty](https://ghostty.org/)'s documentation.

- filter content by macOS/Linux
- shows default configuration values
- shows default keybinds
- config options ordered alphabetically
- fits on one page
  - uses widescreen space
- searchable
- light theme
- just has configuration and reference docs, not about/installation/other docs
- like `ghostty +show-config --default --docs | less` but more usable imo

For development:

- `npm install`
- `npm run dev`
- `mybrowser 'http://localhost:4321'`
- `npm run build`
- and maybe `npm run astro <some astro commands>`, but I haven't needed that yet

Also, see these docs:

- [Starlight’s docs](https://starlight.astro.build/)
- [Astro documentation](https://docs.astro.build)
- [Expressive Code blocks documentation](https://expressive-code.com/)

and INTERNALS.
