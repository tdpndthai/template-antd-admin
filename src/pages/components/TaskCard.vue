<template>
  <div style="display: flex">
    <task-group class="task-group" title="ToDo" group="task">
      <task-item :key="index" v-for="(item, index) in todoList" :content="item" />
    </task-group>
    <task-group class="task-group" title="In Progress" group="task">
      <task-item :key="index" v-for="(item, index) in inproList" :content="item" />
    </task-group>
    <task-group class="task-group" title="Done" group="task">
      <task-item :key="index" v-for="(item, index) in doneList" :content="item" />
    </task-group>
  </div>
</template>

<script>
import TaskGroup from '../../components/task/TaskGroup'
import TaskItem from '../../components/task/TaskItem'
const todoList = ['Task one', 'Task one', 'Task one', 'Task one', 'Task one', 'Task one']
const inproList = ['Task 7', 'Task 7', 'Task 7', 'Task 7', 'Task 7', 'Task 7']
const doneList = ['Task 13', 'Task 13', 'Task 13', 'Task 13', 'Task 13', 'Task 13']
export default {
  name: 'TaskCard',
  components: {TaskItem, TaskGroup},
  data () {
    return {
      todoList,
      inproList,
      doneList
    }
  }
}
</script>

<style lang="less" scoped>
  .task-group{
    margin: 0 48px;
  }
  .dragable-ghost{
    border: 1px dashed red;
    opacity: 1;
  }
  .dragable-chose{
    border: 1px dashed red;
    opacity: 0.8;
  }
  .dragable-drag{
    border: 1px dashed red;
    opacity: 1;
  }
</style>
