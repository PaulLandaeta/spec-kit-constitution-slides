import Reveal from 'reveal.js'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js'
import RevealNotes from 'reveal.js/plugin/notes/notes.js'
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.js'
import RevealMenu from 'reveal.js-menu/menu.esm.js'

import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import 'reveal.js/plugin/highlight/monokai.css'
import 'reveal.js-menu/menu.css'
import './theme.css'

const deck = new Reveal({
  hash: true,
  slideNumber: 'c/t',
  controls: true,
  progress: true,
  center: false,
  transition: 'slide',
  plugins: [RevealHighlight, RevealNotes, RevealMarkdown, RevealMenu],
  menu: {
    side: 'left',
    numbers: true,
    themes: false,
    themesPath: '',
    transitions: false,
    markers: true,
    hideMissingTitles: true,
    custom: false,
    titleSelector: 'h1, h2, h3',
    openButton: true,
    openSlideNumber: true,
    keyboard: true,
    sticky: false,
    autoOpen: false,
  },
})

deck.initialize()
