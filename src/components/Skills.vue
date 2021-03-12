<template>
  <section id="skills">
        <div class="max-width">
            <h2 class="title">My skills</h2>
            <div class="skills-content">
                <div class="skills-items">
                    <v-icon x-large>
                        mdi-aws
                    </v-icon>
                </div>
                <div class="skills-items">
                    <v-icon x-large>
                        mdi-aws
                    </v-icon>
                </div>
                <div class="skills-items">
                    <v-icon x-large>
                        mdi-aws
                    </v-icon>
                </div>
                <div class="skills-items">
                    <v-icon x-large>
                        mdi-aws
                    </v-icon>
                </div>
                <div class="skills-items">
                    <v-icon x-large>
                        mdi-aws
                    </v-icon>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
    #skills {
        min-height: 650px;
        background:#d4d4d4;
        width: 100%;
        min-height: 650px;
    }

    .skills-content {
        /* position: relative; */
        width: 100%;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .skills-items {
        position: absolute;
        /* left: calc(50% - 25px); */
        /* top: calc(50% - 25px); */
        list-style: none;
        transition: all ease 0.8s;
        background: red;
        width: 50%;
    }


    .skills-items:hover i{
        color: black;
    }

    .skills-items:nth-child(1) {
        transform: translateX(200px);
    }

    .skills-items:nth-child(2) {
        transform: rotate(72deg) translateX(200px);
    }

    .skills-items:nth-child(3) {
        transform: rotate(144deg) translateX(200px);
    }

    .skills-items:nth-child(4) {
        transform: rotate(216deg) translateX(200px);
    }

    .skills-items:nth-child(5) {
        transform: rotate(288deg) translateX(200px);
    }

    .skills-items:nth-child(6) {
        transform: rotate(327deg) translateX(200px);
    }

    .skills-items:nth-child(7) {
        transform: rotate(432deg) translateX(200px);
    }

    .skills-items:nth-child(8) {
        transform: rotate(536deg) translateX(200px);
    }

    .skills-items:nth-child(9) {
        transform: rotate(576deg) translateX(200px);
    }

    .skills-items:nth-child(10) {
        transform: rotate(648deg) translateX(200px);
    }
</style>