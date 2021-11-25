import React, { lazy } from 'react'


const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))
const ShowAllTerms = lazy(() => import('../../components/terms/showAllTerms/showAllTerms'))
const ShowAllCourses = lazy(() => import('../../components/courses/showAllCourses/showAllCourses'))
const ShowAllNews = lazy(() => import('../../components/news/showAllNews/showAllNews'))

const Dashboard = () => {

  return (
    <>
      <WidgetsDropdown />
      <WidgetsBrand withCharts />
      <ShowAllTerms />
      <ShowAllCourses/>
      <ShowAllNews/>
    </>
  )
}

export default Dashboard
