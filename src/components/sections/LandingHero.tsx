import React from 'react';
import ThreeScene from 'src/components/3d/ThreeScene.tsx';
import 'src/styles/components/landing-hero.css';

const LandingHero: React.FC = () => {
  return (
    <header className="relative pt-16 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="font-bold text-3xl md:text-5xl text-light-text leading-tight font-roboto mb-4">
              Explore Trending GitHub Projects in 3D
            </h1>
            <p className="text-light-text font-open-sans text-lg mb-8">
              Discover the most popular GitHub projects in an immersive 3D environment.
              See what the community is building and contribute to the future of technology.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <ThreeScene />
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingHero;