<template lang="pug">
    .home
      .home__converter-container
        CurrencyConverter
</template>

<script>
const CurrencyConverter = () => import("@/components/CurrencyConverter");

export default {
  name: "Home",
  components: {
    CurrencyConverter
  }
};
</script>

<style lang="scss">
  .home {
    background: url("~@/assets/images/background.jpg");
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;

    &__converter-container {
    }
  }
</style>
