<template>
    <ul class="navbarMenu">
        <li class="navbarItem">
            <a href="#home" class="navbarLinks" id="homePage">Home</a>
            <!-- <div class="gradientBorder"></div> -->
        </li>
        <li class="navbarItem">
            <a href="#about" class="navbarLinks" id="aboutPage">About</a>
            <!-- <div class="gradientBorder"></div> -->
        </li>
        <li class="navbarItem">
            <a href="#services" class="navbarLinks" id="servicesPage">Services</a>
            <!-- <div class="gradientBorder"></div> -->
        </li>
        <li class="navbarBtn">
            <a href="#signUp" class="button" id="signUp">Sign Up</a>
            <!-- <div class="gradientBorder"></div> -->
        </li>
    </ul>
</template>
<script>
    export default {
    name: 'NavbarMenu',
    }
</script>
<style scoped>
    .navbarMenu {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin: 3% auto;
        list-style: none;
    }
    .navbarItem {
        display: inline;
    }
    .navbarMenu li a {
        justify-content: center;
        text-decoration: none;
        color: #fff;
    }
</style>