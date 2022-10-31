<template>
  <div class="datas">
    <h1>Import Loot</h1>
  </div>
  <div class="box">
    <img class="loot1" src="@/assets/loot1.png" />
    <p class="text">Mark of Desperate Rebels</p>
    <input name="item1" placeholder="0" type="number" v-model="item1" /><br />
  </div>
  <div class="box">
    <img class="loot1" src="@/assets/bsarmor.png" />
    <p class="text">Black Stone (Armor)</p>
    <input name="item2" placeholder="0" type="number" v-model="item2" /><br />
  </div>
  <div class="box">
    <img class="loot1" src="@/assets/bsweapon.png" />
    <p class="text">Black Stone (Weapon)</p>
    <input name="item3" placeholder="0" type="number" v-model="item3" /><br />
  </div>
  <div class="box">
    <img class="loot1" src="@/assets/sbmc.png" />
    <p class="text">Sealed Black Magic Crystal</p>
    <input name="item4" placeholder="0" type="number" v-model="item4" /><br />
  </div>
  <div class="box">
    <img class="loot1" src="@/assets/hoaf.png" />
    <p class="text">Heart of the Arid Forest</p>
    <input name="item5" placeholder="0" type="number" v-model="item5" /><br />
  </div>
  <div class="box">
    <img class="loot1" src="@/assets/vflame.png" />
    <p class="text">Valtarra's Flame</p>
    <input name="item6" placeholder="0" type="number" v-model="item6" /><br />
  </div>
  <div class="box">
    <img class="loot1" src="@/assets/Sotfn.png" />
    <p class="text">Shard of the Furious Night</p>
    <input name="item7" placeholder="0" type="number" v-model="item7" /><br />
  </div>
  <div class="box">
    <img class="loot1" src="@/assets/sov.png" />
    <p class="text">Seed of Void</p>
    <input name="item8" placeholder="0" type="number" v-model="item8" /><br />
  </div>
  <div class="box">
    <img class="loot1" src="@/assets/tos.png" />
    <p class="text">Trace of Savagery</p>
    <input name="item9" placeholder="0" type="number" v-model="item9" /><br />
  </div>
  <div class="box">
    <img class="loot1" src="@/assets/mopm.png" />
    <p class="text">Mass of Pure Magic</p>
    <input name="item10" placeholder="0" type="number" v-model="item10" /><br />
  </div>
  <button @click="datas" type="submit" class="buttonsave">
    Calculate & Save
  </button>
  <p v-if="result" class="resultm">Total {{ result }} Silver</p>
</template>
<script>
  export default {
    name: "import.vue",
    data() {
      return {
        result: null,
      };
    },
    methods: {
      datas() {
        this.result =
          this.item1 * 17500 +
          this.item2 * 151000 +
          this.item3 * 152000 +
          this.item4 * 1050000 +
          this.item5 * 2601000 +
          this.item6 * 3000000 +
          this.item7 * 9841740 +
          this.item8 * 10000000 +
          this.item9 * 19400 +
          this.item10 * 50000;
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
  .resultm {
    color: white;
    background: rgba(83, 83, 73, 0.744);
    font-size: 20px;
  }
</style>
