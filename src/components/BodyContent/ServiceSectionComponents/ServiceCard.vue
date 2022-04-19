<template>
    <div class="serviceCard kitchenCard">
        <div class="cardIconHeading">
            <ServiceIcon 
            :class="serviceTypeIcon" 
            />
        </div>
        <div class="textDescription">
            <h3> {{ serviceTypeTitle }} </h3>
            <p> {{ serviceDescription }} </p>
        </div>
        <div class="expandBtnContainer">
            <button class="expandCardDownBtn"><i class="fa-solid fa-circle-chevron-down"></i></button>
            <!-- Next should be adding expansion functionality to this button -->
            <!-- Btn will toggle an .isExpanded boolean/class. if (isExpanded){toggleExpansion()} -->
        </div>
    </div>
</template>
<script>

import ServiceIcon from './ServiceIcon.vue';

export default {
    name: 'ServiceCard',
    components: { ServiceIcon },
    props: [
        'serviceTypeTitle',
        'serviceDescription',
        'serviceTypeIcon'
    ]
}
</script>
<style scoped>
    .serviceCard {
        width: 300px;
        height: 300px;
        display: grid;
        grid-template-rows: 1fr 2fr 1fr;
        background-color: #fff;
        border-radius: 10px;
        padding: 25px 10px 10px 10px;
        margin: 0 25px;
        color: #292929;
    }
    .serviceCard p{
        font-size: 14px;
        color: #777;
    }
    .serviceCard a {
        font-size: .75rem;
        text-decoration: none;
        color: #8f1a28;
    }
    .expandBtnContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .expandCardDownBtn {
        background-color: rgba(255, 255, 255, 0%);
        border: none;
        cursor: pointer;
    }
    .expandCardDownBtn i {
        font-size: 2.5rem;
        color: #333;
    }
</style>