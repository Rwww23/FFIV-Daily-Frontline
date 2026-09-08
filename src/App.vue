<script setup lang="ts">
import TheCalendar from './components/TheCalendar.vue'
import Countdown from './components/Countdown.vue'
import Rotation from './components/Rotation.vue'
import QuickGlance from './components/QuickGlance.vue'

//todo: 距下次轮换时间 - DONE
//todo：订阅日历——这个发布后再做吧
//todo：UI优化；设备适配
//* ？为啥我VCalendar的高光与day和day-content文字对不上
</script>

<template>
  <header>
    <div class="wrapper">
      <h1><QuickGlance /></h1>
    </div>
    <section>
      <div><Rotation /></div>
      <div><Countdown /></div>
    </section>
  </header>

  <main>

    <TheCalendar />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
