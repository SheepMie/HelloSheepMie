<style>
.gallery-cont{
  height: 100%;
}
.gallery-cont .swiper-slide{
  width:1000px;
}
.gallery-cont .swiper-zoom-container{
  padding:10px;
}
.gallery-cont img{
  border-radius: 6px;
}
.gallery-cont .swiper-slide{
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-slide-active{z-index: 9999}
</style>
<template>
    <swiper :options="swiperOptionContChild" class="gallery-cont" ref="swiperContChild">
      <swiper-slide v-for="(item,index) in childMsg" v-bind:key="index+1">
        <div class="swiper-zoom-container"><img :src="item"></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'picture-list',
  components: {swiper, swiperSlide},
  props: ['childMsg'],
  data () {
    let vm = this;
    return {

        swiperOptionContChild: {
        spaceBetween: 10,
        zoom: true,
        nested:true,
        resistanceRatio: 0,
        pagination: '.swiper-pagination',
        onSlideChangeStart:function(swiper){
          //vm.backgroundBlur = swiper.activeIndex;
          if (swiper.zoom.scale != 1) {
            swiper.zoom.toggleZoom(swiper)
          }
        },
        onTouchStart:function(swiper){
          vm.$emit('changeSlideChild', swiper)
        },
       
      },
    }
  },
  methods: {
      
  },
}
</script>
