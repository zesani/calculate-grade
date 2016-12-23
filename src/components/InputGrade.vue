<template lang="html">
  <div class="">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <div class="content">
          <p class="title">กรอกเกรด</p>
          <p class="title">Grade: {{totalGrades}}</p>
          <div class="content" v-for="(subject, index) in subjects">
            <input-form :subject="subject" :index="index" :set-grade="setGrade" :remove-subject="removeSubject"></input-form>
          </div>
          <a class="button is-primary" @click="addSubject">
            Add
          </a>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import InputForm from './InputForm'
export default {
  props: ['addSubject', 'subjects', 'setGrade', 'totalGrades', 'removeSubject'],
  components: {
    InputForm
  }
}
</script>

<style lang="css">
</style>
