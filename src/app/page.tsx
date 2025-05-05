import TopBackground from "@/components/Hero/TopBackground";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="relative overflow-clip" id="home">
      <NavBar />
      <TopBackground />
    </div>
  );
}
