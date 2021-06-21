<template>
  <div class="icon-wrapper">
    <svg class="icon">
      <use :href="iconName"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String,
    prefix: {
      type: String,
      default: 'icon'
    }
  },
  setup(ctx) {
    const iconName = `#${ctx.prefix}${ctx.name}`;
    return {
      iconName
    }
  }
}
</script>
<style lang="scss" scoped>
.icon-wrapper {
  display: inline-block;
}
.icon {
  width: 100%;
  height: 100%;
  fill: currentColor;
  overflow: hidden;
}
</style>
