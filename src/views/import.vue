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

        <input v-model="applyItem1Discount" type="checkbox" /> Apply discount
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
        <input type="checkbox" v-model="item5_discount" /> Apply Discount<br />
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
        <br />
        <input type="checkbox" v-model="item5_discount" /> Apply Discount<br />
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
        <input type="checkbox" v-model="item4_discount" /> Apply Discount<br />
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
        <input type="checkbox" v-model="item5_discount" /> Apply Discount<br />
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
        <input type="checkbox" v-model="item6_discount" /> Apply Discount<br />
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
        <input type="checkbox" v-model="item7_discount" /> Apply Discount<br />
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
        <input type="checkbox" v-model="item8_discount" /> Apply Discount<br />
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
        <input type="checkbox" v-model="item9_discount" /> Apply Discount<br />
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
        <input type="checkbox" v-model="item10_discount" /> Apply Discount<br />
      </div>
    </div>
    <div class="time-input-container">
      <div class="hours-box">
        <p class="hours-text">Hours</p>
        <input
          name="hours"
          placeholder="0"
          type="number"
          min="0"
          v-model="hoursSpent[selectedSpot]"
        />
      </div>
      <div class="minutes-box">
        <p class="minutes-text">Minutes</p>
        <input
          name="minutes"
          placeholder="0"
          type="number"
          min="0"
          max="59"
          v-model="minutesSpent[selectedSpot]"
        />
        <div v-if="minuteError[selectedSpot]" class="error">
          {{ minuteError[selectedSpot] }}
        </div>
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
        <input type="checkbox" v-model="item1_spot2_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="item2_discount" /> Apply Discount<br />
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
        <input type="checkbox" v-model="item3_discount" /> Apply Discount<br />
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
        <input type="checkbox" v-model="item4_discount" /> Apply Discount<br />
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
        <input type="checkbox" v-model="item5_discount" /> Apply Discount<br />
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
        <input type="checkbox" v-model="item6_discount" /> Apply Discount<br />
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
        <input type="checkbox" v-model="item7_discount" /> Apply Discount<br />
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
        <input type="checkbox" v-model="item8_discount" /> Apply Discount<br />
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
        <input type="checkbox" v-model="item9_discount" /> Apply Discount<br />
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
        <input type="checkbox" v-model="item10_discount" /> Apply Discount<br />
      </div>
    </div>
    <div class="time-input-container">
      <div class="hours-box">
        <p class="hours-text">Hours</p>
        <input
          name="hours"
          placeholder="0"
          type="number"
          min="0"
          v-model="hoursSpent[selectedSpot]"
        />
      </div>
      <div class="minutes-box">
        <p class="minutes-text">Minutes</p>
        <input
          name="minutes"
          placeholder="0"
          type="number"
          min="0"
          max="59"
          v-model="minutesSpent[selectedSpot]"
        />
        <div v-if="minuteError[selectedSpot]" class="error">
          {{ minuteError[selectedSpot] }}
        </div>
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
        <input type="checkbox" v-model="item1_spot3_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="item2_discount" /> Apply Discount<br />
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
        <input type="checkbox" v-model="item3_discount" /> Apply Discount<br />
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
        <input type="checkbox" v-model="item4_discount" /> Apply Discount<br />
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
        <input type="checkbox" v-model="item5_spot3_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="item6_spot3_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="item7_spot3_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="item8_discount" /> Apply Discount<br />
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
        <input type="checkbox" v-model="item9_spot3_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="item10_spot3_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="item11_spot3_discount" /> Apply
        Discount<br />
      </div>
    </div>
    <div class="time-input-container">
      <div class="hours-box">
        <p class="hours-text">Hours</p>
        <input
          name="hours"
          placeholder="0"
          type="number"
          min="0"
          v-model="hoursSpent[selectedSpot]"
        />
      </div>
      <div class="minutes-box">
        <p class="minutes-text">Minutes</p>
        <input
          name="minutes"
          placeholder="0"
          type="number"
          min="0"
          max="59"
          v-model="minutesSpent[selectedSpot]"
        />
        <div v-if="minuteError[selectedSpot]" class="error">
          {{ minuteError[selectedSpot] }}
        </div>
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
      {{ total > 0 ? total.toLocaleString() : "-" }}
    </p>

    <div class="average-silver-text">Average Silver per Hour</div>
    <p class="average-silver">
      {{
        accumulatedTotal > 0 && (accumulatedHours > 0 || accumulatedMinutes > 0)
          ? Math.round(
              accumulatedTotal / (accumulatedHours + accumulatedMinutes / 60)
            ).toLocaleString()
          : "-"
      }}
    </p>

    <div class="total-hours-text">Total Hours</div>
    <p class="total-hours">
      {{
        accumulatedHours > 0
          ? accumulatedHours + " Hour" + (accumulatedHours > 1 ? "s" : "")
          : ""
      }}
      {{
        accumulatedMinutes > 0
          ? accumulatedMinutes + " Minute" + (accumulatedMinutes > 1 ? "s" : "")
          : "-"
      }}
    </p>
    <div class="total-price">Total Price: {{ totalDiscountedPrice }}</div>
  </div>
  <!--lijeva strana last session-->
  <div class="session-result-container">
    <div class="session-total-silver-text">Last Session Silver Earned</div>
    <p class="session-resultm">
      {{ lastSessionTotal > 0 ? lastSessionTotal.toLocaleString() : "-" }}
    </p>
    <div class="session-average-silver-text">
      Last Session Average Silver per Hour
    </div>
    <p class="session-average-silver">
      {{
        lastSessionTotal > 0 && (lastSessionHours > 0 || lastSessionMinutes > 0)
          ? Math.round(
              lastSessionTotal / (lastSessionHours + lastSessionMinutes / 60)
            ).toLocaleString()
          : "-"
      }}
    </p>

    <div class="session-total-hours-text">Last Session Time Spent</div>
    <p class="session-total-hours">
      {{
        lastSessionHours > 0
          ? lastSessionHours + " Hour" + (lastSessionHours > 1 ? "s" : "")
          : ""
      }}
      {{
        lastSessionMinutes > 0
          ? lastSessionMinutes + " Minute" + (lastSessionMinutes > 1 ? "s" : "")
          : "-"
      }}
    </p>
  </div>
