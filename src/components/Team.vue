<template>
  <div class="Team">
    <div class="row">
      <h1> {{ project.name }} </h1>
      <p> {{ project.description }}</p>
    </div>
    <div v-for="i in team" class="row profile" v-bind:key="i">
      <div class="three columns pic">
        <img :src="i.pic"/>
      </div>
      <div class="nine columns">
        <div class="first">
          <h3 class="left name"> {{ i.name }} </h3>
          <div class="social">
            <a v-if="i.github !== null" :href="i.github" class="soc-logo"> <img src="../assets/gh.png"> </a>
            <a v-if="i.twitter !== null" :href="i.twitter" class="soc-logo"> <img src="../assets/tw.png"> </a>
            <a v-if="i.linkedin !== null" :href="i.linkedin" class="soc-logo"> <img src="../assets/ln.svg"> </a>
            <a v-if="i.peepeth !== null" :href="i.peepeth" class="soc-logo"> <img src="../assets/pe.png"> </a>
            <a v-if="i.keybase !== null" :href="i.keybase" class="soc-logo"> <img src="../assets/kb.png"> </a>
          </div>
        </div>
        <h4 class="left"> {{ i.role }} </h4>
        <div class="links"> </div>
        <p class="left"> {{ i.bio }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {
      // project: this.$attrs.project,
      // team: this.$attrs.team,
    };
  },
  computed: {
    team () {
      return this.$attrs.team;
    },
    project () {
      return this.$attrs.project;
    }
  },
};
</script>

<style scoped>
.Team {
  margin-top: 40px;
}

h3 {
  margin-bottom: 0px;
}

h4 {
  margin-top: -5px;
  color: #333333;
}

h3, h4 {
  text-align: left;
}
.pic img {
  max-width: 100%;
}

.profile {
  margin-top: 20px;
}

p {
  text-align: justify;
}

  .first {
    display: flex;
    justify-content: space-between;
  }
  .social {
    /*margin-bottom: 10px;*/
  }

  .soc-logo {
    display: inline;
    margin-left: 20px;
  }

  .soc-logo img {
    width: 25px;
    height: 25px;
    margin-top: 10px;
  }

  .name {
    /*display: flex;*/
  }

@media (max-width: 750px) {
  .first {
    display: inline;
  }
  .social {
    text-align: left;
    margin-bottom: 8px;
  }

  .soc-logo:first-child {
    margin-left: 0px;
  }
}

@media (max-width: 550px) {
  .pic img {
    max-width: 50%;
  }

  h3, h4 {
    text-align: center;
  }
  .social {
    text-align: center;
  }
}

</style>
