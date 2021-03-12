<template>
  <section class="carrer" id="carrer">
        <div class="max-width">
            <h2 class="title">{{ $vuetify.lang.t('$vuetify.navbar.carrer') }}</h2>
            <div class="carrer-content">
                <div id="progress-bar-container">
                    <ul :class="stepCurrent">
                        <li class="step step01" v-bind:class="{ active: step1 }" @click="handleStep(1)">
                            <div class="step-inner">
                                <v-icon >
                                    mdi-memory
                                </v-icon>
                            </div>
                        </li>
                        <li class="step step02" v-bind:class="{ active: step2 }" @click="handleStep(2)">
                            <div class="step-inner">
                                <v-icon >
                                    mdi-memory
                                </v-icon>
                            </div>
                        </li>
                        <li class="step step03" v-bind:class="{ active: step3 }" @click="handleStep(3)">
                            <div class="step-inner">
                                <v-icon >
                                    mdi-server-network
                                </v-icon>
                            </div>
                        </li>
                        <li class="step step04" v-bind:class="{ active: step4 }" @click="handleStep(4)">
                            <div class="step-inner">
                                <v-icon >
                                    mdi-code-not-equal-variant
                                </v-icon>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="progress-content-section">
                    <div class="section-content step01" v-bind:class="{ active: stepContent1 }">
                        <h2>Officie Boy</h2>
                        <p> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                    <div class="section-content step02" v-bind:class="{ active: stepContent2 }">
                        <h2>Técnico de Suporte TI</h2>
                        <p> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                    <div class="section-content step03" v-bind:class="{ active: stepContent3 }">
                        <h2>Administrador de rede</h2>
                        <p> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                    <div class="section-content step04" v-bind:class="{ active: stepContent4 }">
                        <h2>Desenvolvedor Full Stack</h2>
                        <p> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
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
            stepCurrent: 'step1',
            step1: true,
            step2: false,
            step3: false,
            step4: false,
            stepContent1: true,
            stepContent2: false,
            stepContent3: false,
            stepContent4: false,
        }
    },
    methods: {
        handleStep (step) {
            if (step === 1) {
                this.step1 = true
                this.step2 = false
                this.step3 = false
                this.step4 = false
                this.stepContent1 = true
                this.stepContent2 = false
                this.stepContent3 = false
                this.stepContent4 = false
                this.stepCurrent = 'step1'
            } else if(step === 2){
                this.step1 = true
                this.step2 = true
                this.step3 = false
                this.step4 = false
                this.stepContent1 = false
                this.stepContent2 = true
                this.stepContent3 = false
                this.stepContent4 = false
                this.stepCurrent = 'step2'
            } else if(step === 3) {
                this.step1 = true
                this.step2 = true
                this.step3 = true
                this.step4 = false
                this.stepContent1 = false
                this.stepContent2 = false
                this.stepContent3 = true
                this.stepContent4 = false
                this.stepCurrent = 'step3'
            } else if(step === 4) {
                this.step1 = true
                this.step2 = true
                this.step3 = true
                this.step4 = true
                this.stepContent1 = false
                this.stepContent2 = false
                this.stepContent3 = false
                this.stepContent4 = true
                this.stepCurrent = 'step4'
            }
        }
    }
}

</script>

<style>
    #carrer {
        width: 100%;
        min-height: 650px;
    }

    .carrer-content {
        width: 100%;
        padding: 0;
        margin: auto;
        font-family: 'Dosis', sans-serif;

    }

    #progress-bar-container {
        position:relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height:100px;
        margin-top: 50px;
    }

    #progress-bar-container ul {
        padding: 0;
        margin: 0;
        z-index: 999;
        position: absolute;
        width: 100%;
        margin-top: -40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        background: #eee;
        height: 6px;
        border-radius: 50px;
        transition: all ease 0.9s;

    }

    #progress-bar-container ul.step1 {
        background: linear-gradient(to right, rgb(170, 34, 39) 0%,#eee 0%);
    }

    #progress-bar-container ul.step2 {
        background: linear-gradient(to right, rgb(170, 34, 39) 36%,#eee 0%);
    }

    #progress-bar-container ul.step3 {
        background: linear-gradient(to right, rgb(170, 34, 39) 68%,#eee 0%);
    }

    #progress-bar-container ul.step4 {
        background: linear-gradient(to right, rgb(170, 34, 39) 100%,#eee 0%);
    }

    #progress-bar-container ul li{
        list-style: none;
        background: #eee;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 2px rgb(170, 34, 39);
        cursor: pointer;

    }

    #progress-bar-container ul li i{
        color: rgb(170, 34, 39);
        
    }

    #progress-bar-container ul li:hover{
        background: rgb(157, 2, 8); 
        border: solid 2px rgb(157, 2, 8);
        box-shadow:0 2px 13px -1px rgba(0,0,0,0.3);
        transition:all ease 0.2s;

    }

    #progress-bar-container ul li:hover i{
        color: #fff;
    }

    #progress-bar-container ul li.active{
        background: rgb(157, 2, 8); 
        border: solid 2px rgb(157, 2, 8);

    }

    #progress-bar-container ul li.active i{
        color: #fff;
    }

    #progress-bar-container ul li.active:hover{
        background: rgb(157, 2, 8); 
        border: solid 2px rgb(157, 2, 8);
        box-shadow: none;

    }

    #progress-bar-container ul li.active:hover i{
        color: #fff;
    }

    #progress-content-section {
        width: 90%;
        margin: auto;
    }

    #progress-content-section .section-content {
        padding: 30px 40px;
        text-align: center;
    }

    #progress-content-section .section-content h2 {
        font-size: 30px;
        text-transform: uppercase;
        color: rgb(157, 2, 8);
        letter-spacing: 1px;
    }

    #progress-content-section .section-content p {
        font-size: 20px;
        line-height:1.8em;
        color:#000;
    }

    #progress-content-section .section-content {
        display:none;
        animation: FadeInUp 700ms ease 1;
        animation-fill-mode:forwards;
        transform:translateY(15px);
        opacity:0;
    }

    #progress-content-section .section-content.active {
        display: block;
        opacity: 1;
    }

    @keyframes FadeInUp {
        0% {
            transform:translateY(15px);
            opacity:0;
        }
        
        100% {
            transform:translateY(0px);
            opacity:1;
        }
    }
    

    



</style>