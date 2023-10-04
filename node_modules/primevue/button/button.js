this.primevue = this.primevue || {};
this.primevue.button = (function (Ripple, vue) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Ripple__default = /*#__PURE__*/_interopDefaultLegacy(Ripple);

    var script = {
        props: {
            label: {
                type: String
            },
            icon: {
                type: String
            },
            iconPos: {
                type: String,
                default: 'left'
            },
            badge: {
                type: String
            },
            badgeClass: {
                type: String,
                default: null
            }
        },
        computed: {
            buttonClass() {
                return {
                    'p-button p-component': true,
                    'p-button-icon-only': this.icon && !this.label,
                    'p-button-vertical': (this.iconPos === 'top' || this.iconPos === 'bottom') && this.label,
                    'p-disabled': this.$attrs.disabled
                }
            },
            iconClass() {
                return [
                    this.icon,
                    'p-button-icon',
                    {
                        'p-button-icon-left': this.iconPos === 'left' && this.label,
                        'p-button-icon-right': this.iconPos === 'right' && this.label,
                        'p-button-icon-top': this.iconPos === 'top' && this.label,
                        'p-button-icon-bottom': this.iconPos === 'bottom' && this.label
                    }
                ]
            },
            badgeStyleClass() {
                return [
                    'p-badge p-component', this.badgeClass, {
                        'p-badge-no-gutter': this.badge && String(this.badge).length === 1
                }]
            }
        },
        directives: {
            'ripple': Ripple__default['default']
        }
    };

    const _hoisted_1 = { class: "p-button-label" };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      const _directive_ripple = vue.resolveDirective("ripple");

      return vue.withDirectives((vue.openBlock(), vue.createBlock("button", {
        class: $options.buttonClass,
        type: "button"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          ($props.icon)
            ? (vue.openBlock(), vue.createBlock("span", {
                key: 0,
                class: $options.iconClass
              }, null, 2))
            : vue.createCommentVNode("", true),
          vue.createVNode("span", _hoisted_1, vue.toDisplayString($props.label||' '), 1),
          ($props.badge)
            ? (vue.openBlock(), vue.createBlock("span", {
                key: 1,
                class: $options.badgeStyleClass
              }, vue.toDisplayString($props.badge), 3))
            : vue.createCommentVNode("", true)
        ])
      ], 2)), [
        [_directive_ripple]
      ])
    }

    script.render = render;

    return script;

}(primevue.ripple, Vue));
