import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/hero/HeroSection'
import BlogPostCard from '../../components/blogPostcard/BlogPostCard'

function Home() {
  return (
    <Layout>
      <HeroSection/>
      <BlogPostCard/>
      </Layout>
  )
}
export default Home