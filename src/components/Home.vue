<template>
  <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">{{ $vuetify.lang.t('$vuetify.home.hello') }}</div>
                <div class="text-2">Matheus Catalan</div>
                <div class="text-3">{{ $vuetify.lang.t('$vuetify.home.and') }}<span> {{ $vuetify.lang.t('$vuetify.home.developer') }}</span></div>
                <div class="container-icon-social">
                    <a href="" class="icon-social linkedin">
                        <v-icon >
                        mdi-linkedin
                        </v-icon>
                    </a>
                    <a href="" class="icon-social github">
                        <v-icon >
                        mdi-github
                        </v-icon>
                    </a>
                    <a href="" class="icon-social telegram">
                        <v-icon >
                        mdi-telegram
                        </v-icon>
                    </a>
                    <a href="" class="icon-social instagram">
                        <v-icon >
                        mdi-instagram
                        </v-icon>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {}
</script>

<style >
   .home{
        display: flex;
        background: #03071e;
        height: 100vh;
        width: 100%;
        color: #fff;
        min-height: 650px;
        background-size: cover;
        background-attachment: fixed;
        font-family: 'Dosis', sans-serif;
    }

    .home .max-width{
        margin: auto 0 auto 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .home .home-content .text-1{
        font-size: 27px;
    }

    .home .home-content .text-2{
        font-size: 75px;
        font-weight: 600;
        margin-left: -3px;
    }

    .home .home-content .text-3{
        font-size: 40px;
        margin: 5px 0;
    }

    .home .home-content .text-3 span{
        color: rgb(157, 2, 8);
        font-weight: 500;
    }

    .home .home-content .container-icon-social {
        display: flex;
        align-items: center;
        margin-top: 20px;
    }

    .home .home-content .icon-social {
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }

    .home .home-content a.icon-social:nth-child(n + 2) {
        margin: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .home .home-content .icon-social:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-left:5px;
        margin-right: 15px;

    }

    .home .home-content .icon-social i {
        color: #fff;
        transition: color 0.3s ease;
        cursor: pointer;
        font-size: 32px;
    }

    .home .home-content .icon-social i:hover {
        color: rgb(157, 2, 8);

    }


</style>