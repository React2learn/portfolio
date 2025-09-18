"use client";

import React from "react";
import { ArrowLeft, Github } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import { Badge } from "@/components/ui/badge";
import TopBar from "@/components/TopNavbar";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function ProjectDetailPage() {
    const project = {
        title: "Spotify Listening Analysis Dashboard",
        description:
            "This Power BI project visualizes and analyzes personal Spotify listening history to uncover listening trends, user habits, and platform usage over time.",
        github: "https://github.com/React2learn/Spotify-Listening-Analysis-Dashboard",
    };

    const spotifyFilesCode = `spotify_dashboard.pbix  # Power BI Dashboard file
README.md                # Project report and documentation`;

    const spotifyToolsCode = `Power BI Desktop
DAX (Data Analysis Expressions)
Spotify Listening History Dataset`;

    const spotifyFeaturesCode = `Interactive charts and filters
Clean, dark-themed layout
DAX-powered dynamic measures: MostPlayedArtist, MostSkippedTrack, TotalMsByArtist, SkippedCount
Device/platform segmentation
Playback trend analysis over time`;


    const spotifyVisualsCode = `Top Artists by Number of Albums: Displays the most prolific artists based on album count
Listening Time by Platform: Shows how much time was spent listening on each platform (Android, iOS, Web Player)
Cumulative Listening by YearMonth: Tracks cumulative playback trends over time
Music Playback Time Over the Years: Line chart displaying yearly total listening duration
Top Artists by Listening Time: Artists with the highest accumulated playback time
Listening Time by Playback End Reason: Donut chart showing how most listening sessions ended`;

    return (
        <>
            <TopBar />
            <div className="relative z-10">
                <div className="px-6 pb-12 pt-10 max-w-4xl mx-auto text-left">
                    {/* Title */}
                    <h1 className="text-2xl dark:text-gray-300 md:text-5xl font-bold mb-4 font-karla">{project.title}</h1>

                    {/* GitHub Link */}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full dark:bg-white dark:text-gray-800 text-sm px-3 py-1 hover:opacity-80 transition mb-8 font-karla bg-zinc-800 text-white no-underline"
                        >
                            <Github size={16} />
                            <span>Repo</span>
                        </a>
                    )}

                    {/* Dashboard Image */}
                    <div className="mb-8">
                        <img 
                            src="power.png" 
                            alt="Spotify Dashboard Screenshot" 
                            className="w-full shadow-lg border border-gray-200 dark:border-gray-700"
                        />
                    </div>

                    {/* Description */}
                    <div className="font-karla lg:text-[20px] sm:text-[18px] text-gray-700 dark:text-muted-foreground leading-relaxed space-y-6">
                        <p>{project.description}</p>

                        {/* Dashboard Overview */}
                        <h2 className="text-2xl font-semibold mt-6 dark:text-gray-300">📊 Dashboard Overview</h2>
                        <p>
                            The dashboard includes a combination of key performance indicators and interactive charts that provide detailed insights into music playback behavior.
                        </p>

                        {/* Key Metrics */}
                        <h3 className="text-xl font-semibold mt-4 dark:text-gray-300">🔹 Key Metrics</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>🎨 <strong>Unique Artists:</strong> Total number of distinct artists listened to.</li>
                            <li>⏱️ <strong>Total Listening Hours:</strong> Cumulative playback duration.</li>
                            <li>🎶 <strong>Most Played Artist:</strong> Artist with the highest total listening time.</li>
                            <li>⏩ <strong>Most Skipped Track:</strong> Track that was skipped most frequently.</li>
                        </ul>

                        {/* Visual Insights */}
                        <h3 className="text-xl font-semibold mt-4 dark:text-gray-300">🔹 Visual Insights</h3>
                        <CodeBlock code={spotifyVisualsCode} language="text" showLineNumbers={true} />


                        {/* Features */}
                        <h3 className="text-xl font-semibold mt-4 dark:text-gray-300">⚙️ Features</h3>
                        <CodeBlock code={spotifyFeaturesCode} language="text" showLineNumbers={true} />


                        {/* Tools Used */}
                        <h3 className="text-xl font-semibold mt-4 dark:text-gray-300">🧰 Tools Used</h3>
                        <CodeBlock code={spotifyToolsCode} language="text" showLineNumbers={true} />


                        {/* Project Files */}
                        {/* Project Files */}
                        <h3 className="text-xl font-semibold mt-4 dark:text-gray-300">📁 Project Files</h3>
                        <CodeBlock code={spotifyFilesCode} language="text" showLineNumbers={true} />

                    </div>
                </div>
            </div>
        </>
    );
}