var sass = require('node-sass');

var result = sass.renderSync({
  file: 'index.scss',
  includePaths: ['public'],
  // data: 'body{background:blue; a{color:black;}}',
  outputStyle: 'compressed',
  outFile: 'output.css',
  sourceMap: true, // or an absolute or relative (to outFile) path
  importer: function(url, prev, done) {
 
    console.log(url, prev, "madthad91");
    return {file: result.path, contents: result.data};
  },
  success: function(result) {
    // you will need to write result.css to file-system, we just return you a string
    // same goes for result.map
    console.log('hai me', result)
  }
});

var exec = require('child_process').exec;

exec('export me2="'+JSON.stringify(result)+ '"; echo $me2 > lezgo; echo $me2 ', function (error, stdout, stderr) {
    console.log(stdout);
});