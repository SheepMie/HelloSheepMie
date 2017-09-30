<style scoped>
.swiper-slide {
    width: 200px;
    background: red;
    height: 100px;
    margin-right:20px;
  }
</style>

<template>
    <div class="fullscreen oflow">
    <swiper :options="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
      </swiper> 
    </div>  
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import PullTo from 'vue-pull-to';
    import Velocity from 'velocity-animate';
    export default {
        name: 'classList',
        components: {PullTo,Velocity,swiper, swiperSlide},
        data () {
            return {
                swiperOption: {
                   
                      pagination: '.swiper-pagination',
          slidesPerView: 3,
          paginationClickable: true,
          spaceBetween: 30,
          freeMode: true
                   
                 }
            }
          },
        watch:{
            $route(to, from){
                let vm = this;
                if(this.isdairydetail&&from.name == 'dairy'){
                    vm.isdairydetail = false
                    
                }
                 
            }
        },
        methods: { 
            
        },
    }
</script>
