<style scoped>
.TitleLine{
    padding:10px;
}
.swiper-container {
    overflow: visible;
}
.swiper-slide {
    box-sizing: border-box;
    padding-right:10px;
  }
.swiper-slide li{
    width: 100%;
    height: 60px;
    border-radius: 4px;
    background-size: auto 100%;
    background-position: center;
    overflow: hidden;
   
}
.swiper-slide li a{
    display: block;
    height: 100%;
    width: 100%;
    text-align: center;
    line-height: 60px;
    font-size: 14px;
    color:#fff;
    background:rgba(0,0,0,0.3);
}
.scroll-container li{color:#fff;}
</style>

<template>
    <div class="fullscreen oflow">
        <div class="TitleLine">
            <swiper :options="swiperOption">
                <swiper-slide v-for="item in classList">
                    <li  :style="{'background-image': 'url('+item.bgp+')'}"> <a>{{item.title}}</a></li>
                </swiper-slide>
            </swiper> 
            
        </div>
        <scroller>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
            </scroller>
    </div>  
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import Velocity from 'velocity-animate';
    export default {
        name: 'classList',
        components: {Velocity,swiper, swiperSlide},
        data () {
            return {
                swiperOption: {
                      slidesPerView: 3,
                      paginationClickable: true,
                      freeMode : true,
                 },
                 classList:[
                    {title:'相簿',bgp:'https://yanxuan.nosdn.127.net/15030393722652401.jpg',topics:[{title:'宁波',id:'001'},{title:'随拍',id:'002'},{title:'四季',id:'003'},{title:'画作',id:'004'}]},
                    {title:'笔记',bgp:'http://yanxuan.nosdn.127.net/8fe0b7be33e5c19818f4ab0ae62310dd.png',topics:[{title:'宁波',id:'001'},{title:'矫情',id:'002'},{title:'大国',id:'003'},{title:'小家',id:'004'}]},
                    {title:'小说',bgp:'http://yanxuan.nosdn.127.net/4493a1385009b0e9effbd9287257b269.png',topics:[{title:'宁波',id:'001'},{title:'矫情',id:'002'},{title:'大国',id:'003'},{title:'小家',id:'004'}]},
                    {title:'戒子规',bgp:'http://yanxuan.nosdn.127.net/2bbfb3bf0a0b758fb950a351e22c3f01.png',topics:[{title:'大道篇',id:'001'},{title:'为人篇',id:'002'},{title:'处事篇',id:'003'}]},

                 ]
            }
          },
        
        methods: { 
            
        },
    }
</script>
