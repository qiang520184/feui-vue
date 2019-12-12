<template>
    <div class="home">
        <div v-for="(item, index) in list" :key="index">
            <TotalTips :trigger="item.trigger" :content="item.content" :tips="item.tips"></TotalTips>
        </div>
        <TotalTips>
            <em>我是slot</em>
        </TotalTips>
    </div>
</template>

<script>
import TotalTips from '../totalTips'
export default {
    name: 'home',
    data() {
      return {
          hoverTips: false,
          list: [
                {
                    trigger: 'hover',
                    content: '滑过',
                    explain: '咨询量(滑过)',
                    tips: '我是滑过的提示内容'
                },
                {
                    trigger: 'click',
                    content: '点击',
                    explain: '咨询量(点击)',
                    tips: '我是点击的提示内容'
                },
                {
                    content: '默认',
                    explain: '咨询量(默认)',
                    tips: '我是默认的提示内容'
                }
          ]
      }
  },
  components: {
      TotalTips
  }
}
</script>

<style scoped>
    .home {
        width: 100%;
        height: 100%;
    }
</style>
