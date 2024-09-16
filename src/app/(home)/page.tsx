import HomeBlogSection from "./components/HomeBlogSection";
import HomeCollectionSection from "./components/HomeCollectionSection";
import HomeHero from "./components/HomeHero";
import HomeInfoSection from "./components/HomeInfoSection";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeCollectionSection />
      <HomeInfoSection />
      <HomeBlogSection />
    </main>
  );
}
