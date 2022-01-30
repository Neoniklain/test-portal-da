import axios from 'axios'

const currencyModule = {
    actions: {
        loadCurrency(context) {
            return axios.get('https://www.cbr-xml-daily.ru/daily_json.js').then(
                res => {
                    if(res.request.status === 200 && res.data?.Valute) {
                        let resultAsArray = Object.keys(res.data.Valute).map((key) => res.data.Valute[key]);
                        context.commit("setCurrencyList", resultAsArray);
                    }
                }
            )
        }
    },
    getters: {
        getCurrencyList: (state) => {
            return state.currencyList;
        },
    },
    mutations: {
        setCurrencyList(state, data) {
            state.currencyList = data;
        }
    },
    state: {
        currencyList: []
    }
};

export default currencyModule