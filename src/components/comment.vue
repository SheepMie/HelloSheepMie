<style>
.comment_header{
    padding: 0 10px 0 0;
}
.avatar{
    display: inline-block;
    background-color: #eee;
    border-radius: 100%;
    background-position: 50% 50%;
    -webkit-background-size: cover;
    background-size: cover;
    background-color: #eee;
    border-radius: 100%;
    background-position: 50% 50%;
    -webkit-background-size: cover;
    background-size: cover;
}
.comment_header .avatar{
    width: 42px;
    height: 42px;
}

.comment_box{
    display: -webkit-flex;
    display: flex;
    position: relative;
    padding: 8px 5px;
}

.part_line:after{
    content: '';
    height: 1px;
    width: calc(100% - 55px);
    background:#eee;
    position: absolute;
    bottom: 0;
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
    margin-bottom: 10px;
}

.comment_other{
    padding: 5px 0;
}
.laba{
    display: inline-block;
    width: 20px;
    height: 25px;
    text-align: center;
    color:#000066;
    line-height: 25px;
    vertical-align: middle;
}

.O2O{display: inline-block;padding-right: 10px;}
img.avatar{
    width: 25px;
    vertical-align: middle !important;
}
.O2O_cont{
    vertical-align: middle;
    color:#000066;
    line-height: 25px;
    font-size: 13px;
}
</style>
<template>
    <div>
        <li class="comment_box oflow" v-for="(item,index) in list">
            <div class="comment_header oflow" @click="replyMaster()"><span class="pic avatar" :style="{'background-image': 'url('+item.avatar+')'}"></span></div>
            <div class="comment_cont " :class="{'part_line':list.length !== index+1}">
                <div class="floor_time ">{{index+1}}楼&nbsp;&nbsp;{{item.time}}</div>
                <div class="comment_text " @click="replyMaster()">{{item.comment_text}}<img class="mini-em" src="https://qzonestyle.gtimg.cn/qzone/em/e400824@2x.gif"></div>
                <li class="comment_other " v-for="data in item.o2olist" @click="replyGuest()">
                    <span class="O2O">
                        <img class="avatar" :src="data.from_avatar">
                        <span class="laba"><i class="iconfont icon-laba"></i></span>
                        <img class="avatar" :src="data.to_avatar">
                    </span>
                    <span class="O2O_cont">{{data.o2o_cont}}</span>
                </li>
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
            {
                avatar:'https://avatars3.githubusercontent.com/u/20961408?v=4&s=50',
                time:'今天20:33',
                comment_text:'对，你要有星星，事情子、总会一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件一件解决的',
                o2olist:[
                    {
                        from_avatar:'https://avatars0.githubusercontent.com/u/19399469?v=4&s=50',
                        to_avatar:'https://avatars3.githubusercontent.com/u/20961408?v=4&s=50',
                        o2o_cont:'哈哈哈哈要努力'
                    },{
                        from_avatar:'https://avatars0.githubusercontent.com/u/20356263?v=4&s=50',
                        to_avatar:'https://avatars3.githubusercontent.com/u/20961408?v=4&s=50',
                        o2o_cont:'你要爆咯'
                    },{
                        from_avatar:'https://avatars3.githubusercontent.com/u/20961408?v=4&s=50',
                        to_avatar:'https://avatars0.githubusercontent.com/u/20356263?v=4&s=50',
                        o2o_cont:'丢啊丢啊丢楼某'
                    }]
            },{
                avatar:'https://avatars1.githubusercontent.com/u/17894980?v=4&s=50',
                time:'今天20:55',
                comment_text:'哈哈一笑很倾城',
                o2olist:[
                    {
                        from_avatar:'https://avatars0.githubusercontent.com/u/19399469?v=4&s=50',
                        to_avatar:'https://avatars1.githubusercontent.com/u/17894980?v=4&s=50',
                        o2o_cont:'哈哈哈哈要努力'
                    }]
            },{
                avatar:'https://avatars0.githubusercontent.com/u/12568225?v=4&s=50',
                time:'今天20:55',
                comment_text:'哎哟哎哟哎哟哎哟',
                o2olist:[
                    {
                        from_avatar:'https://avatars0.githubusercontent.com/u/19399469?v=4&s=50',
                        to_avatar:'https://avatars0.githubusercontent.com/u/12568225?v=4&s=50',
                        o2o_cont:'喂喂喂，有什么好矫情的啊，真的是够了'
                    }]
            },{
                avatar:'https://avatars2.githubusercontent.com/u/26362384?v=4&s=50',
                time:'今天20:55',
                comment_text:'who let the dogs out!!!',
                o2olist:[
                    {
                        from_avatar:'https://avatars0.githubusercontent.com/u/19399469?v=4&s=50',
                        to_avatar:'https://avatars2.githubusercontent.com/u/26362384?v=4&s=50',
                        o2o_cont:'吼吼吼！'
                    }]
            }]
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
      replyMaster() {

      }
    }
}
</script>

