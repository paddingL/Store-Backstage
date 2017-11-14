/*
* @Author: Marte
* @Date:   2017-11-07 14:31:15
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-07 15:38:31
*/

'use strict';
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import state from './rootState';

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store;