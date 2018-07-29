<template>
  <div class="home">
    <h1> Kanban</h1>
    <v-container>
      <v-layout justify-space-around>
        <BoardTodo v-bind="{
          data: todo,
          name: 'TO DO',
          type: 'todo',
          color: 'red',
          changeType
        }" >
        </BoardTodo>
        <BoardOngoing v-bind="{
          data: ongoing,
          name: 'ON GOING',
          type: 'ongoing',
          color: 'blue',
          changeType
        }" >
        </BoardOngoing>
        <BoardDone v-bind="{
          data: done,
          name: 'DONE',
          type: 'done',
          color: 'green',
          changeType
        }">
        </BoardDone>
      </v-layout>
    </v-container>
    <Modal v-bind="{ note, type, onChangeNote, addNote }"></Modal>
  </div>
</template>

<script>
// @ is an alias to /src
import Board from '@/components/Board.vue'
import BoardTodo from '@/components/BoardTodo.vue'
import BoardOngoing from '@/components/BoardOngoing.vue'
import BoardDone from '@/components/BoardDone.vue'
import Modal from '@/components/Modal.vue'
export default {
  name: 'home',
  components: {
    Board,
    BoardTodo,
    BoardOngoing,
    BoardDone,
    Modal
  },
  data () {
    return {
      todo: {},
      ongoing: {},
      done: {},
      note: '',
      type: ''
    }
  },
  computed: {

  },
  methods: {
    getNotes () {
      ['todo', 'ongoing', 'done'].forEach(task => {
        this[`$${task}`].on('value', response => {
          if (response.val() === null) this[task] = {}
          else this[task] = response.val()
        })
      })
    },
    addNote (type) {
      // this[type].push(this.note)
      this[`$${type}`].push(this.note)
      this.note = ''
      this.type = ''
    },
    changeType (newType) {
      this.type = newType
    },
    onChangeNote (newNote) {
      this.note = newNote
    }
  },
  mounted () {
    this.getNotes()
  }
}
</script>
