<template>
  <component
    v-bind="attrs"
    v-on="$listeners"
    :is="isExternal ? 'a' : 'router-link'"
    :to="isExternal ? undefined : to"
    :href="isExternal ? to : undefined"
    :target="isExternal ? '_blank' : undefined"
  >
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    to: String,
    isExternal: String
  },
  computed: {
    attrs() {
      const { href: _, ...attrs } = this.$attrs;
      return attrs;
    }
  }
};
</script>
