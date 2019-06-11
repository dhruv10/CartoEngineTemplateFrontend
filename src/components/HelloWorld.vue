<template>
<div>
  <body class="as-app-body">
    <div class="as-app as-app--nav-left" style="height: 930px; width:100%;">
      <header class="as-toolbar" style="width:90px">
        <button @click="toggleDrawer()" class="as-toolbar__item as-toolbar__toggle">
          <i class="as-icon as-icon-hamburger as-title as-m--0"></i>
        </button>
        <nav class="as-toolbar__actions">
          <ul>
            <li>
              <div class="as-toolbar__item">
                <img src="https://carto.com/developers/img/logo-carto.21197b2f.svg" alt="Logo">
              </div>
            </li>

            <li>
              <a href="#" class="as-toolbar__item">Link 1</a>
            </li>
            <li>
              <a href="#" class="as-toolbar__item">Link 2</a>
            </li>
          </ul>
        </nav>
      </header>
      <div class="as-content">
        <aside class="as-sidebar as-sidebar--left as-bg--warning as-sidebar--xl">
          <!-- as-container code starts here -->
          <div class="as-container">
            <section class="as-box as-box--border">
              <h1 class="as-title">Add Layer</h1>
              <button @click="addLayer()">Add Layer</button>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box as-box--border">
              <h1 class="as-title">Hide Layer</h1>
              <button @click="hideLayer()">Hide Layer</button>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box as-box--border">
              <h1 class="as-title">Show Layer</h1>
              <button @click="showLayer()">Show Layer</button>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box as-box--border">
              <h1 class="as-title">Update Layer</h1>
              <button @click="updateLayer()">Update Layer</button>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box as-box--border">
              <h1 class="as-title">Remove Layer</h1>
              <button @click="removeLayer()">Remove Layer</button>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box as-box--border">
              <h1 class="as-title">Polygon geoJSON Add layer</h1>
              <button @click="addGeoJSONLayer()">Add layer</button>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box as-box--border">
              <h1 class="as-title">Time series</h1>
              <button @click="timeSeriesData()">time series</button>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
          </div>
          <!-- as-container code ends here -->
        </aside>
        <main class="as-main as-bg--badge-blue">
          <div class="as-map-area">
            <div id="map"></div>
            <div class="as-map-panels">
              <div class="as-panel as-panel--top as-panel--right">
                <div class="as-panel__element as-p--32 as-bg--warning">
                  <p class="as-body">Panel 0</p>
                </div>
                <div class="as-panel__element as-p--32 as-bg--success">
                  <p class="as-body">Panel 1</p>
                </div>
              </div>
            </div>
          </div>
          <footer class="as-map-footer as-bg--complementary" style="height: 320px;">
            <div class="as-box">
              <as-time-series-widget
                style="padding:20px;"
                animated
                heading="Animation"
                description="controls"
                time-format="%Q"
              ></as-time-series-widget>
            </div>
            <div class="as-box">
              <as-histogram-widget
                style="padding:20px;"
                show-clear
                id="year"
                heading="Year"
                description="in which building was registered"
              ></as-histogram-widget>
            </div>
          </footer>
        </main>
      </div>
    </div>
  </body>
</div>
</template>

<script>
import carto from "@carto/carto-vl";

export default {
  name: "HelloWorld",
  data() {
    (map = {}), (source = {}), (viz = {}), (layer = {});
  },
  mounted() {
    // Add basemap and set properties
    this.map = new mapboxgl.Map({
      container: "map",
      style: carto.basemaps.voyager,
      center: [0, 30],
      zoom: 2
    });

    const nav = new mapboxgl.NavigationControl({
      showCompass: false
    });
    this.map.addControl(nav, "top-left");
    this.map.addControl(new mapboxgl.FullscreenControl(), "top-left");

    //** CARTO VL functionality begins here **//

    // Define user
    carto.setDefaultAuth({
      username: "cartovl",
      apiKey: "default_public"
    });

    // Define source
    this.source = new carto.source.Dataset("populated_places");

    // Define Viz object and custom style
    this.viz = new carto.Viz(`
            color: purple
            width: 5
        `);
  },
  methods: {
    toggleDrawer() {
      console.log("kamikaze");
    },
    addLayer() {
      // Define map layer
      this.layer = new carto.Layer("layer", this.source, this.viz);

      // Add map layer
      this.layer.addTo(this.map);
    },
    hideLayer() {
      this.layer.hide();
    },
    showLayer() {
      this.layer.show();
    },
    updateLayer() {
      this.viz = new carto.Viz(`
            color: red
            width: 8
        `);
      this.layer.update(this.source, this.viz);
    },
    removeLayer() {
      this.layer.remove();
    },
    addGeoJSONLayer() {
      let self = this;
      fetch("https://libs.cartocdn.com/carto-vl/assets/stations.geojson")
        .then(response => response.json())
        .then(function(data) {
          const source = new carto.source.GeoJSON(data);
          const viz = new carto.Viz();
          const layer = new carto.Layer("layer", source, viz);

          layer.addTo(self.map);
        });
    },
    timeSeriesData() {
      const map = new mapboxgl.Map({
        container: "map",
        style: carto.basemaps.darkmatter,
        center: [-4.77, 37.88],
        zoom: 12
      });
      carto.setDefaultAuth({
        username: "roman-carto",
        apiKey: "default_public"
      });
      const source = new carto.source.SQL(`
          select * from cordoba_catastro_simple where year > 1900 and year < 2018
        `);
      const viz = new carto.Viz(`
          strokeWidth: 0
        `);

      const vizLayer = new carto.Layer("layer", source, viz);
      vizLayer.addTo(map, "watername_ocean");
      const yearWidget = document.querySelector("#year");
      yearWidget.axisFormatter = e => {
        if (isNaN(e)) {
          return "...";
        }
        return Math.round(e);
      };
      const bridge = new AsBridge.VLBridge({
        carto: carto,
        map: map,
        layer: vizLayer,
        source: source
      });

      const ts = bridge.timeSeries("as-time-series-widget", "year", {
        buckets: 30,
        readOnly: false,
        totals: true,
        duration: 20,
        fade: [0.1, Number.MAX_SAFE_INTEGER]
      });
      bridge.histogram(yearWidget, "year", {
        buckets: 30,
        readOnly: false,
        totals: true
      });
      bridge.build();
    }
  }
};
</script>

<style scoped>
#map {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
