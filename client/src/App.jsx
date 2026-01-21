import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Departments from './pages/Departments';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Placements from './pages/Placements';
import Research from './pages/Research';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Committees from './pages/about/Committees';
import GoverningBody from './pages/about/GoverningBody';
import Inspiration from './pages/about/Inspiration';
import Organization from './pages/about/Organization';
import PrincipalMsg from './pages/about/PrincipalMsg';
import VisionMission from './pages/about/VisionMission';
import AcademicPlanner from './pages/academics/AcademicPlanner';
import AnnualReports from './pages/academics/AnnualReports';
import IncentiveMarks from './pages/academics/IncentiveMarks';
import InnovativePractices from './pages/academics/InnovativePractices';
import Rubrics from './pages/academics/Rubrics';
import RulesRegulations from './pages/academics/RulesRegulations';
import SessionalMarks from './pages/academics/SessionalMarks';
import StudentNotices from './pages/academics/StudentNotices';
import Syllabus from './pages/academics/Syllabus';
import TeachingLearning from './pages/academics/TeachingLearning';
import TimeTable from './pages/academics/TimeTable';
import ACM from './pages/activities/ACM';
import Cultural from './pages/activities/Cultural';
import DroneClub from './pages/activities/DroneClub';
import ECell from './pages/activities/ECell';
import ESSA from './pages/activities/ESSA';
import GDG from './pages/activities/GDG';
import IEEE from './pages/activities/IEEE';
import IEIElpo from './pages/activities/IEIElpo';
import IEIMech from './pages/activities/IEIMech';
import Innovo from './pages/activities/Innovo';
import ISTE from './pages/activities/ISTE';
import MESA from './pages/activities/MESA';
import Parishkriti from './pages/activities/Parishkriti';
import Pursuit from './pages/activities/Pursuit';
import SAE from './pages/activities/SAE';
import SocialMedia from './pages/activities/SocialMedia';
import Xtreme from './pages/activities/Xtreme';
import DSEAdmissions from './pages/admissions/DSEAdmissions';
import FeeStructure from './pages/admissions/FeeStructure';
import InstituteBrochure from './pages/admissions/InstituteBrochure';
import MBAAdmissions from './pages/admissions/MBAAdmissions';
import PGAdmissions from './pages/admissions/PGAdmissions';
import PhDAdmissions from './pages/admissions/PhDAdmissions';
import UGAdmissions from './pages/admissions/UGAdmissions';
import AppliedSciences from './pages/departments/AppliedSciences';
import CSE from './pages/departments/CSE';
import Electrical from './pages/departments/Electrical';
import EnTC from './pages/departments/EnTC';
import IT from './pages/departments/IT';
import MBA from './pages/departments/MBA';
import Mechanical from './pages/departments/Mechanical';
import AICTE from './pages/documents/AICTE';
import Audit from './pages/documents/Audit';
import Financial from './pages/documents/Financial';
import ISO from './pages/documents/ISO';
import MandatoryDisclosure from './pages/documents/MandatoryDisclosure';
import NAAC from './pages/documents/NAAC';
import NBA from './pages/documents/NBA';
import Newsletter from './pages/documents/Newsletter';
import NIRF from './pages/documents/NIRF';
import Policies from './pages/documents/Policies';
import Tattwadarshi from './pages/documents/Tattwadarshi';
import AdministrativeOffice from './pages/facilities/AdministrativeOffice';
import CentralLibrary from './pages/facilities/CentralLibrary';
import ComputingFacility from './pages/facilities/ComputingFacility';
import Hostels from './pages/facilities/Hostels';
import OtherFacilities from './pages/facilities/OtherFacilities';
import Sports from './pages/facilities/Sports';
import AQAR from './pages/iqac/AQAR';
import BestPractices from './pages/iqac/BestPractices';
import Composition from './pages/iqac/Composition';
import Distinctiveness from './pages/iqac/Distinctiveness';
import EContent from './pages/iqac/EContent';
import EContentFacility from './pages/iqac/EContentFacility';
import FeedbackAnalysis from './pages/iqac/FeedbackAnalysis';
import FeedbackReport from './pages/iqac/FeedbackReport';
import GenderEquity from './pages/iqac/GenderEquity';
import GenderPlan from './pages/iqac/GenderPlan';
import IQACVision from './pages/iqac/IQACVision';
import Minutes from './pages/iqac/Minutes';
import NAACSSR from './pages/iqac/NAACSSR';
import StudentSurvey from './pages/iqac/StudentSurvey';
import AboutTP from './pages/placements/AboutTP';
import Activities from './pages/placements/Activities';
import AlumniRegistration from './pages/placements/AlumniRegistration';
import CareerGuidance from './pages/placements/CareerGuidance';
import Coordinators from './pages/placements/Coordinators';
import Goals from './pages/placements/Goals';
import Internship from './pages/placements/Internship';
import Objectives from './pages/placements/Objectives';
import PlacementBrochure from './pages/placements/PlacementBrochure';
import PlacementStats from './pages/placements/PlacementStats';
import Recruiters from './pages/placements/Recruiters';
import COE from './pages/research/COE';
import Collaboration from './pages/research/Collaboration';
import IIC from './pages/research/IIC';
import IPR from './pages/research/IPR';
import NISP from './pages/research/NISP';
import PhdCentre from './pages/research/PhdCentre';
import Publications from './pages/research/Publications';
import RDCell from './pages/research/RDCell';
import ResearchPolicy from './pages/research/ResearchPolicy';
import Sabbatical from './pages/research/Sabbatical';
import UGProjects from './pages/research/UGProjects';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/research" element={<Research />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about/committees" element={<Committees />} />
          <Route path="/about/governing" element={<GoverningBody />} />
          <Route path="/about/inspiration" element={<Inspiration />} />
          <Route path="/about/structure" element={<Organization />} />
          <Route path="/about/principal" element={<PrincipalMsg />} />
          <Route path="/about/vision" element={<VisionMission />} />
          <Route path="/academics/planner" element={<AcademicPlanner />} />
          <Route path="/academics/reports" element={<AnnualReports />} />
          <Route path="/academics/incentive" element={<IncentiveMarks />} />
          <Route path="/academics/innovative" element={<InnovativePractices />} />
          <Route path="/academics/rubrics" element={<Rubrics />} />
          <Route path="/academics/rules" element={<RulesRegulations />} />
          <Route path="/academics/marks" element={<SessionalMarks />} />
          <Route path="/academics/notices" element={<StudentNotices />} />
          <Route path="/academics/syllabus" element={<Syllabus />} />
          <Route path="/academics/teaching" element={<TeachingLearning />} />
          <Route path="/academics/timetable" element={<TimeTable />} />
          <Route path="/activities/acm" element={<ACM />} />
          <Route path="/activities/cultural" element={<Cultural />} />
          <Route path="/activities/drone" element={<DroneClub />} />
          <Route path="/activities/ecell" element={<ECell />} />
          <Route path="/activities/essa" element={<ESSA />} />
          <Route path="/activities/gdg" element={<GDG />} />
          <Route path="/activities/ieee" element={<IEEE />} />
          <Route path="/activities/iei-elpo" element={<IEIElpo />} />
          <Route path="/activities/iei-mech" element={<IEIMech />} />
          <Route path="/activities/innovo" element={<Innovo />} />
          <Route path="/activities/iste" element={<ISTE />} />
          <Route path="/activities/mesa" element={<MESA />} />
          <Route path="/activities/parishkriti" element={<Parishkriti />} />
          <Route path="/activities/pursuit" element={<Pursuit />} />
          <Route path="/activities/sae" element={<SAE />} />
          <Route path="/activities/social" element={<SocialMedia />} />
          <Route path="/activities/xtreme" element={<Xtreme />} />
          <Route path="/admissions/dse" element={<DSEAdmissions />} />
          <Route path="/admissions/fees" element={<FeeStructure />} />
          <Route path="/admissions/brochure" element={<InstituteBrochure />} />
          <Route path="/admissions/mba" element={<MBAAdmissions />} />
          <Route path="/admissions/pg" element={<PGAdmissions />} />
          <Route path="/admissions/phd" element={<PhDAdmissions />} />
          <Route path="/admissions/ug" element={<UGAdmissions />} />
          <Route path="/departments/applied-sciences" element={<AppliedSciences />} />
          <Route path="/departments/cse" element={<CSE />} />
          <Route path="/departments/electrical" element={<Electrical />} />
          <Route path="/departments/entc" element={<EnTC />} />
          <Route path="/departments/it" element={<IT />} />
          <Route path="/departments/mba" element={<MBA />} />
          <Route path="/departments/mechanical" element={<Mechanical />} />
          <Route path="/documents/aicte" element={<AICTE />} />
          <Route path="/documents/audit" element={<Audit />} />
          <Route path="/documents/financial" element={<Financial />} />
          <Route path="/documents/iso" element={<ISO />} />
          <Route path="/documents/disclosure" element={<MandatoryDisclosure />} />
          <Route path="/documents/naac" element={<NAAC />} />
          <Route path="/documents/nba" element={<NBA />} />
          <Route path="/documents/newsletter" element={<Newsletter />} />
          <Route path="/documents/nirf" element={<NIRF />} />
          <Route path="/documents/policies" element={<Policies />} />
          <Route path="/documents/tattwadarshi" element={<Tattwadarshi />} />
          <Route path="/facilities/admin" element={<AdministrativeOffice />} />
          <Route path="/facilities/library" element={<CentralLibrary />} />
          <Route path="/facilities/computing" element={<ComputingFacility />} />
          <Route path="/facilities/hostels" element={<Hostels />} />
          <Route path="/facilities/other" element={<OtherFacilities />} />
          <Route path="/facilities/sports" element={<Sports />} />
          <Route path="/iqac/aqar" element={<AQAR />} />
          <Route path="/iqac/practices" element={<BestPractices />} />
          <Route path="/iqac/composition" element={<Composition />} />
          <Route path="/iqac/distinctiveness" element={<Distinctiveness />} />
          <Route path="/iqac/econtent" element={<EContent />} />
          <Route path="/iqac/econtent-facility" element={<EContentFacility />} />
          <Route path="/iqac/analysis" element={<FeedbackAnalysis />} />
          <Route path="/iqac/feedback" element={<FeedbackReport />} />
          <Route path="/iqac/equity" element={<GenderEquity />} />
          <Route path="/iqac/gender" element={<GenderPlan />} />
          <Route path="/iqac/vision" element={<IQACVision />} />
          <Route path="/iqac/minutes" element={<Minutes />} />
          <Route path="/iqac/naac" element={<NAACSSR />} />
          <Route path="/iqac/survey" element={<StudentSurvey />} />
          <Route path="/placements/about" element={<AboutTP />} />
          <Route path="/placements/activities" element={<Activities />} />
          <Route path="/placements/alumni" element={<AlumniRegistration />} />
          <Route path="/placements/career" element={<CareerGuidance />} />
          <Route path="/placements/coordinators" element={<Coordinators />} />
          <Route path="/placements/goals" element={<Goals />} />
          <Route path="/placements/internship" element={<Internship />} />
          <Route path="/placements/objectives" element={<Objectives />} />
          <Route path="/placements/brochure" element={<PlacementBrochure />} />
          <Route path="/placements/statistics" element={<PlacementStats />} />
          <Route path="/placements/recruiters" element={<Recruiters />} />
          <Route path="/research/coe" element={<COE />} />
          <Route path="/research/collaboration" element={<Collaboration />} />
          <Route path="/research/iic" element={<IIC />} />
          <Route path="/research/ipr" element={<IPR />} />
          <Route path="/research/nisp" element={<NISP />} />
          <Route path="/research/phd" element={<PhdCentre />} />
          <Route path="/research/publications" element={<Publications />} />
          <Route path="/research/rdc" element={<RDCell />} />
          <Route path="/research/policy" element={<ResearchPolicy />} />
          <Route path="/research/sabbatical" element={<Sabbatical />} />
          <Route path="/research/ug-projects" element={<UGProjects />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
