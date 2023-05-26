import { _ as _export_sfc, a as __nuxt_component_0$1 } from "../server.mjs";
import { mergeProps, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "destr";
import "defu";
const _imports_0 = "" + __buildAssetsURL("menu-arrow.4d251a87.svg");
const QuoteModal_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = {
  data() {
    return {
      openModal: false
    };
  },
  methods: {
    toggleModal() {
      this.openModal = !this.openModal;
    }
  },
  components: {}
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "quote-modal" }, _attrs))}><a class="primary-btn"${ssrRenderAttr("aria-expanded", $data.openModal)}${ssrRenderAttr("aria-label", $data.openModal ? "Close Get a Quote Modal" : "Close Get a Quote Modal")}><span> Get a quote </span></a><div class="quote-modal-body" id="quote-modal" style="${ssrRenderStyle($data.openModal ? null : { display: "none" })}"><img${ssrRenderAttr("src", _imports_0)} class="prog-logo" alt=""></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/QuoteModal.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const HeaderMenu_vue_vue_type_style_index_0_scoped_704147a2_lang = "";
const _sfc_main$3 = {
  name: "LifelanesMenu",
  components: {
    HeaderQuoteModal: __nuxt_component_0
  },
  data() {
    return {
      openLifelanes: false
    };
  },
  methods: {
    toggleMenu() {
      this.openLifelanes = !this.openLifelanes;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderQuoteModal = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "lifelanes" }, _attrs))} data-v-704147a2><nav class="lifelanes-menu mobile-only" data-v-704147a2><div class="flex-me" data-v-704147a2><button type="button" class="menu-button hamburger mobile-only"${ssrRenderAttr("aria-expanded", $data.openLifelanes)}${ssrRenderAttr("aria-label", $data.openLifelanes ? "Close Life Lanes menu" : "Open Life Lanes menu")} data-v-704147a2><span class="${ssrRenderClass([{ "is-active": $data.openLifelanes }, "lifelanes-logo-mobile"])}" data-v-704147a2><img${ssrRenderAttr("src", _imports_0)} class="" alt="" data-v-704147a2></span></button><ul class="lifelanes-menu-panel" id="lifelanes-dropdown" style="${ssrRenderStyle($data.openLifelanes ? null : { display: "none" })}" data-v-704147a2><li class="nav-item border-bottom" data-v-704147a2><a class="nav-link" href="#" data-label="On the Road" data-v-704147a2><span class="align-together" data-v-704147a2><img${ssrRenderAttr("src", _imports_0)} class="on-the-road" alt="" data-v-704147a2><p class="" data-v-704147a2>On the Road</p></span><span class="mobile-only nav-item-text" data-v-704147a2>Tried and true tips for cars</span></a></li><li class="nav-item border-bottom" data-v-704147a2><a class="nav-link" href="#" data-label="Household" data-v-704147a2><span class="align-together" data-v-704147a2><img${ssrRenderAttr("src", _imports_0)} class="household" alt="" data-v-704147a2><p class="" data-v-704147a2>Household</p></span><span class="mobile-only nav-item-text" data-v-704147a2>From moving to design, all under one roof</span></a></li><li class="nav-item border-bottom" data-v-704147a2><a class="nav-link" href="#" data-label="Adventure" data-v-704147a2><span class="align-together" data-v-704147a2><img${ssrRenderAttr("src", _imports_0)} class="adventure" alt="" data-v-704147a2><p class="" data-v-704147a2>Adventure</p></span><span class="mobile-only nav-item-text" data-v-704147a2>Take off on your boat, motorcycle or RV</span></a></li><li class="nav-item" data-v-704147a2><a class="nav-link" href="#" data-label="Turning Points" data-v-704147a2><span class="align-together" data-v-704147a2><img${ssrRenderAttr("src", _imports_0)} class="turning-points" alt="" data-v-704147a2><p class="" data-v-704147a2>Turning Points</p></span><span class="mobile-only nav-item-text" data-v-704147a2>Helping you to adjust to life&#39;s changes</span></a></li><div class="nav-util border-bottom grid" data-v-704147a2><div class="grid-l6 nav-util-item border-right border-top" data-v-704147a2><a href="#" data-label="lifelanes" class="lifelanes-mobile-logo" data-v-704147a2><svg id="Group_20964" data-name="Group 20964" xmlns="http://www.w3.org/2000/svg" width="21.194" height="22.164" viewBox="0 0 21.194 22.164" data-v-704147a2><path id="Path_137088" data-name="Path 137088" d="M67.615,11.082H63.423V0H59.6V14.751h8.012v3.707l5.541-5.541L67.615,7.375Z" transform="translate(-51.962)" data-v-704147a2></path><path id="Path_137089" data-name="Path 137089" d="M3.82,0H0V22.164H11.947l3.707-3.707H3.82Z" data-v-704147a2></path></svg><span data-v-704147a2>Life Lanes Home</span></a></div><div class="grid-l6 border-top nav-util-item" data-label="Saved Articles" data-v-704147a2><a data-label="Saved Articles" href="#" class="saved-articles-nav" data-v-704147a2><img${ssrRenderAttr("src", _imports_0)} class="saved-articles" alt="" data-v-704147a2><span data-v-704147a2>Saved Articles</span></a></div></div></ul>`);
  _push(ssrRenderComponent(_component_HeaderQuoteModal, null, null, _parent));
  _push(`</div></nav><nav class="menu lifelanes-desktop desktop-only" data-v-704147a2><a class="navbar-brand" href="#" data-v-704147a2><img${ssrRenderAttr("src", _imports_0)} alt="Life Lanes logo" aria-label="Lifelanes" class="logo-text" data-v-704147a2><span class="sr-only" data-v-704147a2>Life Lanes home</span></a><ul class="nav" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement" r ole="navigation" aria-label="Life Lanes" data-v-704147a2><li class="nav-item" role="presentation" data-v-704147a2><a class="btn nav-link" href="#" data-v-704147a2><img${ssrRenderAttr("src", _imports_0)} class="on-the-road" alt="" data-v-704147a2><span class="nav-item-text" data-v-704147a2>On the Road</span></a></li><li class="nav-item" role="presentation" data-v-704147a2><a class="btn nav-link" href="#" data-v-704147a2><img${ssrRenderAttr("src", _imports_0)} class="household" alt="" data-v-704147a2><span class="nav-item-text" data-v-704147a2>Household</span></a></li><li class="nav-item" role="presentation" data-v-704147a2><a class="btn nav-link" href="#" data-v-704147a2><img${ssrRenderAttr("src", _imports_0)} class="adventure" alt="" data-v-704147a2><span class="nav-item-text" data-v-704147a2>Adventure</span></a></li><li class="nav-item" role="presentation" data-v-704147a2><a class="btn nav-link" href="#" data-v-704147a2><img${ssrRenderAttr("src", _imports_0)} class="turning-points" alt="" data-v-704147a2><span class="nav-item-text" data-v-704147a2>Turning Points</span></a></li><li class="nav-item saved-articles" role="presentation" data-v-704147a2><a href="/" class="btn btn-lg btn-block py-2 px-3 nav-link link-hover" data-label="Saved Articles" data-v-704147a2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 51.1113" focusable="false" aria-hidden="true" data-v-704147a2><title data-v-704147a2>Saved articles icon</title><path d="M42,8H10a2,2,0,0,0-2,2V49.1113a2,2,0,0,0,2.7432,1.857L26,44.8652l15.2568,6.1031A2,2,0,0,0,44,49.1113V10A2,2,0,0,0,42,8Z" data-v-704147a2></path><path d="M36,2a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2V41a2,2,0,0,0,4,0V4H34A2,2,0,0,0,36,2Z" data-v-704147a2></path></svg><span class="ml-2 mr-4" data-v-704147a2>Saved Articles</span></a></li><li class="desktop-only nav-item" role="" data-v-704147a2>`);
  _push(ssrRenderComponent(_component_HeaderQuoteModal, null, null, _parent));
  _push(`</li></ul></nav></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/menu/HeaderMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const MenuHeaderMenu = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-704147a2"]]);
const Header_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  name: "Header",
  components: {
    MenuHeaderMenu
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MenuHeaderMenu = resolveComponent("MenuHeaderMenu");
  _push(`<header${ssrRenderAttrs(mergeProps({
    id: "header",
    "data-module": "header",
    class: "header"
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_MenuHeaderMenu, null, null, _parent));
  _push(`</header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const Footer_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  components: {}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(_attrs)}><div class="wrap"><div class="content"><div class="grid justify-content-center border-bottom pb5 mb5 text-center text-md-left"><div class="grid-l3 grid-m6 grid-s12"><p class="h4" role="heading" aria-level="4">Category</p><ul><li><a href="/" data-ga-label="on-the-road">On the Road</a></li><li><a href="/" data-ga-label="household">Household</a></li><li><a href="/" data-ga-label="adventure">Adventure</a></li><li><a href="/" data-ga-label="turning-points">Turning Points</a></li></ul></div><div class="grid-l3 grid-m6 grid-s12"><p class="h4" role="heading" aria-level="4">Our Company</p><ul><li><a href="/" data-ga-label="progressive-app">Progressive App</a></li><li><a href="/" data-ga-label="progressive-answers">Progressive Answers</a></li><li><a href="/" data-ga-label="about-progressive">About Progressive</a></li><li><a href="/" data-ga-label="contact-us">Contact Us</a></li><li><a href="/" data-ga-label="progressive-app">Car Insurance</a></li><li><a href="/" data-ga-label="progressive-answers">Home Insurance</a></li><li><a href="/" data-ga-label="about-progressive">Sitemap</a></li></ul></div><div class="grid-l3 grid-m6 grid-s12"><ul class="social"><li><a href="https://www.facebook.com/progressive" class="facebook link-hover mr-2" data-ga-label="facebook"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 47" focusable="false" aria-hidden="true"><title>facebook</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M17.6955,8.6781A1.5062,1.5062,0,0,1,18.8,8H26V0H18.6667a9.8973,9.8973,0,0,0-4.2052.9,10.28,10.28,0,0,0-3.3846,2.5A12.0154,12.0154,0,0,0,8.8205,7.1,11.7058,11.7058,0,0,0,8,11.4V16H0v8H8V47h9V24h9V16H17V10.707A3.2085,3.2085,0,0,1,17.6955,8.6781Z"></path></g></g></svg><span class="sr-only">Follow Progressive on Facebook</span></a></li><li><a href="https://www.twitter.com/progressive" class="twitter link-hover mr-2" data-ga-label="twitter"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.6915 37.2381" focusable="false" aria-hidden="true"><title>twitter</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M8.6915,32.0606a14.6054,14.6054,0,0,1-3.0319.8961,17.7491,17.7491,0,0,1-3.4728.297A8.0391,8.0391,0,0,1,1.1125,33.14,7.52,7.52,0,0,0,0,33.0563a31.2258,31.2258,0,0,0,3.3351,1.7922,32.2187,32.2187,0,0,0,3.5373,1.3939q1.8191.4014,3.84.697a27.5916,27.5916,0,0,0,4.0426.2987,27.3178,27.3178,0,0,0,11.6223-2.39,25.1085,25.1085,0,0,0,8.59-6.3723,25.41,25.41,0,0,0,5.1543-8.5628,27.6033,27.6033,0,0,0,1.7181-9.3593V9.16a5.4107,5.4107,0,0,0,1.4149-.9957L44.4681,6.97q.6065-.5975,1.1117-1.1948c.3348-.3983.7075-.8621,1.1117-1.3939a27.6329,27.6329,0,0,1-2.7287.9956,9.3052,9.3052,0,0,1-2.7287.3983c.4043-.2647.84-.5634,1.3138-.8961A3.4843,3.4843,0,0,0,43.66,3.5844,5.3481,5.3481,0,0,0,44.67,2.1905,7.7428,7.7428,0,0,0,45.2766.5974a23.5431,23.5431,0,0,1-2.9308,1.3939,24.4554,24.4554,0,0,1-3.133.9957,5.2751,5.2751,0,0,0-1.4149-1.2943q-.81-.4949-1.617-.8962A7.3871,7.3871,0,0,0,34.3617.1991,10.6262,10.6262,0,0,0,32.3405,0a9.86,9.86,0,0,0-3.7394.697,9.6092,9.6092,0,0,0-3.133,2.0909,8.7253,8.7253,0,0,0-1.92,2.8874,9.4307,9.4307,0,0,0-.7074,3.684v1.0952a3.4151,3.4151,0,0,0,.2021,1.0953,33.3005,33.3005,0,0,1-5.8617-.8961,20.0775,20.0775,0,0,1-5.2553-2.0909,24.9969,24.9969,0,0,1-4.649-2.987A28.2233,28.2233,0,0,1,3.2341,1.5931a11.5621,11.5621,0,0,0-.91,2.39,9.5681,9.5681,0,0,0,0,4.7792,7.9241,7.9241,0,0,0,.91,2.1905,5.2365,5.2365,0,0,0,1.2127,1.7922A20.8028,20.8028,0,0,0,6.266,14.3377,23.1115,23.1115,0,0,1,3.9415,13.84a19.2185,19.2185,0,0,1-2.1224-.6969,8.6566,8.6566,0,0,0,.6064,3.2857,9.8447,9.8447,0,0,0,1.6171,2.6883,7.5144,7.5144,0,0,0,2.4255,2.1905A11.8781,11.8781,0,0,0,9.5,22.5022a7.5557,7.5557,0,0,0-1.1657.092,7.2992,7.2992,0,0,1-1.1265.1071H6.1649a2.0162,2.0162,0,0,1-.91-.1991,7.8361,7.8361,0,0,0,1.3139,2.5887,13.0655,13.0655,0,0,0,2.1223,2.1905,8.2836,8.2836,0,0,0,2.4255,1.2944,9.0323,9.0323,0,0,0,3.032.4978,21.34,21.34,0,0,1-2.5266,1.7922A10.4066,10.4066,0,0,1,8.6915,32.0606Z"></path></g></g></svg><span class="sr-only">Follow Progressive on Twitter</span></a></li><li><a href="https://www.youtube.com/user/progressive" class="youtube link-hover mr-2" data-ga-label="youtube"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.412065 50" focusable="false" aria-hidden="true"><title>youtube</title><path d="M 35.705078 0 C 35.705078 0 13.35386 0.0001149 7.765625 1.4707031 C 4.765625 2.2942325 2.2942325 4.7653952 1.4707031 7.8242188 C 0.0001149 13.412454 -2.9605947e-016 25 0 25 C 0 25 0.0001149 36.64637 1.4707031 42.175781 C 2.2942325 45.234605 4.7068015 47.647174 7.765625 48.470703 C 13.412684 50.000115 35.705078 50 35.705078 50 C 35.705078 50 58.058249 49.999885 63.646484 48.529297 C 66.705308 47.705767 69.117877 45.293199 69.941406 42.234375 C 71.411994 36.64614 71.412109 25.058594 71.412109 25.058594 C 71.412109 25.058594 71.470818 13.412454 69.941406 7.8242188 C 69.117877 4.7653952 66.705308 2.3528263 63.646484 1.5292969 C 58.058249 -0.000114879 35.705078 2.9605947e-016 35.705078 0 z M 28.587891 14.294922 L 47.175781 25 L 28.587891 35.705078 L 28.587891 14.294922 z "></path></svg><span class="sr-only">Follow Progressive on YouTube</span></a></li><li><a href="https://www.pinterest.com/progressiveins" class="pinterest link-hover" data-ga-label="pinterest"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.6009 49.8614"><title>pinterest</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M20.47,0C6.8623,0,0,9.7561,0,17.8921,0,22.8177,1.8646,27.2,5.8649,28.8326a.9865.9865,0,0,0,1.4339-.7179c.132-.5009.446-1.77.5851-2.2985A1.3859,1.3859,0,0,0,7.47,24.221a8.2645,8.2645,0,0,1-1.8895-5.6161c0-7.2382,5.4164-13.717,14.1011-13.717C27.3739,4.8879,31.6,9.587,31.6,15.8635c0,8.2579-3.6545,15.2274-9.0811,15.2274a4.4313,4.4313,0,0,1-4.5191-5.5165c.86-3.629,2.5276-7.5451,2.5276-10.1626,0-2.3451-1.259-4.3-3.8638-4.3-3.061,0-5.521,3.1683-5.521,7.413a11.0323,11.0323,0,0,0,.9125,4.5319S8.9189,36.3375,8.3727,38.6634c-1.0969,4.6315-.1646,10.3094-.0874,10.8831a.381.381,0,0,0,.6808.164c.284-.3689,3.9309-4.8727,5.1694-9.372.3516-1.2737,2.0145-7.8718,2.0145-7.8718.9942,1.8971,3.9034,3.57,6.9964,3.57,9.2054,0,15.4545-8.3931,15.4545-19.63C38.6009,7.912,31.4049,0,20.47,0Z"></path></g></g></svg> <span class="sr-only">Follow Progressive on Pinterest</span></a></li></ul><div class="search-form"><div class="search-field"><form id="search-form" class="mx-auto" method="get" action="https://61-www.dev.progressive.com/lifelanes//search"><label for="search-form">Search</label><input type="search" name="search-form" id="search" value="" class="border-0"><button class="search-submit border-0" id="search-form-submit" type="submit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.9803 21.9819" focusable="false" aria-hidden="true"><title>search</title><path d="M21.5409,19.4214l-4.36-4.36A9.51,9.51,0,1,0,15.06,17.1826l4.3595,4.36a1.5,1.5,0,0,0,2.1211-2.1211ZM4.8988,14.0933a6.5,6.5,0,1,1,9.1924,0A6.5089,6.5089,0,0,1,4.8988,14.0933Z"></path></svg><span class="sr-only">Search</span></button></form></div></div><p class="h4 mb-4" role="heading" aria-level="4">Life Lanes brought to you by</p><a href="https://www.progressive.com/" class="my-3 footer-logo"><svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 456.21 54.41" focusable="false" aria-hidden="true"><title>Progressive Logo</title><path d="M222.81,30.52c4.9-.51,8.41-2.82,10.39-6.92,1.62-3.34,4.12-8.75,4.14-8.81,2.48-5.12,1.72-8.25.64-10-1.62-2.59-4.79-3.51-7.2-3.51H206.23l-25.41,54h12.76l9.73-21.21,6.84,0a3.87,3.87,0,0,1,2.9,1.59c.82,1.36.6,3.44-.69,6.18-3.08,6.61-5.53,13.46-5.53,13.46h12.94a29,29,0,0,1,1.57-5.22c1-2.36,4-9.82,4-9.89C227.81,34.14,224.75,31.72,222.81,30.52Zm-1.35-8.91c-1.08,2.28-2.74,3.44-4.95,3.44h-8.9l6.75-14.7h9.74a1.75,1.75,0,0,1,1.32.7c.39.64.25,1.71-.4,3.1l-2.23,4.68Z" transform="translate(-1.27 -1)"></path><path class="cls-1" d="M86.61,30.52C91.51,30,95,27.69,97,23.59c1.62-3.34,4.12-8.75,4.15-8.81,2.48-5.12,1.72-8.25.64-10C100.17,2.23,97,1.31,94.58,1.31H70l-25.41,54H57.38l9.73-21.21,6.85,0a3.87,3.87,0,0,1,2.9,1.59c.83,1.36.6,3.44-.69,6.18-3.08,6.61-5.53,13.46-5.53,13.46H83.58a28.74,28.74,0,0,1,1.56-5.22c1-2.36,4-9.82,4-9.89C91.62,34.14,88.55,31.72,86.61,30.52ZM85.26,21.6C84.18,23.89,82.52,25,80.32,25h-8.9l6.94-14.7h9.54a1.75,1.75,0,0,1,1.32.7c.39.64.25,1.71-.4,3.1l-2.23,4.68Z" transform="translate(-1.27 -1)"></path><path class="cls-1" d="M146.53,14.74C151,5.16,145.94,1,139.5,1H124c-6.52,0-11.12,3.08-14.08,9.41-1.59,3.4-4.24,9-7.31,15.39L96.13,39.46c-6.51,13.7,3.23,16,8,16h9.79c9.81.1,14.64-2.67,18.43-10.57,2.54-5.28,6.06-12.82,9.8-20.81ZM133.8,13.22l-13,27.69c-1.81,3.82-3,4.47-5.81,4.47h-5.62c-1,0-3-.27-1.5-3.54,2.18-4.7,11.32-24.4,13.19-28.36,1.27-2.7,2.59-3.24,4.31-3.24h7C133.7,10.18,134.89,10.91,133.8,13.22Z" transform="translate(-1.27 -1)"></path><path class="cls-1" d="M167.79,25.33l-4.24,9h6.72l-3.78,8.17c-1.1,2.37-1.85,2.85-4.44,2.85h-6.68c-2,0-2.7-1-1.5-3.54,1.52-3.22,13.52-28.28,13.52-28.28,1.36-2.85,2.17-3.28,4.27-3.28h6.9c1.67,0,2.57.77,1.45,3-.25.49-3,6.5-3,6.5l12.17.09,2.77-5.95C196,5.19,192.38,1.12,184,1H170.78a16,16,0,0,0-15,9.41C153.37,15.54,142,39.46,142,39.46c-4.16,8.75-1.75,16,9.63,16h10.16c8.12.08,12.11-1.19,15.82-9.31l9.47-20.75Z" transform="translate(-1.27 -1)"></path><polygon class="cls-1" points="349.96 0.14 324.52 54.22 337.63 54.22 363.23 0.14 349.96 0.14"></polygon><polygon class="cls-1" points="395.73 0.15 366.04 47.79 381.06 0.15 367.31 0.15 354.71 54.22 372.45 54.22 409.52 0.15 395.73 0.15"></polygon><path class="cls-1" d="M295.45,36.46l-1.1-20c-.13-2.41.46-5.68,4.87-5.68h8.86l4.55-9.64h-15.1c-12,0-16,7.31-15.57,15.9.28,5.25,1,22.33,1,22.33.18,4.12-1.4,6-5.25,6h-10.1l-4.53,9.81h16.1C289.86,55.24,296.15,48.27,295.45,36.46Z" transform="translate(-1.27 -1)"></path><path class="cls-1" d="M324.54,16.48c-.13-2.41.46-5.68,4.87-5.68h8.86l4.55-9.64h-15.1c-9.92,0-16.14,5.42-15.57,15.9.29,5.25,1,22.33,1,22.33.19,4.12-1.39,6-5.25,6h-9.84l-4.53,9.81h15.84c11.74,0,16.88-8.4,16.26-18.78Z" transform="translate(-1.27 -1)"></path><path class="cls-1" d="M250.43,31.05h16.41l4.21-9H254.58l5.24-11.22,17,0s4.46-9.59,4.46-9.59H251.66l-25.27,54h32L263,45.45H243.59Z" transform="translate(-1.27 -1)"></path><path class="cls-1" d="M389.88,55.23h32l4.65-9.78H407.08l6.84-14.4h16.41l4.21-9H418.07l5.24-11.22,17,0s4.45-9.59,4.45-9.59H415.15Z" transform="translate(-1.27 -1)"></path><path class="cls-1" d="M51.7,27.13c1.07-2.21,3.19-6.79,5.6-12.11,4.23-9.36-1-13.69-6.55-13.71H26.47L1.27,55.39h13.1l8.8-18.94s7.4,0,12.76,0C44.1,36.51,48.37,34,51.7,27.13ZM44.94,14.59c-2.36,5-4.16,8.74-4.36,9.15C39.52,26,38,27,35.71,27H27.49l7.77-16.83h8.24C45.31,10.18,46.6,11.09,44.94,14.59Z" transform="translate(-1.27 -1)"></path><path class="cls-1" d="M455.35,4.91a1.2,1.2,0,0,0-.55-1.06,2.28,2.28,0,0,0-1.2-.24h-2.14V8.53h.6V6.26h1.1l1.41,2.27h.71L453.8,6.26C454.67,6.24,455.35,5.88,455.35,4.91ZM453,5.79h-.92V4h1.41c.61,0,1.28.09,1.28.85C454.74,5.9,453.67,5.79,453,5.79Z" transform="translate(-1.27 -1)"></path><path class="cls-1" d="M453.1,1.67a4.4,4.4,0,1,0,4.39,4.39A4.4,4.4,0,0,0,453.1,1.67Zm0,8.27A3.87,3.87,0,1,1,457,6.07,3.87,3.87,0,0,1,453.1,9.95Z" transform="translate(-1.27 -1)"></path></svg><span class="sr-only">Progressive Logo</span></a></div></div><div class="row"><div class="grid-l12"><div class="terms"><a href="https://www.progressive.com/privacy/" class="border-right" data-ga-label="privacy-and-security">Privacy &amp; Security</a><a href="https://www.progressive.com/copyright/" class="border-right" data-ga-label="terms-and-conditions">Terms of Use</a><a href="https://www.progressive.com/privacy/privacy-data-request/" class="border-right" data-ga-label="ca-notice-at-collection">CA Notice at Collection</a><a href="https://www.progressive.com/privacy/do-not-sell-my-information/" data-ga-label="do-not-sell">Do Not Sell or Share My Personal Information (CA Residents Only)</a></div></div></div></div><img src="https://siteserver.progressivecommercial.com/session/checkid/" width="1" height="1" alt="" style="${ssrRenderStyle({ "visibility": "hidden" })}"></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const default_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  components: {
    Header,
    Footer
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = resolveComponent("Header");
  const _component_NuxtPage = __nuxt_component_0$1;
  const _component_Footer = resolveComponent("Footer");
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "site" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="filler"></div>`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-f02f6ede.js.map
