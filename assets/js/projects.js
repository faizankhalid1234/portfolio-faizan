'use strict';

var PROJECTS = [
  {
    title: 'SelectaMaid',
    category: 'web development',
    url: 'https://selectamaid-frontend.vercel.app/',
    alt: 'SelectaMaid domestic helpers platform Singapore',
    desc: 'Singapore domestic helper hiring platform — browse verified biodatas, filter by language, experience, care skills and availability, request profiles, and explore end-to-end services including full-time maid placement, direct hire processing, work permit renewal, and maid training. Built with a clean modern UI, category-based matching (infant care, childcare, eldercare, cooking, pet care), employer reviews, FAQ, and WhatsApp support for families seeking trusted help.',
    lang: 'React.js, JavaScript, Tailwind CSS',
    backend: 'REST API / Frontend integration',
    database: 'Helper profiles & filters API',
    deploy: 'Vercel'
  },
  {
    title: 'Monal AI Dining',
    category: 'web development',
    url: 'https://ai-chat-mounal.vercel.app/',
    alt: 'Monal AI Dining chat and booking website',
    desc: 'AI-powered restaurant dining platform for Monal — warm chat board connected to an n8n production agent for table bookings, signature dish recommendations, and event planning across Islamabad, Lahore, Rawalpindi, Murree, Peshawar, and Bhera branches. Supports English and Roman Urdu, captures booking fields (name, phone, email, branch, date, time, guests), appends confirmed reservations to Google Sheets, and delivers a polished demo site with menu, branches, events, and live AI concierge chat.',
    lang: 'React.js, JavaScript, Tailwind CSS',
    backend: 'n8n Webhook, REST API',
    database: 'Google Sheets, n8n Automation',
    deploy: 'Vercel'
  },
  {
    title: 'Monal Lahore (Luxury Rooftop Restaurant)',
    category: 'web development',
    url: 'https://monual-resturent.vercel.app/',
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
    alt: 'Gym Management',
    desc: 'Premium fitness e-commerce platform for gym equipment, supplements, and accessories with hero sections, product catalog, and category browsing.',
    lang: 'React.js, JavaScript, Tailwind CSS',
    backend: 'Frontend routing & state',
    database: 'Static product data',
    deploy: 'Vercel'
  },
  {
    title: 'PakWheels Clone',
    category: 'web development',
    url: 'https://pak-front.vercel.app/',
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
    alt: 'Amazon Clone',
    desc: 'E-commerce clone with hero banner, featured products, category browsing across Electronics, Clothing, Books, search, cart, and sign-in.',
    lang: 'React.js, JavaScript',
    backend: 'SPA frontend',
    database: 'Static product catalog',
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
        '<a href="' + project.url + '" target="_blank" rel="noopener" class="project-detail__media group" aria-label="Open ' + project.title + '">' +
          '<figure class="project-detail__frame">' +
            '<span class="project-detail__thumb-name">' + project.title + '</span>' +
          '</figure>' +
        '</a>' +
        '<div class="project-detail__body">' +
          '<div class="mb-2 flex flex-wrap items-center gap-2">' +
            '<span class="project-detail__tag">' + projectCategoryLabel(project.category) + '</span>' +
          '</div>' +
          '<h3 class="project-detail__title">' + project.title + '</h3>' +
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
