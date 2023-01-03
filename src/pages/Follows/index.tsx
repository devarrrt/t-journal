import React, { FC } from 'react'
import MainLayout from '../../layouts/MainLayout';

interface FollowsProps { }

const Follows: FC<FollowsProps> = () => {
  return (
    <MainLayout>
      <h1>Это список подписок</h1>
    </MainLayout>
  )
}

export default Follows