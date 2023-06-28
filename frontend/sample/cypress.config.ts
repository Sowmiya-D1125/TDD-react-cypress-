import { defineConfig } from "cypress";
import webpackConfig from '../sample/config/webpack.config'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      // webpackConfig,
      // // webpackConfig:true,
      // webpackConfig: async () => {
      //   // ... do things ...
      //   const modifiedConfig = await injectCustomConfig(baseConfig)
      //   return modifiedConfig
      // },
    },
  },
  env: {
    redbus: 'https://www.redbus.com',
    localapp:'http://localhost:3000/',
    skylab:'https://web-new-qa2.skylab.world/auth/login',
    skylabCMS:'https://cmsweb-new-qa2.skylab.world'
  },
});
