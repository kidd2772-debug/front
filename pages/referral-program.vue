<script setup lang="ts">
import referralInviteSection from '~/components/features/dashboard/referral/referralInviteSection.vue';
import referralSummarySection from '~/components/features/dashboard/referral/referralSummarySection.vue';
import referralTiersSection from '~/components/features/dashboard/referral/referralTiersSection.vue';
definePageMeta({
  title: 'Referral Program'
});
</script>

<template>
  <div class="referral-page">
    <referralSummarySection  />

    <referralInviteSection />

    <referralTiersSection  />
  </div>
</template>

<style scoped>
.referral-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>