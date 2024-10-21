import { config, mainParams } from "./config.js" //options from config.js
import typography from "@tailwindcss/typography"
import forms from "@tailwindcss/forms"
import containerQueries from "@tailwindcss/container-queries"

if (mainParams.IS_TAILWIND) {
  const allPlugins = {
    typography,
    forms,
    containerQueries,
  }

  const plugins = Object.values(allPlugins).filter((plugin) => {
    return plugin && config.plugins && config.plugins[plugin.name]
  })

  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{html,htm,scss,js,php}"],
    darkMode: "class",
    theme: {
      extend: {

      },
    },
    plugins: plugins,
  }
}
