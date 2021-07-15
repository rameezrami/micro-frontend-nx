const cliArguments = require('minimist')(process.argv);

const webpack = require('webpack');
const colorConsole = (message,color = 'default')=>{
  const presets = {
    default:'%s',
    blink:'\x1b[5m',
    cyan:'\x1b[36m%s\x1b[0m',
    success:'\x1b[32m%s\x1b[0m',
    error:'\x1b[31m%s\x1b[0m'
  }
  color = presets[color] || color
  console.log(color, message);
}

const finalBundling = async(params) => {
  const sourceDir = params.outputPath
  const microAppDirName = sourceDir.replace('dist/apps/wc/', '')
  const outPutDir = `apps/mother/src/assets/wc/${microAppDirName}`

  colorConsole('🚀 Micro app bundling started.','cyan')

  webpack({
      mode: 'development',
      target: 'web',
      entry: {
          app: [
              `${__dirname}/${sourceDir}/polyfills.js`,
              `${__dirname}/${sourceDir}/main.js`
          ]
      },
      output: {
          path: `${__dirname}/${outPutDir}`,
          filename: '[name].js'
      }
  }, (err, stats) => {
      if (!err) {
        colorConsole('💼 Micro app bundling complete.','success')
      } else {
          colorConsole('💥 Micro app bundling failed.','error')
          console.log(err);
      }
      // console.log(stats);
  });
}
const outputPath = cliArguments.outputPath
if(outputPath){
  finalBundling({outputPath})
}else{
  console.error(`micro-app --outputPath is not defined. eg: --outputPath=dist/apps/wc/header`)
}