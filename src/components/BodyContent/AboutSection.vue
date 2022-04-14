<template>
    <div class="aboutSection">
        <h1 class="aboutUsHeading">About Us</h1>
        <p class="aboutUsDescription">
            Garzas Restoration is your remodeling expert and water restoration specialist in Cook County, IL,
             and surrounding areas. With over 20 years of experience in damage restoration and home remodeling, 
             you can rest assured knowing you’re in good hands. We started our company in 2012 and have been providing quality service ever since. Here at Garza Restoration, we come from four generations of construction, masonry, plastering , carpentry and the list goes on. We  offer restoration and remodeling services throughout the Chicagoland area and guarantee our full attention to quality. 
             Our crew will not rest until our customers are satisfied because we're the experts!
        </p>
    </div>
</template>
<script>
export default {
    name: "AboutSection"
}
</script>
<style scoped>
.aboutSection {
    display: grid;
    grid-template-rows: 1fr 3fr;
    height: 500px;
    padding: 50px;
    background-color: #fff;
    /* background-image: url('/Users/bryanvalencia/Documents/shepherd-pie/garza-restoration/src/assets/images/stockKitchenPhoto.jpeg'); */
}
.aboutUsHeading {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
    color: #292929;
}
.aboutUsDescription {
    margin: auto;
    text-align: center;
    color: #777;
    font-size: 1.15rem;
}

</style>