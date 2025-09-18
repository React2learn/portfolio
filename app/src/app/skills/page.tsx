"use client";
import TopBar from "@/components/TopNavbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function SkillsPage() {
  return (
    <>
      <TopBar />

      {/* Page content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10 space-y-8 font-karla lg:text-[20px] sm:text-[18px]">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-left">
          Skills & Tools
        </h2>

        {/* Short Intro */}
        <p className="dark:text-muted-foreground text-gray-700 leading-relaxed text-left">
          I specialize in <span className="font-semibold dark:text-indigo-300 text-indigo-500">data science</span>,
          machine learning, and modern web development.
          Below is a structured view of my technical expertise.
        </p>

        {/* Data Science Skills Table */}
        <div className="overflow-x-auto mt-2 text-muted-foreground">
          <Table className="w-full">
            <TableHeader className="bg-zinc-900">
              <TableRow className="border-gray-500">
                <TableHead className="font-bold text-white dark:text-white border-gray-800">Category</TableHead>
                <TableHead className="font-bold text-white dark:text-white border-gray-500">Skills / Tools</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 border-gray-500">
                <TableCell className="font-medium">Programming</TableCell>
                <TableCell>Python, R, Java, SQL</TableCell>
              </TableRow>
              <TableRow className="bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 border-gray-500">
                <TableCell className="font-medium">Data Science</TableCell>
                <TableCell>Pandas, NumPy, Scikit-learn</TableCell>
              </TableRow>
              <TableRow className="bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 border-gray-500">
                <TableCell className="font-medium">ML & AI</TableCell>
                <TableCell>NLP, Clustering, Predictive Analytics</TableCell>
              </TableRow>
              <TableRow className="bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 border-gray-500">
                <TableCell className="font-medium">Visualization</TableCell>
                <TableCell>Power BI, Tableau, Matplotlib, Seaborn</TableCell>
              </TableRow>
              <TableRow className="bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 border-gray-500">
                <TableCell className="font-medium">Other Tools</TableCell>
                <TableCell>Git, GitHub, Jupyter, Excel</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Supporting Paragraphs */}
        <div className="space-y-6 text-gray-700">
          <p className="dark:text-muted-foreground leading-relaxed">
            My core expertise lies in <span className="font-semibold dark:text-indigo-300 text-indigo-500">Python and R</span>,
            which I use for data preprocessing, feature engineering, and model building.
            I’m also comfortable with <span className="font-semibold">SQL</span> for handling relational data
            and designing queries for analysis.
          </p>

          <p className="dark:text-muted-foreground leading-relaxed">
            In <span className="font-semibold dark:text-indigo-300 text-indigo-500">machine learning</span>,
            I work with <span className="font-semibold">NLP, clustering, and predictive analytics</span>
            to discover insights and build intelligent systems.
            I’ve applied these skills to projects like <span className="font-semibold">aircraft fault analysis</span>
            and <span className="font-semibold">taxi-out time prediction</span>, delivering actionable results.
          </p>

          <p className="dark:text-muted-foreground leading-relaxed">
            On the <span className="font-semibold dark:text-indigo-300 text-indigo-500">visualization</span> side,
            I use <span className="font-semibold">Power BI and Tableau</span> for interactive dashboards,
            while <span className="font-semibold">Matplotlib and Seaborn</span> are my go-to libraries for detailed plots.
            For web development, I use <span className="font-semibold">Next.js and TailwindCSS</span> to
            build scalable, modern interfaces.
          </p>
        </div>
      </div>
    </>
  );
}
