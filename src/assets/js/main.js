import Alpine from 'alpinejs';

const isProd = process.env.NODE_ENV === 'production';

if (!isProd) {
  window.Alpine = Alpine;
}

Alpine.start();
