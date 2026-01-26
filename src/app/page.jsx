import Header from "../components/Header";
import BannerCarousel from "../components/BannerCarousel";
import AppDownloadSection from "../components/AppDownloadSection";
import CategoryNavigation from "../components/CategoryNavigation";
import MainContentSection from "../components/MainContentSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main" id="main-content">
        <BannerCarousel />
        <AppDownloadSection />
        <CategoryNavigation />
        <MainContentSection />
      </main>
      <Footer />
    </>
  );
}
