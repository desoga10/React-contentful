import React, { useEffect, useState } from 'react'
import { createClient } from "contentful"
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'

const SingleBlog = () => {
  const [singleBlogPost, setSingleBlogPost] = useState([])

  let { id } = useParams();

  const client = createClient({ space: "9cbe8t5ezxep", accessToken: "nAs6nVtKP9k0ZKhD-M8PBRhrwd-UNxWLi6GciYQg0Cw" })

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          setSingleBlogPost(entries)
        })
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getEntryById()
  }, [id])


  return (
    <div id="layout" className="pure-g">
      <div className="content pure-u-1 pure-u-md-3-4">
        <div>
          <div className="posts">
            <Link to="/blogList" className="content-subhead">Blog Posts</Link>

            < section className="post">
              <header className="post-header">
                <img src={singleBlogPost?.fields?.blogImage?.fields?.file?.url} title="" alt={singleBlogPost?.fields?.title} width="578" height="291" />
                <h2 className="post-title pt-3">{singleBlogPost?.fields?.title}</h2>
                <p className="post-meta">
                  By <a href="https://thecodeangle.com/" className="post-author">{singleBlogPost?.fields?.blogAuthor}</a> Date <span></span>
                  <small>
                    {singleBlogPost?.fields?.createDate === undefined ?
                      "loading"
                      :
                      new Intl.DateTimeFormat('en-GB', {
                        month: 'long',
                        day: '2-digit',
                        year: 'numeric',
                      }).format(new Date(singleBlogPost?.fields?.createDate))

                    }
                  </small>
                </p>
              </header>
              <div className="post-description">
                {/* <MD source={singleBlogPost?.fields?.blogContent} /> */}
                <ReactMarkdown children={singleBlogPost?.fields?.postContent} />,
              </div>
            </section>

          </div>
          <div className="footer">
            <div className="pure-menu pure-menu-horizontal">
              <div className="pure-menu-item">
                <a href="http://twitter.com/thecodeangle" className="pure-menu-link">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SingleBlog