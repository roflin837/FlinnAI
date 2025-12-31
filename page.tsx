import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { ChatDemo } from "@/components/home/ChatDemo";
import { ImageDemo } from "@/components/home/ImageDemo";
import { UserManagement } from "@/components/home/UserManagement";
import { CreativeOptions } from "@/components/home/CreativeOptions";
import { SecuritySection } from "@/components/home/SecuritySection";
import { CTASection } from "@/components/home/CTASection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <ChatDemo />
        <ImageDemo />
        <UserManagement />
        <CreativeOptions />
        <SecuritySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
