<template>
  <div class="countdown">
    <h3>下次轮换：</h3>
    <p>{{ timeLeft }}</p>
    <h3>后</h3>
  </div>
</template>

<script setup lang="ts">
import { ref, computed} from 'vue';
import { formatTimeDiff } from '../utils/formatTimeDiff';
import { getCountdown } from '../utils/getCountdown';
const timeNow = ref(new Date());
setInterval(() => {
  timeNow.value = new Date();
  //
}, 1000);

const timeLeft = computed(() => {
  const countdown = getCountdown(timeNow.value);
  return formatTimeDiff(countdown);
});

</script>
