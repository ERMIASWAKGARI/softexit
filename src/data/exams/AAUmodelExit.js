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
    {
      id: '44',
      text: 'Which of the following is not a contribution of big data analysis?',
      options: [
        'a. To gain competitive advantage',
        'b. To control the volatile market',
        'c. To satisfy customers’ needs',
        'd. None',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Big data contributes to all listed areas (competitive edge, market control, customer satisfaction).',
    },
    {
      id: '45',
      text: 'What does the HTTP status code 201 indicate?',
      options: ['a. No content', 'b. Accepted', 'c. OK', 'd. Created'],
      correctAnswerIndex: 3,
      explanation:
        'HTTP 201 means a resource was successfully created (e.g., after a POST request).',
    },
    {
      id: '46',
      text: 'Which of the following are famous and common cyber-attacks?',
      options: [
        'a. DDoS and Drive-by Downloads',
        'b. Malware & Malvertising',
        'c. Phishing and Password attacks',
        'd. All of the above',
      ],
      correctAnswerIndex: 3,
      explanation: 'All options are prevalent cyber-attack methods.',
    },
    {
      id: '47',
      text: 'Identify possible source(s) of unstructured data:',
      options: [
        'a. RDBMSs',
        'b. Addis Ababa University students database',
        'c. Twitter',
        'd. Microsoft employee table',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Twitter feeds (text, images) are unstructured, unlike tabular RDBMS data.',
    },
    {
      id: '48',
      text: 'What is the time complexity of the following C++ code?\n\nvoid solve() {\n  int a[] = {1, 2, 3, 4, 5};\n  int sum = 0;\n  for(int i = 0; i < 5; i++) {\n    if(i % 2 == 0) sum += a[i];\n  }\n  cout << sum << endl;\n}',
      options: ['a. O(logn)', 'b. O(1)', 'c. O(n)', 'd. O(n²)'],
      correctAnswerIndex: 2,
      explanation:
        'The loop runs 5 times (O(n)), performing constant-time operations per iteration.',
    },
    {
      id: '49',
      text: 'Which one of the following is true of a class with package scope?',
      options: [
        'a. It contains abstract methods only',
        'b. It is a source file, not a class file',
        'c. Only it can be imported from the package',
        'd. It is visible only to other classes in the same package',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Package-private (default) scope restricts visibility to classes within the same package.',
    },
    {
      id: '50',
      text: 'What type of CSS is generally recommended for designing large web pages?',
      options: ['a. Embedded', 'b. External', 'c. Inline', 'd. Internal'],
      correctAnswerIndex: 1,
      explanation:
        'External CSS separates styling from content, improving maintainability for large projects.',
    },
    {
      id: '51',
      text: 'What is the time complexity of the following code snippet in C++?\n\nvoid solve() {\n  string s = "scaler";\n  int n = s.size();\n  for(int i = 0; i < n; i++) {\n    s = s + s[i];\n  }\n  cout << s << endl;\n}',
      options: ['a. O(logn)', 'b. O(1)', 'c. O(n)', 'd. O(n^2)'],
      correctAnswerIndex: 3,
      explanation:
        'The loop runs `n` times, and string concatenation is O(n), resulting in O(n²) total complexity.',
    },
    {
      id: '52',
      text: 'The process to gather the software requirements from client, analyze, and document is known as:',
      options: [
        'a. User engineering process',
        'b. Requirement engineering process',
        'c. Requirement elicitation process',
        'd. Software engineering process',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Requirement engineering encompasses elicitation, analysis, and documentation of requirements.',
    },
    {
      id: '53',
      text: 'Which one of the following refers to the technique used for verifying the integrity of the message?',
      options: [
        'a. Protocol',
        'b. Digital signature',
        'c. Decryption algorithm',
        'd. Message digest',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Message digests (e.g., SHA-256) verify data integrity by generating a unique hash.',
    },
    {
      id: '54',
      text: 'What is the time complexity of the binary search algorithm?',
      options: ['a. O(n)', 'b. O(1)', 'c. O(n²)', 'd. O(log2n)'],
      correctAnswerIndex: 3,
      explanation:
        'Binary search halves the search space each iteration, achieving O(log n) time.',
    },
    {
      id: '55',
      text: 'Which of the following is not an activity lifecycle callback method?',
      options: [
        'a. onStart()',
        'b. onClick()',
        'c. onCreate()',
        'd. onBackPressed()',
      ],
      correctAnswerIndex: 1,
      explanation: 'onClick() is an event listener, not a lifecycle callback.',
    },
    {
      id: '56',
      text: 'What must be enabled for a RESTful web service to receive invocations from different domains, subdomains, or ports?',
      options: ['a. Cache control', 'b. Headers', 'c. CORS', 'd. SSL'],
      correctAnswerIndex: 2,
      explanation:
        'Cross-Origin Resource Sharing (CORS) allows cross-domain requests by adding specific HTTP headers.',
    },
    {
      id: '57',
      text: "Java's garbage collector carries out which of the following functions?",
      options: [
        'a. Frees up memory locations no longer in use',
        'b. Disposes of an applet when a web page is no longer visible',
        'c. Disposes of a frame',
        'd. Terminates a thread',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Garbage collector automatically reclaims memory occupied by unreachable objects.',
    },
    {
      id: '58',
      text: 'What will be the output of the following code snippet?\n\nvoid solve() {\n  int a[] = {1, 2, 3, 4, 5};\n  int sum = 0;\n  for(int i = 0; i < 5; i++) {\n    if(i % 2 == 0) sum += a[i];\n  }\n  cout << sum << endl;\n}',
      options: ['a. 9', 'b. 5', 'c. 6', 'd. 15'],
      correctAnswerIndex: 0,
      explanation: 'Sum of elements at even indices (0, 2, 4): 1 + 3 + 5 = 9.',
    },
    {
      id: '59',
      text: 'Which one of the following is true of a class that has package scope?',
      options: [
        'a. Contains abstract methods only',
        'b. Is a source file, not a class file',
        'c. Only it can be imported from the package',
        'd. Visible only to other classes in the same package',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Package-private classes are accessible only within their own package.',
    },
    {
      id: '60',
      text: 'In an operating system, which mechanism is used to create a process?',
      options: [
        'a. Deadlock detection and recovery',
        'b. Execution of a process creation system call',
        'c. User request to create a new process',
        'd. System initialization',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Processes are created via system calls like `fork()` or `CreateProcess()`.',
    },
    {
      id: '61',
      text: 'In Linux, a process creates a child process using which system call?',
      options: ['a. yield()', 'b. exec()', 'c. init()', 'd. fork()'],
      correctAnswerIndex: 3,
      explanation:
        '`fork()` duplicates the calling process, creating a child process.',
    },
    {
      id: '62',
      text: 'For a binary relationship set R between entity sets A and B, the Mapping Cardinality is ONE-TO-ONE if:',
      options: [
        'a. An entity in A is associated with any number of entities in B, and vice versa',
        'b. An entity in A is associated with any number of entities in B, but an entity in B is associated with at most one entity in A',
        'c. An entity in A is associated with at most one entity in B, and vice versa',
        'd. An entity in A is associated with at most one entity in B, but an entity in B can be associated with any number of entities in A',
      ],
      correctAnswerIndex: 2,
      explanation:
        'One-to-one cardinality means each entity in A relates to at most one entity in B, and vice versa.',
    },
    {
      id: '63',
      text: 'Which principle is the opposite of "Security through obscurity"?',
      options: [
        'a. Least common mechanism',
        'b. Work factor',
        'c. Least privileges',
        'd. Open design',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Open design advocates transparency in security mechanisms, unlike obscurity.',
    },
    {
      id: '64',
      text: 'Which statement about local search algorithms is true?',
      options: [
        'a. Time complexity is independent of problem size',
        'b. Used for convex optimization problems',
        'c. Always find globally optimal solutions',
        'd. Solution quality depends on the starting point and neighborhood function',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Local search algorithms (e.g., hill climbing) depend heavily on initial conditions and neighborhood definitions.',
    },
    {
      id: '65',
      text: 'What keyword declares an asynchronous function in JavaScript?',
      options: ['a. future', 'b. sync', 'c. await', 'd. async'],
      correctAnswerIndex: 3,
      explanation: 'The `async` keyword marks a function as asynchronous.',
    },
    {
      id: '66',
      text: 'Android is ______',
      options: [
        'a. An operating system',
        'b. A web server',
        'c. A programming language',
        'd. None of the above',
      ],
      correctAnswerIndex: 0,
      explanation: 'Android is a Linux-based OS for mobile devices.',
    },
    {
      id: '67',
      text: 'Which sorting algorithm is divide-and-conquer?',
      options: [
        'a. Bubble sort',
        'b. Dynamic sort',
        'c. Insertion sort',
        'd. Quick sort',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Quick sort divides the array into partitions and recursively sorts them.',
    },
    {
      id: '68',
      text: 'What is the main disadvantage of uninformed search algorithms?',
      options: [
        'a. Not optimal',
        'b. Not consistent',
        'c. Not complete',
        'd. Not admissible',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Uninformed searches (e.g., BFS, DFS) may not find the shortest path (non-optimal).',
    },
    {
      id: '69',
      text: 'Which SQL statement gives every employee a 10% raise?',
      options: [
        'a. CHANGE Emp SET salary=salary * 1.1',
        'b. UPDATE Emp SET salary=salary * 1.1',
        'c. ALTER Emp SET salary=salary * 1.1',
        'd. MODIFY Emp SET salary=salary * 1.1',
      ],
      correctAnswerIndex: 1,
      explanation: '`UPDATE` modifies existing records in a table.',
    },
    {
      id: '70',
      text: 'Convert the binary representation 10000000 00001011 00000011 00011111 to dotted-decimal form:',
      options: [
        'a. 127.12.5.31',
        'b. 126.11.3.32',
        'c. 126.11.5.32',
        'd. 128.11.3.31',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Binary 10000000 = 128, 00001011 = 11, 00000011 = 3, 00011111 = 31.',
    },
    {
      id: '71',
      text: 'Which is not desired in a good SRS document?',
      options: [
        'a. Functional requirements',
        'b. Goals of implementation',
        'c. Algorithm for software implementation',
        'd. Non-functional requirements',
      ],
      correctAnswerIndex: 2,
      explanation:
        'SRS should specify "what" not "how" (implementation details are inappropriate).',
    },
    {
      id: '72',
      text: 'Under which license is Android released?',
      options: [
        'a. OSS',
        'b. SourceForge',
        'c. Apache/MIT',
        'd. None of the above',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Android uses the Apache License 2.0 (open-source with some proprietary components).',
    },
    {
      id: '73',
      text: 'What is the main advantage of informed search algorithms?',
      options: ['a. Admissible', 'b. Optimal', 'c. Complete', 'd. Consistent'],
      correctAnswerIndex: 1,
      explanation:
        'Informed searches (e.g., A*) use heuristics to find optimal solutions efficiently.',
    },
    {
      id: '74',
      text: 'Data generated for one use case may not apply to another. This describes which Big Data characteristic?',
      options: ['a. Velocity', 'b. Value', 'c. Veracity', 'd. Validity'],
      correctAnswerIndex: 3,
      explanation: 'Validity refers to data appropriateness for specific uses.',
    },
    {
      id: '75',
      text: 'A tester verifies existing functionality after adding a new feature. What testing is this?',
      options: [
        'a. Integration testing',
        'b. User acceptance testing',
        'c. Functional testing',
        'd. Regression testing',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Regression testing ensures new changes don’t break existing functionality.',
    },
    {
      id: '76',
      text: 'What is the difference between Dijkstra’s Algorithm and Uniform Cost Search (UCS)?',
      options: [
        'a. UCS finds the optimal solution while Dijkstra’s does not',
        'b. Dijkstra’s is optimal, but UCS is not',
        'c. Dijkstra’s uses a priority queue; UCS discovers nodes as they come',
        'd. Dijkstra’s discovers nodes as they come; UCS uses a queue',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Both are optimal, but Dijkstra’s explicitly prioritizes nodes via a queue.',
    },
    {
      id: '77',
      text: 'Which is NOT possible in Java?',
      options: [
        'a. Implement multiple interfaces',
        'b. Execute multiple threads',
        'c. Create arrays with >2 dimensions',
        'd. Create and manipulate pointers',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Java abstracts pointers (uses references) for memory safety.',
    },
    {
      id: '78',
      text: 'Public key systems are useful because:',
      options: [
        'a. They use two keys',
        'b. They are symmetric',
        'c. Public keys can be shared openly',
        'd. Private keys can be kept secret',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Public keys eliminate the need for secure key distribution.',
    },
    {
      id: '79',
      text: 'What will the output of this code snippet be?\n\nvoid solve() {\n  int a[] = {1, 2, 3, 4, 5};\n  int sum = 0;\n  for(int i = 0; i < 5; i++) {\n    if(i % 2 == 0) sum += *(a + i);\n    else sum -= *(a + i);\n  }\n  cout << sum << endl;\n}',
      options: ['a. 2', 'b. 34', 'c. 15', 'd. 3'],
      correctAnswerIndex: 3,
      explanation: 'Sum: +1 -2 +3 -4 +5 = 3.',
    },
    {
      id: '80',
      text: 'What are benefits of Big Data applications?',
      options: [
        'a. Improved decision-making',
        'b. Better customer understanding',
        'c. Enhanced operational efficiency',
        'd. All of the above',
      ],
      correctAnswerIndex: 3,
      explanation: 'Big Data enhances all these business aspects.',
    },
    {
      id: '81',
      text: '______ involves generating, collecting, disseminating, and storing information.',
      options: [
        'a. Critical Management',
        'b. Configuration Management',
        'c. Concurrent Management',
        'd. Communication Management',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Communication Management handles information flow in projects.',
    },
    {
      id: '82',
      text: 'A tester refuses to release a harmful feature. Which ethical principle applies?',
      options: ['a. Honesty', 'b. Fairness', 'c. Responsibility', 'd. Respect'],
      correctAnswerIndex: 2,
      explanation:
        'Responsibility entails prioritizing user safety over client demands.',
    },
    {
      id: '83',
      text: 'Which sorting algorithm is divide-and-conquer?',
      options: [
        'a. Bubble sort',
        'b. Dynamic sort',
        'c. Insertion sort',
        'd. Quick sort',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Quick sort partitions the array and recursively sorts sub-arrays.',
    },
    {
      id: '84',
      text: 'A ______ involves the team moving the ball in an ad hoc manner.',
      options: ['a. RAD', 'b. DSDM', 'c. Evolutionary Waterfall', 'd. SCRUM'],
      correctAnswerIndex: 3,
      explanation: 'SCRUM uses iterative, flexible teamwork sprints.',
    },
    {
      id: '85',
      text: 'A good SRS does NOT have which characteristic?',
      options: [
        'a. Completeness',
        'b. Reliability',
        'c. Consistency',
        'd. Clarity',
      ],
      correctAnswerIndex: 1,
      explanation: 'Reliability is a system attribute, not an SRS requirement.',
    },
    {
      id: '86',
      text: 'Which process model has dependent phases with no feedback loops?',
      options: [
        'a. Incremental',
        'b. Evolutionary',
        'c. Agile',
        'd. Iterative',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Incremental models proceed linearly without revisiting phases.',
    },
    {
      id: '87',
      text: 'What does the `...` operator do in JavaScript?',
      options: [
        'a. Makes a loop execute three times',
        'b. Spreads iterables into individual elements',
        'c. Continues iterators with an increment interval',
        'd. No such operator',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Spread syntax (`...`) expands arrays/objects into elements.',
    },
    {
      id: '88',
      text: 'Which memory management scheme does NOT map logical to physical addresses?',
      options: [
        'a. Segmentation',
        'b. Paging with segmentation',
        'c. Swapping',
        'd. Paging',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Swapping moves processes between RAM and disk but doesn’t handle address translation.',
    },
    {
      id: '89',
      text: 'Which method accesses HTML elements using JavaScript?',
      options: [
        'a. getTagById()',
        'b. getElementsByHTMLName()',
        'c. getHTMLClassByName()',
        'd. getElementsByClassName()',
      ],
      correctAnswerIndex: 3,
      explanation: '`getElementsByClassName()` selects elements by class name.',
    },
    {
      id: '90',
      text: 'Project cost computed by comparing to a similar project is called:',
      options: [
        'a. Estimation by Analogy',
        'b. Empirical Model',
        'c. Expert Judgement',
        'd. Adhoc Approach',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Analogy-based estimation leverages historical project data.',
    },
    {
      id: '91',
      text: 'The longest path determining project completion time is called:',
      options: [
        'a. Full path',
        'b. Complete path',
        'c. Critical path',
        'd. Project path',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Critical path identifies tasks that cannot be delayed without delaying the project.',
    },
    {
      id: '92',
      text: 'What are the main goals of software architecture?',
      options: [
        'a. Enable cost-effective integration',
        'b. Improve pattern accuracy',
        'c. Provide structural understanding',
        'd. Ensure requirement completeness',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Architecture helps stakeholders understand system structure and concepts.',
    },
    {
      id: '93',
      text: 'Which is contained in the `src` folder?',
      options: ['a. XML', 'b. Java source code', 'c. Manifest', 'd. None'],
      correctAnswerIndex: 1,
      explanation: '`src` typically holds source code (e.g., `.java` files).',
    },
    {
      id: '94',
      text: 'Which is NOT an objective of software testing?',
      options: [
        'a. Enhancing usability',
        'b. Identifying defects',
        'c. Increasing development time',
        'd. Improving performance',
      ],
      correctAnswerIndex: 2,
      explanation: 'Testing aims to improve quality, not prolong development.',
    },
    {
      id: '95',
      text: 'CPU fetches instructions from memory according to the value of:',
      options: [
        'a. Program counter',
        'b. Program status word',
        'c. Instruction register',
        'd. Status register',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Program counter (PC) holds the address of the next instruction.',
    },
    {
      id: '96',
      text: 'What is the first step in data-driven decision-making?',
      options: [
        'a. Making a decision',
        'b. Analyzing data',
        'c. Interpreting results',
        'd. Collecting data',
      ],
      correctAnswerIndex: 3,
      explanation: 'Data collection precedes analysis and decision-making.',
    },
    {
      id: '97',
      text: 'Which describes Triple DES (3DES)?',
      options: [
        'a. 144-bit blocks, 1 DES round',
        'b. 64-bit blocks, 56-bit keys, 3 DES rounds',
        'c. 168-bit keys on 64-bit blocks',
        'd. 128-bit blocks, 112-bit keys, 3 DES rounds',
      ],
      correctAnswerIndex: 1,
      explanation:
        '3DES applies DES three times with 56-bit keys on 64-bit blocks.',
    },
    {
      id: '98',
      text: 'Which is a checked exception?',
      options: [
        'a. IOException',
        'b. RuntimeException',
        'c. NumberFormatException',
        'd. NegativeArraySizeException',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Checked exceptions (e.g., `IOException`) must be declared/handled.',
    },
    {
      id: '99',
      text: 'Which one is a false assumption to avoid race conditions in a problem of critical region?',
      options: [
        'a. No process running outside its critical region may block other processes.',
        'b. Assumptions should be made about speeds or the number of CPUs.',
        'c. No process should have to wait forever to enter its critical region.',
        'd. No two processes may be simultaneously inside the critical regions.',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Avoiding race conditions requires no assumptions about CPU speeds or counts (false assumption).',
    },
    {
      id: '100',
      text: 'Which of the following informed search algorithms guarantees optimality when searching for a solution, but has an exponential time complexity in the worst-case scenario?',
      options: [
        'a. A* Search',
        'b. Uniform Cost Search',
        'c. Iterative Deepening A* Search',
        'd. Greedy Best-First Search',
      ],
      correctAnswerIndex: 0,
      explanation:
        'A* Search guarantees optimality with admissible heuristics but can have exponential time complexity in worst cases.',
    },
  ],
}

export default AAUmodelExit
