define(['sensors'], function(sa){

    var main = {
        sensorsServerUrl: 'https://sensorslog.tdw.cn/sa?project=tdwloantest',
        // 'https://sensorslog.tdw.cn/sa?project=tdwloan'
        oQuery: {
            tdfrom: '',
            tdsource: '',
            word: ''
        },

        init: function() {
            this.formatQuery();
            this.saInit();
        },

        formatQuery: function() {
            var aQuery = window.location.search.substring(1).split('&');
            for (var i = 0, l = aQuery.length; i < l; i++) {
                var equalIndex = aQuery[i].indexOf('=');
                if (equalIndex > 0) {
                    this.oQuery[aQuery[i].slice(0, equalIndex)] = aQuery[i].slice(equalIndex + 1);
                }
            }
        },

        saInit: function() {
            sa.init({
                server_url: this.sensorsServerUrl
            });

            sa.quick('autoTrack', {
                tdfrom: this.oQuery.tdfrom,
                tdsource: this.oQuery.tdsource,
                word: this.oQuery.word
            });
        }
    }

    main.init();



    var LoginSuccess = function() {
        sa.track('LoginSuccess', {
            'PlatformType': 'WAP',
            'PlatformName': '团贷网借款'
        })
    }

    var bindUserId = function(id) {
        sa.login(id)
    }

    var RechargeSuccess = function(params) {
        /*
        *   params: {
        *       RechargeAmount: 3456.78,    //充值金额
        *       IssuingBank: 00000,         //发卡行
        *       SourceType: 0               //来源类型: 0: APP内置H5 | 1: WAP
        *   }
        */
        if (typeof params === 'object') {
            sa.track('RechargeSuccess', {
                'PlatformType': 'WAP',
                'PlatformName': '团贷网借款',
                'RechargeAmount': params.RechargeAmount,
                'IssuingBank': params.IssuingBank,
                'SourceType': params.SourceType === 0 ? 'APP内置H5' : 'WAP'
            })
        }
    }

    return {
        bindUserId: bindUserId,
        LoginSuccess: LoginSuccess,
        RechargeSuccess: RechargeSuccess
    }
})