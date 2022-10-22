import React from "react"
import Article from "./Article"

function ArticleList(props) {


    const articleArray = props.posts.map(function(post) {
        return <Article
        key = { post.id }
        title = { post.title }
        date = { post.date }
        preview = { post.preview }
        minutes = { post.minutes }
        />

    })
    return ( <
        main > { articleArray } <
        /main>

    )
}
export default ArticleList;