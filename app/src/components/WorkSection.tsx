import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function WorkSection() {
  return (
    <section id="work" className="max-w-5xl mx-auto px-6 pb-10 mt-10">
      <div className="rounded-2xl p-6 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.1),0_8px_25px_-5px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.3),0_8px_25px_-5px_rgba(0,0,0,0.3)] bg-gradient-to-br from-white/40 via-white/20 to-white/0 dark:from-white/10 dark:via-white/5 dark:to-white/0">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white font-karla">
          Featured Project
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Project name */}
          <p className="font-karla text-zinc-700 dark:text-zinc-300">
            Aircraft Maintenance Fault Analysis using NLP-based Clustering
          </p>
          {/* Small badges for Project and Repo */}
          <div className="flex gap-2 font-karla">
            <Link href="/project-1" passHref>
              <Badge className="text-xs px-2 py-1 dark:bg-zinc-800 dark:text-white cursor-pointer">
                Project
              </Badge>
            </Link>
            <a
              href="https://github.com/React2learn/NLP-based-Aircraft-Fault-Clustering"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge className="text-xs px-2 py-1 bg-gray-200 text-black dark:bg-zinc-800 dark:text-white">
                Repo
              </Badge>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}