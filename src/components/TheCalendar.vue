<script setup lang="ts">
import { getMap } from '../utils/getMap'
import { ref } from 'vue'
//todo:**显示当日战场 - DONE

//todo：调整日期与战场内容的字体大小

//todo：回到今天按钮 - DONE
//todo：订阅（？怎么生成ics
//todo：轮换时间倒计时 - DONE
//todo：轮换序列显示（*服用enumerate？

const attrs = ref([
  {
    key: 'today',
    highlight: {
      color: 'blue',
      fillMode: 'light',
    },
    dates: new Date(),
    customData: {
      //mapToday: getMap(day.date),
    },
  },
])

const calendar = ref(null);

const goToday = () => {
  calendar.value!.focusDate(new Date());
  //move/focusdate?
}

</script>


<template>
  <button type = "button" class = "btn btn-outline-primary" @click="goToday">跳转当月</button>
  <VCalendar expanded :attributes="attrs" ref="calendar" timezone="Asia/Shanghai">
    <template #day-content="{ day }">
      <div class="day-content">
        <div class="day-number">{{ day.day }}</div>
        <div class="map-today">    {{ console.log(day.date) }}
    {{ console.log(getMap(day.date)) }}{{ getMap(day.date) }}</div> 
      </div>
    </template>
  </VCalendar>
</template>
