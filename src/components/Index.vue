<template>
  <div class="red-env-box">
    <div class="red-env-img-box" v-for="(item, index) in imgList" :key="index" :style="`z-index:${Math.floor(item.scale * 100)};
        left:${item.left}%;
        top:calc(${item.top}% - var(--width));
        animation-delay:${item.delay}s;
        rotate:${item.rotate}deg;
        --scale:${item.scale};
        --duration:${5 / item.scale}s`">
      <img :src="icon" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";
import redEnvelopeRainCard from "../assets/img/redEnvelopeRainCard.png";

const props = defineProps({
  num: {
    type: Number,
    default: 100
  },
  icon:{
    type: String,
    default: redEnvelopeRainCard
  }
});
const imgList: Ref<{ left: number; top: number; delay: number; rotate: number; scale: number; imgRotate: number }[]> = ref([]);
const initImgList = () => {
  for (let i = 0; i < props.num; i++) {
    imgList.value.push({
      left: Math.random() * 150,
      top: Math.random() * 5 - 20,
      delay: Math.random() * 5,
      rotate: Math.random() * 10 + 10,
      scale: Math.random() * 0.7 + 0.3,
      imgRotate: Math.random() * 360,
    });
  }
};
onMounted(() => {
  initImgList();
});
</script>

<style scoped src="../assets/css/base.css"></style>