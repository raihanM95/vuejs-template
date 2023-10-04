import { openBlock, createBlock, toDisplayString } from 'vue';

var script = {
    props: {
        value: null,
        severity: null,
        size: null
    },
    computed: {
        containerClass() {
            return this.$slots.default ? 'p-overlay-badge': this.badgeClass;
        },
        badgeClass() {
            return ['p-badge p-component', {
                'p-badge-no-gutter': this.value && String(this.value).length === 1,
                'p-badge-dot': !this.value,
                'p-badge-lg': this.size === 'large',
                'p-badge-xl': this.size === 'xlarge',
                'p-badge-info': this.severity === 'info',
                'p-badge-success': this.severity === 'success',
                'p-badge-warning': this.severity === 'warning',
                'p-badge-danger': this.severity === 'danger'
            }];
        }
    }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("span", { class: $options.badgeClass }, toDisplayString($props.value), 3))
}

script.render = render;

export default script;
