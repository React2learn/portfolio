"use client";

import React from "react";
import { Github } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import TopBar from "@/components/TopNavbar";


export default function ProjectDetailPage() {
    const project = {
        title: "SmartPick-Optimized-Warehouse-Order-Picking-System",
        description:
            "SmartPick is a warehouse automation project that helps speed up the order-picking process by locating items in the warehouse and generating an optimized picking path to minimize travel time.The system uses item location metadata (Aisle, Row, Column) and a path optimization algorithm to provide step-by-step instructions for warehouse workers.",
        github: "https://github.com/React2learn/SmartPick-Optimized-Warehouse-Order-Picking-System",
    };

    const importPackagesCode = `import pandas as pd
import random`;

    const baseDatasetCode = `# Base dataset
data = [
    {"item": "Pencil", "category": "Stationery"},
    {"item": "Highlighter", "category": "Stationery"},
    {"item": "Wireless Earbuds", "category": "Electronics"},
    {"item": "Tape", "category": "Stationery"},
    {"item": "Laptop", "category": "Electronics"},
]`;

    const assignLocationsCode = `# Assign random locations
def generate_location():
    aisle = random.choice(['A', 'B', 'C'])
    row = random.randint(1, 5)
    column = random.randint(1, 10)
    return aisle, row, column

# Add location columns
for d in data:
    aisle, row, col = generate_location()
    d['aisle'] = aisle
    d['row'] = row
    d['column'] = col

df = pd.DataFrame(data)`;

    const reverseIndexCode = `reverse_index = {}
for _, row in df.iterrows():
    key = row['item'].lower()
    reverse_index[key] = {
        "category": row['category'],
        "aisle": row['aisle'],
        "row": row['row'],
        "column": row['column']
    }

def find_item(item_name):
    key = item_name.lower()
    if key in reverse_index:
        loc = reverse_index[key]
        return f"'{item_name}' is in {loc['category']} at Aisle {loc['aisle']}, Row {loc['row']}, Column {loc['column']}."
    else:
        return f\"'{item_name}' not found in store.\"`;


    const optimizePathCode = `def aisle_to_index(aisle):
    return ord(aisle.upper()) - ord('A')

def distance(p1, p2):
    return abs(p1[0]-p2[0]) + abs(p1[1]-p2[1]) + abs(p1[2]-p2[2])

def optimize_path(item_names):
    selected = []
    for name in item_names:
        if name.lower() in reverse_index:
            item = reverse_index[name.lower()].copy()
            item['item_name'] = name
            selected.append(item)

    path = []
    current = {'aisle': 'A', 'row': 0, 'column': 0}
    
    while selected:
        current_coord = (aisle_to_index(current['aisle']), current['row'], current['column'])
        nearest = min(selected, key=lambda item: distance(current_coord, (
            aisle_to_index(item['aisle']), item['row'], item['column']
        )))
        path.append(nearest)
        current = nearest
        selected.remove(nearest)

    return path`;

    const demonstratePathCode = `query_items = ["Laptop", "Tape", "Wireless Earbuds"]

# Print location info
for item in query_items:
    print(find_item(item))

print("\\nOptimized Path:")
for i, item in enumerate(optimize_path(query_items), 1):
    print(f"{i}. Pick '{item['item_name']}' from Aisle {item['aisle']}, Row {item['row']}, Column {item['column']}")`;

    const warehouseOutputCode = `'Laptop' is in Electronics at Aisle C, Row 5, Column 2.
'Tape' is in Stationery at Aisle B, Row 3, Column 8.
'Wireless Earbuds' is in Electronics at Aisle C, Row 3, Column 6.

Optimized Path:
1. Pick 'Laptop' from Aisle C, Row 5, Column 2
2. Pick 'Wireless Earbuds' from Aisle C, Row 3, Column 6
3. Pick 'Tape' from Aisle B, Row 3, Column 8`;


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
                        <p className="mt-8">
                            <strong>Step 1: Import Required Packages</strong>
                            <br />
                            Before starting the analysis, we import all essential Python libraries for data manipulation
                            and generating random data.
                        </p>

                        <CodeBlock
                            code={importPackagesCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            <code>pandas</code> is used for data handling and analysis, while <code>random</code> allows
                            us to generate sample or synthetic data for testing purposes. These form the foundation of
                            the project workflow.
                        </p>

                        <p className="mt-4 dark:text-muted-foreground">
                            <strong>Base Dataset: </strong>
                            For this project, we start with a simple dataset containing a list of items along with their
                            respective categories. Each entry has an <code>item</code> name (e.g., &quot;Pencil&quot;, &quot;Laptop&quot;) and
                            a <code>category</code> label (e.g., &quot;Stationery&quot;,&quot;Electronics&quot;). This dataset serves as the
                            foundation for demonstrating data manipulation, grouping, and analysis techniques in Python.
                        </p>

                        <CodeBlock
                            code={baseDatasetCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        {/* Step 2: Assign Random Locations and Create DataFrame */}
                        <p className="mt-8">
                            <strong>Step 2: Assign Random Locations and Create DataFrame</strong>
                            <br />
                            Add random storage locations for each item in the dataset. Each item gets an aisle (A, B, or C),
                            a row (1–5), and a column (1–10). Then, convert the list of dictionaries into a Pandas DataFrame
                            for easy manipulation.
                        </p>

                        <CodeBlock
                            code={assignLocationsCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            The <code>generate_location()</code> function assigns random aisle, row, and column values.
                            Iterating over the dataset adds these as new keys to each item. Converting the list of dictionaries
                            into a DataFrame (<code>pd.DataFrame(data)</code>) prepares it for analysis and visualization.
                        </p>


                        {/* Step 3: Create Reverse Index and Item Lookup Function */}
                        <p className="mt-8">
                            <strong>Step 3: Create Reverse Index and Item Lookup Function</strong>
                            <br />
                            Build a reverse index to map item names to their locations and categories. Then, define a
                            function <code>find_item()</code> to quickly search for an item and return its aisle, row, and
                            column.
                        </p>

                        <CodeBlock
                            code={reverseIndexCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            The reverse index converts item names to lowercase keys for consistent lookups. Each key maps
                            to a dictionary containing category and location information. The <code>find_item()</code>
                            function allows you to retrieve an item&apos;s location efficiently, returning a formatted string
                            with its category and exact aisle, row, and column.
                        </p>

                        {/* Step 4: Path Optimization Function */}
                        <p className="mt-8">
                            <strong>Step 4: Path Optimization Function</strong>
                            <br />
                            Define a function to optimize the picking path for multiple items. This function calculates the
                            Manhattan distance between items and determines the shortest route through the store.
                        </p>

                        <CodeBlock
                            code={optimizePathCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            - <code>aisle_to_index()</code> converts aisle letters to numeric indices for distance calculation.
                            - <code>distance()</code> computes the Manhattan distance between two points in 3D space (aisle, row, column).
                            - <code>optimize_path()</code> selects the nearest unvisited item iteratively to build an efficient picking path starting from Aisle A, Row 0, Column 0.
                        </p>

                        {/* Step 5: Demonstrate Item Lookup and Optimized Path */}
                        <p className="mt-8">
                            <strong>Step 5: Demonstrate Item Lookup and Optimized Path</strong>
                            <br />
                            Test the <code>find_item()</code> function and <code>optimize_path()</code> with a sample
                            query list of items. This prints the location of each item and provides the most efficient
                            picking order.
                        </p>

                        <CodeBlock
                            code={demonstratePathCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            We first display each item&apos;s location using <code>find_item()</code>. Then, we generate the
                            optimized picking path using <code>optimize_path()</code>, enumerating each step so that users
                            know the order and exact location (aisle, row, column) to retrieve items efficiently.
                        </p>

                        <CodeBlock
                            code={warehouseOutputCode}
                            language="text"
                            showLineNumbers={false}
                        />

                        {/* Conclusion */}
                        <p className="mt-4">
                            <strong>📌 Conclusion</strong>
                        </p>
                        <p className="mt-2 dark:text-muted-foreground">
                            In this project, we developed a warehouse item lookup and path optimization system to
                            efficiently manage and retrieve items. The key takeaways are:
                        </p>
                        <ul className="list-disc list-inside space-y-1 mt-2 dark:text-muted-foreground">
                            <li>
                                <strong>Dataset Preparation:</strong> A base dataset of items with categories and random
                                aisle, row, and column locations was created for demonstration purposes.
                            </li>
                            <li>
                                <strong>Reverse Index Lookup:</strong> Enabled fast retrieval of an item’s location and
                                category using the <code>find_item()</code> function.
                            </li>
                            <li>
                                <strong>Path Optimization:</strong> Implemented a nearest-neighbor algorithm to determine
                                the most efficient picking order for multiple items, minimizing travel distance in the warehouse.
                            </li>
                            <li>
                                <strong>Practical Demonstration:</strong> Showcased item location retrieval and optimized
                                picking order for a sample query, illustrating the workflow end-to-end.
                            </li>
                        </ul>
                        <p className="mt-2 dark:text-muted-foreground">
                            Overall, this project demonstrates how Python can be used for inventory management, quick
                            lookup, and optimization of picking paths, which can be extended to real-world warehouse
                            scenarios to improve efficiency and reduce time spent locating items.
                        </p>


                    </div>
                </div>
            </div>
        </>
    );
}
