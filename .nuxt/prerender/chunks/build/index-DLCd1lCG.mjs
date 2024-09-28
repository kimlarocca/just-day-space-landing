import { resolveComponent, mergeProps, useSSRContext } from 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/h3/dist/index.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/devalue/index.js';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/ufo/dist/index.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/destr/dist/index.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/hookable/dist/index.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/klona/dist/index.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/scule/dist/index.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/defu/dist/defu.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/ohash/dist/index.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/pathe/dist/index.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/unhead/dist/index.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/unctx/dist/index.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/kimlarocca/Websites/just-day-space-landing/node_modules/@supabase/supabase-js/dist/main/index.js';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "landing-page" }, _attrs))} data-v-88289e42><div class="container-black flex justify-content-center align-items-center flex-column p-5 text-center" data-v-88289e42><p class="mb-2" data-v-88289e42>JustDaySpace is</p><h1 class="mb-6" data-v-88289e42>Launching Soon!</h1><a href="mailto:amy@amyinfinity.com" class="plain" data-v-88289e42>`);
  _push(ssrRenderComponent(_component_Button, { label: "Join Beta Waitlist" }, null, _parent));
  _push(`</a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-88289e42"]]);

export { index as default };
//# sourceMappingURL=index-DLCd1lCG.mjs.map
