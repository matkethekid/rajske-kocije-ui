import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://rajskekocije.rs',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://rajskekocije.rs/onama',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://rajskekocije.rs/kontakt',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://rajskekocije.rs/pogrebna-oprema',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://rajskekocije.rs/pogrebne-usluge',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://rajskekocije.rs/pogrebne-usluge/prevoz-pokojnika/cukarica',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://rajskekocije.rs/pogrebne-usluge/prevoz-pokojnika/dorcol',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://rajskekocije.rs/pogrebne-usluge/prevoz-pokojnika/novi-beograd',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://rajskekocije.rs/pogrebne-usluge/prevoz-pokojnika/vracar',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://rajskekocije.rs/pogrebne-usluge/prevoz-pokojnika/zemun',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://rajskekocije.rs/pogrebne-usluge/kompletna-organizacija-sahrane',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://rajskekocije.rs/pogrebne-usluge/administrativna-pomoc',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://rajskekocije.rs/pogrebne-usluge/pio-fond-naknada',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ]
}
