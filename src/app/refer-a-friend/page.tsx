"use client";

import React, { useEffect } from 'react';
import { SimpleHeader } from '@/components/ui/simple-header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

// Declare Zoho global variables for TypeScript
declare global {
    interface Window {
        ZFAdvLead?: any;
        zfutm_zfAdvLead?: any;
        ZFLead?: any;
        zfutm_zfLead?: any;
    }
}

export default function ReferAFriendPage() {
    useEffect(() => {
        try {
            const f = document.createElement("iframe");
            let ifrmSrc = 'https://forms.zohopublic.com/omarwizard1/form/ReferaFriend/formperma/7bjdelq8V_3vOs9HUxdCVB8BifM01Mmw5XRQisEvM-0?zf_rszfm=1';

            try {
                if (typeof window.ZFAdvLead !== "undefined" && typeof window.zfutm_zfAdvLead !== "undefined") {
                    for (let prmIdx = 0; prmIdx < window.ZFAdvLead.utmPNameArr.length; prmIdx++) {
                        let utmPm = window.ZFAdvLead.utmPNameArr[prmIdx];
                        utmPm = (window.ZFAdvLead.isSameDomian && (window.ZFAdvLead.utmcustPNameArr.indexOf(utmPm) === -1)) ? "zf_" + utmPm : utmPm;
                        let utmVal = window.zfutm_zfAdvLead.zfautm_gC_enc(window.ZFAdvLead.utmPNameArr[prmIdx]);
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
                if (typeof window.ZFLead !== "undefined" && typeof window.zfutm_zfLead !== "undefined") {
                    for (let prmIdx = 0; prmIdx < window.ZFLead.utmPNameArr.length; prmIdx++) {
                        let utmPm = window.ZFLead.utmPNameArr[prmIdx];
                        let utmVal = window.zfutm_zfLead.zfutm_gC_enc(window.ZFLead.utmPNameArr[prmIdx]);
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
                if (!((new RegExp("[?&]referrername=")).test(ifrmSrc))) {
                    let rfr = window.location.href;

                    try {
                        rfr = window.self !== window.top ?
                            window.top.location.href :
                            (/^https?:\/\/[\w.-]+\.[a-zA-Z]{2,}/i.test(rfr) ? rfr : "");
                    } catch (e) { }

                    if (rfr && rfr !== "") {
                        if (rfr.length > 1800) {
                            let queryIndex = rfr.indexOf('?');
                            if (queryIndex > -1) {
                                rfr = rfr.substring(0, queryIndex);
                            }
                            if (rfr.length > 1800) {
                                rfr = rfr.substring(0, 1800);
                            }
                        }
                        ifrmSrc += ((ifrmSrc.indexOf('?') > 0) ? '&' : '?') + 'referrername=' + encodeURIComponent(rfr);
                    }
                }
            } catch (e) { }

            f.src = ifrmSrc;
            f.style.border = "none";
            f.style.height = "1480px";
            f.style.width = "100%";
            f.style.maxWidth = "900px";
            f.style.transition = "all 0.5s ease";
            f.setAttribute("aria-label", 'Refer a Friend');

            const container = document.getElementById("zf_div_7bjdelq8V_3vOs9HUxdCVB8BifM01Mmw5XRQisEvM-0");
            if (container && !container.querySelector('iframe')) {
                container.appendChild(f);
            }

            const handleMessage = (event: MessageEvent) => {
                const evntData = event.data;
                if (evntData && typeof evntData === "string") {
                    const zf_ifrm_data = evntData.split("|");
                    if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
                        const zf_perma = zf_ifrm_data[0];
                        const zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px";
                        const iframe = container?.getElementsByTagName("iframe")[0];
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
                window.removeEventListener('message', handleMessage);
            };
        } catch (e) {
            console.error("Zoho Form Error:", e);
        }
    }, []);

    return (
        <main className="min-h-screen bg-white flex flex-col">
            <SimpleHeader />
            
            <section className="pt-32 pb-12 lg:pt-48 lg:pb-20 px-6 bg-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-accent-purple)]/10 text-[var(--color-accent-purple)] text-xs font-black uppercase tracking-[2px]">
                            Referral Program
                        </span>
                        <h1 className="text-[#1e1e3f] text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase leading-[0.9]">
                            Refer a <span className="text-[var(--color-accent-purple)]">Friend</span>
                        </h1>
                        <p className="text-slate-600 text-lg md:text-xl font-body max-w-2xl mx-auto leading-relaxed">
                            Share the magic of a clean home! Refer a friend or neighbor to Wizard Wash, and they'll get a special offer on their first service.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 px-6 bg-white flex flex-col items-center">
                <div 
                    id="zf_div_7bjdelq8V_3vOs9HUxdCVB8BifM01Mmw5XRQisEvM-0" 
                    className="w-full flex justify-center min-h-[800px]"
                >
                    {/* Zoho Form will be injected here */}
                </div>
            </section>

            <Footer />
        </main>
    );
}
