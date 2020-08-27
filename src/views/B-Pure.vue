<template>
  <div class="b-pure">
    <div class="b-pure-panels" uk-grid>
      <div class="1">
        <img src="../assets/images/basicfriet.png" alt />
      </div>
      <div class="2">
        <img src="../assets/images/basicBBQ.png" alt />
      </div>
      <div class="3">
        <img src="../assets/images/basicitalian.png" alt />
      </div>
      <div class="4">
        <img src="../assets/images/basicthai.png" alt />
      </div>
      <div class="5">
        <img src="../assets/images/basicpure.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Takeaway",
  components: {},

  beforeDestroy: function() {
    document.body.className = "home-body";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.b-pure {
  height: 100vh;
  .b-pure-panels {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 60px 0px 30px;

    img {
      width: 150px;
      pointer-events: none;
    }
  }
}

/*SCREENS*/

@media (min-width: 300px) {
  .b-pure {
    height: 100%;
  }
}

// Small devices (landscape phones, 576px and up)

@media (max-width: 440px) {
  .b-pure {
    .b-pure-panels {
      padding: 0;

      svg {
        width: 65px;
      }
    }
  }
}

@media (min-width: 440px) {
  .b-pure {
    .b-pure-panels {
      margin: 100px 0 100px 0;
    }
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 640px) {
  .b-pure {
    .b-pure-panels {
      margin: 100px 0 100px 0;
    }
  }
}

@media (min-width: 750px) {
  .b-pure {
    .b-pure-panels {
      margin: 100px 0 100px 0;
    }
  }
}

// Large devices (desktops, 992px and up)
@media (max-width: 960px) {
  .takeaway {
  }
}

@media (min-width: 961px) {
  .b-pure {
    .b-pure-panels {
      margin: 200px 0 200px 0;
    }
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .b-pure {
    .b-pure-panels {
      margin: 200px 0 200px 0;
    }
  }
}
</style>
