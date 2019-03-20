
const REPLACE_PATH = global.theme + '/';

const DIST   = 'dist/' + REPLACE_PATH,
      SOURCE = 'src/',
      STATIC = 'assets/',
      CSS    = 'css/',
      SCSS   = 'scss/',
      JS     = 'js/',
      IMG    = 'img/',
      HTML   = 'html/',
      PUBLIC = 'public/',
      VIEW   = '__view/',
      SPRITE = 'sprite/';

module.exports = {
    path: {
        DIST,
        SOURCE,
        STATIC,
        CSS,
        SCSS,
        JS,
        IMG,
        HTML,
        PUBLIC,
        VIEW,
        SPRITE,
        DIST_CSS      : DIST + STATIC + CSS,
        DIST_JS       : DIST + STATIC + JS,
        DIST_IMG      : DIST + STATIC + IMG,
        DIST_HTML     : DIST,
        DIST_OTHER    : DIST + STATIC + 'other/',
        SOURCE_CSS    : SOURCE + STATIC + CSS,
        SOURCE_SCSS   : SOURCE + STATIC + SCSS,
        SOURCE_JS     : SOURCE + STATIC + JS,
        SOURCE_IMG    : SOURCE + STATIC + IMG,
        SOURCE_HTML   : SOURCE + HTML,
        SOURCE_VIEW   : SOURCE + VIEW,
        SOURCE_PUBLIC : SOURCE + PUBLIC,
        sSprite       : SOURCE + STATIC + SPRITE,
        tinyPath      : SOURCE + STATIC + 'tinypngBak/',
        revPath       : './rev/',
        MOCK_MODULES  : 'gulp/mock/module/'
    },
    server: {
        PORT: 3018,
        STATR_PATH: '/',
        PROXY: {
            KEY: '/_api',
            REMOVE_KEY: true,
            TARGET: ''
        },
        ROUTER: [
            {
                PATH: '/pc',
                TOTAL: 'index.html'
            }
        ]
    },
    image: {
        SPRITE: {
            RATIO: 2,
            UNIT: 'px'
        },
        TINYPNG_KEY: ''
    },
    html: {
        removeComments: true, //清除HTML注释
        collapseWhitespace: false, //压缩HTML
        collapseBooleanAttributes: false, //省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
        minifyJS: true, //压缩页面JS
        minifyCSS: true //压缩页面CSS
    },
    replace: {
        html: [
                [/\/assets/g, '/h5/assets']
        ],
        js: [
                [/\/assets/g, '/h5/assets'],
                ['/__api', '']
        ],
        js_prod: [
                ['sa?project=tdwloantest', 'sa?project=tdwloan']
        ],
        css: []
    },
    exclude: {
        js: [],
        img: ['my_head_default.png']
    },
    others: [
        'do_not_delete/*.*',
        'assets/other/**/*.*'
    ],
    public: {
        KEYWORDS: 'keywords..',
        DESCRIPTION: 'description...'
    }
}