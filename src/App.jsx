import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/layout/Layout";

// Pages
import Dashboard from "./pages/Dashboard";

// Master pages
import Sessions from "./pages/master/Sessions";
import Board from "./pages/master/Board";
import Classes from "./pages/master/Classes";
import Teachers from "./pages/master/Teachers";
import Subjects from "./pages/master/Subjects";
import Remarks from "./pages/master/Remarks";
import SchoolInfo from "./pages/master/SchoolInfo";

// Academic pages
import Students from "./pages/academic/Students";
// import Attendance from "./pages/academic/Attendance";
import Certificates from "./pages/academic/Certificates";

// Exam pages
import Timetable from "./pages/exam/Timetable";
import Marks from "./pages/exam/Marks";
import Reports from "./pages/exam/Reports";
import Assignments from "./pages/exam/Assignments";

// Library pages
import Books from "./pages/library/Books";
import Issues from "./pages/library/Issues";
import Members from "./pages/library/Members";
import Categories from "./pages/library/Categories";

import NotFound from "./pages/NotFound";
import PaymentInfo from "./pages/master/PaymentInfo";
import FeesType from "./pages/master/Fees/FeeTypes";
import ManageFees from "./pages/master/Fees/ManangeFees";
import StudentFees from "./pages/master/Fees/StudentFees";
import PayCompulsoryFees from "./pages/master/Fees/PayCompulsoryFees";
import OtherFees from "./pages/master/Fees/OtherFees";
import PayOtherFees from "./pages/master/Fees/PayOtherFees";
import TransactionLogs from "./pages/master/Fees/TransactionLogs";
import AllStudents from "./pages/academic/AllStudents";
import StudentProfile from "./pages/academic/StudentProfile";
import InactiveStudents from "./pages/academic/InactiveStudent";
import StreamSectionManager from "./pages/academic/StreamSectionManager";
import RollNumberManager from "./pages/academic/RollNumberManager";
import AcademicCalendar from "./pages/academic/AcademicCalender";
import StudentLeaveApplications from "./pages/academic/StudentLeaveApplications";
import Promotion from "./pages/academic/Promotion";
import AttendanceManager from "./pages/academic/AttendanceManager";
import AttendanceReport from "./components/academics/LockAttendanceModal/AttendanceReport";
import DailyAttendanceReport from "./components/academics/LockAttendanceModal/DailyAttendanceReport";
import WeeklyPlan from "./pages/academic/WeeklyPlan";
import StudentHealthManagement from "./pages/academic/StudentHealthManagement";
import ExamType from "./pages/exam/OfflineExam/ExamType";
import TermExam from "./pages/exam/OfflineExam/TermExam";
import ManageExamTimeTable from "./pages/exam/OfflineExam/ManageExamTimeTable";
import PeriodicTest from "./pages/exam/OfflineExam/PeriodicTest";
import ManagePeriodicTestExamTimeTable from "./pages/exam/OfflineExam/ManagePeriodicTestTimeTable";
// import UnitMarkSubmission from "./pages/exam/OfflineExam/UnitMarkSubmission";
// import TermMarkSubmission from "./pages/exam/OfflineExam/TermMarkSubmission";
import TopicWiseMarkSubmission from "./pages/exam/MarkSubmission/TopicWiseMarkSubmission";
import CoScholasticMarkSubmission from "./pages/exam/MarkSubmission/CoScholasticMarkSubmission";
import TermMarkSubmission from "./pages/exam/MarkSubmission/TermMarkSubmission";
import UnitMarkSubmission from "./pages/exam/MarkSubmission/UnitMarkSubmission";
import Settings from "./pages/HRM/Settings/Settings";
import PaybandStructure from "./pages/HRM/PaybandStructure";
// import OnlineAdmissionModal from "./components/academics/studentAdmissionApplication/OnlineAdmissionModal";

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* Master Routes */}
              <Route path="/master/sessions" element={<Sessions />} />
              <Route path="/master/board" element={<Board />} />
              <Route path="/master/classes" element={<Classes />} />
              <Route path="/master/teachers" element={<Teachers />} />
              <Route path="/master/subjects" element={<Subjects />} />
              {/* <Route path="/master/fees" element={<Fees />} /> */}
              <Route path="/master/remarks" element={<Remarks />} />
              <Route path="/master/school-info" element={<SchoolInfo />} />
              <Route path="/master/payment-info" element={<PaymentInfo />} />
              <Route path="/master/fees/fees-type" element={<FeesType />} />
              <Route path="/master/fees/manage-fees" element={<ManageFees />} />
              <Route
                path="/master/fees/student-fees"
                element={<StudentFees />}
              />
              <Route
                path="/master/fees/compulsory-fees"
                element={<PayCompulsoryFees />}
              />
              <Route path="/master/fees/other-fees" element={<OtherFees />} />
              <Route
                path="/master/fees/pay-other-fees"
                element={<PayOtherFees />}
              />
              <Route
                path="/master/fees/fees-transaction-logs"
                element={<TransactionLogs />}
              />
              {/* Academic Routes */}
              <Route
                path="/academic/student-admission-application"
                element={<Students />}
              />
              <Route path="/academic/all-students" element={<AllStudents />} />
              <Route
                path="/academic/student-profile/:id"
                element={<StudentProfile />}
              />
              <Route
                path="/academic/stream-section-manager"
                element={<StreamSectionManager />}
              />
              <Route
                path="/academic/Inactive-students"
                element={<InactiveStudents />}
              />
              <Route
                path="/academic/roll-number-manager"
                element={<RollNumberManager />}
              />
              <Route
                path="/academic/attendance"
                element={<AttendanceManager />}
              />
              <Route
                path="/academic/attendance/attendance-report"
                element={<AttendanceReport />}
              />
              <Route
                path="/academic/attendance/daily-attendance-report"
                element={<DailyAttendanceReport />}
              />
              <Route
                path="/academic/academic-calendar"
                element={<AcademicCalendar />}
              />
              <Route
                path="/academic/leave-application"
                element={<StudentLeaveApplications />}
              />
              <Route path="/academic/promotion" element={<Promotion />} />
              <Route path="/academic/weekly-plan" element={<WeeklyPlan />} />
              <Route
                path="/academic/student-health-management"
                element={<StudentHealthManagement />}
              />
              <Route path="/academic/certificates" element={<Certificates />} />

              {/* Exam Routes */}
              <Route path="/exam/assignments" element={<Assignments />} />
              <Route
                path="/exam/offline-exam/exam-type"
                element={<ExamType />}
              />
              <Route
                path="/exam/offline-exam/term-exam"
                element={<TermExam />}
              />
              <Route
                path="/exam/offline-exam/term-exam/exam-info"
                element={<ManageExamTimeTable />}
              />
              <Route
                path="/exam/offline-exam/periodic-test"
                element={<PeriodicTest />}
              />
              <Route
                path="/exam/offline-exam/periodic-test/exam-info"
                element={<ManagePeriodicTestExamTimeTable />}
              />
              <Route
                path="/exam/mark-submission/unit-test"
                element={<UnitMarkSubmission />}
              />
              <Route
                path="/exam/mark-submission/term-exam"
                element={<TermMarkSubmission />}
              />
              <Route
                path="/exam/mark-submission/topic-wise"
                element={<TopicWiseMarkSubmission />}
              />
              <Route
                path="/exam/mark-submission/co-scholastic"
                element={<CoScholasticMarkSubmission />}
              />
              {/* <Route path="/exam/timetable" element={<Timetable />} />
              <Route path="/exam/marks" element={<Marks />} />
              <Route path="/exam/reports" element={<Reports />} /> */}

              {/* HRM Routes */}
              <Route path="/hrm/dashboard" element={<Dashboard />} />
              <Route path="/hrm/employees" element={<Students />} />
              <Route path="/hrm/settings" element={<Settings />} />
              <Route
                path="/hrm/settings/payband-structure"
                element={<PaybandStructure />}
              />

              {/* Library Routes */}
              <Route path="/library/books" element={<Books />} />
              <Route path="/library/issues" element={<Issues />} />
              <Route path="/library/members" element={<Members />} />
              <Route path="/library/categories" element={<Categories />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
