<template>
  <div id="home">
    <nav-bar class="home-nav"><template v-slot:center>购物街</template></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @tabClick="tabClick"
    ></tab-control>
    <goods-list :goods="showGoods" />
    <ul>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
      <li>wwww</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/Navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    // 事件监听
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: sticky;
  z-index: 999;
  top: 0;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 10;
}
</style>
