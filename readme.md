# Gulp with TailwindCSS Starter Template

Gulp with TailwindCSS v3 Starter Kit ( ~~Updated with [TailwindCSS JIT](https://github.com/tailwindlabs/tailwindcss-jit)~~ - **latest tailwind has JIT is built-in** ) - A repo that makes your development easier with predefined gulp tasks that help you to use [tailwindcss](https://github.com/tailwindcss/tailwindcss) with simple commands.

## Features

- Easy configuration using `config.js`
- Live reload on file/assets changes using `browser-sync`
- SCSS support
- Minification of styles and scripts on production build
- Image conversion into Webp Format and automatic creation of Picture Tag in the assembly `gulp-webp`
- Includes following tailwindcss plugins (can be disabled/enabled with `config.js`)
- Automatic shooting of fonts from .ttf .woff and .woff2, automatically creating a fonts.scss file and font connecting.
- Other libraries included in the template "Swiper, LightGallery, ..." (to use them you need to uncomment the required functionality in the App.js file)
- Other scripts (to use them, you need to enable the necessary import in the App.js file)


## Quick Start

You can get started by clicking on `Use this template` for creating new repo using this template or simply by cloning it.

Install dev dependencies

```sh
yarn add // or // npm install
```

Start development server with live preview

```sh
yarn dev // or // npm run dev
```

Generate build files for production server

```sh
yarn dev // or // npm run dev (No Webp)
```

Project build without converting images 

```sh
yarn build // or // npm run build (No Webp)
```

Project build with image converting

```sh
yarn webp // or // npm run webp (Webp)
```

All dev files are present in `src` folder. The build version can be found in `build` folder after running `yarn build` command.

## Configuration

All configurations are found in `config.js` file in the root directory. You can configure browser default port, enable/disable plugins by simply updating boolean values (Default is set to `true`) and many more.

```js
export const mainParams = {
  IS_TAILWIND: true,
  WEBP_COMPRESS: 80,
  JPEG_COMPRESS: 80,
  PNG_COMPRESS: [0.7, 0.7],
}

// tailwind plugins
 // set to false to disable
const plugins = {
  typography: true,
  forms: true,
  containerQueries: true,
};
...
```

## License

This project is open source and available under the [MIT License](LICENSE).
