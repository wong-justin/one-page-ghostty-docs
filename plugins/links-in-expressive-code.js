import { definePlugin } from '@expressive-code/core'

let ghosttyOptions = [
  'abnormal-command-exit-runtime',
  'adjust-box-thickness',
  'adjust-cell-height',
  'adjust-cell-width',
  'adjust-cursor-height',
  'adjust-cursor-thickness',
  'adjust-font-baseline',
  'adjust-overline-position',
  'adjust-overline-thickness',
  'adjust-strikethrough-position',
  'adjust-strikethrough-thickness',
  'adjust-underline-position',
  'adjust-underline-thickness',
  'adw-toolbar-style',
  'alpha-blending',
  'app-notifications',
  'auto-update',
  'auto-update-channel',
  'background',
  'background-blur',
  'background-opacity',
  'bold-is-bright',
  'class',
  'click-repeat-interval',
  'clipboard-paste-bracketed-safe',
  'clipboard-paste-protection',
  'clipboard-read',
  'clipboard-trim-trailing-spaces',
  'clipboard-write',
  'command',
  'config-default-files',
  'config-file',
  'confirm-close-surface',
  'copy-on-select',
  'cursor-click-to-move',
  'cursor-color',
  'cursor-invert-fg-bg',
  'cursor-opacity',
  'cursor-style-blink',
  'cursor-style',
  'cursor-text',
  'custom-shader',
  'custom-shader-animation',
  'desktop-notifications',
  'enquiry-response',
  'focus-follows-mouse',
  'font-codepoint-map',
  'font-family',
  'font-family-bold',
  'font-family-bold-italic',
  'font-family-italic',
  'font-feature',
  'font-size',
  'font-style-bold',
  'font-style-bold-italic',
  'font-style',
  'font-style-italic',
  'font-synthetic-style',
  'font-thicken',
  'font-thicken-strength',
  'font-variation',
  'font-variation-bold',
  'font-variation-bold-italic',
  'font-variation-italic',
  'foreground',
  'freetype-load-flags',
  'fullscreen',
  'grapheme-width-method',
  'gtk-adwaita',
  'gtk-custom-css',
  'gtk-gsk-renderer',
  'gtk-opengl-debug',
  'gtk-single-instance',
  'gtk-tabs-location',
  'gtk-titlebar-hide-when-maximized',
  'gtk-titlebar',
  'gtk-wide-tabs',
  'image-storage-limit',
  'initial-command',
  'initial-window',
  'keybind',
  'link-url',
  'linux-cgroup-hard-fail',
  'linux-cgroup-memory-limit',
  'linux-cgroup-processes-limit',
  'linux-cgroup',
  'macos-auto-secure-input',
  'macos-icon-frame',
  'macos-icon-ghost-color',
  'macos-icon',
  'macos-icon-screen-color',
  'macos-non-native-fullscreen',
  'macos-option-as-alt',
  'macos-secure-input-indication',
  'macos-titlebar-proxy-icon',
  'macos-titlebar-style',
  'macos-window-shadow',
  'maximize',
  'minimum-contrast',
  'mouse-hide-while-typing',
  'mouse-scroll-multiplier',
  'mouse-shift-capture',
  'osc-color-report-format',
  'palette',
  'quick-terminal-animation-duration',
  'quick-terminal-autohide',
  'quick-terminal-position',
  'quick-terminal-screen',
  'quick-terminal-space-behavior',
  'quit-after-last-window-closed-delay',
  'quit-after-last-window-closed',
  'resize-overlay',
  'resize-overlay-duration',
  'resize-overlay-position',
  'scrollback-limit',
  'selection-background',
  'selection-foreground',
  'selection-invert-fg-bg',
  'shell-integration',
  'shell-integration-features',
  'split-divider-color',
  'term',
  'theme',
  'title',
  'title-report',
  'unfocused-split-fill',
  'unfocused-split-opacity',
  'vt-kam-allowed',
  'wait-after-command',
  'window-colorspace',
  'window-decoration',
  'window-height',
  'window-inherit-font-size',
  'window-inherit-working-directory',
  'window-new-tab-position',
  'window-padding-balance',
  'window-padding-color',
  'window-padding-x',
  'window-padding-y',
  'window-position-x',
  'window-position-y',
  'window-save-state',
  'window-step-resize',
  'window-subtitle',
  'window-theme',
  'window-titlebar-background',
  'window-titlebar-foreground',
  'window-title-font-family',
  'window-vsync',
  'window-width',
  'working-directory',
  'x11-instance-name',
]

let ghosttyActions = [
  'adjust_selection', 
  'clear_screen', 
  'close_all_windows', 
  'close_surface', 
  'close_tab', 
  'close_window', 
  'copy_to_clipboard', 
  'copy_url_to_clipboard', 
  'crash', 
  'csi', 
  'cursor_key', 
  'decrease_font_size', 
  'equalize_splits', 
  'esc', 
  'goto_split', 
  'goto_tab', 
  'ignore', 
  'increase_font_size', 
  'inspector', 
  'jump_to_prompt', 
  'last_tab', 
  'move_tab', 
  'new_split', 
  'new_tab', 
  'new_window', 
  'next_tab', 
  'open_config', 
  'paste_from_clipboard', 
  'paste_from_selection', 
  'previous_tab', 
  'quit', 
  'reload_config', 
  'reset', 
  'reset_font_size', 
  'resize_split', 
  'scroll_page_down', 
  'scroll_page_fractional', 
  'scroll_page_lines', 
  'scroll_page_up', 
  'scroll_to_bottom', 
  'scroll_to_top', 
  'select_all', 
  'text', 
  'toggle_fullscreen', 
  'toggle_maximize', 
  'toggle_quick_terminal', 
  'toggle_secure_input', 
  'toggle_split_zoom', 
  'toggle_tab_overview', 
  'toggle_visibility', 
  'toggle_window_decorations', 
  'unbind', 
  'write_screen_file', 
  'write_scrollback_file', 
  'write_selection_file', 
]

