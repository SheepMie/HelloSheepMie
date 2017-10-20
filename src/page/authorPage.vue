<style>
    .authorflow{background:#eee;}
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
        width:120px;
        height: 120px;
        border:2px solid #fff;
        background-image: url('https://icity-static.icitycdn.com/images/uploads/user/avatar/j98q/cbf4d4a1e93ab3baj98qf8h.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        top:-90px;
        left: 50%;
        margin-left: -60px;
        border-radius: 50%;
        box-shadow: 0 1px 5px #b7b7b7;
    }
    .author_cont{
        position: relative;
        background:#fff;
    }
    .author_cont h2{
        font-weight: 600;
        line-height: 45px;
    }
    .author_cont h5{text-align: center;}
    .author_cont h5 span{
        font-size: 30px;
        font-family: Helvetica, Tahoma, Arial, "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
        color:#b7b7b7;
        line-height: 30px;
        vertical-align: text-top;
    }
    .author_cont h2,.author_cont p.dizhi{
        text-align: center;

    }
    .author_cont p.dizhi{
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
        box-shadow: 0 1px 3px #dcdcdc;
        background: #fff;
        width: 100%;
    }
    .header_author{ padding-top:25px;margin-top:0!important;}
    .author_dairy li,.author_picture .author_picture_list,.author_about li{
        padding: 5px 0;
        margin:0 12px; 
        border-bottom:1px solid #efefef;
    }
    .author_dairy li dl{
        line-height: 25px;
        font-size: 15px;
        color:#000;
    }
    .author_dairy li dl p,.author_about li p{
        margin: 0;
        padding: 5px 0;
    }
    .author_dairy li dl img{
        margin: 0;
        padding: 5px 0;
    }
    .author_dairy li span{
        color:#428bca;
    }
    .author_dairy li dt,.author_dairy li dt a{
        color:#b7b7b7;
        font-size: 12px;
        line-height: 20px;

    }
    .author_dairy dt{
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
    }
    
    .author_dairy .iconfont{font-size: 17px;vertical-align: -2px; }
    .author_about .iconfont{color:#b7b7b7;font-size: 20px;vertical-align: middle;}
    .state_l .iconfont{vertical-align: -1px;}
    .state_r a{margin: 0 4px;}
    .pen_author_box ul footer{line-height: 30px;color:#999;text-align: center;font-size: 13px;}
    
    .author_picture .author_picture_list{
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
    }
    .author_picture li{
        width:23.5%;
        padding-top:23.5%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        
    }
    .author_about p{color:#000;}
    .dairy_state{display: block;line-height: 30px;text-align: center;font-size: 12px;color:#999;}
    .author_about p.answer{color:#428bca;}

    .slide{background:rgba(0,0,0,0.5)}
</style>
<template>
    <div class="fullscreen authorflow">
        <div class="authorback" :style="'transform: scale('+(1+y)+')'"></div>
        <scroller ref="my_scroller" >
            <div class="author_cont_box">
                <div class="author_cont">
                    <div class="pen_author_box">
                        <ul class="header_author">
                            <header></header>
                            <h2>sheepmie</h2>
                            <h5><span>“</span> 听风便是雨 <span>”</span></h5>
                            <p class="dizhi"><i class="iconfont icon-dizhi"></i>宁波市</p>
                            <div class="author_nav">
                                <router-link  to="/authorPage/message"><li><span>999+</span>留言</li></router-link>
                                <li><span>102</span>讨论板</li>
                                <li><span>99</span>日记</li>
                                <li><span>20</span>回忆录</li>
                            </div>
                        </ul>
                        <ul class="author_dairy">
                            <li>
                                <dl>
                                    <p>
                                    刚才才听到<br>
                                    我什么都不知道<br>
                                    你都已经走了<br>
                                    你还骗我你会回来<br>
                                    再别康桥<br>
                                    </p>
                                    <!-- <span>点击展开</span> -->
                                </dl>
                                
                                <dt>
                                    <div class="state_l"><i class="iconfont icon-dayu"></i> 宁波市 18&#8451;</div>
                                    <div class="state_r"> 
                                        <a><i class="iconfont icon-zan"></i> 12</a>
                                        <a><i class="iconfont icon-pinglun"></i> </a>
                                        <a><i class="iconfont icon-shizhong"></i> 2小时前</a>
                                    </div>
                                </dt>
                            </li>
                            <li>
                                <dl>
                                    <img src="https://yanxuan.nosdn.127.net/c646886fdf9abe1c69c4267380137ccc.jpg?imageView&quality=75">
                                    <p>
                                    刚才才听到<br>
                                    我什么都不知道<br>
                                    你都已经走了<br>
                                    你还骗我你会回来<br>
                                    再别康桥<br>
                                    </p>
                                </dl>
                                <dt>
                                    <div class="state_l"><i class="iconfont icon-dayu"></i> 宁波市 18&#8451;</div>
                                    <div class="state_r"> 
                                        <a><i class="iconfont icon-zan"></i> 12</a>
                                        <a><i class="iconfont icon-pinglun"></i> </a>
                                        <a><i class="iconfont icon-shizhong"></i> 2小时前</a>
                                    </div>
                                </dt>
                            </li>
                            <footer>更多日记</footer>
                        </ul>
                        <ul class="author_picture">
                            <div class="author_picture_list">
                                <li :style="{'background-image': 'url(https://yanxuan.nosdn.127.net/c646886fdf9abe1c69c4267380137ccc.jpg?imageView&quality=75)'}"></li>
                                <li :style="{'background-image': 'url(https://yanxuan.nosdn.127.net/c646886fdf9abe1c69c4267380137ccc.jpg?imageView&quality=75)'}"></li>
                                <li></li>
                                <li></li>
                            </div>
                            <footer>更多照片</footer>
                        </ul>
                        <ul class="author_about">
                            <li>
                                <p><i class="iconfont icon-question"></i> 为何要写这日记</p>
                                <p class="answer"><i class="iconfont icon-answer"></i> 盆友圈太假</p>
                            </li>
                            <li>
                                <p><i class="iconfont icon-question"></i> 还有呢</p>
                                <p class="answer"><i class="iconfont icon-answer"></i> 我爱装逼</p>
                            </li>
                            <footer>有关于我</footer>
                        </ul>
                        <span class="dairy_state">更新于 2017年10月20日</span>
                    </div>
                </div>
            </div>
        </scroller>
        <transition>
            <router-view></router-view>
        </transition>
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