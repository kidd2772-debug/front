<template>
  <BaseCard class="earnings-statistics-card">
    <div class="earnings-statistics-card_inner">
    <header class="stats-header">
      <div class="stats-title">
        <h2>Earnings Statistics</h2>
      </div>
      <button class="refresh-btn">
        <span>Refresh</span>
      </button>
    </header>

    <div class="chart-area">
      <base-bar-chart
          v-if="chartRawData.length"
          :chart-data="chartData"
          :chart-options="chartOptions"
      />
    </div>

    <div class="x-axis">
      <div
          v-for="(item, index) in chartRawData"
          :key="index"
          class="date-label"
          :class="{ active: item.label === activeDate }"
      >
        <span>{{ item.label.split(' ')[0] }}</span>
        <span class="month">{{ item.label.split(' ')[1] }}</span>
      </div>
    </div>

    <footer class="stats-legend">
      <div
          v-for="legend in legendItems"
          :key="legend.label"
          class="legend-item"
      >
        <span
            class="legend-dot"
            :style="{ backgroundColor: legend.color }"
        ></span>
        <span>{{ legend.label }}</span>
      </div>
    </footer>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import baseBarChart from '~/components/base/baseBarChart.vue';

const chartRawData = ref([
  { label: '31 Jul', value: 10 }, { label: '1 Aug', value: 15 },
  { label: '2 Aug', value: 20 }, { label: '3 Aug', value: 25 },
  { label: '4 Aug', value: 22 }, { label: '5 Aug', value: 30 },
  { label: '6 Aug', value: 35 }, { label: '7 Aug', value: 40 },
  { label: '8 Aug', value: 38 }, { label: '9 Aug', value: 45 },
  { label: '10 Aug', value: 50 }, { label: '11 Aug', value: 55 },
  { label: '12 Aug', value: 52 }, { label: '13 Aug', value: 60 },
  { label: '14 Aug', value: 65 }, { label: '15 Aug', value: 70 },
  { label: '16 Aug', value: 68 }, { label: '17 Aug', value: 75 },
  { label: '18 Aug', value: 80 }, { label: '19 Aug', value: 78 },
  { label: '20 Aug', value: 85 }, { label: '21 Aug', value: 90 },
  { label: '22 Aug', value: 88 }, { label: '23 Aug', value: 95 },
  { label: '24 Aug', value: 100 },
]);

const chartData = computed(() => {
  return {
    labels: chartRawData.value.map(item => item.label),
    datasets: [
      {
        label: 'Network Earnings',
        data: chartRawData.value.map(item => item.value),
        backgroundColor: '#E2E2E2',
        borderColor: '#E2E2E2',
        borderRadius: 4,
        maxBarThickness: 25,
      },
    ],
  };
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      backgroundColor: '#191A23',
      titleFont: { weight: 'bold' },
      bodyFont: { size: 14 },
      padding: 10,
      cornerRadius: 8,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      border: { display: false },
      ticks: { display: false },
    },
    y: {
      display: false,
    },
  },
});

const activeDate = ref('24 Aug');
const legendItems = ref([
  { label: 'Network Earnings', color: '#A0FF00' },
  { label: 'Referrals', color: '#DDDDDD' },
  { label: 'Rank Achievements', color: '#5CDE02' },
  { label: 'Referral Bonus', color: '#DDDDDD' },
]);
</script>

<style lang="scss" scoped>
.earnings-statistics-card {
  padding: 0;
  overflow: hidden;
}

.stats-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
}

.stats-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  h2 {
    margin: 0;
    font-size: 1.25rem;
    background-color: #F2FED1;
    padding: 0 4px;
    border-radius: 8px;
  }
}

.refresh-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #F2FED1;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.chart-area {
  height: 200px;
  padding: 1rem 1.5rem 0;
}

.x-axis {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
}

.date-label {
  font-size: 0.8rem;
  color: #666;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;

  &.active {
    background-color: $primary-green;
    color: #000;
  }

  .month {
    font-weight: 400;
  }
}

.stats-legend {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1rem 1.5rem;
  background-color: #FBFBFB;
  border-top: 1px solid $border-color;
  border-radius: 24px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.earnings-statistics-card_inner {
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 0;
  overflow-wrap: break-word;
  --card-bg: #FFFFFF;
  background-color: #F3F3F3;
  box-shadow: 0 5px 0 0 #191A23;
  border-radius: 20px;
  color: #000000;
  border: 1px solid;
  --card-radius: 0.375rem;
  --card-padding:1.25rem;
  margin-bottom:0.375rem;
}
.date-label {
  color: black;
}
</style>