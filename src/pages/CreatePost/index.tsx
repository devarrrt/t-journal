import React from 'react'

import MainLayout from '../../layouts/MainLayout';
import WriteForm from '../../components/WriteForm';

const post = {
  title: 'string',
  body: '',
  description: 'string',
  tags: '#ler',
  id: 1,
  views: 3,
  user: {},
  createdAt: '23/323/12',
  updatedAt: '23/323/12',
}

const CreatePost = () => {

  return (
    <MainLayout className="main-layout-white" hideComments hideMenu>
      <WriteForm data={post} />
    </MainLayout>
  )
}

export default CreatePost