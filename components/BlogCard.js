import React from 'react'
import Link from 'next/link'

function BlogCard({ title, author, coverPhoto, datePublished, slug }) {
  return (
    <div className={styles.card}>
        <Link>
            <div className={styles.imgContainer}>
                <img src={coverPhoto.url} alt="" />
            </div>
        </Link>
    </div>
  )
}

export default BlogCard