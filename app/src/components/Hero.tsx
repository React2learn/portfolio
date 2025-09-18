import { Github } from "lucide-react";
import Link from "next/link";
export default function Hero() {
  return (
    <main className="flex-1 flex items-center justify-center px-6 pt-32 font-karla">
      <div className="max-w-3xl text-left sm:text-center">
        {/* Badge */}
        <div className="flex justify-start sm:justify-center space-x-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-400 text-sm font-medium">
            Data Science
          </span>
          <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">
            Machine Learning
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
          Turning raw <span className="text-violet-400">data</span> <br /> into powerful{" "}
          <span className="text-green-400">insights</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-gray-700 dark:text-zinc-400 mb-8">
          Hi, I&apos;m <span className="font-semibold dark:text-white">Atharva</span>, a data
          scientist who loves finding trends, crafting predictive models, and
          visualizing results through clean, interactive dashboards.
        </p>

        {/* CTA Button */}
        <Link
          href="https://github.com/React2learn"
          className="
    inline-flex items-center space-x-2 px-5 py-2 rounded-full
    border border-gray-400 dark:border-zinc-700
    hover:border-violet-500 transition
  "
        >

          <Github size={16} />

          <span>About – Atharva</span>
        </Link>
      </div>
    </main>
  );
}
