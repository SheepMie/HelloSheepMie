<style scoped>
.TitleLine{
    padding:10px;
}
.swiper-container {
    overflow: visible;
}
.fullscreen{
  position: relative;
}
.background-blur{
  background:url('https://yanxuan.nosdn.127.net/15030393722652401.jpg') center/cover no-repeat;
  -webkit-filter: blur(15px);
  filter: blur(15px);
  position: absolute;
  z-index: -1
}
.scroll-cont{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2
}
.gallery-thumbs .swiper-slide {
    box-sizing: border-box;
    padding-right:10px;
  }
.gallery-thumbs .swiper-slide li{
    width: 100%;
    height: 60px;
    border-radius: 4px;
    background-size: auto 100%;
    background-position: center;
    overflow: hidden;
   
}
.gallery-thumbs .swiper-slide li a{
    display: block;
    height: 100%;
    width: 100%;
    text-align: center;
    line-height: 60px;
    font-size: 14px;
    color:#fff;
    background:rgba(0,0,0,0.3);
}
.gallery-thumbs li a{color:#fff;}

.gallery-thumbs {
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  width: 35%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
.TitleLine{
  height: calc(100% - 80px);
}
.gallery-cont{
  height: 100%;
}
.gallery-cont .swiper-slide{
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>

<template>
    <div class="fullscreen oflow">
      <div class="scroll-cont fullscreen">
          <swiper class="gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
            <swiper-slide v-for="(item,index) in classList" v-bind:key="index+1" @click.native="changebox(index)">
                <li  :style="{'background-image': 'url('+item.bgp+')'}"> <a>{{item.title}}</a></li>
            </swiper-slide>
          </swiper>
          <div class="TitleLine">
            <swiper :options="swiperOptionTop" class="gallery-cont" ref="swiperTop">
              <swiper-slide><dt><img src="https://yanxuan.nosdn.127.net/15030393722652401.jpg"></dt></swiper-slide>
              <swiper-slide ><dt><img src="http://yanxuan.nosdn.127.net/8fe0b7be33e5c19818f4ab0ae62310dd.png"></dt></swiper-slide>
              <swiper-slide ><dt><img src="http://yanxuan.nosdn.127.net/4493a1385009b0e9effbd9287257b269.png"></dt></swiper-slide>
              <swiper-slide ><dt><img src="http://yanxuan.nosdn.127.net/2bbfb3bf0a0b758fb950a351e22c3f01.png"></dt></swiper-slide>
              <swiper-slide ><dt><img src="https://yanxuan.nosdn.127.net/15030393722652401.jpg"></dt></swiper-slide>
            </swiper>
        </div>
      </div>
      <div class="background-blur fullscreen"></div>  
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
                swiperOptionThumbs: {
                      slidesPerView: 'auto',
                      freeMode : true,
                      notNextTick: true,
                      centeredSlides: true,
                      slideToClickedSlide: true,
                      notNextTick: true,
                      onClick: function(swiper){
                            
                      }
                 },
                 swiperOptionTop: {
                   spaceBetween: 10,
                   notNextTick: true,
                 },
                 classList:[
                    {title:'相簿',bgp:'https://yanxuan.nosdn.127.net/15030393722652401.jpg',topics:[{title:'宁波',id:'001'},{title:'随拍',id:'002'},{title:'四季',id:'003'},{title:'画作',id:'004'}]},
                    {title:'笔记',bgp:'http://yanxuan.nosdn.127.net/8fe0b7be33e5c19818f4ab0ae62310dd.png',topics:[{title:'宁波',id:'001'},{title:'矫情',id:'002'},{title:'大国',id:'003'},{title:'小家',id:'004'}]},
                    {title:'小说',bgp:'http://yanxuan.nosdn.127.net/4493a1385009b0e9effbd9287257b269.png',topics:[{title:'宁波',id:'001'},{title:'矫情',id:'002'},{title:'大国',id:'003'},{title:'小家',id:'004'}]},
                    {title:'音乐',bgp:'http://yanxuan.nosdn.127.net/2bbfb3bf0a0b758fb950a351e22c3f01.png',topics:[{title:'民谣',id:'001'},{title:'外语',id:'002'},{title:'轻音乐',id:'003'}]},
                    {title:'戒子规',bgp:'http://yanxuan.nosdn.127.net/2bbfb3bf0a0b758fb950a351e22c3f01.png',topics:[{title:'大道篇',id:'001'},{title:'为人篇',id:'002'},{title:'处事篇',id:'003'}]},
                 ],
                 
            }
          },
          mounted(){
            const swiperTop = this.$refs.swiperTop.swiper
            const swiperThumbs = this.$refs.swiperThumbs.swiper
            swiperTop.params.control = swiperThumbs
      
          },
          methods: { 
            changebox (index) {
              console.log(1)
              this.$refs.swiperTop.swiper.slideTo(index)
            }
          }
    }
</script>
