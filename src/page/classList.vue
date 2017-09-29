<style>
.xxaa{
    float:left;
    width: 200px;
    height: 100px;
    background: red;
    margin-left:20px; 
    
}
.swiper{
    overflow: hidden;
}
</style>

<template>
    <div class="fullscreen oflow">
    <swiper :options="swiperOption" ref="mySwiper">
         <swiper-slide class="swiper">
            <div class="xxaa">1</div>
        <div class="xxaa">1</div>
        <div class="xxaa">1</div>
        <div class="xxaa">1</div>
        <div class="xxaa">1</div>
        <div class="xxaa">1</div>
         </swiper-slide>
        
 
    </swiper>
        <pull-to>
            123
        </pull-to>   
    </div>  
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import PullTo from 'vue-pull-to';
    import Velocity from 'velocity-animate';
    export default {
        name: 'dairylist',
        components: {PullTo,Velocity,swiper, swiperSlide},
        data () {
            return {
                swiperOption: {
                   // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
                   // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                   notNextTick: true,
                   // swiper configs 所有的配置同swiper官方api配置
                   // direction : 'vertical',
                   effect:"coverflow",
                   grabCursor : true,
                   setWrapperSize :true,
                   // autoHeight: true,
                   // paginationType:"bullets",
                   pagination : '.swiper-pagination',
                   paginationClickable :true,
                   prevButton:'.swiper-button-prev',
                   nextButton:'.swiper-button-next',
                   // scrollbar:'.swiper-scrollbar',
                   mousewheelControl : true,
                   observeParents:true,
                   // if you need use plugins in the swiper, you can config in here like this
                   // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                   // debugger: true,
                   // swiper callbacks
                   // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
                   // onTransitionStart(swiper){
                   //   console.log(swiper)
                   // },
                   // more Swiper configs and callbacks...
                   // ...
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
