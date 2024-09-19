<script setup>
  import { Job } from '@/models/Job.js';

  const props = defineProps({
    jobProp: { type: Job, required: true }
  })
</script>


<template>
  <div class="col-md-6 col-lg-4">
    <div class="card h-100 w-75 mx-auto text-center">
      <div class="d-flex justify-content-between p-1 special-actions">
        <p class="selectable"><i class="fa-solid fa-pen"></i></p>
        <p class="selectable"><i class="fa-solid fa-trash" style="color: #cf270a;"></i></p>
      </div>
      <div class="card-body d-flex flex-column">
        <h4 class="card-title">{{ jobProp.company }}</h4>
        <h5 class="card-subtitle">{{ jobProp.jobTitle }}</h5>
        <p class="card-text">Rate: {{ jobProp.rate }} | Hours: {{ jobProp.hours }}</p>
        <p class="card-text">{{ jobProp.description }}</p>
        <div class="d-flex justify-content-between mt-auto">
          <p class="card-text"><small class="text-body-secondary">Created: {{ jobProp.createdAt.toLocaleDateString() }}</small></p>
          <p class="card-text"><small class="text-body-secondary">Created: {{ jobProp.updatedAt.toLocaleDateString() }}</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .special-actions {
    transition: all .4s;

  }
</style>