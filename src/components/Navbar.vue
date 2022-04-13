<template>
    <div class="navbar">
        <TempLogo></TempLogo>
        Hello I'm a navbar!
    </div>
</template>
<script>
    import TempLogo from "./TempLogo";
    export default {
    name: 'NavBar',
    // Need to export any imported components under a Components object
    components: {
        TempLogo
    },
    }
</script>
<style scoped>
    .navbar{
        width: 100%;
        height: 100px;
        background-color: #333;
        border-bottom: 2px solid #555;
        color: white;
    }
</style>