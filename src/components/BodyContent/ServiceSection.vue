<template>
    <div class="serviceSection">
        <div class="serviceSectionHeader">
            <h1>Check Out Our Services:</h1>
        </div>
        <div class="serviceSectionCardContainer">
            <div class="serviceCard kitchenCard">
                <div class="cardIconHeading">
                    <i class="fa-solid fa-sink"></i>
                </div>
                <h3>Kitchen Remodeling</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.
                </p>
                <a href="#">LEARN MORE >>></a>
            </div>
            <div class="serviceCard bathCard">
                <div class="cardIconHeading">
                    <i class="fa-solid fa-toilet"></i>
                </div>
                <h3>Bathroom Remodeling</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. 
                </p>
                <a href="#">LEARN MORE >>></a>
            </div>
            <div class="serviceCard waterRestorationCard">
                <div class="cardIconHeading">
                    <i class="fa-solid fa-water"></i>
                </div>
                <h3>Water Damage Restoration</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. 
                </p>
                <a href="#">LEARN MORE >>></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ServiceSection'
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
    .serviceSectionCardContainer {
        width: 100%;
        /* display: grid;
        grid-template-columns: 1fr 1fr 1fr; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .serviceCard {
        width: 300px;
        height: 300px;
        background-color: #fff;
        border-radius: 10px;
        padding: 25px 10px 10px 10px;
        margin: 0 25px;
        color: #393939;
    }
    .serviceCard p{
        font-size: 14px;
    }
    .serviceCard a {
        font-size: .75rem;
        text-decoration: none;
        color: #8f1a28;
    }
    .cardIconHeading i {
        font-size: 4rem;
        color: #5f1a28;
    }
</style>