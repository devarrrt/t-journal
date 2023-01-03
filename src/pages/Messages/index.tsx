import React, { FC } from 'react'
import MainLayout from '../../layouts/MainLayout';

interface MessagesProps {}

const Messages: FC<MessagesProps> = () => {
  return (
      <MainLayout>
          <h1>Это сообщения</h1>
      </MainLayout>
  )
}

export default Messages