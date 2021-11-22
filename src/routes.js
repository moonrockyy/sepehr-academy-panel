import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const CreateTerm = React.lazy(() => import('./components/createNewTerm/createNewTerm'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/create-term', name: 'create-term', component: CreateTerm },
]

export default routes
