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
            v-if="chartRawData && chartRawData.length"
            :chart-data="chartData"
            :chart-options="chartOptions"
        />
        <p v-else style="text-align: center; padding: 2rem;">
          No earnings data available for this period.
        </p>
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

const props = defineProps({
  chartRawData: {
    type: Array as () => Array<{ label: string; value: number }>,
    required: true,
    default: () => [],
  },
});

const chartData = computed(() => {
  return {
    labels: props.chartRawData.map(item => item.label),
    datasets: [
      {
        label: 'Network Earnings',
        data: props.chartRawData.map(item => item.value),
        backgroundColor: '#E2E2E2',
        borderColor: '#E2E2E2',
        borderRadius: 4,
        maxBarThickness: 25,
      },
    ],
  };
});

const activeDate = computed(() => {
  if (!props.chartRawData || props.chartRawData.length === 0) {
    return null;
  }
  return props.chartRawData[props.chartRawData.length - 1].label;
});

const chartOptions = ref({ /* ... ваши опции как и были ... */ });
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