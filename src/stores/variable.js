import { defineStore } from 'pinia'

export const useVariablesStore = defineStore('variables', {
  state: () => {
    return {
      text: '',
      readerModel: 'flashcard',
      wordGrouping: 1,
      wpm: 200
    }
  }
})
