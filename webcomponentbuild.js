const webpack = require('webpack');
webpack({
    watch:true,
    mode: 'development',
    entry: {
      app: [
          `${__dirname}/test/app.js`,
          `${__dirname}/test/main.js`
        ]
    },
    // target: 'web',
    output: {
      path: `${__dirname}/bin`,
      filename: '[name].min.js'
    }
  }, (err, stats) => {
    if(!err){
    console.log('completed')
    }else{
    console.log(err);
    }
    // console.log(stats);
});