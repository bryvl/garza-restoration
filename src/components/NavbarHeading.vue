<template>
        <div class="navbarHeading">
            <div class="companyBranding">
                <h1>Garza Restoration</h1>
                <h4>We're the experts</h4>
            </div>
            <h2>(708) 955-1775<i class="fa-solid fa-phone-flip"></i></h2>
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
    .companyBranding h4 {
        text-align: center;
        color: #bbb;
    }
    h2 i {
        padding-left: 10px;
       color: #fff; 
    }
</style>