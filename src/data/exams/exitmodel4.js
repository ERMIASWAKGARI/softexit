const exitModel4 = {
  id: 'exitExamModel4',
  title: 'Exit Model 4',
  year: 2023,
  type: 'model',
  image: 'moe.png',
  questions: [
    {
      id: '1',
      text: '______ is type of software architecture in which subsystems can act both as a client or as servers that each subsystem can request and provide services.',
      options: [
        'Pipe and Filter Architecture',
        'Client/Server Architecture',
        'Central Repository Architecture',
        'Peer to Peer Architecture',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Peer-to-Peer (P2P) architecture allows subsystems to function as both clients and servers, enabling decentralized service requests and provisions.',
    },
    {
      id: '2',
      text: 'What kind of linked list is best to answer questions like "What is the item at position n?"',
      options: [
        'Array implementation of linked list',
        'Singly linked list',
        'Doubly linked list',
        'Circular linked list',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Array implementation allows O(1) random access to elements by index, unlike traditional linked lists which require O(n) traversal.',
    },
    {
      id: '3',
      text: 'Which of the following sorting compares adjacent elements in a list and switches whenever necessary?',
      options: [
        'Quick sort',
        'Bubble sort',
        'Selection sort',
        'None of the above',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Bubble sort repeatedly compares adjacent elements and swaps them if they are in the wrong order.',
    },
    {
      id: '4',
      text: 'Which of the following data structures is best suited for implementing a hash table?',
      options: ['Stack', 'Queue', 'Linked list', 'Array'],
      correctAnswerIndex: 3,
      explanation:
        'Arrays provide O(1) access time using indices, making them ideal for hash table implementations where keys are mapped to array indices.',
    },
    {
      id: '5',
      text: 'In database state update operation, INSERT operation may violate ______ constraints.',
      options: [
        'Domain constraint',
        'Key constraint',
        'Entity integrity constraint',
        'All of the above',
      ],
      correctAnswerIndex: 3,
      explanation:
        'INSERT can violate domain (invalid data type), key (duplicate primary key), or entity integrity (null primary key) constraints.',
    },
    {
      id: '6',
      text: 'What is the purpose of responsive web design?',
      options: [
        'To improve search engine optimization',
        'To enhance user experience across different devices',
        'To prevent cross-site scripting attacks',
        'To optimize website performance',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Responsive design ensures websites adapt to various screen sizes (mobile, tablet, desktop) for better UX.',
    },
    {
      id: '7',
      text: 'Which one of the following is Not an example of embedded software product?',
      options: [
        'Keypad control of a security system',
        'Digital function of dashboard display in a car',
        'Pattern recognition',
        'Fire alarm System',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Pattern recognition is a general AI/ML technique, not specific to embedded systems like the other hardware-bound examples.',
    },
    {
      id: '8',
      text: 'Which one of the following is not the output of the resource estimation process in project time management?',
      options: [
        'Activity cost estimates',
        'Resource breakdown structure',
        'Activity resource requirements',
        'Project documents updates',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Activity cost estimates are part of cost management, not resource estimation which focuses on identifying required resources.',
    },
    {
      id: '9',
      text: 'Which one of the following tool is commonly used in almost all project KA management processes?',
      options: [
        'Expert judgment',
        'Project management information systems',
        'Brainstorming',
        'Management meeting',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Expert judgment is universally applied across knowledge areas (KA) for decision-making in project management.',
    },
    {
      id: '10',
      text: 'For registration use case in the User Name field the system accepts 8 to 15 alpha characters. Using BVA technique ______ will be the possible input values for the test case.',
      options: ['8,9,15,16', '7,8,14,15', '8,9,10,15,16,17', '7,8,9,14,15,16'],
      correctAnswerIndex: 3,
      explanation:
        'Boundary Value Analysis (BVA) tests values at boundaries (7,8,15,16) and just beyond (9,14) to validate input constraints.',
    },
  ],
}

export default exitModel4
