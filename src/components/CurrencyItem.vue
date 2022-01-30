<template functional lang="pug">
  .currency-item
    .currency-item__shot-name {{ props.shortName }}
    .currency-item__name 1 {{ props.name }}
    .currency-item__value {{ (Math.trunc(props.value * 100) / 100).toLocaleString() }}
</template>

<style lang="scss">

.currency-item {
  display: grid;
  grid-template: 'shot-name value' 'name value' / 1fr auto;

  &__shot-name {
    grid-area: shot-name;
    font-family: $font-family-accent;
    font-size: 20px;
    line-height: 24px;
    color: $color-base;
    margin-bottom: 4px;
  }

  &__name {
    grid-area: name;
    font-family: $font-family-base;
    font-size: 13px;
    line-height: 18px;
    color: $color-weak;
  }

  &__value {
    grid-area: value;
    font-family: $font-family-accent;
    font-size: 20px;
    line-height: 24px;
    color: $color-weak;
  }

}

</style>