<template>
        <div class="navbarHeading">
            <h1>Garza Restoration</h1>
            <h2>(xxx)xxx-xxxx<i class="fa-solid fa-phone-flip"></i></h2>
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
    h2 i {
        padding-left: 10px;
       color: #fff; 
    }
</style>