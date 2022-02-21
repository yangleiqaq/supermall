<template>
  <div class="tab-bar-item" @click="ItemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :class="{ active: isActive }"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
  },

  data() {
    return {
      // isActive:true
    };
  },
  computed: {
    isActive() {
      // return this.$route.path==this.path
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },
  methods: {
    ItemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active {
  color: red;
}
</style>
