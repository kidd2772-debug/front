<template>
  <div class="summary-section">

    <div class="cards-grid">

      <div class="points-card">
        <h2 class="card-title">Referral bonus:</h2>

        <div class="value-display">
          <span class="value-text">{{ points }}</span>
        </div>

      </div>

      <div class="referrals-card">
        <h3 class="card-title small-title">Referrals:</h3>

        <div class="value-display-small">
          <span class="value-text-small">{{ referrals }}</span>
        </div>
      </div>

    </div>

    <div class="pending-info">
      Pending Referrals: {{ pendingReferrals }}
      <span class="info-icon">ⓘ</span>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const points = ref(0);
const referrals = ref(0);
const pendingReferrals = ref(0);
</script>

<style lang="scss" scoped>
@use "~/assets/scss/_variables.scss" as *;

.summary-section {
  background-color: #FFFFFF;
  border: 2px solid #191A23;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 5px 0 0 #191A23;
}

.cards-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
}

.card-title {
  margin: 0;
  font-weight: 700;
  font-size: 1.25rem;

  &.small-title {
    font-size: 1rem;
    background-color: #F2FED1;
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 8px;
  }
}

.points-card, .referrals-card {
  border: 1px solid #191A23;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.points-card {
  background-color: #F2FED1;
}

.referrals-card {
  background-color: #FFFFFF;
  align-items: center;
  text-align: center;
}

.value-display, .value-display-small {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
}

.value-text {
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1;
}
.value-text-small {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
}


.value-display-small {
  border: 1px solid #191A23;
  border-radius: 999px;
  padding: 0.75rem 1.5rem;
}



.pending-info {
  margin-top: 1.25rem;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.info-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1.5px solid #666;
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  color: #666;
}
</style>