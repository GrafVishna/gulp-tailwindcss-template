// ================================
// ================================
export const mainParams = {
  IS_TAILWIND: true,
  WEBP_COMPRESS: 80,
  JPEG_COMPRESS: 80,
  PNG_COMPRESS: [0.7, 0.7],
}
// ================================
// ================================

export const config = {
  tailwindjs: "./tailwind.config.js",
  port: 4000,
  purgecss: {
    content: ["src/**/*.{html,htm,js,php}"],
    safelist: {
      standard: [/^pre/, /^code/],
      greedy: [/token.*/],
    },
    defaultExtractor: (content) => {
      const v3Regex = /[(\([&*\])|\w)-:./]+(?<!:)/g
      const broadMatches = content.match(v3Regex) || []
      const innerMatches =
        content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
      return broadMatches.concat(innerMatches)
    },
  },
  webp: {
    quality: mainParams.WEBP_COMPRESS // Webp quality
  },
  imagemin: {
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }],
    interlaced: true,
    png: mainParams.PNG_COMPRESS, // Png quality
    jpeg: mainParams.JPEG_COMPRESS, // Jpeg quality
  },

  include: {
    prefix: '@@',
    basepath: '@root'
  },

  plugins: {
    typography: true,
    forms: true,
    containerQueries: true,
  }
}

// Project Paths
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
  },
  src: {
    root: `${srcFolder}/`,
    base: `${srcFolder}/*.html`,
    components: `${srcFolder}/components/`,
    js: `${srcFolder}/js/`,
    scss: `${srcFolder}/scss/`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    fonts: `${srcFolder}/fonts/`,
    files: `${srcFolder}/files/**/*.*`,
  },
}

