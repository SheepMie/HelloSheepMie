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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  z-index: -1;
  
}
.back-active{
  opacity: 1;

  transition: all 1s ease;
}
.back-leave{
  opacity: 0;
  transition: all 1s ease;
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
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
.gallery-cont img{
  border-radius: 6px;
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
            <swiper :options="swiperOptionCont" class="gallery-cont" ref="swiperCont">
              <swiper-slide v-for="(item,index) in classList" v-bind:key="index+1"><dt class="swiper-zoom-container"><img :src="item.bgp"></dt></swiper-slide>
            </swiper>
        </div>
      </div>
      <div class="fullscreen" style="-webkit-filter: blur(30px);filter: blur(30px);">
        <div class="background-blur fullscreen" :class="{'back-active':backgroundBlur == index,'back-leave':backgroundBlur !=index}" v-for="(item,index) in classList" :style="{'background-image': 'url('+item.bgp+')'}"></div>  
      </div>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import Velocity from 'velocity-animate';
    export default {
        name: 'classList',
        components: {Velocity,swiper, swiperSlide},
        data () {
            let vm = this;
            return {
                classList:[
                  {title:'相簿',bgp:'https://yanxuan.nosdn.127.net/c646886fdf9abe1c69c4267380137ccc.jpg?imageView&quality=75',topics:[{title:'宁波',id:'001'},{title:'随拍',id:'002'},{title:'四季',id:'003'},{title:'画作',id:'004'}]},
                  {title:'笔记',bgp:'https://yanxuan.nosdn.127.net/42a74ba5f1579e7f871ce293085c8b62.jpg?imageView&quality=75',topics:[{title:'宁波',id:'001'},{title:'矫情',id:'002'},{title:'大国',id:'003'},{title:'小家',id:'004'}]},
                  {title:'小说',bgp:'https://yanxuan.nosdn.127.net/48f7fc275398b6cb48aa670e896f6dd6.jpg?imageView&quality=75',topics:[{title:'宁波',id:'001'},{title:'矫情',id:'002'},{title:'大国',id:'003'},{title:'小家',id:'004'}]},
                  {title:'音乐',bgp:'https://yanxuan.nosdn.127.net/74373b06b38aa134e2df9f8d017370b6.jpg?imageView&quality=75',topics:[{title:'民谣',id:'001'},{title:'外语',id:'002'},{title:'轻音乐',id:'003'}]},
                  {title:'戒子规',bgp:'https://yanxuan.nosdn.127.net/ce358fcee3a5eb9dba9bce277a7e9445.jpg?imageView&quality=75',topics:[{title:'大道篇',id:'001'},{title:'为人篇',id:'002'},{title:'处事篇',id:'003'}]},
                ],
                swiperOptionThumbs: {
                      slidesPerView: 'auto',
                      freeMode : true,
                      centeredSlides: true,
                 },
                 swiperOptionCont: {
                   spaceBetween: 10,
                   zoom: true,
                   onSlideChangeStart:function(swiper){
                      vm.backgroundBlur = swiper.activeIndex;
                      if (swiper.zoom.scale != 1) {
                        swiper.zoom.toggleZoom(swiper)
                      }
                      
                   }
                 },
                 backgroundBlur:0
            }
          },
          mounted(){
            const vm = this;
            const swiperCont = this.$refs.swiperCont.swiper;
            const swiperThumbs = this.$refs.swiperThumbs.swiper;
            swiperCont.params.control = swiperThumbs;
      
          },
          methods: { 
            changebox (index) {
              this.$refs.swiperCont.swiper.slideTo(index)
            }
          }
    }
</script>
