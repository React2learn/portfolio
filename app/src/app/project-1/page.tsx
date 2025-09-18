import React from "react";
import {Github } from "lucide-react";
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
    title: "Aircraft Maintenance Fault Analysis using NLP-based Clustering",
    description:
      "Built a predictive model to forecast hourly traffic volumes using ML algorithms and time series analysis.",
    github: "https://github.com/React2learn/NLP-based-Aircraft-Fault-Clustering",
    liveDemo: "https://traffic-forecast-demo.com",
    subtitle: "hellow boi subtitle hei",
  };

  const pythonCode = `import pandas as pd

df = pd.read_csv("maintenance_logs.csv")
print(df.head()[["fault_description","text_note","part"]])`;

  const nlpCode = `import spacy

nlp = spacy.load("en_core_web_sm")

def preprocess(text):
    doc = nlp(text.lower())
    tokens = [t.lemma_ for t in doc if not t.is_stop and t.is_alpha]
    return " ".join(tokens)

df["clean_text"] = df["text_note"].apply(preprocess)
print(df['clean_text'])`;

  const stopwordsCode = `# Define custom stopwords
custom_stopwords = ["replace", "replaced", "inspection", "inspected"]`;


  const combineStopwordsCode = `# Create a combined list of stopwords (English + custom)
combined_stopwords = list(ENGLISH_STOP_WORDS) + custom_stopwords`;


  const vectorizerCode = `# CountVectorizer with custom stopwords
vectorizer_count = CountVectorizer(
    stop_words=combined_stopwords, 
    ngram_range=(1,2), 
    min_df=5
)

# TfidfVectorizer with custom stopwords
vectorizer_tfidf = TfidfVectorizer(
    stop_words=combined_stopwords,
    ngram_range=(1,2), 
    min_df=3
)`;

  const featureTransformCode = `# Using TfidfVectorizer for better feature weighting
X_text = vectorizer_tfidf.fit_transform(df["clean_text"])`;

  const recurringFaultsCode = `# Extract Recurring Faults using CountVectorizer with custom stopwords
vectorizer_final = CountVectorizer(
    ngram_range=(1,2), 
    stop_words=combined_stopwords, 
    min_df=5
)
X = vectorizer_final.fit_transform(df["clean_text"])`;


  const topFaultsCode = `# Get top recurring faults
freqs = zip(vectorizer_final.get_feature_names_out(), X.sum(axis=0).A1)
top_faults = sorted(freqs, key=lambda x: -x[1])[:15]
print("Top recurring faults (with custom stopwords removed):")
for term, count in top_faults:
    print(f"{term:<25} {count}")`;

  const loadModelCode = `# Load sentence transformer model
model = SentenceTransformer('all-MiniLM-L6-v2')`;

  const generateEmbeddingsCode = `# Create embeddings for fault descriptions
print("Creating embeddings for fault descriptions...")
fault_descriptions = df["fault_description"].tolist()
embeddings = model.encode(fault_descriptions)

print(f"Created embeddings with shape: {embeddings.shape}")`;

  const kmeansClusteringCode = `# Perform K-means clustering
num_clusters = 5  # Adjust based on your needs
clustering_model = KMeans(n_clusters=num_clusters, random_state=42)
cluster_labels = clustering_model.fit_predict(embeddings)`;

  const displayClustersCode = `# Display clusters
for cluster_id, descriptions in grouped_faults.items():
    print(f"\\n--- CLUSTER {cluster_id} ({len(descriptions)} faults) ---")
    # Show first 5 examples from each cluster
    for desc in descriptions[:5]:
        print(f"  • {desc}")
    if len(descriptions) > 5:
        print(f"  ... and {len(descriptions) - 5} more")`;

  const analysisSummaryCode = `print("\\n=== ANALYSIS COMPLETE ===")
print(f"Total records processed: {len(df)}")
print(f"Unique fault descriptions: {df['fault_description'].nunique()}")
print(f"Most common parts: {df['part'].value_counts().head(3).to_dict()}")`;

  return (
    <>
      <TopBar />
      <div className="relative z-10">
        {/* Navigation */}
        {/* <nav className=" py-6">
          <button className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors duration-300 border-none outline-none focus:outline-none">
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </button>
        </nav> */}

        {/* Main Content */}
        <div className="px-6 pb-12 pt-10  max-w-4xl mx-auto text-left">
          <h1 className="text-2xl md:text-5xl font-karla font-bold mb-1">{project.title}</h1>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full dark:bg-white dark:text-gray-800 text-sm px-3 py-1 hover:opacity-80 transition mt-4 mb-8 no-underline font-karla bg-zinc-800 text-white"
            >
              <Github size={16} />
              <span>Repo</span>
            </a>
          )}

          <div className="font-karla lg:text-[20px] sm:text-[18px] dark:text-muted-foreground text-gray-700 leading-relaxed space-y-6 text-left">
            <p>
              This report analyzes an NLP-based system designed to process and
              cluster aircraft maintenance fault records. The model successfully
              processed 3,388 maintenance logs, identifying recurring fault
              patterns and grouping similar issues using both statistical and
              semantic analysis techniques.
            </p>
            <div className="overflow-x-auto mt-4">
              <Table className="w-full">
                <TableHeader className="bg-zinc-900">
                  <TableRow className="border-zinc-700">
                    <TableHead className="font-bold text-white px-4 py-2 ">Field</TableHead>
                    <TableHead className="font-bold text-white px-4 py-2">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-zinc-800 hover:bg-zinc-700 border-zinc-700">
                    <TableCell className="font-semibold px-4 py-2 text-zinc-400">fault_description</TableCell>
                    <TableCell className="px-4 py-2 text-zinc-400 ">Brief description of the issue</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-800 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell className="font-semibold px-4 py-2 text-zinc-400">text_note</TableCell>
                    <TableCell className="px-4 py-2">Detailed maintenance notes</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-800 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell className="font-semibold px-4 py-2 text-zinc-400">part</TableCell>
                    <TableCell className="px-4 py-2">Aircraft component affected</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>


            {/* Step 1 Introduction */}
            <p>
              <strong>Step 1: Load and Preview Data</strong><br />
              Before analyzing maintenance logs, we first load the dataset and inspect
              the key fields. This helps us understand the structure of the data, such
              as fault descriptions, detailed maintenance notes, and affected aircraft parts.
            </p>
            <CodeBlock code={pythonCode} language="python" showLineNumbers={true} />

            <p className="mt-2 text-sm dark:text-muted-foreground">
              <strong>Explanation:</strong> Before preprocessing and clustering, we first load and preview the dataset.{" "}
              <Badge className="bg-zinc-700 dark:text-zinc-300 font-mono text-xs">pd.read_csv()</Badge>{" "}
              loads the maintenance logs from the CSV file, and{" "}
              <Badge className="bg-zinc-700 dark:text-zinc-300  font-mono text-xs mt-1">df.head()</Badge>{" "}
              displays the first few records to give an overview of the data. This step ensures we understand the key fields and structure of the dataset before moving on to further analysis.
            </p>

            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader className="bg-zinc-900">
                  <TableRow className="border-zinc-700">
                    <TableHead className="font-bold text-white">fault_description</TableHead>
                    <TableHead className="font-bold text-white">text_note</TableHead>
                    <TableHead className="font-bold text-white">part</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-zinc-800 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell >Hydraulic reservoir low level warning</TableCell>
                    <TableCell >Hydraulic reservoir low level warning. Serviced pump.</TableCell>
                    <TableCell >Hydraulics</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-800 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell >Landing gear abnormal noise on extension</TableCell>
                    <TableCell >Landing gear abnormal noise on extension. Inspected joints.</TableCell>
                    <TableCell >Landing Gear</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-800 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell >High EGT on takeoff observed</TableCell>
                    <TableCell >High EGT on takeoff observed. Replaced fuel pump.</TableCell>
                    <TableCell >Engine</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-800 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell >Electrical bus CAUTION light illuminated</TableCell>
                    <TableCell >Electrical bus CAUTION light illuminated. Replaced circuit.</TableCell>
                    <TableCell >Electrical</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-800 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell>Pitot tube blocked on left side</TableCell>
                    <TableCell>Pitot tube blocked on left side. Heater circuit checked.</TableCell>
                    <TableCell>Pitot-Static</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <p className="mt-4 dark:text-muted-foreground">
              <strong>Step 2: Text Preprocessing</strong><br />
              Before clustering, we need to clean and normalize the maintenance notes. This involves lowercasing the text, removing stop words, keeping only alphabetic tokens, and lemmatizing words. <br />
            </p>

            <CodeBlock code={nlpCode} language="python" showLineNumbers={true} />
            <p className="mt-2 text-sm dark:text-muted-foreground">
              <strong>Explanation:</strong> Before clustering, we clean and normalize the maintenance notes.{" "}
              <Badge className="bg-zinc-700 dark:text-zinc-300 font-mono text-xs">nlp = spacy.load(&quot;en_core_web_sm&quot;)</Badge>{" "}
              loads the spaCy model, and{" "}
              <Badge className="bg-zinc-700 dark:text-zinc-300 font-mono text-xs mt-1">preprocess()</Badge>{" "}
              defines the text preprocessing function. Then, we apply it to the dataset to create <code>df[&quot;clean_text&quot;]</code>, which ensures the text is standardized and ready for feature extraction and clustering.
            </p>


            <p className="mt-4 dark:text-muted-foreground">
              <strong>Step 3: Define Custom Stopwords</strong><br />
              After basic preprocessing, we refine the text by removing domain-specific words that are not informative for clustering. These include words like &quot;replace&quot;, &quot;replaced&quot;, &quot;inspection&quot;, and &quot;inspected&quot;.
            </p>

            <CodeBlock code={stopwordsCode} language="python" showLineNumbers={true} />
            <p className="mt-2 text-sm dark:text-muted-foreground">
              <strong>Explanation:</strong> We define a list of <Badge className="bg-zinc-700 dark:text-zinc-300 font-mono text-xs">custom_stopwords</Badge> containing domain-specific terms like &quot;replace&quot; and &quot;inspection&quot; that should be ignored during text analysis. This helps focus clustering on the most relevant fault-related words.
            </p>


            <p className="mt-4 dark:text-muted-foreground">
              <strong>Step 4: Combine Stopwords</strong><br />
              To improve text cleaning, we combine the standard English stopwords with our custom domain-specific stopwords. This ensures that both general and aircraft-specific non-informative words are removed before clustering.
            </p>
            <CodeBlock code={combineStopwordsCode} language="python" showLineNumbers={true} />
            <p className="mt-2 text-sm dark:text-muted-foreground">
              <strong>Explanation:</strong> We create a combined list of stopwords by merging the standard English stopwords and our custom_stopwords. This ensures that both general and domain-specific non-informative words are ignored during text preprocessing, improving the quality of clustering.
            </p>


            <p className="mt-4 dark:text-muted-foreground">
              <strong>Step 5: Text Vectorization</strong><br />
              After cleaning the text, we convert the maintenance notes into numerical features using vectorization. We use both <code>CountVectorizer</code> and <code>TfidfVectorizer</code> with our combined stopwords, considering unigrams and bigrams, and filtering out rare terms. This prepares the text data for clustering algorithms.
            </p>
            <CodeBlock code={vectorizerCode} language="python" showLineNumbers={true} />
            <p className="mt-2 text-sm dark:text-muted-foreground">
              <strong>Explanation:</strong> We use <Badge className="bg-zinc-700 dark:text-zinc-300 font-mono text-xs">CountVectorizer</Badge> and <Badge className="bg-zinc-700 dark:text-zinc-300 font-mono text-xs">TfidfVectorizer</Badge> to convert the cleaned text into numerical features. The combined_stopwords ensure non-informative words are ignored, <code>ngram_range=(1,2)</code> captures single words and two-word phrases, and <code>min_df</code> filters out rare terms. This creates a structured feature matrix ready for clustering.
            </p>


            <p className="mt-4 dark:text-muted-foreground">
              <strong>Step 6: Feature Transformation</strong><br />
              We transform the cleaned maintenance notes into a numerical feature matrix using <code>TfidfVectorizer</code>. This gives higher weight to informative terms while reducing the impact of common words, preparing the data for clustering.
            </p>
            <CodeBlock code={featureTransformCode} language="python" showLineNumbers={true} />
            <p className="mt-2 text-sm dark:text-muted-foreground">
              <strong>Explanation:</strong> We apply <Badge className="bg-zinc-700 dark:text-zinc-300 font-mono text-xs">vectorizer_tfidf.fit_transform()</Badge> on the cleaned text column <code>df[&quot;clean_text&quot;]</code>. This converts the text into a weighted numerical matrix <code>X_text</code>, which emphasizes informative words and reduces noise from frequent terms, making it ready for clustering.
            </p>



            <p className="mt-4 dark:text-muted-foreground">
              <strong>Step 7: Extract Recurring Faults</strong><br />
              To identify common fault patterns, we use <code>CountVectorizer</code> with our combined stopwords. This converts the cleaned maintenance notes into a feature matrix that highlights recurring words and phrases, which can then be clustered to find similar faults.
            </p>
            <CodeBlock code={recurringFaultsCode} language="python" showLineNumbers={true} />
            <p className="mt-2 dark:text-sm dark:text-muted-foreground">
              <strong>Explanation:</strong> We use <Badge className="bg-zinc-700 dark:text-zinc-300 font-mono text-xs ">CountVectorizer</Badge> with <Badge className="bg-zinc-700 dark:text-zinc-300 font-mono text-xs mt-1">combined_stopwords</Badge> to transform <code>df[&quot;clean_text&quot;]</code> into a feature matrix <code>X</code>. This matrix captures recurring terms and phrases from the maintenance notes, which can be used for clustering similar fault types.
            </p>


            <p className="mt-4 dark:text-muted-foreground">
              <strong>Step 8: Identify Top Recurring Faults</strong><br />
              After transforming the maintenance notes into a feature matrix, we calculate the frequency of each term and sort them to find the most common faults. This helps highlight recurring issues across aircraft components, excluding non-informative stopwords.
            </p>

            <CodeBlock code={topFaultsCode} language="python" showLineNumbers={true} />
            <p className="mt-2 text-sm dark:text-muted-foreground">
              <strong>Explanation:</strong> We use <Badge className="bg-zinc-700 dark:text-zinc-300 font-mono text-xs">vectorizer_final.get_feature_names_out()</Badge> to get all terms and <Badge className="bg-zinc-700 dark:text-zinc-300 font-mono text-xs mt-1">X.sum(axis=0)</Badge> to compute their frequencies. Sorting these gives the top recurring faults, which provides insight into common maintenance issues after removing combined_stopwords.
            </p>

            <p className="mt-4 dark:text-muted-foreground">

              After calculating term frequencies, we list the top 15 recurring faults. This highlights common issues in aircraft maintenance logs.
            </p>
            <div className="overflow-x-auto mt-2">
              <Table className="w-full">
                <TableHeader className="bg-zinc-800">
                  <TableRow className="text-zinc-400 border-zinc-700">
                    <TableHead className="font-bold text-white">Fault</TableHead>
                    <TableHead className="font-bold text-white">Frequency</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-zinc-900 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell>engine</TableCell>
                    <TableCell>1304</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-900 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell>fuel</TableCell>
                    <TableCell>812</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-900 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell>gear</TableCell>
                    <TableCell>692</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-900 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell>oil</TableCell>
                    <TableCell>692</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-900 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell>observe</TableCell>
                    <TableCell>663</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-900 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell>hydraulic</TableCell>
                    <TableCell>653</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-900 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell>pump</TableCell>
                    <TableCell>546</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-900 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell>landing</TableCell>
                    <TableCell>418</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-900 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell>landing gear</TableCell>
                    <TableCell>418</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-900 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell>actuator</TableCell>
                    <TableCell>412</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-900 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell>borescope</TableCell>
                    <TableCell>374</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-900 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell>leak</TableCell>
                    <TableCell>368</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-900 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell>pressure</TableCell>
                    <TableCell>367</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-900 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell>low</TableCell>
                    <TableCell>357</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-900 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell>apu</TableCell>
                    <TableCell>356</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <p className="mt-4 dark:text-muted-foreground">
              <strong>Step 9: Semantic Clustering</strong><br />
              To group similar maintenance faults based on meaning rather than exact words, we use <code>Sentence Transformers</code>. This allows us to capture semantic relationships between notes and cluster related issues even if the wording differs.
            </p>


            <p className="mt-4 dark:text-muted-foreground">
              <strong>Step 10: Load Sentence Transformer Model</strong><br />
              We load a pre-trained Sentence Transformer model to convert maintenance notes into semantic embeddings. These embeddings capture the meaning of each note, enabling clustering of similar faults even when the text differs.
            </p>
            <CodeBlock code={loadModelCode} language="python" showLineNumbers={true} />
            <p className="mt-2 text-sm dark:text-muted-foreground">
              <strong>Explanation:</strong> We load the <Badge className="bg-zinc-700 dark:text-zinc-300 font-mono text-xs">SentenceTransformer</Badge> model <Badge className="bg-zinc-700 dark:text-zinc-300 font-mono text-xs mt-1">&apos;all-MiniLM-L6-v2&apos;</Badge> to convert <code>df[&quot;clean_text&quot;]</code> into semantic embeddings. This step allows the clustering algorithm to group notes based on meaning rather than exact words.
            </p>

            <p className="mt-4 dark:text-muted-foreground">
              <strong>Step 11: Generate Embeddings</strong><br />
              Using the loaded Sentence Transformer model, we convert each <code>fault_description</code> into a numerical embedding. These embeddings capture the semantic meaning of each fault, which is essential for clustering similar issues.
            </p>
            <CodeBlock code={generateEmbeddingsCode} language="python" showLineNumbers={true} />
            <p className="mt-2 text-sm dark:text-muted-foreground">
              <strong>Explanation:</strong> We convert df[&quot;fault_description&quot;] into semantic embeddings using <Badge className="bg-zinc-700 dark:text-zinc-300 font-mono text-xs">model.encode()</Badge>. The resulting embeddings matrix represents each fault in high-dimensional semantic space, which is used for clustering similar maintenance issues.
            </p>

            <p className="mt-4 dark:text-muted-foreground">
              <strong>Step 12: Cluster Faults Using K-Means</strong><br />
              We use K-Means clustering to group similar fault descriptions based on their semantic embeddings. This helps identify recurring fault patterns across the maintenance logs.
            </p>

            <CodeBlock code={kmeansClusteringCode} language="python" showLineNumbers={true} />
            <p className="mt-2 text-sm dark:text-muted-foreground">
              <strong>Explanation:</strong> We define <Badge className="bg-zinc-700 dark:text-zinc-300 font-mono text-xs">num_clusters</Badge> for K-Means and fit the clustering_model on embeddings. The resulting cluster_labels assign each fault description to a semantic cluster, revealing similar maintenance issues.
            </p>

            <p className="mt-4 dark:text-muted-foreground">
              <strong>Step 13: Display Clustered Faults</strong><br />
              After clustering, we inspect each cluster to see which fault descriptions were grouped together. Displaying the first few examples from each cluster provides insight into recurring and semantically similar maintenance issues.
            </p>
            <CodeBlock code={displayClustersCode} language="python" showLineNumbers={true} />
            <p className="mt-2 text-sm dark:text-muted-foreground">
              <strong>Explanation:</strong> We iterate over <Badge className="bg-zinc-700 dark:text-zinc-300 font-mono text-xs">grouped_faults.items()</Badge> to display each <Badge className="bg-zinc-700 dark:text-zinc-300 font-mono text-xs mt-1">cluster_id</Badge> along with the first few <Badge className="bg-zinc-700 dark:text-zinc-300 font-mono text-xs mt-1">descriptions</Badge>. This lets us quickly inspect recurring fault patterns and validate the semantic clustering results.
            </p>

            <div className="space-y-4 mt-4">
              {/* Cluster 1 */}
              <details className="bg-zinc-800 text-zinc-400">
                <summary className="cursor-pointer px-4 py-2 font-bold  hover:bg-zinc-700">
                  Cluster 1 (1176 faults)
                </summary>
                <div className="p-4">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Hydraulic reservoir low level warning</li>
                    <li>Pitot tube blocked on left side</li>
                    <li>Pitot tube blocked on left side</li>
                    <li>Oil pressure low in engine L</li>
                    <li>Uncommanded thrust variation in engine R</li>
                    <li className="text-sm text-muted-foreground">... and 1171 more</li>
                  </ul>
                </div>
              </details>

              {/* Cluster 4 */}
              <details className="bg-zinc-800 text-zinc-400">
                <summary className="cursor-pointer px-4 py-2 font-bold  hover:bg-zinc-700">
                  Cluster 2 (584 faults)
                </summary>
                <div className="p-4">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Landing gear abnormal noise on extension</li>
                    <li>Communication system intermittently failing</li>
                    <li>Hydraulic leak in landing gear</li>
                    <li>Hydraulic leak in landing gear</li>
                    <li>Autopilot disengages during climb</li>
                    <li className="text-sm text-muted-foreground">... and 579 more</li>
                  </ul>
                </div>
              </details>

              {/* Cluster 2 */}
              <details className="bg-zinc-800 text-zinc-400">
                <summary className="cursor-pointer px-4 py-2 font-bold  hover:bg-zinc-700">
                  Cluster 3 (1090 faults)
                </summary>
                <div className="p-4">
                  <ul className="list-disc list-inside space-y-1">
                    <li>High EGT on takeoff observed</li>
                    <li>Electrical bus CAUTION light illuminated</li>
                    <li>Electrical bus CAUTION light illuminated</li>
                    <li>High EGT on takeoff observed</li>
                    <li>Battery temperature high during ground operations</li>
                    <li className="text-sm text-muted-foreground">... and 1085 more</li>
                  </ul>
                </div>
              </details>

              {/* Cluster 3 */}
              <details className="bg-zinc-800 text-zinc-400">
                <summary className="cursor-pointer px-4 py-2 font-bold hover:bg-zinc-700">
                  Cluster 4 (274 faults)
                </summary>
                <div className="p-4">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Flap actuator sluggish on extension</li>
                    <li>Flap actuator sluggish on extension</li>
                    <li>Rudder trim runaway indication</li>
                    <li>Flap actuator sluggish on extension</li>
                    <li>Flap actuator sluggish on extension</li>
                    <li className="text-sm text-muted-foreground">... and 269 more</li>
                  </ul>
                </div>
              </details>

              {/* Cluster 0 */}
              <details className="bg-zinc-800 text-zinc-400">
                <summary className="cursor-pointer px-4 py-2 font-bold  hover:bg-zinc-700">
                  Cluster 5 (264 faults)
                </summary>
                <div className="p-4">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Hydraulic pump noisy during ground test</li>
                    <li>Hydraulic pump noisy during ground test</li>
                    <li>ADC disagreement between instruments</li>
                    <li>Hydraulic pump noisy during ground test</li>
                    <li>Hydraulic pump noisy during ground test</li>
                    <li className="text-sm text-muted-foreground">... and 259 more</li>
                  </ul>
                </div>
              </details>
            </div>

            <p className="mt-4 dark:text-muted-foreground">
              <strong>Step 14: Analysis Summary</strong><br />
              After all preprocessing, vectorization, and clustering steps, we summarize the key insights from the maintenance dataset.
            </p>
            <CodeBlock code={analysisSummaryCode} language="python" showLineNumbers={true} />
            <div className="overflow-x-auto mt-2">
              <Table className="w-full">
                <TableHeader className="bg-zinc-900 ">
                  <TableRow className="text-zinc-400 border-zinc-700">
                    <TableHead className="font-bold text-white">Metric</TableHead>
                    <TableHead className="font-bold text-white">Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-zinc-800 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell>Total records processed</TableCell>
                    <TableCell>3388</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-800 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell>Unique fault descriptions</TableCell>
                    <TableCell>41</TableCell>
                  </TableRow>
                  <TableRow className="bg-zinc-800 hover:bg-zinc-700 text-zinc-400 border-zinc-700">
                    <TableCell>Most common parts</TableCell>
                    <TableCell>{`Engine: 884, Electrical: 438, Avionics: 420`}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="mt-4 dark:text-muted-foreground">
              <strong>Conclusion:</strong><br />
              This project demonstrates how NLP and clustering techniques can be applied to aircraft maintenance logs to extract meaningful insights. By preprocessing and normalizing maintenance notes, removing stopwords, and applying semantic clustering, we were able to identify recurring fault patterns and group similar issues effectively. The analysis revealed key trends, such as the most common fault types and frequently affected aircraft parts. This approach can help maintenance teams prioritize critical issues, improve preventive maintenance strategies, and reduce aircraft downtime. Future enhancements could include integrating additional datasets, performing predictive fault detection, or using more advanced embedding models to capture subtle semantic relationships.
            </p>
            <p className="mt-2 text-sm dark:text-muted-foreground">
              Explore the dataset, review the clustering results, or try extending the analysis with your own data.
            </p>


          </div>
        </div>
      </div>
    </>

  );
}
