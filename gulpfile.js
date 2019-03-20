process.argv.forEach((item) => {

    const path = item.match(/-p=(.*)/);
    global.theme = path ? path[1] : 'default';

    if (item === 'dev') {
        global.commandName = 'dev';
    } else {
        const result = item.match(/-env=(.*)/);       

        if (result) {
            global.env = result[1];
        } 
    }
})

const requireDir = require('require-dir');
requireDir('./gulp/module/');
requireDir('./gulp/');