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
        <h3 class="left"> {{ i.firstName }} {{ i.lastName }} </h3>

        <h4 class="left"> {{ i.role }} </h4>
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

@media (max-width: 550px) {
  .pic img {
    max-width: 50%;
  }

  h3, h4 {
    text-align: center;
  }
}

.profile {
  margin-top: 20px;
}

p {
  text-align: justify;
}

</style>
