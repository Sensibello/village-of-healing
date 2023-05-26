import { ssrRenderAttrs } from 'file:///Users/a155246/Desktop/village-of-healing/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file:///Users/a155246/Desktop/village-of-healing/node_modules/vue/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/a155246/Desktop/village-of-healing/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/a155246/Desktop/village-of-healing/node_modules/hookable/dist/index.mjs';
import 'file:///Users/a155246/Desktop/village-of-healing/node_modules/unctx/dist/index.mjs';
import 'file:///Users/a155246/Desktop/village-of-healing/node_modules/h3/dist/index.mjs';
import 'file:///Users/a155246/Desktop/village-of-healing/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/a155246/Desktop/village-of-healing/node_modules/unhead/dist/index.mjs';
import 'file:///Users/a155246/Desktop/village-of-healing/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/a155246/Desktop/village-of-healing/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/a155246/Desktop/village-of-healing/node_modules/ufo/dist/index.mjs';
import 'file:///Users/a155246/Desktop/village-of-healing/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/a155246/Desktop/village-of-healing/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/a155246/Desktop/village-of-healing/node_modules/destr/dist/index.mjs';
import 'file:///Users/a155246/Desktop/village-of-healing/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/a155246/Desktop/village-of-healing/node_modules/scule/dist/index.mjs';
import 'file:///Users/a155246/Desktop/village-of-healing/node_modules/klona/dist/index.mjs';
import 'file:///Users/a155246/Desktop/village-of-healing/node_modules/ohash/dist/index.mjs';
import 'file:///Users/a155246/Desktop/village-of-healing/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/a155246/Desktop/village-of-healing/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/a155246/Desktop/village-of-healing/node_modules/radix3/dist/index.mjs';

const _sfc_main = {
  data() {
    return {
      title: "Life Lanes"
    };
  },
  head() {
    return {
      title: this.title
    };
  },
  layout: "default",
  components: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h1${ssrRenderAttrs(_attrs)}>Hello world!</h1>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/component-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const componentList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { componentList as default };
//# sourceMappingURL=component-list-05ee4c74.mjs.map
