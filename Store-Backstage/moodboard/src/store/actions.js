/*
* @Author: Marte
* @Date:   2017-11-07 14:30:32
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-14 15:56:11
*/

'use strict';
import axios from 'axios'
 export const test= ({ commit })=> {
        console.log(123)
      axios.get('http://localhost:3000/api/123').then((response) => {
          console.log(response.data)
        commit('SET_PROJECT_LIST', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    };
export const getgoods= ({ commit })=> {
console.log(2131321)
      axios.get('http://localhost:3000/api/goodlist').then((response) => {
          console.log(response.data)
        commit('SET_GOODS_LIST', { list: response.data.data})
      }, (err) => {
        console.log(err)
      })
    }

