<template>
  <div class="spot-container">
    <div class="spot" @click="selectSpot(1)">Castle Ruins</div>
    <div class="spot" @click="selectSpot(2)">Orc Camp</div>
    <div class="spot" @click="selectSpot(3)">Bloody Monastery</div>
  </div>
  <div v-if="selectedSpot === 1" class="datas">
    <!-- Castle Ruins spot -->
    <h1>Import Loot for Castle Ruins</h1>
    <div class="bbox">
      <div class="box">
        <img class="loot1" src="@/assets/loot1.png" />
        <p class="text">Mark of Desperate Rebels</p>
        <input
          name="item1"
          placeholder="0"
          type="number"
          min="0"
          v-model="items[1].item1"
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
          v-model="items[1].item2"
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
          v-model="items[1].item3"
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
          v-model="items[1].item4"
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
          v-model="items[1].item5"
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
          v-model="items[1].item6"
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
          v-model="items[1].item7"
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
          v-model="items[1].item8"
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
          v-model="items[1].item9"
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
          v-model="items[1].item10"
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
          v-model="hoursSpent[selectedSpot]"
        /><br />
      </div>
    </div>
    <button @click="calculateAndSave" type="submit" class="buttonsave">
      Calculate & Save
    </button>
  </div>

  <div v-if="selectedSpot === 2" class="datas">
    <!-- Orc Camp Spot -->
    <h1>Import Loot for Orc Camp</h1>
    <div class="bbox">
      <div class="box">
        <img class="loot1" src="@/assets/OOMush.png" />
        <p class="text">Oily Orange Mushroom</p>
        <input
          name="item1_spot2"
          placeholder="0"
          type="number"
          min="0"
          v-model="items[2].item1_spot2"
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
          v-model="items[2].item2"
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
          v-model="items[2].item3"
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
          v-model="items[2].item4"
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
          v-model="items[2].item5"
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
          v-model="items[2].item6"
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
          v-model="items[2].item7"
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
          v-model="items[2].item8"
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
          v-model="items[2].item9"
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
          v-model="items[2].item10"
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
          v-model="hoursSpent[selectedSpot]"
        /><br />
      </div>
    </div>
    <button @click="calculateAndSave" type="submit" class="buttonsave">
      Calculate & Save
    </button>
  </div>

  <div v-if="selectedSpot === 3" class="datas">
    <!-- Bloody Monastery-->
    <h1>Import Loot for Bloody Monastery</h1>
    <div class="bbox">
      <div class="box">
        <img class="loot1" src="@/assets/pobf.png" />
        <p class="text">Proof of Blind Faith</p>
        <input
          name="item1_spot3"
          placeholder="0"
          type="number"
          min="0"
          v-model="items[3].item1_spot3"
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
          v-model="items[3].item2"
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
          v-model="items[3].item3"
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
          v-model="items[3].item4"
        /><br />
      </div>
      <div class="box">
        <img class="loot1" src="@/assets/narcl.png" />
        <p class="text">Narc's Lightning</p>
        <input
          name="item5_spot3"
          placeholder="0"
          type="number"
          min="0"
          v-model="items[3].item5_spot3"
        /><br />
      </div>
      <div class="box">
        <img class="loot1" src="@/assets/mnail.png" />
        <p class="text">Moon's Split Nail</p>
        <input
          name="item6_spot3"
          placeholder="0"
          type="number"
          min="0"
          v-model="items[3].item6_spot3"
        /><br />
      </div>
      <div class="box">
        <img class="loot1" src="@/assets/sdn.png" />
        <p class="text">Shard of the Drained Night</p>
        <input
          name="item7_spot3"
          placeholder="0"
          type="number"
          min="0"
          v-model="items[3].item7_spot3"
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
          v-model="items[3].item8"
        /><br />
      </div>
      <div class="box">
        <img class="loot1" src="@/assets/tob.png" />
        <p class="text">Trace of Battle</p>
        <input
          name="item9_spot3"
          placeholder="0"
          type="number"
          min="0"
          v-model="items[3].item9_spot3"
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
          v-model="items[3].item10"
        /><br />
      </div>
      <div class="box">
        <img class="loot1" src="@/assets/ctobs.png" />
        <p class="text">Cold Tears of the Black Sun</p>
        <input
          name="item11_spot3"
          placeholder="0"
          type="number"
          min="0"
          v-model="items[3].item11_spot3"
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
          v-model="hoursSpent[selectedSpot]"
        /><br />
      </div>
    </div>
    <button @click="calculateAndSave" type="submit" class="buttonsave">
      Calculate & Save
    </button>
  </div>

  <!-- desna strana total -->
  <div v-if="!selectedSpot" class="datas">
    <h1>Please Choose a spot</h1>
  </div>

  <div class="result-container">
    <div class="total-silver-text">Total Silver Earned</div>
    <p class="resultm">
      Total
      {{ total > 0 ? total.toLocaleString() : "-" }} Silver
    </p>

    <div class="average-silver-text">Average Silver per Hour</div>
    <p class="average-silver">
      Average
      {{
        averageSilverPerHour > 0 ? averageSilverPerHour.toLocaleString() : "-"
      }}
      Silver per Hour
    </p>
    <div class="total-hours-text">Total Hours</div>
    <p class="total-hours">
      {{ accumulatedHours > 0 ? accumulatedHours : "-" }}
      Hours
    </p>
  </div>
  <!--lijeva strana last session-->
  <div class="session-result-container">
    <div class="session-total-silver-text">Last Session Silver Earned</div>
    <p class="session-resultm">
      {{ lastSessionTotal > 0 ? lastSessionTotal.toLocaleString() : "-" }}
      Silver
    </p>
    <div class="session-average-silver-text">
      Last Session Average Silver per Hour
    </div>
    <p class="session-average-silver">
      {{
        lastSessionTotal > 0 && lastSessionHours > 0
          ? (lastSessionTotal / lastSessionHours).toLocaleString()
          : "-"
      }}
      Silver per Hour
    </p>
    <div class="session-total-hours-text">Last Session Hours</div>
    <p class="session-total-hours">
      {{ lastSessionHours > 0 ? lastSessionHours : "-" }} Hours
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: {
        1: {
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
        },
        2: {
          item1_spot2: null,
          item2: null,
          item3: null,
          item4: null,
          item5: null,
          item6: null,
          item7: null,
          item8: null,
          item9: null,
          item10: null,
        },
        3: {
          item1_spot3: null,
          item2: null,
          item3: null,
          item4: null,
          item5_spot3: null,
          item6_spot3: null,
          item7_spot3: null,
          item8: null,
          item9_spot3: null,
          item10: null,
          item11_spot3: null,
        },
      },
      hoursSpent: {
        1: null,
        2: null,
        3: null,
      },
      selectedSpot: null,
      sessionTotal: 0,
      accumulatedTotal: 0,
      accumulatedHours: 0,
      lastSessionTotal: 0,
      lastSessionHours: 0,
    };
  },
  computed: {
    total() {
      return this.accumulatedTotal;
    },
    averageSilverPerHour() {
      let average =
        this.accumulatedHours > 0
          ? this.accumulatedTotal / this.accumulatedHours
          : 0;
      return Math.round(average);
    },
  },
  methods: {
    selectSpot(spotNumber) {
      this.selectedSpot = spotNumber;
    },

    resetFields() {
      for (let item in this.items[this.selectedSpot]) {
        this.items[this.selectedSpot][item] = null;
      }
      this.hoursSpent[this.selectedSpot] = null;
    },
    calculateAndSave() {
      let currentTotal = 0;
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
        item1_spot2: 18500,
        item1_spot3: 19000,
        item5_spot3: 3000000,
        item6_spot3: 183000000,
        item7_spot3: 14649855,
        item9_spot3: 135000,
        item11_spot3: 30000,
      };
      this.lastSessionTotal = currentTotal;
      this.lastSessionHours = parseFloat(
        this.hoursSpent[this.selectedSpot] || 0
      );

      const currentItems = this.items[this.selectedSpot];
      for (let item in currentItems) {
        if (prices[item]) {
          currentTotal += (currentItems[item] || 0) * prices[item];
        }
      }

      // last session
      this.lastSessionTotal = currentTotal;
      this.lastSessionHours = parseFloat(
        this.hoursSpent[this.selectedSpot] || 0
      );

      // total
      this.accumulatedTotal += currentTotal;
      this.accumulatedHours += this.lastSessionHours;

      // reset after save and calc
      this.resetFields();
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
  top: 25%;
  right: 5%;
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
.spot-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .spot {
    padding: 10px 20px;
    margin: 0 10px;
    border: 1px solid #000;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: rgba(234, 234, 86, 0.752);
    }
  }
}
.session-result-container {
  position: absolute;
  top: 25%;
  left: 5%;
  text-align: left;

  .session-total-silver-text,
  .session-average-silver-text,
  .session-total-hours-text {
    font-size: 20px;
    color: black;
    background-color: yellow;
    display: block;
    margin-bottom: 5px;
    padding: 2px;
  }

  .session-resultm,
  .session-average-silver {
    color: white;
    background: rgba(83, 83, 73, 0.744);
    font-size: 20px;
    padding: 5px;
  }

  .session-total-hours {
    font-size: 20px;
    color: white;
    background: rgba(83, 83, 73, 0.744);
    padding: 5px;
  }
}
</style>
