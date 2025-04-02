<template>
  <div>
    <redEnvelopeRainVue style="position: fixed;left: 0;top: 0;bottom: 0;right: 0;" :num="100" :icon="redEnvelopeRainCard"></redEnvelopeRainVue>
  </div>
</template>

<script setup lang="ts">
import redEnvelopeRainVue from "red-envelope-rain-vue"
import redEnvelopeRainCard from './assets/redEnvelopeRainCard.png'
</script>

<style scoped lang="less"></style>