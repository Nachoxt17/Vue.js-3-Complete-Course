<!--+-Component HTML Part:_-->
<template>
  <header>
    <h1>{{ title }}</h1>
    <Button @btn-click="$emit('toggle-add-task')" :text="showAddTask ? 'Close' : 'Add Task'" :color="showAddTask ? 'red' : 'green'" />
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
      showAddTask: Boolean,
    },
  },
  components: {
    Button,
  },
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