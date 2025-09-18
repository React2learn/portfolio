import React from "react";
import { Github } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import TopBar from "@/components/TopNavbar";
import { TaxiOutTimeChart } from "./charts/chart-1";
import { AirlineTaxiOutChart } from "./charts/chart-2";
import TaxiOutLineChart from "./charts/chart-3";
import { WeatherImpactChart } from "./charts/chart-4";
import { WindImpactChart } from "./charts/chart-5";


export default function ProjectDetailPage() {
    const project = {
        title: "Airport Runway Taxi-Out Time Analysis Report",
        description:
            "Built a predictive model to forecast hourly traffic volumes using ML algorithms and time series analysis.",
        github: "https://github.com/React2learn/Taxi-Out-Time-Prediction-",
        subtitle: "hellow boi subtitle hei",
    };

    const importPackagesCode = `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import seaborn as sns`;


    // Step 2 code snippet
    const loadDataCode = `df = pd.read_csv("synthetic_flights_small.csv")
print(df.head())`;


    const featureEngineeringCode = `# Feature Engineering
df['pushback_time'] = pd.to_datetime(df['pushback_time'])
df['takeoff_time'] = pd.to_datetime(df['takeoff_time'])
df['pushback_hours'] = df['pushback_time'].dt.hour
df['day_of_week'] = df['pushback_time'].dt.dayofweek

df['rush_hour'] = df['pushback_hours'].isin([7,8,9,16,17,18]).astype(int)
df['is_weekend'] = (df['day_of_week'] >= 5).astype(int)
df['visibility_cat'] = pd.cut(df['visibility_km_at_push'],
                              bins=[-1,3,6,10], labels=['Low','Medium','High'])
df['wind_cat'] = pd.cut(df['wind_spd_kt_at_push'],
                        bins=[-1, 5, 15, 30], labels=['Calm', 'Moderate', 'Strong'])`;

    const additionalFeaturesCode = `# Additional features
df['wind_visibility_interaction'] = df['wind_spd_kt_at_push'] / (df['visibility_km_at_push'] + 1)
df['hour_sin'] = np.sin(2 * np.pi * df['pushback_hours'] / 24)
df['hour_cos'] = np.cos(2 * np.pi * df['pushback_hours'] / 24)
df['has_delay'] = df['delay_reason'].notna().astype(int)
df['delay_type'] = df['delay_reason'].fillna('None')`;


    const selectFeaturesCode = `feature_num = [
    "queue_len", "wind_spd_kt_at_push", "visibility_km_at_push",
    "pushback_hours", "day_of_week", "rush_hour", "is_weekend",
    "wind_visibility_interaction", "hour_sin", "hour_cos", "has_delay"
]
feature_cat = [
    "airline", "aircraft_type", "runway", "visibility_cat", "wind_cat", "delay_type"
]

X = df[feature_num + feature_cat]
y = df["taxi_out_min"]`;

    const splitDataCode = `X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)`;

    const preprocessorCode = `preprocessor = ColumnTransformer([
    ("num", "passthrough", feature_num),
    ("cat", OneHotEncoder(handle_unknown="ignore"), feature_cat)
])`;

    const modelPipelineCode = `model = Pipeline([
    ("preprocessor", preprocessor),
    ("regressor", GradientBoostingRegressor(random_state=42))
])`;

    const trainEvaluateCode = `model.fit(X_train, y_train)
preds = model.predict(X_test)

mae = mean_absolute_error(y_test, preds)
rmse = mean_squared_error(y_test, preds) ** 0.5
r2 = r2_score(y_test, preds)
cv_mae = -cross_val_score(model, X, y, cv=5, scoring="neg_mean_absolute_error").mean()

print("BEST MODEL: BASELINE GRADIENTBOOSTING")
print("="*50)
print(f"MAE: {mae:.3f} minutes")
print(f"RMSE: {rmse:.3f} minutes")
print(f"R²: {r2:.3f}")
print(f"CV MAE: {cv_mae:.3f} minutes")`;

    const modelResultsCode = `BEST MODEL: BASELINE GRADIENTBOOSTING
==================================================
MAE: 4.436 minutes
RMSE: 5.599 minutes
R²: 0.714
CV MAE: 4.680 minutes`;

    const runwayAnalysisCode = `plt.figure(figsize=(10,5))
runway_avg = df.groupby('runway')['taxi_out_min'].mean().sort_values(ascending=False)
sns.barplot(x=runway_avg.index, y=runway_avg.values)
plt.title('Average Taxi-Out Time per Runway')
plt.ylabel('Taxi-Out Time (min)')
plt.xlabel('Runway')
plt.show()`;

    const airlineAnalysisCode = `plt.figure(figsize=(14,5))
airline_avg = df.groupby('airline')['taxi_out_min'].mean().sort_values(ascending=False)
sns.barplot(x=airline_avg.index, y=airline_avg.values)
plt.title('Average Taxi-Out Time per Airline')
plt.ylabel('Taxi-Out Time (min)')
plt.xlabel('Airline')
plt.show()`;

    const hourAnalysisCode = `plt.figure(figsize=(12,5))
hour_avg = df.groupby('pushback_hours')['taxi_out_min'].mean()
sns.lineplot(x=hour_avg.index, y=hour_avg.values, marker='o')
plt.title('Average Taxi-Out Time by Hour')
plt.xlabel('Hour of Day')
plt.ylabel('Taxi-Out Time (min)')
plt.show()`;

    const weatherImpactCode = `#  Weather Impact Analysis
df['visibility_cat'] = pd.cut(
    df['visibility_km_at_push'],
    bins=[-1, 3, 6, 10],
    labels=['Low', 'Medium', 'High']
)
vis_avg = df.groupby('visibility_cat')['taxi_out_min'].mean()

plt.figure(figsize=(6,4))
sns.barplot(x=vis_avg.index, y=vis_avg.values)
plt.title('Average Taxi-Out Time by Visibility')
plt.ylabel('Taxi-Out Time (min)')
plt.show()`;

    const windImpactCode = `#  Wind Categories
df['wind_cat'] = pd.cut(
    df['wind_spd_kt_at_push'],
    bins=[-1, 5, 15, 30],
    labels=['Calm', 'Moderate', 'Strong']
)
wind_avg = df.groupby('wind_cat')['taxi_out_min'].mean()

plt.figure(figsize=(6,4))
sns.barplot(x=wind_avg.index, y=wind_avg.values)
plt.title('Average Taxi-Out Time by Wind Speed')
plt.ylabel('Taxi-Out Time (min)')
plt.show()`;

    return (
        <>
            <TopBar />
            <div className="relative z-10">
                {/* Main Content */}
                <div className="px-6 pb-12 pt-10  max-w-4xl mx-auto text-left">
                    <h1 className="text-2xl dark:text-gray-300 md:text-5xl font-bold mb-1 font-karla">{project.title}</h1>

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

                    <div className="font-karla lg:text-[20px] sm:text-[18px] text-gray-700 dark:text-muted-foreground leading-relaxed space-y-6 text-left">
                        <p>
                            This project analyzes airport taxi-out times (the time from gate pushback to wheels-off), highlighting the operational, temporal, and weather-related factors influencing ground efficiency. The study identifies patterns across different dimensions and provides strategic recommendations for improving airport performance.
                        </p>
                        <p>
                            <strong>Step 1: Import Required Packages</strong><br />
                            Before starting the analysis, we import all the essential Python libraries for data handling,
                            visualization, feature engineering, model training, and evaluation.
                        </p>
                        <CodeBlock code={importPackagesCode} language="python" showLineNumbers={true} />
                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            We import pandas and numpy for data manipulation, matplotlib and seaborn for
                            visualization, and scikit-learn modules for preprocessing, model training, and evaluation.
                            This ensures we have a complete toolkit ready for analyzing taxi-out times.
                        </p>


                        <p className="mt-4">
                            <strong>Step 2: Load and Preview Data</strong><br />
                            After setting up the environment, we load the dataset that contains flight and
                            taxi-out information. Previewing the data helps us understand the structure and
                            key fields available for analysis.
                        </p>

                        <CodeBlock code={loadDataCode} language="python" showLineNumbers={true} />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            The dataset <code>synthetic_flights_small.csv</code> is loaded using
                            <code> pd.read_csv() </code>. We then call <code>df.head()</code> to display the
                            first few records, ensuring the dataset has been imported correctly and to get
                            an overview of the available columns.
                        </p>



                        <p className="mt-4">
                            <strong>Step 3: Feature Engineering</strong><br />
                            After loading the dataset, we create new variables to capture time-of-day
                            effects, weekday/weekend trends, and weather categories that influence
                            taxi-out times. These engineered features enrich the dataset for more accurate
                            modeling.
                        </p>

                        <CodeBlock
                            code={featureEngineeringCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            We convert the pushback and takeoff timestamps into <code>datetime </code>
                            objects, extract the hour and day of week, flag rush-hour periods, identify
                            weekends, and group visibility and wind speed into labeled bins. These
                            transformations help the model learn operational and environmental effects on
                            taxi-out performance.
                        </p>



                        <p className="mt-4">
                            <strong>Step 4: Additional Features</strong><br />
                            After basic feature engineering, we create more advanced variables to capture
                            interactions and cyclic patterns, and to encode delay information. These
                            additional features help the model learn complex relationships in the data.
                        </p>

                        <CodeBlock
                            code={additionalFeaturesCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            We calculate an interaction between wind speed and visibility
                            (<code>wind_visibility_interaction</code>), and use sine and cosine transforms
                            (<code>hour_sin</code> and <code>hour_cos</code>) to represent the cyclical
                            nature of hours in a day. Finally, we create indicators for whether a delay
                            exists (<code>has_delay</code>) and categorize its type
                            (<code>delay_type</code>), giving the model richer context about operational
                            disruptions.
                        </p>


                        <p className="mt-4">
                            <strong>Step 5: Select Features and Define Target</strong><br />
                            Once all useful variables are created, we separate them into numerical and
                            categorical groups, then combine them to form the feature matrix
                            <code> X</code>. We also identify the target variable
                            <code>y</code>, which contains the taxi-out times we aim to predict.
                        </p>

                        <CodeBlock
                            code={selectFeaturesCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            We organize our predictors into two lists:
                            <code>feature_num</code> for numeric fields and
                            <code>feature_cat</code> for categorical ones. These lists are merged to
                            build the feature matrix <code>X</code>. The target variable
                            <code>y</code> is set as <code>taxi_out_min</code>, representing the total
                            taxi-out duration in minutes.
                        </p>

                        <p className="mt-4">
                            <strong>Step 6: Split Data into Training and Test Sets</strong><br />
                            After preparing our features and target, we divide the dataset into training
                            and test subsets. This allows us to train the model on one portion of the data
                            while keeping another portion unseen for evaluation, ensuring an unbiased
                            performance check.
                        </p>

                        <CodeBlock
                            code={splitDataCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            We use <code>train_test_split</code> from scikit-learn to split the data into
                            <code>X_train</code>, <code>X_test</code>, <code>y_train</code>, and
                            <code>y_test</code>. Setting <code>test_size=0.2</code> reserves 20% of the
                            data for testing, and <code>random_state=42</code> ensures reproducibility of
                            the split.
                        </p>


                        <p className="mt-4">
                            <strong>Step 7: Preprocessing Pipeline</strong><br />
                            Before training the model, we need to preprocess our features. Numerical
                            features are left as-is, while categorical features are one-hot encoded to
                            convert them into a machine-readable format.
                        </p>

                        <CodeBlock
                            code={preprocessorCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            We use <code>ColumnTransformer</code> to apply different transformations to
                            different columns. Numerical columns are passed through unchanged, while
                            categorical columns are transformed using <code>OneHotEncoder</code> with
                            <code>handle_unknown=&quot;ignore&quot;</code> to handle any unseen categories during
                            prediction. This ensures the model can process all features correctly.
                        </p>

                        <p className="mt-4">
                            <strong>Step 8: Model Pipeline</strong><br />
                            We create a complete machine learning pipeline that combines preprocessing and
                            the regression model. This ensures that feature transformations are applied
                            consistently during training and prediction.
                        </p>
                        <CodeBlock
                            code={modelPipelineCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            We use <code>Pipeline</code> from scikit-learn to chain the
                            <code>preprocessor</code> with a <code>GradientBoostingRegressor</code>.
                            This approach guarantees that the same preprocessing is applied to both
                            training and test data, and that the model receives properly transformed
                            features. Setting <code>random_state=42</code> ensures reproducible results.
                        </p>

                        <p className="mt-4">
                            <strong>Step 9: Train Model and Evaluate</strong><br />
                            After setting up the pipeline, we train the Gradient Boosting model on the
                            training data, make predictions on the test set, and calculate performance
                            metrics to assess its accuracy.
                        </p>

                        <CodeBlock
                            code={trainEvaluateCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            We fit the <code>model</code> pipeline on <code>X_train</code> and
                            <code>y_train</code>. Predictions are made on <code>X_test</code> and
                            evaluated using Mean Absolute Error (MAE), Root Mean Squared Error (RMSE),
                            and R² score. Additionally, 5-fold cross-validation MAE (<code>cv_mae</code>)
                            provides an estimate of generalization performance. These metrics quantify how
                            accurately the model predicts taxi-out times.
                        </p>

                        <p className="mt-4">
                            <strong>Step 10: Model Results</strong><br />
                            After training and evaluating the model, we summarize the key performance
                            metrics to understand how well the model predicts taxi-out times.
                        </p>

                        <CodeBlock
                            code={modelResultsCode}
                            language="text"
                            showLineNumbers={false}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            The trained Gradient Boosting model achieves a Mean Absolute Error (MAE) of
                            4.436 minutes, Root Mean Squared Error (RMSE) of 5.599 minutes, and R² score
                            of 0.714 on the test set. The 5-fold cross-validation MAE is 4.680 minutes,
                            indicating consistent predictive performance. These results show the model
                            effectively captures patterns in taxi-out times.
                        </p>


                        <p className="mt-4">
                            <strong>Step 11: Runway-wise Analysis</strong><br />
                            We analyze how average taxi-out times vary across different runways to identify
                            potential bottlenecks or operational inefficiencies.
                        </p>

                        <CodeBlock
                            code={runwayAnalysisCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            Using <code>groupby</code> and <code>mean()</code>, we calculate the average
                            taxi-out time for each runway. A bar plot created with <code>seaborn </code>
                            visualizes the differences, helping us identify which runways have longer
                            taxi-out times. This insight can guide operational improvements and runway
                            management strategies.
                        </p>

                        <TaxiOutTimeChart />

                        <p className="mt-4">
                            <strong>Step 12: Airline-wise Analysis</strong><br />
                            We examine how average taxi-out times vary across different airlines to identify
                            carriers that may experience longer delays or operational inefficiencies.
                        </p>

                        <CodeBlock
                            code={airlineAnalysisCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            Using <code>groupby</code> and <code>mean()</code>, we calculate the average
                            taxi-out time for each airline. A <code>seaborn</code> bar plot visualizes these
                            differences, helping us spot airlines with longer taxi-out times. This information
                            can guide airline-specific operational improvements and resource allocation.
                        </p>
                        <AirlineTaxiOutChart />


                        <p className="mt-4">
                            <strong>Step 13: Hour-wise Analysis</strong>
                            <br />
                            We analyze how taxi-out times vary throughout the day to identify peak hours
                            with longer delays and potential operational bottlenecks.
                        </p>

                        <CodeBlock
                            code={hourAnalysisCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            By grouping data by <code>pushback_hours</code> and calculating the mean taxi-out
                            time, we visualize hourly trends with a line plot using <code>seaborn</code>. This
                            helps identify times of day with higher delays, which can inform scheduling
                            optimizations and resource planning.
                        </p>
                        <TaxiOutLineChart />

                        <p className="mt-4">
                            <strong>Step 14: Weather Impact Analysis</strong>
                            <br />
                            Next, we analyze how weather—specifically visibility—affects
                            taxi-out performance. Grouping flights by visibility category
                            provides a clear picture of how poor visibility can slow down
                            operations.
                        </p>

                        <CodeBlock
                            code={weatherImpactCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            We bucket <code>visibility_km_at_push</code> into three levels
                            (Low, Medium, High) using <code>pd.cut()</code>. After grouping
                            by these categories, we compute the mean taxi-out time and render
                            a <code>seaborn</code> bar chart. This shows how decreased
                            visibility increases ground delay, giving insight into weather-driven
                            inefficiencies.
                        </p>
                        <WeatherImpactChart />
                        <p className="mt-4">
                            <strong>Step 15: Wind Categories Analysis</strong>
                            <br />
                            Now, we evaluate how wind speed impacts taxi-out performance.
                            Grouping flights by <em>Calm</em>, <em>Moderate</em>, and
                            <em>Strong</em> wind levels gives a clear picture of how stronger
                            winds may affect ground operations.
                        </p>

                        <CodeBlock
                            code={windImpactCode}
                            language="python"
                            showLineNumbers={true}
                        />

                        <p className="mt-2 text-sm dark:text-muted-foreground">
                            <strong>Explanation: </strong>
                            We divide <code>wind_spd_kt_at_push</code> into three categories
                            using <code>pd.cut()</code>. Then, by computing the average
                            taxi-out time in each wind group and visualizing with a
                            <code>seaborn</code> bar plot, we understand how wind conditions
                            may delay or speed up departure operations.
                        </p>
                        <WindImpactChart />
                        <p className="mt-4 dark:text-muted-foreground">
                            <strong>Conclusion:</strong><br />
                            This analysis provided a detailed understanding of the factors that influence aircraft taxi-out time — the interval between gate pushback and wheels-off.
                            By combining operational, temporal, and weather data, we derived insights to help airports, airlines, and ground-handling teams improve performance.
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
