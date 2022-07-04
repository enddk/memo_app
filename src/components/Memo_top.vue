<template>
  <section class="alert alert-primary">
    <div class="form-control-group row">
      <label class="col-12 h5 text-center">memo app</label>
      <div class="text-center">
        <button class="btn btn-primary" v-on:click="add">add</button>
      </div>
    </div>
    <br>
    <ul class="list-group">
      <li v-for="(item, i) in memos" class="d-flex list-group-item text-start justify-content-between">
        <p class="d-inline-flex" style="overflow:hidden; text-overflow: ellipsis; white-space: nowrap;">{{ item.memo }}</p>
        <a v-bind:href="item.href" class="d-inline-flex">編集</a>
      </li>
    </ul>
  </section>
</template> 

<script>
import {ref, reactive} from 'vue'

export default {
  name: 'Memo_top',
  props: {
    
  },
  data() {
    return {
      memos: []
    }
  },
  mounted(){
    for( var i = 0; i < localStorage.length; i++ ){
      var key = localStorage.key(i);
      var memo = {key: key, memo: localStorage.getItem(key), href:'detail/'+key};
      this.memos[i] = memo; 
    }
  },
  methods:{
    add(){
      var key = Math.random().toString(32).substring(2);
      if(localStorage.getItem(key))
      {
        window.location.href = 'detail/' + key;
      }
      else 
      {
        window.location.href = 'detail/' + key;
      }
    }
  }
}
</script>
