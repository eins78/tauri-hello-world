import React from 'react'
import { Ratio } from 'react-bootstrap'

export function PreviewPanel({ ...restProps }: { style?: React.CSSProperties }) {
  return (
    <div {...restProps}>
      <Ratio aspectRatio="16x9">
        <div>
          <code>Preview</code>
        </div>
      </Ratio>
    </div>
  )
}
