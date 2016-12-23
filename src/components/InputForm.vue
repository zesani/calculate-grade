<template lang="html">
  <div class="">
    <p class="control">
      #{{index + 1}}
       <input class="input" type="text" placeholder="ชื่อวิชา" v-model="subjectName" style="width: 100px;">
      <span class="select">
        <select v-model="grade">
          <option value="4">A</option>
          <option value="3.5">B+</option>
          <option value="3">B</option>
          <option value="2.5">C+</option>
          <option value="2">C</option>
          <option value="1.5">D+</option>
          <option value="1">D</option>
          <option value="0">F</option>
        </select>
      </span>
      <label class="radio">
        <input type="radio" :name="'credit' + subject.id" v-model="credit" value="1">
        1
      </label>
      <label class="radio">
        <input type="radio" :name="'credit' + subject.id" v-model="credit" value="3">
        3
      </label>
      <a class="button is-danger" @click="removeSubject(subject.id)"  style="width: 55px;">
        <span>Delete</span>
        <span class="icon">
          <i class="fa fa-times"></i>
        </span>
      </a>
    </p>
  </div>
</template>

<script>
export default {
  props: ['subject', 'index', 'setGrade', 'removeSubject'],
  data () {
    return {
      subjectName: this.subject.name,
      grade: this.subject.grade,
      credit: this.subject.credit
    }
  },
  mounted () {
    var vm = this
    setTimeout(function () {
      vm.subjectName = vm.subject.name
      console.log(vm.subjectName + ' : ' + vm.subject.name)
      vm.grade = vm.subject.grade
      vm.credit = vm.subject.credit
    }, 100)
  },
  watch: {
    subjectName (newValue) {
      this.setGrade(this.subject.id, newValue, this.grade, this.credit)
    },
    grade (newValue) {
      this.setGrade(this.subject.id, this.subjectName, newValue, this.credit)
    },
    credit (newValue) {
      this.setGrade(this.subject.id, this.subjectName, this.grade, newValue)
    }
  }
}
</script>

<style lang="css">
</style>
