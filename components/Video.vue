<template>
  <div ref="bideo" class="bideo">
    <video ref="backgroundVideo" class="background_video" loop muted />
  </div>
</template>
<script setup lang="ts">
const backgroundVideo = ref(null)
const videoUrl = ref(
  'https://htwz-wzy.obs.cn-north-4.myhuaweicloud.com/common/yutuweapp/material/20210627/f3d453eb97e04182a5adb55f3034ef00.mp4'
)

onMounted(() => {
  if (process.client) {
    const bv = new window.Bideo()
    bv.init({
      videoEl: document.querySelector('.background_video'),
      container: document.querySelector('.bideo'),
      resize: true,
      src: [
        {
          src: videoUrl.value,
          type: 'video/mp4'
        }
      ]
    })
  }
})
</script>
<style scoped lang="scss">
.bideo {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -11;
}

.background_video {
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>
