<template lang="pug">
  .converter-panel
    .converter-panel__item
      .converter-panel__label В рублях
      .converter-panel__input-area
        input.converter-panel__input(v-model="rub" type="number" @input="changeRub")
        .converter-panel__input-label 1 RUR = {{ rubInCurrency.toLocaleString() }} {{ currency.CharCode }}
    .converter-panel__icon
      include ../assets/icons/exchange.svg
    .converter-panel__item
      .converter-panel__label {{ currency.CharCode }}
      .converter-panel__input-area
        input.converter-panel__input(v-model="convertedCurrency" type="number" @input="changeCurrency")
        .converter-panel__input-label 1 {{ currency.CharCode }} = {{ currency.Value.toLocaleString() }} RUR
</template>

<script>
export default {
  name: "ConverterPanel",
  props: {
    currency: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      rub: 0,
      convertedCurrency: 0
    }
  },
  computed: {
    rubInCurrency() {
      return Math.trunc(1 / this.currency.Value * 1000000) / 1000000;
    }
  },
  methods: {
    changeRub() {
      this.convertedCurrency = Math.trunc(this.rub / this.currency.Value * 100) / 100;
    },
    changeCurrency() {
      this.rub = Math.trunc(this.convertedCurrency * this.currency.Value * 100) / 100;
    }
  }
}
</script>

<style lang="scss">
  .converter-panel {

    &__label {
      font-family: $font-family-base;
      font-size: 16px;
      line-height: 18px;
      color: $color-weak;
      margin-bottom: 5px;
    }

    &__input-area {
      background: $color-background;
      border: 1px solid $color-border;
      border-radius: 4px;
      padding: 27px 19px 14px 19px;
    }

    &__input {
      width: 100%;
      border: none;
      outline: none;
      text-align: right;
      font-family: $font-family-accent;
      font-size: 48px;
      line-height: 59px;
      color: $color-weak;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      &[type=number] {
        -moz-appearance: textfield;
      }
    }

    &__input-label {
      font-family: $font-family-base;
      font-size: 13px;
      line-height: 18px;
      text-align: right;
      color: $color-weak;
      margin-top: 21px;
    }

    &__icon {
      text-align: center;
      margin-top: 40px;
      margin-bottom: 30px;
    }
  }
</style>