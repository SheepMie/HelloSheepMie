<template>
    <div class="sheep-palette-button pb" :class="{ 'expand': expanded, 'sheep-palette-button-active': transforming }" @animationend="onMainAnimationEnd" @webkitAnimationEnd="onMainAnimationEnd" @mozAnimationEnd="onMainAnimationEnd">
        <div class="sheep-sub-button-container">
            <div class="my-icon-button palette-button-sub-0"  ><router-link to="/"  @click.native="toggle" >1</router-link></div>
            <div class="my-icon-button palette-button-sub-1"  ><router-link  to="/dairylist" @click.native="toggle"  >2</router-link></div>
            <div class="my-icon-button palette-button-sub-2"  ><router-link  to="/classList" @click.native="toggle"  >2</router-link></div>
            <div class="my-icon-button palette-button-sub-3"  @touchstart="toggle">4</div>
        </div>
        <div class="sheep-main-button" @click="toggle">+</div>
    </div >
</template>

<script>
export default {
  name: 'sheep-palette-tabs',
  data () {
    return {
        transforming: false,    // 是否正在执行动画
        expanded: false           // 是否已经展开子按钮
    }
  },
  methods: {
      toggle(event) {
        if (!this.transforming) {
            if (this.expanded) {
                this.collapse(event);
            } else {
                this.expand(event);
            }
        }
      },

      onMainAnimationEnd(event) {
        this.transforming = false;
        this.$emit('expanded');
      },

      expand(event) {
        this.expanded = true;
        this.transforming = true;
        this.$emit('expand', event);
      },

      collapse(event) {
        this.expanded = false;
        this.$emit('collapse', event);
      }
    },
}
</script>

<style>
.sheep-palette-button{
    display: inline-block;
    position: relative;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    line-height: 56px;
    text-align: center;
    -webkit-transition: -webkit-transform .1s ease-in-out;
    transition: -webkit-transform .1s ease-in-out;
    transition: transform .1s ease-in-out;
    transition: transform .1s ease-in-out,-webkit-transform .1s ease-in-out;
}
.my-icon-button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #26a2ff;
    color: #fff;
    line-height: 30px;
    text-align: center;
}
.sheep-sub-button-container>* {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 25px;
    height: 25px;
    -webkit-transition: -webkit-transform .3s ease-in-out;
    transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
}
.sheep-palette-button-active{
    animation: mint-zoom 0.5s ease-in-out;
}
@keyframes mint-zoom{
    0% {transform:scale(1)}
    10% {transform:scale(1.1)}
    30% {transform:scale(0.9)}
    50% {transform:scale(1.05)}
    70% {transform:scale(0.95)}
    90% {transform:scale(1.01)}
    100% {transform:scale(1)}
}
.expand .palette-button-sub-0 {
    transform: translate(-100.00px,0.00px) rotate(720deg);
    transition-delay: 0s;
}
.expand .palette-button-sub-1 {
    transform: translate(-92.39px,-38.27px) rotate(720deg);
    transition-delay: 0.03s;
}
.expand .palette-button-sub-2 {
    transform: translate(-70.71px,-70.71px) rotate(720deg);
    transition-delay: 0.06s;
}
.expand .palette-button-sub-3 {
    transform: translate(-38.27px,-92.39px) rotate(720deg);
    transition-delay: 0.09s;
}
.sheep-main-button{
    color: #000;
    background-color: #26a2ff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    font-size: 2em;
    
}
.pb{
    width: 60px;
    height: 60px;
    line-height: 60px;
    color: #fff;
    position: absolute;
    bottom: 30px;
    right:30px;
    z-index:100
}

</style>