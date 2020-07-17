/*
 * @Descripttion:调用后端购物车接口的函数
 * @Author: congz
 * @Date: 2020-06-14 15:50:08
 * @LastEditors: congz
 * @LastEditTime: 2020-07-17 10:59:57
 */

import axios from 'axios'

// 创建购物车
const postCart = (form, token) =>
  axios.post('/api/v1/carts', form, { params: { token } }).then(res => res.data)

// 读取购物车
const showCarts = (user_id, token) =>
  axios
    .get(`/api/v1/carts/${user_id}`, { params: { token } })
    .then(res => res.data)

// 更新购物车
const updateCart = (form, token) =>
  axios.put('/api/v1/carts', form, { params: { token } }).then(res => res.data)

// 删除购物车
const deleteCart = (form, token) =>
  axios
    .delete('/api/v1/carts', { data: form, params: { token } })
    .then(res => res.data)

export { postCart, showCarts, updateCart, deleteCart }