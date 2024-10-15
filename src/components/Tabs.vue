<template>
    <div class="stepper d-flex justify-content-around">
        <div class="cursor-pointer d-flex align-items-center gap-2"
                    v-for="tab in tabs" :key="tab.key"
                     :class="activeTab==tab.key?'active-tab':'non-active'"
                     @click="activeTab=tab.key">
                        <img :src="tab.icon" alt="" class="img-fluid tab-img">
                        <p class="mb-0 tab-label">
                            {{tab.label}}
                        </p>
                    </div>
    </div>
</template>

<script setup>

import propertyIcon from '../assets/Images/BusinessServices/Group 6517.png'
import buySellIcon from '../assets/Images/BusinessServices/Group 2781.png'
import businessServiceIcon from '../assets/Images/BusinessServices/Group 2778.png'
import findAgentsIcon from '../assets/Images/BusinessServices/Group 2780.png'
import {reactive, ref} from 'vue';
let activeTab = ref('propertyListing')
const tabs = reactive([
    {key:'propertyListing', icon:propertyIcon,label: 'Property Listing', height: 11, width: 12},
    {key:'businnessServices', icon:businessServiceIcon,label: 'Business Services', height: 12, width: 8},
    {key:'buySell', icon:buySellIcon,label: 'Buy-Sell-Wanted', height: 10, width: 12},
    {key:'findAgents', icon:findAgentsIcon,label: 'Find Agents', height: 12, width: 8},

]);
</script>

<style lang="scss" scoped>

</style>