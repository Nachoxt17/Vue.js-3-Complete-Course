<!--+-Component HTML Part:_-->
<template>
  <header>
    <h1>{{ title }}</h1>
    <Button text="Add Task" color="green" />
  </header>
</template>

<!--+-Component Logic JS Part:_-->
<script>
import Button from './Button';

export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Hello world'
    },
  },
  components: {
    Button,
  }
}
</script>

<!--+-Component CSS Styles Part:_(Scoped means that THIS styles Only apply for THIS Component)-->
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
 }
</style>