import PageHeader from "../components/PageHeader";
import NewsCard from "../components/NewsCard";
import useFetch from "../hooks/useFetch";

const News = () => {
  const {
    data: noticeData,
    loading,
    error,
  } = useFetch("/api/notices");

  // Fallback data from live notices page (used only when API is unavailable).
  const staticNotices = [
    {
      _id: "1",
      title: "Registration Open for SWAYAM/NPTEL Course",
      publishDate: "2026-01-24",
      description:
        "Students are informed that registration is now open for SWAYAM/NPTEL online courses on Quantum Computing / Quantum Technology.",
      category: "Announcement",
      fileUrl:
        "https://www.ssgmce.ac.in/administrator/uploads/SWAYAMNPTEL_Notice.jpeg",
    },
    {
      _id: "2",
      title: "RECRUITMENT",
      publishDate: "2026-01-04",
      description:
        "Applications are invited for the post at Shri Gajanan Maharaj English School, Shegaon. Submit details before 13th January 2026.",
      category: "Announcement",
      fileUrl: "https://www.ssgmce.ac.in/administrator/uploads/sgmes2026.jpeg",
    },
    {
      _id: "3",
      title: "RECRUITMENT",
      publishDate: "2025-12-24",
      description:
        "Applications are invited for Assistant Professor (CSE) / Human Resources (HR) / Research Associate. Last date: 10th January 2026.",
      category: "Announcement",
      fileUrl:
        "https://www.ssgmce.ac.in/administrator/uploads/Recruitmentdated24-12-2025.pdf",
    },
    {
      _id: "4",
      title: "Ph.D. Admission Notification & Form",
      publishDate: "2025-11-29",
      description:
        "Applications are invited in prescribed format for admission to Ph.D. programmes for session 2025-26.",
      category: "Admission",
      fileUrl:
        "https://www.ssgmce.ac.in/administrator/uploads/Ph.D.%20Admission%20Notification%202025-26.pdf",
    },
    {
      _id: "5",
      title: "Open defense for PhD thesis submission",
      publishDate: "2025-11-24",
      description:
        "Open defense for PhD thesis submission is scheduled for 28th November 2025 at 12 PM onwards.",
      category: "Examination",
      fileUrl:
        "https://www.ssgmce.ac.in/administrator/uploads/CSE_Open%20Defence%20VSM.pdf",
    },
  ];

  const noticeItems =
    Array.isArray(noticeData) && noticeData.length > 0
      ? noticeData
      : staticNotices;

  return (
    <div className="animation-fade-in">
      <PageHeader
        title="Latest Notices"
        subtitle="All official notices and announcements from SSGMCE"
      />

      <section className="bg-gradient-to-b from-white to-ssgmce-surface py-8 sm:py-10 md:py-14 lg:py-16">
        <div className="container mx-auto max-w-[120rem] px-4 sm:px-5 md:px-6">
          <div className="mx-auto w-full max-w-5xl">
            {loading ? (
              <div className="py-10 text-center sm:py-12">
                <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-ssgmce-blue"></div>
                <p className="mt-4 text-sm text-gray-600 sm:text-base">Loading notices...</p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="mb-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800 sm:mb-6 sm:text-sm">
                    Live notices could not be fetched, showing latest available
                    updates.
                  </div>
                )}

                {noticeItems.length > 0 ? (
                  <div className="space-y-4">
                    {noticeItems.map((item, index) => (
                      <NewsCard
                        key={item._id || `${item.title}-${index}`}
                        title={item.title}
                        date={item.publishDate || item.date}
                        dateLabel={
                          item.day && item.month ? `${item.day} ${item.month}` : ""
                        }
                        description={item.description}
                        category={item.category || "General"}
                        fileUrl={item.fileUrl}
                        showDetailsLink
                      />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl border border-gray-100 bg-white py-10 text-center sm:py-12">
                    <p className="text-sm text-gray-600 sm:text-base">No notices available right now.</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
