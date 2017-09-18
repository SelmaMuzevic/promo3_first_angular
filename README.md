# promo3_first_angular
Premier Angular projet

lien pour installer librairie angular (npm):
// npm install @angular/core  @angular/common @angular/compiler @angular/compiler-cli @angular/platform-browser --save

pour installer autre package:
// npm install zone.js rxjs --save

installer webpack typescript: 
// npm install webpack ts-loader typescript --save-dev


// fichier config webpack
module.exports = {
    entry: './src/bootstrap.ts',
    output: './dist/bundle.js',
    extensions : ['.ts', '.tsx', '.js'],
    module: {
        loaders: [
          { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
      },
    devtool: 'inline-source-map'
}
