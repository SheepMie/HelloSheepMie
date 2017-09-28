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
.emoji-mod {
    padding: 10px 10px 20px 10px;
    background-color: #f1f1f1;
    margin: -1px 0 0;
    position: relative;
}
.emoji-mod .select-area {
    width: 100%;
    height: auto;
    padding-top: 42.857%;
    position: relative;
}
.emoji-mod .select-area ul{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
}

.mint-swipe {
    height: 100%;
    overflow:inherit;
}
.mint-swipe-item:first-child{
    background:url('../assets/img/1@2x.png');
}
.mint-swipe-item:nth-child(2){
    background:url('../assets/img/2.png');
}
.mint-swipe-item:nth-child(3){
    background:url('../assets/img/3.png');
}
.mint-swipe-item:nth-child(4){
    background:url('../assets/img/4.png');
}
.mint-swipe-item:nth-child(5){
    background:url('../assets/img/5.png');
}
.mint-swipe-item {
    background-position: center;
    background-repeat: no-repeat !important;
    background-size: 100% !important;
    flex: 1;
}
.mint-swipe-indicator.is-active {
    background: #2d8ae7;
    opacity: 1
}
.mint-swipe-indicators{
    bottom: -15px;
}

.emoji-mod .select-area .mint-swipe-item .emoji-item {
    width: 14.2858%;
    padding-top: 14.2858%;
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    height: 0;
}
.write-plugin .icon-emoji.active:before {
    background-image: url('../assets/img/qq_icon.png');
    background-position: -64px -33px;
    background-size: 130px 116px;
}
</style>

