import React, { lazy } from 'react'

const ShowAllTerms = lazy(() => import('../../components/terms/showAllTerms/showAllTerms'))
const ShowAllCourses = lazy(() => import('../../components/courses/showAllCourses/showAllCourses'))
const ShowAllNews = lazy(() => import('../../components/news/showAllNews/showAllNews'))

const Dashboard = () => {
  return (
    <>
      <ShowAllTerms />
      <ShowAllCourses />
      <ShowAllNews />
    </>
  )
}

export default Dashboard
