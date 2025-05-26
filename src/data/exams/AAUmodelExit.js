const AAUmodelExit = {
  id: 'aauModelExit',
  title: 'AAU Model',
  year: 2016,
  type: 'model',
  image: 'aau.png',
  questions: [
    {
      id: '1',
      text: 'Which one of the following principles of cyber security refers that the security mechanism must be as small and simple as possible?',
      options: [
        'a. Fail-safe Defaults',
        'b. Least privilege',
        'c. Economy of the Mechanism',
        'd. Open-Design',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Economy of the Mechanism emphasizes keeping security mechanisms simple and small to reduce potential vulnerabilities.',
    },
    {
      id: '2',
      text: 'What is the maximum number of swaps that can be performed in the Selection Sort algorithm?',
      options: ['a. n-2', 'b. n-1', 'c. 1', 'd. n'],
      correctAnswerIndex: 1,
      explanation:
        'Selection Sort performs at most n-1 swaps, as each swap places one element in its final position.',
    },
    {
      id: '3',
      text: 'Which of the following statements is NOT correct?',
      options: [
        'a. C++ is an object-oriented programming language;',
        'b. Java is an object-oriented programming language;',
        'c. the object-oriented approach does not separate the behavior of a system from the data;',
        'd. Java is the only object-oriented programming language;',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Java is not the only OOP language; many others like C++, Python, and C# also support OOP.',
    },
    {
      id: '4',
      text: 'Why is it important to maintain a good relationship between software testers and developers?',
      options: [
        'a. To ensure that the project is completed on time',
        'b. To foster collaboration and communication between the two teams',
        'c. To make sure that the software is defect-free',
        'd. To reduce the cost of the project',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Good relationships improve collaboration and communication, leading to better software quality.',
    },
    {
      id: '5',
      text: 'Which layer is responsible for wireless signal encoding and frequency band definition?',
      options: [
        'a. Application Layer',
        'b. Logical Link Control Layer',
        'c. Medium Access Layer',
        'd. None of the mentioned',
      ],
      correctAnswerIndex: 2,
      explanation:
        'The Medium Access Layer handles wireless signal encoding and frequency band management.',
    },
    {
      id: '6',
      text: 'Which of the following qualities can most likely be improved by using a layered architecture?',
      options: [
        'a. Flexibility in modifying or changing the system',
        'b. Runtime efficiency (performance).',
        'c. Flexibility at runtime (configurability).',
        'd. Non-repudiability.',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Layered architecture enhances flexibility in system modification by isolating changes to specific layers.',
    },
    {
      id: '7',
      text: 'The software requirement specification(SRS) is said to be ______ if and only if no subset of individual requirements described in it conflict with each other',
      options: [
        'a. consistent',
        'b. verifiable',
        'c. unambiguous',
        'd. correct',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Consistency in SRS means no conflicting requirements exist within the document.',
    },
    {
      id: '8',
      text: 'Why is Software architecture so important?',
      options: [
        'a. Communication among stakeholders',
        'b. Early Design decisions',
        'c. Transferable abstraction of a system',
        'd. All of the above',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Software architecture is crucial for stakeholder communication, early design decisions, and system abstraction.',
    },
    {
      id: '9',
      text: 'How can we stop the services in android?',
      options: [
        'a. By using the stopSelf() and stopService() method',
        'b. By using the finish() method',
        'c. By using system.exit() method',
        'd. None of the above',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Android services are stopped using stopSelf() or stopService() methods.',
    },
    {
      id: '10',
      text: 'You try to analyze your architecture quantitatively. Which is the most appropriate indicators for architectural problem areas?',
      options: [
        'a. Missing comments.',
        'b. Names of public methods do not reflect their purpose.',
        'c. Number of test cases per component.',
        'd. High coupling of components.',
      ],
      correctAnswerIndex: 3,
      explanation:
        'High coupling between components is a strong indicator of architectural problems.',
    },
    {
      id: '11',
      text: 'Polymorphism means:',
      options: [
        'a. declaring all the methods of a class as public;',
        'b. declaring all the attributes of a class as private;',
        'c. hiding of information so that it is not accessible to other classes;',
        'd. having methods or operators with the same name performing different functions;',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Polymorphism allows methods/operators to have the same name but perform different functions (e.g., method overloading/overriding).',
    },
    {
      id: '12',
      text: 'What is the use of a content provider in Android?',
      options: [
        'a. For storing the data in the database',
        'b. For sharing the data between applications',
        'c. For sending the data from an application to another application',
        'd. None of the above',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Content providers enable data sharing between different Android apps securely.',
    },
    {
      id: '13',
      text: 'For a Binary relationships set R between entity sets A and B, the ______ express the number of entities to which another entity can be associated.',
      options: [
        'a. Cardinality Ratio',
        'b. Limited Ratio',
        'c. Degree Ratio',
        'd. Participation Constraints',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Cardinality ratio defines the number of possible associations (e.g., one-to-one, one-to-many).',
    },
    {
      id: '14',
      text: 'Which one of the following pairs of algorithms has equal cost in terms of time and space complexity under equal success function cost?',
      options: [
        'a. A* and BFS',
        'b. DFS and UCS',
        'c. UCS and BFS',
        'd. DFS and BFS',
      ],
      correctAnswerIndex: 3,
      explanation:
        'DFS and BFS both have O(V+E) time complexity (V=vertices, E=edges) in adjacency list representations.',
    },
    {
      id: '15',
      text: 'Which is the most important feature of the spiral model?',
      options: [
        'a. Performance management',
        'b. Efficiency management',
        'c. Risk management',
        'd. Quality management',
      ],
      correctAnswerIndex: 2,
      explanation:
        'The spiral model emphasizes iterative risk analysis and mitigation.',
    },
    {
      id: '16',
      text: 'Which of the following is the main goal of software testing as part of the quality assurance process?',
      options: [
        'a. To monitor the software development lifecycle.',
        'b. To control the cost of software development.',
        'c. To ensure that the software meets the specified requirements.',
        'd. To manage project timelines and deadlines.',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Testing validates that the software fulfills its specified requirements.',
    },
    {
      id: '17',
      text: 'An algorithm that calls itself directly or indirectly is known as:',
      options: [
        'a. Recursion',
        'b. Sub-algorithm',
        'c. Traversal algorithm',
        'd. Polish notation',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Recursion involves a function calling itself to solve smaller instances of a problem.',
    },
    {
      id: '18',
      text: 'What is supervised learning in AI?',
      options: [
        'a. Reinforcing learning with a reward-based system',
        'b. Learning by observing human behavior',
        'c. Training a machine learning model with labeled data',
        'd. Training a machine learning model with unlabeled data',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Supervised learning uses labeled datasets to train models for prediction/classification.',
    },
    {
      id: '19',
      text: 'Which one of the following is not a function of an operating system?',
      options: [
        'a. Runs software utilities and programs',
        'b. Translates high-level programming language into machine code',
        'c. Manages computer system resources',
        'd. Makes the computer system convenient to use',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Compilers (not OS) translate high-level code to machine code.',
    },
    {
      id: '20',
      text: 'The ______ address needs to be looked up to deliver a message to the appropriate application software running on a host.',
      options: ['a. Port', 'b. CRC', 'c. MAC', 'd. IP'],
      correctAnswerIndex: 0,
      explanation:
        'Port numbers direct messages to specific applications (e.g., HTTP uses port 80).',
    },
    {
      id: '21',
      text: 'What is Inter-process communication?',
      options: [
        'a. Allows processes to communicate and synchronize their actions when using the same address space',
        'b. Allows processes to communicate and synchronize their actions without using the same address space',
        'c. Allows the processes to only synchronize their actions without communication',
        'd. None of the above',
      ],
      correctAnswerIndex: 1,
      explanation:
        'IPC enables processes to communicate/synchronize across different address spaces (e.g., pipes, shared memory).',
    },
    {
      id: '22',
      text: 'What will be the output of the following code snippet?\n\nfunction solve(arr, rotations) {\n  if(rotations == 0) return arr;\n  for(let i = 0; i < rotations; i++) {\n    let element = arr.pop();\n    arr.unshift(element);\n  }\n  return arr;\n}',
      options: [
        'a. [1, 22, 111, 44]',
        'b. [111, 44, 1, 22]',
        'c. [22, 111, 44, 1]',
        'd. [44, 1, 22, 111]',
      ],
      correctAnswerIndex: 3,
      explanation:
        'The code rotates the array right by `rotations` steps. For example, input `[1, 22, 111, 44]` with 2 rotations becomes `[44, 1, 22, 111]`.',
    },
    {
      id: '23',
      text: 'If every requirement can be checked by a cost-effective process, then SRS is called:',
      options: [
        'a. Complete',
        'b. Traceable',
        'c. Verifiable',
        'd. Modifiable',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Verifiable SRS means requirements can be validated (e.g., via testing or review) without excessive cost.',
    },
    {
      id: '24',
      text: 'The purpose of a foreign key is to identify a particular row of:',
      options: [
        'a. Parent table and Child table',
        'b. Referenced table',
        'c. Child table',
        'd. All of the above',
      ],
      correctAnswerIndex: 1,
      explanation:
        'A foreign key references a primary key in another (parent/referenced) table to enforce referential integrity.',
    },
    {
      id: '25',
      text: 'When a thread is running, it can return directly to the READY state by which of the following means?',
      options: [
        'a. By encountering a yield command in a program',
        'b. By encountering a sleep command in a program',
        'c. By encountering a wait command in a program',
        'd. By becoming blocked as a result of an output device being unavailable',
      ],
      correctAnswerIndex: 0,
      explanation:
        '`yield()` voluntarily releases CPU to transition from RUNNING to READY, allowing other threads to run.',
    },
    {
      id: '26',
      text: 'Several architecture development methods suggest a view-based approach. Which of the following views are most often used?',
      options: [
        'a. Context view',
        'b. Configuration view',
        'c. Building Block/Component view',
        'd. Physical database view',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Component views describe system structure (e.g., modules, interfaces) and are widely used in UML/SysML.',
    },
    {
      id: '27',
      text: 'Accepting risk occurrence but not doing anything about it is called:',
      options: [
        'a. Risk avoidance',
        'b. Risk Retention',
        'c. Risk Reduction',
        'd. Risk transfer',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Risk retention means acknowledging the risk without mitigation (e.g., for low-impact risks).',
    },
    {
      id: '28',
      text: 'ICMP is mostly employed for:',
      options: [
        'a. IP addressing',
        'b. Error and diagnostic functions',
        'c. Data forwarding',
        'd. Network routing',
      ],
      correctAnswerIndex: 1,
      explanation:
        'ICMP (Internet Control Message Protocol) handles error reporting (e.g., ping, destination unreachable).',
    },
    {
      id: '29',
      text: 'Which "sentence" best describes the current explosion of data?',
      options: [
        'a. Too much knowledge and too much data',
        'b. Too much data and too much opportunity',
        'c. Distributed knowledge and distributed data',
        'd. Too much data, too little knowledge',
      ],
      correctAnswerIndex: 3,
      explanation:
        'The "data explosion" refers to vast amounts of raw data without equivalent growth in actionable insights.',
    },
    {
      id: '30',
      text: 'Which of the following is not a state in the service lifecycle?',
      options: ['a. Destroyed', 'b. Running', 'c. Start', 'd. Paused'],
      correctAnswerIndex: 2,
      explanation:
        'Service lifecycle states include Created, Running, Paused, Destroyed, but "Start" is an action, not a state.',
    },
    {
      id: '31',
      text: 'An Attribute takes a ______ value when an entity does not have a value for it.',
      options: ['a. Not Applicable', 'b. Null', 'c. 0', 'd. Zero'],
      correctAnswerIndex: 1,
      explanation:
        'NULL represents missing/unknown attribute values in databases.',
    },
    {
      id: '32',
      text: 'Which of the following sorting algorithms provides the best time complexity in the worst-case scenario?',
      options: [
        'a. Merge sort',
        'b. Selection sort',
        'c. Quick sort',
        'd. Bubble sort',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Merge sort guarantees O(n log n) time in all cases, unlike Quick sort (O(n²) worst-case).',
    },
    {
      id: '33',
      text: 'Modifying the software to match changes in the ever-changing environment is known as:',
      options: [
        'a. Perfective maintenance',
        'b. Adaptive maintenance',
        'c. Preventive maintenance',
        'd. Corrective maintenance',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Adaptive maintenance adjusts software to new environments (e.g., OS updates, hardware changes).',
    },
    {
      id: '34',
      text: 'The safe and sound arrival of data is verified using ______ in TCP to achieve reliable transport.',
      options: ['a. Acknowledgment', 'b. Bits', 'c. Buffer', 'd. Frame'],
      correctAnswerIndex: 0,
      explanation: 'TCP uses ACK packets to confirm successful data receipt.',
    },
    {
      id: '35',
      text: 'During which activity in the fundamental test process are tests designed and executed?',
      options: [
        'a. Test Analysis and Design',
        'b. Test Implementation and Execution',
        'c. Test Planning and Control',
        'd. Test Closure',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Test execution occurs in the "Implementation and Execution" phase after test cases are designed.',
    },
    {
      id: '36',
      text: 'Which data structure allows deleting data elements from front and inserting at rear?',
      options: [
        'a. Dequeues',
        'b. Binary search tree',
        'c. Queues',
        'd. Stacks',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Queues follow FIFO: insert at rear (enqueue), delete from front (dequeue).',
    },
    {
      id: '37',
      text: 'What effect does the achievement of quality attributes have on a software product?',
      options: [
        'a. Always negative',
        'b. Non-deterministic',
        'c. Always positive',
        'd. Both positive and negative',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Quality attributes (e.g., performance vs. security) often involve trade-offs (e.g., faster speed may reduce security).',
    },
    {
      id: '38',
      text: 'Which of the following is a type of independent malicious program that never requires a host program?',
      options: ['a. Trap door', 'b. Trojan horse', 'c. Virus', 'd. Worm'],
      correctAnswerIndex: 3,
      explanation:
        'Worms self-replicate without needing a host file (e.g., spreading via network vulnerabilities).',
    },
    {
      id: '39',
      text: 'What layer functions as the basis for dialog control and synchronization?',
      options: [
        'a. Network Layer',
        'b. Session Layer',
        'c. Data Link Layer',
        'd. Transport Layer',
      ],
      correctAnswerIndex: 1,
      explanation:
        'The Session Layer (OSI Layer 5) manages dialogues (e.g., establishing, synchronizing sessions).',
    },
    {
      id: '40',
      text: 'What is the term for a collection of large, complex data sets that cannot be processed using traditional tools?',
      options: ['a. Wisdom', 'b. Tiny data', 'c. Big data', 'd. Information'],
      correctAnswerIndex: 2,
      explanation:
        'Big data refers to datasets too large/complex for traditional DBMS (e.g., Hadoop, Spark).',
    },
    {
      id: '41',
      text: 'A ______ is the lowest level of work on the project.',
      options: ['a. Work product', 'b. Milestone', 'c. Task set', 'd. Task'],
      correctAnswerIndex: 3,
      explanation:
        'A task is the smallest unit of work in project management (e.g., "write login module").',
    },
    {
      id: '42',
      text: 'An ER diagram can express the overall ______ of a database graphically.',
      options: [
        'a. View Structure',
        'b. Model Structure',
        'c. Architectural Structure',
        'd. Logical Structure',
      ],
      correctAnswerIndex: 3,
      explanation:
        'ER diagrams visualize the logical structure (entities, relationships) of a database.',
    },
    {
      id: '43',
      text: 'Which design makes it most difficult to identify faults?',
      options: ['a. Star', 'b. Bus', 'c. Mesh', 'd. Ring'],
      correctAnswerIndex: 2,
      explanation:
        'Mesh networks have complex interconnections, making fault isolation challenging.',
    },
  ],
}

export default AAUmodelExit
