import { config, mainParams } from "./config" //options from config.js

if (mainParams.IS_TAILWIND) {
  const allPlugins = {
    // typography: require("@tailwindcss/typography"),
    // forms: require("@tailwindcss/forms"),
    // containerQueries: require("@tailwindcss/container-queries"),
  }

  const plugins = Object.keys(allPlugins)
    .filter((key) => config.plugins[key])
    .map((key) => { if (key in config.plugins && config.plugins[key]) { return allPlugins[key] } })

  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{html,htm,scss,js,php}"],
    darkMode: "class",
    theme: {
      extend: {},
    },
    plugins: plugins,
  }
}
