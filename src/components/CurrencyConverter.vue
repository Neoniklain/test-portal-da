<template lang="pug">
  .currency-converter
    .currency-converter__panel
      .currency-converter__header Курс валют к рублю
      .currency-converter__search
        .currency-converter__search-label Поиск
        input(
            type="text"
            class="currency-converter__search-input"
            placeholder="Начните набирать символ..."
            @input="filterData"
          )
      CurrencyList(
        v-if="filteredCurrencyList.length > 0"
        :currencyList="filteredCurrencyList"
        @select-currency="selectCurrency"
      )
      .currency-converter__empty(v-else) Ничего не найдено
    hr.currency-converter__splitter(v-if="selectedCurrency")
    .currency-converter__panel(v-if="selectedCurrency")
      ConverterPanel(
      :key="selectedCurrency.ID"
      :currency="selectedCurrency")


</template>

<script>

import {mapActions, mapGetters} from "vuex";

const CurrencyList = () => import("@/components/CurrencyList");
const ConverterPanel = () => import("@/components/ConverterPanel");

export default {
  name: "CurrencyConverter",
  components: {
    CurrencyList,
    ConverterPanel
  },
  data() {
    return {
      selectedCurrency: null,
      searchTimeout: null,
      filter: ""
    }
  },
  computed: {
    ...mapGetters({
      currencyList: 'getCurrencyList'
    }),
    filteredCurrencyList() {
      if(this.filter) {
        return this.currencyList.filter(x =>
            x.Name.toLowerCase().includes(this.filter.toLowerCase())
            || x.CharCode.toLowerCase().includes(this.filter.toLowerCase())
            || x.Value.toString().includes(this.filter)
        )
      }
      return this.currencyList;
    }
  },
  created() {
    this.loadCurrency()
  },
  methods: {
    ...mapActions([
      'loadCurrency'
    ]),
    selectCurrency(currency) {
      this.selectedCurrency = currency;
    },
    filterData(event) {
      clearTimeout(this.searchTimeout)
      this.searchTimeout = setTimeout(() => {
        event.target.value = event.target.value.trim();
        this.filter = event.target.value;
      }, 500)
    }
  }
}
</script>

<style lang="scss">
.currency-converter {
  background: $color-background;
  border: 1px solid $color-border;
  min-width: 528px;
  display: flex;
  align-items: center;

  &__panel {
    padding: 32px 31px 32px 31px;
    width: 500px;
  }

  &__splitter {
    align-self: normal;
    height: auto;
    margin: 0;
    border: none;
    border-left: 1px solid $color-splitter;
  }

  &__header {
    font-family: $font-family-accent;
    color: $color-base;
    font-size: 30px;
    line-height: 37px;
    margin-bottom: 40px;
  }

  &__search {
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 46px;
  }

  &__search-label {
    font-family: $font-family-base;
    color: $color-weak;
    margin-bottom: 3px;
  }

  &__search-input {
    padding: 14px 14px 14px 12px;
    background: white;
    border: 1px solid $color-border;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    font-size: 13px;
    line-height: 18px;
    font-family: $font-family-base;
    color: $color-base;

    &::placeholder {
      color: $color-base;
      opacity: 1;
    }
  }

  &__empty {
    height: 350px;
    display: flex;
    justify-content: center;
    color: $color-weak;
    font-family: $font-family-base;
    font-size: 24px;
  }

}
</style>