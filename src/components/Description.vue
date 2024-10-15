<template>
  <div>
                    <Tabs />
                  
                 <div class="row g-2 mt-2">
                    <div class="col-md-7">
                        <select name="location_dropdown" class="form-select" id="locationDropdown">
                            <option value="">Kuala Lumpur</option>
                        </select>
                    </div>
                    <div class="col-md-5">
                        <input type="text" placeholder="Type Search for Property Search" class="form-select">
                    </div>
                
                    <div class="col-md-7">
                        <div class="d-flex gap-1">

                            <select name="location_dropdown" class="form-select" id="locationDropdown">
                                <option value="">My Favourites</option>
                            </select>
                            <select name="location_dropdown" class="form-select" id="locationDropdown">
                                <option value="">Categories</option>
                            </select>
                            <select name="location_dropdown" class="form-select" id="locationDropdown">
                                <option value="">Nearby properties</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div>
                            <label for="customRange3" class="form-label mb-0">Distance</label>
                            <input type="range" class="slide-range form-range" min="0" max="5" step="0.5" id="customRange3">
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-between properties-bar">
                    <div class="text-white f-12 ms-3">
                        144 Properties listing shown
                    </div>
                    <div class="d-flex align-items-center gap-4">
                        <div class="">
                            <select name="sort" id="sort" class="sort-dropdown form-select border-0">
                                <option value="">Sort By</option>
                            </select>
                        </div>
                        <div class="gap-2">
                            <img :src="menuIcon" alt="" class="img-fluid">
                            <img :src="layoutIcon" alt="" class="mx-3 img-fluid">
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">

                    <div class="col-md-6">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img :src="carouselImg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img :src="carouselImg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img :src="carouselImg" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                </div>
                <div class="col-md-6">
                    <h3 class="f-24 fw-bold">
                        RM 300,000
                    </h3>
                    <span class="text-secondary">Unfurnished | Freehold</span>
                    <h4 class="fw-bold">Mont Bleu Residences, Sunway City Ipoh...</h4>
                    <span class="">Instead of a traditional dropdown for residency statu...</span>
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <p class="mb-0">Bukit Jalil, Kuala Lumpur ...</p>
                        <span class="text-secondary">
                            <i class="fas fa-map-marker-alt location-icon"></i>
                            Far from - 5 KM
                        </span>
                     </div>
                     <div class="d-flex justify-content-between align-items-center mt-2">
                         <span class="text-primary">
                            <img :src="bedIcon" alt="">
                            N/A
                        </span>
                        <span class="text-primary">
                            <img :src="bathIcon" alt="">
                           2
                        </span>
                        <span class="text-primary">
                            <img :src="launchIcon" alt="">
                            2
                        </span>
                        <span class="text-primary">
                            <img :src="homeIcon" alt="">
                             2200 sqft
                        </span>
                     </div>

                     <div class="user-info mt-4">
                        <div class="d-flex align-items-end gap-3">

                        <img :src="carouselImg" class="rounded-circle profile-img" alt="...">
                        <span>
                            Jim Petter
                        </span>
                        </div>
                     </div>
                    </div>
                </div>
            </div>
</template>

<script setup>
import menuIcon from '../assets/Images/BusinessServices/Group 6520.png';
import layoutIcon from '../assets/Images/BusinessServices/Group 3369.png';
import carouselImg from '../assets/Images/BusinessServices/image 31.png';
import bedIcon from '../assets/Images/BusinessServices/Group 6339.png';
import bathIcon from '../assets/Images/BusinessServices/Group 6345.png';
import launchIcon from '../assets/Images/BusinessServices/Group 6345.png';
import homeIcon from '../assets/Images/BusinessServices/Group 6346.png';
import Tabs from './Tabs.vue';
</script>

<style lang="scss" scoped>

</style>