<template>
    <div>
        <div class="container">
            <div class="d-flex align-items-center gap-4 my-4">
                <img :src="hamburger" alt="Hamburger Image" class="img-fluid">
                <img :src="logo" alt="" class="img-fluid">
                     <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Library</li>
                        </ol>
                        </nav>
             </div>

            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import hamburger from '../assets/Images/BusinessServices/Group 2974.png';
import logo from '../assets/Images/BusinessServices/Group 183.png';
</script>

<style lang="scss" scoped>

</style>
