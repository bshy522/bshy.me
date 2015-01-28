var dest = './public/dist',
    src = './app/assets',
    mui = './node_modules/material-ui/src';

module.exports = {
    jsx: {
        src: src + '/app.jsx',
        watch: [
            src + '/**/*.jsx'
        ]
    },
    less: {
        src: src + '/app.less',
        watch: [
            src + '/less/**/*.less' //,
            // mui + '/less/**'
        ],
        dest: dest
    },
    fonts: {
        src: mui + '/less/material-design-fonticons/fonts/**',
        dest: dest + '/fonts/mdfonticon'
    },
    muiFonts: {
        src: mui + '/less/material-ui-icons/fonts/**',
        dest: dest + '/fonts'
    }
};
