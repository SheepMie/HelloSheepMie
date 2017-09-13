<style>
/* .slide {
    left:0;
    transition:left 0.5s;
    -moz-transition:left 0.5s; 
    -webkit-transition:left 0.5s; 
    -o-transition:left 0.5s; 
}
.slide-active {
  left:0 !important;
} */
.fixed{position: absolute;top:0;width:100%;height: 100%;background:#fff;}
</style>

<template>
    <div class="fixed slide">
        <pull-to>
            <li>123</li>
        </pull-to>
    </div>
</template>

<script>
    import PullTo from 'vue-pull-to';
    export default {
        name: 'dairy',
        components: {PullTo},
        data () {
            return {
                
                isdairydetail:false,
                isdairyshow:false
            }
        },
        
        methods: { 
            
        },
    }
</script>
