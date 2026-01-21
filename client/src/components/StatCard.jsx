const StatCard = ({ icon: Icon, number, label, bgColor = "bg-ssgmce-blue" }) => {
  return (
    <div className={`${bgColor} text-white rounded-lg p-5 md:p-6 text-center shadow-lg hover:scale-105 transform transition-all duration-300`}>
      {Icon && <Icon className="text-3xl md:text-4xl mx-auto mb-3 text-ssgmce-orange" />}
      <h3 className="text-2xl md:text-3xl font-bold mb-1.5">{number}</h3>
      <p className="text-sm md:text-base">{label}</p>
    </div>
  );
};

export default StatCard;
