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

        <input v-model="items[1].item1_discount" type="checkbox" /> Apply
        discount
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
        <input type="checkbox" v-model="items[1].item2_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="items[1].item3_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="items[1].item4_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="items[1].item5_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="items[1].item6_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="items[1].item7_discount" /> Apply
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
          v-model="items[1].item8"
        /><br />
        <input type="checkbox" v-model="items[1].item8_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="items[1].item9_discount" /> Apply
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
          v-model="items[1].item10"
        /><br />
        <input type="checkbox" v-model="items[1].item10_discount" /> Apply
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
        <input type="checkbox" v-model="items[2].item1_spot2_discount" /> Apply
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
        <input type="checkbox" v-model="items[2].item2_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="items[2].item3_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="items[2].item4_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="items[2].item5_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="items[2].item6_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="items[2].item7_discount" /> Apply
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
          v-model="items[2].item8"
        /><br />
        <input type="checkbox" v-model="items[2].item8_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="items[2].item9_discount" /> Apply
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
          v-model="items[2].item10"
        /><br />
        <input type="checkbox" v-model="items[2].item10_discount" /> Apply
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
        <input type="checkbox" v-model="items[3].item1_spot3_discount" /> Apply
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
        <input type="checkbox" v-model="items[3].item2_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="items[3].item3_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="items[3].item4_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="items[3].item5_spot3_discount" /> Apply
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
        <input type="checkbox" v-model="items[3].item6_spot3_discount" /> Apply
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
        <input type="checkbox" v-model="items[3].item7_spot3_discount" /> Apply
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
        <input type="checkbox" v-model="items[3].item8_discount" /> Apply
        Discount<br />
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
        <input type="checkbox" v-model="items[3].item9_spot3_discount" /> Apply
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
        <input type="checkbox" v-model="items[3].item10_discount" /> Apply
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
        <input type="checkbox" v-model="items[3].item11_spot3_discount" /> Apply
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
    <div class="total-silver-text">Total Silver after taxes:</div>
    <p class="resultm">
      {{ TotalDisc > 0 ? TotalDisc.toLocaleString() : "-" }}
    </p>

    <div class="average-silver-text">Average Silver per Hour</div>
    <p class="average-silver">
      {{
        TotalDisc > 0 && (accumulatedHours > 0 || accumulatedMinutes > 0)
          ? Math.round(
              TotalDisc / (accumulatedHours + accumulatedMinutes / 60)
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
  </div>
  <!--lijeva strana last session-->
  <div class="session-result-container">
    <div class="session-total-silver-text">Last Session Silver Earned</div>
    <p class="session-resultm">
      {{ lastSessionTotal > 0 ? lastSessionTotal.toLocaleString() : "-" }}
    </p>
    <div class="total-silver-text">Total Session Silver after taxes:</div>
    <p class="resultm">
      {{
        lastSessionTotalDisc > 0 ? lastSessionTotalDisc.toLocaleString() : "-"
      }}
    </p>
    <div class="session-average-silver-text">
      Last Session Average Silver per Hour
    </div>
    <p class="session-average-silver">
      {{
        lastSessionTotalDisc > 0 &&
        (lastSessionHours > 0 || lastSessionMinutes > 0)
          ? Math.round(
              lastSessionTotalDisc /
                (lastSessionHours + lastSessionMinutes / 60)
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
      sessionDiscountedTotal: 0,
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
          item1_discount: false,
          item2_discount: true,
          item3_discount: true,
          item4_discount: true,
          item5_discount: true,
          item6_discount: true,
          item7_discount: false,
          item8_discount: true,
          item9_discount: true,
          item10_discount: false,
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
          item1_spot2_discount: false,
          item2_discount: true,
          item3_discount: true,
          item4_discount: true,
          item5_discount: true,
          item6_discount: true,
          item7_discount: false,
          item8_discount: true,
          item9_discount: true,
          item10_discount: false,
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
          item1_spot3_discount: false,
          item2_discount: true,
          item3_discount: true,
          item4_discount: true,
          item5_spot3_discount: true,
          item6_spot3_discount: true,
          item7_spot3_discount: false,
          item8_discount: true,
          item9_spot3_discount: true,
          item10_discount: false,
          item11_spot3_discount: false,
        },
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
      TotalDisc: 0,
      accumulatedHours: 0,
      lastSessionTotal: 0,
      lastSessionTotalDisc: 0,
      lastSessionHours: 0,
      accumulatedMinutes: 0,
      lastSessionMinutes: 0,
    };
  },
  computed: {
    //checkboxes spot 1
    item1_discountedPrice() {
      return this.items[1].item1_discount
        ? this.items[1].item1 * prices.item1 * 0.845
        : this.items[1].item1 * prices.item1;
    },
    item2_discountedPrice() {
      return this.items[1].item2_discount
        ? this.items[1].item2 * prices.item2 * 0.845
        : this.items[1].item2 * prices.item2;
    },
    item3_discountedPrice() {
      return this.items[1].item3_discount
        ? this.items[1].item3 * prices.item3 * 0.845
        : this.items[1].item3 * prices.item3;
    },
    item4_discountedPrice() {
      return this.items[1].item4_discount
        ? this.items[1].item4 * prices.item4 * 0.845
        : this.items[1].item4 * prices.item4;
    },
    item5_discountedPrice() {
      return this.items[1].item5_discount
        ? this.items[1].item5 * prices.item5 * 0.845
        : this.items[1].item5 * prices.item5;
    },
    item6_discountedPrice() {
      return this.items[1].item6_discount
        ? this.items[1].item6 * prices.item6 * 0.845
        : this.items[1].item6 * prices.item6;
    },
    item7_discountedPrice() {
      return this.items[1].item7_discount
        ? this.items[1].item7 * prices.item7 * 0.845
        : this.items[1].item7 * prices.item7;
    },
    item8_discountedPrice() {
      return this.items[1].item8_discount
        ? this.items[1].item8 * prices.item8 * 0.845
        : this.items[1].item8 * prices.item8;
    },
    item9_discountedPrice() {
      return this.items[1].item9_discount
        ? this.items[1].item9 * prices.item9 * 0.845
        : this.items[1].item9 * prices.item9;
    },
    item10_discountedPrice() {
      return this.items[1].item10_discount
        ? this.items[1].item10 * prices.item10 * 0.845
        : this.items[1].item10 * prices.item10;
    },
    //spot 2
    item1_spot2_discountedPrice() {
      return this.items[2].item1_spot2_discount
        ? this.items[2].item1_spot2 * prices.item1_spot2 * 0.845
        : this.items[2].item1_spot2 * prices.item1_spot2;
    },

    item2_spot2_discountedPrice() {
      return this.items[2].item2_discount
        ? this.items[2].item2 * prices.item2 * 0.845
        : this.items[2].item2 * prices.item2;
    },

    item3_spot2_discountedPrice() {
      return this.items[2].item3_discount
        ? this.items[2].item3 * prices.item3 * 0.845
        : this.items[2].item3 * prices.item3;
    },

    item4_spot2_discountedPrice() {
      return this.items[2].item4_discount
        ? this.items[2].item4 * prices.item4 * 0.845
        : this.items[2].item4 * prices.item4;
    },
    item5_spot2_discountedPrice() {
      return this.items[2].item5_discount
        ? this.items[2].item5 * prices.item5 * 0.845
        : this.items[2].item5 * prices.item5;
    },
    item6_spot2_discountedPrice() {
      return this.items[2].item6_discount
        ? this.items[2].item6 * prices.item6 * 0.845
        : this.items[2].item6 * prices.item6;
    },
    item7_spot2_discountedPrice() {
      return this.items[2].item7_discount
        ? this.items[2].item7 * prices.item7 * 0.845
        : this.items[2].item7 * prices.item7;
    },
    item8_spot2_discountedPrice() {
      return this.items[2].item8_discount
        ? this.items[2].item8 * prices.item8 * 0.845
        : this.items[2].item8 * prices.item8;
    },
    item9_spot2_discountedPrice() {
      return this.items[2].item9_discount
        ? this.items[2].item9 * prices.item9 * 0.845
        : this.items[2].item9 * prices.item9;
    },
    item10_spot2_discountedPrice() {
      return this.items[2].item10_discount
        ? this.items[2].item10 * prices.item10 * 0.845
        : this.items[2].item10 * prices.item10;
    },
    //spot 3
    item1_spot3_discountedPrice() {
      return this.items[3].item1_spot3_discount
        ? this.items[3].item1_spot3 * prices.item1_spot3 * 0.845
        : this.items[3].item1_spot3 * prices.item1_spot3;
    },
    item2_spot3_discountedPrice() {
      return this.items[3].item2_discount
        ? this.items[3].item2 * prices.item2 * 0.845
        : this.items[3].item2 * prices.item2;
    },
    item3_spot3_discountedPrice() {
      return this.items[3].item3_discount
        ? this.items[3].item3 * prices.item3 * 0.845
        : this.items[3].item3 * prices.item3;
    },
    item4_spot3_discountedPrice() {
      return this.items[3].item4_discount
        ? this.items[3].item4 * prices.item4 * 0.845
        : this.items[3].item4 * prices.item4;
    },
    item5_spot3_discountedPrice() {
      return this.items[3].item5_spot3_discount
        ? this.items[3].item5_spot3 * prices.item5_spot3 * 0.845
        : this.items[3].item5_spot3 * prices.item5_spot3;
    },
    item6_spot3_discountedPrice() {
      return this.items[3].item6_spot3_discount
        ? this.items[3].item6_spot3 * prices.item6_spot3 * 0.845
        : this.items[3].item6_spot3 * prices.item6_spot3;
    },
    item7_spot3_discountedPrice() {
      return this.items[3].item7_spot3_discount
        ? this.items[3].item7_spot3 * prices.item7_spot3 * 0.845
        : this.items[3].item7_spot3 * prices.item7_spot3;
    },
    item8_spot3_discountedPrice() {
      return this.items[3].item8_discount
        ? this.items[3].item8 * prices.item8 * 0.845
        : this.items[3].item8 * prices.item8;
    },
    item9_spot3_discountedPrice() {
      return this.items[3].item9_spot3_discount
        ? this.items[3].item9_spot3 * prices.item9_spot3 * 0.845
        : this.items[3].item9_spot3 * prices.item9_spot3;
    },
    item10_spot3_discountedPrice() {
      return this.items[3].item10_discount
        ? this.items[3].item10 * prices.item10 * 0.845
        : this.items[3].item10 * prices.item10;
    },
    item11_spot3_discountedPrice() {
      return this.items[3].item11_spot3_discount
        ? this.items[3].item11_spot3 * prices.item11_spot3 * 0.845
        : this.items[3].item11_spot3 * prices.item11_spot3;
    },
    //discount calc
    totalDiscountedPrice() {
      //spot 1
      const item1Value = isNaN(this.item1_discountedPrice)
        ? 0
        : this.item1_discountedPrice;
      const item2Value = isNaN(this.item2_discountedPrice)
        ? 0
        : this.item2_discountedPrice;
      const item3Value = isNaN(this.item3_discountedPrice)
        ? 0
        : this.item3_discountedPrice;
      const item4Value = isNaN(this.item4_discountedPrice)
        ? 0
        : this.item4_discountedPrice;
      const item5Value = isNaN(this.item5_discountedPrice)
        ? 0
        : this.item5_discountedPrice;
      const item6Value = isNaN(this.item6_discountedPrice)
        ? 0
        : this.item6_discountedPrice;
      const item7Value = isNaN(this.item7_discountedPrice)
        ? 0
        : this.item7_discountedPrice;
      const item8Value = isNaN(this.item8_discountedPrice)
        ? 0
        : this.item8_discountedPrice;
      const item9Value = isNaN(this.item9_discountedPrice)
        ? 0
        : this.item9_discountedPrice;
      const item10Value = isNaN(this.item10_discountedPrice)
        ? 0
        : this.item10_discountedPrice;
      //spot 2
      const item1_spot2_Value = isNaN(this.item1_spot2_discountedPrice)
        ? 0
        : this.item1_spot2_discountedPrice;
      const item2_spot2_Value = isNaN(this.item2_spot2_discountedPrice)
        ? 0
        : this.item2_spot2_discountedPrice;
      const item3_spot2_Value = isNaN(this.item3_spot2_discountedPrice)
        ? 0
        : this.item3_spot2_discountedPrice;
      const item4_spot2_Value = isNaN(this.item4_spot2_discountedPrice)
        ? 0
        : this.item4_spot2_discountedPrice;
      const item5_spot2_Value = isNaN(this.item5_spot2_discountedPrice)
        ? 0
        : this.item5_spot2_discountedPrice;
      const item6_spot2_Value = isNaN(this.item6_spot2_discountedPrice)
        ? 0
        : this.item6_spot2_discountedPrice;
      const item7_spot2_Value = isNaN(this.item7_spot2_discountedPrice)
        ? 0
        : this.item7_spot2_discountedPrice;
      const item8_spot2_Value = isNaN(this.item8_spot2_discountedPrice)
        ? 0
        : this.item8_spot2_discountedPrice;
      const item9_spot2_Value = isNaN(this.item9_spot2_discountedPrice)
        ? 0
        : this.item9_spot2_discountedPrice;
      const item10_spot2_Value = isNaN(this.item10_spot2_discountedPrice)
        ? 0
        : this.item10_spot2_discountedPrice;
      //spot 3
      const item1_spot3_Value = isNaN(this.item1_spot3_discountedPrice)
        ? 0
        : this.item1_spot3_discountedPrice;
      const item2_spot3_Value = isNaN(this.item2_spot3_discountedPrice)
        ? 0
        : this.item2_spot3_discountedPrice;
      const item3_spot3_Value = isNaN(this.item3_spot3_discountedPrice)
        ? 0
        : this.item3_spot3_discountedPrice;
      const item4_spot3_Value = isNaN(this.item4_spot3_discountedPrice)
        ? 0
        : this.item4_spot3_discountedPrice;
      const item5_spot3_Value = isNaN(this.item5_spot3_discountedPrice)
        ? 0
        : this.item5_spot3_discountedPrice;
      const item6_spot3_Value = isNaN(this.item6_spot3_discountedPrice)
        ? 0
        : this.item6_spot3_discountedPrice;
      const item7_spot3_Value = isNaN(this.item7_spot3_discountedPrice)
        ? 0
        : this.item7_spot3_discountedPrice;
      const item8_spot3_Value = isNaN(this.item8_spot3_discountedPrice)
        ? 0
        : this.item8_spot3_discountedPrice;
      const item9_spot3_Value = isNaN(this.item9_spot3_discountedPrice)
        ? 0
        : this.item9_spot3_discountedPrice;
      const item10_spot3_Value = isNaN(this.item10_spot3_discountedPrice)
        ? 0
        : this.item10_spot3_discountedPrice;
      const item11_spot3_Value = isNaN(this.item11_spot3_discountedPrice)
        ? 0
        : this.item11_spot3_discountedPrice;

      return (
        //spot1
        item1Value +
        item2Value +
        item3Value +
        item4Value +
        item5Value +
        item6Value +
        item7Value +
        item8Value +
        item9Value +
        item10Value +
        //spot2
        // Add Spot 2 values
        item1_spot2_Value +
        item2_spot2_Value +
        item3_spot2_Value +
        item4_spot2_Value +
        item5_spot2_Value +
        item6_spot2_Value +
        item7_spot2_Value +
        item8_spot2_Value +
        item9_spot2_Value +
        item10_spot2_Value +
        //spot3
        item1_spot3_Value +
        item2_spot3_Value +
        item3_spot3_Value +
        item4_spot3_Value +
        item5_spot3_Value +
        item6_spot3_Value +
        item7_spot3_Value +
        item8_spot3_Value +
        item9_spot3_Value +
        item10_spot3_Value +
        item11_spot3_Value
      );
    },

    total() {
      return this.accumulatedTotal;
    },
    averageSilverPerHour() {
      let totalHoursDecimal =
        this.accumulatedHours + this.accumulatedMinutes / 60;
      let average =
        totalHoursDecimal > 0
          ? this.totalDiscountedPrice / totalHoursDecimal
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
      this.minutesSpent[this.selectedSpot] = null;
    },
    async calculateAndSave() {
      let currentTotal = 0;

      console.log("Calculating and Saving...");
      console.log("Current Item2 Discount State:", this.item2_discount);
      console.log("Current Item2 Value:", this.items[2].item2);
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
      this.lastSessionTotalDisc = this.totalDiscountedPrice;
      this.lastSessionHours = totalHoursForSession;
      this.lastSessionMinutes = remainingMinutes;

      // total
      this.accumulatedTotal += currentTotal;
      this.TotalDisc += this.totalDiscountedPrice;
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
        totalDiscounted: this.TotalDisc,
        average: Math.round(
          this.lastSessionTotalDisc /
            (this.lastSessionHours + this.lastSessionMinutes / 60)
        ),
        hours: this.lastSessionHours,
        minutes: this.lastSessionMinutes,
      };

      // Send the data to backend
      try {
        await axios.post(
          "https://backendgt.onrender.com/saveStats",
          dataToSave,
          {
            withCredentials: true,
          }
        );
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
