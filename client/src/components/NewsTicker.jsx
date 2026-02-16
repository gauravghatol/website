import { useState, useEffect } from 'react';

const NewsTicker = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items && items.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <div className="bg-ssgmce-orange text-white py-3 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center">
        <div className="bg-ssgmce-dark-blue px-4 py-2 rounded font-bold mr-4 flex-shrink-0">
          LATEST
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="animate-fade-in">
            <span className="font-semibold">{items[currentIndex]?.title || 'Welcome to SSGMCE'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
