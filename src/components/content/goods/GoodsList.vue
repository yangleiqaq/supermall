<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" :goodsItem="item" :key="index" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  components: { GoodsListItem },
  methods: {},
  mounted() {},
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
