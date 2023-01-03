import React, { FC } from 'react'
import clsx from 'clsx';

import LeftMenu from '../components/LeftMenu'
import SideComments from '../components/SideComments'

interface MainLayoutProps {
    //fix
    children: any
    hideComments?: boolean;
    hideMenu?: boolean;
    contentFullWidth?: boolean;
    className?: string;
}

const MainLayout: FC<MainLayoutProps> = ({ children,
    contentFullWidth,
    hideComments,
    hideMenu,
    className, }) => {
    return (
        <div className={clsx('wrapper', className)}>
            {!hideMenu &&
                <div className="leftSide">
                    <LeftMenu />
                </div>
            }
            <div className={clsx('content', { 'content--full': contentFullWidth })}>{children}</div>
            {!hideComments && (
                <div className="rightSide">
                    <SideComments />
                </div>
            )}
        </div>
    )
}

export default MainLayout