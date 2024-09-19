<script setup>
  import { AppState } from '@/AppState.js';
import JobForm from '@/components/JobForm.vue';
import JobListing from '@/components/JobListing.vue';
import { jobsService } from '@/services/JobsService.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

  const jobs = computed(() => AppState.jobs);
  const account = computed(() => AppState.account);

  onMounted(() => {
    getJobs();
  })

  async function getJobs() {
    try {
      await jobsService.getJobs();
    }
    catch (e){
      Pop.meow(e);
    }
  }
</script>


<template>
  <section class="container-fluid">
    <div v-if="account" class="text-center mt-2">
      <button class="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#jobForm">
        List A Job
      </button>
    </div>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="jobForm">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Job Listing</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <JobForm />
      </div>
    </div>

    <!-- NOTE All Jobs -->
    <div class="row justify-content-center gy-2 p-3">
      <JobListing v-for="job in jobs" :key="job.id" :job-prop="job" />
    </div>
  </section>
</template>


<style lang="scss" scoped>
  .offcanvas {
    --bs-offcanvas-width: 41rem;
  }
</style>