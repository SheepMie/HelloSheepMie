<style>
.comment_header{
    padding: 0 10px 0 0;
}
.comment_header .avatar{
    display: block;
    width: 42px;
    height: 42px;
    background-color: #eee;
    border-radius: 100%;
    background-position: 50% 50%;
    -webkit-background-size: cover;
    background-size: cover;
}
.comment_box{
    display: -webkit-flex;
    display: flex;
    position: relative;
}
.comment_cont:after{
    content: '';
    height: 1px;
    width: calc(100% - 45px);
    color:#eee;
    position: absolute;
    bottom: 10px;
    right: 0;
    z-index:9999
}
.floor_time{
    color:#C0C0C0;
    font-size: 14px;
    line-height: 26px;
    margin-bottom: 10px;
}
.comment_cont{
    -webkit-box-flex: 1;
    flex: 1;
}
.comment_text{
    font-size: 15px;
}
</style>
<template>
    <div>
        <li class="comment_box oflow pd5" v-for="item in list">
            <div class="comment_header oflow"><span class="pic avatar" :style="{'background-image': 'url('+item.avatar+')'}"></span></div>
            <div class="comment_cont">
                <div class="floor_time ">{{item.floor}}楼&nbsp;&nbsp;{{item.time}}</div>
                <div class="comment_text ">{{item.comment_text}}<img class="mini-em" src="https://qzonestyle.gtimg.cn/qzone/em/e400824@2x.gif"></div>
                <div class="comment_other "></div>
            </div>
        </li>
    </div>
</template>

<script>
export default {
  name: 'sheep-comment',
  data () {
    return {
        list:[
            {avatar:'https://avatars3.githubusercontent.com/u/20961408?v=4&s=400&u=ac9670ffc652b480faf411317ad72cdcb517dae2',floor:'1',time:'今天20:33',comment_text:'对，你要有星星，事情子、总会一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件解决的'},
            {avatar:'https://avatars3.githubusercontent.com/u/20961408?v=4&s=400&u=ac9670ffc652b480faf411317ad72cdcb517dae2',floor:'2',time:'今天20:55',comment_text:'哈哈一笑很倾城'}
            ]
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
    }
}
</script>

