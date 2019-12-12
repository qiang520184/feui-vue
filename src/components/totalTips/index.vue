<template>
    <div class="totalTips">
        <h1 class="title">{{content}}</h1>
        <div class="tipsBox">
            <p>{{explain}}</p>
            <div
                class="tipsImg"
                @click="clikTips"
                @mouseenter="mouseenter"
                @mouseleave="mouseleave"
            >
                <img src="../../assets/问号.png" alt="">
                <template v-if="hoverTips">
                    <slot>
                        <div class="tipsDialog">{{tips}}</div>
                    </slot>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'totalTips',
    props:{
        trigger: {
            type: String,
            default: 'hover'
        },
        content: {
            type: String || Number,
            default: '99999'
        },
        explain: {
            type: String,
            default: '我是划过的默认内容'
        },
        tips: {
            type: String,
            default: '我是划过的默认内容'
        }
  },
  data() {
      return {
          hoverTips: false
      }
  },
  methods:{
        clikTips() {
            if (this.trigger === 'click') {
                this.hoverTips = !this.hoverTips;
            }
        },
        mouseenter() {
            if (this.trigger === 'click') {
                return;
            }
           this.hoverTips = true;
        },
        mouseleave() {
            if (this.trigger === 'click') {
                return;
            }
           this.hoverTips = false;
        }
    }
}
</script>

<style scoped>
    .totalTips {
        margin: 0 auto;
        width: 150px;
        height: 150px;
        display: flex;
        flex-direction: column;
    }
    .totalTips .title {
        width: 100%;
        padding: 0;
        margin: 0;
        text-align: center;
        font-size: 30px;
    }
    .tipsBox {
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
    }
    .tipsBox p {
        padding: 0;
        margin: 0;
        font-size: 12px;
        color: #ccc;
    }
    .tipsBox .tipsImg {
        position: relative;
        width: 14px;
        height: 14px;
        margin-left: 12px;
        cursor: pointer;
    }
    .tipsBox .tipsImg img {
        display: block;
        width: 14px;
        height: 14px;
    }
    .tipsDialog {
        position: absolute;
        top: 24px;
        left: 0px;
        width: 80px;
        height: auto;
        max-height: 60px;
        font-size: 12px;
        color: #999;
        border: 1px solid #999;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
</style>
