import React, { lazy } from 'react'


const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))
const ShowAllTerms = lazy(() => import('../../components/terms/showAllTerms/showAllTerms'))
const ShowAllCourses = lazy(() => import('../../components/courses/showAllCourses/showAllCourses'))

const Dashboard = () => {

  return (
    <>
      <WidgetsDropdown />
      <WidgetsBrand withCharts />
      <ShowAllTerms/>
      <ShowAllCourses/>
    </>
  )
}

export default Dashboard
