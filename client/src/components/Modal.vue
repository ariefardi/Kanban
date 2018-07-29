<template>
  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">New Note</h4>
            </div>
            <div class="form-group">
              <textarea :value="note" @change="onChangeNote($event.target.value)" style="text-align: center" class="form-control" cols="3" rows="3" id="comment"></textarea>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal" @click="addNote(type)">Submit</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  // define props with type
  props: {
    note: String,
    type: String,
    onChangeNote: Function,
    addNote: Function
  }
}
</script>
