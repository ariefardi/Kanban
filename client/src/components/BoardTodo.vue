<template>
    <v-flex xs12 sm12 md4>
        <v-card style="padding:10px;margin:10px">
            <v-card-text style="background-color:lightcoral;">
                {{name}}
            </v-card-text>
            <draggable class="drag" v-model="notes" :options="{group:'kanban'}" @start="drag=true" @end="drag=false">
            <v-container v-for="([key, note]) in Object.entries(data)" :key="key" >
                <v-layout justify-center>
                <v-flex xs10>
                    <v-card class="pointer-cursor" style="background-color:lightcoral;">
                        <v-card-text>
                            {{note}} 
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs1>
                    <v-btn @click="deleteTodo(key)" icon small> <v-icon> clear </v-icon> </v-btn>
                </v-flex>
                </v-layout>
            </v-container>
            </draggable>
        </v-card>
        <v-btn large style="left:42%;top:-20%" icon color="pink"
             data-toggle="modal" data-target="#myModal" 
             @click='changeType(type)' > <v-icon>add</v-icon> 
        </v-btn>
    </v-flex>
</template>

<script>
import swal from 'sweetalert'
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
    },
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
