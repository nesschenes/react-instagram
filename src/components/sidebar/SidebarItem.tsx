import React from 'react'

export type Props = {
  id: number
  key: string
  iconUrl: string
  name: string
}

export const SidebarItem: React.FC<Props> = (props) => {
  return (
    <div className="sidebarItem">
      <img className="sidebarItem--logo" src={props.iconUrl} alt="post" />
      <h2>{props.name}</h2>
    </div>
  )
}
