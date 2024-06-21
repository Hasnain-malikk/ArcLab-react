import React from 'react'
import Main2 from '../Components/Main/Main2'
import RecentBlog from '../Components/Recent-blog/RecentBlog'
import RecentBlog1 from '../Components/Recent-blog/RecentBlog1'
import Pagination from '../Components/Pagination/Pagination'

const Blog = () => {
  return (
    <div>
      <Main2 heading="Blog" page="BLOG" />
      <RecentBlog id="id"/>
      <RecentBlog1 id="id"/>
      <Pagination id="marTop"/>
    </div>
  )
}

export default Blog
