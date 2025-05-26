const examJimmaMock2024 = {
  id: 'jimma_mock_2024',
  title: 'JU Mock 2024',
  year: 2024,
  type: 'mock',
  image: 'ju.png',
  questions: [
    {
      id: '1',
      text: 'Which type of AI agent can improve its performance over time by learning from experience?',
      options: [
        'Simple reflex Agent',
        'Utility-based Agent',
        'Model-based Agent',
        'Learning Agent',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Learning agents have the capability to improve their performance through experience.',
    },
    {
      id: '2',
      text: 'Which of the following searching algorithm guarantees to finding the optimal solution (lowest cost path) if it exists.',
      options: [
        'Depth-First Search (DFS)',
        'Breadth-First Search (BFS)',
        'Uniform Cost Search (UCS)',
        'Iterative Deepening Search (IDS)',
      ],
      correctAnswerIndex: 2,
      explanation:
        'UCS always finds the path with the lowest total cost by expanding the least-cost node first.',
    },
    {
      id: '3',
      text: 'Compared to Breadth-First Search (BFS), Depth-First Search (DFS) is generally-----',
      options: [
        'More likely to find the shortest path to the goal.',
        'More space-efficient for large search spaces.',
        'Less likely to get stuck in dead ends.',
        'Guaranteed to find a solution if one exists, even in infinite search spaces.',
      ],
      correctAnswerIndex: 1,
      explanation:
        'DFS uses less memory as it only needs to store a single path from the root to a leaf node.',
    },
    {
      id: '4',
      text: 'Suppose we are taking an entity, Abel. Abel is a Software Developer as a profession, and his age is 26, his weight is 70KG, his height is 1.75 cm, he lives in city Jimma, and the country is Ethiopia. Which knowledge representation technique would be most appropriate for this scenario?',
      options: [
        'Logical Representation.',
        'Semantic Network.',
        'Frame Representation.',
        'Production Rules.',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Frame representation is ideal for storing multiple attributes about an entity in a structured way.',
    },
    {
      id: '5',
      text: 'Suppose you are applying for a competitive job on Apple Company. The company uses an AI system to evaluate applications and select candidates for interviews. How do you feel about this?',
      options: [
        'AI cannot objectively assess skills and qualifications.',
        'AI might overlook unique strengths or experiences for candidates',
        'The impersonal nature of AI removes the human touch from the process.',
        'AI could eliminate unconscious bias in the selection process.',
      ],
      correctAnswerIndex: 1,
      explanation:
        "AI systems may miss nuanced or unconventional qualifications that don't fit their training data patterns.",
    },
    {
      id: '6',
      text: 'Which of the following is an EXAMPLE of supervised learning?',
      options: [
        'A robot learning to walk',
        'Finding the most important features in a dataset',
        'Predicting the price of a house',
        'Learning to play a game of chess',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Predicting house prices is a classic supervised learning problem where we learn from labeled training data.',
    },
    {
      id: '7',
      text: 'What is the name of the technique used to deal with overfitting in machine learning models?',
      options: [
        'Underfitting',
        'Regularization',
        'Feature Engineering',
        'Cross-validation',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Regularization techniques like L1/L2 regularization help prevent overfitting by adding penalty terms to the loss function.',
    },
    {
      id: '8',
      text: 'Which supervised learning algorithm is particularly well-suited for dealing with textual data and is based on probability theory?',
      options: [
        'Regression',
        'k-Nearest Neighbors (k-NN)',
        'Naive Bayes',
        'Support Vector Machines (SVM)',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Naive Bayes is commonly used for text classification due to its probabilistic nature and efficiency with high-dimensional data.',
    },
    {
      id: '9',
      text: 'ABC Company has website traffic data and wants to identify groups of users with similar browsing behavior. Which unsupervised learning technique would be best suited for this task?',
      options: [
        'K-Means Clustering',
        'Decision Trees',
        'Naive Bayes',
        'Random Forest',
      ],
      correctAnswerIndex: 0,
      explanation:
        'K-Means clustering is ideal for grouping similar data points based on their features.',
    },
    {
      id: '10',
      text: 'Suppose you are trained a machine learning model and achieved good performance on the training dataset. But, you are not sure how well it will perform on unseen data. What evaluation technique can help you check how well the model generalizes to unseen data?',
      options: [
        'K-Fold Cross-Validation',
        'Confusion Matrix',
        'Hyperparameter Tuning',
        'Bootstrapping',
      ],
      correctAnswerIndex: 0,
      explanation:
        'K-Fold Cross-Validation provides a robust estimate of model performance by partitioning the data into multiple folds.',
    },
  ],
}

export default examJimmaMock2024
