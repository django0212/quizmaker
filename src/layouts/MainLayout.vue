<template>
  <q-layout view="hHh lpr fFf">

    <Header/>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
  import Header from "src/components/Header.vue";

  export default {
    components: {
      Header
    }
  }
</script>
