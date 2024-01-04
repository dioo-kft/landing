export const state = () => ({
  title: {
    hu: "Cookie(süti) tájékoztató",
    en: "Cookie Policy",
  },
  paragraphs: {
    hu: [
      "Az adatkezelés célja: a felhasználók azonosítása, egymástól való megkülönböztetése, a felhasználók aktuális munkamenetének azonosítása, az annak során megadott adatok tárolása, az adatvesztés megakadályozása, a felhasználók azonosítása, nyomon követése, webanalitikai mérések.",
      "A cookie-k (vagy sütik) alkalmazásával az Adatkezelő a következő személyes adatokat kezeli érdeklődési kör információk, szokások, preferenciák (böngészési előzmények alapján), illetve a rendszerek működtetése során technikailag rögzítésre kerülő adatok: a Felhasználó bejelentkező számítógépének azon adatai, melyek a Szolgáltatás igénybevétele során generálódnak, és amelyeket az Adatkezelők rendszere a technikai folyamatok automatikus eredményeként rögzít. Az automatikusan rögzítésre kerülő adatokat a rendszer a Felhasználó külön nyilatkozata vagy cselekménye nélkül a belépéskor, illetve kilépéskor automatikusan naplózza.",
      "Az adatkezelés jogalapja: az érintett önkéntes hozzájárulása GDPR 6. Cikk (1) bek a) pont.",
      "A kezelt adatok köre: azonosítószám, dátum, időpont, valamint az előzőleg meglátogatott oldal, valamint a weboldalon található sütinyilatkozatban, az egyes sütik esetén felsorolt adatok.",
      "A sütit a felhasználó képes törölni saját számítógépéről, illetve letilthatja böngészőjében a sütik alkalmazását. A cookie-k alkalmazásának tiltásával a Felhasználó tudomásul veszi, hogy cookie nélkül az adott oldal működése nem teljes értékű A sütik kezelésére általában a böngészők beállítások menü alatt, cookie, süti vagy nyomkövetés megnevezéssel van lehetőség.",
      "A süti a webszerver által küldött, változó tartalmú, alfanumerikus információ csomag, mely a felhasználó számítógépén rögzül és előre meghatározott érvényességi ideig tárolásra kerül. A cookie-k alkalmazása lehetőséget biztosít a látogató egyes adatainak lekérdezésére, valamint internethasználatának nyomon követésére. A cookie-k segítségével tehát pontosan meghatározható az érintett felhasználó érdeklődési köre, internet használati szokásai, honlap-látogatási története. Mivel a sütik egyfajta címkeként működnek, melyekkel a weboldal felismerheti az oldalra visszatérő látogatót, alkalmazásukkal az adott oldalon érvényes felhasználónév, jelszó is tárolható. Amennyiben a honlap látogatás során a felhasználó böngészője visszaküldi a merevlemezre korábban elmentett cookie-t, az azt küldő szolgáltató összekapcsolhatja az aktuális látogatást a korábbiakkal, azonban mivel a cookie-k a domain-hez kötődnek, erre kizárólag saját tartalma tekintetében képes. A sütik önmagukban a felhasználó azonosítására nem képesek, kizárólag a látogató számítógépének felismerésére alkalmasak.",
      "A sütik használatához való hozzájárulását bármikor megváltoztathatja.",
    ],
    en: [
      "The purpose of data management is: identification and differentiation of users; identification of the current session of users; storage of data provided during that session; prevention of data loss; identification and tracking of users; web analytics measurements.",
      "By using cookies, the Data Controller manages the following personal data: information on interests, habits, and preferences (based on browsing history), as well as data that is technically recorded during the operation of the systems: the data of the user's logged-in computer, which the Service generates during its use and which is recorded by the Data Manager's system as an automatic result of the technical processes. The automatically recorded data is automatically logged by the system upon entry or exit without the user's special declaration or action.",
      "Legal basis for data management: voluntary consent of the data subject (GDPR Article 6 (1) point a).",
      "Scope of managed data: identification number, date, time, as well as the previously visited page, as well as the data listed in the cookie statement on the website, in the case of individual cookies.",
      "The user can delete the cookie from his computer or disable the use of cookies in his browser. By prohibiting the use of cookies, the user acknowledges that the operation of the given page is not complete without a cookie. Cookies are usually managed under the browser settings menu, cookie; it is possible with the name cookie or tracking.",
      "A cookie is a package of alphanumeric information with variable content sent by the web server, which is recorded on the user's computer and stored for a predetermined validity period. The use of cookies provides the possibility to query some of the visitor's data as well as to monitor his internet usage. Therefore, the relevant user's interests, internet usage habits, and website visit history can be accurately determined. Since cookies act as a kind of label with which the website can recognise the visitor who returns to the page, they can also be used to store a valid username and password for the given page. If the website visits the user's browser and sends back the cookie previously saved on the hard drive, the service provider sending it can connect the current visit with the previous ones; however, since the cookies are linked to the domain, it can only do so with regard to its own content. The cookies themselves do not identify the user; they are only capable of recognising the visitor's computer.",
      "You can change your consent to the use of cookies at any time.",
    ],
  }
})

export const getters = {
  title: (state) => (lang) => {
    return state.title[lang];
  },
  paragraphs: (state) => (lang) => {
    return state.paragraphs[lang];
  },
}