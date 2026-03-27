const NewsCard = ({
  title,
  date,
  description,
  category,
  fileUrl = "",
  showDetailsLink = false,
  dateLabel = "",
}) => {
  const safeDate = date ? new Date(date) : null;
  const dateText =
    dateLabel ||
    (safeDate && !Number.isNaN(safeDate.getTime())
      ? safeDate.toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "Latest");

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-3.5 transition-all duration-300 hover:border-gray-200 hover:shadow-md sm:p-4">
      <div className="flex gap-3 sm:gap-4">
        <div className="min-w-[4.5rem] flex-shrink-0 self-start rounded-lg bg-ssgmce-blue px-2.5 py-2 text-center text-[0.68rem] font-semibold text-white sm:min-w-[5rem] sm:px-3 sm:text-xs">
          {dateText}
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[0.62rem] font-semibold uppercase tracking-wide text-ssgmce-orange sm:text-[0.65rem]">{category}</span>
          <h4 className="mb-1 text-[clamp(0.9rem,1.8vw,1rem)] font-semibold leading-snug text-ssgmce-blue">{title}</h4>
          <p className="line-clamp-2 text-[clamp(0.74rem,1.25vw,0.8rem)] leading-relaxed text-ssgmce-muted">{description}</p>
          {showDetailsLink && fileUrl && (
            <a
              href={fileUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center text-[0.75rem] font-semibold text-ssgmce-blue transition-colors hover:text-ssgmce-orange"
            >
              Click for Details
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
