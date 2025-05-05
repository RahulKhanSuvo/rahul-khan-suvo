import TopBackground from "@/components/Hero/TopBackground";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="relative overflow-clip" id="home">
      <div className="w-screen h-screen"></div>
      <NavBar />
      <TopBackground />
    </div>
  );
}
