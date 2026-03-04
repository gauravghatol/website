import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Admissions from "./pages/Admissions";
import Faculty from "./pages/Faculty";
import Placements from "./pages/Placements";
import Research from "./pages/Research";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import AtGlance from "./pages/about/AtGlance";
import BoardOfDirectors from "./pages/about/BoardOfDirectors";
import Committees from "./pages/about/Committees";
import GoverningBody from "./pages/about/GoverningBody";
import Inspiration from "./pages/about/Inspiration";
import Organization from "./pages/about/Organization";
import PrincipalMsg from "./pages/about/PrincipalMsg";
import VisionMission from "./pages/about/VisionMission";
import AcademicPlanner from "./pages/academics/AcademicPlanner";
import AnnualReports from "./pages/academics/AnnualReports";
import IncentiveMarks from "./pages/academics/IncentiveMarks";
import InnovativePractices from "./pages/academics/InnovativePractices";
import Rubrics from "./pages/academics/Rubrics";
import RulesRegulations from "./pages/academics/RulesRegulations";
import SessionalMarks from "./pages/academics/SessionalMarks";
import StudentNotices from "./pages/academics/StudentNotices";
import Syllabus from "./pages/academics/Syllabus";
import TeachingLearning from "./pages/academics/TeachingLearning";
import TimeTable from "./pages/academics/TimeTable";
import ACM from "./pages/activities/ACM";
import Cultural from "./pages/activities/Cultural";
import DroneClub from "./pages/activities/DroneClub";
import ECell from "./pages/activities/ECell";
import ESSA from "./pages/activities/ESSA";
import GDG from "./pages/activities/GDG";
import IEEE from "./pages/activities/IEEE";
import IEIElpo from "./pages/activities/IEIElpo";
import IEIMech from "./pages/activities/IEIMech";
import Innovo from "./pages/activities/Innovo";
import ISTE from "./pages/activities/ISTE";
import MESA from "./pages/activities/MESA";
import Parishkriti from "./pages/activities/Parishkriti";
import Pursuit from "./pages/activities/Pursuit";
import SAE from "./pages/activities/SAE";
import SocialMedia from "./pages/activities/SocialMedia";
import Xtreme from "./pages/activities/Xtreme";
import AdmissionProcess from "./pages/admissions/AdmissionProcess";
import AdmissionsFAQs from "./pages/admissions/AdmissionsFAQs";
import ContactAdminOffice from "./pages/admissions/ContactAdminOffice";
import DocumentsRequired from "./pages/admissions/DocumentsRequired";
import DSEAdmissions from "./pages/admissions/DSEAdmissions";
import FeeStructure from "./pages/admissions/FeeStructure";
import InstituteBrochure from "./pages/admissions/InstituteBrochure";
import MBAAdmissions from "./pages/admissions/MBAAdmissions";
import PGAdmissions from "./pages/admissions/PGAdmissions";
import PhDAdmissions from "./pages/admissions/PhDAdmissions";
import Scholarships from "./pages/admissions/Scholarships";
import SeatMatrix from "./pages/admissions/SeatMatrix";
import UGAdmissions from "./pages/admissions/UGAdmissions";
import AppliedSciences from "./pages/departments/AppliedSciences";
import CSE from "./pages/departments/CSE";
import Electrical from "./pages/departments/Electrical";
import EnTC from "./pages/departments/EnTC";
import IT from "./pages/departments/IT";
import MBA from "./pages/departments/MBA";
import Mechanical from "./pages/departments/Mechanical";
import AICTE from "./pages/documents/AICTE";
import Audit from "./pages/documents/Audit";
import Financial from "./pages/documents/Financial";
import ISO from "./pages/documents/ISO";
import MandatoryDisclosure from "./pages/documents/MandatoryDisclosure";
import NAAC from "./pages/documents/NAAC";
import NBA from "./pages/documents/NBA";
import Newsletter from "./pages/documents/Newsletter";
import NIRF from "./pages/documents/NIRF";
import StudentForms from "./pages/documents/StudentForms";
import Policies from "./pages/documents/Policies";
import Tattwadarshi from "./pages/documents/Tattwadarshi";
import AdministrativeOffice from "./pages/facilities/AdministrativeOffice";
import CentralLibrary from "./pages/facilities/CentralLibrary";
import ComputingFacility from "./pages/facilities/ComputingFacility";
import Hostels from "./pages/facilities/Hostels";
import OtherFacilities from "./pages/facilities/OtherFacilities";
import Sports from "./pages/facilities/Sports";
import AICTELetters from "./pages/facilities/hostel/AICTELetters";
import AntiRaggingCommittee from "./pages/facilities/hostel/AntiRaggingCommittee";
import AntiRaggingNotices from "./pages/facilities/hostel/AntiRaggingNotices";
import AntiRaggingPosters from "./pages/facilities/hostel/AntiRaggingPosters";
import AntiRaggingReports from "./pages/facilities/hostel/AntiRaggingReports";
import HostelAccommodation from "./pages/facilities/hostel/HostelAccommodation";
import HostelAdmissionForm from "./pages/facilities/hostel/HostelAdmissionForm";
import HostelBrochure from "./pages/facilities/hostel/HostelBrochure";
import HostelCommittee from "./pages/facilities/hostel/HostelCommittee";
import HostelFeeStructure from "./pages/facilities/hostel/HostelFeeStructure";
import HostelFeedback from "./pages/facilities/hostel/HostelFeedback";
import HostelPolicy from "./pages/facilities/hostel/HostelPolicy";
import MinutesOfMeeting from "./pages/facilities/hostel/MinutesOfMeeting";
import AboutLibrary from "./pages/facilities/library/AboutLibrary";
import BookDetails from "./pages/facilities/library/BookDetails";
import Coursera from "./pages/facilities/library/Coursera";
import LibraryFacilities from "./pages/facilities/library/LibraryFacilities";
import LibraryRules from "./pages/facilities/library/LibraryRules";
import LibraryServices from "./pages/facilities/library/LibraryServices";
import LibraryStaff from "./pages/facilities/library/LibraryStaff";
import NPTEL from "./pages/facilities/library/NPTEL";
import NPTELFacultyAchievers from "./pages/facilities/library/NPTELFacultyAchievers";
import NPTELStudentAchievers from "./pages/facilities/library/NPTELStudentAchievers";
import WorkingHours from "./pages/facilities/library/WorkingHours";
import AboutSportDepartment from "./pages/facilities/sports/AboutSportDepartment";
import IndoorSportFacility from "./pages/facilities/sports/IndoorSportFacility";
import OutdoorSportFacility from "./pages/facilities/sports/OutdoorSportFacility";
import SportStaff from "./pages/facilities/sports/SportStaff";
import SportStatistics from "./pages/facilities/sports/SportStatistics";
import SportsAchievements from "./pages/facilities/sports/SportsAchievements";
import SportsCouncil from "./pages/facilities/sports/SportsCouncil";
import AQAR from "./pages/iqac/AQAR";
import BestPractices from "./pages/iqac/BestPractices";
import Composition from "./pages/iqac/Composition";
import Distinctiveness from "./pages/iqac/Distinctiveness";
import EContent from "./pages/iqac/EContent";
import EContentFacility from "./pages/iqac/EContentFacility";
import FeedbackAnalysis from "./pages/iqac/FeedbackAnalysis";
import FeedbackReport from "./pages/iqac/FeedbackReport";
import GenderEquity from "./pages/iqac/GenderEquity";
import GenderPlan from "./pages/iqac/GenderPlan";
import IQACVision from "./pages/iqac/IQACVision";
import Minutes from "./pages/iqac/Minutes";
import NAACSSR from "./pages/iqac/NAACSSR";
import StudentSurvey from "./pages/iqac/StudentSurvey";
import AboutTP from "./pages/placements/AboutTP";
import Activities from "./pages/placements/Activities";
import AlumniRegistration from "./pages/placements/AlumniRegistration";
import CareerGuidance from "./pages/placements/CareerGuidance";
import Coordinators from "./pages/placements/Coordinators";
import Goals from "./pages/placements/Goals";
import Internship from "./pages/placements/Internship";
import Objectives from "./pages/placements/Objectives";
import PlacementBrochure from "./pages/placements/PlacementBrochure";
import PlacementContact from "./pages/placements/PlacementContact";
import PlacementStats from "./pages/placements/PlacementStats";
import Recruiters from "./pages/placements/Recruiters";
import COE from "./pages/research/COE";
import Collaboration from "./pages/research/Collaboration";
import FundedProjects from "./pages/research/FundedProjects";
import IIC from "./pages/research/IIC";
import InnovationCell from "./pages/research/InnovationCell";
import IPR from "./pages/research/IPR";
import NISP from "./pages/research/NISP";
import PatentsIP from "./pages/research/PatentsIP";
import PhdCentre from "./pages/research/PhdCentre";
import Publications from "./pages/research/Publications";
import RDCell from "./pages/research/RDCell";
import ResearchOverview from "./pages/research/ResearchOverview";
import ResearchPolicy from "./pages/research/ResearchPolicy";
import Sabbatical from "./pages/research/Sabbatical";
import UGProjects from "./pages/research/UGProjects";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPages from "./pages/admin/AdminPages";
import AdminFaculty from "./pages/admin/AdminFaculty";
import AdminResearch from "./pages/admin/AdminResearch";
import AdminDepartments from "./pages/admin/AdminDepartments";
import AdminCoordinators from "./pages/admin/AdminCoordinators";
import AdminEditLogs from "./pages/admin/AdminEditLogs";
import AdminMenuManager from "./pages/admin/AdminMenuManager";
import AdminPopupBanner from "./pages/admin/AdminPopupBanner";
import VisualPageEditor from "./pages/admin/VisualPageEditor";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminNews from "./pages/admin/AdminNews";
import AdminNotices from "./pages/admin/AdminNotices";
import AdminEvents from "./pages/admin/AdminEvents";
import AdminDocuments from "./pages/admin/AdminDocuments";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminIQAC from "./pages/admin/AdminIQAC";
import AdminPlacements from "./pages/admin/AdminPlacements";
import AdminRecruiters from "./pages/admin/AdminRecruiters";
import AdminTestimonials from "./pages/admin/AdminTestimonials";
import AdminNIRF from "./pages/admin/AdminNIRF";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Admin Login - Public Route */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin Routes - Protected (require authentication) */}
          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/pages" element={<ProtectedRoute><AdminPages /></ProtectedRoute>} />
          <Route
            path="/admin/pages/editor/:pageId"
            element={<ProtectedRoute><VisualPageEditor /></ProtectedRoute>}
          />
          <Route path="/admin/visual/:pageId" element={<ProtectedRoute><VisualPageEditor /></ProtectedRoute>} />
          <Route path="/admin/faculty" element={<ProtectedRoute><AdminFaculty /></ProtectedRoute>} />
          <Route path="/admin/research" element={<ProtectedRoute><AdminResearch /></ProtectedRoute>} />
          <Route path="/admin/departments" element={<ProtectedRoute><AdminDepartments /></ProtectedRoute>} />
          <Route path="/admin/coordinators" element={<ProtectedRoute><AdminCoordinators /></ProtectedRoute>} />
          <Route path="/admin/logs" element={<ProtectedRoute><AdminEditLogs /></ProtectedRoute>} />
          <Route path="/admin/activity-log" element={<ProtectedRoute><AdminEditLogs /></ProtectedRoute>} />
          <Route path="/admin/menu" element={<ProtectedRoute><AdminMenuManager /></ProtectedRoute>} />
          <Route path="/admin/menu-manager" element={<ProtectedRoute><AdminMenuManager /></ProtectedRoute>} />
          <Route path="/admin/popup-banner" element={<ProtectedRoute><AdminPopupBanner /></ProtectedRoute>} />
          {/* Content Management Routes */}
          <Route path="/admin/news" element={<ProtectedRoute><AdminNews /></ProtectedRoute>} />
          <Route path="/admin/notices" element={<ProtectedRoute><AdminNotices /></ProtectedRoute>} />
          <Route path="/admin/events" element={<ProtectedRoute><AdminEvents /></ProtectedRoute>} />
          <Route path="/admin/documents" element={<ProtectedRoute><AdminDocuments /></ProtectedRoute>} />
          <Route path="/admin/iqac" element={<ProtectedRoute><AdminIQAC /></ProtectedRoute>} />
          <Route path="/admin/placements" element={<ProtectedRoute><AdminPlacements /></ProtectedRoute>} />
          <Route path="/admin/recruiters" element={<ProtectedRoute><AdminRecruiters /></ProtectedRoute>} />
          <Route path="/admin/testimonials" element={<ProtectedRoute><AdminTestimonials /></ProtectedRoute>} />
          <Route path="/admin/nirf" element={<ProtectedRoute><AdminNIRF /></ProtectedRoute>} />
          {/* System Routes */}
          <Route path="/admin/analytics" element={<ProtectedRoute><AdminAnalytics /></ProtectedRoute>} />
          <Route path="/admin/settings" element={<ProtectedRoute><AdminSettings /></ProtectedRoute>} />

          {/* Public Website Routes - With Layout (includes navbar & header) */}
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/departments"
            element={
              <Layout>
                <Departments />
              </Layout>
            }
          />
          <Route
            path="/admissions"
            element={
              <Layout>
                <Admissions />
              </Layout>
            }
          />
          <Route
            path="/faculty"
            element={
              <Layout>
                <Faculty />
              </Layout>
            }
          />
          <Route
            path="/placements"
            element={
              <Layout>
                <Placements />
              </Layout>
            }
          />
          <Route
            path="/research"
            element={
              <Layout>
                <Research />
              </Layout>
            }
          />
          <Route
            path="/events"
            element={
              <Layout>
                <Events />
              </Layout>
            }
          />
          <Route
            path="/gallery"
            element={
              <Layout>
                <Gallery />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/about/glance"
            element={
              <Layout>
                <AtGlance />
              </Layout>
            }
          />
          <Route
            path="/about/directors"
            element={
              <Layout>
                <BoardOfDirectors />
              </Layout>
            }
          />
          <Route
            path="/about/committees"
            element={
              <Layout>
                <Committees />
              </Layout>
            }
          />
          <Route
            path="/about/governing"
            element={
              <Layout>
                <GoverningBody />
              </Layout>
            }
          />
          <Route
            path="/about/inspiration"
            element={
              <Layout>
                <Inspiration />
              </Layout>
            }
          />
          <Route
            path="/about/structure"
            element={
              <Layout>
                <Organization />
              </Layout>
            }
          />
          <Route
            path="/about/principal"
            element={
              <Layout>
                <PrincipalMsg />
              </Layout>
            }
          />
          <Route
            path="/about/vision"
            element={
              <Layout>
                <VisionMission />
              </Layout>
            }
          />
          <Route
            path="/academics/planner"
            element={
              <Layout>
                <AcademicPlanner />
              </Layout>
            }
          />
          <Route
            path="/academics/reports"
            element={
              <Layout>
                <AnnualReports />
              </Layout>
            }
          />
          <Route
            path="/academics/incentive"
            element={
              <Layout>
                <IncentiveMarks />
              </Layout>
            }
          />
          <Route
            path="/academics/innovative"
            element={
              <Layout>
                <InnovativePractices />
              </Layout>
            }
          />
          <Route
            path="/academics/rubrics"
            element={
              <Layout>
                <Rubrics />
              </Layout>
            }
          />
          <Route
            path="/academics/rules"
            element={
              <Layout>
                <RulesRegulations />
              </Layout>
            }
          />
          <Route
            path="/academics/marks"
            element={
              <Layout>
                <SessionalMarks />
              </Layout>
            }
          />
          <Route
            path="/academics/notices"
            element={
              <Layout>
                <StudentNotices />
              </Layout>
            }
          />
          <Route
            path="/academics/syllabus"
            element={
              <Layout>
                <Syllabus />
              </Layout>
            }
          />
          <Route
            path="/academics/teaching"
            element={
              <Layout>
                <TeachingLearning />
              </Layout>
            }
          />
          <Route
            path="/academics/timetable"
            element={
              <Layout>
                <TimeTable />
              </Layout>
            }
          />
          <Route
            path="/activities/acm"
            element={
              <Layout>
                <ACM />
              </Layout>
            }
          />
          <Route
            path="/activities/cultural"
            element={
              <Layout>
                <Cultural />
              </Layout>
            }
          />
          <Route
            path="/activities/drone"
            element={
              <Layout>
                <DroneClub />
              </Layout>
            }
          />
          <Route
            path="/activities/ecell"
            element={
              <Layout>
                <ECell />
              </Layout>
            }
          />
          <Route
            path="/activities/essa"
            element={
              <Layout>
                <ESSA />
              </Layout>
            }
          />
          <Route
            path="/activities/gdg"
            element={
              <Layout>
                <GDG />
              </Layout>
            }
          />
          <Route
            path="/activities/ieee"
            element={
              <Layout>
                <IEEE />
              </Layout>
            }
          />
          <Route
            path="/activities/iei-elpo"
            element={
              <Layout>
                <IEIElpo />
              </Layout>
            }
          />
          <Route
            path="/activities/iei-mech"
            element={
              <Layout>
                <IEIMech />
              </Layout>
            }
          />
          <Route
            path="/activities/innovo"
            element={
              <Layout>
                <Innovo />
              </Layout>
            }
          />
          <Route
            path="/activities/iste"
            element={
              <Layout>
                <ISTE />
              </Layout>
            }
          />
          <Route
            path="/activities/mesa"
            element={
              <Layout>
                <MESA />
              </Layout>
            }
          />
          <Route
            path="/activities/parishkriti"
            element={
              <Layout>
                <Parishkriti />
              </Layout>
            }
          />
          <Route
            path="/activities/pursuit"
            element={
              <Layout>
                <Pursuit />
              </Layout>
            }
          />
          <Route
            path="/activities/sae"
            element={
              <Layout>
                <SAE />
              </Layout>
            }
          />
          <Route
            path="/activities/social"
            element={
              <Layout>
                <SocialMedia />
              </Layout>
            }
          />
          <Route
            path="/activities/xtreme"
            element={
              <Layout>
                <Xtreme />
              </Layout>
            }
          />
          <Route
            path="/admissions/dse"
            element={
              <Layout>
                <DSEAdmissions />
              </Layout>
            }
          />
          <Route
            path="/admissions/fees"
            element={
              <Layout>
                <FeeStructure />
              </Layout>
            }
          />
          <Route
            path="/admissions/brochure"
            element={
              <Layout>
                <InstituteBrochure />
              </Layout>
            }
          />
          <Route
            path="/admissions/mba"
            element={
              <Layout>
                <MBAAdmissions />
              </Layout>
            }
          />
          <Route
            path="/admissions/pg"
            element={
              <Layout>
                <PGAdmissions />
              </Layout>
            }
          />
          <Route
            path="/admissions/phd"
            element={
              <Layout>
                <PhDAdmissions />
              </Layout>
            }
          />
          <Route
            path="/admissions/ug"
            element={
              <Layout>
                <UGAdmissions />
              </Layout>
            }
          />
          <Route
            path="/admissions/process"
            element={
              <Layout>
                <AdmissionProcess />
              </Layout>
            }
          />
          <Route
            path="/admissions/faqs"
            element={
              <Layout>
                <AdmissionsFAQs />
              </Layout>
            }
          />
          <Route
            path="/admissions/contact"
            element={
              <Layout>
                <ContactAdminOffice />
              </Layout>
            }
          />
          <Route
            path="/admissions/documents"
            element={
              <Layout>
                <DocumentsRequired />
              </Layout>
            }
          />
          <Route
            path="/admissions/scholarships"
            element={
              <Layout>
                <Scholarships />
              </Layout>
            }
          />
          <Route
            path="/admissions/seat-matrix"
            element={
              <Layout>
                <SeatMatrix />
              </Layout>
            }
          />

          <Route
            path="/departments/applied-sciences"
            element={
              <Layout>
                <AppliedSciences />
              </Layout>
            }
          />
          <Route
            path="/departments/cse"
            element={
              <Layout>
                <CSE />
              </Layout>
            }
          />
          <Route
            path="/departments/electrical"
            element={
              <Layout>
                <Electrical />
              </Layout>
            }
          />
          <Route
            path="/departments/entc"
            element={
              <Layout>
                <EnTC />
              </Layout>
            }
          />
          <Route
            path="/departments/it"
            element={
              <Layout>
                <IT />
              </Layout>
            }
          />
          <Route
            path="/departments/mba"
            element={
              <Layout>
                <MBA />
              </Layout>
            }
          />
          <Route
            path="/departments/mechanical"
            element={
              <Layout>
                <Mechanical />
              </Layout>
            }
          />
          <Route
            path="/documents/aicte"
            element={
              <Layout>
                <AICTE />
              </Layout>
            }
          />
          <Route
            path="/documents/audit"
            element={
              <Layout>
                <Audit />
              </Layout>
            }
          />
          <Route
            path="/documents/financial"
            element={
              <Layout>
                <Financial />
              </Layout>
            }
          />
          <Route
            path="/documents/iso"
            element={
              <Layout>
                <ISO />
              </Layout>
            }
          />
          <Route
            path="/documents/disclosure"
            element={
              <Layout>
                <MandatoryDisclosure />
              </Layout>
            }
          />
          <Route
            path="/documents/naac"
            element={
              <Layout>
                <NAAC />
              </Layout>
            }
          />
          <Route
            path="/documents/nba"
            element={
              <Layout>
                <NBA />
              </Layout>
            }
          />
          <Route
            path="/documents/newsletter"
            element={
              <Layout>
                <Newsletter />
              </Layout>
            }
          />
          <Route
            path="/documents/nirf"
            element={
              <Layout>
                <NIRF />
              </Layout>
            }
          />
          <Route
            path="/documents/student-forms"
            element={
              <Layout>
                <StudentForms />
              </Layout>
            }
          />
          <Route
            path="/documents/policies"
            element={
              <Layout>
                <Policies />
              </Layout>
            }
          />
          <Route
            path="/documents/tattwadarshi"
            element={
              <Layout>
                <Tattwadarshi />
              </Layout>
            }
          />
          <Route
            path="/facilities/admin"
            element={
              <Layout>
                <AdministrativeOffice />
              </Layout>
            }
          />
          <Route
            path="/facilities/library"
            element={
              <Layout>
                <CentralLibrary />
              </Layout>
            }
          />
          <Route
            path="/facilities/computing"
            element={
              <Layout>
                <ComputingFacility />
              </Layout>
            }
          />
          <Route
            path="/facilities/hostels"
            element={
              <Layout>
                <Hostels />
              </Layout>
            }
          />
          <Route
            path="/facilities/other"
            element={
              <Layout>
                <OtherFacilities />
              </Layout>
            }
          />
          <Route
            path="/facilities/sports"
            element={
              <Layout>
                <Sports />
              </Layout>
            }
          />
          <Route
            path="/facilities/hostel/aicte-letters"
            element={
              <Layout>
                <AICTELetters />
              </Layout>
            }
          />
          <Route
            path="/facilities/hostel/anti-ragging-committee"
            element={
              <Layout>
                <AntiRaggingCommittee />
              </Layout>
            }
          />
          <Route
            path="/facilities/hostel/anti-ragging-notices"
            element={
              <Layout>
                <AntiRaggingNotices />
              </Layout>
            }
          />
          <Route
            path="/facilities/hostel/anti-ragging-posters"
            element={
              <Layout>
                <AntiRaggingPosters />
              </Layout>
            }
          />
          <Route
            path="/facilities/hostel/anti-ragging-reports"
            element={
              <Layout>
                <AntiRaggingReports />
              </Layout>
            }
          />
          <Route
            path="/facilities/hostel/accommodation"
            element={
              <Layout>
                <HostelAccommodation />
              </Layout>
            }
          />
          <Route
            path="/facilities/hostel/admission-form"
            element={
              <Layout>
                <HostelAdmissionForm />
              </Layout>
            }
          />
          <Route
            path="/facilities/hostel/brochure"
            element={
              <Layout>
                <HostelBrochure />
              </Layout>
            }
          />
          <Route
            path="/facilities/hostel/committee"
            element={
              <Layout>
                <HostelCommittee />
              </Layout>
            }
          />
          <Route
            path="/facilities/hostel/fee-structure"
            element={
              <Layout>
                <HostelFeeStructure />
              </Layout>
            }
          />
          <Route
            path="/facilities/hostel/feedback"
            element={
              <Layout>
                <HostelFeedback />
              </Layout>
            }
          />
          <Route
            path="/facilities/hostel/policy"
            element={
              <Layout>
                <HostelPolicy />
              </Layout>
            }
          />
          <Route
            path="/facilities/hostel/minutes"
            element={
              <Layout>
                <MinutesOfMeeting />
              </Layout>
            }
          />
          <Route
            path="/facilities/library/about"
            element={
              <Layout>
                <AboutLibrary />
              </Layout>
            }
          />
          <Route
            path="/facilities/library/book-details"
            element={
              <Layout>
                <BookDetails />
              </Layout>
            }
          />
          <Route
            path="/facilities/library/coursera"
            element={
              <Layout>
                <Coursera />
              </Layout>
            }
          />
          <Route
            path="/facilities/library/facilities"
            element={
              <Layout>
                <LibraryFacilities />
              </Layout>
            }
          />
          <Route
            path="/facilities/library/rules"
            element={
              <Layout>
                <LibraryRules />
              </Layout>
            }
          />
          <Route
            path="/facilities/library/services"
            element={
              <Layout>
                <LibraryServices />
              </Layout>
            }
          />
          <Route
            path="/facilities/library/staff"
            element={
              <Layout>
                <LibraryStaff />
              </Layout>
            }
          />
          <Route
            path="/facilities/library/nptel"
            element={
              <Layout>
                <NPTEL />
              </Layout>
            }
          />
          <Route
            path="/facilities/library/nptel-faculty"
            element={
              <Layout>
                <NPTELFacultyAchievers />
              </Layout>
            }
          />
          <Route
            path="/facilities/library/nptel-students"
            element={
              <Layout>
                <NPTELStudentAchievers />
              </Layout>
            }
          />
          <Route
            path="/facilities/library/hours"
            element={
              <Layout>
                <WorkingHours />
              </Layout>
            }
          />
          <Route
            path="/facilities/sports/about"
            element={
              <Layout>
                <AboutSportDepartment />
              </Layout>
            }
          />
          <Route
            path="/facilities/sports/indoor"
            element={
              <Layout>
                <IndoorSportFacility />
              </Layout>
            }
          />
          <Route
            path="/facilities/sports/outdoor"
            element={
              <Layout>
                <OutdoorSportFacility />
              </Layout>
            }
          />
          <Route
            path="/facilities/sports/staff"
            element={
              <Layout>
                <SportStaff />
              </Layout>
            }
          />
          <Route
            path="/facilities/sports/statistics"
            element={
              <Layout>
                <SportStatistics />
              </Layout>
            }
          />
          <Route
            path="/facilities/sports/achievements"
            element={
              <Layout>
                <SportsAchievements />
              </Layout>
            }
          />
          <Route
            path="/facilities/sports/council"
            element={
              <Layout>
                <SportsCouncil />
              </Layout>
            }
          />

          <Route
            path="/iqac/aqar"
            element={
              <Layout>
                <AQAR />
              </Layout>
            }
          />
          <Route
            path="/iqac/practices"
            element={
              <Layout>
                <BestPractices />
              </Layout>
            }
          />
          <Route
            path="/iqac/composition"
            element={
              <Layout>
                <Composition />
              </Layout>
            }
          />
          <Route
            path="/iqac/distinctiveness"
            element={
              <Layout>
                <Distinctiveness />
              </Layout>
            }
          />
          <Route
            path="/iqac/econtent"
            element={
              <Layout>
                <EContent />
              </Layout>
            }
          />
          <Route
            path="/iqac/econtent-facility"
            element={
              <Layout>
                <EContentFacility />
              </Layout>
            }
          />
          <Route
            path="/iqac/analysis"
            element={
              <Layout>
                <FeedbackAnalysis />
              </Layout>
            }
          />
          <Route
            path="/iqac/feedback"
            element={
              <Layout>
                <FeedbackReport />
              </Layout>
            }
          />
          <Route
            path="/iqac/equity"
            element={
              <Layout>
                <GenderEquity />
              </Layout>
            }
          />
          <Route
            path="/iqac/gender"
            element={
              <Layout>
                <GenderPlan />
              </Layout>
            }
          />
          <Route
            path="/iqac/vision"
            element={
              <Layout>
                <IQACVision />
              </Layout>
            }
          />
          <Route
            path="/iqac/minutes"
            element={
              <Layout>
                <Minutes />
              </Layout>
            }
          />
          <Route
            path="/iqac/naac"
            element={
              <Layout>
                <NAACSSR />
              </Layout>
            }
          />
          <Route
            path="/iqac/survey"
            element={
              <Layout>
                <StudentSurvey />
              </Layout>
            }
          />
          <Route
            path="/placements/about"
            element={
              <Layout>
                <AboutTP />
              </Layout>
            }
          />
          <Route
            path="/placements/activities"
            element={
              <Layout>
                <Activities />
              </Layout>
            }
          />
          <Route
            path="/placements/alumni"
            element={
              <Layout>
                <AlumniRegistration />
              </Layout>
            }
          />
          <Route
            path="/placements/career"
            element={
              <Layout>
                <CareerGuidance />
              </Layout>
            }
          />
          <Route
            path="/placements/coordinators"
            element={
              <Layout>
                <Coordinators />
              </Layout>
            }
          />
          <Route
            path="/placements/goals"
            element={
              <Layout>
                <Goals />
              </Layout>
            }
          />
          <Route
            path="/placements/internship"
            element={
              <Layout>
                <Internship />
              </Layout>
            }
          />
          <Route
            path="/placements/objectives"
            element={
              <Layout>
                <Objectives />
              </Layout>
            }
          />
          <Route
            path="/placements/brochure"
            element={
              <Layout>
                <PlacementBrochure />
              </Layout>
            }
          />
          <Route
            path="/placements/statistics"
            element={
              <Layout>
                <PlacementStats />
              </Layout>
            }
          />
          <Route
            path="/placements/recruiters"
            element={
              <Layout>
                <Recruiters />
              </Layout>
            }
          />
          <Route
            path="/placements/contact"
            element={
              <Layout>
                <PlacementContact />
              </Layout>
            }
          />
          <Route
            path="/research/coe"
            element={
              <Layout>
                <COE />
              </Layout>
            }
          />
          <Route
            path="/research/collaboration"
            element={
              <Layout>
                <Collaboration />
              </Layout>
            }
          />
          <Route
            path="/research/iic"
            element={
              <Layout>
                <IIC />
              </Layout>
            }
          />
          <Route
            path="/research/ipr"
            element={
              <Layout>
                <IPR />
              </Layout>
            }
          />
          <Route
            path="/research/nisp"
            element={
              <Layout>
                <NISP />
              </Layout>
            }
          />
          <Route
            path="/research/phd"
            element={
              <Layout>
                <PhdCentre />
              </Layout>
            }
          />
          <Route
            path="/research/publications"
            element={
              <Layout>
                <Publications />
              </Layout>
            }
          />
          <Route
            path="/research/rdc"
            element={
              <Layout>
                <RDCell />
              </Layout>
            }
          />
          <Route
            path="/research/policy"
            element={
              <Layout>
                <ResearchPolicy />
              </Layout>
            }
          />
          <Route
            path="/research/sabbatical"
            element={
              <Layout>
                <Sabbatical />
              </Layout>
            }
          />
          <Route
            path="/research/ug-projects"
            element={
              <Layout>
                <UGProjects />
              </Layout>
            }
          />
          <Route
            path="/research/funded-projects"
            element={
              <Layout>
                <FundedProjects />
              </Layout>
            }
          />
          <Route
            path="/research/innovation-cell"
            element={
              <Layout>
                <InnovationCell />
              </Layout>
            }
          />
          <Route
            path="/research/patents"
            element={
              <Layout>
                <PatentsIP />
              </Layout>
            }
          />
          <Route
            path="/research/overview"
            element={
              <Layout>
                <ResearchOverview />
              </Layout>
            }
          />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
