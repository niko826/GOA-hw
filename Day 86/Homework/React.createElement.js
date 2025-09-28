import React from 'react';

export default function AppCreateElement() {
  // ========================
  // 1. Header შექმნა
  // ========================
  const header = React.createElement(
    'header',                        // ელემენტის ტიპი
    { id: 'site-header', className: 'site-header' }, // props (id, className)
    React.createElement('h1', null, 'BankHero'),     // ბავშვი 1: H1 ელემენტი
    React.createElement(
      'nav',
      { 'aria-label': 'Main navigation' },
      React.createElement('a', { href: '#hero' }, 'Home'),
      React.createElement('a', { href: '#features' }, 'Features'),
      React.createElement('a', { href: '#pricing' }, 'Pricing'),
      React.createElement('a', { href: '#contact' }, 'Contact')
    )
  );

  // ========================
  // 2. Hero სექცია
  // ========================
  const hero = React.createElement(
    'section',
    { id: 'hero', className: 'hero' },
    React.createElement('h2', null, 'Simple banking for creators'),
    React.createElement('p', null, 'Manage your money — fast and safe.'),
    React.createElement('button', { onClick: () => alert('Sign up!') }, 'Get started')
  );

  // ========================
  // 3. Features სექცია
  // ========================
  const features = React.createElement(
    'section',
    { id: 'features', className: 'features' },
    React.createElement('h2', null, 'Features'),
    React.createElement(
      'ul',
      null,
      React.createElement('li', null, React.createElement('strong', null, 'Fast transfers'), ' — Send money instantly'),
      React.createElement('li', null, React.createElement('strong', null, 'Cheap fees'), ' — Keep more of your money'),
      React.createElement('li', null, React.createElement('strong', null, '24/7 support'), ' — We are here')
    )
  );

  // ========================
  // 4. Pricing სექცია
  // ========================
  const pricing = React.createElement(
    'section',
    { id: 'pricing', className: 'pricing' },
    React.createElement('h2', null, 'Pricing'),
    React.createElement('p', null, 'Free plan • Pro plan • Business')
  );

  // ========================
  // 5. Contact სექცია
  // ========================
  const contact = React.createElement(
    'section',
    { id: 'contact', className: 'contact' },
    React.createElement('h2', null, 'Contact us'),
    React.createElement('p', null, 'Email: support@bankhero.example')
  );

  // ========================
  // საბოლოო რენდერი: ყველა სექცია ერთ div-ში
  // ========================
  return React.createElement('div', { className: 'App' }, header, hero, features, pricing, contact);
}
