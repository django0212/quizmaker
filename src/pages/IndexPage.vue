<template>
  <q-page class="flex flex-center">
    <div class="main-box">
      <h4><b>Fast Reader</b></h4>
      <h5>Learning to read faster has just become a lot easier!</h5>
      <textarea v-model="text" class="main-input shadow-16" placeholder="Paste your text here..."></textarea>
      <div class="flex responsive-buttons q-my-lg">
        <div class="row">
          <q-input class="wpm" v-model="wpm" input-class="text-right" outlined suffix="WPM" />

          <q-btn @click="showOptionsDialog = !showOptionsDialog" :ripple="false" class="wpm" color="primary" icon="settings" label="Options" />
        </div>
        <!-- <span class="buffer"></span> -->
        <q-btn :ripple="false" class="wpm" color="positive" label="Start!" />
      </div>
    </div>

    <OptionsDialog :show="showOptionsDialog" @close="showOptionsDialog=false" />

  </q-page>
</template>

<script>
import { ref } from 'vue'
import OptionsDialog from 'src/components/OptionsDialog.vue'

export default {
  name: 'IndexPage',
  components: {
    OptionsDialog,
},
  setup() {
    const text = ref('')
    const wpm = ref(200)

    return {
      text,
      wpm,
      showOptionsDialog: ref(false)
    }
  }
}
</script>

<style>
  @media screen and (min-width: 536px) {
      h4 {
        font-size: 3rem;
        margin: 0px;
      }

      h5 {
        font-size: 1.25rem;
      }

      .main-box {
      text-align: center;
      padding-left: 5vw;
      padding-right: 5vw;
      padding-top: 20px;
      padding-bottom: 50px;
      min-width: 70vw;
      max-width: 900px;
    }

    .responsive-buttons {
      justify-content: space-between;
      width: 100%;
    }

    .wpm {
      width: 150px;
      border-radius: 10px;
      margin-left: 1vw;
      margin-right: 1vw;
      /* font-size: 11px; */
    }
  }

  @media screen and (max-width: 535px) {
      h4 {
        font-size: 2.25rem;
        margin: 0px;
      }

      h5 {
        font-size: 1rem;
      }

      .main-box {
      text-align: center;
      padding-left: 5vw;
      padding-right: 5vw;
      padding-top: 20px;
      padding-bottom: 50px;
      min-width: 70vw;
      max-width: 500px;
    }

    .responsive-buttons {
      justify-content: center;
      width: 100%;
    }

    .wpm {
      width: 100%;
      border-radius: 10px;
      margin-top: 1vh;
    }
  }

  .main-input {
    min-height: 300px;
    min-width: 100%;
    max-width: 100%;
    border-radius: 10px;
    resize: none;
    border-style: solid;
    padding: 20px;
  }

  .main-input:focus {
    outline: none;
    border-style: dashed;
  }

  .button {
    border-radius: 10px;
  }

  .gray {
    background-color: rgb(223, 222, 222);
  }

  .buffer {
    width: 10vw;
  }
</style>
