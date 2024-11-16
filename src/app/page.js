import Banners from "./home/Banners";
import TrendingPackage from "./home/TrendingPackage";
import HomeOffers from "./home/HomeOffers";
import HomePackageClasses from "./home/HomePackageClasses";

export default function Home() {
  return (
    <div>
      <Banners />
      <TrendingPackage />
      <HomePackageClasses />
      <HomeOffers />
    </div>
  );
}
