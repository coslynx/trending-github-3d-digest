import React from 'react';
import Header from 'src/components/layout/Header.tsx';
import Footer from 'src/components/layout/Footer.tsx';
import 'src/styles/layout/minimal-layout.css';

interface MinimalLayoutProps {
  children: React.ReactNode;
}

const MinimalLayout: React.FC<MinimalLayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto min-h-screen flex flex-col bg-dark-background text-light-text">
      <Header />
      <main className="flex-grow p-4">
        {(() => {
          try {
            return children;
          } catch (error: unknown) {
            console.error('Error rendering children:', error);
            let errorMessage = 'Failed to load content.';
            if (error instanceof Error) {
              errorMessage = `Failed to load content: ${encodeURIComponent(error.message)}`;
            }

            return (
              <div className="bg-dark-background text-light-text p-4">
                <h1>Error</h1>
                <p>{"Failed to load content"}</p>
              </div>
            );
          }
        })()}
      </main>
      <Footer />
    </div>
  );
};

export default MinimalLayout;