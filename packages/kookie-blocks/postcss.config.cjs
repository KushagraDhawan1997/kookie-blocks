module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nesting'),
    require('postcss-custom-media'),
    require('postcss-combine-duplicated-selectors'),
    require('postcss-discard-empty'),
    require('autoprefixer')
  ]
};
