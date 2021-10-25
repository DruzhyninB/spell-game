export default {
    beforeMount (el, binding) {
        el.__vHoverListener__ = (event) => {
            let isHover = event.type === 'mouseenter';
            if (binding.value) {
                binding.value(isHover);
            }
        }
        el.addEventListener('mouseenter', el.__vHoverListener__);
        el.addEventListener('mouseleave', el.__vHoverListener__);
    },
    beforeUnmount (el) {
        el.removeEventListener('mouseenter', el.__vHoverListener__);
        el.removeEventListener('mouseleave', el.__vHoverListener__);
    },
}