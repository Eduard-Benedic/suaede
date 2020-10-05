import data from '../data.json'
import _ from 'lodash'
import nestedProperty from 'nested-property'
import { getByKeyword, getFullSearch, getChunkedData } from './getters_helpers'

const state = () => ({
     // People List
     peopleList: data,
     keyword: '',
     // Contains the state for the current 
     currentCardList: [],
     pageNum: '1',
     // Flag used to render either the filtered or paginated array of people
     // Initially we render a paginated list of people
     stopFiltering: true
});

const mutations = {
     ["UPDATE_VALUE"](state, { elIndex, val, field }) {

          return nestedProperty.set(state.peopleList[elIndex], field, val)

     },
     ["UPDATE_FILTER_KEYWORD"](state, { keyword }) {
          return state.keyword = keyword;
     },
     ["SET_CURRENT_PAGE"](state, { currentPage }) {
          return state.currentCardList = currentPage;
     },
     ["UPDATE_CURRENT_PAGE"](state, { sliceStart, sliceEnd }) {
          let chunkedArray = _.chunk(state.peopleList, 7);
          let finalArr = chunkedArray.slice(sliceStart, sliceEnd)
          return state.currentCardList = finalArr[0]
     },
     ["UPDATE_IS_FILTERING"](state, { stopFiltering }) {
          return state.stopFiltering = stopFiltering;
     },
     ["UPDATE_NUMBER_PAGE"](state, { pageNum }) {
          return state.pageNum = pageNum;
     }
}

const getters = {
     filteredByKeyword: (state) => {
          return getByKeyword(state.peopleList, state.keyword)
     },
     getFullSearch: state => {
          return getFullSearch(state.peopleList, state.keyword)
     },
     getChunkedData: state => {
          return getChunkedData(state.peopleList)
     },
     getPaginationLength: state => {
          return _.chunk(state.peopleList, 7).length
     },
     getIsFiltering: state => {
          return state.stopFiltering
     },
}

const actions = {
     updateValue({ state, commit }, { id, val, field }) {
          let elIndex = state.peopleList.findIndex(person => person._id === id);

          commit('UPDATE_VALUE', { elIndex, val, field })
     },
     filterChart({ commit }, { keyword }) {
          commit('FILTER_CHART', { keyword })
     },
     updateFilterKeyword({ commit }, { keyword, stopFiltering }) {

          commit('UPDATE_FILTER_KEYWORD', { keyword });
          commit("UPDATE_IS_FILTERING", { stopFiltering });
     },
     setCurrentPage({ state, commit }, { sliceStart, sliceEnd }) {
          const chunkedArray = _.chunk(state.peopleList, 7);
          const finalArr = chunkedArray.slice(sliceStart, sliceEnd);

          commit('SET_CURRENT_PAGE', { currentPage: finalArr[0] })
     },
     updateCurrentPage({ commit }, { sliceStart, sliceEnd, pageNum }) {
          commit('UPDATE_CURRENT_PAGE', { sliceStart, sliceEnd });
          commit('UPDATE_NUMBER_PAGE', { pageNum })
     },
     stopFiltering({ commit }, { stopFiltering }) {
          commit("UPDATE_IS_FILTERING", { stopFiltering });
     }
}


export default {
     namespaced: true,
     state,
     mutations,
     getters,
     actions
}