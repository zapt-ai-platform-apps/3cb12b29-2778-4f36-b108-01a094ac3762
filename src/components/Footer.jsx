import React from 'react';
import BadgeMadeOnZapt from './BadgeMadeOnZapt';

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center p-4">
      <div>&copy; {new Date().getFullYear()} Local Store Promotions. All rights reserved.</div>
      <BadgeMadeOnZapt />
    </footer>
  );
}