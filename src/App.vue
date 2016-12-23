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
        <router-view :add-subject="addSubject" :subjects="subjects" :set-grade="setGrade" :remove-subject="removeSubject" :total-grades="totalGrades"></router-view>
      </div>
      <div class="column"></div>

    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.subjects = this.$localStorage.get('someSubject')
    console.log(this.subjects)
    // this.$router.push('/input-grade')
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
  localStorage: {
    someSubject: {
      type: Object
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
      this.$localStorage.set('someSubject', this.subjects)
    },
    setGrade (id, name, grade, credit) {
      var vm = this
      console.log('test')
      var subject = this.subjects.find(subject => subject.id === id)
      subject.name = name
      subject.grade = grade
      subject.credit = credit
      console.log(subject.name)
      this.$localStorage.set('someSubject', vm.subjects)
    },
    removeSubject (id) {
      console.log('test')
      var index = this.subjects.findIndex(subject => subject.id === id)
      this.subjects.splice(index, 1)
      this.$localStorage.set('someSubject', this.subjects)
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
      if ((sumPoint / sumCredit).toFixed(2) === 'NaN') {
        return ''
      } else {
        return (sumPoint / sumCredit).toFixed(2)
      }
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
