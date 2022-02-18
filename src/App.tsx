import React from 'react'
import Layout from './components/Layout'
import { ImageSorter } from './components/ImageSorter'
import { PreviewPanel } from './components/PreviewPanel'
import { MetaDataPanel } from './components/MetaDataPanel'
import { EditorPanel } from './components/EditorPanel'

// inject styles
import './App.css'

export interface Image {
  id: string
  filePath: string
  fileSizeInBytes: number
  sizeInPixels?: { height: number; width: number }
}

const FAKE_IMAGE_LIST: Array<Image> = [
  { id: '1', filePath: '01.example A.jpg', fileSizeInBytes: 1, sizeInPixels: { height: 1080, width: 1440 } },
  { id: '2', filePath: '02.example B.jpg', fileSizeInBytes: 1, sizeInPixels: { height: 1080, width: 1440 } },
  { id: '3', filePath: '03.example C.jpg', fileSizeInBytes: 1, sizeInPixels: { height: 1080, width: 1440 } },
  { id: '4', filePath: '04.example D.jpg', fileSizeInBytes: 1, sizeInPixels: { height: 1080, width: 1440 } },
  { id: '5', filePath: '05.example E.jpg', fileSizeInBytes: 1, sizeInPixels: { height: 1080, width: 1440 } },
  { id: '6', filePath: '06.example F.jpg', fileSizeInBytes: 1, sizeInPixels: { height: 1080, width: 1440 } },
]

function App() {
  return (
    <Layout
      previewContent={<PreviewPanel />}
      mainContent={<ImageSorter images={FAKE_IMAGE_LIST} />}
      editorContent={<EditorPanel />}
      metaDataContent={<MetaDataPanel />}
    />
  )
}

export default App
