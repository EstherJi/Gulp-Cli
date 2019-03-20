module.exports = {
    '/questions': {
        msg: 'success',
        code: 0,
        'data|10': [
            {
                title: '@ctitle',
                content: '@cparagraph'
            }
        ]
    },

    '/servicePhone': {
        msg: 'success',
        code: 0,
        data: {
            phone: /^1[385][1-9]\d{8}/
        }
    }
}