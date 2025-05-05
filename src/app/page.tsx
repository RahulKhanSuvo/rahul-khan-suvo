import TopBackground from "@/components/Hero/TopBackground";
import NavBar from "@/components/NavBar";
import Sections from "@/components/Sections";

export default function Home() {
  return (
    <div className="relative overflow-clip" id="home">
      <Sections />
      <NavBar />
      <TopBackground />
    </div>
  );
}
