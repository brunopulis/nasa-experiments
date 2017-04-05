<template>
  <div id="app">
    <HeaderMenu></HeaderMenu>
    <Gallery></Gallery>
  </div>
</template>

<script>
  const ENDPOINT = 'https://api.nasa.gov/planetary/apod?api_key=cnvbe0cPs2FfVtm4BSKqWFxgdKa4i6EOrl8OCsxD';

  import axios from 'axios';
  import HeaderMenu from './components/HeaderMenu.vue';
  import Gallery from './components/Gallery.vue';

  export default {
    name: 'app',
    components: { HeaderMenu, Gallery },

    data: {
      item: []
    },

    mounted () {
      axios.get(ENDPOINT)
        .then( response => console.log(response))
        .then( data => Vue.set( this, 'item', data) );

    }
  }
</script>

<style lang="scss">

* { margin: 0; padding: 0;  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;

}

h1, h2 {
  font-weight: normal;
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
  color: #42b983;
}
</style>
