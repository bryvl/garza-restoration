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
        <li class="navbarItem">
            <a href="#gallery" class="navbarLinks" id="gallery">Gallery</a>
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
        margin: 2% auto;
        list-style: none;
    }

    .navbarItem:first-child {
        border-left: 1px solid #777;
    }
    .navbarItem {
        display: inline;
        border-right: 1px solid #777;
        padding: 2px;
    }
    .navbarItem:hover {
        background-color: #444;
        transition: 0.5s ease;
    }
    .navbarMenu li a {
        justify-content: center;
        text-decoration: none;
        color: #fff;
    }
</style>