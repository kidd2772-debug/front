<template>
  <div class="plans-section">
    <header class="plans-header">
      <div class="plans-title">
        <h2>Your Plans</h2>
      </div>
      <button class="next-plans-btn">Next Plans</button>
    </header>

    <div class="timeline-container">

      <div
          v-for="(plan, index) in plansData"
          :key="plan.id"
          class="milestone-wrapper"
      >
        <div
            class="plan-milestone"
            :class="getPlanStatus(plan.id)"
        >
          <div class="milestone-top">
            <span class="top-icon">💎</span>
            <span class="goal-value">{{ plan.goal }}</span>
            <div class="plan-name">{{ plan.name }}</div>
          </div>

          <div class="milestone-middle">
            <div class="middle-icon">
              <span class="icon-logo">〽️</span>
            </div>
          </div>

          <div class="milestone-bottom">
            <div class="requirement-bubble">{{ plan.requiredPoints }} Points</div>
            <span>or</span>
            <div class="requirement-bubble">{{ plan.requiredReferrals }} Referrals</div>
          </div>
        </div>

        <div v-if="index < plansData.length - 1" class="connector-arrow">
          ---->
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const plansData = ref([
  {
    id: 1,
    name: 'Plan I: Iron',
    goal: 0,
    requiredPoints: 373,
    requiredReferrals: 6,
  },
  {
    id: 2,
    name: 'Plan II: Bronze',
    goal: 20,
    requiredPoints: 2595,
    requiredReferrals: 11,
  },
  {
    id: 3,
    name: 'Plan III: Silver',
    goal: 130,
    requiredPoints: 11351,
    requiredReferrals: 17,
  },
  {
    id: 4,
    name: 'Plan IV: Gold',
    goal: 565,
    requiredPoints: 36351,
    requiredReferrals: 34,
  },
  {
    id: 5,
    name: 'Plan V: Platinum',
    goal: '1.8K',
    requiredPoints: '...',
    requiredReferrals: '...',
  },
]);

const currentUserPlanId = ref(3);

const getPlanStatus = (planId: number): 'achieved' | 'current' | 'locked' => {
  if (planId < currentUserPlanId.value) {
    return 'achieved';
  }
  if (planId === currentUserPlanId.value) {
    return 'current';
  }
  return 'locked';
};

</script>

<style lang="scss" scoped>
@use "~/assets/scss/_variables.scss" as *;

.plans-section {
  background-color: #F7F7F7;
  border: 1px solid #000000;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 5px 0 0 #191A23;
}

.plans-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.plans-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  h2 {
    line-height: 1.2;
    font-size: 1.5rem;
    background: #F2FED1;
    width: fit-content;
    font-weight: 700;
    margin: 0;
  }
}

.next-plans-btn {
  background-color: $primary-green;
  border: 1px solid #191A23;
  color: #000;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 3px 0 0 #191A23;
  transition: all 0.1s ease;
  &:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 0 #191A23;
  }
}

.timeline-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}


.milestone-wrapper {
  display: flex;
  align-items: center;
  flex-grow: 1;
  &:last-child {
    flex-grow: 0;
  }
}

.plan-milestone {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  min-width: 120px;

  &.locked {
    opacity: 0.5;
  }

  &.current {
    .middle-icon {
      background-color: $primary-green;
      border-color: #191A23;
      .icon-logo {
        filter: none;
      }
    }
  }

  &.achieved {
    .middle-icon {
      background-color: #e0e0e0;
      border-color: #191A23;
    }
  }
}

.milestone-top {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  .top-icon {
    font-size: 1.25rem;
  }
  .goal-value {
    font-size: 1.5rem;
    font-weight: 700;
  }
  .plan-name {
    font-size: 0.9rem;
    color: #666;
  }
}

.milestone-middle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .middle-icon {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    border-radius: 16px;
    border: 2px solid #191A23;
    background-color: #fff;
    box-shadow: 0 4px 0 0 #191A23;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon-logo {
      font-size: 2rem;
      filter: grayscale(100%);
    }
  }
}

.milestone-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666;
  gap: 0.2rem;
  font-weight: 600;
  .requirement-bubble {
    background-color: #EAEAEA;
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.7rem;
  }
  .current & .requirement-bubble {
    background-color: #F2FED1;
    color: #000;
  }
}

.connector-arrow {
  flex-grow: 1;
  text-align: center;
  color: #B0B0B0;
  font-weight: bold;
}
.milestone-bottom span {
  font-size: 14px;
}
</style>