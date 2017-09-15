<style>

.fixed{position: absolute;top:0;width:100%;height: 100%;padding:10px;}
.article ul{
    
    width:100%;
    height: calc(100% - 92px);
    overflow:hidden;
    background:#fff;
    }
.dairyText{text-align: center;font-size: 16px;}
.header{
    background:#CC6699;
    width: 100%;
    padding: 10px 20px;
    color:#fff;
    border-radius: 5px 5px 0 0;   
    
    }
.footer_box{
    width:100%;
    background:#fff;
    border-radius:0 0 5px 5px;
    overflow: hidden;
    }
.footer{
    padding: 10px 0;
    margin: 0 20px;
    border-top: 1px solid #eee;
}
.footer > span{
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
}

.slidebox{
    height: 100%;
    
    perspective:600px;
    position: relative;
}
.article , .comment{
    top:0;
    left:0;
    height: 100%;
    width:100%;
        /*
    指定嵌套元素如何在3D空间中呈现。
    */
    
    transform-style: preserve-3d;
    /*
    隐藏被旋转的 div 元素的背面
    */
    
    backface-visibility: hidden;

    transition:0.8s ease-in-out ;
    position:absolute;

}
.article{
    
    transform: rotateY(0);
    z-index: 1;
}
.rotate1{
    transform: rotateY(-180deg);
    
}
.rotate2{
    transform: rotateY(0) !important;
    z-index: 9;
}
.comment{
    height: 100%;
    width: 100%;
    transform: rotateY(180deg);
    z-index: 9;
    background:url("/static/img/back.jpg") 18% 50%/cover  no-repeat;
}
</style>

<template>
    <div class="fixed slide">
        <div class="slidebox">
            <div class="article" :class="{'rotate1':isdairlShow}">
                 <div class="header h4 " @click="isdairlShow = !isdairlShow">泡芙小姐</div>
                <ul >
                    
                    <pull-to class="dairyTextBox">
                        <div class="dairyText" v-if="!isdairlShow">
                            <p>故事的小黄花</p>

                            <p>从出生那年就飘着</p>
                            <input type="text" >
                            <p>童年的荡秋千</p>

                            <p>随记忆一直晃到现在</p>

                            <p>ㄖㄨㄟ ㄙㄡ ㄙㄡ ㄒ一 ㄉㄡ ㄒ一ㄌㄚ</p>
                            <p>Re So So Si Do Si La</p>
                            <p>ㄙㄡ ㄌㄚ ㄒ一 ㄒ一 ㄒ一 ㄒ一 ㄌㄚ ㄒ一 ㄌㄚ ㄙㄡ</p>
                            <p>吹着前奏望着天空</p>

                            <p>我想起花瓣试着掉落</p>

                            <p>为你翘课的那一天</p>

                            <p>花落的那一天</p>

                            <p>教室的那一间</p>

                            <p>我怎么看不见</p>

                            <p>消失的下雨天</p>

                        </div>
                    </pull-to>
                    
                </ul>
                <div class="footer_box">
                    <div class="footer">
                        <span class="hide_mobile" title="标签"><i class="iconfont icon-discount"></i>日记</span>
                    </div>
                </div> 
            </div>
            <div class="comment" :class="{'rotate2':isdairlShow}">
                123
                <button  @click="isdairlShow = !isdairlShow">back</button>
            </div>
        </div>
    </div>
</template>

<script>
    import PullTo from 'vue-pull-to';
    export default {
        name: 'dairy',
        components: {PullTo},
        data () {
            return {
                isdairydetail:false,
                isdairlShow:false
            }
        },
        
        methods: { 
            
        },
    }
</script>
