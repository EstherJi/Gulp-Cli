module.exports = {
    '/list': {
        'regexp|3': /\d{5,10}\-/
    },
    '/index/banner': [
        {
            pic: '1.jpg',
            path: 'http://www.baidu.com'
        },
        {
            pic: '222.jpg',
            path: 'http://www.sina.com'
        },
        {
            pic: '3333.jpg',
            path: 'http://www.qq.com'
        },
    ],
    '/user/initGeetestCaptcha': {
        code: 1,
        data: {
            success: 1,
            challenge: '349c649a23fb1eea4bc93d18f2cb0cc1',
            gt: 'ec932d95348a18ee03a4a011ce5f9528'
        }
    }
}