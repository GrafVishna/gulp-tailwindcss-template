const config = {
  tailwindjs: "./tailwind.config.js",
  port: 4000,
  purgecss: {
    content: ["src/**/*.{html,htm,js,php}"],
    safelist: {
      standard: [/^pre/, /^code/],
      greedy: [/token.*/],
    },
  },
  webp: {
    quality: 80 // Webp quality
  },
  imagemin: {
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }],
    interlaced: true,
    png: [0.7, 0.7], // Png quality
    jpeg: 80, // Jpeg quality
  },
}

// tailwind plugins
const plugins = {
  typography: true,
  forms: true,
  containerQueries: true,
}

// Project Paths
const buildFolder = `./build`
const distFolder = `./dist`
const srcFolder = `./src`

export const gulpPaths = {
  dist: {
    base: `${distFolder}/`,
    js: `${distFolder}/js/`,
    css: `${distFolder}/css/`,
    images: `${distFolder}/img/`,
    fonts: `${distFolder}/fonts/`,
    files: `${distFolder}/files/`,
    thirdParty: `${distFolder}/thirdParty/`
  },
  build: {
    base: `${buildFolder}/`,
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
    thirdParty: `${buildFolder}/thirdParty/`
  },
  src: {
    base: `${srcFolder}/*.html`,
    js: `${srcFolder}/js/`,
    scss: `${srcFolder}/scss/`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    fonts: `${srcFolder}/fonts/`,
    files: `${srcFolder}/files/**/*.*`,
    thirdParty: `${srcFolder}/thirdParty/**/*.*`,
  },
}

const exportConfig = {
  config,
  plugins,
  gulpPaths
}

export default exportConfig
