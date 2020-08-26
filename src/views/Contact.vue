<template>
    <div class="contact">
        <div class="contact-panels" uk-grid>
            <h1 class="uk-heading-small uk-width-1-1">Contact</h1>
            <form class="uk-form-stacked">
                <div class="uk-width-1-2 contact-left">
                    <div>
                        <div class="uk-margin">
                            <label class="uk-form-label" for="form-stacked-name">Name *</label>
                            <div class="uk-form-controls">
                                <input class="uk-input" id="form-stacked-name" type="text" placeholder="full name">
                            </div>
                        </div>
                        <div class="uk-margin">
                            <label class="uk-form-label" for="form-stacked-phone">Phone *</label>
                            <div class="uk-form-controls">
                                <input class="uk-input" id="form-stacked-phone" type="text" placeholder="phone">
                            </div>
                        </div>
                        <div class="uk-margin">
                            <label class="uk-form-label" for="form-stacked-email">Email *</label>
                            <div class="uk-form-controls">
                                <input class="uk-input" id="form-stacked-email" type="text" placeholder="email">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-right uk-width-1-2s">
                    <div>
                        <p class="uk-form-label">Message *</p>
                        <div class="uk-margin">
                            <textarea class="uk-textarea" rows="5" placeholder="Your message"></textarea>
                        </div>
                        <button class="contact-sub uk-button uk-button-default">Send</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Contact",
  components: {
    
  },

  beforeDestroy: function() {
        document.body.className = 'home-body';
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contact {
    height: 100%h;

    .contact-panels {
        margin: 3% 8% 8%;
    }
    .contact-left {
        padding-right: 50px;
        margin-top: 20px;

        .uk-grid {
        margin-left: 0;
        }
    }
    .contact-right {
        margin-top: 20px;
        padding-right: 40px;
        .uk-margin {
            margin-top: 0 !important;
        }
    }
    .uk-heading-small {
        font-size: 2rem;
        font-family: 'Lexend Deca', sans-serif !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #000;
    }
    form {
        display: flex !important;
        width: 100%;
        
        input, textarea {
            border: 1px solid black;
            color:black;
        }
    }
    .contact-sub { 
        margin-top: 21px;
        height: 40px;
        color: black;
        border: 1px solid black;
    }
}

/*SCREENS*/

// Small devices (landscape phones, 576px and up)
@media (max-width: 320px) {
    .contact {
        
    }
}

@media (min-width: 320px) {
    .contact {
        
    }
}

@media (min-width: 380px) {
    .contact {
        
    }
}

@media (min-width: 440px) {
    .contact {
        
    }
}

// Medium devices (tablets, 768px and up)
@media (max-width: 640px) {
    .contact {
        form {
            display: block !important;
        }
        .contact-left {
            width: 100%;
        }
    }
}

@media (min-width: 641px) {
    .contact {
        .contact-left, .contact-right {
            height: 100%;
        }
    }
}

// Large devices (desktops, 992px and up)
@media (max-width: 960px) {
    .contact {
        
    }
}

@media (min-width: 961px) {
    .contact {
        
    }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
    .contact {
        
    }
}
</style>
