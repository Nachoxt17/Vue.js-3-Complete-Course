<!--+-Component HTML Part:_-->
<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      v-show="homePage"
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<!--+-Component Logic JS Part:_-->
<script>
import Button from './Button'
export default {
  name: 'Header',
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: {
    Button,
  },
  /** https://v3.vuejs.org/guide/computed.html#computed-properties .*/
  computed: {
    homePage() {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    },
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