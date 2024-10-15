<template>
    <div>
    <Topbar>
        <div class="row">
            <Description class="col-lg-9"/>
            <ExpertsListing  class="col-lg-3"/>
        </div>
    </Topbar>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Description from '../components/Description.vue'
import ExpertsListing from '../components/ExpertsListing.vue';
import Topbar from '../Layout/Topbar.vue';
import axios from 'axios';
import endPoints from '../assets/api/EndPoints';
const fetchData = async () => {       
    try {
        const response = await axios.get(endPoints.vacancyListing, {
            params: {
            type: 'sale',
            page: 1,
            },
        });
             console.log(response.data);
        } catch (err) {
            console.error( err);
        }


    };
    onMounted(() => {
      fetchData();
    });
</script>

<style scoped>

</style>