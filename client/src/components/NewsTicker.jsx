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
    <div className="overflow-hidden bg-ssgmce-blue py-2.5 text-white">
      <div className="mx-auto flex w-full max-w-[120rem] items-center px-4 sm:px-5 lg:px-6">
        <div className="mr-3 flex-shrink-0 rounded bg-ssgmce-orange px-2.5 py-1 text-[0.64rem] font-semibold uppercase tracking-wide sm:mr-4 sm:px-3 sm:text-xs">
          Latest
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="animate-fade-in">
            <span className="text-[clamp(0.82rem,1.5vw,0.95rem)] font-medium opacity-90">{items[currentIndex]?.title || 'Welcome to SSGMCE'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
