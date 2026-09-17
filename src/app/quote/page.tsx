"use client";

import React, { useEffect } from "react";
import SubpageHero from "@/components/SubpageHero";

export default function QuotePage() {
  useEffect(() => {
    try {
      const f = document.createElement("iframe");
      let ifrmSrc =
        "https://forms.zohopublic.com/omarwizard1/form/GetAFreeQuoteForm/formperma/JKnd2lv_4XpoFIS21rxUojbH3SWFcFEE_oEvAG_7KJ4?zf_rszfm=1";

      try {
        // @ts-ignore
        if (typeof ZFAdvLead !== "undefined" && typeof zfutm_zfAdvLead !== "undefined") {
          // @ts-ignore
          for (let prmIdx = 0; prmIdx < ZFAdvLead.utmPNameArr.length; prmIdx++) {
            // @ts-ignore
            let utmPm = ZFAdvLead.utmPNameArr[prmIdx];
            // @ts-ignore
            utmPm = ZFAdvLead.isSameDomian && ZFAdvLead.utmcustPNameArr.indexOf(utmPm) === -1 ? "zf_" + utmPm : utmPm;
            // @ts-ignore
            let utmVal = zfutm_zfAdvLead.zfautm_gC_enc(ZFAdvLead.utmPNameArr[prmIdx]);
            if (typeof utmVal !== "undefined" && utmVal !== "") {
              if (ifrmSrc.indexOf("?") > 0) {
                ifrmSrc = ifrmSrc + "&" + utmPm + "=" + utmVal;
              } else {
                ifrmSrc = ifrmSrc + "?" + utmPm + "=" + utmVal;
              }
            }
          }
        }
        // @ts-ignore
        if (typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined") {
          // @ts-ignore
          for (let prmIdx = 0; prmIdx < ZFLead.utmPNameArr.length; prmIdx++) {
            // @ts-ignore
            let utmPm = ZFLead.utmPNameArr[prmIdx];
            // @ts-ignore
            let utmVal = zfutm_zfLead.zfutm_gC_enc(ZFLead.utmPNameArr[prmIdx]);
            if (typeof utmVal !== "undefined" && utmVal !== "") {
              if (ifrmSrc.indexOf("?") > 0) {
                ifrmSrc = ifrmSrc + "&" + utmPm + "=" + utmVal;
              } else {
                ifrmSrc = ifrmSrc + "?" + utmPm + "=" + utmVal;
              }
            }
          }
        }
      } catch (e) {}

      f.src = ifrmSrc;
      f.style.border = "none";
      f.style.height = "1614px";
      f.style.width = "100%";
      f.style.transition = "all 0.5s ease";
      f.setAttribute("aria-label", "Get A Free Quote Form");

      const d = document.getElementById("zf_div_JKnd2lv_4XpoFIS21rxUojbH3SWFcFEE_oEvAG_7KJ4");
      if (d && !d.hasChildNodes()) {
        d.appendChild(f);
      }

      const handleMessage = function (event: MessageEvent) {
        const evntData = event.data;
        if (evntData && typeof evntData === "string") {
          const zf_ifrm_data = evntData.split("|");
          if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
            const zf_perma = zf_ifrm_data[0];
            const zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";
            const iframe = document
              .getElementById("zf_div_JKnd2lv_4XpoFIS21rxUojbH3SWFcFEE_oEvAG_7KJ4")
              ?.getElementsByTagName("iframe")[0];
            if (iframe && iframe.src.indexOf("formperma") > 0 && iframe.src.indexOf(zf_perma) > 0) {
              const prevIframeHeight = iframe.style.height;
              let zf_tout = false;
              if (zf_ifrm_data.length === 3) {
                iframe.scrollIntoView({ behavior: "smooth" });
                zf_tout = true;
              }

              if (prevIframeHeight !== zf_ifrm_ht_nw) {
                if (zf_tout) {
                  setTimeout(function () {
                    iframe.style.height = zf_ifrm_ht_nw;
                  }, 500);
                } else {
                  iframe.style.height = zf_ifrm_ht_nw;
                }
              }
            }
          }
        }
      };
      window.addEventListener("message", handleMessage, false);

      return () => {
        window.removeEventListener("message", handleMessage, false);
      };
    } catch (e) {}
  }, []);

  return (
    <main className="flex-grow bg-[#F9FAFB] text-[#424242]">
      <SubpageHero
        subtitle="Request an Estimate"
        title="Get a Free Quote"
        description="Fill out the form below and our team will get back to you with a detailed estimate for your property."
      />

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-4 md:p-8 flex flex-col items-center">
            <div
              id="zf_div_JKnd2lv_4XpoFIS21rxUojbH3SWFcFEE_oEvAG_7KJ4"
              className="w-full py-2 max-w-full overflow-hidden flex justify-center"
            ></div>
          </div>
        </div>
      </section>
    </main>
  );
}
