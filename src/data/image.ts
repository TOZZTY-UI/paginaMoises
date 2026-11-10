// Catálogo de imágenes utilizadas en las distintas secciones del sitio.
// Cada ruta apunta a un archivo dentro de src/assets/images.

// Crea un registro de imagen con una ruta consistente y su texto alternativo.
const image = (src: string, alt: string) => ({ src: `src/assets/images/${src}`, name: null, alt });

export const images = {
    bodas: [
        image('bodas/20240217_204605.jpg', 'bodas'),
        image('bodas/20241109_214752.jpg.jpeg', 'bodas'),
        image('bodas/20250119_000712.jpg', 'bodas'),
        image('bodas/asdas.jpeg', 'bodas'),
        image('bodas/ChatGPT Image 6 ago 2026, 02_48_34 p.m..png', 'bodas'),
        image('bodas/ChatGPT Image 6 ago 2026, 02_57_05 p.m..png', 'bodas'),
        image('bodas/FB_IMG_1772475486267.jpg', 'bodas'),
        image('bodas/file_0000000010a0820ebefeb6aec238e10c.png', 'bodas'),
        image('bodas/file_0000000023cc820e9b572997c131aabe.png', 'bodas'),
        image('bodas/file_000000003ec8820eb574d797f3d371aa.png', 'bodas'),
        image('bodas/file_0000000072dc820ebd90db3768333ada.png', 'bodas'),
        image('bodas/file_00000000a348820eab4df3242dd8e125.png', 'bodas'),
        image('bodas/file_00000000ed6c820ea6298bc09bb08e56.png', 'bodas'),
        image('bodas/file_00000000f088820eb98800c6eac34abb.png', 'bodas'),
        image('bodas/IMG-20260729-WA0667.jpg', 'bodas'),
        image('bodas/IMG-20260729-WA0668.jpg', 'bodas'),
        image('bodas/IMG-20260729-WA0669.jpg', 'bodas'),
        image('bodas/IMG-20260729-WA0670.jpg', 'bodas'),
        image('bodas/IMG-20260729-WA0672.jpg', 'bodas'),
        image('bodas/IMG-20260806-WA0222.jpg', 'bodas'),
        image('bodas/sdasdas.jpeg', 'bodas'),
        image('bodas/sdasdsadas.jpeg', 'bodas'),
        image('bodas/WhatsApp Image 2026-asdsa.jpeg', 'bodas'),
        image('bodas/Saxofón junto a copas y flores-11.png', 'bodas'),
        image('bodas/Saxofón y copas en luz cálida-9.png', 'bodas'),
        image('bodas/Saxofón junto a copas y flores-9.png', 'bodas'),
        image('bodas/Saxofón, copas y flores en la mesa-8.png', 'bodas'),
        image('bodas/Saxofón, copas y flores-6.png', 'bodas'),
        image('bodas/Saxofón, flores y copas bajo luces-7.png', 'bodas'),
        image('bodas/Saxofón, flores y copas-4.png', 'bodas'),
        image('bodas/Boda elegante con saxofón y luz cálida-5.png', 'bodas'),
        image('bodas/Elegancia nupcial con flores y saxofón-2.png', 'bodas'),
        image('bodas/Elegancia nupcial con saxofón-1.png', 'bodas'),
        image('bodas/Elegancia nupcial entre flores y saxofón-3.png', 'bodas')

    ],
    funerario: [
        image('funerario/20260108_132903.jpg.jpeg', 'funerario'),
        image('funerario/20260109_115317.jpg.jpeg', 'funerario'),
        image('funerario/20260109_115417.jpg.jpeg', 'funerario'),
        image('funerario/20260109_161919.jpg', 'funerario'),
        image('funerario/20260109_162323.jpg', 'funerario'),
        image('funerario/file_00000000127071f5a9e18618770dd612.png', 'funerario'),
        image('funerario/IMG-20260716-WA0683.jpg', 'funerario')
    ],
    '4to_medio': [
        image('4to_medio/20241207_110445.jpg', '4to_medio'),
        image('4to_medio/20241207_214512.jpg', '4to_medio'),
        image('4to_medio/IMG-20260729-WA0673.jpg', '4to_medio')
    ],
    YO: [
        image('YO/IMG-20260926-WA0063.jpg.jpeg', 'yo'),
        image('YO/file_0000000008ac820ea0a0757b58cffc18.png', 'yo'),
        image('YO/file_000000001a70820ea1065f0bc7e02e3e.png', 'yo'),
        image('YO/Retrato de músico con saxofón-2.png', 'yo'),
        image('YO/Selfie profesional junto al elefante Jumbo.png', 'yo')
    ],
    logros: [
        image('YO/logros/badge-2014.jpg', 'logros'),
        image('YO/logros/badge-2015.jpg', 'logros'),
        image('YO/logros/badge-2016.jpg', 'logros'),
        image('YO/logros/badge-2017.jpg', 'logros'),
        image('YO/logros/badge-2018.jpg', 'logros'),
        image('YO/logros/badge-2019.jpg', 'logros'),
        image('YO/logros/badge-2020.jpg', 'logros'),
        image('YO/logros/badge-2021.jpg', 'logros'),
        image('YO/logros/badge-2022.jpg', 'logros'),
        image('YO/logros/badge-2023.jpg', 'logros'),
        image('YO/logros/badge-2024.jpg', 'logros'),
        image('YO/logros/badge-2025.jpg', 'logros')
    ]
};
