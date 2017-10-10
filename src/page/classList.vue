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
    background:url(https://yanxuan.nosdn.127.net/15030393722652401.jpg);
    background-size: auto 100%;
    background-position: center;
    
   
}
</style>

<template>
    <div class="fullscreen oflow">
        <div class="TitleLine">
            <swiper :options="swiperOption">
            <swiper-slide>
                <li> class1</li>
            </swiper-slide>
            <swiper-slide>
                <li> class1</li>
            </swiper-slide>
            <swiper-slide>
                <li> class1</li>
            </swiper-slide>
            <swiper-slide>
                <li> class1</li>
            </swiper-slide>
            <swiper-slide>
                <li> class1</li>
            </swiper-slide>
            <swiper-slide>
                <li> class1</li>
            </swiper-slide>
          </swiper> 
        </div>
    
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
                      slidesPerView: 3,
                      paginationClickable: true,
                      freeMode : true,
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
