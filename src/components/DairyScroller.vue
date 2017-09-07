<template>
    <div>
        <div class="oflow boxstyle1">
            <span class="fl col-xs-6 boxheight1">
                <li class="pd5">
                    <ul  :style="{backgroundColor: '#'+addcolor}">123</ul>
                </li>
            </span>
            <span class="fr col-xs-6 boxheight1">
                <li class="pd5" >
                    <ul  :style="{backgroundColor: '#'+addcolor}">123</ul>
                </li>
            </span>
        </div>
        <div class="oflow boxstyle2">
            <span class="fl col-xs-6 boxheight2">
                <li class="pd5">
                    <ul  :style="{backgroundColor: '#'+addcolor}">123</ul>
                </li>
            </span>
            <span class="fr col-xs-6 boxheight2">
                <li class="pd5">
                    <ul  :style="{backgroundColor: '#'+addcolor}">123</ul>
                </li>
            </span>
        </div>
        
        <div class="oflow boxstyle3">
            <span class="fl col-xs-12 boxheight1">
                <li class="pd5">
                    <ul  :style="{backgroundColor: '#'+addcolor}">123</ul>
                </li>
            </span>
        </div>
        <div class="oflow boxstyle4">
            <span class="fl col-xs-12 boxheight2">
                <li class="pd5">
                    <ul  :style="{backgroundColor: '#'+addcolor}">123</ul>
                </li>
            </span>
            
        </div>
        <div class="oflow boxstyle5">
            <span class="fl col-xs-6 boxheight1">
                <li class="pd5">
                    <ul  :style="{backgroundColor: '#'+addcolor}">123</ul>
                </li>
            </span>
            
            <span class="fr col-xs-6 boxheight2">
                <li class="pd5">
                    <ul  :style="{backgroundColor: '#'+addcolor}">123</ul>
                </li>
            </span>
        </div>
        <div class="oflow boxstyle6">
            <span class="fl col-xs-6 boxheight2">
                <li class="pd5">
                    <ul  :style="{backgroundColor: '#'+addcolor}">123</ul>
                </li>
            </span>
            <span class="fr col-xs-6 boxheight1">
                <li class="pd5">
                    <ul  :style="{backgroundColor: '#'+addcolor}">123</ul>
                </li>
            </span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'sheep-dairy-scroller',
  data () {
    return {
        color:[
            'f4b300','78ba00','2673ec','ae113d','632f00','b01e00','4e0038','c1004f','7200ac','2d004e','006ac1','001e4e','008287','004d60','004a00','00c13f','15992a','ff981d','e56c19','b81b1b','ff1d77','b81b6c','aa40ff','691bb8','1faeff','1b58b8','56c5ff','569ce3','00d8cc','00aaaa','91d100','b81b6c','e1b700','d39d09','ff76bc','e064b7','00a4a4','ff7d23','4cafb5','044d91','832772','d15a44','de971b','017802','6e2ea0'
        ],
        
    }
  },
  computed: {
    // a computed getter
    addcolor: function () {
      return this.color[(this.color.length * Math.random())>>0]
    }
  },
  mounted(){

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
.oflow span{display: block}
.oflow span li {width:100%;height:100%;}
.oflow span li ul{width: 100%;height: 100%;}
</style>