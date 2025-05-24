// src/data/examModel.js
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
    // ... more questions
  ],
}

export default juModel2016
