<template>
  <div class="Nav">
    <div class="bar container">
      <div class="row">
        <div class="three columns logo">
          <img src="../assets/ef-logo.png">
        </div>
        <div class="four offset-by-five columns menu">
          <ul>
            <li> <router-link to="/"> Home </router-link> </li>
            <li> <router-link to="/support"> Support </router-link> </li>
            <li>
              <div class="dropdown">
                <div class="dropbtn">
                  <router-link to="/team"> Teams </router-link>
                </div>
                  <div class="dropdown-content">
                  <router-link :to="'/team' + t.project.route" v-for="t in teams" v-bind:key="t">
                    {{ t.project.name }}
                  </router-link>
                </div>
              </div>

              <div class="dropdown">
              </div>
            </li>
            <li> <a href="https://blog.ethereum.org" target="_blank"> Blog' </a> </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import teams from '../data/teams';

export default {
  name: 'Nav',
  data() {
    return {
      teams,
    };
  },
  props: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Nav {
  margin-top: 40px;
}

.menu {
  color: black;
  position: absolute;
  bottom: 0;
  right: 0;
}

@media (max-width: 550px) {
  .menu {
    position: inherit;
  }
}
.logo img {
  height: 100px;
  background-size: 200px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
  /*text-decoration-style: dotted;*/
  text-decoration-line: none;
  vertical-align: center;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  /*background-color: white;*/
  backdrop-filter: blur(5px);
  min-width: 160px;
  z-index: 1;
  padding-top: 10px;
}

/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  color: #222;
  text-decoration: none;
  display: block;
  text-align: left;
  padding-left: 5px;
}


/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  color: black;
  text-decoration-line: underline;

}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

</style>
