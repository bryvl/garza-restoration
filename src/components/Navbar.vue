<template>
    <div class="navbar">
        <div class="navbarLeftSide">
            <TempLogo></TempLogo>
        </div>
        <div class="navbarRightside">
            <NavbarHeading></NavbarHeading>
            <NavbarMenu></NavbarMenu>
        </div>
    </div>
</template>
<script>
    import TempLogo from "./TempLogo";
    import NavbarHeading from "./NavbarHeading"
    import NavbarMenu from "./NavbarMenu";

    export default {
    name: 'NavBar',
    // Need to export any imported components under a Components object
    components: {
        TempLogo,
        NavbarMenu,
        NavbarHeading 
    },
    }
</script>
<style scoped>
    .navbar{
        display: grid;
        grid-template-columns: 1fr 3fr;
        justify-content: center;
        width: 100%;
        height: 150px;
        padding-top: 10px;
        position: sticky;
        top: 0;
        z-index: 999;
        background-color: #fff;
        border-bottom: 1px solid #999;
        color: #333;
    }
    .navbarRightSide {
        display: grid;
        grid-template-rows: 2fr 1fr;
    }
</style>