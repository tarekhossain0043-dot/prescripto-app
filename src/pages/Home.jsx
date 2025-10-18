import Banner from "../components/Banner";
import Hero from "../components/Hero";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
function Home() {
  return (
    <div>
      <Hero />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
}

export default Home;
