const NewsCard = ({ title, date, description, category }) => {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-ssgmce-orange hover:shadow-lg transition-all duration-300">
      <div className="flex gap-3">
        <div className="bg-ssgmce-orange text-white px-3 py-1.5 rounded text-center font-bold min-w-[85px] text-xs">
          {new Date(date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
        </div>
        <div className="flex-1">
          <div className="text-[10px] text-ssgmce-light-blue font-semibold mb-1">{category}</div>
          <h4 className="text-ssgmce-blue font-bold text-sm md:text-base mb-1.5">{title}</h4>
          <p className="text-gray-600 text-xs line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
