<template>
    <v-flex>
        <h1>Hello</h1>
        <v-card style="padding:10px">
            <v-card-text style="`background-color:${color};`">
                {{name}}
            </v-card-text>
            <draggable class="drag" v-model="notes" :options="{group:'kanban'}" @start="drag=true" @end="drag=false">
            <v-container v-for="([key, note]) in Object.entries(data)" :key="key">
                <v-layout justify-center>
                <v-flex xs10>
                    <v-card>
                        <v-card-text>
                            {{note}} 
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs1>
                    <v-btn icon="" small> <v-icon> clear </v-icon> </v-btn>
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
    deleteNote (key) {
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
