const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  base: process.env.NODE_ENV === "production" ? "/your-production-path/" : "/",
  transpileDependencies: true,
});
