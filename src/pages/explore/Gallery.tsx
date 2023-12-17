import React from 'react'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: 'black',
    },
    imageList: {
      width: 500,
      height: 800,
    },
  })
)

const getRow = (index: number): number => {
  // return index % 3 || 1
  return index % 5 <= 2 ? 0 : 1
}

const getCol = (index: number): number => {
  return (index % 5) % 3
  // return (index / 5) % 2 === 0 ? index % 3 : 2
}

const srcset = (image: string, size: number, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  }
}

const itemCount = 20

export const Gallery: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ImageList rowHeight={200} cols={3}>
        {Array.from({ length: itemCount }, (v, index: number) => (
          <ImageListItem
            key={'gal' + index}
            rows={getRow(index)}
            cols={getCol(index)}
          >
            <img
              {...srcset(
                `https://picsum.photos/800/400?random=${index}`,
                200,
                getRow(index),
                getCol(index)
              )}
              alt={'gal' + index}
            />
          </ImageListItem>
        ))}
        {/* {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))} */}
      </ImageList>
    </div>
  )
}
