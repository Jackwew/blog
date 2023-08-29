<template>
  <div>
    <Icon :custom="`i-pro ${props.iconContent}`" :size="props.size" :color="props.color" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  iconContent: {
    type: String,
    default: 'wechat'
  },
  size: {
    type: Number,
    default: 24
  },
  color: {
    type: String,
    default: '#000'
  }
})
</script>

<style>
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: 'iconfont'; /* Project id 2813191 */
  src:
    url('//at.alicdn.com/t/c/font_2813191_pd1kpmcpg7f.woff2?t=1692931581953') format('woff2'),
    url('//at.alicdn.com/t/c/font_2813191_pd1kpmcpg7f.woff?t=1692931581953') format('woff'),
    url('//at.alicdn.com/t/c/font_2813191_pd1kpmcpg7f.ttf?t=1692931581953') format('truetype');
}
.i-pro {
  display: inline-block;
  font-family: 'iconfont' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: middle;
}
.wechat:before {
  content: '\e60a';
}

.github:before {
  content: '\e811';
}

.gitee:before {
  content: '\e60c';
}

.twitter:before {
  content: '\e613';
}

.facebook:before {
  content: '\e614';
}

.email:before {
  content: '\e888';
}

.telephone:before {
  content: '\e88b';
}
.react:before {
  content: '\e799';
}
</style>
