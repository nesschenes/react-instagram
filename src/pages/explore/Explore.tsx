import React from 'react'
import { Sidebar } from '@/components/sidebar/Sidebar'
import { Gallery } from './Gallery'

export const Explore: React.FC = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '80%' }}>
          <Sidebar
            header={<></>}
            content={
              <div>
                <Gallery />
              </div>
            }
          />
        </div>
      </div>
    </>
  )
}
