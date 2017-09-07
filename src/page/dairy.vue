<template>
    <div class="fullheight">
        <pull-to>
                <dairy-scroller></dairy-scroller>
            
        </pull-to>
    </div>  
</template>

<script>
    import PullTo from 'vue-pull-to'
    import DairyScroller from '../components/DairyScroller.vue'

    export default {
        name: 'dairy',
        components: {
            PullTo,
             'DairyScroller': DairyScroller
        },
        
    }
</script>
<style>
.sheep-dairy-box{
    width:100%;
    height: 100%;
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-wrap:wrap 
}
.sheep-dairy-box li {
    /* background: #fff; */
    float: left;
}

.sheep-dairy-box li:nth-child(even) {
    background: #eee;
}


</style>