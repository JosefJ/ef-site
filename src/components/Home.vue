<template>
  <div class="Home">
    <div class="row">
      <img id="hero" src="../assets/eth-diamond.png">
    </div>
    <div class="row">
      <p> Welcome to the Ethereum Foundation (Stiftung Ethereum), the non-profit institution which
        sole purpose is to serves the Ethereum ecosystem! This website serves as a simple intro
        into the organization, its mechanisms and people behind it.</p>
    </div>
    <div class="row">
      <h1> Mission </h1>
    </div>
    <div class="row">
      <p>
        The Ethereum Foundation’s mission is to promote and support Ethereum platform and base
        layer research, development and education to bring decentralized protocols and tools
        to the world that empower developers to produce next generation decentralized
        applications (dapps), and together build a more globally accessible, more free and
        more trustworthy Internet.
      </p>
    </div>

    <div class="row">
      <h1> Things we do </h1>
    </div>
    <div class="row">
      <p>
        At the EF mainly focused on fundamental research, development of new Ethereum clients, Smart contract languages
        and the necessary tooling for dapp developers. Part of the job is advocating for the decentralized technology
        outside of the blockchain community to help to bridge the adoption gap. We also organize an annual developer
        focused conference called the Ethereum Devcon.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    text-align: justify;
  }

  .Home {
    margin-top: 40px;
  }

  #hero {
    height: 33vh;
  }
</style>
