const exitModel2 = {
  id: 'exitExamModel2',
  title: 'Exit Model 2',
  year: 2016,
  type: 'model',
  image: 'moe.png',
  questions: [
    {
      id: '1',
      text: 'Which of the following is used to add styles and formatting to a webpage in CSS?',
      options: ['a. Functions', 'b. Variables', 'c. Selectors', 'd. Arrays'],
      correctAnswerIndex: 2,
      explanation:
        'CSS selectors are used to target HTML elements and apply styles to them.',
    },
    {
      id: '2',
      text: 'Which one of the following techniques is not used in the Binary tree?',
      options: [
        'a. Randomized traversal',
        'b. Preorder traversal',
        'c. Postorder traversal',
        'd. Inorder traversal',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Binary trees use systematic traversal methods (preorder, inorder, postorder) but not random traversal.',
    },
    {
      id: '3',
      text: 'Which of the following principles does Queue use?',
      options: [
        'a. LIFO principle',
        'b. FIFO principle',
        'c. Linear tree',
        'd. Ordered array',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Queues follow First-In-First-Out (FIFO) principle, unlike stacks which use LIFO.',
    },
    {
      id: '4',
      text: 'Which of the following is not considered as a peripheral device?',
      options: ['a. CPU', 'b. Keyboard', 'c. Monitor', 'd. All of the above'],
      correctAnswerIndex: 0,
      explanation:
        'CPU is the central processing unit, not a peripheral device. Peripherals are external devices connected to the computer.',
    },
    {
      id: '5',
      text: 'Which recovery technique uses the undo/redo approach?',
      options: [
        'a. Immediate Update',
        'b. Deferred Update',
        'c. ARIES Algorithm',
        'd. None',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Immediate Update technique uses undo/redo operations for transaction recovery.',
    },
    {
      id: '6',
      text: 'Which of the following statements is false about classes of language in automaton theory?',
      options: [
        'a. Context-free language is the subset of context-sensitive language',
        'b. Regular language is the subset of context-sensitive language',
        'c. Recursively enumerable language is the superset of regular language',
        'd. Context-sensitive language is a subset of context-free language',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Context-sensitive languages are actually supersets of context-free languages, not subsets.',
    },
    {
      id: '7',
      text: 'Where are the list of processes that are prepared to be executed and waiting placed?',
      options: [
        'a. Job queue',
        'b. Ready queue',
        'c. Execution queue',
        'd. Process queue',
      ],
      correctAnswerIndex: 1,
      explanation:
        'The ready queue holds processes that are prepared to execute and waiting for CPU time.',
    },
    {
      id: '8',
      text: 'Which one of the following statements is not true about the application of micro-operations?',
      options: [
        'a. Selective set operation is implemented using OR micro-operation',
        "b. Selective clear operation clears to zero the bit in the first operand only where there are corresponding 1's in the logical operand",
        'c. Clear operation is implemented using Exclusive-OR Micro-operation.',
        'd. None of the above',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Clear operation is typically implemented using AND micro-operation with a mask, not XOR.',
    },
    {
      id: '9',
      text: 'Based on the given agent prototype, the instruction is used to:',
      options: [
        'a. Modify the state of the environment if necessary',
        'b. Update the state information to be like the one after executing the best action chosen',
        'c. Update the environment so that the agent can perceive the next percept',
        'd. Modify the state of the environment once the decision of which action to choose is made.',
      ],
      correctAnswerIndex: 0,
      explanation:
        'The UPDATE_STATE function modifies the environment state based on the current percept.',
    },
    {
      id: '10',
      text: 'The process of recovering the original message without the detailed knowledge of the secret information is called:',
      options: [
        'a. Decryption',
        'b. Decipher',
        'c. Cryptanalysis',
        'd. A and B',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Cryptanalysis is the study of breaking cryptographic systems without knowing the secret key.',
    },
  ],
}

export default exitModel2
