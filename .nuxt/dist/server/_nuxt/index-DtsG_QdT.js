import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
import "cookie-es";
import "destr";
import "ohash";
import "klona";
import "@supabase/supabase-js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "landing-page" }, _attrs))} data-v-ce9cd14e><div class="container-black flex justify-content-center align-items-center flex-column p-5 text-center" data-v-ce9cd14e><p class="mb-2" data-v-ce9cd14e>JustDaySpace is</p><h1 class="mb-6" data-v-ce9cd14e>Launching Soon!</h1><a href="https://amyinfinity.com/justdayspace-signup" class="plain" data-v-ce9cd14e>`);
  _push(ssrRenderComponent(_component_Button, { label: "Get Early Access" }, null, _parent));
  _push(`</a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ce9cd14e"]]);
export {
  index as default
};
//# sourceMappingURL=index-DtsG_QdT.js.map
