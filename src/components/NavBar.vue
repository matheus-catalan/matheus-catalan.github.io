<template>
  <nav class="navbar" :class="{sticky: scrollPosition > 100}">
        <div class="max-width">
            <div class="logo"><a href="#">Portfo<span>lio.</span></a></div>
            <ul class="menu">
                <li><a href="#">{{ $vuetify.lang.t('$vuetify.navbar.home') }}</a></li>
                <li><a href="#">{{ $vuetify.lang.t('$vuetify.navbar.about') }}</a></li>
                <li><a href="#">{{ $vuetify.lang.t('$vuetify.navbar.carrer') }}</a></li>
                <li><a href="#">{{ $vuetify.lang.t('$vuetify.navbar.skills') }}</a></li>
                <li><a href="#">{{ $vuetify.lang.t('$vuetify.navbar.contact') }}</a></li>
            </ul>
            <div class="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data: () => {
        return {
            sticky: null,
            scrollPosition: null
        }
    },
    mounted () {
        window.addEventListener('scroll', this.updateScroll);
    },
     methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        }
    },
}
</script>

<style >
    .navbar {
        position: fixed;
        width: 100%;
        padding: 30px 0;
        font-family: "Dosis", sans-serif;
        transition: all 0.3s ease;
        z-index: 9999;
    }

    .navbar.sticky {
        padding: 15px 0;
        background: #03071e;
    }

    .navbar .max-width {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .navbar .logo a {
        color: #fff;
        font-size: 35px;
        font-weight: 600;
    }

    .navbar .logo a span {
        color:  rgb(157, 2, 8);
    }

    .navbar.sticky .logo a span {
        color:  rgb(157, 2, 8);
        transition: all 0.3s ease;
    }

    .navbar .menu li {
        list-style: none;
        display: inline-block;
    }

    .navbar .menu li a {
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        margin-left: 25px;
        transition: color 0.3s ease;
    }

    .navbar .menu li a:hover {
        color:  rgb(157, 2, 8);
    }

    .menu-btn{
        color: #fff;
        font-size: 23px;
        cursor: pointer;
        display: none;
    }

</style>