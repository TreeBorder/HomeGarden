<template>
  <div class="container">
    <canvas ref="binGl"></canvas>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Garden from './garden';
import GardenMobile from './garden/mobile.ts';

const binGl = ref<HTMLCanvasElement>();
const isMobile = (): boolean => {
  const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  if (flag) {
    return true;
  } else {
    return false;
  }
}

onMounted(() => {
  if (binGl.value != null) {
    if (isMobile()) new GardenMobile(binGl.value);
    else
      new Garden(binGl.value);
  }
});
</script>
<style lang="less">
.container {
  width: 100%;
  height: 100%;

  canvas {
    width: 100%;
    height: 100%;

    background-color: #000;
    // border: 1px solid red;
  }
}
</style>