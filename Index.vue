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

const props = defineProps({
  num: {
    type: Number,
    default: 100
  },
  icon:{
    type: String,
    default: "data:image/png;base64,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"
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

<style scoped>
.red-env-box {
  position: relative;
  overflow: hidden;
}

.red-env-img-box {
  --width: 200px;
  width: var(--width);
  animation: money var(--duration) linear infinite;
  position: absolute;
  transform: scale(var(--scale));
  user-select: none;


}

@media (max-width:768px) {
  .red-env-img-box {
    --width: 120px;
  }
}

.red-env-img-box img {
  width: 100%;
  height: 100%;
  transform: rotate(-38deg);
}

@keyframes money {
  to {
    transform: translateY(140vh) scale(var(--scale));
  }
}
</style>