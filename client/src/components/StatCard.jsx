const StatCard = ({ icon: Icon, number, label }) => {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6">
      {Icon && (
        <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-ssgmce-blue/8 sm:mb-4 sm:h-12 sm:w-12">
          <Icon className="text-[1rem] text-ssgmce-blue sm:text-lg" />
        </div>
      )}
      <h3 className="mb-1 text-[clamp(1.35rem,3vw,1.95rem)] font-bold text-gray-800">{number}</h3>
      <p className="text-[0.7rem] font-medium uppercase tracking-wide text-ssgmce-muted sm:text-xs">{label}</p>
    </div>
  );
};

export default StatCard;
