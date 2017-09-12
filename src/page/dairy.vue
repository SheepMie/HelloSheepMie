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
  opacity: 0;
  transform: scale(0.5);
}
/* 出去终点 */
.fade-leave-active{
  opacity: 1;
  transform: scale(1);
}

</style>

<template>
    <div class="fullheight">
        <pull-to>
             <div class="oflow  ">
                 <transition-group  appear  name="staggered-fade" v-bind:css="false" v-on:before-enter="beforeEnter"  v-on:enter="enter" v-on:leave="leave" >
                    <li v-for="(item,index) in scrollercont" class="fl pd5 " :class="[item.boxsize,item.float]" v-bind:key="index+1" v-bind:data-index="index" @click="">
                        <ul :style="{background: 'url('+item.bgp+')'}">{{item.cont}}</ul>
                    </li>
                </transition-group>
            </div> 
        </pull-to>
    </div>  
</template>

<script>
    import PullTo from 'vue-pull-to';
    import Velocity from 'velocity-animate';
    export default {
        name: 'dairy',
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