let macOnlyKeywords = [
  // config options
  'font-thicken',
  'font-thicken-strength',
  'window-step-resize',
  'quick-terminal-animation-duration',
  'quick-terminal-autohide',
  'quick-terminal-position',
  'quick-terminal-screen',
  'quick-terminal-space-behavior',
  'macos-auto-secure-input',
  'macos-icon',
  'macos-icon-frame',
  'macos-icon-ghost-color',
  'macos-icon-screen-color',
  'macos-non-native-fullscreen',
  'macos-option-as-alt',
  'macos-secure-input-indication',
  'macos-titlebar-proxy-icon',
  'macos-titlebar-style',
  'macos-window-shadow',
  'auto-update',
  'auto-update-channel',
  'window-save-state',

  // keybind actions
  'close_all_windows',
  'toggle_secure_input',
  'toggle_quick_terminal',
  'toggle_visibility',

  // alpha-blending:linear
  // background-opacity::some paragraphs
  // freetype-load-flags::a sentence
  // ... i will not be so picky about sentences and paragraphs right now, only keywords
  // TODO: add sentences and paragraphs and partial args to these platform-exclusive lists
]

let linuxOnlyKeywords = [
  // config options
  'linux-cgroup',
  'linux-cgroup-hard-fail',
  'linux-cgroup-memory-limit',
  'linux-cgroup-processes-limit',
  'quit-after-last-window-closed-delay',
  'adw-toolbar-style',
  'app-notifications',
  'class',
  'gtk-adwaita',
  'gtk-custom-css',
  'gtk-gsk-renderer',
  'gtk-opengl-debug',
  'gtk-single-instance',
  'gtk-tabs-location',
  'gtk-titlebar',
  'gtk-titlebar-hide-when-maximized',
  'gtk-wide-tabs',
  'window-subtitle',

  // keybind actions
  'toggle_maximize',
  'toggle_window_decorations',
  'toggle_tab_overview',
]

let linkKeywordsInLine = ({line, lineContainer, potentialKeywords, linkPrefix}) => {
  // must sort longest keywords first so that eg. `title-report` gets matched before `title`
  let orderedKeywords = potentialKeywords.sort((a,b) => b.length - a.length)
  for (let keyword of orderedKeywords) {
    let posStart = line.indexOf(keyword) 
    let notFound = (posStart === -1)
    if (notFound) continue

    let posEnd = posStart + keyword.length

    let beforeMatch = line.substring(0, posStart) 
    let match = line.substring(posStart, posEnd) 
    let afterMatch = line.substring(posEnd, line.length) 

    lineContainer.children = [
      {type: 'text', value: beforeMatch},
      {
        type: 'element',
        tagName: 'a',
        properties: {
          href: linkPrefix + match,
        },
        children: [{type: 'text', value: match}],
      },
      {type: 'text', value: afterMatch},
    ]


    let containerClassList = lineContainer.properties.className || []
    if (macOnlyKeywords.includes(keyword)) {
      containerClassList.push('only-macos')
    }
    else if (linuxOnlyKeywords.includes(keyword)) {
      containerClassList.push('only-gtk-linux')
    }
    lineContainer.properties.className = containerClassList
    break
  }
}

export function linksInCodePlugin() {
  return definePlugin({
    name: 'Trying to convert code with <a> tags into actual <a> tags',
    // Add more properties of `ExpressiveCodePlugin` to make your plugin
    // actually do something (e.g. `baseStyles`, `hooks`, etc.)
    hooks: {
      /*
      postprocessRenderedBlock(context) {
        context.codeBlock.getLines().forEach((line) => console.log(line))
      },
      */
      postprocessRenderedLine(context) {
        // console.log(context.renderData.lineAst.children)
        //
        // lineAst
        //     div class=ec-line
        //         div class=code (lineContainer)
        //             span <text content>
        //
        // or for empty lines:
        //
        // lineAst
        //     div class=ec-line
        //         div class=code (lineContainer)
        //             <text content === \n> (no span)
        //
        let lineContainer = context.renderData.lineAst.children[0].children[0]

        // let isEmpty = (string) => string.trim().length === 0
        let isEmptyLine = (lineContainer.type === 'text')
        if (isEmptyLine) { return }

        let line = lineContainer.children[0].value
        let isComment = (line.charAt(0) === '#')
        if (isComment) { return } 

        // console.log(context.codeBlock.meta) // this is just the string that comes after a triple backtick, like
        // ```text title="title.txt" i-can-write-anything-here
        if (context.codeBlock.meta.includes('highlight-ghostty-options')) {
          // example input:
          // foreground = #ffffff
          // output:
          // <a href="#option-foreground">foreground</a> = #ffffff
          linkKeywordsInLine({
            potentialKeywords: ghosttyOptions,
            line,
            lineContainer,
            // linkPrefix: '#option-',
            linkPrefix: '#',
          })
        }
        else if (context.codeBlock.meta.includes('highlight-ghostty-actions')) {
          // example input:
          // keybind = super+ctrl+shift+up=resize_split:up,10
          // output:
          // keybind = super+ctrl+shift+up=<a href="#action-resize_split">resize_split</a>:up,10
          linkKeywordsInLine({
            potentialKeywords: ghosttyActions,
            line,
            lineContainer,
            // linkPrefix: '#action-',
            linkPrefix: '#',
          })
        }
      },
    },
  })
}
