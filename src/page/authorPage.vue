<style>
    .authorback{
        width:100%;
        background-image:url('https://yanxuan.nosdn.127.net/c646886fdf9abe1c69c4267380137ccc.jpg?imageView&quality=75') ;
        height: 150px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .author_cont_box{
        padding-top: 150px;
    }
    .author_cont header{
        position: absolute;
        width:90px;
        height: 90px;
        background-image: url('https://icity-static.icitycdn.com/images/uploads/user/avatar/j98q/cbf4d4a1e93ab3baj98qf8h.jpg/270x270');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        top:-70px;
        left: 50%;
        margin-left: -45px;
        border-radius: 50%;
    }
    .author_cont{
        position: relative;
    }
   /*.back-active{

  transition: all 0.1s ease;
}*/
</style>
<template>
    <div class="fullscreen">
        <div class="authorback" :style="'transform: scale('+(1+y)+')'"></div>
        <scroller ref="my_scroller" >
            <div class="author_cont_box">
                <div class="author_cont">
                    <header></header>
                    <h3>sheepmie</h3>
                    <p>宁波市</p>
                </div>
                
            </div>
        </scroller>
    </div>
</template>

<script>
export default {
    name:'index',
    data(){
        return {
            y: 100,
            timer: 0
        }
    },
    mounted () {
        this.timer = setInterval(() => {
            let {left, top} = this.$refs.my_scroller.getPosition();
            this.y = -top/100;
        }, 15)
    },
    beforeDestroy() {
      clearInterval(this.timer)
    }
}
</script>