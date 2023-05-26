import { Navigation, Pagination, Mousewheel, Keyboard, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const swiper_min = "";
const navigation_min = "";
const pagination_min = "";
const SwiperSlider_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Mousewheel, Keyboard, A11y]
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(ssrRenderComponent(_component_swiper, mergeProps({
    cssMode: true,
    navigation: true,
    pagination: true,
    mousewheel: true,
    keyboard: true,
    modules: $setup.modules,
    class: "mySwiper"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Slide 1`);
            } else {
              return [
                createTextVNode("Slide 1")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Slide 2`);
            } else {
              return [
                createTextVNode("Slide 2")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Slide 3`);
            } else {
              return [
                createTextVNode("Slide 3")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Slide 4`);
            } else {
              return [
                createTextVNode("Slide 4")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createTextVNode("Slide 1")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createTextVNode("Slide 2")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createTextVNode("Slide 3")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createTextVNode("Slide 4")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SwiperSlider.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const ArticleCta_vue_vue_type_style_index_0_scoped_54b19799_lang = "";
const _sfc_main$2 = {
  name: "ArticleCta",
  props: {
    header: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    ctaLink: {
      type: String
    },
    ctaText: {
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {}
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-campaign" }, _attrs))} data-v-54b19799><div class="wrap" data-v-54b19799><div class="campaign-header" data-v-54b19799><h2 class="h3 text-uppercase" data-v-54b19799>${ssrInterpolate($props.header)}</h2><span class="sr-only" tabindex="0" data-v-54b19799>${ssrInterpolate($props.header)}</span></div><div class="grid" data-v-54b19799><div class="grid-l6 grid-m6 grid-s12" data-v-54b19799><div class="fold" style="${ssrRenderStyle({ "background-image": "url(https://www.progressive.com/lifelanes/wp-content/uploads/2021/03/190923_19D30015_Home13-7_Edit2-768x384.jpg)" })}" data-v-54b19799></div></div><div class="campaign-details grid-l6 grid-m6 grid-s12 mt-3 px-5" data-v-54b19799><h3 class="h2" data-v-54b19799>${ssrInterpolate($props.title)}</h3><p data-v-54b19799>${ssrInterpolate($props.description)}</p><p class="read-more" data-v-54b19799><a${ssrRenderAttr("href", `${$props.ctaLink}`)} data-v-54b19799>${ssrInterpolate($props.ctaText)}</a></p></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArticleCta.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-54b19799"]]);
const ArticleTile_vue_vue_type_style_index_0_scoped_50833580_lang = "";
const _sfc_main$1 = {
  name: "ArticleTile",
  props: {
    articles: {
      type: Array
    }
  },
  data() {
    return {};
  },
  methods: {}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap" }, _attrs))} data-v-50833580><div class="article-container grid" data-v-50833580><!--[-->`);
  ssrRenderList($props.articles, (article) => {
    _push(`<div class="${ssrRenderClass([article.classOverride, "grid-l4 grid-m6 grid-s12"])}" data-v-50833580><div class="article-block row regular" data-v-50833580><div class="image px-0" data-v-50833580><a${ssrRenderAttr("href", `${article.url}`)} focusable="false" aria-hidden="true" tabindex="-1" data-v-50833580></a></div><div class="copy" data-v-50833580><div class="categories" data-v-50833580><a${ssrRenderAttr("href", `${article.categoryUrl}`)} data-v-50833580>${ssrInterpolate(article.categoryTitle)}</a></div><div class="reading-time" data-v-50833580><span class="span-reading-time" data-v-50833580>${ssrInterpolate(article.readingTime)}</span> min </div><div class="body" data-v-50833580><div class="title" data-v-50833580><p class="h4" data-v-50833580><a${ssrRenderAttr("href", `${article.url}`)} data-v-50833580>${ssrInterpolate(article.title)}</a></p></div></div><button class="save-me" data-v-50833580><div class="sr-only" data-v-50833580><span data-v-50833580>Save</span> ${ssrInterpolate(article.title)}</div></button></div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArticleTile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-50833580"]]);
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
  components: {
    ArticleCta: __nuxt_component_1,
    ArticleTile: __nuxt_component_2
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper_slider = __nuxt_component_0;
  const _component_article_cta = __nuxt_component_1;
  const _component_article_tile = __nuxt_component_2;
  _push(`<main${ssrRenderAttrs(mergeProps({
    id: "main",
    tabindex: "-1"
  }, _attrs))}><h4> sick slider test </h4>`);
  _push(ssrRenderComponent(_component_swiper_slider, null, null, _parent));
  _push(ssrRenderComponent(_component_article_cta, {
    header: "Something to Discover",
    title: "Progressive Home",
    description: "Safety, maintenance, and DIY tips",
    ctaLink: "/",
    ctaText: "View more articles"
  }, null, _parent));
  _push(ssrRenderComponent(_component_article_tile, { articles: [
    {
      title: "I wanna rock and roll all night... and party every day",
      url: "/",
      image: "300x167.jpeg",
      categoryTitle: "Turning Points",
      categoryUrl: "turning-points",
      readingTime: "4"
    },
    {
      title: "Avoid going to jail - 47 hacks for avoiding jailtime",
      url: "/",
      image: "300x167.jpeg",
      categoryTitle: "On the Road",
      categoryUrl: "on-the-road",
      readingTime: "4"
    },
    {
      title: "How to know if your cat trained you",
      url: "/",
      image: "300x167.jpeg",
      categoryTitle: "Adventure",
      categoryUrl: "adventure",
      readingTime: "4"
    },
    {
      title: "The inner machinations of my mind are an enigma",
      url: "/",
      image: "300x167.jpeg",
      categoryTitle: "Household",
      categoryUrl: "household",
      readingTime: "4"
    },
    {
      title: "From Fear Factor to podcasting: How Joe Rogan lost his mind",
      url: "/",
      image: "300x167.jpeg",
      categoryTitle: "Turning Points",
      categoryUrl: "turning-points",
      readingTime: "4"
    },
    {
      title: "How to train your dog to sniff out weird dudes",
      url: "/",
      image: "300x167.jpeg",
      categoryTitle: "On the Road",
      categoryUrl: "on-the-road",
      readingTime: "4"
    }
  ] }, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-e57995b3.js.map
