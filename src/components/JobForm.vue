<script setup>
  import { jobsService } from '@/services/JobsService.js';
import Pop from '@/utils/Pop.js';
import { ref } from 'vue';

  const editableJobData = ref({
    company: '',
    jobTitle: '',
    hours: 0,
    rate: 0,
    description: '',
  })

  async function createJob() {
    try {
      const jobData = editableJobData.value;
      await jobsService.createJob(jobData);
      editableJobData.value = {
        company: '',
        jobTitle: '',
        hours: 0,
        rate: 0,
        description: '',
      }
    }
    catch (e){
      Pop.meow(e);
    }
  }
</script>


<template>
  <form @submit.prevent="createJob()">
    <section class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label" for="company">Company Name</label>
        <input v-model="editableJobData.company" class="form-control" id="company" name="company" required
          maxlength="100" placeholder="Company Name">
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label" for="jobTitle">Job Title</label>
        <input v-model="editableJobData.jobTitle" class="form-control" id="jobTitle" name="jobTitle" required
          maxlength="70" placeholder="Job">
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label" for="hour">Hour</label>
        <input v-model="editableJobData.hours" class="form-control" id="hour" name="hour" type="number" required>
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label" for="rate">Rate</label>
        <input v-model="editableJobData.rate" class="form-control" id="rate" name="rate" type="number" required>
      </div>
      <div class="col-12 mb-3">
        <label class="form-label" for="description">Job Description</label>
        <textarea v-model="editableJobData.description" class="form-control" id="description" name="description" rows="7" placeholder="About the job..." maxlength="130"></textarea>
      </div>
    </section>
    <div class="mb-3 text-center">
      <button class="btn btn-outline-dark rounded-pill">List Job</button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
  textarea {
    resize: none;
  }
</style>