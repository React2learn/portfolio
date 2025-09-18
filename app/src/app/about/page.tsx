// app/about/page.tsx
"use client";
import TopBar from "@/components/TopNavbar";

export default function AboutPage() {
    return (
        <>
            <TopBar />

            <div className="relative z-10 max-w-4xl  mx-auto px-6 py-10 space-y-6 font-karla lg:text-[20px] sm:text-[18px] ">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>

                <p className="dark:text-muted-foreground leading-relaxed  text-gray-700">
                    Hi, I’m <span className="font-semibold">Atharva Yengde</span>,
                    a Computer Science and Engineering student specializing in
                    <span className="font-semibold"> Data Science</span>.
                    I enjoy turning raw data into meaningful insights and building
                    solutions that combine machine learning, statistical analysis,
                    and modern development tools.
                </p>

                <p className="dark:text-muted-foreground leading-relaxed  text-gray-700">
                    I recently worked as a <span className="font-semibold">Data Science Intern at Uber</span>,
                    where I developed predictive models to forecast hourly traffic demand
                    with 85%+ accuracy using XGBoost and Scikit-learn.
                    This gave me hands-on experience with <span className="font-semibold">
                        feature engineering, time series analysis, and predictive analytics</span>.
                </p>

                <p className="dark:text-muted-foreground leading-relaxed text-gray-700">
                    My technical toolkit includes <span className="font-semibold">
                        Python, R, SQL, NLP, clustering, Power BI, Tableau, Git/GitHub</span>.
                    I’ve also worked on projects like <span className="font-semibold">Aircraft Fault Analysis
                        using NLP-based Clustering</span> and <span className="font-semibold">
                        Flight Operations Optimization</span>, applying ML to aviation challenges.
                </p>

                <p className="dark:text-muted-foreground leading-relaxed text-gray-700">
                    Outside of academics, I enjoy hackathons, competitive programming, and
                    problem-solving on LeetCode and Codeforces.
                    I aim to keep learning and creating solutions that make technology
                    impactful and accessible.
                </p>
            </div>
        </>
    );
}
