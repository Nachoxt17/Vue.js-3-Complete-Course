<!--+-Component HTML Part:_-->
<template>
  <button v-on:click="onClick()" :style="{ background: color }" class="btn">{{ text }}</button>
</template>

<!--+-Component Logic JS Part:_-->
<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      console.log("Click");
    }
  }
};
</script>

<!--+-Component CSS Styles Part:_(Scoped means that THIS styles Only apply for THIS Component)-->
<style scoped>
</style>