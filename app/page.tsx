import { Sidebar } from "@/components/sidebar"
import { MainContent } from "@/components/main-content"
import { BottomNav } from "@/components/bottom-nav"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <MainContent />
      </div>
      <BottomNav />
    </div>
  )
}