<template>
    <div class="form-box-mask">
        <div class="form-box">
            <div class="form-hd J_operate">
                <button class="item J_close" @click="$store.commit('closeReply')">取消</button>
                <b class="item J_title">评论</b>
                <button class="item" data-hook="form-submit">发表</button>
            </div>
            <div class="form-bd">
                <div class="write-text">
                    <textarea placeholder="我也说一句..." @click="useQQIcon = false"></textarea>
                </div>
                <div class="write-plugin">
                    <button class="item icon-at">提到好友</button>
                    <button class="item icon-emoji " @click="useQQIcon = !useQQIcon" :class="{active:useQQIcon}">插入表情</button>
                    <span class="counter">20</span>
                </div>
            </div>
            <div class="form-ft" v-if="useQQIcon">
                <div data-textmod="emoji" class="emoji-mod">
                    <div class="select-area">
                        <ul>
                            <mt-swipe :auto="0">
                                <mt-swipe-item>
                                     <button class="emoji-item" data-emoji="100" title="微笑"></button>
                                     <button class="emoji-item" data-emoji="101" title="撇嘴"></button>
                                     <button class="emoji-item" data-emoji="102" title="色"></button>
                                     <button class="emoji-item" data-emoji="103" title="发呆"></button>
                                     <button class="emoji-item" data-emoji="104" title="得意"></button>
                                     <button class="emoji-item" data-emoji="105" title="流泪"></button>
                                     <button class="emoji-item" data-emoji="106" title="害羞"></button>
                                     <button class="emoji-item" data-emoji="107" title="闭嘴"></button>
                                     <button class="emoji-item" data-emoji="108" title="睡"></button>
                                     <button class="emoji-item" data-emoji="109" title="大哭"></button>
                                     <button class="emoji-item" data-emoji="110" title="尴尬"></button>
                                     <button class="emoji-item" data-emoji="111" title="发怒"></button>
                                     <button class="emoji-item" data-emoji="112" title="调皮"></button>
                                     <button class="emoji-item" data-emoji="113" title="呲牙"></button>
                                     <button class="emoji-item" data-emoji="114" title="惊讶"></button>
                                     <button class="emoji-item" data-emoji="115" title="难过"></button>
                                     <button class="emoji-item" data-emoji="116" title="酷"></button>
                                     <button class="emoji-item" data-emoji="117" title="冷汗"></button>
                                     <button class="emoji-item" data-emoji="118" title="抓狂"></button>
                                     <button class="emoji-item" data-emoji="119" title="吐"></button>
                                     <button class="emoji-item" data-oper="delete" title="删除"></button>
                                </mt-swipe-item>

                                <mt-swipe-item>
                                     <button class="emoji-item" data-emoji="120" title="偷笑"></button>
                                     <button class="emoji-item" data-emoji="121" title="可爱"></button>
                                     <button class="emoji-item" data-emoji="122" title="白眼"></button>
                                     <button class="emoji-item" data-emoji="123" title="傲慢"></button>
                                     <button class="emoji-item" data-emoji="124" title="饥饿"></button>
                                     <button class="emoji-item" data-emoji="125" title="困"></button>
                                     <button class="emoji-item" data-emoji="126" title="惊恐"></button>
                                     <button class="emoji-item" data-emoji="127" title="流汗"></button>
                                     <button class="emoji-item" data-emoji="128" title="憨笑"></button>
                                     <button class="emoji-item" data-emoji="129" title="大兵"></button>
                                     <button class="emoji-item" data-emoji="130" title="奋斗"></button>
                                     <button class="emoji-item" data-emoji="131" title="咒骂"></button>
                                     <button class="emoji-item" data-emoji="132" title="疑问"></button>
                                     <button class="emoji-item" data-emoji="133" title="嘘"></button>
                                     <button class="emoji-item" data-emoji="134" title="晕"></button>
                                     <button class="emoji-item" data-emoji="135" title="折磨"></button>
                                     <button class="emoji-item" data-emoji="136" title="衰"></button>
                                     <button class="emoji-item" data-emoji="137" title="骷髅"></button>
                                     <button class="emoji-item" data-emoji="138" title="敲打"></button>
                                     <button class="emoji-item" data-emoji="139" title="再见"></button>
                                     <button class="emoji-item" data-oper="delete" title="删除"></button>
                                </mt-swipe-item>
                                <mt-swipe-item>
                                    <button class="emoji-item" data-emoji="140" title="擦汗"></button>
                                    <button class="emoji-item" data-emoji="141" title="抠鼻"></button>
                                    <button class="emoji-item" data-emoji="142" title="鼓掌"></button>
                                    <button class="emoji-item" data-emoji="143" title="糗大了"></button>
                                    <button class="emoji-item" data-emoji="144" title="坏笑"></button>
                                    <button class="emoji-item" data-emoji="145" title="左哼哼"></button>
                                    <button class="emoji-item" data-emoji="146" title="右哼哼"></button>
                                    <button class="emoji-item" data-emoji="147" title="哈欠"></button>
                                    <button class="emoji-item" data-emoji="148" title="鄙视"></button>
                                    <button class="emoji-item" data-emoji="149" title="委屈"></button>
                                    <button class="emoji-item" data-emoji="150" title="快哭了"></button>
                                    <button class="emoji-item" data-emoji="151" title="阴险"></button>
                                    <button class="emoji-item" data-emoji="152" title="亲亲"></button>
                                    <button class="emoji-item" data-emoji="153" title="吓"></button>
                                    <button class="emoji-item" data-emoji="154" title="可怜"></button>
                                    <button class="emoji-item" data-emoji="155" title="菜刀"></button>
                                    <button class="emoji-item" data-emoji="156" title="西瓜"></button>
                                    <button class="emoji-item" data-emoji="157" title="啤酒"></button>
                                    <button class="emoji-item" data-emoji="158" title="篮球"></button>
                                    <button class="emoji-item" data-emoji="159" title="乒乓"></button>
                                    <button class="emoji-item" data-oper="delete" title="删除"></button>
                                </mt-swipe-item>
                                <mt-swipe-item>
                                    <button class="emoji-item" data-emoji="160" title="咖啡"></button>
                                    <button class="emoji-item" data-emoji="161" title="饭"></button>
                                    <button class="emoji-item" data-emoji="162" title="猪头"></button>
                                    <button class="emoji-item" data-emoji="163" title="玫瑰"></button>
                                    <button class="emoji-item" data-emoji="164" title="凋谢"></button>
                                    <button class="emoji-item" data-emoji="165" title="示爱"></button>
                                    <button class="emoji-item" data-emoji="166" title="爱心"></button>
                                    <button class="emoji-item" data-emoji="167" title="心碎"></button>
                                    <button class="emoji-item" data-emoji="168" title="蛋糕"></button>
                                    <button class="emoji-item" data-emoji="169" title="闪电"></button>
                                    <button class="emoji-item" data-emoji="170" title="炸弹"></button>
                                    <button class="emoji-item" data-emoji="171" title="刀"></button>
                                    <button class="emoji-item" data-emoji="172" title="足球"></button>
                                    <button class="emoji-item" data-emoji="173" title="瓢虫"></button>
                                    <button class="emoji-item" data-emoji="174" title="便便"></button>
                                    <button class="emoji-item" data-emoji="175" title="月亮"></button>
                                    <button class="emoji-item" data-emoji="176" title="太阳"></button>
                                    <button class="emoji-item" data-emoji="177" title="礼物"></button>
                                    <button class="emoji-item" data-emoji="178" title="拥抱"></button>
                                    <button class="emoji-item" data-emoji="179" title="强"></button>
                                    <button class="emoji-item" data-oper="delete" title="删除"></button>
                                </mt-swipe-item>
                                <mt-swipe-item>
                                    <button class="emoji-item" data-emoji="180" title="弱"></button>
                                    <button class="emoji-item" data-emoji="181" title="握手"></button>
                                    <button class="emoji-item" data-emoji="182" title="胜利"></button>
                                    <button class="emoji-item" data-emoji="183" title="抱拳"></button>
                                    <button class="emoji-item" data-emoji="184" title="勾引"></button>
                                    <button class="emoji-item" data-emoji="185" title="拳头"></button>
                                    <button class="emoji-item" data-emoji="186" title="差劲"></button>
                                    <button class="emoji-item" data-emoji="187" title="爱你"></button>
                                    <button class="emoji-item" data-emoji="188" title="NO"></button>
                                    <button class="emoji-item" data-emoji="189" title="OK"></button>
                                    <button class="emoji-item" data-emoji="190" title="爱情"></button>
                                    <button class="emoji-item" data-emoji="191" title="飞吻"></button>
                                    <button class="emoji-item" data-emoji="192" title="跳跳"></button>
                                    <button class="emoji-item" data-emoji="193" title="发抖"></button>
                                    <button class="emoji-item" data-emoji="194" title="怄火"></button>
                                    <button class="emoji-item" data-emoji="195" title="转圈"></button>
                                    <button class="emoji-item" data-emoji="196" title="磕头"></button>
                                    <button class="emoji-item" data-emoji="197" title="回头"></button>
                                    <button class="emoji-item" data-emoji="198" title="跳绳"></button>
                                    <button class="emoji-item" data-emoji="199" title="挥手"></button>
                                    <button class="emoji-item" data-oper="delete" title="删除"></button> 
                                </mt-swipe-item>
                            </mt-swipe>
                        </ul>
                    </div>
                    
                </div>
                <!--  -->
            </div>
        </div>
        
        <div style="position: absolute;left: 0;right: 0; top: -200px;bottom: -200px;background-color: rgba(0,0,0,.5);"></div>
    </div>  
</template>

<script>
    import store from '@/store/index';
    export default {
        name: 'sheep-replybox',
        store,
        data () {
            return {
                useQQIcon:false
            }
        },
        watch:{
            
        },
        methods: { 
            
        },
    }
</script>
