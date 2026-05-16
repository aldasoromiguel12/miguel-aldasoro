const navLinks = [
    { titulo: 'Home', enlace: 'index.html' },
    { titulo: 'Computadora', enlace: 'pages/Computadoras.html' },
    { titulo: 'Celulares', enlace: 'pages/Celulares.html' },
    { titulo: 'Tablets', enlace: 'pages/Tablet.html' }
];

const productsData = {
    celulares: [
        {
            id: 'celular-13',
            title: 'iPhone 13',
            description: 'Pantalla de 6.1", buena batería y cámara dual.',
            price: 600,
            image: '../FOTOS/Iphone 13.jpg'
        },
        {
            id: 'celular-14',
            title: 'iPhone 14',
            description: 'Rendimiento rápido y gran cámara para fotos nocturnas.',
            price: 800,
            image: '../FOTOS/iphone 14.jpg'
        },
        {
            id: 'celular-15',
            title: 'iPhone 15',
            description: 'Diseño nuevo, batería mejorada y pantalla brillante.',
            price: 900,
            image: '../FOTOS/iphone 15.jpg'
        }
    ],
    computadoras: [
        {
            id: 'comp-dell',
            title: 'Computadora Dell',
            description: 'Equipo para oficina y tareas con buen desempeño.',
            price: 800,
            image: '../FOTOS/CPU DELL.jpg'
        },
        {
            id: 'comp-hp',
            title: 'Computadora HP',
            description: 'Ideal para clases y trabajo diario.',
            price: 600,
            image: '../FOTOS/CPU HP.jpg'
        },
        {
            id: 'comp-lenovo',
            title: 'Computadora Lenovo',
            description: 'Potente y confiable para uso personal y profesional.',
            price: 750,
            image: '../FOTOS/CPU LENOVO.jpg'
        }
    ],
    tablet: [
        {
            id: 'tablet-ipad',
            title: 'iPad Pro',
            description: 'Tablet premium con gran pantalla y rendimiento.',
            price: 1200,
            image: '../FOTOS/ipad-pro.png'
        },
        {
            id: 'tablet-samsung',
            title: 'Samsung Galaxy Tab S7',
            description: 'Muy buena para multimedia y entretenimiento.',
            price: 700,
            image: '../FOTOS/SamsungGalaxyTab.png'
        },
        {
            id: 'tablet-air',
            title: 'iPad Air',
            description: 'Liviana y silenciosa, ideal para estudiar o leer.',
            price: 450,
            image: '../FOTOS/Ipad Air.jpg'
        }
    ]
};

window.navLinks = navLinks;
window.productsData = productsData;
