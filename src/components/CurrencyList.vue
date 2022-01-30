<template lang="pug">
  .currency-list
    .currency-list__items(
      :class="{'currency-list__items_scrolled': isShowAll}"
    )
      hr.currency-list__splitter
      template(v-for="(currency, index) in selectedCurrency")
        .currency-list__item(
          :class="{'currency-list__item_selected': currency === currentCurrency }"
          @click="selectCurrency(currency)"
        )
          CurrencyItem(
            :key="currency.ID"
            :short-name="currency.CharCode"
            :name="currency.Name"
            :value="currency.Value"
          )
        hr.currency-list__splitter
    .currency-list__more(
      v-if="!isShowAll && selectedCurrency.length >= 5"
      @click="showAll"
    ) Показать еще...

</template>

<script>

const CurrencyItem = () => import("@/components/CurrencyItem");

export default {
  name: "CurrencyList",
  components: {
    CurrencyItem
  },
  props: {
    currencyList: {
      type: Array,
      default: () => { return [] }
    }
  },
  data() {
    return {
      isShowAll: false,
      currentCurrency: null
    }
  },
  computed: {
    selectedCurrency() {
      if(!this.currencyList || !this.currencyList.length) {
        return []
      }
      return this.isShowAll ? this.currencyList : this.currencyList.slice(0, 5)
    }
  },
  methods: {
    showAll() {
      this.isShowAll = true
    },
    selectCurrency(currency) {
      this.currentCurrency = currency;
      this.$emit('select-currency', currency)
    }
  }
}
</script>

<style lang="scss">
.currency-list {

  &__items {
    width: 100%;
    height: 350px;
    overflow-y: auto;
    padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */
    box-sizing: content-box; /* So the width will be 100% + 17px */

    &_scrolled {
      height: 404px;
      padding-right: 8px;
    }
  }

  &__item {
    padding: 12px 17px 6px 17px;
    cursor: pointer;

    &_selected {
      background: $color-wheat;
    }
  }

  &__splitter {
    border: none;
    border-top: 1px solid $color-splitter;
    margin: 0;
  }

  &__more {
    cursor: pointer;
    text-align: center;
    font-family: $font-family-base;
    font-size: 13px;
    line-height: 18px;
    color: $color-weak;
    margin-top: 36px;
  }
}
</style>