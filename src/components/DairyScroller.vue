<template>
    <div>
        <table>
            <tr v-for = 'data in scrollData'>
                <td  :colspan="data.col" :rowspan='data.row' >
                    <div>
                    123
                    </div>
                </td>
                <td  :colspan="data.col" :rowspan='data.row' >
                    <div>
                    123
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                    123
                    </div>
                </td>
                <td  rowspan="2">
                    <div>
                    222
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    
                </td>
                
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: 'sheep-dairy-scroller',
  data () {
    return {
        scrollData:[
            {col:2,row:1},
            {col:1,row:2},
            {col:1,row:1},
            {col:1,row:1},
            
        ],
        transforming: false,    // 是否正在执行动画
        expanded: false           // 是否已经展开子按钮
    }
  },
  methods: {
      
  },
}
</script>

<style>
table{table-layout: fixed;width:100%;padding:3px}
td{width: 50%;height:150px;overflow: hidden; padding:3px;} 
td div{width:100%;height:100%;background: #0ff;overflow: hidden;}
</style>