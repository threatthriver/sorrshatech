import React from 'react';
import { Navigation } from './Navigation';
import Footer from '@/components/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
};
