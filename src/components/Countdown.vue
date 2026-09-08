<template>
  <div class="countdown">
    <span>下次轮换：</span>
    <span>{{ timeLeft }}</span>
    <span>后</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed} from 'vue';
import { formatTimeDiff } from '../utils/formatTimeDiff';
import { getCountdown } from '../utils/getCountdown';
const timeNow = ref(new Date());
setInterval(() => {
  timeNow.value = new Date();
}, 1000);

const timeLeft = computed(() => {
  const countdown = getCountdown(timeNow.value);
  return formatTimeDiff(countdown);
});

</script>

<style scoped>
.countdown {
  display: flex;
  flex-direction: row;
}
</style>
