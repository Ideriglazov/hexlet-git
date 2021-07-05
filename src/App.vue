<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col form-inline">
        <b-form-input v-model="newTask" placeholder="Enter Task" @keyup.enter="add"></b-form-input> <b-button class="ml-2" variant="primary" @click="add">Add</b-button>
      </div>
      <div class="col form-inline">
        <b-form-input v-model="newColumn" placeholder="Enter Column" @keyup.enter="addColumn"></b-form-input> <b-button class="ml-2" variant="primary" @click="addColumn">Add</b-button>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-3">
        <div class="p-2 alert alert-secondary">
          <h3>Backlog</h3>
          <draggable class="list-group kanban-column" :list="arrBackLog" group="tasks">
            <div class="list-group-item" v-for="element in arrBackLog" :key="element.name">
              {{element.name}}
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-md-3">
        <div class="p-2 alert alert-primary">
          <h3>In Progress</h3>
          <draggable class="list-group kanban-column" :list="arrInProgress" group="tasks">
            <div class="list-group-item" v-for="element in arrInProgress" :key="element.name">
              {{element.name}}
            </div>
          </draggable>
        </div>
      </div>
      <div class="col-md-3" :list="arrColumns">
        <div class="p-2 alert alert-primary" v-for="colElement in arrColumns" :key="colElement.colName">
          <h3>{{colElement.colName}}</h3>
          <draggable class="list-group kanban-column" :list="arrOtherColumns" group="tasks">
            <div class="list-group-item" v-for="element in arrOtherColumns" :key="element.name">
              {{element.name}}
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import draggable from "vuedraggable";
  export default {
    name: 'App',
    components: {
      //import draggable as a component
      draggable
    },
    data() {
      return {
        newTask: "", //new tasks
        newColumn: "",//new columns
        // Arrays to store tasks and columns
        arrBackLog: [
          { name: "Code Sign Up Page" },
          { name: "Test Dashboard" },
          { name: "Style Registration" },
          { name: "Help with Designs" }
        ],
        arrInProgress: [],
        arrOtherColumns: [],
        arrColumns: [
          { colName: "Test"}
        ],
      };
    },
    methods: {
      add: function() { //add new tasks method
        if (this.newTask) {
          this.arrBackLog.push({ name: this.newTask });
          this.newTask = "";
        }
      },
      addColumn: function() { //add new columns method
        if (this.newColumn) {
          this.arrColumns.push({ colName: this.newColumn });
          this.newColumn = "";
        }
      }
    }
  }
</script>

<style>
  .kanban-column{
    min-height: 300px;
  }
</style>
