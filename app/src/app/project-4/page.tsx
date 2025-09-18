"use client";

import React from "react";
import { Github } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import TopBar from "@/components/TopNavbar";


export default function ProjectDetailPage() {
    const project = {
        title: "CPU & GPU Architecture Analysis",
        description:
            "This project analyzes a cleaned dataset of SoC (System-on-Chip) specifications. It focuses on CPU/GPU architectures, performance proxies, and design trends across major chip manufacturers such as Apple, Qualcomm, and Samsung.",
        github: "https://github.com/React2learn/Performance-Architecture-Insights-into-Mobile-System-on-Chip-SoC-Designs",
    };

    const importPackagesCode = `import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt`;

    const loadDatasetCode = `df = pd.read_csv('cleaned_cpu_data_processed.csv')`;


    const coreCategoryCountsCode = `# Count core category by designer
core_category_counts = df.groupby(['Designer', 'Core Category']).size().unstack(fill_value=0)
print(core_category_counts)`;

    const coreCategoryOutput = `Core Category          ARM Cortex  Big.LITTLE  Other  Qualcomm Kryo
Designer                                                           
Acorn                           0           0      4              0
Actions Semiconductor           1           2      0              0
Allwinner                       1           4      0              0
Amd                             0           0      3              0
Amlogic                         2           2      0              0
Apple                           1          53      0              0
Arm                             6           4     41              0
Broadcom                        2           5      2              0
Centrality                      0           0      5              0
Cirrus Logic                    0           0      2              0
Dec                             0           0      2              0
Hisilicon                       0          46      1              0
Hitachi                         0           0      2              0
Ingenic                         0           0      6              0
Intel                           0           0     91              0
Jlq                             0           1      0              0
Leadcore                        0           4      0              0
Lg                              0           1      0              0
Magiceyes                       0           0      2              0
Marvell                         0           7     18              0
Mediatek                        7         169      2              0
Motorola                        0           0      7              0
Nec                             0           5     21              0
Nokia                           0           0      4              0
Nufront                         0           1      0              0
Nvidia                          0          21      1              0
Nxp                             2           0      8              0
Philips                         0           0      7              0
Qualcomm                        8          85     78             46
Renesas                         0           0      1              0
Rmi                             0           0      2              0
Rockchip                        2           7      2              0
Samsung                         4          61     17              0
Samsung-Intrinsity              0           0      4              0
Sirf                            0           0      5              0
Sony                            0           0      1              0
Spreadtrum                      2          17      1              0
St-Ericsson                     0           9      1              0
Stmicroelectronics              2           0      7              0
Telechip                        1           0      5              0
Texas Instruments              17           6     20              0
Toshiba                         0           0      6              0
Unisoc                          0          15      0              0
Via                             1           3      0              0
Xiaomi                          0           2      0              0
Ziilabs                         1           0      1              0`;

    const avgCoreCountCode = `# Average processor core count per core category
avg_core_count = df.groupby('Core Category')['Number of processor core(s)'].mean()
print("\\nAverage CPU Cores by Core Category:\\n", avg_core_count)`;


    const avgCoreCountOutput = `Average CPU Cores by Core Category:
Core Category
ARM Cortex       1.666667
Big.LITTLE       5.830189
Other            1.642105
Qualcomm Kryo    7.565217
Name: Number of processor core(s), dtype: float64`;


    const cleanGpuFieldsCode = `# Clean GPU fields
df['GPU Cores'] = df['Number of GPU cores'].astype(str).str.extract(r'(\\d+)').astype(float)
df['GPU Clock (MHz)'] = df['GPU Clock'].astype(str).str.extract(r'(\\d+\\.?\\d*)').astype(float)`;


    const gpuScoreCode = `# GPU performance proxy
df['GPU Score'] = df['GPU Cores'] * df['GPU Clock (MHz)']`;


    const topGpuPerformersCode = `# Top 10 GPU performers
top_gpu = df[['Designer', 'Type', 'GPU Score']].sort_values(by='GPU Score', ascending=False).head(10)
print("\\nTop 10 GPU Performers:\\n", top_gpu)`;


    const topGpuPerformersOutput = `Top 10 GPU Performers:
     Designer                           Type  GPU Score
478   Nvidia                    Tegra K1-64   182400.0
479   Nvidia                    Tegra K1-32   182400.0
578   Nvidia                   Tegra 4 Ap40    48384.0
576   Nvidia                    Tegra 4 T43    48384.0
577   Nvidia                   Tegra 4 T40X    48384.0
127    Apple       M1 Max Apl1105 / Apl1W05    41472.0
480   Nvidia                  Tegra 4I Sp3X    36000.0
126    Apple  M1 Max Lite Apl1105 / Apl1W05    31104.0
48     Apple       M2 Pro Apl1113 / Apl1W13    26562.0
129    Apple       M1 Pro Apl1103 / Apl1W03    20736.0`;


    const avgGpuByDesignerCode = `# Average GPU Score by Designer
avg_gpu_by_designer = df.groupby('Designer')['GPU Score'].mean().sort_values(ascending=False)
print("\\nAverage GPU Score by Designer:\\n", avg_gpu_by_designer)`;


    const avgGpuByDesignerOutput = `Average GPU Score by Designer:
Designer
Nvidia                   44332.923077
Apple                     8961.368421
Hisilicon                 5166.054054
Intel                     4137.388889
Samsung                   3905.534884
Mediatek                  3300.928571
Qualcomm                  2072.526316
Unisoc                    1660.666667
Rockchip                  1266.666667
Spreadtrum                1150.000000
Allwinner                  873.333333
Amlogic                    433.333333
Texas Instruments          344.500000
Samsung-Intrinsity         200.000000
Philips                     80.000000
Acorn                             NaN
Actions Semiconductor             NaN
Amd                               NaN
Arm                               NaN
Broadcom                          NaN
Centrality                        NaN
Cirrus Logic                      NaN
Dec                               NaN
Hitachi                           NaN
Ingenic                           NaN
Jlq                               NaN
Leadcore                          NaN
Lg                                NaN
Magiceyes                         NaN
Marvell                           NaN
Motorola                          NaN
Nec                               NaN
Nokia                             NaN
Nufront                           NaN
Nxp                               NaN
Renesas                           NaN
Rmi                               NaN
Sirf                              NaN
Sony                              NaN
St-Ericsson                       NaN
Stmicroelectronics                NaN
Telechip                          NaN
Toshiba                           NaN
Via                               NaN
Xiaomi                            NaN
Ziilabs                           NaN
Name: GPU Score, dtype: float64`;


    const gpuScorePlotCode = `plt.figure(figsize=(12, 6))
sns.barplot(
    x=avg_gpu_by_designer.values,
    y=avg_gpu_by_designer.index,
    palette='mako'
)
plt.xlabel("Average GPU Score")
plt.title("Average GPU Score by Designer")
plt.tight_layout()
plt.show()`;

    const coreCategoryPlotCode = `core_counts = df.groupby(['Designer', 'Core Category']).size().unstack(fill_value=0)
core_counts.plot(kind='bar', stacked=True, figsize=(12, 6))
plt.title("Core Categories by Designer")
plt.ylabel("Number of Chips")
plt.tight_layout()
plt.show()`;


    const gpuScoreBoxplotCode = `plt.figure(figsize=(12,6))
sns.boxplot(data=df, x='Core Category', y='GPU Score')
plt.title("GPU Score by Core Category")
plt.xticks(rotation=45)
plt.show()`;


    const appleCoresPieCode = `apple_cores = df[df['Designer'] == 'Apple']['Core Category'].value_counts()
apple_cores.plot.pie(autopct='%1.1f%%', title='Apple Core Categories')
plt.ylabel("")
plt.show()`;


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

                    {/* Description */}
                    <div className="font-karla lg:text-[20px] sm:text-[18px] text-gray-700 dark:text-muted-foreground leading-relaxed space-y-6">
                        <p>{project.description}</p>

                        {/* Step 1: Import Required Packages */}
                        <p>
                            <strong>Step 1: Import Required Packages</strong>
                            <br />
                            Before starting the analysis, we import all the essential Python
                            libraries for data handling and visualization.
                        </p>

                        <CodeBlock
                            code={importPackagesCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            We import <code>pandas</code> for data manipulation,{" "}
                            <code>seaborn</code> and <code>matplotlib</code> for creating
                            charts and plots. These libraries form the base toolkit for
                            exploring and visualizing SoC architecture data.
                        </p>

                        {/* Step 2: Load the Dataset */}
                        <p className="mt-8">
                            <strong>Step 2: Load the Dataset</strong>
                            <br />
                            Once the libraries are ready, read the cleaned SoC dataset into a pandas DataFrame.
                        </p>

                        <CodeBlock
                            code={loadDatasetCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            We use <code>pd.read_csv()</code> to import the <code>cleaned_cpu_data_processed.csv</code> file.
                            This creates a DataFrame (<code>df</code>) that holds all processor specifications for further
                            exploration and analysis.
                        </p>

                        {/* Step 3: Count Core Category by Designer */}
                        <p className="mt-8">
                            <strong>Step 3: Count Core Category by Designer</strong>
                            <br />
                            Group the dataset by <code>Designer</code> and <code>Core Category</code> to see how many chips
                            each company has in different architecture groups.
                        </p>

                        <CodeBlock
                            code={coreCategoryCountsCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            We use <code>groupby()</code> with <code>size()</code> to count rows for each combination of
                            <code>Designer</code> and <code>Core Category</code>, then <code>unstack()</code> to create a
                            table where columns represent core categories and rows represent designers.
                        </p>
                        <CodeBlock
                            code={coreCategoryOutput}
                            language="text"
                            showLineNumbers={false}
                        />

                        {/* Step 4: Average CPU Cores by Core Category */}
                        <p className="mt-8">
                            <strong>Step 4: Average CPU Cores by Core Category</strong>
                            <br />
                            To understand how many CPU cores different architectures typically provide,
                            compute the average number of processor cores for each <code>Core Category</code>.
                        </p>

                        <CodeBlock
                            code={avgCoreCountCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            Using <code>groupby()</code> on <code>Core Category</code> with{" "}
                            <code>mean()</code> calculates the average core count within each architecture.
                            This shows how core counts vary between designs like ARM Cortex, Big.LITTLE, and others.
                        </p>

                        <CodeBlock
                            code={avgCoreCountOutput}
                            language="text"
                            showLineNumbers={false}
                        />

                        {/* Step 5: Clean GPU Fields */}
                        <p className="mt-8">
                            <strong>Step 5: Clean GPU Fields</strong>
                            <br />
                            Extract numeric values from the <code>Number of GPU cores</code> and{" "}
                            <code>GPU Clock</code> columns to prepare them for calculations.
                        </p>

                        <CodeBlock
                            code={cleanGpuFieldsCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            Some GPU columns contain text or mixed formats. Using{" "}
                            <code>str.extract()</code> with regular expressions allows us to pull out just
                            the numbers, then convert them to <code>float</code> for further analysis.
                        </p>

                        {/* Step 6: GPU Performance Proxy */}
                        <p className="mt-8">
                            <strong>Step 6: GPU Performance Proxy</strong>
                            <br />
                            Create a new column <code>GPU Score</code> as a simple proxy for GPU performance by multiplying
                            the number of GPU cores by their clock speed.
                        </p>

                        <CodeBlock
                            code={gpuScoreCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            This quick metric (<code>GPU Cores × GPU Clock (MHz)</code>) gives an approximate measure of a
                            processor’s GPU capability. It isn’t a formal benchmark but is useful for comparing chips in the
                            dataset.
                        </p>

                        {/* Step 7: Top 10 GPU Performers */}
                        <p className="mt-8">
                            <strong>Step 7: Top 10 GPU Performers</strong>
                            <br />
                            Sort the dataset by <code>GPU Score</code> (highest first) and display the top 10 chips along
                            with their designer names and types.
                        </p>

                        <CodeBlock
                            code={topGpuPerformersCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            We select only the relevant columns (<code>Designer</code>, <code>Type</code>,{" "}
                            <code>GPU Score</code>), then sort them in descending order by the score and take the first 10
                            rows to highlight the best GPU performers.
                        </p>

                        {/* Step 7 Output */}
                        {/* <p className="mt-4 text-sm">
                            <strong>Output:</strong>
                        </p> */}
                        <CodeBlock
                            code={topGpuPerformersOutput}
                            language="text"
                            showLineNumbers={false}
                        />


                        {/* Step 8: Average GPU Score by Designer */}
                        <p className="mt-8">
                            <strong>Step 8: Average GPU Score by Designer</strong>
                            <br />
                            Group the dataset by <code>Designer</code>, calculate the mean <code>GPU Score</code> for each,
                            and sort the results in descending order to see which companies achieve the highest average GPU
                            performance.
                        </p>

                        <CodeBlock
                            code={avgGpuByDesignerCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            This step highlights the GPU performance trend across different designers by averaging the
                            <code>GPU Score</code> for every manufacturer and ranking them from strongest to weakest.
                        </p>


                        <CodeBlock
                            code={avgGpuByDesignerOutput}
                            language="text"
                            showLineNumbers={false}
                        />


                        {/* Step 9: Visualize Average GPU Score by Designer */}
                        <p className="mt-8">
                            <strong>Step 9: Visualize Average GPU Score by Designer</strong>
                            <br />
                            Plot a horizontal bar chart to compare the mean <code>GPU Score</code> across different chip
                            designers. This makes it easy to see which companies deliver the highest GPU performance on
                            average.
                        </p>

                        <CodeBlock
                            code={gpuScorePlotCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            We use <code>seaborn.barplot</code> with the <code>mako</code> palette to visualize the average
                            GPU score per designer. The horizontal layout highlights differences clearly, and
                            <code>tight_layout()</code> ensures all labels are visible.
                        </p>

                        <div className="mb-8">
                            <img
                                src="gpu.png"
                                alt="Spotify Dashboard Screenshot"
                                className="w-full shadow-lg border border-gray-200 dark:border-gray-700"
                            />
                        </div>


                        {/* Step 10: Visualize Core Categories by Designer */}
                        <p className="mt-8">
                            <strong>Step 10: Visualize Core Categories by Designer</strong>
                            <br />
                            Create a stacked bar chart showing how many chips each designer has in different core
                            categories. This helps identify which companies favor Big.LITTLE, ARM Cortex, Qualcomm Kryo,
                            or other designs.
                        </p>

                        <CodeBlock
                            code={coreCategoryPlotCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            We first group the dataset by <code>Designer</code> and <code>Core Category</code> to count the
                            number of chips per category. Using <code>plot(kind=&apos;bar&apos;, stacked=True)</code> produces a
                            stacked bar chart that visualizes each designer&apos;s architecture distribution.
                        </p>
                        <div className="mb-8">
                            <img
                                src="cgpu.png"
                                alt="Spotify Dashboard Screenshot"
                                className="w-full shadow-lg border border-gray-200 dark:border-gray-700"
                            />
                        </div>

                        {/* Step 11: GPU Score Distribution by Core Category */}
                        <p className="mt-8">
                            <strong>Step 11: GPU Score Distribution by Core Category</strong>
                            <br />
                            Use a boxplot to visualize the distribution of <code>GPU Score</code> for each
                            <code>Core Category</code>. This helps identify performance differences and outliers across
                            architectures.
                        </p>

                        <CodeBlock
                            code={gpuScoreBoxplotCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            The <code>seaborn.boxplot</code> displays the median, quartiles, and outliers for GPU Scores in
                            each core category. Rotating the x-axis labels ensures readability when category names are
                            longer.
                        </p>

                        <div className="mb-8">
                            <img
                                src="gpucat.png"
                                alt="Spotify Dashboard Screenshot"
                                className="w-full shadow-lg border border-gray-200 dark:border-gray-700"
                            />
                        </div>


                        {/* Step 12: Apple Core Categories Pie Chart */}
                        <p className="mt-8">
                            <strong>Step 12: Apple Core Categories Pie Chart</strong>
                            <br />
                            Filter the dataset for Apple chips and create a pie chart showing the proportion of each
                            <code>Core Category</code> used. This highlights Apple’s architectural preferences.
                        </p>

                        <CodeBlock
                            code={appleCoresPieCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            Using <code>value_counts()</code> on the <code>Core Category</code> column gives the count of
                            each type of core for Apple. Plotting it as a pie chart with <code>autopct=&apos;%1.1f%%&apos;</code>
                            shows the percentage distribution, making it visually clear which architecture dominates.
                        </p>
                        <div className="mb-8">
                            <img
                                src="gpupie.png"
                                alt="Spotify Dashboard Screenshot"
                                className="w-full shadow-lg border border-gray-200 dark:border-gray-700"
                            />
                        </div>

                        {/* Conclusion */}
                        <p className="mt-4">
                            <strong>📌 Conclusion</strong>
                        </p>
                        <p className="mt-2 dark:text-muted-foreground">
                            This analysis of CPU and GPU architectures across various chip designers provides several
                            key insights:
                        </p>
                        <ul className="list-disc list-inside space-y-1 mt-2 dark:text-muted-foreground">
                            <li>
                                <strong>Core Architecture Trends:</strong> Most companies prefer either Big.LITTLE or ARM
                                Cortex designs, while Qualcomm utilizes its Kryo cores. Apple predominantly uses Big.LITTLE
                                cores in its processors.
                            </li>
                            <li>
                                <strong>GPU Performance:</strong> Nvidia leads in GPU performance by a large margin, followed
                                by Apple and Hisilicon. The GPU Score proxy effectively highlights top-performing chips.
                            </li>
                            <li>
                                <strong>Core Count Insights:</strong> Big.LITTLE architectures generally feature more CPU
                                cores on average than other categories, reflecting performance scaling strategies.
                            </li>
                            <li>
                                <strong>Designer Strategies:</strong> Different manufacturers adopt distinct strategies,
                                balancing core categories, CPU cores, and GPU capabilities to meet performance and efficiency
                                targets.
                            </li>
                        </ul>
                        <p className="mt-2 dark:text-muted-foreground">
                            Overall, this exploration provides a clear understanding of architectural preferences, GPU
                            capabilities, and design trends across leading SoC designers, serving as a useful guide for
                            performance comparisons and hardware analysis.
                        </p>




                    </div>
                </div>
            </div>
        </>
    );
}
