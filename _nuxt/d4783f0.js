(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,4,5,6],{281:function(t,e,n){"use strict";n.r(e);var l={props:["title","sectionId"]},o=n(47),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",{staticClass:"page-section justify-content-center py-4 px-sm-3",attrs:{id:t.sectionId}},[n("b-col",{staticClass:"page-content py-5"},[t.title?n("b-row",[n("b-col",{staticClass:"text-center page-section-title mb-4"},[n("p",[t._v(t._s(t.title))])])],1):t._e(),t._v(" "),n("b-row",{attrs:{"align-h":"center"}},[t._t("default")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports},282:function(t,e,n){t.exports=n.p+"img/tunder.350cff6.png"},283:function(t,e,n){t.exports=n.p+"img/DIOO_name.19af5d7.png"},284:function(t,e,n){t.exports=n.p+"img/I-H2.78f0b14.png"},285:function(t,e,n){t.exports=n.p+"img/innovacios-nagydij_stamp.def14b2.png"},286:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{}},computed:{isYoutubeEnabled:function(){return this.$store.state.cookies.youtube.toggle.enabled},src:function(){return!0===this.$store.state.cookies.youtube.toggle.enabled?"https://www.youtube.com/embed/7XFOUAdqHmU":""}},methods:{enableYoutubeCookies:function(){this.$store.state.cookieConsent.accept(this.$store.state.cookies.youtube.toggle.value)}}},o=n(47),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-intro"},[n("b-row",[n("b-col",{staticClass:"text-md-center pb-3 px-4 intro-text"},[n("p",[t._v("\n        A DIOO a sikeres iskolakezdéshez szükséges készségeket játékosan\n        fejlesztő eszköz; egy új, innovatív, teljes egészében magyar digitális\n        fejlesztés."),n("br"),t._v("A Digitális Okosjáték Óvodásoknak (DIOO) billentyűzet\n        és egér nélkül, érintőképernyőn irányítható program, amelyben a\n        feladatokat hangutasítások alapján kapják a gyerekek. Az Okosjáték\n        lehetővé teszi az óvodások iskolaérettségi szintjének mérését és a\n        szükséges képességek erősítését.\n      ")])])],1),t._v(" "),n("b-row",[n("b-col",{attrs:{"align-self":"stretch"}},[n("b-overlay",{staticStyle:{color:"black"},attrs:{show:!t.isYoutubeEnabled,opacity:"1",variant:"light"},scopedSlots:t._u([{key:"overlay",fn:function(){return[n("div",{staticClass:"text-center p-3 overlay-content"},[n("b-icon",{staticClass:"d-none d-sm-inline-block",attrs:{icon:"exclamation-triangle-fill","font-scale":"3",animation:"cylon"}}),t._v(" "),n("p",{attrs:{id:"cancel-label"}},[t._v("\n              A videó megtekintéséhez kérem engedélyezze a YouTube által\n              használt sütiket! ↓\n            ")]),t._v(" "),n("p",{staticStyle:{"font-size":"12px"}},[t._v("\n              Vagy a videót a YouTube oldalán is elérheti a\n              "),n("a",{attrs:{href:"https://www.youtube.com/watch?v=7XFOUAdqHmU"}},[t._v("https://www.youtube.com/watch?v=7XFOUAdqHmU")]),t._v("\n              linken.\n            ")]),t._v(" "),n("b-button",{ref:"cancel",attrs:{variant:"outline-success",size:"sm"},on:{click:t.enableYoutubeCookies}},[t._v("\n              YouTube által használt sütik engedélyezése\n            ")])],1)]},proxy:!0}])},[t.isYoutubeEnabled?n("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:"https://www.youtube-nocookie.com/embed/7XFOUAdqHmU",allowfullscreen:""}}):n("b-img",{attrs:{src:"https://via.placeholder.com/900x506?text=.",fluid:"",alt:"DIOO Bemutató videó"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},287:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{reviews:[{title:"Napi foglalkozás",quote:"A hagyományos óvodapedagógiai módszerek kiegészítéseként tökéletesen sikerült beépíteni a DIOO-t az óvodások mindennapjaiba, akik így egyre otthonosabban mozognak az elektronikus térben is.",author:"Hajdúnánás, óvodapedagógus"},{title:"Okosjáték",quote:"[…] fantasztikus értéket láttam meg benne, nemcsak, mint fejlesztő eszköz, hanem mint egy nagyon- nagyon okos, értékes napi játék.",author:"Gyöngyös, pedagógus, szakértő"},{title:"Játékuniverzum",quote:"Az érintőképernyős eszköz egy digitális játékuniverzumot rejt magába, s úgy tanítja a gyerekeket, hogy mindezt játéknak élik meg.",author:"kelet-magyarországi óvoda vezetője"}]}}},o=n(47),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-col",[n("b-carousel",{attrs:{id:"carousel",interval:"1000000",controls:"",indicators:"","img-width":"1024","img-height":"480"},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.reviews.length,(function(e){return n("b-carousel-slide",{key:e,attrs:{caption:t.reviews[e-1].title,"img-blank":"","img-alt":"Blank image"}},[n("p",[t._v(" "+t._s(t.reviews[e-1].quote)+" ")]),t._v(" "),n("p",{staticClass:"quote-author"},[t._v(" — "+t._s(t.reviews[e-1].author)+" ")])])})),1)],1)}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,n){"use strict";n.r(e);var l=n(47),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("b-row",{staticClass:"my-0 page-cover-content"},[l("b-col",[l("b-row",{staticClass:"mt-md-5",attrs:{"align-h":"center"}},[l("b-col",{staticClass:"mb-4 page-cover-img-col",attrs:{cols:"auto"}},[l("b-img",{staticClass:"brand-img",attrs:{src:n(282),fluid:"",alt:"DIOO tündér"}})],1),t._v(" "),l("b-col",{staticClass:"cover-page-text px-4",attrs:{cols:"auto"}},[l("b-row",{staticClass:"page-cover-title",attrs:{"align-h":"center"}},[l("b-col",{attrs:{cols:"auto"}},[l("b-img",{attrs:{src:n(283),fluid:"",alt:"DIOO"}})],1)],1),t._v(" "),l("b-row",{staticClass:"page-cover-subtitle",attrs:{"align-h":"center"}},[l("b-col",{attrs:{cols:"auto"}},[t._v("Digitális OkosJáték Óvodásoknak")])],1),t._v(" "),l("b-row",{attrs:{"align-h":"center"}},[l("b-col",{attrs:{cols:"auto"}},[l("b-button",{staticClass:"button-outline-brand-color",attrs:{pill:"",href:"#contact"}},[t._v("Üzenjen nekünk")])],1)],1)],1)],1),t._v(" "),l("b-row",{staticClass:"mt-4 mt-md-0 text-center",attrs:{"align-h":"center","align-v":"center"}},[l("b-col",{staticClass:"page-cover-stamp-box mt-3",attrs:{cols:"auto",md:"4","offset-md":"3"}},[l("b-img",{staticClass:"page-cover-stamp",attrs:{src:n(284),fluid:"",alt:"Ipon-HRP helyezés logó"}})],1),t._v(" "),l("b-col",{staticClass:"page-cover-stamp-box mt-3",attrs:{cols:"auto",md:"4"}},[l("b-img",{staticClass:"page-cover-stamp",attrs:{src:n(285),fluid:"",alt:"Responsive image"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,n){"use strict";n.r(e);var l=n(47),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-contact"},[n("b-row",{staticClass:"mb-3 m-1 m-sm-0",attrs:{"align-h":"around"}},[n("b-col",{staticClass:"page-contact-col-bg px-3 py-5 p-sm-5 mb-5 mb-md-0",attrs:{cols:"12",md:"7"}},[n("b-row",{attrs:{"align-h":"between"}},[n("b-col",{staticStyle:{"font-size":"1.5rem"},attrs:{cols:"auto"}},[t._v("Keressen minket!")]),t._v(" "),n("b-col",{attrs:{cols:"auto"}},[n("b-link",{attrs:{href:"https://www.facebook.com/diootanito"}},[n("b-icon",{staticClass:"contact-facebook-icon",attrs:{icon:"facebook"}})],1)],1)],1),t._v(" "),n("b-row",{staticClass:"mb-3"},[n("b-col",{staticClass:"contact-email",attrs:{cols:"auto"}},[t._v("\n              email címünk: "),n("a",{attrs:{href:"mailto:info@dioo.hu"}},[t._v("info@dioo.hu")])])],1),t._v(" "),n("b-row",{attrs:{"align-h":"between"}},[n("b-col",{attrs:{cols:"auto"}},[n("h5",[t._v("Fenntartóknak, Pedagógusoknak")]),t._v(" "),n("p",[t._v("Kapcsolattartó: Konkolyi Sándor")]),t._v(" "),n("p",{staticStyle:{"margin-bottom":"0","padding-bottom":"0"}},[t._v("tel.: +36 30 879 8785")]),t._v(" "),n("p",{staticStyle:{"font-size":"12px"}},[t._v("Hétköznaponként 8:00 - 17:00 között hívható.")])]),t._v(" "),n("b-col",{attrs:{cols:"auto"}},[n("h5",[t._v("Társadalmi Felelősségvállalás, Vállalatoknak")]),t._v(" "),n("p",[t._v("Kapcsolattartó: Konkolyi Szilvia")]),t._v(" "),n("p",{staticStyle:{"margin-bottom":"0","padding-bottom":"0"}},[t._v("tel.: +36 30 196 6822")]),t._v(" "),n("p",{staticStyle:{"font-size":"12px"}},[t._v("Hétköznaponként 8:00 - 17:00 között hívható.")])])],1),t._v(" "),n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{staticClass:"mt-4",attrs:{cols:"auto"}},[n("b-button",{staticClass:"button-light-inverted",attrs:{pill:"",href:"https://forms.clickup.com/f/4bd9e-2981/GXK29I7X40UVA9P2H3"}},[t._v("\n              Visszahívást kérek!\n            ")])],1)],1)],1),t._v(" "),n("b-col",{staticClass:"page-contact-col-bg px-3 py-5",attrs:{cols:"12",md:"4","align-self":"stretch"}},[n("b-row",{staticClass:"h-100",attrs:{"align-content":"between","align-h":"center"}},[n("b-col",{staticClass:"my-2 my-md-0",attrs:{cols:"auto"}},[n("p",{staticStyle:{"text-align":"center"},attrs:{id:"load-wrn-text"}},[t._v("A TV műsor miatt vonalaink gyakran foglaltak.Jelentkezése számunkra fontos, ezért kérjük, érdeklődését jelezze az alábbi gombok valamelyikével!")])]),t._v(" "),n("b-col",{staticClass:"my-2 my-md-0",attrs:{cols:"12",sm:"auto",md:"12",order:"4","order-md":"2"}},[n("b-button",{staticClass:"button-light-inverted w-100",attrs:{pill:"",href:"https://forms.clickup.com/f/4bd9e-3121/C0VWX3U1BMFPYUQKSF"}},[t._v("\n                Bemutatót kérek\n              ")])],1),t._v(" "),n("b-col",{staticClass:"my-2 my-md-0",attrs:{cols:"12",sm:"auto",md:"12",order:"3","order-md":"3"}},[n("b-button",{staticClass:"button-light-inverted w-100",attrs:{pill:"",href:"https://forms.clickup.com/f/4bd9e-3001/ZXRM9YPGZ98O8YC29Y"}},[t._v("\n                DIOO-t veszek\n              ")])],1),t._v(" "),n("b-col",{staticClass:"my-2 my-md-0",attrs:{cols:"12",sm:"auto",md:"12",order:"5","order-md":"4"}},[n("b-button",{staticClass:"button-light-inverted w-100",attrs:{pill:"",href:"https://forms.clickup.com/f/4bd9e-3081/UU6XGDB170WL17YDZK"}},[t._v("\n                Szülői érdeklődés\n              ")])],1),t._v(" "),n("b-col",{staticClass:"my-2 my-md-0",attrs:{cols:"12",sm:"auto",md:"12",order:"2","order-md":"5"}},[n("b-button",{staticClass:"button-light-inverted w-100",attrs:{pill:"",href:"https://forms.clickup.com/f/4bd9e-3041/NO44ISE6HP07EN8GGX"}},[t._v("\n                Támogatok egy óvodát\n              ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},292:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{items:[{question:"Szükséges-e informatikai tudás a DIOO használatához?",answer:"Használata semmilyen számítástechnikai tudás nem igényel. A DIOO érintőképernyős eszköz, egér és billentyűzet nélkül használható. Az eszköz bekapcsolása után magától elindul és készen áll a használatra."},{question:"Ki segít a DIOO megismerésében?",answer:"Az eszközhöz két helyszíni oktatás tartozik (játékokról és az óvónői lehetőségekről), emellett csapatunk lehetőséget biztosít a telefonos, gyors segítségkérésre is."},{question:"Szükséges-e írni, olvasni a feladatok megoldásához?",answer:"Nem. A DIOO az írni, olvasni még nem tudó, óvodáskorú felhasználók részére készült. A feladatok kiadása magyar nyelvű hangutasítással történik. Az utasítások újra meghallgathatók."},{question:"Miért biztonságos a DIOO internethasználata?",answer:"A gyermekek kizárólag a DIOO fejlesztőfeladatokat érik el az eszközön."},{question:"Korlátozható-e a DIOO használata?",answer:"A fejlesztők a DIOO napi használati idejét 15 percben javasolják, mivel a figyelmet és koncentrálást igénylő játékfeladatok megoldása a kis felhasználókat elfárasztja. A napi játékidő beállítható. A játékidő leteltével a gyermek új játékot aznap már nem indíthat."},{question:"Hogyan biztosítja a DIOO az egyedi fejlesztést?",answer:"A DIOO mindig a kis felhasználó aktuális képességének megfelelő nehézségű feladatot ad, melyet sikeres megoldást követően a program fokozatosan nehezít."},{question:"Honnan tudja a gyermek, hogy jól oldotta meg a feladatot?",answer:"A rendszer a feladatmegoldást követően azonnal jelzi a megoldás helyességét."},{question:"Mi történik, ha egy feladat 'túl nehéz'?",answer:"Azokat a feladatokat, melyeket a gyermek nem tudott helyesen megoldani, a rendszer gyakoroltatja, esetleg könnyebb feladathoz tér vissza."},{question:"Okozhat-e stresszt a feladatmegoldás?",answer:"A DIOO-feladatok játékos kihívások, melyek a gyermeki tapasztalatra és a napi tevékenység során szerzett ismeretanyagra építenek. A feladatok megoldásán bármennyi ideig gondolkodhat a kis felhasználó, s minden megoldást dicséret vagy biztatás követ, így a feladatok ismétlését sem éli meg kudarcként. Mivel a feladatok apró lépésenként nehezednek, a gyakorlottság növekedésével a kisgyermek egyre nehezebb feladatok megoldására lesz képes."},{question:"Milyen képességeket mér és fejleszt a DIOO?",answer:"A DIOO játékai a sikeres iskolakezdéshez szükséges, legfontosabb képességek alkalmazását igénylik vizuális, auditív, rész-egész felismerés, szintézis-analízis, tájékozódás, matematikai gondolkodás, memória és finommotorika területén."},{question:"Milyen járulékos eredményt hoz a DIOO felhasználói tapasztalat alapján?",answer:"A DIOO használata fokozza a figyelmet, koncentrálóképességet, bővíti szókincset, a játék nyújtotta sikerélmény növeli az önbizalmat, nyitottabbá teszi a visszahúzódó gyermekeket, lassítja a túlzottan aktív gyermekeket. A DIOO-feladatok megoldása felhívhatja a figyelmet esetleges szervi problémákra (hallás, látás), képességebéli elmaradásara, vagy éppen egy-egy területen elért kiemelkedő teljesítményre. Segíti a pedagógust az egyéni fejlesztési terv meghatározásában. Fejleszti a szocializációt: a közös élmény eredményeképpen erősödik a csapatszellem: megfigyelhetően nő az egymásra való odafigyelés, az egymásnak való segítségnyújtás."},{question:"Hogy tudom nyomon követni a gyermekek fejlődését?",answer:"A DIOO-felhasználó pedagógusokat a rendszer hetente/havonta emailben tájékoztatja a gyermekek elért, összegzett eredményeiről."}]}}},o=n(47),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("page-section",{attrs:{"section-id":"cover"}},[n("div",{staticClass:"bg-shape"},[n("page-cover")],1)]),t._v(" "),n("page-section",{attrs:{"section-id":"intro",title:"Mi a DIOO?"}},[n("page-intro")],1),t._v(" "),n("page-section",{attrs:{"section-id":"faq",title:"Gyakran Ismételt kérdések"}},[n("b-col",{staticClass:"accordion",attrs:{role:"tablist","align-self":"stretch"}},t._l(t.items.length,(function(e){return n("b-card",{key:e,staticClass:"mb-1",attrs:{"no-body":""}},[n("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+e,expression:"'accordion-' + id"}],staticClass:"faq-question",attrs:{block:"",variant:"info"}},[t._v(t._s(t.items[e-1].question))])],1),t._v(" "),n("b-collapse",{attrs:{id:"accordion-"+e,visible:"",accordion:"my-accordion",role:"tabpanel"}},[n("b-card-body",{staticClass:"faq-answer"},[n("b-card-text",[t._v(t._s(t.items[e-1].answer))])],1)],1)],1)})),1)],1),t._v(" "),n("page-section",{attrs:{"section-id":"testimonial",title:"Rólunk mondták","align-self":"stretch"}},[n("b-col",[n("testimonial-carousel")],1)],1),t._v(" "),n("page-section",{attrs:{"section-id":"contact",title:"Kapcsolat"}},[n("page-contact")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageCover:n(288).default,PageSection:n(281).default,PageIntro:n(286).default,TestimonialCarousel:n(287).default,PageContact:n(289).default})}}]);