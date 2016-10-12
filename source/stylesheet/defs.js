// Utils

const makeRem = (base) => (px) => `${px/base}rem`
const rem = makeRem(15)
const perc = (n) => `${n*100}%`


// ============= MEDIA =============

const media = [
  ["@tiny", "(min-width: 25em)"],
  ["@small", "(min-width: 40em)"],
  ["@medium", "(min-width: 60em)"],
  ["@large", "(min-width: 75em)"],
  ["@xlarge", "(min-width: 130em)"],
]


// ============= PSEUDO ============

const pseudo = [
  ":hover",
]


// ============= RULES =============

// Spacing (Margin and Padding)

const spacing = [
  ["auto", "auto"],
  ["0", "0"],
  ["15", rem(15)],   // 1
  ["21", rem(21)],   // 1.4
  ["24", rem(24)],   // 1.6
  ["30", rem(30)],   // 2
  ["42", rem(42)],   // 2.8
  ["45", rem(45)],   // 3
  ["66", rem(66)],   // 4.4
  ["75", rem(75)],   // 5
  ["105", rem(105)], // 7
]

// Colors

const color = [
  ["inherit"],
  ["transparent"],
  ["black", "#000"],
  ["transparent-black", "rgba(0,0,0,0.2)"],
  ["white", "#fff"],
  ["gray", "#9bb5c3"],
  ["dark-gray", "#3d5275"],
  ["light-gray", "#f1f1f3"],
  ["red", "#ff4b5b"],
  ["orange", "#ff6c47"],
  ["yellow", "#ffce3e"],
  ["turquoise", "#00d4a8"],
  ["aqua", "#49c6f2"],
  ["blue", "#4996f2"],
  ["purple", "#a08eed"],
  ["pink", "#f593ca"],
  ["dark-red", "#e84452"],
  ["dark-orange", "#ff5833"],
  ["dark-yellow", "#ffbb3e"],
  ["dark-turquoise", "#00c79e"],
  ["dark-aqua", "#44bce6"],
  ["dark-blue", "#428ae0"],
  ["dark-purple", "#9484e0"],
  ["dark-pink", "#f080bf"],
]

// Box Shadows

const boxShadow = [
  ["subtle", "0 2px 3px rgba(0,0,0,0.1)"],
  ["strong", "0px 10px 15px rgba(0,0,0,0.30)"],
]


// ========== DEFINITIONS ==========

const def = (rules, psuedo) => Object.assign({rules, media}, {pseudo: psuedo})

export default [

  // Positioning

  // Box-model

  ["padding", def(spacing)],
  ["padding-top", def(spacing)],
  ["padding-left", def(spacing)],
  ["padding-right", def(spacing)],
  ["padding-bottom", def(spacing)],

  ["margin", def(spacing)],
  ["margin-top", def(spacing)],
  ["margin-left", def(spacing)],
  ["margin-right", def(spacing)],
  ["margin-bottom", def(spacing)],

  // Typography

  // Visual

  ["background-color", def(color, pseudo)],
  ["box-shadow", def(boxShadow)],

  // Misc

]
