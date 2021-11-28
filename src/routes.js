import React from "react";

const Login = React.lazy(() => import("./components/Login/Login"));
const Register = React.lazy(() => import("./components/Register/Register"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const CreateTerm = React.lazy(() =>
  import("./components/terms/createNewTerm/createNewTerm")
);
const ShowAllTerms = React.lazy(() =>
  import("./components/terms/showAllTerms/showAllTerms")
);
const ShowAllCourses = React.lazy(() =>
  import("./components/courses/showAllCourses/showAllCourses")
);
const CreateCourse = React.lazy(() =>
  import("./components/courses/createNewCourse/createNewCourse")
);
const CreateNews = React.lazy(() =>
  import("./components/news/createNewNews/createNewNews")
);
const ShowAllNews = React.lazy(() =>
  import("./components/news/showAllNews/showAllNews")
);
const CourseInfoById = React.lazy(() =>
  import("./components/courses/courseInfoById/courseInfoById")
);
const NewsInfoById = React.lazy(() =>
  import("./components/news/newsInfoById/newsInfoById")
);
const UpdateNewsById = React.lazy(() =>
  import("./components/news/updateNewsById/updateNewsById")
);
const UpdateCourseById = React.lazy(() =>
  import("./components/courses/updateCourseByid/updateCourseById")
);
const ShowAllStudents = React.lazy(() =>
  import("./components/Students/ShowAllStudents/ShowAllStudents")
);

const ShowAllEmployees = React.lazy(() =>
  import("./components/Employees/ShowAllEmployees/ShowAllEmployees")
);

const ShowAllTeachers = React.lazy(() =>
  import("./components/Teachers/ShowAllTeachers/ShowAllTeachers")
);

const EmployeeInfo = React.lazy(() =>
  import("./components/Employees/EmployeeInfo/EmployeeInfo")
);
const UpdateEmployee = React.lazy(() =>
  import("./components/Employees/UpdateEmployee/UpdateEmployee")
);
const Comments = React.lazy(() =>
  import("./components/Comments/ShowAllComments/ShowAllComments")
);
const TermsInfoById = React.lazy(() =>
  import("./components/terms/termsInfoById/termsInfoById")
);

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/create-term", name: "create-term", component: CreateTerm },
  { path: "/all-terms", name: "all-term", component: ShowAllTerms },
  { path: "/all-courses", name: "all-courses", component: ShowAllCourses },
  { path: "/create-course", name: "create-course", component: CreateCourse },
  { path: "/create-news", name: "create-news", component: CreateNews },
  { path: "/all-news", name: "all-news", component: ShowAllNews },
  { path: "/course-info/:id", name: "course-info", component: CourseInfoById },
  { path: "/news-info/:id", name: "news-info", component: NewsInfoById },
  { path: "/terms-info/:id", name: "terms-info", component: TermsInfoById },
  { path: "/update-news/:id", name: "update-news", component: UpdateNewsById },
  {
    path: "/update-course/:id",
    name: "update-course",
    component: UpdateCourseById,
  },
  { path: "/all-students", name: "all-students", component: ShowAllStudents },
  {
    path: "/all-employees",
    name: "all-employees",
    component: ShowAllEmployees,
  },
  { path: "/all-teachers", name: "all-teachers", component: ShowAllTeachers },
  { path: "/employee-info", name: "employee-info", component: EmployeeInfo },
  { path: "/update-info", name: "uptade-info", component: UpdateEmployee },
  { path: "/comments", name: "comments", component: Comments },
];

export default routes;
