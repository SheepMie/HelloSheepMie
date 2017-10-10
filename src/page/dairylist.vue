<style>
.oflow li{
    position: relative;
    overflow: hidden;
}
.basbox{width:50%;/*height: 25%;*/padding-top:50%;}
.colbox{width:100%;/*height: 25%;*/padding-top:50%;}
.rowbox{width:50%;/*height: 50%;*/padding-top:100%;}
.bigbox{width:100%;/*height: 50%;*/padding-top:100%;}

.oflow li ul{
    position: absolute;
    top: 3px;
    left: 3px;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    background-repeat: no-repeat !important;
    background-size: cover !important;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}
.vue-waterfall div{background:#f00}

.fade-enter-active,.fade-leave-active{
  transform-origin:50% 50% 0px;
  transition: all 0.3s ease-out;
}
/* 进入开始 */
.fade-enter{
  opacity: 1;
  transform: scale(1);
}
/* 出去终点 */
.fade-leave-active{
  opacity: 0;
  transform: scale(0.85);
  
}
.slide-fade-enter-active,.slide-fade-leave-active {
  transition: all .3s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(100%);
}

.weather_icon{
    right: 5px;
    bottom:0px;
    font-size:40px;
    color:#fff;
    opacity: 0.4;
}
/*.swiper-container {
    height: 100%;
}
.swiper-slide{height: auto}*/
</style>

<template>
    <div class="fullscreen oflow">
        <pull-to>
            <div class="pd3  fade-enter" :class="{'fade-leave-active':isdairydetail}">
                <transition-group  appear  name="staggered-fade" v-bind:css="false" v-on:before-enter="beforeEnter"  v-on:enter="enter" v-on:leave="leave" >
                    <li v-for="(item,index) in scrollercont" class="fl" :class="[item.boxsize,item.float]" v-bind:key="index+1" v-bind:data-index="index" >
                        <ul class=" text-center" :style="{background: 'url('+item.bgp+')'}"  @click="lookdairy()">{{item.cont}}<span class="ab weather_icon"><i class="iconfont" :class="'icon-'+item.weather"></i></span></ul>
                    </li>
                </transition-group>
            </div>
        </pull-to>
        <transition name="slide-fade" class="dairy">
            <router-view></router-view>
        </transition>
        <!-- <div class="fixed slide" :class="{'slide-active':isdairyshow}">
            123
        </div> -->
    </div>  
</template>

<script>
    import PullTo from 'vue-pull-to';
    import Velocity from 'velocity-animate';
    export default {
        name: 'dairylist',
        components: {PullTo,Velocity},
        data () {
            return {
                
                scrollercont:[
                    {msg: 'Bruce Lee',boxsize:'basbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-20",weither:'cloudy',float:'fl',weather:'qing'},
                    {msg: 'Bruce Lee',boxsize:'rowbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-22",weither:'rain',float:'fr',weather:'xiaoyu'},
                    {msg: 'Bruce Lee',boxsize:'basbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-20",weither:'cloudy',float:'fl',weather:'dayu'},
                    {msg: 'Bruce Lee',boxsize:'colbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-21",weither:'rain',float:'fl',weather:'xiaoxue'},
                    {msg: 'Bruce Lee',boxsize:'bigbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-23",weither:'snow',float:'fl',weather:'wu'}
                ],
                isdairydetail:false,
                isdairyshow:false
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
            add (){
                this.scrollercont.push(
                    {msg: 'Bruce Lee',boxsize:'basbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-20",weither:'cloudy',float:'fl'},
                    {msg: 'Bruce Lee',boxsize:'rowbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-22",weither:'rain',float:'fr'},
                    {msg: 'Bruce Lee',boxsize:'basbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-20",weither:'cloudy',float:'fl'},
                    {msg: 'Bruce Lee',boxsize:'colbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-21",weither:'rain',float:'fl'},
                    {msg: 'Bruce Lee',boxsize:'bigbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-23",weither:'snow',float:'fl'}
                    
                    )
            },
            lookdairy (){
                var vm = this;
                vm.isdairydetail = true;
                    vm.isdairyshow = true;
                    vm.$router.push('/dairylist/dairy')
            },
            beforeEnter (el) {
                el.style.opacity = 0;
            },
            enter (el, done) {
                var delay = el.dataset.index * 150 //延迟多久开始
                setTimeout(function () {
                    Velocity(el,{ opacity: 1},{ complete: done })
                }, delay)
            },
            leave (el, done) {
                var delay = el.dataset.index * 150
                setTimeout(function () {
                    Velocity(el,{ opacity: 0,},{ complete: done })
                }, delay)
            } ,
            refresh(loaded) {
                setTimeout(() => {
                  this.dataList.reverse();
                  loaded('done');
                }, 2000);
              }
        },
    }
</script>
