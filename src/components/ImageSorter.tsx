import React from 'react'

import { Image } from '../App'

type ImageSorterProps = {
  images: Array<Image>
  style?: React.CSSProperties
}

export function ImageSorter({ images, ...restProps }: ImageSorterProps) {
  return (
    <div {...restProps}>
      <div>
        <code>ImageSorter</code>
        <ul>
          {images.map((img) => (
            <li key={img.id}>{img.filePath}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
