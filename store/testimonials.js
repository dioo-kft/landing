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
        title: "Digital fairy universe",
        quote: "The touch screen device contains a digital fairy universe, and children learn without even realising it. Meanwhile, the system provides us with invaluable insight into their strengths and weaknesses.",
        author: "a public educational leader and pedagogical professional examinator in Hungary",
      },
      {
        title: "SmarGame",
        quote: "[…] I saw fantastic value in DIOO, not only as a skill-based learning tool, but also as a very, very smart and valuable daily activity.",
        author: "an Educational Specialist in Hungary",
      },
      {
        title: "Daily activity",
        quote: "In addition to traditional kindergarten teaching approaches, DIOO has been seamlessly integrated into the daily lives of our children, allowing them to practice and hone their skills.",
        author: "a Kindergarten Teacher in Hungary",
      },
    ],
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