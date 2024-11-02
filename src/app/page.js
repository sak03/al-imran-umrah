import Banners from "./home/Banners";
import HomeCurrentPackage from "./home/HomeCurrentPackage";
import HomeOffers from "./home/HomeOffers";
import HomePackageClasses from "./home/HomePackageClasses";

export default function Home() {
  return (
    <div>
      <Banners />
      <HomeCurrentPackage />
      <HomePackageClasses />
      <HomeOffers />
    </div>
  );
}
