import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import LibrarySidebar from "../../../components/LibrarySidebar";
import { FaBook } from "react-icons/fa";

const BookDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Book Details | SSGMCE Library";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Book Details"
        subtitle="Department-wise Book Collection"
        backgroundImage="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <LibrarySidebar />
          </div>
          <div className="lg:col-span-9 space-y-8">
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4 flex items-center gap-3">
                <FaBook className="text-ssgmce-orange" />
                Department-wise Book Collection
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Department
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Textbooks
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Reference Books
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Total Titles
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Journals
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        dept: "Computer Science & Engineering",
                        text: "12,500",
                        ref: "3,200",
                        titles: "4,800",
                        journals: "25",
                      },
                      {
                        dept: "Information Technology",
                        text: "8,400",
                        ref: "2,100",
                        titles: "3,200",
                        journals: "18",
                      },
                      {
                        dept: "Electronics & Telecommunication",
                        text: "10,200",
                        ref: "2,800",
                        titles: "4,100",
                        journals: "22",
                      },
                      {
                        dept: "Electrical Engineering",
                        text: "9,800",
                        ref: "2,600",
                        titles: "3,900",
                        journals: "20",
                      },
                      {
                        dept: "Mechanical Engineering",
                        text: "11,500",
                        ref: "3,000",
                        titles: "4,500",
                        journals: "24",
                      },
                      {
                        dept: "Civil Engineering",
                        text: "8,900",
                        ref: "2,400",
                        titles: "3,600",
                        journals: "19",
                      },
                      {
                        dept: "Basic Sciences (Physics, Chemistry, Maths)",
                        text: "15,200",
                        ref: "4,100",
                        titles: "5,200",
                        journals: "16",
                      },
                      {
                        dept: "Management & Humanities",
                        text: "8,500",
                        ref: "2,200",
                        titles: "3,100",
                        journals: "12",
                      },
                      {
                        dept: "General & Competitive Exams",
                        text: "7,310",
                        ref: "1,900",
                        titles: "2,128",
                        journals: "-",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-blue-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                          {row.dept}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                          {row.text}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                          {row.ref}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold text-ssgmce-orange">
                          {row.titles}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          {row.journals}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-100 font-bold text-gray-800 border-t border-gray-300">
                      <td className="border border-gray-300 px-6 py-4">
                        TOTAL
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-xl">
                        92,310
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-xl">
                        24,300
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-xl text-ssgmce-orange">
                        34,528
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-xl">
                        156
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Subject-wise Classification
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Subject Category
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Number of Books
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Popular Titles
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        cat: "Programming & Software Development",
                        count: "8,500+",
                        popular: "C, C++, Java, Python, Data Structures",
                      },
                      {
                        cat: "Database & Data Science",
                        count: "3,200+",
                        popular: "SQL, Machine Learning, Big Data Analytics",
                      },
                      {
                        cat: "Networks & Security",
                        count: "2,800+",
                        popular: "Computer Networks, Cyber Security, IoT",
                      },
                      {
                        cat: "Core Engineering Subjects",
                        count: "25,000+",
                        popular:
                          "Engineering Mechanics, Thermodynamics, Control Systems",
                      },
                      {
                        cat: "Mathematics & Statistics",
                        count: "6,500+",
                        popular: "Calculus, Linear Algebra, Probability",
                      },
                      {
                        cat: "General Knowledge & Aptitude",
                        count: "4,200+",
                        popular: "GATE, GRE, CAT Preparation Books",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-orange-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                          {row.cat}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold text-ssgmce-orange text-xl">
                          {row.count}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                          {row.popular}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
