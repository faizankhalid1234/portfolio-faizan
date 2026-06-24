'use strict';

var PROJECTS = [
  {
    title: 'Monal Lahore (Luxury Rooftop Restaurant)',
    category: 'web development',
    url: 'https://monual-resturent.vercel.app/',
    image: './assets/images/blog-1.jpg',
    alt: 'Monal Lahore restaurant website',
    desc: 'Premium rooftop dining website with golden-evening hero, popular dishes showcase, guest testimonials, ambiance gallery, table booking, and an AI concierge for instant reservations via email and WhatsApp.',
    lang: 'React.js, JavaScript, Tailwind CSS',
    backend: 'Node.js, REST API',
    database: 'Third-party APIs (email & WhatsApp)',
    deploy: 'Vercel'
  },
  {
    title: 'Ghazi Restaurant (مطعم غازي)',
    category: 'web development',
    url: 'https://ghazi-resturent.vercel.app/',
    image: './assets/images/blog-2.jpg',
    alt: 'Ghazi Restaurant bilingual website',
    desc: 'Premium bilingual restaurant website for Ghazi Restaurant (مطعم غازي) — cinematic hero with brand storytelling, signature dishes & chef specials menu, ambiance photo gallery, guest reviews, online table reservation form, location & hours section, and instant booking via WhatsApp and email. Built with a modern dark-gold UI, smooth scroll navigation, Arabic/English-friendly layout, and fully responsive mobile-first design for diners on every device.',
    lang: 'React.js, JavaScript, Tailwind CSS',
    backend: 'Node.js, REST API',
    database: 'Third-party APIs (email & WhatsApp)',
    deploy: 'Vercel'
  },
  {
    title: 'E-Commerce Store',
    category: 'web development',
    url: 'https://ecomerce-gp49.vercel.app/',
    image: './assets/images/project-ecom.png',
    alt: 'E-Commerce Store',
    desc: 'Full-featured online store with product listing, categories, cart, checkout, order history, and secure payment flow. Includes admin-style product and user management screens.',
    lang: 'React.js, JavaScript',
    backend: 'Node.js, Express.js',
    database: 'MongoDB',
    deploy: 'Vercel'
  },
  {
    title: 'YouTube Clone',
    category: 'web development',
    url: 'https://youtube-front-chi.vercel.app/',
    image: './assets/images/project-youtube.png',
    alt: 'YouTube Clone',
    desc: 'Video streaming platform clone with dark theme — search, upload, sidebar navigation (Home, Trending, Music, Movies), video grid with thumbnails, views, and dates.',
    lang: 'React.js, JavaScript',
    backend: 'Mock API / Frontend state',
    database: 'Local storage & mock data',
    deploy: 'Vercel'
  },
  {
    title: 'Instagram Clone',
    category: 'web development',
    url: 'https://instagram-front-one-delta.vercel.app/',
    image: './assets/images/project-instagram.png',
    alt: 'Instagram Clone',
    desc: 'Social media clone with posts, feed, profile pages, sign-in/sign-up auth, image posts, likes, and comments in a clean Instagram-style UI.',
    lang: 'React.js, JavaScript',
    backend: 'React Context / mock auth',
    database: 'Client-side state',
    deploy: 'Vercel'
  },
  {
    title: 'Gym Management',
    category: 'web development',
    url: 'https://gym-fronthend.vercel.app/',
    image: './assets/images/project-gym.png',
    alt: 'Gym Management',
    desc: 'Premium fitness e-commerce platform for gym equipment, supplements, and accessories with hero sections, product catalog, and category browsing.',
    lang: 'React.js, JavaScript, Tailwind CSS',
    backend: 'Frontend routing & state',
    database: 'Static product data',
    deploy: 'Vercel'
  },
  {
    title: 'SwipePoint (Python Django)',
    category: 'applications',
    url: 'https://adorable-dream-production-b5b1.up.railway.app/admin/',
    image: './assets/images/project-swipepoint.png',
    alt: 'SwipePoint Django admin',
    desc: 'Merchant dashboard admin for managing SwipePoint charges, secure login, and operational data flows — built for back-office control and transaction oversight.',
    lang: 'Python, Django',
    backend: 'Django Admin, Django REST',
    database: 'PostgreSQL (SQLite in dev)',
    deploy: 'Railway'
  },
  {
    title: 'PakWheels Clone',
    category: 'web development',
    url: 'https://pak-front.vercel.app/',
    image: './assets/images/project-pakwheels.png',
    alt: 'PakWheels Clone',
    desc: 'Car marketplace for Pakistan — verified listings, browse cars and products, cart, orders, and a purple-gradient hero for buy & sell confidence.',
    lang: 'React.js, JavaScript',
    backend: 'React SPA architecture',
    database: 'Mock listing data',
    deploy: 'Vercel'
  },
  {
    title: 'OLX Clone',
    category: 'web development',
    url: 'https://olx-front-brown.vercel.app/',
    image: './assets/images/project-olx.png',
    alt: 'OLX Clone',
    desc: 'Classifieds marketplace to buy and sell for free — category search (Mobiles, Cars, Bikes, Houses), city filter, post ad, login, and sign up.',
    lang: 'React.js, JavaScript',
    backend: 'Component-based UI',
    database: 'Client-side listings',
    deploy: 'Vercel'
  },
  {
    title: 'MediCare',
    category: 'web development',
    url: 'https://medecine-front.vercel.app/',
    image: './assets/images/project-medicare.png',
    alt: 'MediCare pharmacy',
    desc: 'Online pharmacy to browse medicines by search, generic names, and symptoms. FDA API integration, product cards, categories, auth, and cart.',
    lang: 'React.js, JavaScript',
    backend: 'FDA Open API integration',
    database: 'External FDA API + local cart state',
    deploy: 'Vercel'
  },
  {
    title: 'Amazon Clone',
    category: 'web development',
    url: 'https://amazone-front.vercel.app/',
    image: './assets/images/project-amazon.png',
    alt: 'Amazon Clone',
    desc: 'E-commerce clone with hero banner, featured products, category browsing across Electronics, Clothing, Books, search, cart, and sign-in.',
    lang: 'React.js, JavaScript',
    backend: 'SPA frontend',
    database: 'Static product catalog',
    deploy: 'Vercel'
  },
  {
    title: 'Premium Car Collection',
    category: 'web development',
    url: 'https://front-car-teal.vercel.app/',
    image: './assets/images/project-car.png',
    alt: 'Premium Car Collection',
    desc: 'Vehicle inventory management app — add cars, track total count, and display cards with image, year, color, price, and mileage.',
    lang: 'React.js, JavaScript',
    backend: 'React state management',
    database: 'In-memory / local state',
    deploy: 'Vercel'
  },
  {
    title: 'Handi API',
    category: 'web development',
    url: 'https://handi-fronthend.vercel.app/',
    image: './assets/images/project-handi.png',
    alt: 'Handi API BIN lookup',
    desc: 'Card information lookup tool — enter first 6 digits (BIN/IIN) to fetch issuer details for quick card verification and identification.',
    lang: 'React.js, JavaScript',
    backend: 'BIN lookup API',
    database: 'External card data API',
    deploy: 'Vercel'
  },
  {
    title: 'Front Tyre',
    category: 'web development',
    url: 'https://front-tyre.vercel.app/',
    image: './assets/images/project-fronttyre.png',
    alt: 'Front Tyre tracking',
    desc: 'Car tyre management dashboard — track total cars, puncture records, recent activity, and tyre health metrics with a dark-themed UI.',
    lang: 'React.js, JavaScript',
    backend: 'Dashboard logic',
    database: 'Local / mock records',
    deploy: 'Vercel'
  },
  {
    title: 'Money Inky Six',
    category: 'applications',
    url: 'https://money-inky-six.vercel.app/',
    image: './assets/images/project-alybank.png',
    alt: 'Money Inky Six finance app',
    desc: 'Personal finance tracking application for income and expenses with a mobile-responsive, user-friendly interface.',
    lang: 'React.js, JavaScript',
    backend: 'Frontend calculations',
    database: 'Local storage',
    deploy: 'Vercel'
  },
  {
    title: 'PCU List',
    category: 'applications',
    url: 'https://pcu-list.vercel.app/',
    image: './assets/images/project-8.jpg',
    alt: 'PCU List',
    desc: 'Searchable PC listing web application with modern UI/UX and optimized performance for browsing computer listings.',
    lang: 'React.js, JavaScript',
    backend: 'Search & filter logic',
    database: 'Static JSON data',
    deploy: 'Vercel'
  }
];

