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
              <h1 class="as-title">Container 1</h1>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box as-box--border">
              <h1 class="as-title">Container 1</h1>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box">
              <h1 class="as-title">Container 1</h1>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box">
              <h1 class="as-title">Container 1</h1>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box">
              <h1 class="as-title">Container 1</h1>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box">
              <h1 class="as-title">Container 1</h1>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box">
              <h1 class="as-title">Container 1</h1>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box">
              <h1 class="as-title">Container 1</h1>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box">
              <h1 class="as-title">Container 1</h1>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box">
              <h1 class="as-title">Container 1</h1>
              <p class="as-body">
                Use this container when you need to present fixed content. This content will occupy as
                much vertical space as needed.
              </p>
            </section>
            <section class="as-box">
              <h1 class="as-title">Container 1</h1>
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
export default {
  name: "HelloWorld",
  data() {},
  methods: {
    toggleDrawer() {
      console.log("kamikaze");
    }
  }
};
</script>

<style>
</style>
