<template>
    <div class="serviceSection">
        <div class="serviceSectionHeader">
            <h1>Check Out Our Services:</h1>
        </div>
        <div class="serviceSectionCardContainer">
            <ServiceCard
                v-for="card in cards"
                :key=card.id
                :serviceTypeTitle="card.title"
                :serviceDescription="card.description"
                :serviceTypeIcon="card.iconClasses"
            />
            <!-- Add v-if <div> to serviceSectionCardContainer for expanded content-->
        </div>
    </div>
</template>
<script>
import ServiceCard from './ServiceSectionComponents/ServiceCard';

export default {
    name: 'ServiceSection',
    components: { 
        ServiceCard
     },
    data () {
        return {
            cards: [
                {
                    id: 1,
                    title: "Kitchen Remodeling",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.",
                    iconClasses: "fa-solid fa-toilet"
                },
                {
                    id: 2,
                    title: "Bath Remodeling",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.",
                    iconClasses: "fa-solid fa-sink"
                },
                {
                    id: 3,
                    title: "Water Damage Restoration",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.",
                    iconClasses: "fa-solid fa-house-flood-water"
                }
            ]
        }
    }
}
</script>
<style scoped>
    .serviceSection {
        display: grid;
        height: 500px;
        padding: 50px;
        background-color: #f2eaea;
        font-size: 1.25rem;
    }
    .serviceSectionHeader {
        color: #5f1a28;
    }
    .serviceSectionCardContainer {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>