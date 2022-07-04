<template>
  <section class="alert alert-primary">
    <div class="form-control-group row">
      <label class="col-12 h5 text-center">Detail</label>
    </div>
    <br>
    <div class="border">
      <textarea v-if="change == true" class="form-control" v-model="ans" v-on:input="input"></textarea>
      <ul v-else class="list-group" >
        <li v-for="(item, i) in array" class="list-group-item text-start" draggable="true">{{ item }}</li>
      </ul>
    </div>
    <div>
      <button class="btn btn-primary" v-on:click="save" v-if="ans.length > 0">save</button>
      <button class="btn btn-primary" v-on:click="save" v-else disabled>save</button>
      <button class="btn btn-danger" v-on:click="del">delete</button>
    </div>
  </section>
</template> 

<script>
import {ref, reactive} from 'vue'

export default {
  name: 'Memo_detail',
  props: {
    id: String
  },
  data() {
    return {
      ans: "",
      change: true,
      array: []
    }
  },
  mounted(){
    if(localStorage.getItem(this.id)){
      this.ans = localStorage.getItem(this.id);
    } 
    this.array = this.ans.split(/\n/);
  },
  methods:{
    input() {
      this.ans = this.ans
      this.array = this.ans.split(/\n/);
    },
    save() {
      localStorage.setItem(this.id, this.ans);
      this.$router.push('/');
    },
    del() {
      localStorage.removeItem(this.id);
      this.$router.push('/');
    }
  },
  computed:{

  }
}
</script>