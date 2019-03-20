
define(['jquery'], function($){

    var Modal = function(option){
        this.data = {
            type: 'info',    // info/confirm
            title: '提示',
            content: '',
            confirmText: '确定',
            cancelText: '取消',
            closable: true,      // 是否自动触发弹框关闭
            onInit: '',
            onConfirm: '',
            onCancel: ''
        }

        this.mask = $('<div class="modal-mask"></div>');
        this.wrap = $('<div class="modal-wrap"></div>');
        this.wrapFooter = $('<div class="modal-btn re-bt"></div>');

        this.init(option);
    }

    Modal.prototype = {
        constructor: Modal,

        init: function(option){
            if(option){
                $.extend(this.data, option);
            }

            var wrapTitle = $('<h3 class="title">' + this.data.title + '</h3>'),
                wrapContent = $('<p class="content">' + this.data.content + '</p>');

            this.wrap.append(wrapTitle, wrapContent, this.wrapFooter);
            switch(this.data.type){
                case 'info': 
                    this.__info();
                    break;
                case 'confirm': 
                    this.__confirm();
                    break;
            }

            this.data.onInit && this.data.onInit(this);
            $('body').append(this.mask, this.wrap);

            return this;
        },

        __info: function(){
            var self = this,
                confirmBtn = $('<a class="confirm-btn">' + this.data.confirmText + '</a>');

            confirmBtn.appendTo(this.wrapFooter).on('click', function(){
                self.data.onConfirm && self.data.onConfirm(self);
                self.data.closable && self.close();
            })
        },

        __confirm: function(){
            var self = this,
                cancelBtn = $('<a class="cancel-btn re-br">' + this.data.cancelText + '</a>'),
                confirmBtn = $('<a class="confirm-btn">' + this.data.confirmText + '</a>');

            cancelBtn.appendTo(this.wrapFooter).on('click', function(){
                self.data.onCancel && self.data.onCancel(self);
                self.data.closable && self.close();
            })

            confirmBtn.appendTo(this.wrapFooter).on('click', function(){
                self.data.onConfirm && self.data.onConfirm(self);
                self.data.closable && self.close();
            })
        },

        close: function(){
            this.mask.remove();
            this.wrap.remove();
        }
    }

    return Modal;
})