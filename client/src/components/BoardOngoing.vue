<template>
    <v-flex xs12 sm12 md4>
        <v-card  style="padding:10px;margin:10px">
            <v-card-text style="background-color:lightblue;">
                {{name}}
            </v-card-text>
            <draggable class="drag" v-model="notes" :options="{group:'kanban'}" @start="drag=true" @end="drag=false">
            <v-container v-for="([key, note]) in Object.entries(data)" :key="key">
                <v-layout justify-center>
                <v-flex xs10>
                    <v-card class="pointer-cursor" style="background-color:lightblue;">
                        <v-card-text>
                            {{note}} 
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs1>
                    <v-btn @click="deleteTodo(key)" icon="" small> <v-icon> clear </v-icon> </v-btn>
                </v-flex>
                </v-layout>
            </v-container>
            </draggable>
        </v-card>
    </v-flex>
</template>

<script>

import draggable from 'vuedraggable'
export default {
    components: {
        draggable
    },
    props: {
    data: [Array, Object],
    name: String,
    type: String,
    color: String,
    changeType: Function
  },
  computed: {
    notes: {
      get () {
        return Object.values(this.data)
      },
      set (value) {
        this[`$${this.type}`].set({...value})
      }
    }
  },
  methods: {
    deleteTodo (key) {
      this[`$${this.type}`].child(key).remove()
    }
  }
}
</script>

<style scoped>
    .drag {
    min-height: 3em;
    }
    .pointer-cursor {
        cursor: pointer;
    }
</style>
