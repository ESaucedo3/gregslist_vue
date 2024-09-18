<script setup>
import { AppState } from '@/AppState.js';
import { House } from '@/models/House.js';
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed } from 'vue';

  const props = defineProps({
    houseProp: { type: House, required: true }
  })

  const account = computed(() => AppState.account)

  async function deleteHouse() {
    try {
      const wantsToDelete = await Pop.confirm('You sure you want to delete this house?');
      if (!wantsToDelete) return;

      await housesService.deleteHouse(props.houseProp.id);
    }
    catch (e){
      Pop.meow(e);
    }
  }

  async function updateHouse() {
    try {
      logger.log('Test')
    }
    catch (error){
      Pop.meow(error);
    }
  }
</script>


<template>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card h-100">
      <div class="d-flex flex-column">
        <div v-if="houseProp.creator.id === account?.id" class="text-end">
          <button @click="updateHouse()" class="special-btn" type="button"><i class="fa-solid fa-pen"></i></button>
          <button @click="deleteHouse()" class="special-btn" type="button"><i class="fa-solid fa-trash" style="color: #cf270a;"></i></button>
        </div>
        <p class="text-center">{{ houseProp.creator.name }}</p>
        <img class="creator-img" :src="houseProp.creator.picture" alt="What">
      </div>
      <img class="img-fluid" :src="houseProp.imgUrl" alt="House">
      <div class="card-body text-center d-flex flex-column">
        <h4 class="card-title">House | {{ houseProp.year }}</h4>
        <p>Bedrooms {{ houseProp.bedrooms }} | Bathrooms {{ houseProp.bathrooms}} | Levels {{ houseProp.levels }}</p>
        <p>Listed: {{ houseProp.createdAt.toLocaleDateString() }} | Last Updated: {{ houseProp.updatedAt.toLocaleDateString() }}</p>
        <p>{{ houseProp.description }}</p>
        <div class="mt-auto">
          <p>Price {{ houseProp.priceAsCurrency }}</p>
          <button type="button" class="btn btn-outline-dark rounded-pill px-3 mt-auto">Purchase</button>
        </div>
      </div>
    </div>
  </div> 
</template>


<style lang="scss" scoped>
  .creator-img {
    min-height: 3dvh;
    max-width: 50%;
    margin: 0 auto;
  }

  .special-btn {
    background: none;
    border: none;
    border-radius: 50%;

    &:hover {
      box-shadow: 0 0 10px gold;
    }
  }
</style>