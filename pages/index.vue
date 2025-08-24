<template>
  <div>
    <div v-if="pending">Loading dashboard...</div>

    <div v-else-if="error">
      <h2>Error loading dashboard</h2>
      <p>{{ error.message }}</p>
    </div>

    <div v-else-if="data">
      <div class="status">
        <div class="status__inner">
          <p>
            Welcome to Epoch 10! On the dashboard
            you will see your earnings for this epoch.
            To view your total number of points, simply
            navigate to the Rewards tab on the left.
          </p>
        </div>
      </div>
      <div class="dashboard-grid">
        <BaseCard>
          <div class="earning">
            <div class="earning__inner">
              <div class="earning__inner__info">
                <p>Earnings</p>
                <div class="earning__inner__info__card">
                  <div class="info">
                    <div>
                      <p>Balance</p>
                      <span>{{ data.user?.balance?.toFixed(2) || '0.00' }}</span>
                    </div>
                  </div>
                  <div class="info">
                    <div>
                      <p>Total Profit</p>
                      <<span>{{ data.user?.totalProfit?.toFixed(2) || '0.00' }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BaseCard>

        <BaseCard>
          <div class="plan">
            <div class="plan__inner">
              <div class="plan__inner__side">
                <div class="plan__info">
                  <div>
                    icon plan
                  </div>
                  <div>
                    progres bar
                  </div>
                </div>
                <p>
                  To next plan u need 1000$
                </p>
                <button>
                  Deposit
                </button>
              </div>
            </div>
          </div>
        </BaseCard>

        <dashboard-earnings-statistics
            class="span-full"
            :chart-raw-data="data.earnings"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardEarningsStatistics from "~/components/features/dashboard/dashboardEarningsStatistics.vue";

const { $api } = useNuxtApp();

const { data, pending, error } = await useAsyncData('dashboard-data', async () => {
  const [user, earnings] = await Promise.all([
    $api('/users/me'),
    $api('/earnings/statistics')
  ]);
  return { user, earnings };
});

useHead({
  title: 'Dashboard'
});

definePageMeta({
  title: 'Dashboard',
  middleware: 'auth'
});
</script>

<style lang="scss" scoped>
.dashboard-grid {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.span-full {
  grid-column: 1 / -1;
}

.status {
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 0px;
  overflow-wrap: break-word;
  --card-bg: #FFFFFF;
  background-color: #F2FED1;
  box-shadow: 0 5px 0 0 #191A23;
  border-radius: 20px;
  color: #000000;
  border: 1px solid;
  --card-radius: 0.375rem;
  --card-padding: 1.25rem;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 0;
  .status__inner {
    padding: 1.25rem;
    flex: 1 1 0;
    p {
      margin: 0;
    }
  }
}

.earning {
  flex-direction: column;
  position: relative;
  min-width: 0px;
  overflow-wrap: break-word;
  --card-bg: #FFFFFF;
  background-color: #F2FED1;
  box-shadow: 0 5px 0 0 #191A23;
  border-radius: 20px;
  color: #000000;
  border: 1px solid;
  --card-radius: 0.375rem;
  --card-padding: 1.25rem;
  height: 100%;
  .earning__inner__info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1 1 0%;
    padding: 20px;
    p {
      color: #000000;
      font-size: 1.25rem;
      font-weight: 700;
      margin: 0;
    }
    .earning__inner__info__card {
      grid-template-columns: 1fr 1fr;
      display: grid;
      gap: 0.75rem;
      grid-auto-rows: 1fr;
      flex-direction: column;
      position: relative;
      min-width: 0;
      .info {
        overflow-wrap: break-word;
        --card-bg: #FFFFFF;
        background-color: #FAFAFA;
        color: #000000;
        --card-radius: 0.375rem;
        --card-padding: 1.25rem;
        width: 100%;
        box-shadow: none !important;
        border-radius: 20px;
        border-width: 1px;
        border-style: solid;
        border-color: initial;
        border-image: initial;

        padding: 1rem 1.5rem;
        margin-inline-start: 0.5rem;
        margin-inline-end: 0.5rem;
        div{
          display: flex;
          align-items: center;
          justify-content: space-between;
          p {
            text-align: left;
            font-size: 1.255rem;
            font-weight: 700;
            text-transform: none;
            background: #F2FED1;
          }
          span {
            font-weight: 700;
            font-size: 2.25rem;
            margin: 0;
          }
        }
      }
    }
  }
}

.plan {
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 0px;
  overflow-wrap: break-word;
  --card-bg: #FFFFFF;
  background-color: #F3F3F3;
  box-shadow: 0px 5px 0px 0px #191A23;
  border-radius: 20px;
  color: #000000;
  border: 1px solid;
  --card-radius: 0.375rem;
  --card-padding: 1.25rem;
  height: 100%;
  box-sizing: border-box;
  .plan__inner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 1rem;
    flex: 1 1 0%;
    .plan__inner__side{
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      width: 100%;
      .plan__info {
        display: flex;
      }
      button {
        display: inline-flex;
        appearance: none;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        user-select: none;
        position: relative;
        white-space: nowrap;
        vertical-align: middle;
        outline: transparent solid 2px;
        outline-offset: 2px;
        border-width: 1px;
        border-style: solid;
        border-image: initial;
        border-color: #000000;
        transition: 0.3s;
        height: 2.5rem;
        min-width: 2.5rem;
        padding-inline-start: 1rem;
        padding-inline-end: 1rem;
        background-color: #ABF600;
        color: #000000;
        width: 100%;
        border-radius: 9999px;
        font-size: 0.875rem;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        font-weight: 700;
        cursor: pointer;
        line-height: 130%;
        text-transform: uppercase;
        &:hover {
          box-shadow: 0px 5px 0px 0px #191A23;
        }
      }
    }
  }
}
</style>