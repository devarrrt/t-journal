import React, { useState } from 'react'

import MainLayout from '../../layouts/MainLayout';
import FullPost from '../../components/FullPost'
import PostComments from '../../components/PostComments'

type Props = {}

const FullPostPage = () => {
    const [post, setPost] = useState({
        id: 1,
        title: '',
        body: [
            {
                data: {
                    text: 'hello world'
                }
            },
            {
                data: {
                    text: 'Ls w ehweh wlejljwe we'
                }
            }
        ]
    })

    return (
        <MainLayout className="mb-50" contentFullWidth>
            <FullPost title={post.title} blocks={post.body} />
            <PostComments postId={post.id} />
        </MainLayout>
    )
}

export default FullPostPage