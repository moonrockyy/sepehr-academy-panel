import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const CreateTerm = React.lazy(() => import('./components/terms/createNewTerm/createNewTerm'))
const ShowAllTerms = React.lazy(() => import('./components/terms/showAllTerms/showAllTerms'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/create-term', name: 'create-term', component: CreateTerm },
  { path: '/all-terms', name: 'create-term', component: ShowAllTerms },
]

export default routes
