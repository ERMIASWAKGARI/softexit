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
    {
      id: '11',
      text: 'Both the CISC and RISC architectures have been developed to reduce the:',
      options: [
        'a. Time delay',
        'b. Semantic gap',
        'c. Cost',
        'd. All of the mentioned',
      ],
      correctAnswerIndex: 1,
      explanation:
        'CISC and RISC aim to reduce the semantic gap between high-level languages and machine instructions.',
    },
    {
      id: '12',
      text: 'All of the following are disadvantages of using DHCP services EXCEPT?',
      options: [
        'a. Fault on the DHCP server can affect the whole network',
        'b. It is not a secured way of assigning IP addresses',
        "c. Static IP address assignment can't be used.",
        'd. It minimizes the load of network admin',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Reducing admin workload is an advantage of DHCP, not a disadvantage.',
    },
    {
      id: '13',
      text: 'CPU scheduling is the basis of ______',
      options: [
        'a. Multiprogramming operating systems',
        'b. Larger memory-sized systems',
        'c. Multiprocessor systems',
        'd. None of the mentioned',
      ],
      correctAnswerIndex: 0,
      explanation:
        'CPU scheduling enables multiprogramming by efficiently allocating processor time among multiple processes.',
    },
    {
      id: '14',
      text: 'What is the bottom-up parsing method also known as?',
      options: [
        'a. Recursive descent parsing',
        'b. Predictive parsing',
        'c. Shift-reduce parsing',
        'd. All of them',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Bottom-up parsing is called shift-reduce parsing as it shifts input symbols onto a stack and reduces them according to grammar rules.',
    },
    {
      id: '15',
      text: 'Which simple strategy results in greedy best search?',
      options: [
        'a. Append newly generated nodes at the beginning of the open list',
        'b. Append newly generated nodes at the end of the open list',
        'c. Insert newly generated nodes in the open list according to their path cost (lowest values first)',
        'd. Insert newly generated nodes in the open list according to their evaluation function (lowest values first)',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Greedy best-first search orders nodes based solely on heuristic evaluation function values.',
    },
    {
      id: '16',
      text: 'What is the main goal of data compression while it paths in different network layers?',
      options: [
        'a. Securing data',
        'b. Minimize the size of data',
        'c. Select the best path of destination devices',
        'd. All of the above',
      ],
      correctAnswerIndex: 1,
      explanation:
        'The primary goal of data compression is to reduce data size for efficient storage and transmission.',
    },
    {
      id: '17',
      text: 'The ______ statement causes a loop to terminate immediately.',
      options: ['a. Continue', 'b. Goto', 'c. Break', 'd. Jump'],
      correctAnswerIndex: 2,
      explanation:
        'The break statement exits the nearest enclosing loop immediately.',
    },
    {
      id: '18',
      text: 'Which of the following can be a heuristic for grouping objects into subsystems?',
      options: [
        'a. Assign objects identified in one use case into the same subsystem.',
        'b. Create a dedicated subsystem for objects used for moving data among subsystems.',
        'c. Minimize the number of associations crossing subsystem boundaries.',
        'd. All of the above',
      ],
      correctAnswerIndex: 3,
      explanation:
        'All these strategies are valid heuristics for subsystem decomposition in software design.',
    },
    {
      id: '19',
      text: 'The term Push and Pop is related to______.',
      options: ['a. Queue', 'b. Stack', 'c. Both', 'd. None'],
      correctAnswerIndex: 1,
      explanation:
        'Push adds an item to the top of a stack, while Pop removes the top item - fundamental stack operations.',
    },
    {
      id: '20',
      text: 'Which one of the following statements is false?',
      options: [
        'a. A sentence is said to be invalid if it is unsatisfiable.',
        'b. A sentence is valid if it is satisfiable.',
        'c. A sentence which is not invalid is satisfiable.',
        'd. A sentence is unsatisfiable if it is false in all models.',
      ],
      correctAnswerIndex: 1,
      explanation:
        'A valid sentence must be true in all models, not just satisfiable (true in some models).',
    },
    {
      id: '21',
      text: 'Which PHP code snippet retrieves data from a MySQL database?',
      options: [
        'a. $result = mysql_query("SELECT * FROM users WHERE id = 1");',
        'b. $result=mysqlquery(conn, "SELECT * FROM users WHERE id = 1");',
        'c. $result = $pdo->query("SELECT * FROM users WHERE id = 1");',
        'd. $result = pg_query("SELECT * FROM users WHERE id = 1");',
      ],
      correctAnswerIndex: 1,
      explanation:
        'The correct MySQL query syntax uses mysqlquery() with connection parameter first.',
    },
    {
      id: '22',
      text: 'Which JavaScript snippet adds a new element to an HTML document?',
      options: [
        'a. element.appendChild(document.createTextNode("Hello, world!"));',
        'b. var element = document.createElement("div");',
        'c. document.body.appendChild(element);',
        'd. document.getElementById("container").appendChild(element);',
      ],
      correctAnswerIndex: 1,
      explanation:
        'document.createElement() creates a new DOM element that can then be appended.',
    },
    {
      id: '23',
      text: 'Based on the given prototype, MY_AGENT is ______ type of agent.',
      options: [
        'a. Goal based',
        'b. Model based reflex',
        'c. Simple reflex',
        'd. Utility based',
      ],
      correctAnswerIndex: 3,
      explanation:
        'The BEST_ACTION selection indicates utility-based decision making.',
    },
    {
      id: '24',
      text: 'Which statement is true about crackers?',
      options: [
        'a. They attempt to break the system without permissions',
        'b. They are legally employed to break into the system',
        'c. They reveal the information after breaking into the system',
        'd. All',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Crackers are unauthorized individuals who break into systems maliciously.',
    },
    {
      id: '25',
      text: 'Which is not an application of stack data structure?',
      options: [
        'a. String reversal',
        'b. Recursion',
        'c. Backtracking',
        'd. Asynchronous data transfer',
      ],
      correctAnswerIndex: 3,
      explanation: 'Async data transfer typically uses queues, not stacks.',
    },
    {
      id: '26',
      text: 'Which is false about subsystems?',
      options: [
        'a. A physical and replaceable part of the system.',
        'b. It reduces the complexity of the application domain.',
        'c. Decompose a system into simpler parts.',
        'd. Well-defined interfaces that encapsulate the state and behavior of its contained classes.',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Subsystems reduce implementation complexity, not domain complexity.',
    },
    {
      id: '27',
      text: 'How many minimal states may a DFA require for strings ending with an n-length substring?',
      options: ['a. n', 'b. n+1', 'c. n+2', 'd. n*2'],
      correctAnswerIndex: 1,
      explanation:
        'Requires n states to remember last n symbols plus 1 initial state.',
    },
    {
      id: '28',
      text: 'Which firewall filters based on port numbers and protocol?',
      options: [
        'a. Packet Filtering',
        'b. Proxy Service',
        'c. Stateful Inspection',
        'd. Threat-Focused NGFW',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Stateful inspection firewalls track connections and filter based on port/protocol rules.',
    },
    {
      id: '29',
      text: 'Which is an example of Usability requirements?',
      options: [
        'a. User interface',
        'b. Robustness',
        'c. Mean time to failure',
        'd. Adaptability',
      ],
      correctAnswerIndex: 0,
      explanation: 'UI design is a core usability concern.',
    },
    {
      id: '30',
      text: '______ is an alternative to log-based recovery.',
      options: [
        'a. Disk recovery',
        'b. Shadow paging',
        'c. Disk shadowing',
        'd. Crash recovery',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Shadow paging maintains two page tables for recovery without logs.',
    },
    {
      id: '31',
      text: 'Which IP address tests the local IP stack?',
      options: [
        'a. 127.0.0.1',
        'b. 1.0.0.127',
        'c. 127.0.0.0',
        'd. 127.0.0.255',
      ],
      correctAnswerIndex: 0,
      explanation: '127.0.0.1 is the loopback address for localhost testing.',
    },
    {
      id: '32',
      text: 'Why is determining exact program runtime difficult?',
      options: [
        'a. Processor speed',
        'b. Current processor load',
        'c. Input size of the given algorithm',
        'd. All',
      ],
      correctAnswerIndex: 3,
      explanation: 'All these factors affect actual runtime measurements.',
    },
    {
      id: '33',
      text: 'Which is not a purpose of the super keyword?',
      options: [
        'a. Refer to the current object',
        'b. Call superclass constructor',
        'c. Access hidden variables',
        'd. Invoke superclass method with the same name as the subclass method',
      ],
      correctAnswerIndex: 0,
      explanation:
        'The "this" keyword refers to the current object, not "super".',
    },
    {
      id: '34',
      text: 'What is "ATTACK" encrypted with Caesar cipher (key=25)?',
      options: ['a. ZSSZBJ', 'b. ZGGZXP', 'c. ZTTZAK', 'd. BGGBDL'],
      correctAnswerIndex: 0,
      explanation:
        'Each letter is shifted 25 positions backward in the alphabet.',
    },
    {
      id: '35',
      text: 'A translator that translates a single-line instruction at a time is:',
      options: ['a. Compiler', 'b. Assembler', 'c. Interpreter', 'd. Linker'],
      correctAnswerIndex: 2,
      explanation:
        'Interpreters execute code line-by-line rather than translating entire programs.',
    },
    {
      id: '36',
      text: 'What is an operating system?',
      options: [
        'a. Interface between the hardware and application programs',
        'b. Collection of programs that manages hardware resources',
        'c. System service provider to the application programs',
        'd. All of the mentioned',
      ],
      correctAnswerIndex: 3,
      explanation: 'An OS performs all these fundamental functions.',
    },
    {
      id: '37',
      text: 'Why is Hardware RAID recommended for performance?',
      options: [
        'a. A physical storage device that is built into a system',
        'b. Can appear as a single hard disk in the system',
        'c. There is no difference between regular hardware and the RAID devices',
        'd. Can use its own resources',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Hardware RAID has dedicated processors/memory for RAID operations.',
    },
    {
      id: '38',
      text: 'A conceptual level refers to:',
      options: [
        'a. Describes the represents global view of the entire database',
        'b. Describes the part of the database that a particular user group views of the data environment',
        'c. Describes how data is actually stored on disk',
        'd. Describes the physical storage structure of the database',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Conceptual schema provides an integrated, global view of the database.',
    },
    {
      id: '39',
      text: 'Which MTA protocols enable mail access from MDA?',
      options: ['a. POP3', 'b. IMAP', 'c. SMTP', 'd. Both POP3 and IMAP'],
      correctAnswerIndex: 3,
      explanation: 'Both POP3 and IMAP are mail retrieval protocols.',
    },
    {
      id: '40',
      text: 'Which has the same name as the class name?',
      options: [
        'a. Method',
        'b. Variable',
        'c. Constructor',
        'd. Package name',
      ],
      correctAnswerIndex: 2,
      explanation: 'Constructors share their class name in most OOP languages.',
    },
    {
      id: '41',
      text: 'An AI agent acts upon the environment using ______.',
      options: [
        'a. Sensors',
        'b. Effectors',
        'c. Actuators',
        'd. Manipulators',
      ],
      correctAnswerIndex: 0,
      explanation: 'Sensors allow agents to perceive their environment.',
    },
    {
      id: '42',
      text: 'Which includes an external JavaScript file in HTML?',
      options: [
        'a. <script href="file.js"></script>',
        'b. <link rel="stylesheet" href="file.js">',
        'c. <script type="text/javascript" src="file.js"></script>',
        'd. <link rel="stylesheet" type="text/javascript" href="file.js">',
      ],
      correctAnswerIndex: 2,
      explanation:
        'The <script> tag with src attribute is correct for including external JS.',
    },
    {
      id: '43',
      text: 'How many tokens are in: for (int i = 0; i <= 10; i++)',
      options: ['a. 4', 'b. 5', 'c. 9', 'd. 10'],
      correctAnswerIndex: 2,
      explanation: 'Tokens: for, (, int, i, =, 0, ;, i, <=, 10, ;, i, ++, )',
    },
    {
      id: '44',
      text: 'Which is not correct about finite Automaton?',
      options: [
        'a. Finite automaton accept a string or word by final state',
        'b. Finite Automaton has at least one final state',
        'c. Finite Automaton has at least one initial state',
        'd. Deterministic Finite Automaton has a single transition.',
      ],
      correctAnswerIndex: 3,
      explanation:
        'DFAs have exactly one transition per state/symbol pair, but the statement is too absolute.',
    },
    {
      id: '45',
      text: 'Which defines webpage structure in HTML?',
      options: ['a. Tags', 'b. Classes', 'c. IDs', 'd. Styles'],
      correctAnswerIndex: 0,
      explanation: 'HTML tags define the document structure and content.',
    },
    {
      id: '46',
      text: 'Which ensures transaction atomicity?',
      options: [
        'a. Transaction management component of DBMS',
        'b. Application Programmer',
        'c. Concurrency control component of DBMS',
        'd. Recovery management component of DBMS',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Recovery management ensures transactions complete entirely or not at all.',
    },
    {
      id: '47',
      text: 'After understanding user needs, what is the next database design step?',
      options: [
        'a. Logical design',
        'b. Normalization',
        'c. Query Processing',
        'd. Conceptual design',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Conceptual design creates an abstract model before logical design.',
    },
    {
      id: '48',
      text: 'Which is true about the class concept?',
      options: [
        'a. The role of a class is to define the attributes and methods.',
        'b. Class is used to distinguish one type of object from another.',
        'c. A set of objects that share common methods, structure, and behavior.',
        'd. All of the above',
      ],
      correctAnswerIndex: 3,
      explanation:
        'All statements accurately describe class characteristics in OOP.',
    },
    {
      id: '49',
      text: 'Which data structure has minimum access time for symbol tables?',
      options: [
        'a. Self-organizing list',
        'b. Hash table',
        'c. Search tree',
        'd. Linear',
      ],
      correctAnswerIndex: 1,
      explanation: 'Hash tables provide O(1) average-case access time.',
    },
    {
      id: '50',
      text: 'The data link layer divides bits into manageable units called ______?',
      options: ['a. Bits', 'b. Frames', 'c. Packets', 'd. Segments'],
      correctAnswerIndex: 1,
      explanation:
        'Data link layer organizes bits into frames for reliable node-to-node delivery.',
    },
    {
      id: '51',
      text: 'Which is a Dynamic Programming algorithm?',
      options: [
        'a. Breadth First Search',
        'b. Depth First Search',
        "c. Dijkstra's Algorithm",
        'd. Knapsack Problem',
      ],
      correctAnswerIndex: 2,
      explanation:
        "Dijkstra's uses dynamic programming to find shortest paths.",
    },
    {
      id: '52',
      text: 'Regarding the nested if-else structure, which statement is true?',
      options: [
        'a. Syntactically, it is invalid to have more if clauses than else clauses.',
        'b. Statement2 will only execute if condition1 is false and condition2 is false.',
        'c. Statement2 will only execute if condition1 is true and condition2 is false.',
        'd. Statement2 will only execute if condition1 is false, it does not matter what condition2 is.',
      ],
      correctAnswerIndex: 2,
      explanation:
        'The else binds to the nearest if, so statement2 executes when condition1 is true and condition2 false.',
    },
    {
      id: '53',
      text: 'What should be considered when designing an algorithm?',
      options: [
        'a. If the hardware is used correctly.',
        'b. If the software is used correctly.',
        'c. If there is more than one way to solve the problem.',
        'd. All of the above',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Algorithm design focuses on problem-solving approaches, not implementation details.',
    },
    {
      id: '54',
      text: 'How is encapsulation achieved in Java?',
      options: [
        'a. Declare the variables of a class as private.',
        "b. Provide public setter and getter methods to modify and view the variable's values.",
        'c. By using an Interface.',
        'd. A & B',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Encapsulation combines private data with public accessor methods.',
    },
    {
      id: '55',
      text: 'Which is a collection of statements performing a specific operation?',
      options: ['a. Class', 'b. Package', 'c. Variable', 'd. Method'],
      correctAnswerIndex: 3,
      explanation: 'Methods encapsulate behavior as sequences of statements.',
    },
    {
      id: '56',
      text: 'Which creates dynamic content in PHP?',
      options: ['a. Functions', 'b. Variables', 'c. Classes', 'd. Objects'],
      correctAnswerIndex: 0,
      explanation:
        'PHP functions enable server-side processing and dynamic content generation.',
    },
    {
      id: '57',
      text: 'Which is a common JavaScript library for interactive web interfaces?',
      options: ['a. jQuery', 'b. React', 'c. Angular', 'd. Vue.js'],
      correctAnswerIndex: 0,
      explanation:
        'jQuery is widely used for DOM manipulation and AJAX interactions.',
    },
    {
      id: '58',
      text: 'Which is a Dynamic Programming algorithm?',
      options: [
        'a. Breadth First Search',
        'b. Depth First Search',
        "c. Dijkstra's Algorithm",
        'd. Knapsack Problem',
      ],
      correctAnswerIndex: 2,
      explanation: "Dijkstra's algorithm uses dynamic programming principles.",
    },
    {
      id: '59',
      text: 'In distributed transactions, commit point strength determines role in ______.',
      options: [
        'a. Two-phase commit',
        'b. Transaction locking',
        'c. Two-phase locking',
        'd. Checkpoints',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Commit point strength determines coordinator/participant roles in 2PC.',
    },
    {
      id: '60',
      text: 'Which CSS creates responsive design for mobile?',
      options: [
        'a. @media screen and (min-width: 768px) { ... }',
        'b. .container { display: flex; }',
        'c. box { transform: rotate(45deg); }',
        'd. .menu { background-color: #foo; }',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Flexbox layout adapts content flow responsively across screen sizes.',
    },
    {
      id: '61',
      text: 'Why is query processing and optimization important?',
      options: [
        'a. Both are used to process SQL statements to return answers.',
        'b. Both help the user retrieve results from the database based on time.',
        'c. Both improve the performance of the database by efficiently executing a query.',
        'd. Both are important in executing queries to access information from the DB.',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Optimization focuses on efficient query execution plans for performance.',
    },
    {
      id: '62',
      text: 'In linked list queue implementation, where are new elements inserted?',
      options: [
        'a. At the middle position of the linked list.',
        'b. At the head position of the linked list.',
        'c. At the tail position of the linked list.',
        'd. None of the above.',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Queues insert at tail (enqueue) and remove from head (dequeue).',
    },
    {
      id: '63',
      text: 'Which state is final for L = {x∈∑ = {a, b} | length of x is at least 2}?',
      options: ['a. Q0', 'b. Q1', 'c. Q2', 'd. Q3'],
      correctAnswerIndex: 2,
      explanation: 'Q2 represents having seen at least 2 symbols.',
    },
    {
      id: '64',
      text: 'What is lexical analysis?',
      options: [
        'a. Breaking a sequence of characters into packets.',
        'b. Breaking a sequence of characters into groups.',
        'c. Breaking a sequence of characters into tokens.',
        'd. Breaking a sequence of characters into lines.',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Lexical analysis converts character streams into tokens (identifiers, keywords, etc).',
    },
    {
      id: '65',
      text: 'Which stores user data server-side in web apps?',
      options: [
        'a. Cookies',
        'b. Sessions',
        'c. Local storage',
        'd. IndexedDB',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Sessions store data on the server, unlike client-side storage options.',
    },
    // Continuing questions 66-99...
    {
      id: '66',
      text: 'What is the objective of a Serializable schedule?',
      options: [
        'a. Find a Non-serial schedule that allows the interleaving of a transaction and produces the same result as a serial schedule.',
        'b. Find a Serial schedule that allows the interleaving of a transaction and produces the same result as a serial schedule.',
        "c. Find a Serial schedule that doesn't allow the interleaving of a transaction and produces the same result as a serial schedule.",
        "d. Find a Non-serial schedule that doesn't allow the interleaving of a transaction and produces the same result as a serial schedule.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Serializability ensures concurrent schedules match some serial execution's results.",
    },
    {
      id: '67',
      text: 'How do we measure algorithm space efficiency?',
      options: [
        'a. Count the maximum memory required by the algorithm.',
        'b. Count the minimum memory required by the algorithm.',
        'c. Count the average memory required by the algorithm.',
        'd. Count the maximum disk space needed by the algorithm.',
      ],
      correctAnswerIndex: 0,
      explanation: 'Space complexity measures worst-case memory usage.',
    },
    {
      id: '68',
      text: 'All are substitution cipher properties except:',
      options: [
        'a. The identity of the letters is changed in the encryption process.',
        'b. The position of the letters is changed in the encryption process.',
        'c. Uses the same key for the encryption and decryption process.',
        'd. It has a secure key distribution problem.',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Changing letter positions is a transposition cipher characteristic.',
    },
    {
      id: '69',
      text: 'Which register holds instruction addresses?',
      options: [
        'a. Accumulator',
        'b. Instruction register',
        'c. Address register',
        'd. Program counter',
      ],
      correctAnswerIndex: 3,
      explanation:
        'The program counter (PC) tracks the next instruction address.',
    },
    {
      id: '70',
      text: 'Which is not true?',
      options: [
        'a. Object Identifier is immutable.',
        'b. Type constructor is used to create a new object.',
        'c. Tuple is a collection of records.',
        'd. The atom constructor is a multi-value constructor.',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Atom constructors create single values, not multi-value structures.',
    },
    {
      id: '71',
      text: 'Which logic gate output equals its input?',
      options: ['a. NAND', 'b. NOR', 'c. Exclusive-OR', 'd. Buffer'],
      correctAnswerIndex: 3,
      explanation: 'Buffers output their input value unchanged.',
    },
    {
      id: '72',
      text: 'When should we check for deadlock in an OS?',
      options: [
        'a. Every time a resource request is made at fixed time intervals.',
        'b. At fixed time intervals.',
        'c. Every time a resource request is made.',
        'd. None of the mentioned.',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Combining periodic and request-triggered checks balances overhead and safety.',
    },
    {
      id: '73',
      text: 'Which environment is most challenging for agents?',
      options: [
        'a. Fully observable, discrete, episodic, static.',
        'b. Static, episodic, continuous, partially observable.',
        'c. Partially observable, non-deterministic, non-episodic, dynamic, continuous.',
        'd. Deterministic, sequential (non-episodic), dynamic, continuous.',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Partial observability, non-determinism, and continuity maximize agent challenges.',
    },
    {
      id: '74',
      text: 'Finite automaton recognizes:',
      options: [
        'a. Any class of language.',
        'b. Context-free language.',
        'c. Context-sensitive languages.',
        'd. Regular languages.',
      ],
      correctAnswerIndex: 3,
      explanation: 'Finite automata characterize regular languages.',
    },
    {
      id: '75',
      text: 'What does a top-down parser generate?',
      options: [
        'a. Rightmost derivation in reverse.',
        'b. Rightmost derivation.',
        'c. Leftmost derivation in reverse.',
        'd. Leftmost derivation.',
      ],
      correctAnswerIndex: 3,
      explanation: 'Top-down parsers construct leftmost derivations.',
    },
    // Continuing questions 76-99...
    {
      id: '76',
      text: 'What does the given Java function output when called?',
      options: [
        'a. If `a` and `b` are both true, then the output is "A && B".',
        'b. If `a` is true and `b` is false, then the output is "!B".',
        'c. If `a` is false and `b` is true, then the output is "None".',
        'd. If `a` and `b` are both false, then the output is "None".',
      ],
      correctAnswerIndex: 2,
      explanation:
        'The else-if can never be reached (if a is false, a&&b is false).',
    },
    {
      id: '77',
      text: 'Which is a valid variable name?',
      options: ['a. T-3', 'b. GGGGG', 'c. float', 'd. 4thInput'],
      correctAnswerIndex: 1,
      explanation:
        'GGGGG follows naming rules (starts with letter, alphanumeric).',
    },
    {
      id: '78',
      text: 'What error does the C compiler report for line 3?',
      options: [
        'a. Only syntax error.',
        'b. No compilation error.',
        'c. Only lexical error.',
        'd. Both lexical and syntax error.',
      ],
      correctAnswerIndex: 0,
      explanation:
        '"fro" instead of "for" is a syntax error (valid token but incorrect usage).',
    },
    {
      id: '79',
      text: 'What is the maximum host IPs for 255.255.255.224 subnet?',
      options: ['a. 14', 'b. 32', 'c. 24', 'd. 30'],
      correctAnswerIndex: 3,
      explanation:
        '/27 subnet (224 mask) has 32-2=30 host addresses (subtract network/broadcast).',
    },
    {
      id: '80',
      text: 'What are the values of A[1][1], A[2][3], and A[3][3]?',
      options: ['a. 7, 6, 3', 'b. 6, 6, 2', 'c. 6, 2, 6', 'd. 2, 6, 6'],
      correctAnswerIndex: 1,
      explanation:
        'Java arrays are 0-indexed: A[1][1]=6, A[2][3]=6, A[3][3]=2.',
    },
    // Continuing questions 81-99...
    {
      id: '81',
      text: 'Which is a Nonfunctional requirement?',
      options: [
        'a. Admin can upload photos',
        'b. Admin can search book',
        'c. Librarian can delete student',
        'd. The system delivers the search items within 2 seconds',
      ],
      correctAnswerIndex: 3,
      explanation: 'Performance timing is a quality attribute (nonfunctional).',
    },
    {
      id: '82',
      text: 'Which is false about functional requirements?',
      options: [
        'a. Requirements should complete',
        'b. Requirement should be accurate as possible.',
        'c. Two requirements cannot combine into one.',
        'd. A requirement can be interpreted in many exclusive ways.',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Good requirements have unambiguous, single interpretations.',
    },
    {
      id: '83',
      text: 'Which method can be overridden?',
      options: [
        'a. Abstract method',
        'b. Final Method',
        'c. Private method',
        'd. Static method',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Abstract methods must be overridden by concrete subclasses.',
    },
    {
      id: '84',
      text: 'What is the maximum children per node in a binary tree?',
      options: ['a. 3', 'b. 1', 'c. 4', 'd. 2'],
      correctAnswerIndex: 3,
      explanation: 'Binary trees restrict nodes to at most 2 children.',
    },
    {
      id: '85',
      text: 'If transaction A holds a shared lock R, what happens when B requests a shared lock on R?',
      options: [
        'a. It will result in a deadlock situation',
        'b. It will be granted as soon as it is released by A',
        'c. It will immediately be granted',
        'd. It will immediately be rejected',
      ],
      correctAnswerIndex: 2,
      explanation: 'Shared locks allow concurrent read access.',
    },
    {
      id: '81',
      text: 'Which is a Nonfunctional requirement?',
      options: [
        'a. Admin can upload photos',
        'b. Admin can search book',
        'c. Librarian can delete student',
        'd. The system delivers the search items within 2 seconds',
      ],
      correctAnswerIndex: 3,
      explanation: 'Performance timing is a quality attribute (nonfunctional).',
    },
    {
      id: '82',
      text: 'Which is false about functional requirements?',
      options: [
        'a. Requirements should complete',
        'b. Requirement should be accurate as possible.',
        'c. Two requirements cannot combine into one.',
        'd. A requirement can be interpreted in many exclusive ways.',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Good requirements have unambiguous, single interpretations.',
    },
    {
      id: '83',
      text: 'Which method can be overridden?',
      options: [
        'a. Abstract method',
        'b. Final Method',
        'c. Private method',
        'd. Static method',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Abstract methods must be overridden by concrete subclasses.',
    },
    {
      id: '84',
      text: 'What is the maximum children per node in a binary tree?',
      options: ['a. 3', 'b. 1', 'c. 4', 'd. 2'],
      correctAnswerIndex: 3,
      explanation: 'Binary trees restrict nodes to at most 2 children.',
    },
    {
      id: '85',
      text: 'If transaction A holds a shared lock R, what happens when B requests a shared lock on R?',
      options: [
        'a. It will result in a deadlock situation',
        'b. It will be granted as soon as it is released by A',
        'c. It will immediately be granted',
        'd. It will immediately be rejected',
      ],
      correctAnswerIndex: 2,
      explanation: 'Shared locks allow concurrent read access.',
    },
    // Continuing questions 86-99...
    {
      id: '86',
      text: 'The operating system is responsible for?',
      options: [
        'a. bad-block recovery',
        'b. booting from disk',
        'c. disk initialization',
        'd. all of the mentioned',
      ],
      correctAnswerIndex: 3,
      explanation: 'OS handles all these low-level storage management tasks.',
    },
    {
      id: '87',
      text: 'In the dirty read problem, one transaction reads:',
      options: [
        'a. an uncommitted value of another transaction',
        'b. the committed value for another transaction',
        'c. another transaction',
        'd. one transaction commits another transaction',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Dirty reads access uncommitted, potentially rolled-back data.',
    },
    {
      id: '88',
      text: 'All are properties of integrity goal except:',
      options: [
        'a. Ensures there was an authorized modification',
        'b. Keep resources from active attacks',
        'c. Integrity can be compromised by Deception',
        'd. Integrity can be compromised by Disclosure',
      ],
      correctAnswerIndex: 3,
      explanation: 'Disclosure violates confidentiality, not integrity.',
    },
    {
      id: '89',
      text: 'How do we measure algorithm space efficiency?',
      options: [
        'a. To count the maximum memory required by the algorithm',
        'b. To count the minimum memory required by the algorithm',
        'c. To count the average memory required by the algorithm',
        'd. To count the maximum disk space needed by the algorithm',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Space complexity analysis focuses on worst-case memory requirements.',
    },
    {
      id: '90',
      text: 'When does a page fault occur?',
      options: [
        'a. The page is present in memory.',
        'b. Deadlock occurs.',
        'c. The page does not present in memory.',
        'd. Buffering occurs.',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Page faults trigger when accessing virtual memory not resident in physical RAM.',
    },
    {
      id: '91',
      text: 'Which is not LAN technology?',
      options: [
        'a. Token Ring',
        'b. Ethernet',
        'c. X.25 or Frame Relay',
        'd. None',
      ],
      correctAnswerIndex: 2,
      explanation: 'X.25 and Frame Relay are WAN technologies.',
    },

    {
      id: '100',
      text: 'Which one of the following is a supervised machine learning task?',
      options: [
        'a. Summarization',
        'b. Time series analysis',
        'c. Sequence discovery',
        'd. Clustering',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Time series analysis typically uses labeled historical data, making it a supervised learning task.',
    },
  ],
}

export default exitModel2
