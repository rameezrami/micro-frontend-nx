const { execSync } = require('child_process');
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
exports.default = {
    post: ({ outputPath }) => {
        colorConsole('🚀 Micro app bundling started.','cyan')
        
        const npmCommand =  `node build-components.js --outputPath=${outputPath}`

        try {
            execSync(npmCommand);
            colorConsole('💼 Micro app bundling complete.','success')
        }
        catch(err) {
            colorConsole('💥 Micro app bundling failed.','error')
            throw err
        }
    }
};