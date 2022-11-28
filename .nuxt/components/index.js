export { default as NavigationBar } from '../../components/NavigationBar.vue'
export { default as PageContact } from '../../components/PageContact.vue'
export { default as PageCover } from '../../components/PageCover.vue'
export { default as PageFooter } from '../../components/PageFooter.vue'
export { default as PageIntro } from '../../components/PageIntro.vue'
export { default as PageSection } from '../../components/PageSection.vue'
export { default as TestimonialCarousel } from '../../components/TestimonialCarousel.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
