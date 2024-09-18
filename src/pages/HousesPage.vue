<script setup>
import { AppState } from '@/AppState.js';
import HouseCard from '@/components/HouseCard.vue';
import HouseForm from '@/components/HouseForm.vue';
import { housesService } from '@/services/HousesService.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

  const houses = computed(() => AppState.houses);
  const account = computed(() => AppState.account);

  onMounted(() => {
    getHouses();
  })

  async function getHouses() {
    try {
      await housesService.getHouses();
    }
    catch (error){
      Pop.meow(error);
    }
  }
</script>


<template>
  <section class="container-fluid">
    <div v-if="account" class="text-center mt-2">
      <button class="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#houseForm">
        List A House
      </button>
    </div>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="houseForm">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">House Listing</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <HouseForm />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-10">
        <div class="row gy-2 p-2">
          <HouseCard v-for="house in houses" :key="house.id" :houseProp="house" />
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>

</style>