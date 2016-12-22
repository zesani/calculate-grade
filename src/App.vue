<template lang="html">
  <div id="app">
    <nav class="nav has-shadow" backgound-color="red">
      <div class="nav-left">
        <a class="nav-item is-brand">
          <h1 class="title is-1">คำนวณเกรด</h1>
        </a>
      </div>
    </nav>
    <div class="columns">
      <div class="column" style=" width: 100%;">
        <div class="" v-for="subject in subjects">
        </div>
      </div>
      <div class="column">
        <router-view :add-subject="addSubject" :subjects="subjects" :set-grade="setGrade" :total-grades="totalGrades"></router-view>
      </div>
      <div class="column"></div>

    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$router.push('/input-grade')
  },
  data () {
    return {
      subjects: [{
        id: Date.now() + Math.random(),
        name: '',
        grade: 4,
        credit: 3
      }]
    }
  },
  methods: {
    addSubject () {
      this.subjects.push({
        id: Date.now() + Math.random(),
        name: '',
        grade: 4,
        credit: 3
      })
    },
    setGrade (id, name, grade, credit) {
      console.log('test')
      var subject = this.subjects.find(subject => subject.id === id)
      subject.name = name
      subject.grade = grade
      subject.credit = credit
    }
  },
  computed: {
    totalGrades () {
      var sumPoint = 0
      var sumCredit = 0
      this.subjects.forEach(subject => {
        sumPoint += parseFloat(subject.grade) * parseFloat(subject.credit)
        sumCredit += parseFloat(subject.credit)
      })
      return (sumPoint / sumCredit).toFixed(2)
    }
  }
}
</script>

<style lang="css">
.nav {
  background-color: #f1bf5e;
  height: 10vh;
}
</style>
