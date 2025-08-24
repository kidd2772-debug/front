<script setup lang="ts">

</script>

<template>
  <div class="invite">
    <div class="invite__inner">
      <p class="invite__inner__title">
        Invite friends and grow your earnings.
      </p>
      <div class="invite__setup">
        <div class="invite__setup__wrapper">
          <div class="icon"></div>
          <div>
            <p class="title">Refer your friends</p>
            <p class="subtitle">
              Share the link with your friends over twitter or any other social platform.
            </p>
          </div>
        </div>
        <div class="invite__setup__wrapper">
          <div class="icon"></div>
          <div>
            <p class="title">
              Get Grass points when users sign up
            </p>
            <p class="subtitle">
              When your friend signs up on the app, you will receive Grass points.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.invite {
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 0;
  overflow-wrap: break-word;
  --card-bg: #FFFFFF;
  background-color: #FAFAFA;
  box-shadow: 0 5px 0 0 #191A23;
  border-radius: 20px;
  color: #000000;
  border: 1px solid;
  --card-radius: 0.375rem;
  --card-padding: 1.25rem;
  .invite__inner {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    .invite__inner__title {
      line-height: 1.2;
      font-size: 1.25rem;
      background: #F2FED1;
      width: fit-content;
      font-weight: 700;
      margin: 0;
    }
  }
}

.invite__setup {
  gap: 0.75rem;
  flex-direction: row;
  display: flex;
  -webkit-box-align: center;

  .invite__setup__wrapper {
    display: flex;
    position: relative;
    min-width: 0px;
    overflow-wrap: break-word;
    --card-bg:#FFFFFF;
    background-color: #FAFAFA;
    border-radius: 20px;
    color: #000000;
    border: 1px solid;
    --card-radius: 0.375rem;
    --card-padding: 1.25rem;
    width: 100%;
    box-shadow: none !important;
    padding: 1.25rem;
  }
  .title {
    font-weight: 500;
    line-height: 150%;
  }
  .subtitle {
    font-size: 0.75rem;
    line-height: 125%;
  }
  p {
    margin: 0;
  }
}
.icon {
  width: 1rem;
  height: 1rem;
}
</style>