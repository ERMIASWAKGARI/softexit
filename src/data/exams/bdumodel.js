const bduModel = {
  id: 'bduMock1',
  title: 'BDU Model',
  year: 2023,
  type: 'model',
  image: 'bdu.png',
  questions: [
    {
      id: '1',
      text: 'Which asymptotic notation is used to represent algorithm complexity in the worst possible set of inputs?',
      options: [
        'A. Theta notation',
        'B. Big-Oh notation',
        'C. Big-Omega notation',
        'D. All',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Big-Oh (O) notation describes the upper bound/worst-case scenario of an algorithm.',
    },
    {
      id: '2',
      text: 'How many different types of constructors are there?',
      options: ['A. 4', 'B. 1', 'C. 2', 'D. 3'],
      correctAnswerIndex: 3,
      explanation:
        'The three main types are default, parameterized, and copy constructors.',
    },
    {
      id: '3',
      text: 'What is the algorithm complexity of Binary search algorithm?',
      options: ['A. O(n²)', 'B. O(n)', 'C. O(n!)', 'D. O(log n)'],
      correctAnswerIndex: 3,
      explanation:
        'Binary search has logarithmic time complexity as it halves the search space each iteration.',
    },
    {
      id: '4',
      text: 'Assume you have an algorithm with time function t(n) = 2n + 3n² + log n + n!. What is its complexity order?',
      options: ['A. O(n!)', 'B. O(n²)', 'C. O(log n)', 'D. O(n)'],
      correctAnswerIndex: 0,
      explanation:
        'The factorial term (n!) dominates all other terms as n grows large.',
    },
    {
      id: '5',
      text: 'What would be the Algorithm complexity to add a node at the end of singly linked list if the pointer is initially pointing to the head?',
      options: ['A. Θ(1)', 'B. Θ(n)', 'C. O(1)', 'D. O(n)'],
      correctAnswerIndex: 3,
      explanation:
        'Requires traversing the entire list to reach the end, making it O(n).',
    },
    {
      id: '6',
      text: 'A linear list in which the last node points to the first node is?',
      options: [
        'A. Tree',
        'B. Doubly linked list',
        'C. Circular linked list',
        'D. Simply linked list',
      ],
      correctAnswerIndex: 2,
      explanation:
        'A circular linked list forms a loop by connecting the last node to the first.',
    },
    {
      id: '7',
      text: 'Which C++ operator allocates memory dynamically?',
      options: ['A. new', 'B. struct', 'C. create', 'D. delete'],
      correctAnswerIndex: 0,
      explanation:
        'The "new" operator is used for dynamic memory allocation in C++.',
    },
    {
      id: '8',
      text: 'Which data structure is more appropriate to implement recursive algorithms?',
      options: ['A. Stack', 'B. Tree', 'C. Queue', 'D. Linked list'],
      correctAnswerIndex: 0,
      explanation:
        'Recursion uses the call stack to manage function calls and their states.',
    },
    {
      id: '9',
      text: 'Which data structure is suitable to represent hierarchical relationship between elements?',
      options: ['A. Tree', 'B. Priority', 'C. Graph', 'D. Dequeue'],
      correctAnswerIndex: 0,
      explanation:
        'Trees naturally represent parent-child hierarchical relationships.',
    },
    {
      id: '10',
      text: 'What is the output of: for (int i=1; i<=5; i++) { if(i%2==0) continue; cout<<i<<","; }',
      options: ['A. 1', 'B. 1,3,5', 'C. 2,4', 'D. 1,2'],
      correctAnswerIndex: 1,
      explanation:
        'Skips even numbers (continue) and prints odd numbers 1,3,5.',
    },
    {
      id: '11',
      text: 'What will be the output of: void f(int &i){i=i*5;} int main(){int i=5; f(i); cout<<i;}',
      options: ['A. 10', 'B. 25', 'C. 5', 'D. 20'],
      correctAnswerIndex: 1,
      explanation: 'Pass-by-reference modifies the original variable (5*5=25).',
    },
    {
      id: '12',
      text: 'Which is the correct function call for function "sum" with two inputs num1 and num2?',
      options: [
        'A. int sum(num1, num2);',
        'B. sum(num1, num2);',
        'C. int sum(int num1, int num2);',
        'D. sum(int num1, int num2);',
      ],
      correctAnswerIndex: 1,
      explanation: 'Correct syntax for calling a function with two arguments.',
    },
    {
      id: '13',
      text: 'Which statement about arrays is true?',
      options: [
        'A. Cannot assign one array to another',
        'B. Last index equals array size',
        'C. Illegal to access out-of-bounds elements',
        'D. All of the above',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Accessing elements beyond array bounds is undefined behavior.',
    },
    {
      id: '14',
      text: 'Which is true for accessing array elements?',
      options: [
        'A. DataTypename arrayname[array size];',
        'B. DataTypename arrayname[index];',
        'C. All',
        'D. Arrayname[index];',
      ],
      correctAnswerIndex: 3,
      explanation: 'Correct syntax is arrayname[index] to access elements.',
    },
    {
      id: '15',
      text: 'Which describes runtime polymorphism?',
      options: [
        'A. Achieved by virtual functions and pointers',
        'B. Fast execution (determined at compile time)',
        'C. Multiple methods with same name but different signatures',
        'D. Less flexible (compile-time execution)',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Runtime polymorphism uses virtual functions and dynamic binding.',
    },
    {
      id: '16',
      text: 'Which is an incorrect characteristic of Java constructors?',
      options: [
        'A. Cannot have return types (even void)',
        'B. Executed once per object creation',
        'C. May or may not have parameters',
        'D. Name must match class name',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Constructors are called each time an object is created (not just once).',
    },
    {
      id: '17',
      text: 'Which is a consequence of inheritance?',
      options: [
        'A. Clear object relationships',
        'B. Superclass changes affect subclasses',
        "C. Changes to one object don't affect others",
        'D. Easy to add/remove objects from superclass',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Inheritance creates tight coupling - superclass changes propagate to subclasses.',
    },
    {
      id: '18',
      text: 'Which is NOT a difference between abstract classes and interfaces in Java?',
      options: [
        'A. Interfaces cannot have data fields',
        'B. Interfaces define class identity, abstract classes define abilities',
        'C. Interfaces have public modifiers by default',
        'D. A class can implement multiple interfaces but inherit only one abstract class',
      ],
      correctAnswerIndex: 0,
      explanation: 'Interfaces can have static final data fields (constants).',
    },
    {
      id: '19',
      text: 'Which is unique among these binding types?',
      options: [
        'A. Overloading',
        'B. Late binding',
        'C. Early binding',
        'D. Static binding',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Overloading is compile-time polymorphism, others relate to binding time.',
    },
    {
      id: '20',
      text: 'Which CSS syntax is correct?',
      options: [
        'A. body {color: black}',
        'B. {body:color=black(body)}',
        'C. body:color=black',
        'D. {body:color:black}',
      ],
      correctAnswerIndex: 0,
      explanation: 'Correct CSS syntax uses selector {property:value} format.',
    },
    {
      id: '21',
      text: 'What is Inter-process communication?',
      options: [
        'A. Communication using same address space',
        'B. Communication without using same address space',
        'C. Only synchronization without communication',
        'D. None',
      ],
      correctAnswerIndex: 1,
      explanation:
        'IPC allows processes to communicate across different address spaces.',
    },
    {
      id: '22',
      text: 'What will be the output of the array rotation code snippet?',
      options: [
        'A. [1, 22, 111, 44]',
        'B. [111, 44, 1, 22]',
        'C. [22, 111, 44, 1]',
        'D. [44, 1, 22, 111]',
      ],
      correctAnswerIndex: 3,
      explanation: 'The code performs right rotations on the array.',
    },
    {
      id: '23',
      text: 'If every requirement can be checked by a cost-effective process, the SRS is called:',
      options: [
        'A. Complete',
        'B. Traceable',
        'C. Verifiable',
        'D. Modifiable',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Verifiable requirements can be validated through testing or review.',
    },
    {
      id: '24',
      text: 'The purpose of a foreign key is to identify a particular row of:',
      options: [
        'A. Parent and child tables',
        'B. Referenced table',
        'C. Child table',
        'D. All of the above',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Foreign keys reference primary keys in parent/referenced tables.',
    },
    {
      id: '25',
      text: 'When can a thread return directly to the READY state?',
      options: [
        'A. On yield()',
        'B. On sleep()',
        'C. On wait()',
        'D. When blocked by unavailable device',
      ],
      correctAnswerIndex: 0,
      explanation:
        'yield() voluntarily relinquishes CPU, moving to READY state.',
    },
    {
      id: '26',
      text: 'Which architecture view is most commonly used?',
      options: [
        'A. Context view',
        'B. Configuration view',
        'C. Building Block/Component view',
        'D. Physical database view',
      ],
      correctAnswerIndex: 2,
      explanation: 'Component views show system structure and relationships.',
    },
    {
      id: '27',
      text: 'Accepting risk occurrence without action is called:',
      options: [
        'A. Risk avoidance',
        'B. Risk Retention',
        'C. Risk Reduction',
        'D. Risk transfer',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Risk retention means acknowledging the risk without mitigation.',
    },
    {
      id: '28',
      text: 'ICMP is primarily used for:',
      options: [
        'A. IP addressing',
        'B. Error and diagnostics',
        'C. Data forwarding',
        'D. Network routing',
      ],
      correctAnswerIndex: 1,
      explanation:
        'ICMP handles error reporting (e.g., ping, destination unreachable).',
    },
    {
      id: '29',
      text: 'Which best describes the current data explosion?',
      options: [
        'A. Too much knowledge and data',
        'B. Too much data and opportunity',
        'C. Distributed knowledge and data',
        'D. Too much data, too little knowledge',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Highlights the challenge of extracting insights from vast data.',
    },
    {
      id: '30',
      text: 'Which is NOT a service lifecycle state?',
      options: ['A. Destroyed', 'B. Running', 'C. Start', 'D. Paused'],
      correctAnswerIndex: 2,
      explanation: '"Start" is an action, not a state in the lifecycle.',
    },
    {
      id: '31',
      text: 'An attribute takes a ______ value when undefined:',
      options: ['A. Not Applicable', 'B. Null', 'C. 0', 'D. Zero'],
      correctAnswerIndex: 1,
      explanation:
        'NULL represents missing/undefined attribute values in databases.',
    },
    {
      id: '32',
      text: 'Which sorting algorithm has the best worst-case time complexity?',
      options: [
        'A. Merge sort',
        'B. Selection sort',
        'C. Quick sort',
        'D. Bubble sort',
      ],
      correctAnswerIndex: 0,
      explanation: 'Merge sort guarantees O(n log n) in all cases.',
    },
    {
      id: '33',
      text: 'Modifying software to match environmental changes is called:',
      options: [
        'A. Perfective maintenance',
        'B. Adaptive maintenance',
        'C. Preventive maintenance',
        'D. Corrective maintenance',
      ],
      correctAnswerIndex: 1,
      explanation: 'Adaptive maintenance adjusts software to new environments.',
    },
    {
      id: '34',
      text: 'TCP verifies data arrival using:',
      options: ['A. Acknowledgment', 'B. Bits', 'C. Buffer', 'D. Frame'],
      correctAnswerIndex: 0,
      explanation: 'TCP uses ACK packets to confirm successful data receipt.',
    },
    {
      id: '35',
      text: 'During which test process activity are tests designed and executed?',
      options: [
        'A. Test Analysis and Design',
        'B. Test Implementation and Execution',
        'C. Test Planning and Control',
        'D. Test Closure',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Test execution occurs in the Implementation and Execution phase.',
    },
    {
      id: '36',
      text: 'Which data structure allows deleting from front and inserting at rear?',
      options: [
        'A. Dequeues',
        'B. Binary search tree',
        'C. Queues',
        'D. Stacks',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Queues follow FIFO (First-In-First-Out) with front deletion and rear insertion.',
    },
    {
      id: '37',
      text: 'What effect does achieving quality attributes have on software?',
      options: [
        'A. Always negative',
        'B. Non-deterministic',
        'C. Always positive',
        'D. Both positive and negative',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Quality attributes often involve trade-offs (e.g., security vs performance).',
    },
    {
      id: '38',
      text: 'Which is an independent malicious program needing no host?',
      options: ['A. Trap door', 'B. Trojan horse', 'C. Virus', 'D. Worm'],
      correctAnswerIndex: 3,
      explanation: 'Worms self-replicate without needing a host file.',
    },
    {
      id: '39',
      text: 'Which layer handles dialog control and synchronization?',
      options: ['A. Network', 'B. Session', 'C. Data Link', 'D. Transport'],
      correctAnswerIndex: 1,
      explanation:
        'Session Layer (OSI Layer 5) manages dialogues between applications.',
    },
    {
      id: '40',
      text: 'What term describes large, complex datasets requiring non-traditional processing?',
      options: ['A. Wisdom', 'B. Tiny data', 'C. Big data', 'D. Information'],
      correctAnswerIndex: 2,
      explanation:
        'Big data refers to datasets too large for traditional DBMS tools.',
    },
    {
      id: '41',
      text: 'What is the lowest level of work in a project?',
      options: ['A. Work product', 'B. Milestone', 'C. Task set', 'D. Task'],
      correctAnswerIndex: 3,
      explanation: 'A task is the smallest unit of work in project management.',
    },
    {
      id: '42',
      text: 'An ER diagram expresses the overall ______ of a database graphically.',
      options: [
        'A. View Structure',
        'B. Model Structure',
        'C. Architectural Structure',
        'D. Logical Structure',
      ],
      correctAnswerIndex: 3,
      explanation:
        'ER diagrams visualize the logical structure (entities, relationships).',
    },
    {
      id: '43',
      text: 'Which network design makes fault identification hardest?',
      options: ['A. Star', 'B. Bus', 'C. Mesh', 'D. Ring'],
      correctAnswerIndex: 2,
      explanation:
        'Mesh networks have complex interconnections, complicating fault isolation.',
    },
    {
      id: '44',
      text: 'Which is NOT a contribution of big data analysis?',
      options: [
        'A. Competitive advantage',
        'B. Market volatility control',
        'C. Customer satisfaction',
        'D. None',
      ],
      correctAnswerIndex: 3,
      explanation: 'Big data contributes to all listed areas.',
    },
    {
      id: '45',
      text: 'What does HTTP status code 201 indicate?',
      options: ['A. No content', 'B. Accepted', 'C. OK', 'D. Created'],
      correctAnswerIndex: 3,
      explanation:
        'HTTP 201 means a resource was successfully created (e.g., after POST).',
    },
    {
      id: '46',
      text: 'Which are common cyber-attacks?',
      options: [
        'A. DDoS and Drive-by Downloads',
        'B. Malware & Malvertising',
        'C. Phishing and Password attacks',
        'D. All of the above',
      ],
      correctAnswerIndex: 3,
      explanation: 'All options are prevalent attack methods.',
    },
    {
      id: '47',
      text: 'Identify a source of unstructured data:',
      options: [
        'A. RDBMS',
        'B. University student database',
        'C. Twitter',
        'D. Employee table',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Twitter feeds (text, images) are unstructured, unlike tabular RDBMS data.',
    },
    {
      id: '48',
      text: 'What is the time complexity of this C++ code? (String concatenation loop)',
      options: ['A. O(logn)', 'B. O(1)', 'C. O(n)', 'D. O(n²)'],
      correctAnswerIndex: 3,
      explanation: 'Loop runs n times with O(n) concatenation → O(n²) total.',
    },
    {
      id: '49',
      text: 'What is true about package-scoped classes?',
      options: [
        'A. Contain only abstract methods',
        'B. Are source files, not class files',
        'C. Are the only importable classes',
        'D. Visible only within the same package',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Package-private classes restrict visibility to their package.',
    },
    {
      id: '50',
      text: 'In Linux, what system call creates a child process?',
      options: ['A. yield()', 'B. exec()', 'C. init()', 'D. fork()'],
      correctAnswerIndex: 3,
      explanation: 'fork() duplicates the calling process.',
    },
    {
      id: '51',
      text: 'For a binary relationship, ONE-TO-ONE mapping means:',
      options: [
        'A. Entity in A relates to any number in B, and vice versa',
        'B. Entity in A relates to any number in B, but B relates to at most one in A',
        'C. Entity in A relates to at most one in B, and vice versa',
        'D. Entity in A relates to at most one in B, but B can relate to many in A',
      ],
      correctAnswerIndex: 2,
      explanation:
        'One-to-one means each entity relates to at most one entity in the other set.',
    },
    {
      id: '52',
      text: 'What is the opposite of "Security through obscurity"?',
      options: [
        'A. Least common mechanism',
        'B. Work factor',
        'C. Least privilege',
        'D. Open design',
      ],
      correctAnswerIndex: 3,
      explanation: 'Open design advocates transparency in security mechanisms.',
    },
    {
      id: '53',
      text: 'Which is true about local search algorithms?',
      options: [
        'A. Time complexity is problem-size independent',
        'B. Used for convex optimization',
        'C. Always find global optima',
        'D. Solution quality depends on starting point',
      ],
      correctAnswerIndex: 3,
      explanation: 'Local search results depend heavily on initialization.',
    },
    {
      id: '54',
      text: 'What keyword declares async functions in JavaScript?',
      options: ['A. future', 'B. sync', 'C. await', 'D. async'],
      correctAnswerIndex: 3,
      explanation: 'async marks a function as asynchronous.',
    },
    {
      id: '55',
      text: 'Android is ______',
      options: [
        'A. An OS',
        'B. A web server',
        'C. A programming language',
        'D. None',
      ],
      correctAnswerIndex: 0,
      explanation: 'Android is a Linux-based mobile operating system.',
    },
    {
      id: '56',
      text: 'Which sorting algorithm uses divide-and-conquer?',
      options: [
        'A. Bubble sort',
        'B. Dynamic sort',
        'C. Insertion sort',
        'D. Quick sort',
      ],
      correctAnswerIndex: 3,
      explanation: 'Quick sort partitions the array recursively.',
    },
    {
      id: '57',
      text: 'What is the main disadvantage of uninformed search?',
      options: [
        'A. Not optimal',
        'B. Not consistent',
        'C. Not complete',
        'D. Not admissible',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Uninformed searches (e.g., BFS/DFS) may not find the best solution.',
    },
    {
      id: '58',
      text: 'Which SQL gives employees a 10% raise?',
      options: [
        'A. CHANGE Emp SET salary=salary*1.1',
        'B. UPDATE Emp SET salary=salary*1.1',
        'C. ALTER Emp SET salary=salary*1.1',
        'D. MODIFY Emp SET salary=salary*1.1',
      ],
      correctAnswerIndex: 1,
      explanation: 'UPDATE modifies existing records with new values.',
    },
    {
      id: '59',
      text: 'Convert binary 10000000 00001011 00000011 00011111 to dotted-decimal:',
      options: [
        'A. 127.12.5.31',
        'B. 126.11.3.32',
        'C. 126.11.5.32',
        'D. 128.11.3.31',
      ],
      correctAnswerIndex: 3,
      explanation: 'Binary 10000000=128, 00001011=11, 00000011=3, 00011111=31.',
    },
    {
      id: '60',
      text: 'Which is NOT desired in a good SRS document?',
      options: [
        'A. Functional requirements',
        'B. Implementation goals',
        'C. Algorithm details',
        'D. Non-functional requirements',
      ],
      correctAnswerIndex: 2,
      explanation: 'SRS should specify "what", not "how" (implementation).',
    },
    {
      id: '61',
      text: 'Under which license is Android released?',
      options: ['A. OSS', 'B. SourceForge', 'C. Apache/MIT', 'D. None'],
      correctAnswerIndex: 2,
      explanation:
        'Android uses Apache License 2.0 with some proprietary components.',
    },
    {
      id: '62',
      text: 'What is the main advantage of informed search algorithms?',
      options: ['A. Admissible', 'B. Optimal', 'C. Complete', 'D. Consistent'],
      correctAnswerIndex: 1,
      explanation:
        'Informed searches (e.g., A*) use heuristics to find optimal solutions.',
    },
    {
      id: '63',
      text: 'Which Big Data characteristic refers to data applicability?',
      options: ['A. Velocity', 'B. Value', 'C. Veracity', 'D. Validity'],
      correctAnswerIndex: 3,
      explanation: 'Validity means data is appropriate for specific uses.',
    },
    {
      id: '64',
      text: "What testing ensures new features don't break existing functionality?",
      options: [
        'A. Integration testing',
        'B. User acceptance testing',
        'C. Functional testing',
        'D. Regression testing',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Regression testing verifies existing functionality after changes.',
    },
    {
      id: '65',
      text: "What is the difference between Dijkstra's Algorithm and Uniform Cost Search?",
      options: [
        "A. UCS finds optimal solutions, Dijkstra's doesn't",
        "B. Dijkstra's is optimal but not UCS",
        "C. Dijkstra's uses a priority queue; UCS discovers nodes as they come",
        "D. Dijkstra's discovers nodes as they come; UCS uses a queue",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Both are optimal, but Dijkstra's explicitly prioritizes nodes.",
    },
    {
      id: '66',
      text: 'Which is NOT possible in Java?',
      options: [
        'A. Implement multiple interfaces',
        'B. Execute multiple threads',
        'C. Create multi-dimensional arrays',
        'D. Manipulate pointers',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Java abstracts pointers for memory safety (uses references).',
    },
    {
      id: '67',
      text: 'Public key systems are useful because:',
      options: [
        'A. Use two keys',
        'B. Are symmetric',
        'C. Public keys can be shared openly',
        'D. Private keys can be kept secret',
      ],
      correctAnswerIndex: 2,
      explanation: 'Public keys eliminate secure key distribution needs.',
    },
    {
      id: '68',
      text: 'What will this code output? (Array element summation with alternating signs)',
      options: ['A. 2', 'B. 34', 'C. 15', 'D. 3'],
      correctAnswerIndex: 3,
      explanation: 'Sum: +1 -2 +3 -4 +5 = 3.',
    },
    {
      id: '69',
      text: 'What are benefits of Big Data?',
      options: [
        'A. Improved decision-making',
        'B. Better customer insights',
        'C. Operational efficiency',
        'D. All of the above',
      ],
      correctAnswerIndex: 3,
      explanation: 'Big data enhances all these business aspects.',
    },
    {
      id: '70',
      text: '______ involves generating, collecting, disseminating, and storing information.',
      options: [
        'A. Critical Management',
        'B. Configuration Management',
        'C. Concurrent Management',
        'D. Communication Management',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Communication Management handles information flow in projects.',
    },
    {
      id: '71',
      text: 'What is the main task of test planning?',
      options: [
        'A. Determining test approach',
        'B. Measuring results',
        'C. Preparing test specs',
        'D. Evaluating exit criteria',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Test planning focuses on defining the overall testing strategy and approach.',
    },
    {
      options: [
        'A. Process problems',
        'B. Product problems',
        'C. People problems',
        'D. Technology problems',
      ],
      correctAnswerIndex: 3,
      explanation: 'It addresses cutting-edge technological challenges.',
    },
    {
      id: '73',
      text: "What refers to an object's attribute values and associated actions?",
      options: ['A. Object', 'B. None', 'C. State', 'D. Interface'],
      correctAnswerIndex: 2,
      explanation: "State encapsulates an object's data and behaviors.",
    },
    {
      id: '74',
      text: 'Which UML relationship is shown by a diamond symbol?',
      options: [
        'A. Dependency',
        'B. Composition',
        'C. Association',
        'D. Aggregation',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Diamond symbols represent aggregation (hollow) or composition (filled).',
    },
    {
      id: '75',
      text: 'Which design model shows software-user interaction?',
      options: [
        'A. Data design',
        'B. Component design',
        'C. Architectural design',
        'D. Interface design',
      ],
      correctAnswerIndex: 3,
      explanation: 'Interface design handles user and system interactions.',
    },
    {
      id: '76',
      text: 'Which environment is most complex for an AI agent?',
      options: [
        'A. Fully Observable, Deterministic, Static',
        'B. Partially Observable, Nondeterministic, Dynamic',
        'C. Partially Observable, Sequential, Continuous',
        'D. Fully Observable, Episodic, Discrete',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Partial observability + nondeterminism + dynamism maximizes complexity.',
    },
    {
      id: '77',
      text: 'What is true about Equivalence Partitioning?',
      options: [
        'A. Only for system testing',
        'B. Applicable to all test levels',
        'C. Only for developers',
        'D. A white-box technique',
      ],
      correctAnswerIndex: 1,
      explanation:
        'This black-box technique divides input data into valid/invalid partitions.',
    },
    {
      id: '78',
      text: 'Which activity follows feasibility study but precedes requirements analysis?',
      options: [
        'A. Project Control',
        'B. Project Monitoring',
        'C. Project Scheduling',
        'D. Project Planning',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Planning establishes objectives before detailed requirements gathering.',
    },
    {
      id: '79',
      text: 'What are Big Data benefits?',
      options: [
        'A. Time reductions',
        'B. Cost reductions',
        'C. Smarter decisions',
        'D. All of the above',
      ],
      correctAnswerIndex: 3,
      explanation: 'Big data improves all these business aspects.',
    },
    {
      id: '80',
      text: 'Which is NOT an evolutionary process model?',
      options: [
        'A. Incremental Model',
        'B. WINWIN Spiral Model',
        'C. Concurrent Model',
        'D. All are evolutionary',
      ],
      correctAnswerIndex: 3,
      explanation:
        'All listed models are evolutionary (iterative/incremental).',
    },
    {
      id: '81',
      text: 'Which is NOT a NoSQL database?',
      options: [
        'A. SQL Server',
        'B. Cassandra',
        'C. MongoDB',
        'D. None of the above',
      ],
      correctAnswerIndex: 0,
      explanation: 'SQL Server is a relational database, not NoSQL.',
    },
    {
      id: '82',
      text: 'Which is NOT a UML structural diagram?',
      options: [
        'A. Profile diagram',
        'B. Object diagram',
        'C. Class diagram',
        'D. Use case diagram',
      ],
      correctAnswerIndex: 3,
      explanation: 'Use case diagrams are behavioral, not structural.',
    },
    {
      id: '83',
      text: 'Which violates good requirements documentation?',
      options: [
        'A. Using diagrams',
        'B. Qualitative requirements',
        'C. Short paragraphs',
        'D. Redundant statements',
      ],
      correctAnswerIndex: 3,
      explanation: 'Requirements should avoid redundancy for clarity.',
    },
    {
      id: '84',
      text: 'Which is NOT a test coverage metric?',
      options: [
        'A. Test cases per requirement',
        'B. None',
        'C. Requirements coverage',
        'D. Test execution percentage',
      ],
      correctAnswerIndex: 1,
      explanation: 'All other options are valid coverage metrics.',
    },
    {
      id: '85',
      text: 'Which metrics relate to overall software functionality?',
      options: [
        'A. Size-related',
        'B. Product-related',
        'C. Function-related',
        'D. None',
      ],
      correctAnswerIndex: 2,
      explanation: 'Function-related metrics measure feature completeness.',
    },
    {
      id: '86',
      text: 'Which contradicts the Agile Manifesto?',
      options: [
        'A. Responding to change over following plans',
        'B. Contract negotiation over collaboration',
        'C. Working software over documentation',
        'D. Individuals over processes',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Agile values customer collaboration over contract negotiation.',
    },
    {
      id: '87',
      text: 'How is testing best described?',
      options: [
        'A. A project stage',
        'B. Finding broken code',
        'C. Evaluating deliverables for errors',
        'D. None',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Testing evaluates products against requirements to identify defects.',
    },
    {
      id: '88',
      text: 'Which service does the transport layer provide?',
      options: [
        'A. Process addressing',
        'B. Physical addressing',
        'C. Host addressing',
        'D. Network addressing',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Transport layer uses port numbers for process-to-process communication.',
    },
    {
      id: '89',
      text: 'What is a data warehouse?',
      options: [
        'A. Web mining',
        'B. Subject-oriented integrated data',
        'C. Text mining',
        'D. Data mining',
      ],
      correctAnswerIndex: 1,
      explanation: 'Data warehouses integrate historical data for analysis.',
    },
    {
      id: '90',
      text: 'Which architectural structure is odd?',
      options: [
        'A. Shared data',
        'B. Work assignment',
        'C. Client-server',
        'D. Concurrency',
      ],
      correctAnswerIndex: 1,
      explanation: "Work assignment isn't a standard architectural structure.",
    },
    {
      id: '91',
      text: 'Which search algorithm minimizes total path cost?',
      options: [
        'A. Greedy search',
        'B. Depth-first search',
        'C. A* search',
        'D. Breadth-first search',
      ],
      correctAnswerIndex: 2,
      explanation: 'A* uses heuristics to find optimal paths efficiently.',
    },
    {
      id: '92',
      text: 'What best describes knowledge representation?',
      options: [
        'A. Drawing conclusions from knowledge',
        'B. Storing knowledge for computer processing',
        'C. Fixed-scheme relation storage',
        'D. Formal inference methods',
      ],
      correctAnswerIndex: 1,
      explanation: 'It focuses on structuring knowledge for computational use.',
    },
    {
      id: '93',
      text: 'Which white-box testing technique uses control flow analysis?',
      options: [
        'A. Data flow testing',
        'B. Statement coverage',
        'C. Branch coverage',
        'D. All of the above',
      ],
      correctAnswerIndex: 3,
      explanation: 'All analyze control flow through code structures.',
    },
    {
      id: '94',
      text: 'Which traceability links design components to requirements?',
      options: [
        'A. Forward-from',
        'B. Backward-from',
        'C. Backward-to',
        'D. Forward-to',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Backward-from traces design back to originating requirements.',
    },
    {
      id: '95',
      text: 'What is the correct pthread_exit signature?',
      options: [
        'A. void pthread_exit(void);',
        'B. int pthread_exit_();',
        'C. int pthread_exit(0);',
        'D. void pthread_exit(void*oval_ptr);',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Correct syntax passes a void pointer for thread termination status.',
    },
    {
      id: '96',
      text: 'Which is NOT a primitive system data type?',
      options: ['A. clock_t', 'B. size_t', 'C. mode_t', 'D. size_t'],
      correctAnswerIndex: 0,
      explanation: 'clock_t is a derived type (typically long).',
    },
    {
      id: '97',
      text: 'How is lseek() used?',
      options: [
        'A. <unistd.h> off_t lseek(int fd, off_t offset, int whence);',
        'B. <apue.h> offset_t lseek(...);',
        'C. <types.h> int lseek(...);',
        'D. <stdio.h> offset_t lseek(...);',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Correct header and function signature for file position setting.',
    },
    {
      id: '98',
      text: 'Which is false about close(int fd)?',
      options: [
        'A. Returns -1 on error',
        'B. Returns NULL on error',
        'C. Takes a file descriptor',
        'D. Returns 0 on success',
      ],
      correctAnswerIndex: 1,
      explanation: 'close() returns -1 on error, not NULL.',
    },
    {
      id: '99',
      text: 'Which is false about times() system call?',
      options: [
        'A. tms_cutime: child system time',
        'B. tms_artime: child user time',
        'C. tms_stime: system time',
        'D. tms_utime: user time',
      ],
      correctAnswerIndex: 1,
      explanation: 'No tms_artime field exists in the tms struct.',
    },
    {
      id: '100',
      text: 'How does the startup routine call main() in C?',
      options: [
        'A. exit(argc_argv);',
        'B. main(exit(argc_argv));',
        'C. exit(main)',
        'D. exit(main(argc_argv));',
      ],
      correctAnswerIndex: 3,
      explanation: 'Standard invocation: exit(main(argc, argv)).',
    },
  ],
}

export default bduModel