function projectCategoryLabel(category) {
  if (category === 'applications') return 'Application';
  return 'Web Development';
}

function projectCard(project) {
  return (
    '<article class="project-detail active" data-filter-item data-category="' + project.category + '">' +
      '<div class="project-detail__card glass-card overflow-hidden">' +
        '<a href="' + project.url + '" target="_blank" rel="noopener" class="project-detail__media group">' +
          '<figure class="project-detail__frame">' +
            '<img src="' + project.image + '" alt="' + project.alt + '" loading="lazy" class="project-detail__img">' +
          '</figure>' +
        '</a>' +
        '<div class="project-detail__body">' +
          '<div class="mb-1 flex flex-wrap items-center gap-2">' +
            '<span class="project-detail__tag">' + projectCategoryLabel(project.category) + '</span>' +
            '<h3 class="project-detail__title">' + project.title + '</h3>' +
          '</div>' +
          '<p class="project-detail__desc">' + project.desc + '</p>' +
          '<ul class="project-meta">' +
            '<li><span class="project-meta__label">Language</span><span class="project-meta__value">' + project.lang + '</span></li>' +
            '<li><span class="project-meta__label">Backend</span><span class="project-meta__value">' + project.backend + '</span></li>' +
            '<li><span class="project-meta__label">Database</span><span class="project-meta__value">' + project.database + '</span></li>' +
            '<li><span class="project-meta__label">Deploy</span><span class="project-meta__value">' + project.deploy + '</span></li>' +
          '</ul>' +
          '<a href="' + project.url + '" target="_blank" rel="noopener" class="project-detail__link">' +
            '<ion-icon name="open-outline"></ion-icon> View Live' +
          '</a>' +
        '</div>' +
      '</div>' +
    '</article>'
  );
}

(function renderProjects() {
  var grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(projectCard).join('');
})();
