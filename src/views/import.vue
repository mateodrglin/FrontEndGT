<template>
  <div class="datas">
    <h1>Import Loot</h1>
  </div>
  <div class="box">
    <img class="loot1" src="@/assets/loot1.png" />
    <p class="text">Mark of Desperate Rebels</p>
    <input name="item1" placeholder="1" type="text" v-model="item1" /><br />
  </div>
  <div class="box">
    <img class="loot1" src="@/assets/bsarmor.png" />
    <p class="text">Black Stone (Armor)</p>
    <input name="item2" placeholder="1" type="text" v-model="item2" /><br />
  </div>
  <button @click="datas" type="submit" class="buttonsave">Save</button>
  <p v-if="result" class="resultm">Total {{ result }} Silver</p>
</template>
<script>
  export default {
    name: "import.vue",
    data() {
      return {
        value_a: null,
        value_b: null,
        result: null,
      };
    },
    methods: {
      datas() {
        this.result = this.item1 * 17500 + this.item2 * 151000;
      },
    },
  };
</script>
<style lang="scss">
  .loot1 {
    width: 35px;
    height: 35px;
  }
  .box {
    position: relative;
  }
  .text {
    position: absolute;
    top: 5px;
    bottom: -10;
    left: 300px;
    right: 880px;
    background: rgba(83, 83, 73, 0.744);
    color: #fff;
    visibility: hidden;
    opacity: 0;
  }
  .box:hover .text {
    visibility: visible;
    opacity: 1;
  }
  .buttonsave {
    background-color: rgba(234, 234, 86, 0.752);
  }
  .buttonsave:hover {
    background-color: yellow;
  }
</style>
