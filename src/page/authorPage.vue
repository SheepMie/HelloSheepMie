<style>
    .authorback{
        width:100%;
        background-image:url('https://yanxuan.nosdn.127.net/c646886fdf9abe1c69c4267380137ccc.jpg?imageView&quality=75') ;
        height: 200px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .author_cont_box{
        padding-top: 150px;
    }
    .author_cont header{
        position: absolute;
        width:90px;
        height: 90px;
        border:2px solid #fff;
        background-image: url('https://icity-static.icitycdn.com/images/uploads/user/avatar/j98q/cbf4d4a1e93ab3baj98qf8h.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        top:-70px;
        left: 50%;
        margin-left: -45px;
        border-radius: 50%;
    }
    .author_cont{
        position: relative;
        padding-top:20px;
        background:#fff;
    }
    .author_cont h3{
        font-weight: 600;
        line-height: 40px;
    }
    .author_cont h5{text-align: center;}
    .author_cont h5 span{
        font-size: 30px;
        font-family: Helvetica, Tahoma, Arial, "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
        color:#b7b7b7;
        line-height: 30px;
        vertical-align: text-top;
    }
    .author_cont h3,.author_cont p{
        text-align: center;

    }
    .author_cont p{
        margin: 0 10px;
        padding-bottom: 10px;
        border-bottom:1px solid #efefef;
    }
    .icon-dizhi{margin-right: 3px;color:#b7b7b7;}
    .author_nav{
        width: 100%;
        display: flex;
        justify-content: space-around;
        
    }
    .author_nav li{
        line-height: 40px;
        display: flex;
        align-items:center;
        color:#b7b7b7; 
    }
    .author_nav li span{
        margin-right: 3px;
        color: #428bca;
        font-size: 18px;
        font-weight: 600;
    }
    .icon-yang{
        margin-right: 3px;
        color: #428bca;
        font-size: 18px;
    }
    .pen_author_box{
        background:#eee;
        overflow: hidden;
    }
    .pen_author_box ul{
        margin-top:10px;
    }
    .author_dairy{
        width: 100%;
        background: #fff;
    }
    .author_dairy li{
        padding: 10px 0;
        margin:0 12px; 
    }
    .author_dairy li dl{
        line-height: 25px;
    }
    .author_dairy li span{
        color:#428bca;
    }
    .author_dairy li dt{
        color:#b7b7b7;
        font-size: 12px;
        line-height: 20px;

    }
    .author_dairy dt{
        display: flex;
        justify-content: space-between;

    }
    .author_dairy dt div{
        line-height: 25px;

    }
    .author_dairy .iconfont{font-size: 15px;margin-right: 5px; }
    .author_dairy .icon-pinglun{margin-left:5px; vertical-align: -1px;}
</style>
<template>
    <div class="fullscreen">
        <div class="authorback" :style="'transform: scale('+(1+y)+')'"></div>
        <scroller ref="my_scroller" >
            <div class="author_cont_box">
                <div class="author_cont">
                    <header></header>
                    <h3>sheepmie</h3>
                    <h5><span>“</span> 听风便是雨 <span>”</span></h5>
                    <p><i class="iconfont icon-dizhi"></i>宁波市</p>
                    <div class="author_nav">
                        <li><span>999+</span>留言</li>
                        <li><span>102</span>讨论板</li>
                        <li><span>99</span>日记</li>
                        <li><i class="iconfont icon-yang"></i>我是谁</li>
                    </div>
                    <div class="pen_author_box">
                        <ul class="author_dairy">
                            <li>
                                <dl>
                                    刚才才听到<br>
                                    我什么都不知道<br>
                                    你都已经走了<br>
                                    你还骗我你会回来<br>
                                    再别康桥<br>
                                </dl>
                                <span>点击展开</span>
                                <dt>
                                    <div class="state_l"><i class="iconfont icon-dayu"></i> 宁波市 18&#8451;</div>
                                    <div class="state_r"><i class="iconfontO icon-discount"></i> 日记 <i class="iconfont icon-pinglun"></i><i class="iconfont icon-shizhong"></i>2小时前</div>
                                </dt>
                            </li>
                        </ul>
                        <ul class="author_picture"></ul>
                        <ul class="author_hobby"></ul>
                    </div>
                </div>
            </div>
        </scroller>
    </div>
</template>

<script>
export default {
    name:'index',
    data(){
        return {
            y: 0,
            timer: 0
        }
    },
    mounted () {
        this.timer = setInterval(() => {
            let {left, top} = this.$refs.my_scroller.getPosition();
            if(top<0){
              this.y = -top/100;
            }
            
        }, 15)
    },
    beforeDestroy() {
      clearInterval(this.timer)
    }
}
</script>