<template>
    <div class="shops">
        <div class="shop-panels" uk-grid>
            <div class="uk-width-1-2@s shop-left">
                <h1 class="uk-heading-small">Shops</h1>
                <div>
                    <ul class="shop-list">
                        <li class=""><router-link :to="`/`" class="">
                            <span uk-icon="icon: chevron-right"></span>Aalst
                        </router-link></li>
                        <li class=""><router-link :to="`/`" class="">Leuven</router-link></li>
                        <li class=""><router-link :to="`/`" class="">Antwerpen Londenstraat</router-link></li>
                        <li class=""><router-link :to="`/`" class="">Antwerpen Groenplaats</router-link></li>
                        <li class=""><router-link :to="`/`" class="">Dendermonde</router-link></li>
                        <li class=""><router-link :to="`/`" class="">Gent Sint-Pietersplein</router-link></li>
                        <li class=""><router-link :to="`/`" class="">Gent Walpoortstraat</router-link></li>
                        <li class=""><router-link :to="`/`" class="">Gent St.-Pietersstation</router-link></li>
                        <li class=""><router-link :to="`/`" class="">Mechelen</router-link></li>
                        <li class=""><router-link :to="`/`" class="">Sint-Niklaas</router-link></li>
                        <li class=""><router-link :to="`/`" class="">Brugge</router-link></li>
                        <li class=""><router-link :to="`/`" class="">Haarlem</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="shop-right uk-width-1-2@s">
                <h1 class="uk-heading-small">Aalst</h1>
                <div uk-grid>
                    <div class="uk-width-1-2">
                        Nieuwstraat 4, 9300 Aalst <br>
                        0498 80 57 31 <br>
                    </div>
                    <div class="uk-width-1-2">
                        Ma - Do: 10u30 - 19u00 <br>
                        Vr - Za: 10u30 - 20u00 <br>
                        Zo: gesloten
                    </div>
                </div>
                <div id="map2">
                    <div class="box_googlemapsv2">
                        <iframe frameborder="0" scrolling="no" src="http://www.basic-italian.be/googlemaps/map/3?lang=nl" width="100%" height="100%" allowfullscreen=""></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Shops",
  components: {
    
  },

  beforeDestroy: function() {
        document.body.className = 'home-body';
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shops {
    height: 100%h;

    .shop-panels {
        margin: 3% 8% 8%;
    }
    .shop-left {
        height: 100%;
        padding-right: 250px;
        padding-left: 0;

        .uk-grid {
        margin-left: 0;
        }
    }
    .shop-right {
        height: 100%;
        padding-left: 0;
    }
    .uk-heading-small {
        font-size: 2rem;
        font-family: 'Lexend Deca', sans-serif !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #000;
    }
    .shop-list {
        list-style-type:none;
        padding: 0;
        a {
            color: black;
        }
    }
    #map2 {
        margin-top: 5%;
        height: 250px;
        .box_googlemapsv2 {
            height: 250px;
        }
    }
}

/*SCREENS*/

// Small devices (landscape phones, 576px and up)
@media (max-width: 320px) {
    .shops {
        
    }
}

@media (max-width: 440px) {
    .shops {
        
    }
}

// Medium devices (tablets, 768px and up)
@media (max-width: 640px) {
    .shops {

    }
}

@media (max-width: 750px) {
    .shops {

    }
}

// Large devices (desktops, 992px and up)
@media (max-width: 960px) {
    .shops {
        .shop-left {
            padding-right: 0;
            padding-left: 0;
        }
    }
}

@media (min-width: 961px) {
    .shops {
        
    }
}

// Extra large devices (large desktops, 1200px and up)
@media (max-width: 1200px) {
    .shops {
        .shop-left {
            padding-right: 0;
        }
    }
}
</style>
