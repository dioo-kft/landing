(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{214:function(o,t,e){"use strict";e(1),e(3);var c={data:function(){},mounted:function(){var o=this.$store;this.$store.state.cookieConsent.run({current_lang:"hu",autoclear_cookies:!0,page_scripts:!0,force_consent:!0,onFirstAction:function(t,e){t.accepted_categories.forEach((function(element){element===o.state.cookies.youtube.toggle.value&&o.commit("enableYoutubeCookies")})),t.rejected_categories.forEach((function(element){element===o.state.cookies.youtube.toggle.value&&o.commit("disableYoutubeCookies")}))},onAccept:function(t){var e=!1;t.level.forEach((function(element){element===o.state.cookies.youtube.toggle.value&&(e=!0)})),e?o.commit("enableYoutubeCookies"):o.commit("disableYoutubeCookies")},onChange:function(t,e){var c=!1;t.level.forEach((function(element){element===o.state.cookies.youtube.toggle.value&&(c=!0)})),c?o.commit("enableYoutubeCookies"):o.commit("disableYoutubeCookies")},gui_options:{consent_modal:{layout:"cloud",position:"bottom center",transition:"slide",swap_buttons:!1},settings_modal:{layout:"box",transition:"slide"}},languages:{hu:{consent_modal:{title:"Ez a weboldal sütiket használ",description:'Ez a weboldal sütiket használ a felhasználói élmény javítása érdekében. A weboldalunk használatával Ön hozzájárul az összes süti használatához, a Cookie szabályzatunknak megfelelően. <button type="button" data-cc="c-settings" class="cc-link">Személyre szabás</button>',primary_btn:{text:"ÖSSZES ELFOGADÁSA",role:"accept_all"},secondary_btn:{text:"ÖSSZES ELUTASÍTÁSA",role:"accept_necessary"}},settings_modal:{title:"COOKIE(SÜTI) BEÁLLÍTÁSOK",save_settings_btn:"BEÁLLÍTÁSOK MENTÉSE",accept_all_btn:"ÖSSZES ELFOGADÁSA",reject_all_btn:"ÖSSZES ELUTASÍTÁSA",close_btn_label:"BEZÁRÁS",cookie_table_headers:[{col1:"Név"},{col2:"Domain"},{col3:"Lejárat"},{col4:"Leírás"}],blocks:[{title:"A sütikről 📢",description:'A cookie-k kis szöveges fájlok, amelyeket az Ön által felkeresett webhelyek helyeznek el a számítógépén. A weboldalak cookie-kat használnak a felhasználók eredményes navigálásának elősegítése céljából és bizonyos funkciók végrehajtásához. A weboldal megfelelő működéséhez szükséges sütik az Ön engedélye nélkül állíthatók be. Az összes többi cookie-t jóvá kell hagyni azok böngészőben történő beállítása előtt. A sütik használatához való hozzájárulását bármikor megváltoztathatja a <a href="/cookie-tajekoztato">Cookie tájékoztató</a> oldalon.'},{title:"Alapvető működéshez szükséges sütik",description:"Ezen sütik biztosítják a weboldal megfelelő működését, megkönnyítik annak használatát, és látogatóink azonosítása nélkül gyűjtenek információt a használatáról. Ide tartozik például a sütikezelés elfogadásának státusza, a bejelentkezési módok és adatok megjegyzése, és a csökkentett funkcionalitású Google Analytics kód. Ezen sütik alkalmazása nélkül nem tudjuk garantálni weboldalunk kényelmes használatát.",toggle:{value:"necessary",enabled:!0,readonly:!0}},{title:"Harmadik féltől származó sütik - YouTube(Google)",description:'Ezeket a sütiket a YouTube állítja be a beágyazott videók megtekintésének nyomon követésére. A szolgáltatással kapcsolatos részletes tájékoztatás az alábbi linkeken érhető el: <a href="https://policies.google.com/privacy?hl=hu">https://policies.google.com/privacy?hl=hu</a><br /><a href="https://support.google.com/youtube/answer/171780?hl=hu">https://support.google.com/youtube/answer/171780?hl=hu</a>',toggle:{value:"third-party_youtube",enabled:!0,readonly:!1}}]}}}})}},r=e(47),component=Object(r.a)(c,(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",[e("navigation-bar",{attrs:{id:"navigation-bar"}}),o._v(" "),e("Nuxt"),o._v(" "),e("page-footer")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{NavigationBar:e(279).default,PageFooter:e(280).default})},216:function(o,t,e){e(217),o.exports=e(218)},258:function(o,t,e){var content=e(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(75).default)("f52d43e0",content,!0,{sourceMap:!1})},259:function(o,t,e){var c=e(74)(!1);c.push([o.i,':root{--light-bg-color:#f4f6f5;--light-accent-color:#9ca9ba;--brand-color:#fdd327;--dark-accent-color:#b32737;--dark-bg-color:#233245;scroll-behavior:smooth;background-color:#f4f6f5;background-color:var(--light-bg-color)}.navbar,.page-footer{background-color:#fdd327;background-color:var(--brand-color)}.navbar,.page-footer,.page-footer a{color:#233245;color:var(--dark-bg-color)}.page-footer a{text-decoration:underline;opacity:.7}.page-footer a:hover{opacity:1}.navbar-brand{color:#233245;color:var(--dark-bg-color);font-weight:500;font-size:1.5rem}.navbar a,.navbar a:visited{color:#233245;color:var(--dark-bg-color);opacity:.8}.navbar a:hover{opacity:1;text-decoration:none}.navbar a:active{opacity:1}.navbar a:active,a.nuxt-link-active{color:#f4f6f5;color:var(--light-bg-color)}.brand-img{max-width:120px}@media only screen and (min-width:655px){.brand-img{max-width:200px}}.page-cover-stamp{max-height:170px}.page-cover-stamp-text{color:#233245;color:var(--dark-bg-color);font-size:12px;font-weight:500;text-align:center}.elismeresek-text{color:#fdd327;color:var(--brand-color);font-style:italic}@-webkit-keyframes appear{0%{opacity:0}to{opacity:1}}@keyframes appear{0%{opacity:0}to{opacity:1}}.page-cover-stamp-box{opacity:0;-webkit-animation-name:appear;animation-name:appear;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.page-cover-stamp-box:nth-child(2){-webkit-animation-delay:.7s;animation-delay:.7s}@media only screen and (max-width:320px){.b-overlay{overflow:hidden}}#cover{background-image:linear-gradient(180deg,#233245,#4c4d63 18%,#766b80 28%,#a08a9c 38%,#caacb7 42%,#deb7bc 49%,#f0c3bf 58%,#ffd0c0 66%,#ffcaa3 74%,#ffc980 82%,#ffcc59 88%)}@media only screen and (min-width:576px){#cover{background-image:linear-gradient(to left bottom,#233245,#4c4d63 18%,#766b80 28%,#a08a9c 35%,#caacb7 42%,#deb7bc 49%,#f0c3bf 56%,#ffd0c0 63%,#ffcaa3 70%,#ffc980 77%,#ffcc59 84%,#fdd327 92%)}}#navigation-bar{overflow:hidden}#cover .btn{text-shadow:0 1px 3px #777}#cover .btn:hover{text-shadow:0 0}.navbar{box-shadow:0 10px 14px 1px rgba(0,0,0,.2)}.page-section:nth-child(odd){background-color:#f4f6f5;background-color:var(--light-bg-color);color:#233245;color:var(--dark-bg-color)}.page-section:nth-child(2n){background-color:#233245;background-color:var(--dark-bg-color);color:#f4f6f5;color:var(--light-bg-color)}.page-section-title{color:#fdd327;color:var(--brand-color);font-size:3rem;font-weight:bolder}.page-content{max-width:900px}.page-cover-title{font-size:160px;font-weight:500;color:#fdd327;color:var(--brand-color);margin-left:-.8rem}.page-cover-content{z-index:100}.bg-shape{position:relative;background-color:transparent}.page-cover-subtitle{font-size:1.6rem;color:#fdd327;color:var(--brand-color);margin-top:-1rem;margin-bottom:3rem}.cover-page-text{margin-top:-70px}.page-contact-col-bg{background-color:#b32737;background-color:var(--dark-accent-color);color:#f4f6f5;color:var(--light-bg-color);border-radius:10px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.page-contact p{line-height:1.25}.page-contact h5{font-size:1.1rem;font-weight:700;padding-top:1rem}.contact-email a{color:#fdd327;color:var(--brand-color)}@media only screen and (min-width:768px){#load-wrn-text{font-size:.9rem}}.page-contact .btn{margin:0}.btn{text-transform:uppercase;box-shadow:0 2px 2px 0 hsla(0,0%,60%,.14),0 3px 1px -2px hsla(0,0%,60%,.2),0 1px 5px 0 hsla(0,0%,60%,.12);padding:12px 30px;font-weight:400}.btn-secondary:active,.btn-secondary:hover{color:#f4f6f5;color:var(--light-bg-color);background-color:#233245;background-color:var(--dark-bg-color);border-color:#233245;border-color:var(--dark-bg-color)}.button-brand-color{color:#fff;background-color:#fdd327;background-color:var(--brand-color);border-color:#dab624}.button-outline-brand-color{color:#fdd327;color:var(--brand-color);background-color:transparent;border-color:#fdd327;border-color:var(--brand-color);border-width:3px;font-weight:700}.button-outline-brand-color:active,.button-outline-brand-color:hover{color:#233245;color:var(--dark-bg-color);background-color:#fdd327;background-color:var(--brand-color);border-color:transparent}.button-light{color:#f4f6f5;color:var(--light-bg-color);background-color:#9ca9ba;background-color:var(--light-accent-color)}.button-light-inverted{color:#69727e;background-color:#f4f6f5;background-color:var(--light-bg-color);margin-top:2rem}.contact-subtitle{margin-top:-1.5rem;margin-bottom:2rem}p{margin-bottom:.5rem}.intro-text{font-size:1.15rem;color:#7d7d6c;font-weight:500}.contact-facebook-icon{font-size:1.5rem;color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.contact-facebook-icon:hover{color:#c2ae59}.faq-question{color:#f4f6f5;color:var(--light-bg-color);background-color:#233245;background-color:var(--dark-bg-color);border-color:#233245;border-color:var(--dark-bg-color)}.btn-info:not(:disabled):not(.disabled):active,.btn-info:not(:disabled):not(.disabled):active:focus,.faq-question:active,.faq-question:focus,.faq-question:hover{color:#f4f6f5;color:var(--light-bg-color);background-color:#9ca9ba;background-color:var(--light-accent-color);border-color:#9ca9ba;border-color:var(--light-accent-color);box-shadow:#9ca9ba;box-shadow:var(--light-accent-color)}.faq-question.not-collapsed{background-color:#fdd327;background-color:var(--brand-color);border-color:#fdd327;border-color:var(--brand-color)}.faq-answer,.faq-question.not-collapsed{color:#233245;color:var(--dark-bg-color)}.carousel-caption h3{font-size:1.3rem}.carousel-inner{height:420px}.carousel-caption{color:#233245;color:var(--dark-bg-color);background-color:#9ca9ba;background-color:var(--light-accent-color);border-radius:10px;padding:1rem .5rem;font-size:14px;height:320px;top:20%;overflow:scroll}@media only screen and (min-width:375px){.carousel-inner{height:420px}.carousel-caption h3{font-size:1.5rem}.carousel-caption{top:20%;height:350px;font-size:16px}}@media only screen and (min-width:425px){.carousel-inner{height:420px}.carousel-caption{top:25%;height:320px}}@media only screen and (min-width:576px){.carousel-inner{height:420px}.carousel-caption{top:20%;height:300px;overflow:hidden}}@media only screen and (min-width:768px){.carousel-inner{height:370px}.carousel-caption{top:18%;height:250px;overflow:hidden}}@media only screen and (min-width:992px){.carousel-inner{height:280px}.carousel-caption{top:8%;height:200px;overflow:hidden}}.quote-author{font-style:italic}.overlay-content{transform:translateY(30%);background-color:#f4f6f5;background-color:var(--light-bg-color)}@media only screen and (min-width:280px){.overlay-content{transform:translateY(20%)}}@media only screen and (min-width:300px){.overlay-content{transform:translateY(15%)}}@media only screen and (min-width:380px){.overlay-content{transform:translateY(0);overflow:hidden}}.b-overlay{overflow:scroll}@media only screen and (min-width:380px){.b-overlay{overflow:hidden}}.b-overlay .bg-light{background-color:#f4f6f5!important;background-color:var(--light-bg-color)!important}.b-overlay div.position-absolute{width:100%}#privacy-policy ul{list-style:none}#privacy-policy ul li:before{content:"\\2022";color:#fdd327;color:var(--brand-color);font-weight:700;display:inline-block;width:1em;margin-left:-1em}',""]),o.exports=c},260:function(o,t,e){var content=e(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(75).default)("78ba1308",content,!0,{sourceMap:!1})},261:function(o,t,e){var c=e(74)(!1);c.push([o.i,':root{--cc-bg:#fff;--cc-text:#2d4156;--cc-btn-primary-bg:#2d4156;--cc-btn-primary-text:var(--cc-bg);--cc-btn-primary-hover-bg:#1d2e38;--cc-btn-secondary-bg:#eaeff2;--cc-btn-secondary-text:var(--cc-text);--cc-btn-secondary-hover-bg:#d8e0e6;--cc-toggle-bg-off:#919ea6;--cc-toggle-bg-on:var(--cc-btn-primary-bg);--cc-toggle-bg-readonly:#d5dee2;--cc-toggle-knob-bg:#fff;--cc-toggle-knob-icon-color:#ecf2fa;--cc-block-text:var(--cc-text);--cc-cookie-category-block-bg:#f0f4f7;--cc-cookie-category-block-bg-hover:#e9eff4;--cc-section-border:#f1f3f5;--cc-cookie-table-border:#e9edf2;--cc-overlay-bg:rgba(4,6,8,0.85);--cc-webkit-scrollbar-bg:#cfd5db;--cc-webkit-scrollbar-bg-hover:#9199a0}.c_darkmode{--cc-bg:#181b1d;--cc-text:#d8e5ea;--cc-btn-primary-bg:#a6c4dd;--cc-btn-primary-text:#000;--cc-btn-primary-hover-bg:#c2dff7;--cc-btn-secondary-bg:#33383c;--cc-btn-secondary-text:var(--cc-text);--cc-btn-secondary-hover-bg:#3e454a;--cc-toggle-bg-off:#667481;--cc-toggle-bg-on:var(--cc-btn-primary-bg);--cc-toggle-bg-readonly:#454c54;--cc-toggle-knob-bg:var(--cc-cookie-category-block-bg);--cc-toggle-knob-icon-color:var(--cc-bg);--cc-block-text:#b3bfc5;--cc-cookie-category-block-bg:#23272a;--cc-cookie-category-block-bg-hover:#2b3035;--cc-section-border:#292d31;--cc-cookie-table-border:#2b3035;--cc-webkit-scrollbar-bg:#667481;--cc-webkit-scrollbar-bg-hover:#9199a0}.cc_div *,.cc_div :after,.cc_div :before{box-sizing:border-box;float:none;font-style:inherit;font-feature-settings:normal;font-variant:normal;font-weight:inherit;font-family:inherit;line-height:1.2;font-size:1em;transition:none;-webkit-animation:none;animation:none;margin:0;padding:0;text-transform:none;letter-spacing:unset;color:inherit;background:0 0;border:none;box-shadow:none;text-decoration:none;text-align:left;visibility:unset}.cc_div{font-size:16px;font-weight:400;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;color:#2d4156;color:var(--cc-text)}#c-ttl,#s-bl td:before,#s-ttl,.cc_div .b-tl,.cc_div .c-bn{font-weight:600}#cm,#s-bl .act .b-acc,#s-inr,.cc_div .b-tl,.cc_div .c-bl{border-radius:.35em}#s-bl .act .b-acc{border-top-left-radius:0;border-top-right-radius:0}.cc_div a,.cc_div button,.cc_div input{-webkit-appearance:none;-moz-appearance:none;appearance:none}.cc_div a{border-bottom:1px solid}.cc_div a:hover{text-decoration:none;border-color:transparent}#cm-ov,#cs-ov,.c--anim #cm,.c--anim #s-cnt,.c--anim #s-inr{transition:visibility .25s linear,opacity .25s ease,transform .25s ease!important}.c--anim .c-bn{transition:background-color .25s ease!important}.c--anim #cm.bar.slide,.c--anim #cm.bar.slide+#cm-ov,.c--anim .bar.slide #s-inr,.c--anim .bar.slide+#cs-ov{transition:visibility .4s ease,opacity .4s ease,transform .4s ease!important}#cm.bar.slide,.cc_div .bar.slide #s-inr{transform:translateX(100%);opacity:1}#cm.bar.top.slide,.cc_div .bar.left.slide #s-inr{transform:translateX(-100%);opacity:1}#cm.slide,.cc_div .slide #s-inr{transform:translateY(1.6em)}#cm.top.slide{transform:translateY(-1.6em)}#cm.bar.slide{transform:translateY(100%)}#cm.bar.top.slide{transform:translateY(-100%)}.show--consent .c--anim #cm,.show--consent .c--anim #cm.bar,.show--settings .c--anim #s-inr,.show--settings .c--anim .bar.slide #s-inr{opacity:1;transform:scale(1);visibility:visible!important}.show--consent .c--anim #cm.box.middle,.show--consent .c--anim #cm.cloud.middle{transform:scale(1) translateY(-50%)}.show--settings .c--anim #s-cnt{visibility:visible!important}.force--consent.show--consent .c--anim #cm-ov,.show--settings .c--anim #cs-ov{visibility:visible!important;opacity:1!important}#cm{font-family:inherit;padding:1.1em 1.8em 1.4em;position:fixed;z-index:1;background:#fff;background:var(--cc-bg);max-width:24.2em;width:100%;bottom:1.25em;right:1.25em;box-shadow:0 .625em 1.875em #000;box-shadow:0 .625em 1.875em rgba(2,2,3,.28);opacity:0;visibility:hidden;transform:scale(.95);line-height:normal}#cc_div #cm{display:block!important}#c-ttl{margin-bottom:.7em;font-size:1.05em}.cloud #c-ttl{margin-top:-.15em}#c-txt{font-size:.9em;line-height:1.5em}.cc_div #c-bns{display:flex;justify-content:space-between;margin-top:1.4em}.cc_div .c-bn{color:#40505a;color:#2d4156;color:var(--cc-btn-secondary-text);background:#e5ebef;background:#eaeff2;background:var(--cc-btn-secondary-bg);padding:1em 1.7em;display:inline-block;cursor:pointer;font-size:.82em;-moz-user-select:none;-webkit-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;text-align:center;border-radius:4px;flex:1}#c-bns button+button,#s-c-bn,#s-cnt button+button{float:right;margin-left:1em}#s-cnt #s-rall-bn{float:none}#cm .c_link:active,#cm .c_link:hover,#s-c-bn:active,#s-c-bn:hover,#s-cnt button+button:active,#s-cnt button+button:hover{background:#d8e0e6;background:var(--cc-btn-secondary-hover-bg)}#s-cnt{position:fixed;top:0;left:0;width:100%;z-index:101;display:table;height:100%;visibility:hidden}#s-bl{outline:0}#s-bl .title{margin-top:1.4em}#s-bl .b-bn,#s-bl .title:first-child{margin-top:0}#s-bl .b-acc .p{margin-top:0;padding:1em}#s-cnt .b-bn .b-tl{display:block;font-family:inherit;font-size:.95em;width:100%;position:relative;padding:1.3em 6.4em 1.3em 2.7em;background:0 0;transition:background-color .25s ease}#s-cnt .b-bn .b-tl.exp{cursor:pointer}#s-cnt .act .b-bn .b-tl{border-bottom-right-radius:0;border-bottom-left-radius:0}#s-cnt .b-bn .b-tl:active,#s-cnt .b-bn .b-tl:hover{background:#e9eff4;background:var(--cc-cookie-category-block-bg-hover)}#s-bl .b-bn{position:relative}#s-bl .c-bl{padding:1em;margin-bottom:.5em;border:1px solid #f1f3f5;border-color:var(--cc-section-border);transition:background-color .25s ease}#s-bl .c-bl:hover{background:#f0f4f7;background:var(--cc-cookie-category-block-bg)}#s-bl .c-bl:last-child{margin-bottom:.5em}#s-bl .c-bl:first-child{transition:none;padding:0;margin-top:0;border:none;margin-bottom:2em}#s-bl .c-bl:not(.b-ex):first-child:hover{background:0 0;background:unset}#s-bl .c-bl.b-ex{padding:0;border:none;background:#f0f4f7;background:var(--cc-cookie-category-block-bg);transition:none}#s-bl .c-bl.b-ex+.c-bl{margin-top:2em}#s-bl .c-bl.b-ex+.c-bl.b-ex{margin-top:0}#s-bl .c-bl.b-ex:first-child{margin-bottom:1em;margin-bottom:.5em}#s-bl .b-acc{max-height:0;overflow:hidden;padding-top:0;margin-bottom:0;display:none}#s-bl .act .b-acc{max-height:100%;display:block;overflow:hidden}#s-cnt .p{font-size:.9em;line-height:1.5em;margin-top:.85em;color:#2d4156;color:var(--cc-block-text)}.cc_div .b-tg .c-tgl:disabled{cursor:not-allowed}#c-vln{display:table-cell;vertical-align:middle;position:relative}#cs{padding:0 1.7em;width:100%;position:fixed;left:0;right:0;top:0;bottom:0}#cs,#s-inr{height:100%}#s-inr{max-width:45em;margin:0 auto;transform:scale(.96);opacity:0;padding-top:4.75em;padding-bottom:4.75em;position:relative;overflow:hidden;visibility:hidden;box-shadow:0 13px 27px -5px rgba(3,6,9,.26)}#s-bns,#s-hdr,#s-inr{background:#fff;background:var(--cc-bg)}#s-bl{overflow-y:auto;overflow-y:overlay;overflow-x:hidden;height:100%;padding:1.3em 2.1em;display:block;width:100%}#s-bns{position:absolute;bottom:0;left:0;right:0;padding:1em 2.1em;border-color:#f1f3f5;border-color:var(--cc-section-border);border-top:1px solid #f1f3f5;border-top-color:var(--cc-section-border);height:4.75em}.cc_div .cc-link{color:#253b48;color:#2d4156;color:var(--cc-btn-primary-bg);border-color:#2d4156;border-left-color:var(--cc-btn-primary-bg);border-bottom:1px solid #253b48;border-bottom-color:var(--cc-btn-primary-bg);border-right-color:var(--cc-btn-primary-bg);border-top-color:var(--cc-btn-primary-bg);display:inline;padding-bottom:0;text-decoration:none;cursor:pointer;font-weight:600}.cc_div .cc-link:active,.cc_div .cc-link:hover{border-color:transparent}#c-bns button:first-child,#s-bns button:first-child{color:#fff;color:var(--cc-btn-primary-text);background:#253b48;background:#2d4156;background:var(--cc-btn-primary-bg)}#c-bns.swap button:first-child{color:#40505a;color:#2d4156;color:var(--cc-btn-secondary-text);background:#e5ebef;background:#eaeff2;background:var(--cc-btn-secondary-bg)}#c-bns.swap button:last-child{color:#fff;color:var(--cc-btn-primary-text);background:#253b48;background:#2d4156;background:var(--cc-btn-primary-bg)}.cc_div .b-tg .c-tgl:checked~.c-tg{background:#253b48;background:#2d4156;background:var(--cc-toggle-bg-on)}#c-bns.swap button:last-child:active,#c-bns.swap button:last-child:hover,#c-bns button:first-child:active,#c-bns button:first-child:hover,#s-bns button:first-child:active,#s-bns button:first-child:hover{background:#1d2e38;background:var(--cc-btn-primary-hover-bg)}#c-bns.swap button:first-child:active,#c-bns.swap button:first-child:hover{background:#d8e0e6;background:var(--cc-btn-secondary-hover-bg)}#s-hdr{position:absolute;top:0;width:100%;display:table;padding:0 2.1em;height:4.75em;z-index:2;border-color:#f1f3f5;border-left-color:var(--cc-section-border);border-bottom:1px solid #f1f3f5;border-bottom-color:var(--cc-section-border);border-right-color:var(--cc-section-border);border-top-color:var(--cc-section-border)}#s-hdr,#s-ttl{vertical-align:middle}#s-ttl{display:table-cell;font-size:1em}#s-c-bn{padding:0;width:1.7em;height:1.7em;font-size:1.45em;margin:0;font-weight:400;position:relative}#s-c-bnc{display:table-cell;vertical-align:middle}.cc_div span.t-lb{position:absolute;top:0;z-index:-1;opacity:0;pointer-events:none;overflow:hidden}#c_policy__text{height:31.25em;overflow-y:auto;margin-top:1.25em}#c-s-in{position:relative;transform:translateY(-50%);top:50%;height:100%;height:calc(100% - 2.5em);max-height:37.5em}@media screen and (min-width:688px){#s-bl::-webkit-scrollbar{width:.9em;height:100%;background:0 0;border-radius:0 .25em .25em 0}#s-bl::-webkit-scrollbar-thumb{border:.25em solid #fff;border:.25em solid var(--cc-bg);background:#cfd5db;background:var(--cc-webkit-scrollbar-bg);border-radius:100em}#s-bl::-webkit-scrollbar-thumb:hover{background:#9199a0;background:var(--cc-webkit-scrollbar-bg-hover)}#s-bl::-webkit-scrollbar-button{width:10px;height:5px}}.cc_div .b-tg{right:0;bottom:0;display:inline-block;margin:auto;right:1.2em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle}.cc_div .b-tg,.cc_div .b-tg .c-tgl{position:absolute;top:0;cursor:pointer}.cc_div .b-tg .c-tgl{display:block;left:0;margin:0;border:0}.cc_div .b-tg .c-tg{position:absolute;background:#919ea6;background:var(--cc-toggle-bg-off);transition:background-color .25s ease,box-shadow .25s ease;pointer-events:none}.cc_div .b-tg,.cc_div .b-tg .c-tg,.cc_div .b-tg .c-tgl,.cc_div span.t-lb{width:3.4em;height:1.5em;border-radius:4em}.cc_div .b-tg .c-tg.c-ro{cursor:not-allowed}.cc_div .b-tg .c-tgl~.c-tg.c-ro{background:#d5dee2;background:var(--cc-toggle-bg-readonly)}.cc_div .b-tg .c-tgl~.c-tg.c-ro:after{box-shadow:none}.cc_div .b-tg .c-tg:after{content:"";position:relative;display:block;left:.125em;top:.125em;width:1.25em;height:1.25em;border:none;box-sizing:content-box;background:#fff;background:var(--cc-toggle-knob-bg);box-shadow:0 1px 2px rgba(24,32,35,.36);transition:transform .25s ease;border-radius:100%}.cc_div .b-tg .c-tgl:checked~.c-tg:after{transform:translateX(1.9em)}#s-bl table,#s-bl td,#s-bl th{border:none}#s-bl tbody tr{transition:background-color .25s ease}#s-bl tbody tr:hover{background:#e9eff4;background:var(--cc-cookie-category-block-bg-hover)}#s-bl table{text-align:left;border-collapse:collapse;width:100%;padding:0;margin:0;overflow:hidden}#s-bl td,#s-bl th{text-align:left;vertical-align:top;font-size:.8em;padding:.8em .625em .8em 1.2em}#s-bl th{font-family:inherit;padding:1.2em}#s-bl thead tr:first-child{border-color:#e9edf2;border-left-color:var(--cc-cookie-table-border);border-bottom:1px solid #e9edf2;border-bottom-color:var(--cc-cookie-table-border);border-right-color:var(--cc-cookie-table-border);border-top-color:var(--cc-cookie-table-border)}.force--consent #cs,.force--consent #s-cnt{width:100vw}#cm-ov,#cs-ov{position:fixed;left:0;right:0;top:0;bottom:0;visibility:hidden;opacity:0;background:#070707;background:rgba(4,6,8,.85);background:var(--cc-overlay-bg);display:none;transition:none}.c--anim #cs-ov,.force--consent .c--anim #cm-ov,.force--consent.show--consent #cm-ov,.show--settings #cs-ov{display:block}#cs-ov{z-index:2}.force--consent .cc_div{position:fixed;top:0;left:0;bottom:0;width:100%;width:100vw;visibility:hidden;transition:visibility .25s linear}.force--consent.show--consent .c--anim .cc_div,.force--consent.show--settings .c--anim .cc_div{visibility:visible}.force--consent #cm{position:absolute}.force--consent #cm.bar{width:100vw;max-width:100vw}html.force--consent.show--consent{overflow-y:hidden!important}html.force--consent.show--consent,html.force--consent.show--consent body{height:auto!important;overflow-x:hidden!important}.cc_div .act .b-bn .exp:before,.cc_div .b-bn .exp:before{border:solid #2d4156;border-color:var(--cc-btn-secondary-text);border-width:0 2px 2px 0;padding:.2em;display:inline-block;content:"";margin-right:15px;position:absolute;transform:translateY(-50%) rotate(45deg);left:1.2em;top:50%}.cc_div .act .b-bn .b-tl:before{transform:translateY(-20%) rotate(225deg)}.cc_div .on-i:before{border:solid #ecf2fa;border-color:var(--cc-toggle-knob-icon-color);border-width:0 2px 2px 0;display:inline-block;padding:.1em .1em .45em;top:.37em;left:.75em}#s-c-bn:after,#s-c-bn:before,.cc_div .on-i:before{content:"";margin:0 auto;transform:rotate(45deg);position:absolute}#s-c-bn:after,#s-c-bn:before{left:.82em;top:.58em;height:.6em;width:1.5px;background:#444d53;background:#2d4156;background:var(--cc-btn-secondary-text);border-radius:1em}#s-c-bn:after{transform:rotate(-45deg)}.cc_div .off-i,.cc_div .on-i{height:100%;width:50%;position:absolute;right:0;display:block;text-align:center;transition:opacity .15s ease}.cc_div .on-i{left:0;opacity:0}.cc_div .off-i:after,.cc_div .off-i:before{right:.8em;top:.42em;content:" ";height:.7em;width:.09375em;display:block;background:#cdd6dc;background:#ecf2fa;background:var(--cc-toggle-knob-icon-color);margin:0 auto;position:absolute;transform-origin:center}.cc_div .off-i:before{transform:rotate(45deg)}.cc_div .off-i:after{transform:rotate(-45deg)}.cc_div .b-tg .c-tgl:checked~.c-tg .on-i{opacity:1}.cc_div .b-tg .c-tgl:checked~.c-tg .off-i{opacity:0}#cm.box.middle,#cm.cloud.middle{top:50%;transform:translateY(-37%);bottom:auto}#cm.box.middle.zoom,#cm.cloud.middle.zoom{transform:scale(.95) translateY(-50%)}#cm.box.center,#cm.cloud{left:1em;right:1em;margin:0 auto}#cm.cloud{max-width:50em;text-align:center;overflow:hidden;padding:1.3em 2em;width:unset}.cc_div .cloud #c-inr{display:table;width:100%}.cc_div .cloud #c-inr-i{width:70%;display:table-cell;vertical-align:top;padding-right:2.4em}.cc_div .cloud #c-txt{font-size:.85em}.cc_div .cloud #c-bns{min-width:170px;display:table-cell;vertical-align:middle}#cm.cloud .c-bn{margin:.625em 0 0;width:100%}#cm.cloud .c-bn:first-child{margin:0}#cm.cloud.left{margin-right:1.25em}#cm.cloud.right{margin-left:1.25em}#cm.bar{width:100%;max-width:100%;left:0;right:0;bottom:0;border-radius:0;position:fixed;padding:2em}#cm.bar #c-inr{max-width:32em;margin:0 auto}#cm.bar #c-bns{max-width:33.75em}#cm.bar #cs{padding:0}.cc_div .bar #c-s-in{top:0;transform:none;height:100%;max-height:100%}.cc_div .bar #s-bl,.cc_div .bar #s-bns,.cc_div .bar #s-hdr{padding-left:1.6em;padding-right:1.6em}.cc_div .bar #cs{padding:0}.cc_div .bar #s-inr{margin:0 0 0 auto;border-radius:0;max-width:32em}.cc_div .bar.left #s-inr{margin-left:0;margin-right:auto}.cc_div .bar #s-bl table,.cc_div .bar #s-bl tbody,.cc_div .bar #s-bl td,.cc_div .bar #s-bl th,.cc_div .bar #s-bl thead,.cc_div .bar #s-bl tr,.cc_div .bar #s-cnt{display:block}.cc_div .bar #s-bl thead tr{position:absolute;top:-9999px;left:-9999px}.cc_div .bar #s-bl tr{border-color:#e9edf2;border-color:var(--cc-cookie-table-border);border-top:1px solid #e3e7ed;border-top-color:var(--cc-cookie-table-border)}.cc_div .bar #s-bl td{border:none;position:relative;padding-left:35%}.cc_div .bar #s-bl td:before{position:absolute;left:1em;padding-right:.625em;white-space:nowrap;content:attr(data-column);color:#000;color:#2d4156;color:var(--cc-text);overflow:hidden;text-overflow:ellipsis}#cm.top{bottom:auto;top:1.25em}#cm.left{right:auto;left:1.25em}#cm.right{left:auto;right:1.25em}#cm.bar.left,#cm.bar.right{left:0;right:0}#cm.bar.top{top:0}@media screen and (max-width:688px){#cm,#cm.cloud,#cm.left,#cm.right{width:auto;max-width:100%;margin:0;padding:1.4em!important;right:1em;left:1em;bottom:1em;display:block}.force--consent #cm,.force--consent #cm.cloud{width:auto;max-width:100vw}#cm.top{top:1em;bottom:auto}#cm.bottom{bottom:1em;top:auto}#cm.bar.bottom{bottom:0}#cm.cloud .c-bn{font-size:.85em}#s-bns,.cc_div .bar #s-bns{padding:1em 1.3em}.cc_div .bar #s-inr{max-width:100%;width:100%}.cc_div .cloud #c-inr-i{padding-right:0}#cs{border-radius:0;padding:0}#c-s-in{max-height:100%;height:100%;top:0;transform:none}.cc_div .b-tg{transform:scale(1.1);right:1.1em}#s-inr{margin:0;padding-bottom:7.9em;border-radius:0}#s-bns{height:7.9em}#s-bl,.cc_div .bar #s-bl{padding:1.3em}#s-hdr,.cc_div .bar #s-hdr{padding:0 1.3em}#s-bl table{width:100%}#s-inr.bns-t{padding-bottom:10.5em}.bns-t #s-bns{height:10.5em}.cc_div .bns-t .c-bn{font-size:.83em;padding:.9em 1.6em}#s-cnt .b-bn .b-tl{padding-top:1.2em;padding-bottom:1.2em}#s-bl table,#s-bl tbody,#s-bl td,#s-bl th,#s-bl thead,#s-bl tr,#s-cnt{display:block}#s-bl thead tr{position:absolute;top:-9999px;left:-9999px}#s-bl tr{border-color:#e9edf2;border-color:var(--cc-cookie-table-border);border-top:1px solid #e3e7ed;border-top-color:var(--cc-cookie-table-border)}#s-bl td{border:none;position:relative;padding-left:35%}#s-bl td:before{position:absolute;left:1em;padding-right:.625em;white-space:nowrap;content:attr(data-column);color:#000;color:#2d4156;color:var(--cc-text);overflow:hidden;text-overflow:ellipsis}#cm .c-bn,.cc_div .c-bn{width:100%;margin-right:0}#s-cnt #s-rall-bn{margin-left:0}.cc_div #c-bns{flex-direction:column}#c-bns button+button,#s-cnt button+button{margin-top:.625em;margin-left:0;float:unset}#cm.box,#cm.cloud{left:1em;right:1em;width:auto}#cm.cloud.left,#cm.cloud.right{margin:0}.cc_div .cloud #c-bns,.cc_div .cloud #c-inr,.cc_div .cloud #c-inr-i{display:block;width:auto;min-width:unset}.cc_div .cloud #c-txt{font-size:.9em}.cc_div .cloud #c-bns{margin-top:1.625em}}.cc_div.ie #c-vln{height:100%;padding-top:5.62em}.cc_div.ie .bar #c-vln{padding-top:0}.cc_div.ie #cs{max-height:37.5em;position:relative;top:0;margin-top:-5.625em}.cc_div.ie .bar #cs{margin-top:0;max-height:100%}.cc_div.ie #cm{border:1px solid #dee6e9}.cc_div.ie #c-s-in{top:0}.cc_div.ie .b-tg{padding-left:1em;margin-bottom:.7em}.cc_div.ie .b-tg .c-tgl:checked~.c-tg:after{left:1.95em}.cc_div.ie #s-bl table{overflow:auto}.cc_div.ie .b-tg .c-tg{display:none}.cc_div.ie .b-tg .c-tgl{position:relative;display:inline-block;vertical-align:middle;margin-bottom:.2em;height:auto}.cc_div.ie #s-cnt .b-bn .b-tl{padding:1.3em 6.4em 1.3em 1.4em}.cc_div.ie .bar #s-bl td:before{display:none}.cc_div.ie .bar #s-bl td{padding:.8em .625em .8em 1.2em}.cc_div.ie .bar #s-bl thead tr{position:relative}.cc_div.ie .b-tg .t-lb{filter:alpha(opacity=0)}.cc_div.ie #cm-ov,.cc_div.ie #cs-ov{filter:alpha(opacity=80)}',""]),o.exports=c},262:function(o,t,e){o.exports=e.p+"img/DIOO_name-navbar.a00c3f6.png"},263:function(o,t,e){"use strict";e.r(t),e.d(t,"state",(function(){return c})),e.d(t,"mutations",(function(){return r}));var c=function(){return{cookieConsent:initCookieConsent(),cookies:{youtube:{toggle:{value:"third-party_youtube",enabled:!0,readonly:!1}}}}},r={enableYoutubeCookies:function(o){o.cookies.youtube.toggle.enabled=!0},disableYoutubeCookies:function(o){o.cookies.youtube.toggle.enabled=!1}}},279:function(o,t,e){"use strict";e.r(t);var c=e(47),component=Object(c.a)({},(function(){var o=this,t=o.$createElement,c=o._self._c||t;return c("b-navbar",{attrs:{sticky:"",toggleable:"lg"}},[c("b-navbar-brand",[c("nuxt-link",{attrs:{to:"/"}},[c("img",{attrs:{src:e(262)}})])],1),o._v(" "),c("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),o._v(" "),c("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[c("b-navbar-nav",{directives:[{name:"b-scrollspy",rawName:"v-b-scrollspy",value:0,expression:"0"}],staticClass:"ml-auto"},[c("b-nav-item",[c("nuxt-link",{attrs:{to:"/#intro"}},[o._v("Mi a DIOO?")])],1),o._v(" "),c("b-nav-item",[c("nuxt-link",{attrs:{to:"/#faq"}},[o._v("Gy.I.K.")])],1),o._v(" "),c("b-nav-item",[c("nuxt-link",{attrs:{to:"/#contact"}},[o._v("Kapcsolat")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},280:function(o,t,e){"use strict";e.r(t);var c=e(47),component=Object(c.a)({},(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("b-container",{staticClass:"page-footer my-0 py-3",attrs:{fluid:""}},[e("b-row",{attrs:{"align-h":"between"}},[e("b-col",{attrs:{cols:"auto"}},[e("p",[o._v("Copyright © 2022 DIOO Digitális Oktató | Minden jog fenntartva.")])]),o._v(" "),e("b-col",{attrs:{cols:"auto"}},[e("b-row",[e("b-col",{attrs:{cols:"auto"}},[e("a",{attrs:{href:"https://system.dioo.hu/ovonok#login_form"}},[o._v("Pedagógusi Felület")])]),o._v(" "),e("b-col",{attrs:{cols:"auto"}},[e("nuxt-link",{attrs:{to:"/cookie-tajekoztato"}},[o._v("Cookie Tájékoztató")])],1),o._v(" "),e("b-col",{attrs:{cols:"auto"}},[e("nuxt-link",{attrs:{to:"/adatvedelmi-szabalyzat"}},[o._v("GDPR Adatvédelmi Szabályzat")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}},[[216,10,1,11]]]);