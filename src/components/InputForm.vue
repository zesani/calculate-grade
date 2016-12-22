<template lang="html">
  <div class="">
    <p class="control">
       <input class="input" type="text" placeholder="ชื่อวิชา" v-model="name" style="width: 33vw">
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
    </p>
  </div>
</template>

<script>
export default {
  props: ['subject', 'setGrade'],
  data () {
    return {
      name: this.subject.name,
      grade: this.subject.grade,
      credit: this.subject.credit
    }
  },
  watch: {
    name (newValue) {
      this.setGrade(this.subject.id, newValue, this.grade, this.credit)
    },
    grade (newValue) {
      console.log(newValue)
      this.setGrade(this.subject.id, this.name, newValue, this.credit)
    },
    credit (newValue) {
      this.setGrade(this.subject.id, this.name, this.grade, newValue)
    }
  }
}
</script>

<style lang="css">
</style>
