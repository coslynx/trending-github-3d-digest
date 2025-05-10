import React from 'react';
import { sanitizeUrl } from 'src/utils/format.ts';

interface FooterProps {
  copyright?: string;
  socialLinks?: { icon: string; url: string; ariaLabel: string }[];
}

const Footer: React.FC<FooterProps> = ({
  copyright = '© GitHub Trending. All rights reserved.',
  socialLinks = [],
}) => {
  return (
    <footer className="bg-dark-background">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <p className="text-light-text font-roboto">{copyright}</p>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => {
            try {
              const sanitizedUrl = sanitizeUrl(link.url);
              const iconPath = `/icons/${link.icon}.svg`;

              return (
                <a
                  key={index}
                  href={sanitizedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="text-light-text hover:text-accent-teal"
                >
                  <img src={iconPath} alt={link.icon} className="h-5 w-5"/>
                </a>
              );
            } catch (error: unknown) {
              console.error('Error rendering social link:', error);
              return null;
            }
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;