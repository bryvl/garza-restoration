<template>
<div class="footerContainer">
        <div class="footerLinks">
            <div class="footerLinkWrapper">
                <div class="footerLinkItems">
                    <h2>About Us</h2>
                    <a href="#">How we do it</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Terms of Service</a>
                </div>
                <div class="footerLinkItems">
                    <h2>Contact Us</h2>
                    <a href="#">Contact</a>
                    <a href="#">Support</a>
                    <a href="#">Destination</a>
                </div>
            </div>
            <div class="footerLinkWrapper">
                <div class="footerLinkItems">
                    <h2>Social Media</h2>
                    <a href="/">Facebook</a>
                    <a href="/">Instagram</a>
                    <a href="/">Google+</a>
                    <a href="/">Yelp</a>
                </div>
            </div>
        </div>
        <section class="socialMedia">
            <div class="socialMediaWrap">
                <div class="footerLogo">
                    <a href="/" id="footerLogo">Garza Restoration</a>
                </div>
                <p class="websiteRights">©Garza Restoration 2022. All rights reserved</p>
                <div class="socialIcons">
                    <a href="/" class="socialIconLink" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="/" class="socialIconLink" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="/" class="socialIconLink" target="_blank"><i class="fa-brands fa-google-plus-square"></i></a>
                    <a href="/" class="socialIconLink" target="_blank"><i class="fa-brands fa-yelp"></i></a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'FooterSection'
}
</script>

<style scoped>
    .footerContainer {
    background-color: #191919;
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#footerLogo {
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
}
.footerLinks {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
}
.footerLinkWrapper {
    display: flex;
}
.footerLinkItems {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
}
.footerLinkItems h2 {
    margin-bottom: 16px;
    color: #fff;
}
.footerLinkItems a {
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
}
.footerLinkItems a:hover {
    color: #aaa;
    transition: 0.3s ease-out;
}
.socialIconLink {
    color: #fff;
    font-size: 24px;
}
.socialMedia {
    max-width: 1000px;
    width: 100%;
}
.socialMediaWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;
}
.socialIcons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
}
.websiteRights {
    color: #fff;
}
</style>