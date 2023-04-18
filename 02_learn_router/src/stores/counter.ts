import { defineStore } from 'pinia'
// defineStore返回一个函数

const useCounter = defineStore("counter", {
  state: () => ({
    count:99
  })
})
export default useCounter