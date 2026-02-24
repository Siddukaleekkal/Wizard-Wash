const fs = require('fs');

async function getUnsplashId(query) {
    try {
        const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=1`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.results && data.results.length > 0) {
            return data.results[0].id;
        }
    } catch (e) {
        console.error("Error fetching", query, e);
    }
    return null;
}

async function main() {
    const queries = {
        "annual-wash": "beautiful clean house exterior",
        "brick-stone": "brick wall texture architecture",
        "wood-wash": "wooden deck outdoor",
        "gutter-cleaning": "house roof gutters",
        "sidewalk-deck-patio": "clean outdoor stone patio",
        "diwali-lights": "diwali festival of lights",
        "hanukkah-lights": "hanukkah menorah lights",
        "offices": "modern glass office building exterior",
        "restaurants": "restaurant exterior evening",
        "storefronts": "boutique retail storefront",
        "stadium": "empty stadium seating",
        "hoa": "upscale neighborhood suburb houses",
        "government": "classic courthouse building columns"
    };

    const results = {};
    for (const [key, q] of Object.entries(queries)) {
        const id = await getUnsplashId(q);
        // Fallback for some hard to find terms
        const finalId = id || await getUnsplashId(q.split(" ")[0]);
        results[key] = finalId;
        console.log(`${key}: https://images.unsplash.com/photo-${finalId}?q=100&w=3840&auto=format&fit=crop`);
    }
}

main();
