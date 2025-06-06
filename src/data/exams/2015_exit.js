const exitExam2015 = {
  id: 'exit_exam_2015',
  title: 'Exit 2015',
  year: 2015,
  type: 'final',
  image: 'ju.png',
  questions: [
    {
      id: '1',
      text: 'Which parameter is used to assess and evaluate software architectures?',
      options: [
        'Responsiveness of Architectures',
        'Durability of Architectures',
        'Architectural quality in attribute',
        'Number of components in the Architecture',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Architectural quality attributes are the primary metrics for evaluation.',
    },
    {
      id: '3',
      text: 'What we use to pass the data between activities in Android?',
      options: [
        'Broadcast receiver',
        'PostgreSQL Database',
        'Intent',
        'Content provider',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Intents are the messaging objects used for communication between Android components.',
    },
    {
      id: '4',
      text: 'Given the Student class UML diagram, which instantiation would NOT raise an error?',
      options: [
        'Student st1 = new Student("john", "SE", "0913222222", 20)',
        'st1 Student = new Student("john", "CS", "02085332455", 23)',
        'Student st1 = new Student("john", "IT", "2000")',
        'Student st1 = new Student("john", "CS", "0913222222", "25")',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Only option A provides all required parameters with correct data types.',
    },
    {
      id: '5',
      text: 'What will be the output of: var a = "exitexam"; var result = a.substring(2,6);',
      options: ['texam', 'xite', 'itex', 'xitex'],
      correctAnswerIndex: 2,
      explanation:
        'substring(2,6) extracts characters from index 2 to 5 ("itex").',
    },
    {
      id: '6',
      text: 'Which one is wrong regarding interfaces?',
      options: [
        'Like a class, an interface is reference data type',
        'Interface abstract methods are accessed using interface instances',
        'Interface includes abstract methods',
        'One class can implement multiple interfaces',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Interface methods are implemented by classes, not accessed via interface instances.',
    },
    {
      id: '8',
      text: 'Which SQL statement correctly inserts tuples to Hotel relation?',
      options: [
        "INSERT INTO HOTEL (Hotel_id, Hotel_name, Sub_city) VALUES ('Hilton','Yeka')",
        "INSERT INTO HOTEL (Hotel_id, Hotel_name, Sub_city) VALUES (1,'Hilton','Yeka')",
        "INSERT INTO HOTEL (1,'Hilton','Yeka')",
        "INSERT Values INTO HOTEL(Hotel_id, Hotel_name, Sub_city) VALUES (1,'Hilton','Yeka')",
      ],
      correctAnswerIndex: 1,
      explanation:
        'Correct SQL INSERT syntax includes column names and values for all required fields.',
    },
    {
      id: '10',
      text: "Correct sequence of Tuckman's team development stages:",
      options: [
        'forming, storming, performing, norming and adjourning',
        'norming, forming, storming, performing and adjourning',
        'storming, forming, norming, performing and adjourning',
        'forming, storming, norming, performing and adjourning',
      ],
      correctAnswerIndex: 3,
      explanation:
        'The established sequence is forming → storming → norming → performing → adjourning.',
    },
    {
      id: '11',
      text: 'Correct difference between functional and non-functional requirements:',
      options: [
        'Unlike functional requirement, non-functional requirement is stable',
        'Both are the same most of the time',
        'Functional are decided by customer, non-functional by developers',
        'Functional are system services, non-functional are constraints',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Functional requirements define what the system does, non-functional define how it does it.',
    },
    {
      id: '13',
      text: 'Given benefits=120,000 and costs=100,000, what is ROI percentage?',
      options: ['20%', '12%', '30%', '10%'],
      correctAnswerIndex: 0,
      explanation: 'ROI = ((120,000 - 100,000)/100,000)*100 = 20%.',
    },
    {
      id: '14',
      text: 'A queue where the most recently added item is first out is:',
      options: [
        'LIFO queue',
        'FIFO queue',
        'Real time queue',
        'Priority queue',
      ],
      correctAnswerIndex: 0,
      explanation: 'LIFO (Last-In-First-Out) describes stack behavior.',
    },
    {
      id: '17',
      text: 'Firewall in WAN-connected systems is used to:',
      options: [
        'Fire spreading via network cables',
        'Avoid fire spreading in the network',
        'Stop unauthorized access by hackers',
        'Scan for viruses in files',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Firewalls control network traffic to prevent unauthorized access.',
    },
    {
      id: '18',
      text: 'The permission -rwxr-r-- in octal is:',
      options: ['766', '700', '744', '755'],
      correctAnswerIndex: 2,
      explanation:
        'rwxr-r-- translates to 111 100 100 in binary = 744 in octal.',
    },
    {
      id: '19',
      text: 'Correct order of packet data units from OSI bottom to top:',
      options: [
        'Segment, Packet, Frame, Bit',
        'Segment, Frame, Packet, Bit',
        'Bit, Frame, Packet, Segment',
        'Bit, Packet, Frame, Segment',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Physical=Bit → Data Link=Frame → Network=Packet → Transport=Segment.',
    },
    {
      id: '20',
      text: 'True about triple DES:',
      options: [
        '192-bit keys on 64-bit blocks of plain text',
        'Uses 128-bit blocks of plain text and 92-bit keys',
        'Work with 192-bit blocks of plain text',
        '64-bit blocks of plain text and 56-bit keys applied thrice',
      ],
      correctAnswerIndex: 3,
      explanation:
        '3DES applies DES algorithm three times with 56-bit keys on 64-bit blocks.',
    },
    {
      id: '22',
      text: 'An HTTP request message always contains:',
      options: [
        'A status line, a header, and a body',
        'A header only',
        'A header and a body',
        'A request line and a header',
      ],
      correctAnswerIndex: 3,
      explanation:
        'HTTP requests consist of request line (method, URI, version) + headers.',
    },
    {
      id: '23',
      text: 'Unauthorized disclosure of information refers to:',
      options: [
        'Authorization',
        'Authentication',
        'Integrity',
        'Confidentiality',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Confidentiality protects against unauthorized information disclosure.',
    },
    {
      id: '24',
      text: 'Entity that perceives environment through sensors and acts through effectors:',
      options: ['Agent', 'Expert System', 'Intelligence', 'API'],
      correctAnswerIndex: 0,
      explanation:
        'Agents are autonomous entities that perceive and act on environments.',
    },
    {
      id: '25',
      text: 'For Pet family with Dogs/Cats sharing behaviors, which OOP principle fits?',
      options: [
        'Information hiding',
        'Encapsulation',
        'Polymorphism',
        'Inheritance',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Inheritance allows sharing common behaviors while extending specific ones.',
    },
    {
      id: '26',
      text: "Which statement is NOT correct about the banker's algorithm?",
      options: [
        'It considers each request before it occurs',
        'It is an extension of the deadlock detection algorithm',
        'It is modeled on how bankers deal with lines of credit',
        'It is a scheduling algorithm',
      ],
      correctAnswerIndex: 3,
      explanation:
        "The banker's algorithm is for deadlock avoidance, not process scheduling.",
    },
    {
      id: '27',
      text: 'An informed search algorithm with exponential worst-case time complexity that guarantees optimality is:',
      options: [
        'A* search',
        'Greedy best-first search',
        'Uniform cost search',
        'Iterative deepening A* search',
      ],
      correctAnswerIndex: 0,
      explanation:
        'A* search provides optimal solutions but has exponential complexity in worst cases.',
    },
    {
      id: '28',
      text: 'The principle that 80% of problems can be fixed with 20% effort is called:',
      options: [
        'Pareto principle',
        'Parametric principle',
        'Pairwise principle',
        'Partition principle',
      ],
      correctAnswerIndex: 0,
      explanation:
        'The Pareto principle (80/20 rule) describes this unequal distribution.',
    },
    {
      id: '29',
      text: 'Correct sequence of model development in data mining:',
      options: [
        'Model training, Model Testing, Model Evaluation, Model Deployment',
        'Model Evaluation, Model training, Model Testing, Model Deployment',
        'Model training, Model Testing, Model Deployment, Model Evaluation',
        'Model training, Model Evaluation, Model Testing, Model Deployment',
      ],
      correctAnswerIndex: 0,
      explanation: 'Standard sequence is train → test → evaluate → deploy.',
    },
    {
      id: '30',
      text: 'Which method has the same name as its class?',
      options: ['delete', 'class', 'constructor', 'finalize'],
      correctAnswerIndex: 2,
      explanation: 'Constructors share the class name and initialize objects.',
    },
    {
      id: '31',
      text: 'In OAuth, which component validates user identity?',
      options: ['Authorization server', 'Resource server', 'Browser', 'Client'],
      correctAnswerIndex: 0,
      explanation: 'Authorization servers authenticate users and issue tokens.',
    },
    {
      id: '32',
      text: 'Output of the given Java array program:',
      options: ['3,4', '3,4,5', '3,4,5,6,7', '3,4,5,6'],
      correctAnswerIndex: 1,
      explanation:
        'Loop runs from index 0 to length-2 (indices 0,1,2 for values 3,4,5).',
    },
    {
      id: '33',
      text: 'A relation with no multivalued attributes or partial dependencies is in:',
      options: ['1NF', '3NF', '4NF', '2NF'],
      correctAnswerIndex: 1,
      explanation:
        '3NF requires no transitive dependencies and eliminates partial dependencies.',
    },
    {
      id: '34',
      text: 'Technique for generating plans with conditionals from logical specifications:',
      options: [
        'Automatic programming',
        'Automatic monitoring',
        'Automatic recursive',
        'Automatic learning',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Automatic programming generates executable code from specifications.',
    },
    {
      id: '35',
      text: 'Which is a valid C++ identifier?',
      options: ['7variable', '7VARIABLE', 'variable', 'variable_1234'],
      correctAnswerIndex: 3,
      explanation:
        'Valid identifiers start with a letter/underscore and contain alphanumerics.',
    },
    {
      id: '36',
      text: 'True about abstract classes:',
      options: [
        'Cannot be inherited',
        'Mechanism of encapsulation',
        'Cannot be instantiated',
        'Can contain both abstract and non-abstract methods',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Abstract classes require subclassing and cannot be instantiated directly.',
    },
    {
      id: '37',
      text: 'In risk management, accepting risk without action is called:',
      options: [
        'Risk transfer',
        'Risk retention',
        'Risk avoidance',
        'Risk reduction',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Risk retention means acknowledging risk without mitigation.',
    },
    {
      id: '38',
      text: 'After I/O completion, a blocked process moves to:',
      options: ['Suspended', 'Terminated', 'Running', 'Ready'],
      correctAnswerIndex: 3,
      explanation: 'Process moves to ready queue waiting for CPU allocation.',
    },
    {
      id: '39',
      text: 'Architecture description using fine-grain components applies to:',
      options: ['Availability', 'Maintainability', 'Performance', 'Security'],
      correctAnswerIndex: 1,
      explanation:
        'Fine-grained components improve modifiability (maintainability).',
    },
    {
      id: '40',
      text: 'Which slogan contradicts agile philosophy?',
      options: [
        'Following a plan over responding to changes',
        'Individuals and interactions over processes and tools',
        'Customer collaboration over contract negotiation',
        'Working software over comprehensive documentation',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Agile values responding to change over following fixed plans.',
    },
    {
      id: '41',
      text: 'APK stands for:',
      options: [
        'Android Package Kit',
        'Android Platform Kit',
        'Android Phone Kit',
        'Android Page Kit',
      ],
      correctAnswerIndex: 0,
      explanation: "APK is Android's application package file format.",
    },
    {
      id: '42',
      text: 'Main goal of software testing:',
      options: [
        'Achieve project deadlines',
        'Generate documentation',
        'Verify software meets requirements',
        'Monitor SDLC',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Testing validates that requirements are correctly implemented.',
    },
    {
      id: '43',
      text: 'Correct for loop structure:',
      options: [
        'for(initialization; condition)',
        'for(increment/decrement; initialization; condition)',
        'for(condition, initialization, increment/decrement)',
        'for(initialization; condition; increment/decrement)',
      ],
      correctAnswerIndex: 3,
      explanation: 'Standard syntax: for(init; condition; increment).',
    },
    {
      id: '44',
      text: 'Incorrect about algorithm development:',
      options: [
        'Consider execution platforms',
        'Step-wise logical description',
        'Depend on programming language details',
        'Equivalent to program code',
      ],
      correctAnswerIndex: 3,
      explanation: 'Algorithms are language-agnostic conceptual solutions.',
    },
    {
      id: '45',
      text: 'Consequence of rushed requirement approval:',
      options: [
        'Meets project schedule',
        'Excess requirements',
        'Conflicting requirements',
        'Unambiguous requirements',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Lack of stakeholder coordination leads to requirement conflicts.',
    },
    {
      id: '46',
      text: 'True about ML model development:',
      options: [
        'Focus more on test data',
        'Large training data boosts performance',
        '50-50 train-test overlap',
        'Training set smaller than test set',
      ],
      correctAnswerIndex: 1,
      explanation: 'More training data generally improves model accuracy.',
    },
    {
      id: '47',
      text: 'All Android layout classes subclass:',
      options: [
        'android.view.RelativeLayout',
        'android.view.Layout',
        'android.view.ViewGroup',
        'android.view.Widget',
      ],
      correctAnswerIndex: 2,
      explanation: 'ViewGroup is the base class for all layout managers.',
    },
    {
      id: '48',
      text: 'Output of given C++ code (input 4 and 3):',
      options: ['81', '12', '64', '256'],
      correctAnswerIndex: 2,
      explanation: 'Calculates 4^3 (r=1*4*4*4) due to loop running e=3 times.',
    },
    {
      id: '49',
      text: 'Invalid host address in 172.17.128.0/21:',
      options: [
        '172.17.128.1/21',
        '172.17.135.255/21',
        '172.17.128.255/21',
        '172.17.135.0/21',
      ],
      correctAnswerIndex: 1,
      explanation:
        '172.17.135.255 is the network broadcast address (last in subnet).',
    },
    {
      id: '50',
      text: 'Correct software evolution sequence:',
      options: [
        'Change request → Release planning → Implementation → Impact analysis → Release',
        'Impact analysis → Change request → Implementation → Release planning → Release',
        'Change request → Impact analysis → Implementation → Release planning → Release',
        'Change request → Impact analysis → Release planning → Implementation → Release',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Standard sequence: request → analyze → plan → implement → release.',
    },
    {
      id: '51',
      text: 'Lowest layer of Android architecture:',
      options: [
        'Linux kernel',
        'Database',
        'Application Framework',
        'Application',
      ],
      correctAnswerIndex: 0,
      explanation:
        "The Linux kernel forms the foundation of Android's architecture.",
    },
    {
      id: '52',
      text: 'True about switches vs hubs:',
      options: [
        "Switches don't forward broadcasts",
        'Switches increase collision domains',
        'Switches process frames faster than hubs',
        'Hubs can filter frames',
      ],
      correctAnswerIndex: 1,
      explanation: 'Switches create separate collision domains for each port.',
    },
    {
      id: '53',
      text: 'Incorrect about generalization in system modeling:',
      options: [
        'Higher-level attributes apply to lower-level classes',
        'Common info maintained in one place',
        'Facilitates easy data modification',
        'Higher-level classes are more specific',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Higher-level classes are more general/abstract in generalization hierarchies.',
    },
    {
      id: '54',
      text: 'Process waiting for resource owned by another process:',
      options: ['Deadlock', 'Preemption', 'Overloading', 'Queueing'],
      correctAnswerIndex: 0,
      explanation: 'Deadlock occurs with circular wait for resources.',
    },
    {
      id: '55',
      text: 'Set of processes waiting for resources:',
      options: ['Deadlock', 'Preemption', 'Overloading', 'Queueing'],
      correctAnswerIndex: 0,
      explanation: 'Repeated from Q54 - same concept applies.',
    },
    {
      id: '56',
      text: '"Database is logically coherent collection" implies:',
      options: [
        'All entity attributes should be related',
        'One primary key attribute',
        'Entity must be physical object',
        'Limited number of attributes',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Logical coherence requires all attributes to meaningfully relate to the entity.',
    },
    {
      id: '57',
      text: 'Resource optimization technique balancing demand/supply:',
      options: [
        'Responsibility assignment matrix',
        'Resource smoothing',
        'Resource leveling',
        'Resource grouping',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Resource leveling adjusts schedules to balance resource usage.',
    },
    {
      id: '58',
      text: 'Salesperson analyzing purchase history uses:',
      options: [
        'Regression Modeling',
        'Clustering algorithm',
        'Predictive modeling',
        'Association rule',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Association rules identify frequently co-occurring items (market basket analysis).',
    },
    {
      id: '59',
      text: 'Correct layer ordering without architectural erosion:',
      options: ['(A,B)', '(D,A)', '(A,C)', '(C,B)'],
      correctAnswerIndex: 2,
      explanation:
        'Layers should only depend on lower layers (A→C is valid top-down dependency).',
    },
    {
      id: '60',
      text: 'ACL benefit for security applications:',
      options: [
        'Monitor bytes/packets',
        'High network availability',
        'Virus detection',
        'Classify/organize traffic',
      ],
      correctAnswerIndex: 3,
      explanation: 'ACLs filter and categorize network traffic based on rules.',
    },
    {
      id: '61',
      text: 'Default form submission method:',
      options: ['POST', 'GET', 'PUT', 'SET'],
      correctAnswerIndex: 1,
      explanation: 'GET is the default HTTP method for form submissions.',
    },
    {
      id: '62',
      text: 'Process generating project schedule and WBS:',
      options: [
        'Project Initiating',
        'Project Executing',
        'Project Closing',
        'Project Planning',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Planning phase creates schedules, estimates, and work breakdown structures.',
    },
    {
      id: '63',
      text: 'Tests needed for 100% decision coverage:',
      options: ['6', '4', '2', '1'],
      correctAnswerIndex: 1,
      explanation:
        '4 tests cover all decision paths in the nested if-else structure.',
    },
    {
      id: '64',
      text: 'CSS selector for specific class:',
      options: ['^', '_', '#', '.'],
      correctAnswerIndex: 3,
      explanation: 'Dot prefix (.classname) selects elements by class.',
    },
    {
      id: '65',
      text: 'Test process activity evaluating testability:',
      options: [
        'Test analysis and design',
        'Test analysis and requirements',
        'Test analysis and implementation',
        'Test analysis and planning',
      ],
      correctAnswerIndex: 0,
      explanation: 'Test analysis includes evaluating requirement testability.',
    },
    {
      id: '66',
      text: 'Correct database design sequence:',
      options: [
        'Logical → Enterprise modeling → Physical → Implementation',
        'Enterprise modeling → Logical → Implementation → Physical',
        'Enterprise modeling → Logical → Physical → Implementation',
        'Logical → Enterprise modeling → Physical → Implementation',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Standard sequence: conceptual → logical → physical → implementation.',
    },
    {
      id: '67',
      text: 'Not a purpose of software testing:',
      options: [
        'Identify shortcomings',
        'Improve product acceptance',
        'Enhance reliability',
        'Request more design time',
      ],
      correctAnswerIndex: 3,
      explanation:
        "Testing evaluates quality, doesn't extend development timelines.",
    },
    {
      id: '68',
      text: 'Model for delivering prioritized functionalities:',
      options: [
        'Incremental model',
        'Spiral model',
        'Waterfall model',
        'Linear model',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Incremental development delivers prioritized features in iterations.',
    },
    {
      id: '69',
      text: 'Time complexity of given function:',
      options: ['O(n²)', 'O(logn)', 'O(log2n)', 'O(n)'],
      correctAnswerIndex: 3,
      explanation: 'Single loop with n*10 iterations simplifies to O(n).',
    },
    {
      id: '70',
      text: 'Incorrect about traceability:',
      options: [
        'Shows requirement dependencies',
        'Links requirements to stakeholders',
        'Links design to requirements',
        'Traces all activity costs/schedules',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Traceability focuses on requirements/design relationships, not cost tracking.',
    },
    {
      id: '71',
      text: 'Last step in C++ program development:',
      options: ['Memory allocation', 'Linking', 'Compiling', 'Writing program'],
      correctAnswerIndex: 1,
      explanation:
        'Final step combines object files into executable via linking.',
    },
    {
      id: '72',
      text: 'Design pattern for object state restoration:',
      options: [
        'Visitor pattern',
        'Memento pattern',
        'Observer pattern',
        'Iterator pattern',
      ],
      correctAnswerIndex: 1,
      explanation: 'Memento pattern captures/restores object internal state.',
    },
    {
      id: '73',
      text: 'Standard for secure channel between computers:',
      options: ['SSL', 'SSH', 'AAA', 'SNMP'],
      correctAnswerIndex: 1,
      explanation:
        'SSH (Secure Shell) provides encrypted communication channels.',
    },
    {
      id: '74',
      text: 'Component hiding microservice boundaries:',
      options: ['Layered system', 'API gateway', 'API proxy', 'API logging'],
      correctAnswerIndex: 1,
      explanation:
        'API gateways abstract microservice complexity from clients.',
    },
    {
      id: '75',
      text: 'Architectural design consideration NOT needed:',
      options: [
        'Best organizational style for requirements',
        'Component decomposition',
        'System distribution across cores',
        'Which patterns/styles to use',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Core/process distribution is implementation detail, not architectural concern.',
    },
    {
      id: '76',
      text: 'Incorrect about project life cycles:',
      options: [
        'Agile determines scope early but adjusts time/cost',
        'Waterfall fixes scope/time/cost early',
        'Agile cannot outline scope before iterations',
        'Incremental delivers functionality in iterations',
      ],
      correctAnswerIndex: 2,
      explanation: 'Agile can establish high-level scope before iterations.',
    },
    {
      id: '77',
      text: 'Not a database approach characteristic:',
      options: [
        'Application-data dependency',
        'Data sharing',
        'Self-describing',
        'Data abstraction',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Databases reduce application-data dependency through independence.',
    },
    {
      id: '78',
      text: 'Android Activity is:',
      options: [
        'Class configuring applications',
        'An intent',
        'Package file container',
        'Single screen with Java code',
      ],
      correctAnswerIndex: 3,
      explanation: 'Activity represents a single screen with UI and logic.',
    },
    {
      id: '79',
      text: 'Not a network security approach:',
      options: [
        'Intrusion detection',
        'WanaCry protocol',
        'Physical security',
        'Intrusion prevention',
      ],
      correctAnswerIndex: 1,
      explanation: 'WanaCry is ransomware, not a security tool.',
    },
    {
      id: '80',
      text: 'When to implement test configuration management:',
      options: [
        'Test planning',
        'Test closing',
        'Test execution',
        'Test initiation',
      ],
      correctAnswerIndex: 0,
      explanation: 'Configuration management starts during test planning.',
    },
    {
      id: '81',
      text: 'First data mining step:',
      options: [
        'Data cleaning',
        'Data integration',
        'Business understanding',
        'Data selection',
      ],
      correctAnswerIndex: 2,
      explanation: 'CRISP-DM starts with business understanding.',
    },
    {
      id: '82',
      text: 'TCP/IP layer for addressing/routing:',
      options: ['Application', 'Internet', 'Transport', 'Network Access'],
      correctAnswerIndex: 1,
      explanation: 'Internet layer handles IP addressing and routing.',
    },
    {
      id: '83',
      text: 'Analysis for fastest algorithm completion:',
      options: ['Worst case', 'Best case', 'Standard case', 'Average case'],
      correctAnswerIndex: 1,
      explanation: 'Best case examines optimal input scenarios.',
    },
    {
      id: '84',
      text: 'Learning algorithm for unlabeled data:',
      options: [
        'Transfer learning',
        'Supervised learning',
        'Unsupervised learning',
        'Reinforcement learning',
      ],
      correctAnswerIndex: 2,
      explanation: 'Unsupervised learning finds patterns without labels.',
    },
    {
      id: '85',
      text: 'Non-linear data structure:',
      options: ['Queue', 'Stack', 'Tree', 'Linked list'],
      correctAnswerIndex: 2,
      explanation: 'Trees have hierarchical (non-linear) relationships.',
    },
    {
      id: '86',
      text: 'Source of unstructured data:',
      options: [
        'Employee database',
        'RDBMS',
        'Student database',
        'Search engine',
      ],
      correctAnswerIndex: 3,
      explanation: 'Search engines process unstructured web content.',
    },
    {
      id: '87',
      text: 'Not a purpose of architecture documentation:',
      options: [
        'Stakeholder communication',
        'Source code flow analysis',
        'Critical design decisions',
        'System organization',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Source code analysis is implementation-level, not architectural.',
    },
    {
      id: '88',
      text: 'Correct about Artificial Intelligence:',
      options: [
        'Only physical tasks',
        'Only repetitive tasks',
        'Only lab environments',
        'Tasks requiring human intelligence',
      ],
      correctAnswerIndex: 3,
      explanation: 'AI aims to replicate human cognitive capabilities.',
    },
    {
      id: '89',
      text: 'Process covering control flow graph branches:',
      options: [
        'Branch coverage',
        'Branch expansion',
        'Branch control',
        'Branch boundary',
      ],
      correctAnswerIndex: 0,
      explanation: 'Branch coverage tests all decision outcomes.',
    },
    {
      id: '90',
      text: 'Host behavior after Ethernet collision:',
      options: [
        'Jam signal clears collision',
        'Electrical pulse clears collision',
        'Retry after delay',
        'Router signals clearance',
      ],
      correctAnswerIndex: 2,
      explanation: 'Hosts use exponential backoff before retransmission.',
    },
    {
      id: '91',
      text: 'Time complexity of triple-nested loop function:',
      options: ['O(n²)', 'O(nlogn)', 'O(n⁷)', 'O(n⁵)'],
      correctAnswerIndex: 3,
      explanation: 'Nested loops with multiplicative bounds yield O(n⁵).',
    },
    {
      id: '92',
      text: 'Design principle NOT applying to software:',
      options: [
        'Traceable to analysis',
        'Structured for change',
        'Uniformity/integration',
        'Reinventing from scratch',
      ],
      correctAnswerIndex: 3,
      explanation: 'Good design avoids reinventing existing solutions.',
    },
    {
      id: '93',
      text: 'Control structure for conditional number summing:',
      options: ['break', 'continue', 'for', 'jump'],
      correctAnswerIndex: 1,
      explanation: 'continue skips negative numbers in the loop.',
    },
    {
      id: '94',
      text: 'Incorrect UML element application:',
      options: [
        'Class diagrams show classes/relations',
        'Activity diagrams show system reactions',
        'Use case diagrams represent interactions',
        'Sequence diagrams show operation sequences',
      ],
      correctAnswerIndex: 1,
      explanation: 'Activity diagrams model workflows, not system reactions.',
    },
    {
      id: '95',
      text: 'Memory policy for page replacement:',
      options: [
        'Cleaning policy',
        'Load policy',
        'Replacement policy',
        'Fetch policy',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Replacement policies select pages to evict when memory is full.',
    },
    {
      id: '96',
      text: 'Model for changing business requirements:',
      options: ['Agile', 'Spiral', 'Waterfall', 'Code and run'],
      correctAnswerIndex: 0,
      explanation: 'Agile methods embrace changing requirements.',
    },
    {
      id: '97',
      text: 'Correct SQL for dorm-student relationship:',
      options: [
        'FOREIGN KEY (DorID) REFERENCES DORM(DormID)',
        'STUDENT table is a reference relation',
        'FOREIGN KEY (DorID) REFERENCED by DORM(DormID)',
        'DORM table is a referencing relation',
      ],
      correctAnswerIndex: 0,
      explanation: 'Proper foreign key syntax references the primary key.',
    },
    {
      id: '98',
      text: 'Incorrect about try-catch:',
      options: [
        'Try block interrupts on exception',
        'Control moves to catch after exception',
        'Catch handles try block exceptions',
        'Catch executes regardless of exceptions',
      ],
      correctAnswerIndex: 3,
      explanation: 'Catch only executes if exceptions occur in try.',
    },
    {
      id: '99',
      text: 'Not a function of crossover UTP cable:',
      options: [
        'Switch-switch connection',
        'PC-PC connection',
        'Router-PC connection',
        'Switch-PC connection',
      ],
      correctAnswerIndex: 3,
      explanation: 'Switch-PC uses straight-through cables, not crossover.',
    },
    {
      id: '100',
      text: 'Responsible for documenting software faults:',
      options: ['Tester', 'Developer', 'Scrum master', 'Requirement engineer'],
      correctAnswerIndex: 0,
      explanation: 'Testers document defects found during testing.',
    },
  ],
}

export default exitExam2015
