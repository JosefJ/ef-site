<template>
  <div class="Footer">
    <div class="bar container">
<!--        <div class="canary row">-->
<!--          <p>-->
<!--            The Ethereum Foundation (Stiftung Ethereum) has never been contacted by any agency anywhere-->
<!--            in the world in a way which requires that contact not to be disclosed.-->
<!--            Stiftung Ethereum will publicly disclose any sort of inquiry from government agencies that-->
<!--            falls outside the scope of regular business operations.-->
<!--          </p>-->
<!--        </div>-->

      <div class="row last-line">
<!--        <div> Policy </div> |-->
        <div id="warrant">
          <img src="../assets/legal-canary.svg"/>
        </div> |
        <div> <a href="https://ethresear.ch" target="_blank"> Ethresear.ch </a> </div> |
        <div> <a href="https://ethereum.org" target="_blank"> Ethereum.org </a> </div>
        <div id="warrant-text">
            The Ethereum Foundation (Stiftung Ethereum) has never been contacted by any agency anywhere
            in the world in a way which requires that contact not to be disclosed.
            Stiftung Ethereum will publicly disclose any sort of inquiry from government agencies that
            falls outside the scope of regular business operations.
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  data() {
    return {
    };
  },
  props: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  text-align: justify;
}

.Footer {
  position: relative;
  bottom: 0;
  margin-top: 40px;
  padding-bottom: 10px;
}

.last-line div {
  display: inline-block;
  padding: 0px 10px;
}
.last-line img {
  height: 30px;
  width: 30px;
  vertical-align: bottom;
}

.last-line div > a {
  text-decoration-line: none;
  color: black;
}

#warrant:hover ~ #warrant-text {
    opacity: 0.9;
    transition: opacity 0.25s ease-out;
}

#warrant-text {
  opacity: 0;
  transition: opacity 3s ease-out;
  text-align: justify;
  padding: 0px;
  padding-top: 20px;
}
</style>
