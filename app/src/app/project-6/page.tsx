"use client";

import React from "react";
import { Github } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import TopBar from "@/components/TopNavbar";

export default function ProjectDetailPage() {
    const project = {
        title: "Power BI Sales Dashboard",
        description:
            "This Power BI dashboard provides a visual analysis of sales data across regions, products, and time. It includes key performance indicators (KPIs), trends, and categorical breakdowns.",
        github: "https://github.com/React2learn/powerbi-dashboard-sales-performance",
    };

    const filesCode = `SalesDashboard.pbix    # Power BI report file
dashboard_preview.png # Dashboard screenshot
README.md             # Project overview and summary`;

    const toolsCode = `Power BI Desktop
DAX (Data Analysis Expressions)
Excel / CSV dataset`;

    const featuresCode = `Key performance indicators: Total Revenue, Orders, Avg Selling Price
Pie, bar, and line charts for sales trends
Detailed sales records table with scroll
Salesperson slicer for filtering
Responsive, clean card layout`;

    const visualsCode = `Units Sold by Product (%): Pie chart showing sales share by product
Sales by Region (₹): Horizontal bar chart comparing revenue by region
Revenue Over Time (Daily): Line chart for daily revenue trends
Detailed Sales Records: Table with Date, Region, Product, Revenue columns
Salesperson Filter: Slicer to refine all visuals by salesperson`;

    return (
        <>
            <TopBar />
            <div className="relative z-10">
                <div className="px-6 pb-12 pt-10 max-w-4xl mx-auto text-left">
                    {/* Title */}
                    <h1 className="text-2xl dark:text-gray-300 md:text-5xl font-bold mb-4 font-karla">
                        {project.title}
                    </h1>

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
                            src="sales.png"
                            alt="Power BI Sales Dashboard Screenshot"
                            className="w-full shadow-lg border border-gray-200 dark:border-gray-700"
                        />
                    </div>

                    {/* Description */}
                    <div className="font-karla lg:text-[20px] sm:text-[18px] text-gray-700 dark:text-muted-foreground leading-relaxed space-y-6">
                        <p>{project.description}</p>

                        {/* Dashboard Overview */}
                        <h2 className="text-2xl font-semibold mt-6 dark:text-gray-300">
                            📊 Dashboard Overview
                        </h2>
                        <p>
                            The dashboard includes KPIs, charts, and tables that
                            give actionable insights into revenue, orders, and
                            regional performance.
                        </p>

                        {/* Key Metrics */}
                        <h3 className="text-xl font-semibold mt-4 dark:text-gray-300">
                            🔹 Key Metrics
                        </h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>💰 <strong>Total Revenue:</strong> Sum of all sales revenue</li>
                            <li>📦 <strong>Total Orders:</strong> Count of orders placed</li>
                            <li>🏷️ <strong>Avg Selling Price:</strong> Revenue ÷ Units Sold</li>
                            <li>🏆 <strong>Top Product:</strong> Highest revenue product</li>
                        </ul>

                        {/* Visual Insights */}
                        <h3 className="text-xl font-semibold mt-4 dark:text-gray-300">
                            🔹 Visual Insights
                        </h3>
                        <CodeBlock code={visualsCode} language="text" showLineNumbers />

                        {/* Features */}
                        <h3 className="text-xl font-semibold mt-4 dark:text-gray-300">
                            ⚙️ Features
                        </h3>
                        <CodeBlock code={featuresCode} language="text" showLineNumbers />

                        {/* Tools Used */}
                        <h3 className="text-xl font-semibold mt-4 dark:text-gray-300">
                            🧰 Tools Used
                        </h3>
                        <CodeBlock code={toolsCode} language="text" showLineNumbers />

                        {/* Project Files */}
                        <h3 className="text-xl font-semibold mt-4 dark:text-gray-300">
                            📁 Project Files
                        </h3>
                        <CodeBlock code={filesCode} language="text" showLineNumbers />
                    </div>
                </div>
            </div>
        </>
    );
}
