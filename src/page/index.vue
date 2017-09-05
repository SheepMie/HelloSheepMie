<template>
        
        <div class="index_center text-center">
            <div class="index_time">
                <p>故事的小黄花</p>

<p>从出生那年就飘着</p>
<input type="text" @click="aabb">
<p>童年的荡秋千</p>

<p>随记忆一直晃到现在</p>

<p>ㄖㄨㄟ ㄙㄡ ㄙㄡ ㄒ一 ㄉㄡ ㄒ一ㄌㄚ</p>
<p>Re So So Si Do Si La</p>
<p>ㄙㄡ ㄌㄚ ㄒ一 ㄒ一 ㄒ一 ㄒ一 ㄌㄚ ㄒ一 ㄌㄚ ㄙㄡ</p>
<p>吹着前奏望着天空</p>

<p>我想起花瓣试着掉落</p>

<p>为你翘课的那一天</p>

<p>花落的那一天</p>

<p>教室的那一间</p>

<p>我怎么看不见</p>

<p>消失的下雨天</p>

<p>我好想再淋一遍</p>

<p>没想到失去的勇气我还留着</p>

<p>好想再问一遍</p>

<p>你会等待还是离开</p>

<p>刮风这天我试过握着你手</p>

<p>但偏偏雨渐渐大到我看你不见</p>

<p>还要多久我才能在你身边</p>

<p>等到放晴的那天也许我会比较好一点</p>
<p>
从前从前有个人爱你很久</p>

<p>
但偏偏风渐渐把距离吹得好远</p>

<p>
好不容易又能再多爱一天</p>

<p>
但故事的最后你好像还是说了拜拜</p>

 
            </div>
        </div>
</template>

<script>
    import moment from 'moment-timezone'
    export default {
        name:'index',
        data(){
            return {
                hour: '',
                minute: '',
                secondDecade: [],
                secondUnit: [],
                toggle: false,
                toggleTime: true
            }
        },
        mounted(){
            const localToggle = localStorage.getItem('indexToggle');
            if(localToggle) this.toggle = true;
            this.getTime();
            this.startTime = setInterval(this.getTime,500)
        },
        methods: {
            getTime(){
                const site = this.toggle? "Europe/London":"Asia/Shanghai";
                var today = moment().tz(site);
                var h = today.format('H');
                var m = today.format('m');
                var s = today.format('s');
                h = this.checkTime(h);
                m = this.checkTime(m);
                s = this.checkTime(s);
                this.hour = h;
                this.minute = m;
                this.secondDecade.pop();
                this.secondDecade.push(s.toString()[0]);
                this.secondUnit.pop();
                this.secondUnit.push(s.toString()[1])
            },
            checkTime(i){
                if (i < 10) {
                    i = "0" + i
                }
                return i
            },
            move(){
                this.toggle = !this.toggle;
                this.toggle? localStorage.setItem('indexToggle',"1"):localStorage.removeItem('indexToggle');
            },
            aabb(){
                this.toggle = !this.toggle;
            }
        },
        beforeDestroy () {
            clearInterval(this.startTime);
        }
    }
</script>