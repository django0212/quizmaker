<template>
  <q-dialog v-model="show" persistent>
      <q-card class="option-card">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h5 text-bold">Options</div>
          <q-space />
          <q-btn icon="close" @click="closeDialog" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div class="option">
            <h6>Reader type</h6>
            <q-select
              class="button-fit"
              transition-show="jump-up"
              transition-hide="jump-up"
              outlined
              v-model="readerModel"
              :options="options"
            />
          </div>

          <div class="option items-center">
            <h6>Word grouping</h6>
            <q-input class="button-fit" :disable="readerModel === 'Paragraph' ? true : false" outlined v-model="wordGrouping" :rules="[ val => !isNaN(val) || 'Please use only numbers']" hint="Enter a number" />
          </div>
        </q-card-section>
        <q-btn @click="saveVariables" class="q-ma-md" style="float: right; border-radius: 10px;" :ripple="false" color="primary" label="Save" />
      </q-card>
  </q-dialog>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useVariablesStore } from 'src/stores/variable'

export default {
  name: 'OptionsDialog',

  setup(props, context) {
    const $q = useQuasar()
    const variables = useVariablesStore()

    const show = ref(props.show)
    const closeDialog = () => {
      context.emit('close')
    }

    const saveVariables = () => {
      if (isNaN(wordGrouping.value)) {
        $q.notify({
          type: 'negative',
          message: 'Word grouping has to be a number'
        })
      } else {
        variables.wordGrouping = wordGrouping.value
        variables.readerModel = readerModel.value
        closeDialog()
        $q.notify({
          type: 'positive',
          message: 'Successfuly saved preferences'
        })
      }
    }

    const readerModel = ref('Flashcard')
    const options = [
      'Flashcard', 'Paragraph'
    ]
    const wordGrouping = ref(1)


    return {
      show,
      readerModel,
      options,
      wordGrouping,
      saveVariables,
      closeDialog
    }
  },
  props: ['show']
}
</script>

<style>

  .option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 80px;
  }

  .option-card {
    width: 100%;
    max-width: 400px;
  }

  hr {
    height: 0.3px !important;
    color: rgb(226, 222, 222);
  }

  .button-fit {
    width: 50vw !important;
    max-width: 200px;
  }

</style>