</template>

<script>
import axios from "axios";
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
        item5_discount: null,

        item1_discount: false,
        item2_discount: false,
        item3_discount: false,
        item4_discount: false,
        item5_discount: false,
        item6_discount: false,
        item7_discount: false,
        item8_discount: false,
        item9_discount: false,
        item10_discount: false,
        item1_spot2_discount: false,
        item1_spot3_discount: false,
        item5_spot3_discount: false,
        item6_spot3_discount: false,
        item7_spot3_discount: false,
        item9_spot3_discount: false,
        item11_spot3_discount: false,
      },
      hoursSpent: {
        1: null,
        2: null,
        3: null,
      },
      minutesSpent: {
        1: null,
        2: null,
        3: null,
      },
      minuteError: {
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
      accumulatedMinutes: 0,
      lastSessionMinutes: 0,
    };
  },
  computed: {
    //checkboxes
    item1_discountedPrice() {
      return this.item1_discount
        ? this.items[1].item1 * prices.item1 * 0.845
        : this.items[1].item1 * prices.item1;
    },
    item2_discountedPrice() {
      return this.item2_discount
        ? this.items[1].item2 * prices.item2 * 0.845
        : this.items[1].item2 * prices.item2;
    },
    item3_discountedPrice() {
      return this.item3_discount
        ? this.items[1].item3 * prices.item3 * 0.845
        : this.items[1].item3 * prices.item3;
    },
    item4_discountedPrice() {
      return this.item4_discount
        ? this.items[1].item4 * prices.item4 * 0.845
        : this.items[1].item4 * prices.item4;
    },
    item5_discountedPrice() {
      return this.item5_discount
        ? this.items[1].item5 * prices.item5 * 0.845
        : this.items[1].item5 * prices.item5;
    },
    item6_discountedPrice() {
      return this.item6_discount
        ? this.items[1].item6 * prices.item6 * 0.845
        : this.items[1].item6 * prices.item6;
    },
    item7_discountedPrice() {
      return this.item7_discount
        ? this.items[1].item7 * prices.item7 * 0.845
        : this.items[1].item7 * prices.item7;
    },
    item8_discountedPrice() {
      return this.item8_discount
        ? this.items[1].item8 * prices.item8 * 0.845
        : this.items[1].item8 * prices.item8;
    },

    item9_discountedPrice() {
      return this.item9_discount
        ? this.items[1].item9 * prices.item9 * 0.845
        : this.items[1].item9 * prices.item9;
    },
    item10_discountedPrice() {
      return this.item10_discount
        ? this.items[1].item10 * prices.item10 * 0.845
        : this.items[1].item10 * prices.item10;
    },
    item1_spot2_discountedPrice() {
      return this.item1_spot2_discount
        ? this.items[2].item1 * prices.item1_spot2 * 0.845
        : this.items[2].item1 * prices.item1_spot2;
    },
    item1_spot3_discountedPrice() {
      return this.item1_spot3_discount
        ? this.items[3].item1 * prices.item1_spot3 * 0.845
        : this.items[3].item1 * prices.item1_spot3;
    },
    item5_spot3_discountedPrice() {
      return this.item5_spot3_discount
        ? this.items[3].item5 * prices.item5_spot3 * 0.845
        : this.items[3].item5 * prices.item5_spot3;
    },
    item6_spot3_discountedPrice() {
      return this.item6_spot3_discount
        ? this.items[3].item6 * prices.item6_spot3 * 0.845
        : this.items[3].item6 * prices.item6_spot3;
    },
    item7_spot3_discountedPrice() {
      return this.item7_spot3_discount
        ? this.items[3].item7 * prices.item7_spot3 * 0.845
        : this.items[3].item7 * prices.item7_spot3;
    },
    item9_spot3_discountedPrice() {
      return this.item9_spot3_discount
        ? this.items[3].item9 * prices.item9_spot3 * 0.845
        : this.items[3].item9 * prices.item9_spot3;
    },
    item11_spot3_discountedPrice() {
      return this.item11_spot3_discount_1
        ? this.items[3].item11 * prices.item11_spot3 * 0.845
        : this.items[3].item11 * prices.item11_spot3;
    },
    totalDiscountedPrice() {
      return (
        this.item1_discountedPrice +
        this.item2_discountedPrice +
        this.item3_discountedPrice +
        this.item4_discountedPrice +
        this.item5_discountedPrice +
        this.item6_discountedPrice +
        this.item7_discountedPrice +
        this.item8_discountedPrice +
        this.item9_discountedPrice +
        this.item10_discountedPrice +
        this.item1_spot2_discountedPrice +
        this.item1_spot3_discountedPrice +
        this.item5_spot3_discountedPrice +
        this.item6_spot3_discountedPrice +
        this.item7_spot3_discountedPrice +
        this.item9_spot3_discountedPrice +
        this.item11_spot3_discountedPrice
      );
    },
    total() {
      return this.accumulatedTotal;
    },
    total() {
      return this.accumulatedTotal;
    },
    averageSilverPerHour() {
      let totalHoursDecimal =
        this.accumulatedHours + this.accumulatedMinutes / 60;
      let average =
        totalHoursDecimal > 0 ? this.accumulatedTotal / totalHoursDecimal : 0;
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
      this.minutesSpent[this.selectedSpot] = null;
    },
    async calculateAndSave() {
      let currentTotal = 0;

      let currentHours = parseFloat(this.hoursSpent[this.selectedSpot] || 0);
      let currentMinutes = parseFloat(
        this.minutesSpent[this.selectedSpot] || 0
      );

      // Calculate overflow hours and remaining minutes
      let overflowHours = Math.floor(currentMinutes / 60);
      let remainingMinutes = currentMinutes % 60;

      let totalHoursForSession = overflowHours + currentHours;

      const currentItems = this.items[this.selectedSpot];
      for (let item in currentItems) {
        if (prices[item]) {
          currentTotal += (currentItems[item] || 0) * prices[item];
        }
      }
      this.accumulatedMinutes += remainingMinutes;
      if (this.accumulatedMinutes >= 60) {
        this.accumulatedHours += Math.floor(this.accumulatedMinutes / 60);
        this.accumulatedMinutes = this.accumulatedMinutes % 60;
      }

      // last session
      this.lastSessionTotal = currentTotal;
      this.lastSessionHours = totalHoursForSession;
      this.lastSessionMinutes = remainingMinutes;

      // total
      this.accumulatedTotal += currentTotal;
      this.accumulatedHours += totalHoursForSession;

      const spotNames = {
        1: "Castle Ruins",
        2: "Orc Camp",
        3: "Bloody Monastery",
      };

      const currentSpotName = spotNames[this.selectedSpot];

      // reset after save and calc
      const dataToSave = {
        userId: "someUserId",
        spotId: this.selectedSpot,
        grindingSpotName: currentSpotName,
        items: this.items[this.selectedSpot],
        total: this.lastSessionTotal,
        average: Math.round(
          this.lastSessionTotal /
            (this.lastSessionHours + this.lastSessionMinutes / 60)
        ),
        hours: this.lastSessionHours,
        minutes: this.lastSessionMinutes,
      };

      // Send the data to backend
      try {
        await axios.post("http://localhost:5000/saveStats", dataToSave, {
          withCredentials: true,
        });
        console.log("Data saved successfully");
      } catch (error) {
        console.error("Error saving data:", error);
      }

      // Reset fields
      this.resetFields();
      this.hoursSpent[this.selectedSpot] = this.lastSessionHours;
      this.minutesSpent[this.selectedSpot] = this.lastSessionMinutes;
    },
  },
  watch: {
    minutesSpent: {
      deep: true,
      handler(newVal) {
        for (const spot in newVal) {
          if (newVal[spot] > 59) {
            this.minuteError[spot] = "You can't type more than 59 minutes";
            this.minutesSpent[spot] = 59; // stavi na 59 max ako prekoraci
          } else {
            this.minuteError[spot] = null;
          }
        }
      },
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

.time-input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  gap: 20px;
}

.hours-box,
.minutes-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hours-box input {
  width: 110px;
  text-align: center;
  text-align: left;
}
.minutes-box input {
  width: 80px;
  text-align: center;
  text-align: left;
}
.hours-text,
.minutes-text {
  background: rgba(83, 83, 73, 0.744);
  color: #fff;
  padding: 5px;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
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
.error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
</style>
