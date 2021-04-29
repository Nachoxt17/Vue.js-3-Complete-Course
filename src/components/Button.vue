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
      this.$emit('btn-click');
    }
  }
};
</script>
