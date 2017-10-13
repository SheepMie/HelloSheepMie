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
/*.cont-scroller{position: relative;height: calc(100% - 80px);}
.my-scroller{color:#fff;}
.my-scroller .waterfalls{overflow: hidden;}
.waterfalls ul{
  width:50%;
  overflow: hidden;
}
.waterfalls .waterfalls_l{
  float: left;
}
.waterfalls .waterfalls_r{
  float: right;
}
.waterfalls ul li{
  width: 100%;
  padding:5px;
}
.waterfalls ul li img{
  width:100%;
}*/

.gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 30%;
    height: 100%;
    opacity: 0.4;
  }
  /*.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }*/
</style>

<template>
    <div class="fullscreen oflow">
        <div class="TitleLine">
             
            <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
              <swiper-slide><img src="https://yanxuan.nosdn.127.net/15030393722652401.jpg"></swiper-slide>
              <swiper-slide ><img src="http://yanxuan.nosdn.127.net/8fe0b7be33e5c19818f4ab0ae62310dd.png"></swiper-slide>
              <swiper-slide ><img src="http://yanxuan.nosdn.127.net/4493a1385009b0e9effbd9287257b269.png"></swiper-slide>
              <swiper-slide ><img src="http://yanxuan.nosdn.127.net/2bbfb3bf0a0b758fb950a351e22c3f01.png"></swiper-slide>
              <swiper-slide ><img src="https://yanxuan.nosdn.127.net/15030393722652401.jpg"></swiper-slide>
            </swiper>
            <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
            <swiper class="gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
                <swiper-slide v-for="(item,index) in classList" v-bind:key="index+1" @click.native="changebox(index)">
                    <li  :style="{'background-image': 'url('+item.bgp+')'}"> <a>{{item.title}}</a></li>
                </swiper-slide>
            </swiper>
        </div>
        <!-- <div class="cont-scroller">
          <scroller class="my-scroller">
            <div class="waterfalls">
              <ul class="waterfalls_l">
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                
              </ul>
              <ul class="waterfalls_r">
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
                <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=715776187,1717927711&fm=27&gp=0.jpg"></li>
              </ul>
            </div>
              
              
          </scroller>
        </div> -->
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
                      //paginationClickable: true,
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
