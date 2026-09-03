import { Route, Routes } from "react-router";
import AppLayout from '@/components/layout/AppLayout'
import ExplorePage from '@/pages/ExplorePage'
import GalleriesPage from '@/pages/GalleriesPage'
import HomePage from '@/pages/HomePage'
import UploadPage from '@/pages/UploadPage'
import NotFoundPage from "@/pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="galleries" element={<GalleriesPage />} />
        <Route path="upload" element={<UploadPage />} />
      </Route>
       <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App