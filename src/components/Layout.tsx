import React from 'react'
import { Container, Stack } from 'react-bootstrap'

const STACK_GAP = 2
const BORDER_WIDTH = 2

type LayoutProps = {
  previewContent: React.ReactNode
  mainContent: React.ReactNode
  editorContent: React.ReactNode
  metaDataContent: React.ReactNode
}

export default function Layout({ mainContent, previewContent, editorContent, metaDataContent }: LayoutProps) {
  return (
    <Container>
      <header className={`border-bottom border-${BORDER_WIDTH}`}>
        <p className="text-center">
          <code>slideshow editor</code>
        </p>
      </header>

      <main>
        <Stack direction="horizontal" gap={STACK_GAP}>
          <div className={`border-end border-${BORDER_WIDTH}`} style={{ minWidth: '200px' }}>
            {previewContent}
          </div>
          <div className="ms-auto me-auto">{mainContent}</div>
          <div className={`border-start border-${BORDER_WIDTH}`}>
            <Stack gap={STACK_GAP}>
              <div className={`border-bottom border-${BORDER_WIDTH}`}>{editorContent}</div>
              <div>{metaDataContent}</div>
            </Stack>
          </div>
        </Stack>
      </main>
    </Container>
  )
}
