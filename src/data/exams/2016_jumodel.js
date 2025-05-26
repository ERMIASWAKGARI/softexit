const juModel2016 = {
  id: '2016JUModel',
  title: '2016JU Model',
  year: 2016,
  type: 'model',
  image: 'ju.png',
  questions: [
    {
      id: '1',
      text: 'Which of the following is NOT a fundamental capability required for an artificial intelligent agent?',
      options: ['A. Perception', 'B. Learning', 'C. Searching', 'D. Thinking'],
      correctAnswerIndex: 2,
      explanation:
        'Searching is a method, not a core capability like perception, learning, or thinking.',
    },
    {
      id: '2',
      text: 'For a Depth-First Search (DFS) implementation, what kind of data structure is typically used to store the unexplored nodes during the exploration process?',
      options: ['A. Apriority queue', 'B. Linked list', 'C. Queue', 'D. Stack'],
      correctAnswerIndex: 3,
      explanation:
        'DFS uses a stack to keep track of the nodes to be explored next.',
    },
    {
      id: '3',
      text: 'Imagine you are working on a Social Network application and want to find all friends of a user within two connections. Which search algorithm is best suited for this task?',
      options: [
        'A. Breadth-First Search (BFS)',
        'B. Depth-First Search (DFS)',
        'C. A* Search',
        'D. Iterative Deepening Search (IDS)',
      ],
      correctAnswerIndex: 0,
      explanation:
        'BFS is ideal for finding shortest path or closest connections like friends of friends.',
    },
    {
      id: '4',
      text: 'In First-Order Logic (FOL), what is the purpose of a universal quantifier (ForAll x or ∀x)?',
      options: [
        'A. Indicate the existence of at least one element satisfying a condition.',
        'B. Indicate that a predicate applies to all things.',
        'C. Represent a disjunction (OR) between two statements.',
        'D. Denote a relationship between two entities.',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Universal quantifier applies a predicate to all members in the domain.',
    },
    {
      id: '5',
      text: 'Suppose you are applying for a competitive job at Apple and the company uses AI to evaluate applications. How do you feel about this?',
      options: [
        'A. AI cannot objectively assess skills and qualifications.',
        'B. AI might overlook unique strengths or experiences for candidates',
        'C. The impersonal nature of AI removes the human touch from the process.',
        'D. AI could eliminate unconscious bias in the selection process.',
      ],
      correctAnswerIndex: 3,
      explanation:
        'One potential benefit of AI in recruitment is reduction of unconscious bias.',
    },
    // ... more questions
  ],
}

export default juModel2016
