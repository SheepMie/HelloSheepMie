<style>

.boxheight1{height: 150px;}
.boxheight2{height: 300px;}
.basbox{width:50%;height: 150px;}
.colbox{width:100%;height: 150px;}
.rowbox{width:50%;height: 300px;}
.bigbox{width:100%;height: 300px;}

.oflow li ul{
    width: 100%;height: 100%;background-repeat: no-repeat !important;background-size: cover !important;overflow: hidden;
    
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
  opacity: 0.9;
  transform: scale(0.85);
  
}
.slide-fade-enter-active,.slide-fade-leave-active {
  transition: all .3s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(100%);
}
/* .slide {
    left:100%;
    transition:left 0.5s;
    -moz-transition:left 0.5s; 
    -webkit-transition:left 0.5s; 
    -o-transition:left 0.5s; 
}
.slide-active {
  left:0 !important;
}
.slide{left:100%;}
.slide-active{transform: scale(1);}
.fixed{position: absolute;top:0;width:100%;height: 100%;background:#fff;} */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 1
}
</style>

<template>
    <div class="fullheight oflow">
        <pull-to>
            <transition name="fade">
            <div class="fullheight oflow fade-enter" :class="{'fade-leave-active':isdairydetail}">
                <transition-group  appear  name="staggered-fade" v-bind:css="false" v-on:before-enter="beforeEnter"  v-on:enter="enter" v-on:leave="leave" >
                    <li v-for="(item,index) in scrollercont" class="fl pd5 " :class="[item.boxsize,item.float]" v-bind:key="index+1" v-bind:data-index="index" >
                        <ul :style="{background: 'url('+item.bgp+')'}"  @click="lookdairy()">{{item.cont}}</ul>
                    </li>
                </transition-group>
            </div> 
            </transition>
        </pull-to>
        <transition name="slide-fade">
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
                    {msg: 'Bruce Lee',boxsize:'basbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-20",weither:'cloudy',float:'fl'},
                    {msg: 'Bruce Lee',boxsize:'rowbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-22",weither:'rain',float:'fr'},
                    {msg: 'Bruce Lee',boxsize:'basbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-20",weither:'cloudy',float:'fl'},
                    {msg: 'Bruce Lee',boxsize:'colbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-21",weither:'rain',float:'fl'},
                    {msg: 'Bruce Lee',boxsize:'bigbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-23",weither:'snow',float:'fl'}
                ],
                isdairydetail:false,
                isdairyshow:false
            }
          },
        watch:{
            $route(to, from){
                console.log(to);
                console.log(from);

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
                setTimeout(function () {
                    vm.isdairyshow = true;
                    vm.$router.push('/dairylist/dairy')
                }, 500)
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
            } 
        },
    }
</script>
