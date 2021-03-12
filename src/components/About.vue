<template>
    <section class="about" id="about">
        <div class="max-width">
            <h2 class="title">{{ $vuetify.lang.t('$vuetify.about.me') }}</h2>
            <div class="about-content">
                <div class="column left">
                    <img src="../assets/img1.jpeg" alt="">
                </div>
                <div class="column right">
                    <div class="text">
                        {{ $vuetify.lang.t('$vuetify.about.my') }}<span>{{ $vuetify.lang.t('$vuetify.about.name') }}</span>{{ $vuetify.lang.t('$vuetify.about.text') }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data: () => {
        return {
            
        }
    },
}
</script>

<style>
    #about {
        background:#d4d4d4;
        width: 100%;
        min-height: 650px;
    }

    .about-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .about .about-content .left{
        width: 45%;
    }

    .about .about-content .left img{
        height: 400px;
        width: 400px;
        object-fit: cover;
        border-radius: 6px;
    }

    .about .about-content .right{
        margin-left: 51px;
        margin-right: 10px;
    }
    .about .about-content .right .text{
        font-size: 25px;
        font-weight: 600;
        font-family: 'Dosis', sans-serif;
        text-align: center;

    }
    .about .about-content .right .text span{
        color: crimson;
    }
    .about .about-content .right p{
        text-align: justify;
    }
    .about .about-content .right a{
        display: inline-block;
        background: crimson;
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        padding: 10px 30px;
        margin-top: 20px;
        border-radius: 6px;
        border: 2px solid crimson;
        transition: all 0.3s ease;
    }
    .about .about-content .right a:hover{
        color: crimson;
        background: none;
    }
</style>