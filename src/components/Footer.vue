<template>
  <div class="footer">
    <footer id="page-footer" uk-sticky>
      <div class="uk-container uk-padding-small">
        <a
          href="https://www.facebook.com/PureBasicItalian"
          uk-icon="icon: facebook"
          class="icon nav-link"
        ></a>
        <a
          href="https://www.instagram.com/basicitalian"
          uk-icon="icon: instagram"
          class="icon nav-link"
        ></a>
        <a href="#modal-center" uk-icon="icon: mail" class="icon nav-link" uk-toggle></a>

        <div id="modal-center" class="uk-flex-top" uk-modal>
          <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
            <button class="uk-modal-close-default" type="button" uk-close></button>

            <p>Sign up for our newsletter!</p>
            <form>
              <fieldset class="uk-fieldset">
                <div class="uk-margin">
                  <input class="uk-input" type="text" placeholder="e-mail" />
                </div>
                <button
                  class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"
                >Submit</button>
              </fieldset>
            </form>
          </div>
        </div>
        <br />
        <p>Website design by Dieter Engels</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  position: absolute;
  width: 100%;
  text-align: center;

  a {
    margin: 5px;
  }

  a:nth-child(3) {
    margin: 0 10px;
  }

  p {
    margin-top: 5px;
    font-size: 0.6rem;
    opacity: 0.3;
  }
  .icon {
    position: relative;
    transition: all 0.3s ease;
    top: 0;
  }
  .icon:hover {
    position: relative;
    top: -5px;
    transition: all 0.3s ease;
  }
}

/*SCREENS */

@media (min-width: 960px) {
  .footer {
    bottom: 0;
  }
}

@media (max-width: 400px) {
  .footer {
    position: relative;
  }
}
</style>
