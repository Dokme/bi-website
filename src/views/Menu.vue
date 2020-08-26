<template>
  <div class="menu">
    <div class="menu-panels" uk-grid>
      <div class="uk-width-1-3@s left">
        <h1 class="uk-heading-small sub-title">
          SPECIALTIES
          <div class="beware">small €7, medium €8.5, large €10</div>
        </h1>
        <div>
          <ul class="menu-list">
            <li>
              <span uk-icon="icon: star"></span> Basic Italian Pasta
              <span>
                <font-awesome-icon icon="leaf" />
              </span>
              <div
                class="what"
              >soft tomato cream sauce, mozzarella, pesto, cherry tomatoes, basil, rucola, pine nuts</div>
            </li>
            <li>
              Verdura Light
              <div
                class="what"
              >chicken, pesto, cucumber, paprika, sun dried tomatoes, basil, rucola, pine nuts</div>
            </li>
            <li>
              Popup-Parma
              <div
                class="what"
              >parmaham, pesto, mozzarella, cucumber, sun dried tomatoes, basil, rucola, pine nuts</div>
            </li>
            <li>
              Luca-Love
              <div
                class="what"
              >mascarpone sauce, bacon, pesto, sun dried tomatoes, basil, rucola, pine nuts</div>
            </li>
            <li>
              Spicy
              <span>
                <font-awesome-icon icon="fire" />
              </span>
              <div class="what">diabolique sauce, bacon, pesto</div>
            </li>
            <li>
              Heaven
              <div class="what">carbonara, meatballs, mozzarella</div>
            </li>
            <li>
              Beach
              <div
                class="what"
              >mascarpone sauce, smoked salmon, dille, cucumber, mozzarella, cherry tomatoes</div>
            </li>
            <li>
              Sunny
              <div class="what">mascarpone sauce, chicken, sun dried tomatoes</div>
            </li>
            <li>
              Popeye
              <div class="what">spinach cream sauce, bacon, mozzarella, rucola</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="uk-width-1-3@s middle">
        <h1 class="uk-heading-small sub-title">
          SWITCH&amp;MIX
          <div class="beware">small €5.5, medium €7, large €8.5</div>
        </h1>
        <div>
          <ul class="menu-list">
            <li>
              Roma Bologna
              <div class="what">bolognese and carbonara sauce</div>
            </li>
            <li>
              Devil Cheese
              <span>
                <font-awesome-icon icon="fire" />
              </span>
              <div class="what">diabolique and 4-fromaggi sauce</div>
            </li>
            <li>
              Devil Cheese Veggie
              <span>
                <font-awesome-icon icon="fire" />
              </span>
              <span>
                <font-awesome-icon icon="leaf" />
              </span>
              <div class="what">arrabiata and 4-fromaggi sauce</div>
            </li>
            <li>
              Tasty Veggie
              <span>
                <font-awesome-icon icon="leaf" />
              </span>
              <div class="what">pomodoro and mascarpone sauce</div>
            </li>
            <li>
              Whatever you want!
              <div class="what">only in physical stores</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="uk-width-1-3@s right">
        <h1 class="uk-heading-small sub-title">
          CHOOSE&amp;MIX
          <div class="beware">only in physical stores</div>
        </h1>
        <div>
          <ul class="menu-list choose">
            <li>
              1// Choose the pasta, choose the size
              <div class="what">normal, whole grain - small €5.5, medium €7, large €8.5</div>
            </li>
            <li>
              2// Choose the sauce
              <div class="what">
                <ul class="menu-list sauces">
                  <li>bolognese</li>
                  <li>
                    diabolique
                    <span>
                      <font-awesome-icon icon="fire" />
                    </span>
                  </li>
                  <li>
                    arrabiata
                    <span>
                      <font-awesome-icon icon="fire" />
                      <font-awesome-icon icon="leaf" />
                    </span>
                  </li>
                  <li>
                    4-fromaggi
                    <span>
                      <font-awesome-icon icon="leaf" />
                    </span>
                  </li>
                  <li>carbonara</li>
                  <li>
                    pomodoro, with basil, rucola, pine nuts
                    <span>
                      <font-awesome-icon icon="leaf" />
                    </span>
                  </li>
                  <li>
                    mascarpone, with basil, rucola, pine nuts
                    <span>
                      <font-awesome-icon icon="leaf" />
                    </span>
                  </li>
                  <li>
                    spinach
                    <span>
                      <font-awesome-icon icon="leaf" />
                    </span>
                  </li>
                  <li>
                    pesto, with basil, rucola, pine nuts
                    <span>
                      <font-awesome-icon icon="leaf" />
                    </span>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              3// Extra meat/fish or veggie? (+€1/€2)
              <div class="what">
                <span class="subcat">meat</span>: bacon (+€1), parmaham (+€1), chicken (+€2), meatballs (+€2)
                <br />
                <span class="subcat">fish</span>: anchovies (+€1), scampi (+€2), smoked salmon (+€2)
                <br />
                <span class="subcat">veggie</span>: mozzarella (+€1), pesto (+€1), champignons (+€1)
              </div>
            </li>
            <li>
              4// Extra toppings? (+€0.5)
              <div
                class="what"
              >cherry tomatoes, sun dried tomatoes, pine nuts, rucola, cucumber, paprika, crusty onion, parmesan cheese, emmental cheese</div>
            </li>
            <li>
              5// Choose the cheese
              <div class="what">parmesan cheese, emmental cheese</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="uk-width-1-1 legend">
        <span>
          <font-awesome-icon icon="leaf" />
        </span> = vegetarian,
        <span>
          <font-awesome-icon icon="fire" />
        </span> = spicy
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Menu",
  components: {},

  beforeDestroy: function() {
    document.body.className = "home-body";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu {
  height: 100%h;
  margin-top: 3%;

  .title {
    text-align: center;
    padding: 0;

    h1 {
      margin: 0;
    }
  }
  .sub-title {
    font-size: 1.3rem !important;
    text-align: left;

    .beware {
      font-size: 0.6rem !important;
      text-align: left;
    }
  }
  span {
    width: 15px;
  }
  .what {
    font-size: 0.6rem !important;
  }
  .uk-width-1-3 {
    margin-top: 10px;
  }
  .right {
    padding-right: 30px;
  }
  .left,
  .legend {
    padding-left: 30px;
  }
  .menu-panels {
    margin: 0% 8% 5%;
  }
  .uk-heading-small {
    font-size: 2rem;
    font-family: "Lexend Deca", sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
  }
  .menu-list {
    list-style-type: none;
    padding: 0;

    a {
      color: black;
    }
  }
  .choose {
    .sauces {
      margin-bottom: 0;
    }
    .subcat {
      font-weight: bold;
    }
    > li {
      margin-bottom: 10px;
    }
  }
  .legend {
    font-size: 0.6rem !important;
    margin: 0 0 10px 0;
  }
}

/*SCREENS*/

// Small devices (landscape phones, 576px and up)
@media (max-width: 320px) {
  .menu {
  }
}

@media (max-width: 440px) {
  .menu {
  }
}

// Medium devices (tablets, 768px and up)
@media (max-width: 640px) {
  .menu {
    .right,
    .middle,
    .left,
    .legend {
      padding: 0 10px 0 10px;
    }
  }
}

@media (max-width: 750px) {
  .menu {
  }
}

// Large devices (desktops, 992px and up)
@media (max-width: 960px) {
  .menu {
  }
}

@media (min-width: 961px) {
  .menu {
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (max-width: 1200px) {
  .menu {
  }
}
</style>
