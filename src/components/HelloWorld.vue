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
              <button @click="addLayer()">
                Add Layer
              </button>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box as-box--border">
              <h1 class="as-title">Hide Layer</h1>
              <button @click="hideLayer()">
                Hide Layer
              </button>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box as-box--border">
              <h1 class="as-title">Show Layer</h1>
              <button @click="showLayer()">
                Show Layer
              </button>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box as-box--border">
              <h1 class="as-title">Update Layer</h1>
              <button @click="updateLayer()">
                Update Layer
              </button>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box as-box--border">
              <h1 class="as-title">Remove Layer</h1>
              <button @click="removeLayer()">
                Remove Layer
              </button>
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
          <footer class="as-map-footer as-bg--complementary" style="height: 120px;">
            <div class="as-box">
              <p class="as-title">BOX 1</p>
              <p class="as-body">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p
                class="as-body"
              >Inventore possimus nam quam necessitatibus omnis, est sequi rem quibusdam molestiae.</p>
            </div>
            <div class="as-box">
              <p class="as-title">BOX 2</p>
              <p class="as-body">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  </body>
</div>
</template>

<script>
import carto from '@carto/carto-vl'

export default {
  name: "HelloWorld",
  data() {
    map = {},
    source = {},
    viz = {},
    layer = {}
  },
  mounted() {
    // Add basemap and set properties
    this.map = new mapboxgl.Map({
      container: "map",
      style: carto.basemaps.voyager,
      center: [0, 30],
      zoom: 2
    });

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
