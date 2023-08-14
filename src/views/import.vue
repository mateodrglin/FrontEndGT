<template>
  <div class="datas">
    <h1>Import Loot</h1>
  </div>
  <div class="bbox">
    <div class="box">
      <img class="loot1" src="@/assets/loot1.png" />
      <p class="text">Mark of Desperate Rebels</p>
      <input
        name="item1"
        placeholder="0"
        type="number"
        min="0"
        v-model="item1"
      /><br />
    </div>
    <div class="box">
      <img class="loot1" src="@/assets/bsarmor.png" />
      <p class="text">Black Stone (Armor)</p>
      <input
        name="item2"
        placeholder="0"
        type="number"
        min="0"
        v-model="item2"
      /><br />
    </div>
    <div class="box">
      <img class="loot1" src="@/assets/bsweapon.png" />
      <p class="text">Black Stone (Weapon)</p>
      <input
        name="item3"
        placeholder="0"
        type="number"
        min="0"
        v-model="item3"
      /><br />
    </div>
    <div class="box">
      <img class="loot1" src="@/assets/sbmc.png" />
      <p class="text">Sealed Black Magic Crystal</p>
      <input
        name="item4"
        placeholder="0"
        type="number"
        min="0"
        v-model="item4"
      /><br />
    </div>
    <div class="box">
      <img class="loot1" src="@/assets/hoaf.png" />
      <p class="text">Heart of the Arid Forest</p>
      <input
        name="item5"
        placeholder="0"
        type="number"
        min="0"
        v-model="item5"
      /><br />
    </div>
    <div class="box">
      <img class="loot1" src="@/assets/vflame.png" />
      <p class="text">Valtarra's Flame</p>
      <input
        name="item6"
        placeholder="0"
        type="number"
        min="0"
        v-model="item6"
      /><br />
    </div>
    <div class="box">
      <img class="loot1" src="@/assets/Sotfn.png" />
      <p class="text">Shard of the Furious Night</p>
      <input
        name="item7"
        placeholder="0"
        type="number"
        min="0"
        v-model="item7"
      /><br />
    </div>
    <div class="box">
      <img class="loot1" src="@/assets/sov.png" />
      <p class="text">Seed of Void</p>
      <input
        name="item8"
        placeholder="0"
        type="number"
        min="0"
        v-model="item8"
      /><br />
    </div>
    <div class="box">
      <img class="loot1" src="@/assets/tos.png" />
      <p class="text">Trace of Savagery</p>
      <input
        name="item9"
        placeholder="0"
        type="number"
        min="0"
        v-model="item9"
      /><br />
    </div>
    <div class="box">
      <img class="loot1" src="@/assets/mopm.png" />
      <p class="text">Mass of Pure Magic</p>
      <input
        name="item10"
        placeholder="0"
        type="number"
        min="0"
        v-model="item10"
      /><br />
    </div>
  </div>
  <div class="hours-box">
    <p class="hours-text">Hours Spent Grinding</p>
    <div class="hours-box">
      <input
        name="hours"
        placeholder="0"
        type="number"
        min="0"
        v-model="hours"
      /><br />
    </div>
  </div>

  <button @click="calculateAndSave" type="submit" class="buttonsave">
    Calculate & Save
  </button>
  <div class="result-container">
    <div class="total-silver-text">Total Silver Earned</div>
    <p v-if="total > 0" class="resultm">
      Total {{ total.toLocaleString() }} Silver
    </p>
    <div class="average-silver-text">Average Silver per Hour</div>
    <p v-if="averageSilverPerHour > 0" class="average-silver">
      Average {{ averageSilverPerHour.toLocaleString() }} Silver per Hour
    </p>
    <div class="total-hours-text">Total Hours</div>
    <p v-if="hours > 0" class="total-hours">{{ hours }} Hours</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item1: null,
      item2: null,
      item3: null,
      item4: null,
      item5: null,
      item6: null,
      item7: null,
      item8: null,
      item9: null,
      item10: null,
      total: null,
      hours: null,
      averageSilverPerHour: null,
    };
  },
  methods: {
    calculateAndSave() {
      const prices = {
        item1: 17500,
        item2: 151000,
        item3: 152000,
        item4: 1050000,
        item5: 2601000,
        item6: 3000000,
        item7: 9841740,
        item8: 10000000,
        item9: 19400,
        item10: 50000,
      };

      this.total =
        this.item1 * prices.item1 +
        this.item2 * prices.item2 +
        this.item3 * prices.item3 +
        this.item4 * prices.item4 +
        this.item5 * prices.item5 +
        this.item6 * prices.item6 +
        this.item7 * prices.item7 +
        this.item8 * prices.item8 +
        this.item9 * prices.item9 +
        this.item10 * prices.item10;
      const hoursBase = this.hours || 1;
      this.averageSilverPerHour = this.total / hoursBase;
    },
  },
};
</script>

<style lang="scss">
.loot1 {
  width: 40px;
  height: 40px;
  margin-right: 5px;
  margin-bottom: 5px;
}
.bbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.box {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
}

.hours-box {
  margin-top: 1px;
  text-align: center;
}

.hours-text {
  display: inline-block;
  background: rgba(83, 83, 73, 0.744);
  color: #fff;
  padding: 5px;
  position: relative;
  top: 7px;
}

.text {
  position: absolute;
  left: -100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 35px;
  visibility: hidden;
  opacity: 0;
  background: rgba(234, 234, 86, 0.752);
  color: black;
}

.box:hover .text {
  visibility: visible;
  opacity: 1;
}
.buttonsave {
  background-color: rgba(234, 234, 86, 0.752);
  margin-top: 7px;
}
.buttonsave:hover {
  background-color: yellow;
}
.result-container {
  position: absolute;
  top: 15%;
  right: 20%;
  text-align: right;
}

.total-silver-text,
.average-silver-text,
.total-hours-text {
  font-size: 20px;
  color: black;
  background-color: yellow;
  display: block;
  margin-bottom: 5px;
  padding: 2px;
}

.resultm,
.average-silver {
  color: white;
  background: rgba(83, 83, 73, 0.744);
  font-size: 20px;
  padding: 5px;
}

.total-hours {
  font-size: 20px;
  color: white;
  background: rgba(83, 83, 73, 0.744);
  padding: 5px;
}
</style>
