import React from 'react'

const Login = React.lazy(() => import('./components/Login/Login'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const CreateTerm = React.lazy(() => import('./components/terms/createNewTerm/createNewTerm'))
const ShowAllTerms = React.lazy(() => import('./components/terms/showAllTerms/showAllTerms'))
const CreateCourse = React.lazy(() => import('./components/courses/createNewCourse/createNewCourse'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/login', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/create-term', name: 'create-term', component: CreateTerm },
  { path: '/all-terms', name: 'all-term', component: ShowAllTerms },
  { path: '/create-course', name: 'create-course', component: CreateCourse },
]

export default routes
