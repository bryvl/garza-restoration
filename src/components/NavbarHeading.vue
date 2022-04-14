<template>
        <div class="navbarHeading">
            <div class="companyBranding">
                <h1>Garza Restoration</h1>
                <h4>We're the experts</h4>
            </div>
            <div class="callToAction">
                <h2>Call Now: <i class="fa-solid fa-phone"></i>(708) 955-1775</h2>
            </div>
        </div>
</template>
<script>
export default {
    name: "NavbarHeading"
}
</script>
<style scoped>
    .navbarHeading {
        display: grid;
        grid-template-columns: 2fr 1fr;
        margin: 0 auto;
        border-bottom: 1px solid #999;
    }
    .companyBranding {
        display: grid;
        grid-template-rows: 2fr 1fr;
        /* color: #5f1a28; */
    }
    .companyBranding h4 {
        text-align: center;
        color: #aaa;
    }
    .callToAction {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
    }
    .callToAction h2 {
        color: #5f1a28;
    }
    h2 i {
        padding-right: 10px; 
    }
</style>