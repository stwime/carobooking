
module.exports = {

    presets: [
      '@babel/preset-react' // necessary for all .jsx files
    ],
  
    // fullcalendar attempts to import its own CSS files, but next.js does not allow this.
    // throw away these statements before they arrive at next.js,
    // but you'll need to import them manually in pages/_app.jsx.
    // will also work for any other 3rd-party packages that attempt to do this.
    overrides: [{
      include: [
        './node_modules'
      ],
      plugins: [
        "inline-react-svg",
        ['babel-plugin-transform-require-ignore', {
          extensions: ['.css']
        }]
      ]
    }]
  
  }