'use strict';

var utils = require('primevue/utils');
var Ripple = require('primevue/ripple');
var vue = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

var script = {
    props: {
		model: {
            type: Array,
            default: null
        }
    },
    mounted() {
        this.updateInkBar();
    },
    updated() {
        this.updateInkBar();
    },
    methods: {
        onItemClick(event, item, navigate) {
            if (item.disabled) {
                event.preventDefault();
                return;
            }

            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }

            if (item.to && navigate) {
                navigate(event);
            }
        },
        isActive(item) {
            return this.activeRoute === item.to;
        },
        getItemClass(item) {
            return ['p-tabmenuitem', item.class, {
                'p-highlight': this.isActive(item),
                'p-disabled': item.disabled
            }];
        },
        getItemIcon(item) {
            return ['p-menuitem-icon', item.icon];
        },
        visible(item) {
            return (typeof item.visible === 'function' ? item.visible() : item.visible !== false);
        },
        findActiveTabIndex() {
            if (this.model) {
                for (let i = 0; i < this.model.length; i++) {
                    if (this.isActive(this.model[i])) {
                        return i;
                    }
                }
            }

            return null;
        },
        updateInkBar() {
            let activeTabIndex = this.findActiveTabIndex();
            if (activeTabIndex !== null) {
                let tabHeader = this.$refs.nav.children[activeTabIndex];
                this.$refs.inkbar.style.width = utils.DomHandler.getWidth(tabHeader) + 'px';
                this.$refs.inkbar.style.left =  utils.DomHandler.getOffset(tabHeader).left - utils.DomHandler.getOffset(this.$refs.nav).left + 'px';
            }
            else {
                this.$refs.inkbar.style.width = '0px';
                this.$refs.inkbar.style.left =  '0px';
            }

        }
    },
    computed: {
        activeRoute() {
            return this.$route.path;
        }
    },
    directives: {
        'ripple': Ripple__default['default']
    }
};

const _hoisted_1 = { class: "p-tabmenu p-component" };
const _hoisted_2 = {
  ref: "nav",
  class: "p-tabmenu-nav p-reset",
  role: "tablist"
};
const _hoisted_3 = { class: "p-menuitem-text" };
const _hoisted_4 = { class: "p-menuitem-text" };
const _hoisted_5 = {
  ref: "inkbar",
  class: "p-tabmenu-ink-bar"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = vue.resolveComponent("router-link");
  const _directive_ripple = vue.resolveDirective("ripple");

  return (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
    vue.createVNode("ul", _hoisted_2, [
      (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.model, (item, i) => {
        return (vue.openBlock(), vue.createBlock(vue.Fragment, {
          key: item.label + '_' + i.toString()
        }, [
          ($options.visible(item))
            ? (vue.openBlock(), vue.createBlock("li", {
                key: 0,
                class: $options.getItemClass(item),
                style: item.style,
                role: "tab",
                "aria-selected": $options.isActive(item),
                "aria-expanded": $options.isActive(item)
              }, [
                (item.to && !item.disabled)
                  ? (vue.openBlock(), vue.createBlock(_component_router_link, {
                      key: 0,
                      to: item.to,
                      custom: ""
                    }, {
                      default: vue.withCtx(({navigate, href}) => [
                        vue.withDirectives(vue.createVNode("a", {
                          href: href,
                          class: "p-menuitem-link",
                          onClick: $event => ($options.onItemClick($event, item, navigate)),
                          role: "presentation"
                        }, [
                          (item.icon)
                            ? (vue.openBlock(), vue.createBlock("span", {
                                key: 0,
                                class: $options.getItemIcon(item)
                              }, null, 2))
                            : vue.createCommentVNode("", true),
                          vue.createVNode("span", _hoisted_3, vue.toDisplayString(item.label), 1)
                        ], 8, ["href", "onClick"]), [
                          [_directive_ripple]
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"]))
                  : vue.withDirectives((vue.openBlock(), vue.createBlock("a", {
                      key: 1,
                      href: item.url,
                      class: "p-menuitem-link",
                      target: item.target,
                      onClick: $event => ($options.onItemClick($event, item)),
                      role: "presentation",
                      tabindex: item.disabled ? null : '0'
                    }, [
                      (item.icon)
                        ? (vue.openBlock(), vue.createBlock("span", {
                            key: 0,
                            class: $options.getItemIcon(item)
                          }, null, 2))
                        : vue.createCommentVNode("", true),
                      vue.createVNode("span", _hoisted_4, vue.toDisplayString(item.label), 1)
                    ], 8, ["href", "target", "onClick", "tabindex"])), [
                      [_directive_ripple]
                    ])
              ], 14, ["aria-selected", "aria-expanded"]))
            : vue.createCommentVNode("", true)
        ], 64))
      }), 128)),
      vue.createVNode("li", _hoisted_5, null, 512)
    ], 512)
  ]))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.p-tabmenu-nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.p-tabmenu-nav a {\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    position: relative;\n    text-decoration: none;\n    text-decoration: none;\n    overflow: hidden;\n}\n.p-tabmenu-nav a:focus {\n    z-index: 1;\n}\n.p-tabmenu-nav .p-menuitem-text {\n    line-height: 1;\n}\n.p-tabmenu-ink-bar {\n    display: none;\n    z-index: 1;\n}\n";
styleInject(css_248z);

script.render = render;

module.exports = script;
