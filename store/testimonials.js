export const state = () => ({
  title: {
    hu: "Rólunk mondták",
    en: "Testimonials",
  },
  cards: {
    hu: [
      {
        title: "Napi foglalkozás",
        quote: "A hagyományos óvodapedagógiai módszerek kiegészítéseként tökéletesen sikerült beépíteni a DIOO-t az óvodások mindennapjaiba, akik így egyre otthonosabban mozognak az elektronikus térben is.",
        author: "Hajdúnánás, óvodapedagógus",
    },
      {
        title: "Okosjáték",
        quote: "[…] fantasztikus értéket láttam meg benne, nemcsak, mint fejlesztő eszköz, hanem mint egy nagyon- nagyon okos, értékes napi játék.",
        author: "Gyöngyös, pedagógus, szakértő",
    },
      {
        title: "Játékuniverzum",
        quote: "Az érintőképernyős eszköz egy digitális játékuniverzumot rejt magába, s úgy tanítja a gyerekeket, hogy mindezt játéknak élik meg.",
        author: "egy kelet-magyarországi óvoda vezetője",
    },
    ],
    en: [
      {
        title: "test title",
        quote: "text",
        author: "author",
    },],
  },
})

export const getters = {
  title: (state) => (lang) => {
    return state.title[lang];
  },
  cards: (state) => (lang) => {
    return state.cards[lang];
  },
}