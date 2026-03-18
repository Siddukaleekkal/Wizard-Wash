"use client";

import { useEffect } from "react";

export function VideoAutoplayLogic() {
    useEffect(() => {
        const playVideos = () => {
            const videos = document.querySelectorAll("video");
            videos.forEach((video) => {
                if (video.paused) {
                    video.play().catch(() => { });
                }
            });
        };

        // Run once on mount just in case
        playVideos();

        // Listen for any user interaction to unlock autoplay on mobile (Low Power Mode bypass)
        window.addEventListener("touchstart", playVideos, { passive: true });
        window.addEventListener("scroll", playVideos, { passive: true });
        window.addEventListener("click", playVideos, { passive: true });

        return () => {
            window.removeEventListener("touchstart", playVideos);
            window.removeEventListener("scroll", playVideos);
            window.removeEventListener("click", playVideos);
        };
    }, []);

    return null;
}
