<template>
  <div>
    <div style="border: 2px solid black;" id="map"></div>
    <aside class="toolbox">
      <div class="box">
        <header>
          <h1>Add layer</h1>
        </header>
        <section>
          <p class="description open-sans">Add one CARTO layer to your map</p>
        </section>
        <footer class="js-footer"></footer>
      </div>
    </aside>
    <div id="loader">
      <div class="CDB-LoaderIcon CDB-LoaderIcon--big">
        <svg class="CDB-LoaderIcon-spinner" viewBox="0 0 50 50">
          <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"></circle>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
// import { defineCustomElements } from '@carto/airship-components/dist/loader';

// defineCustomElements(window);
export default {
  mounted() {
     const map = new mapboxgl.Map({
      container: 'map',
      style: carto.basemaps.voyager,
      center: [0, 0],
      zoom: 1,
      scrollZoom: false
    });

    const nav = new mapboxgl.NavigationControl({
      showCompass: false
    });
    map.addControl(nav, 'top-left');
    map.addControl(new mapboxgl.FullscreenControl(), 'top-left');

    // Define user
    carto.setDefaultAuth({
      username: 'cartovl',
      apiKey: 'default_public'
    });

    // Define layer
    const source = new carto.source.Dataset('populated_places');
    const viz = new carto.Viz();
    const layer = new carto.Layer('layer', source, viz);

    layer.addTo(map, 'watername_ocean');
    layer.on('loaded', hideLoader);

    function hideLoader() {
      document.getElementById('loader').style.opacity = '0';
    }
  }
};
</script>

<style>
#map{
  width: 80%;
  height: 500px;
}
</style>
