<template>
  <div class="flex header">
    <q-btn @click="logoRedirect" :ripple="false" size="xl" flat style="color: black" label="Fast Reader" />
    <q-btn :ripple="false" color="positive" label="Start!" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Header',
  setup() {
    const router = useRouter()

    function logoRedirect () {
      router.push({
        path: '/'
      })
    }

    return {
      logoRedirect
    }
  }
})
</script>

<style>
  .header {
    background-color: white;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10vw;
    padding-right: 10vw;
  }
</style>
