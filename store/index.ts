export const state = () => ({
  countries: []
})

export const mutations = {
  setCountries(state, countries) {
    state.countries = countries
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const countries = await app.$axios.$get(
      "https://restcountries.eu/rest/v2/all"
    )
    commit("setCountries", countries)
  }
}
