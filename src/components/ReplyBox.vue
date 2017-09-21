<style>
.form-box-mask{
    padding-top: 60px;
    position: fixed;
    left: 0px;
    width: 100%;
    height: 588px;
    top: 0;
    z-index: 100;
}
.form-box{
    position: relative;
    margin: 8px;
    z-index: 17;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    background-color: #f8f8f8;
}
.form-box .form-hd {
    height: 40px;
    line-height: 40px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    position: relative;
}
.form-box .form-hd .item {
    padding: 0 15px;
    font-size: 16px;
    color: #287faf;
}
.form-hd:after{
    content: '';
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 0;
    border-top: solid 1px #e1e1e1;
    font: 0/0 arial;
}
.form-box .form-hd .item:nth-child(2) {
    display: block;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    color: #000;
    padding: 0;
}
.form-box .form-hd .item:last-child {
    font-weight: 700;
}


.form-box .form-bd {
    position: relative;
}
.write-text {
    padding: 12px 10px 0; 
}
.write-text textarea {
    border: 0;
    margin: 0;
    outline: 0;
    width: 100%;
    resize: none;
    min-height: 60px;
    font-size: 16px;
}
.write-plugin .item {
    display: inline-block;
    width: 44px;
    height: 44px;
    vertical-align: top;
    position: relative;
    color: transparent;
}
.write-plugin .icon-at:before {
    background-image: url('../assets/img/qq_icon.png');
    background-position: -75px -67px;
    background-size: 130px 116px;
}
.write-plugin .icon-emoji:before {
    background-image: url('../assets/img/qq_icon.png');
    background-position: -39px -33px;
    background-size: 130px 116px;
}
.write-plugin .item:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 24px;
    height: 24px;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
}
.write-plugin .counter {
    float: right;
    color: #999;
    line-height: 44px;
    font-size: 14px;
    padding: 0 10px 0 0;
}
</style>

<template>
    <div class="form-box-mask">
        <div class="form-box">
            <div class="form-hd J_operate">
                <button class="item J_close">取消</button>
                <b class="item J_title">评论</b>
                <button class="item" data-hook="form-submit">发表</button>
            </div>
            <div class="form-bd">
                <div class="write-text">
                    <textarea placeholder="我也说一句..."></textarea>
                </div>
                <div class="write-plugin">
                    <button class="item icon-at">提到好友</button>
                    <button class="item icon-emoji active">插入表情</button>
                    <span class="counter">20</span>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
    export default {
        name: 'sheep-replybox',
        data () {
            return {
                
            }
        },
        watch:{
            
        },
        methods: { 
            
        },
    }
</script>
