<script setup>
import { housesService } from '@/services/HousesService.js';
import Pop from '@/utils/Pop.js';
import { ref } from 'vue';

  const currentYear = new Date().getFullYear();

  const editableHouseData = ref({
    year: currentYear,
    bedrooms: 0,
    bathrooms: 0,
    levels: 0,
    imgUrl: '',
    price: 0,
    description: ''
  })

  async function createHouse() {
    try {
      const houseData = editableHouseData.value;
      await housesService.createHouse(houseData);
      editableHouseData.value = {
        year: currentYear,
        bedrooms: 0,
        bathrooms: 0,
        levels: 0,
        imgUrl: '',
        price: 0,
        description: ''
      }
    }
    catch (e){
      Pop.meow(e);
    }
  }
</script>


<template>
  <section class="container">
      <h4 class="text-center">Want to list a house?</h4>
      <form @submit.prevent="createHouse()">
        <div class="row">
          <div class="col-md-6">
            <label class="d-block form-label" for="year">Year</label>
            <input v-model="editableHouseData.year" class="form-control" type="number" name="year" id="year" required maxlength="4" min="1900" max="2025" placeholder="2019" />
          </div>

          <div class="col-md-6 mb-3">
            <label class="d-block form-label" for="bedrooms">Bedrooms</label>
            <input v-model="editableHouseData.bedrooms" class="form-control" type="number" name="bedrooms" id="bedrooms" min="0" max="9" placeholder="4" required />
          </div>

          <div class="col-md-6 mb-3">
            <label class="d-block form-label" for="bathrooms">Bathrooms</label>
            <input v-model="editableHouseData.bathrooms" class="form-control" type="number" name="bathrooms" id="bathrooms" min="0" max="9" placeholder="2" required />
          </div>

          <div class="col-md-6 mb-3">
            <label class="d-block form-label" for="levels">Levels</label>
            <input v-model="editableHouseData.levels" class="form-control" type="number" name="levels" id="levels" placeholder="2 Levels" required />
          </div>

          <div class="col-6 mb-3">
            <label class="d-block form-label" for="imgUrl">House Image</label>
            <input v-model="editableHouseData.imgUrl" class="form-control" id="imgUrl" name="imgUrl" type="url" required maxlength="2000" placeholder="House Image..." />
          </div>

          <div class="col-md-6 mb-3">
            <label class="d-block form-label" for="price">Price</label>
            <input v-model="editableHouseData.price" class="form-control" type="number" name="price" id="price" placeholder="$110,000" required />
          </div>

          <div class="col-12 mb-3">
            <label class="d-block form-label" for="description">House Description</label>
            <textarea v-model="editableHouseData.description" class="form-control" id="description" name="description" maxlength="5000" placeholder="House Description" rows="5"></textarea>
          </div>
        </div>
        <div class="mb-3 text-center">
          <button class="btn btn-outline-dark rounded-pill px-3">List</button>
        </div>
      </form>
  </section>
</template>


<style lang="scss" scoped>

</style>