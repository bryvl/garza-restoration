<template>
    <div class="hero" id="home">
        <div class="heroContainer">
            <div class="heroLeftSide">
                <h1 class="heroHeading">Your Chicagoland Remodeling and Water Restoration Experts</h1>
                <p class="heroDescription">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum consectetur libero id faucibus.
                </p>
            </div>
            <div class="heroRightSide">
                <div class="contactFormContainer">
                    <h2 class="contactFormHeading">Get in touch:</h2>
                    <form>
                        <div class="inputContainer">
                            <label for="firstName">First Name:</label>
                            <input type="text" id="firstName" name="firstName" placeholder="Your first name...">
                        </div>

                        <div class="inputContainer">
                            <label for="lastName">Last Name:</label>
                            <input type="text" id="lastName" name="lastName" placeholder="Your last name...">
                        </div>

                        <div class="inputContainer">
                            <label for="phoneNumber" id="phoneNumber">Phone:</label>
                            <input class="input-field" type="tel" placeholder="Phone number e.g. (xxx)xxx-xxxx" name="phoneNumber" required>
                        </div>

                        <div class="inputContainer">
                            <label for="email" id="email">Email:</label>
                            <input class="input-field" type="email" placeholder="Email" name="email" required>
                        </div>
                        <input class="submitBtn" type="submit" value="submit">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HeroSection'
}
</script>
<style scoped>
    .hero {
        background: #8f1a28;
    }
    .heroContainer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 600px;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding: 2.5%;
        color: #fff;
    }
    .heroHeading {
        display: flex;
        font-size: 48px;
        margin-bottom: 24px;
        color: #fff;
    }
    .heroRightSide {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90%;
        padding: 0 auto;
    }
    .contactFormContainer {
        width: 400px;
        height: 450px;
        background-color: #fff;
        border: 1px dashed #aaa;
        border-radius: 5px;
        color: #5f1a28;
    }
    .contactFormHeading {
        display: flex;
        justify-content: center;
        font-size: 2rem;
        border-bottom: 1px solid #aaa;
        height: 50px;
    }
    form {
        display: grid;
        grid-template-rows: 1fr;
        padding: 10px 0;
        /* background-color: aqua; */
        color: #444;
    }
    form .inputContainer {
        display: grid;
        grid-template-rows: 1fr 1fr;
        text-align: left;
        padding: 10px 30px;
    }
    form .inputContainer label {
        font-weight: 500;
    }
    form .inputContainer input {
        height: 25px;
    }
    form .submitBtn {
        height: 50px;
        width: 150px;
        margin: 15px auto 0 auto;
        background-color: #5f1a28;
        color: #fff;
        border: none;
        border-radius: 4px;
        font-size: 1.25rem;
        text-transform: uppercase;
    }
    form .submitBtn:hover {
        background-color: #701a28;
        transition: .15s ease;
    }
</style>