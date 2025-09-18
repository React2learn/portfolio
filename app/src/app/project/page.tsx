"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Search } from 'lucide-react';
import TopBar from '@/components/TopNavbar';

export default function ProjectsPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const projects = [
        {
            date: "Jul 1, 2023",
            title: "Aircraft Maintenance Fault Analysis using NLP-based Clustering",
            description: "Built a predictive model to forecast hourly traffic volumes using ML algorithms and time series analysis.",
            views: "",
            link: "/project-1",
            tags: ["Machine Learning", "Python", "Data Science"]
        },
        {
            date: "Apr 1, 2023",
            title: "Airport Runway Taxi-Out Time Analysis Report",
            description: "Analyzed how runway, airline, weather, and wind speed impact aircraft taxi-out times. Delivered actionable insights and visual reports to improve airport efficiency.",
            views: "",
            link: "/project-2",
            tags: ["Machine Learning", "Python", "Data Science"]
        },
        {
            date: "May 1, 2023",
            title: "Spotify Listening Analysis Dashboard",
            description: "This Power BI project visualizes and analyzes personal Spotify listening history to uncover listening trends, user habits, and platform usage over time.",
            views: "",
            link: "/project-3",
            tags: ["Power BI", "DAX", "Power Query"]
        },
        {
            date: "Mar 1, 2023",
            title: "CPU & GPU Architecture Analysis",
            description: "Analyzed a comprehensive SoC dataset to explore CPU and GPU architectures, core categories, and GPU performance across major chip designers.",
            views: "",
            link: "/project-4",
            tags: ["Dataset Analysis", "Python", "Visualization", "SoC"]
        },
        {
            date: "Jun 1, 2023",
            title: "SmartPick-Optimized-Warehouse-Order-Picking-System",
            description: "SmartPick is a warehouse automation tool that quickly locates items and creates an optimized picking path to reduce travel time.",
            views: "",
            link: "/project-5",
            tags: ["Warehouse Automation", "Python", "Optimization"]
        },
        {
            date: "Feb 1, 2023",
            title: "Power BI Sales Dashboard",
            description: "The dashboard includes KPIs, charts, and tables that give actionable insights into revenue, orders, and regional performance.",
            views: "",
            link: "/project-6",
            tags: ["Data Visualization", "Business Intelligence", "Power BI"]
        }
    ];

    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <>
            <div className="min-h-screen">
                {/* Background Pattern */}


                {/* TopBar */}
                <div className="relative z-20">
                    <TopBar />
                </div>

                <div className="relative z-10 px-6 py-8 max-w-6xl mx-auto font-karla">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-5xl font-bold mb-4 dark:bg-gradient-to-r from-white to-gray-400 bg-clip-text dark:text-transparent inline-block leading-tight">
                            Projects
                        </h1>
                        <p className="dark:text-gray-400 text-lg leading-relaxed text-gray-700">
                            Some of the projects are from work and some are on my own time.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="mb-10">
                        <div className="relative max-w-md">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-zinc-800 dark:bg-gray-800/50 border dark:border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none dark:focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Project Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                        {filteredProjects.map((project, index) => (
                            <Card
                                key={index}
                                className="group bg-zinc-800 dark:bg-gray-900/40 border border-gray-800 hover:border-gray-600 transition-all duration-300 rounded-2xl backdrop-blur-sm dark:hover:bg-gray-900/60 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
                            >
                                <CardHeader className="flex flex-row items-center justify-between pb-4">
                                    <span className="text-sm text-gray-400 font-medium">
                                        {project.date}
                                    </span>
                                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                                        <Eye className="w-4 h-4" />
                                        <span className="font-medium">{project.views}</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <CardTitle className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                                        {project.title}
                                    </CardTitle>
                                    <p className="text-gray-400 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-md border border-purple-500/30"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.link}
                                        className="inline-flex items-center gap-2 text-sm text-purple-300 hover:text-purple-200 font-medium transition-all duration-300 group-hover:translate-x-1"
                                    >
                                        Read more
                                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                    </a>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold text-gray-400 mb-2">No projects found</h3>
                            <p className="text-gray-500">Try adjusting your search terms</p>
                        </div>
                    )}

                    {/* Stats */}
                    <div className="mt-16 text-center">
                        <p className="text-lg dark:text-gray-300 text-gray-700">
                            Explore more projects on{" "}
                            <a
                                href="https://github.com/React2learn?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-purple-400 hover:text-purple-300 font-semibold"
                            >
                                GitHub
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}