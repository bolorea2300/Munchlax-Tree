let data;
let up;
let down;
let one;
let two;

new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: {
    id: null,
    first: null,
    second: null,
    place: [
      "205ばんどうろ南",
      "205ばんどうろ北",
      "206ばんどうろ",
      "207ばんどうろ",
      "208ばんどうろ",
      "209ばんどうろ",
      "210ばんどうろ南",
      "210ばんどうろ北",
      "211ばんどうろ",
      "212ばんどうろ北",
      "212ばんどうろ南",
      "213ばんどうろ",
      "214ばんどうろ",
      "215ばんどうろ",
      "218ばんどうろ",
      "221ばんどうろ",
      "222ばんどうろ",
      "たにまのはつでんしょ",
      "ハクタイのもり (外側)",
      "タタラせいてつじょ",
      "ソノオのはなばたけ",
    ],
  },
  methods: {
    check: function (id) {
      data = parseInt(id).toString(2);

      data = ("0000000000000000" + data).slice(-16);

      down = data.slice(-8);
      up = data.slice(0, 8);

      one = parseInt(down, 2) % 21;
      two = parseInt(up, 2) % 21;

      this.first = this.place[one];
      this.second = this.place[two];
    },
  },
});
