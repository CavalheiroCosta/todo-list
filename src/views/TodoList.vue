<template>
  <div class="todo">
    <div class="todo-wrapper">
      <p class="todo-title">Lista de coisas a fazer</p>
      <div class="todo-content">
        <Input placeholder="Adicione novo valor" v-model="text" :inputData="text" />
        <Button :addItem="addItem" name="Adicionar" />
      </div>
      <ul class="todo-result">
        <li v-for="(list, index) in lists" v-bind:key="list[list]" class="todo-list">
          {{ list }}
          <span class="todo-remove" v-on:click="removeItem(index)">X</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

export default {  
  name: "todo",
  components: {
    Input,
    Button
  },
  data() {
    return {
      text: "",
      lists: []
    };
  },
  methods: {
    addItem() {
      this.lists.push(this.text);
    },
    removeItem(index) {
      this.lists.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  justify-content: center;

  &-wrapper {
    width: 500px;
    display: flex;
    margin-top: 50px;
    padding-top: 50px;
    min-height: 120px;
    border-radius: 10px;
    align-items: center;
    flex-direction: column;
    background-color: #2f3ad6;
  }

  &-title {
    color: #fff;
    font-size: 30px;
    margin: 0 0 20px;
  }

  &-result {
    padding: 0;
    width: 100%;
  }

  &-list {
    display: flex;
    margin: 0 20px;
    padding: 10px 0;
    font-size: 18px;
    color: #ffffff;
    justify-content: space-between;
  }

  &-remove {
    color: rgb(255, 255, 255);
    cursor: pointer;
  }
}
</style>
