var apply = require('apply-css')
var fs = require('fs')

var style = fs.readFileSync(__dirname + '/styles.css', { encoding: 'utf8' })

apply(document.querySelector('#right'), style)
