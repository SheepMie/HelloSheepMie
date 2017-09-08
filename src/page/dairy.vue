<template>
    <div class="fullheight">
        <pull-to>
            <div class="oflow">
                <li v-for="item in scrollercont" class="fl pd5" :class="[item.boxsize,item.float]">
                    <ul  :style="{background: 'url('+item.bgp+')'}">{{item.cont}}</ul>
                </li>
            </div>
        </pull-to>
    </div>  
</template>

<script>
    import PullTo from 'vue-pull-to'

    export default {
        name: 'dairy',
        components: {
            PullTo
        },
        data () {
            return {
                scrollercont:[
                    {boxsize:'basbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-20",weither:'cloudy',float:'fl'},
                    {boxsize:'rowbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-22",weither:'rain',float:'fr'},
                    {boxsize:'basbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-20",weither:'cloudy',float:'fl'},
                    {boxsize:'colbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-21",weither:'rain',float:'fl'},
                    {boxsize:'bigbox',bgp:'http://img.zcool.cn/community/0049b959b21213a8012028a9b88016.jpg@260w_195h_1c_1e_1o_100sh.jpg',cont:'aiyaya',date:"17-6-23",weither:'snow',float:'fl'}
                ]
            }
          },
        ready() {
            this.scrollerbox.push()
        },
        methods: {
        plus() {
        }   
        },
        
    }
</script>
<style>

.boxheight1{height: 150px;}
.boxheight2{height: 300px;}
.basbox{width:50%;height: 150px;}
.colbox{width:100%;height: 150px;}
.rowbox{width:50%;height: 300px;}
.bigbox{width:100%;height: 300px;}

.oflow li ul{width: 100%;height: 100%;background-repeat: no-repeat !important;background-size: cover !important;overflow: hidden;}

</style>