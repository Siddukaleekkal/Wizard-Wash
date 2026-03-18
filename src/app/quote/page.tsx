"use client";

import React, { useEffect } from 'react';
import { SimpleHeader } from '@/components/ui/simple-header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function QuotePage() {
    useEffect(() => {
        try {
            const f = document.createElement("iframe");
            let ifrmSrc = 'https://forms.zohopublic.com/omarwizard1/form/GetAFreeQuoteForm/formperma/JKnd2lv_4XpoFIS21rxUojbH3SWFcFEE_oEvAG_7KJ4?zf_rszfm=1';

            try {
                // @ts-ignore
                if (typeof ZFAdvLead !== "undefined" && typeof zfutm_zfAdvLead !== "undefined") {
                    // @ts-ignore
                    for (let prmIdx = 0; prmIdx < ZFAdvLead.utmPNameArr.length; prmIdx++) {
                        // @ts-ignore
                        let utmPm = ZFAdvLead.utmPNameArr[prmIdx];
                        // @ts-ignore
                        utmPm = (ZFAdvLead.isSameDomian && (ZFAdvLead.utmcustPNameArr.indexOf(utmPm) === -1)) ? "zf_" + utmPm : utmPm;
                        // @ts-ignore
                        let utmVal = zfutm_zfAdvLead.zfautm_gC_enc(ZFAdvLead.utmPNameArr[prmIdx]);
                        if (typeof utmVal !== "undefined") {
                            if (utmVal !== "") {
                                if (ifrmSrc.indexOf('?') > 0) {
                                    ifrmSrc = ifrmSrc + '&' + utmPm + '=' + utmVal;
                                } else {
                                    ifrmSrc = ifrmSrc + '?' + utmPm + '=' + utmVal;
                                }
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
                        if (typeof utmVal !== "undefined") {
                            if (utmVal !== "") {
                                if (ifrmSrc.indexOf('?') > 0) {
                                    ifrmSrc = ifrmSrc + '&' + utmPm + '=' + utmVal;
                                } else {
                                    ifrmSrc = ifrmSrc + '?' + utmPm + '=' + utmVal;
                                }
                            }
                        }
                    }
                }
            } catch (e) { }

            f.src = ifrmSrc;
            f.style.border = "none";
            f.style.height = "1614px";
            f.style.width = "100%";
            f.style.transition = "all 0.5s ease";
            f.setAttribute("aria-label", 'Get A Free Quote Form');

            const d = document.getElementById("zf_div_JKnd2lv_4XpoFIS21rxUojbH3SWFcFEE_oEvAG_7KJ4");
            if (d && !d.hasChildNodes()) {
                d.appendChild(f);
            }

            const handleMessage = function (event: MessageEvent) {
                const evntData = event.data;
                if (evntData && evntData.constructor === String) {
                    const zf_ifrm_data = evntData.split("|");
                    if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
                        const zf_perma = zf_ifrm_data[0];
                        const zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px";
                        const iframe = document.getElementById("zf_div_JKnd2lv_4XpoFIS21rxUojbH3SWFcFEE_oEvAG_7KJ4")?.getElementsByTagName("iframe")[0];
                        if (iframe && (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0) {
                            const prevIframeHeight = iframe.style.height;
                            let zf_tout = false;
                            if (zf_ifrm_data.length === 3) {
                                iframe.scrollIntoView();
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
            window.addEventListener('message', handleMessage, false);

            return () => {
                window.removeEventListener('message', handleMessage, false);
            };
        } catch (e) { }
    }, []);

    return (
        <main className="min-h-screen bg-[var(--color-base-main)]  flex flex-col">
            <SimpleHeader />

            {/* Hero Section for Quote Page */}
            <section className="relative pt-24 md:pt-32 pb-20 px-4 md:px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9138df]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[100px] -z-10 -translate-x-1/2" />

                <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-5/12 space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-[#9138df] font-heading font-extrabold text-sm uppercase tracking-[4px]">
                                Instant Estimates
                            </h2>
                            <h1 className="text-[#1e1e3f] text-5xl md:text-7xl font-heading font-black tracking-tighter leading-[1.1] uppercase">
                                Restore Your <br />
                                Property's Shine
                            </h1>
                        </div>

                        <p className="text-slate-600 text-xl font-body leading-relaxed max-w-xl">
                            Ready for a transformation? Fill out the form to receive a professional estimate for your residential or commercial cleaning project.
                        </p>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-7/12"
                    >
                        <div className="w-full bg-white rounded-[20px] shadow-2xl overflow-hidden min-h-[500px] p-4 flex justify-center">
                            <div id="zf_div_JKnd2lv_4XpoFIS21rxUojbH3SWFcFEE_oEvAG_7KJ4" className="w-full py-4 max-w-full overflow-hidden flex justify-center"></div>
                        </div>
                    </motion.div>

                </div>
            </section>

            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    );
}
