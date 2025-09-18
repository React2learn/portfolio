import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[linear-gradient(to_br,var(--gradient-from),var(--gradient-via),var(--gradient-to))] text-foreground flex flex-col overflow-hidden">
      {/* Radial pattern on top of the gradient */}
      <div className="absolute inset-0 min-h-full w-full bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]"></div>

      <div className="relative z-10 ">
        <Navbar />
        <Hero />
        <WorkSection />
      </div>
    </div>
  );
}
