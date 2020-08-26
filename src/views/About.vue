<template>
    <div class="about">
        <div class="about-panels" uk-grid>
            <h1 class="uk-heading-small uk-width-1-1">About</h1>
            <div class="uk-width-1-2@s about-left">
                <div>
                    Basic Italian throughout Flanders opts for the purity of tasty pasta.
                    In five steps you walk all the way through the pasta menu of our pasta takeaway restaurant.
                    Penne pasta in a white minimalist box - small, medium or large. You choose a sauce and design your pasta with our
                    rich product range of fresh ingredients. FRESH-HEALTHY-100% PURE. <br>
                    <br>
                    Hundreds of combinations are possible. Basic Italian is a CHOOSE&amp;MIX kitchen.
                    You step into a white minimalist room with an open kitchen where you can watch your pasta being made.
                    Everything that surrounds you breathes the purity of a tasty pasta box.
                    In addition to pasta, you can also choose from pure salads, pasta salads, healthy drinks, paninis, fruit cups in the summer, or ... sweet treats.
                    Basic Italian actually stands for a world of delicious &amp; fresh Italian simplicity in one pasta box that you can take away or eat on the spot. 
                    FRESH&amp;NATURAL. 
                </div>
            </div>
            <div class="about-right uk-width-1-2@s">
                <div>
                    "My passion for pure Italian cuisine, trips we made, the outdoors,
                    cooks, preparing tasty pasta for and with the children, were the building blocks for the creation of Basic Italian. <br>
                    <br>
                    LA DOLCE VITA. <br>
                    <br>
                    In 2003 there was a start with a first “pasta stand”. Choice of “4” sauces, on top of your penne pasta.
                    It further made me dream about a trendy, dynamic, healthy PASTA TAKE AWAY concept with an open character. <br>
                    <br>
                    In 2005, looking for a permanent location, it then became hometown, Aalst. Basic Italian was born.
                    Basic Italian breathes my passion for pasta, love for pure products and new trends: A healthy and dynamic “Pasta Take Away”."<br>
                    <br>  
                    B-PURE by H.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "About",
  components: {
    
  },

  beforeDestroy: function() {
        document.body.className = 'home-body';
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about {
    height: 100%h;

    .about-panels {
        margin: 3% 8% 8%;
    }
    .about-left {
        height: 100%;
        padding-right: 50px;
        margin-top: 20px;

        .uk-grid {
        margin-left: 0;
        }
    }
    .about-right {
        height: 100%;
        margin-top: 20px;
    }
    .uk-heading-small {
        font-size: 2rem;
        font-family: 'Lexend Deca', sans-serif !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #000;
    }
}
</style>
