const exitModel3 = {
  id: 'exitExamModel3',
  title: 'Exit Model 3',
  year: 2025,
  type: 'model',
  image: 'moe.png',
  questions: [
    {
      id: '1',
      text: 'While evaluating the quality of a product, one must ask the key question, "Does the product satisfy customer needs and expectations?" Which software quality view most describes this idea?',
      options: [
        'Transcendental View',
        'Manufacturing View',
        'User View',
        'Value Based View',
      ],
      correctAnswerIndex: 2,
      explanation:
        'The User View focuses on whether the product meets customer needs and expectations, making it the most relevant perspective for this question.',
    },
    {
      id: '2',
      text: 'Why do we apply software design patterns during the software development process?',
      options: [
        'Design patterns are solutions to general software development problems',
        'Design patterns capture the best practices of experienced object-oriented software developers',
        'Both A and B',
        'None of the mentioned above',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Design patterns provide reusable solutions to common problems and embody best practices, making them valuable in software development.',
    },
    {
      id: '3',
      text: 'Which of the following is the first callback method that is invoked by the system during an activity lifecycle?',
      options: [
        'onRestart() method',
        'onStart() method',
        'onClick() method',
        'onCreate() method',
      ],
      correctAnswerIndex: 3,
      explanation:
        'The onCreate() method is the first callback invoked when an activity is created, initializing essential components.',
    },
    {
      id: '4',
      text: 'Which of the following is the process of understanding the knowledge, skills, and abilities needed to manage a task and then matching the team members with the right skills to do that work?',
      options: ['Benchmarking', 'Procurement', 'Delegation', 'Expediting'],
      correctAnswerIndex: 2,
      explanation:
        'Delegation involves assigning tasks to team members based on their skills and abilities to ensure efficient task management.',
    },
    {
      id: '5',
      text: 'Which of the following is true about back-end frameworks?',
      options: [
        'They are primarily used for client-side animations and effects.',
        'They execute code on the client-side.',
        'They determine the layout and styling of web pages.',
        'They handle requests, process data, and interact with databases.',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Back-end frameworks are responsible for server-side operations, including data processing, request handling, and database interactions.',
    },
    {
      id: '6',
      text: 'Which of the following is used to output data to the console in C++?',
      options: ['std::output', 'std::print', 'std::cout', 'std::display'],
      correctAnswerIndex: 2,
      explanation:
        'std::cout is the standard output stream in C++ used to display data on the console.',
    },
    {
      id: '7',
      text: 'Which of the following is/are considered as system quality attribute scenario?',
      options: [
        'Stimulus',
        'Source of stimulus',
        'Environment',
        'All',
        'None of the mentioned above',
      ],
      correctAnswerIndex: 3,
      explanation:
        'System quality attribute scenarios include stimulus, source of stimulus, and environment, making "All" the correct choice.',
    },
    {
      id: '8',
      text: 'Which of the following refers to the violation of the principle if a computer is no more accessible?',
      options: ['Availability', 'Access control', 'Confidentiality', 'All'],
      correctAnswerIndex: 0,
      explanation:
        'Availability ensures systems are accessible when needed; its violation means the system is no longer accessible.',
    },
    {
      id: '9',
      text: 'Which of the following stages or patterns of requirements modeling produces state and sequence diagrams?',
      options: [
        'Behavioral modeling',
        'Class-based modeling',
        'Data modeling',
        'Flow-oriented modeling',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Behavioral modeling focuses on dynamic aspects of the system, producing state and sequence diagrams to represent behavior.',
    },
    {
      id: '10',
      text: 'Which one is the benefit of subnetting?',
      options: [
        'It divides one large network into several smaller ones',
        'It divides network into network classes',
        'It speeds up the speed of network',
        'All',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Subnetting improves network management by dividing a large network into smaller, more efficient subnetworks.',
    },
    {
      id: '11',
      text: 'Which one is true in software design principle?',
      options: [
        'The design should exhibit uniformity and integration.',
        'The design should be traceable to the analysis model',
        'The design principle enables the software engineer to navigate the design process',
        'All',
        'None of the mentioned above',
      ],
      correctAnswerIndex: 3,
      explanation:
        'All the listed options are fundamental principles of good software design.',
    },
    {
      id: '12',
      text: 'Which one is a true statement about network topology?',
      options: [
        'Star topology is the highest reliability topology',
        'In star topology, every node is connected to each other',
        'Mesh topology is the highest reliability topology',
        'In bus topology, hub is a central connected device',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Mesh topology offers the highest reliability due to multiple interconnected paths between nodes.',
    },
    {
      id: '13',
      text: 'Which one is wrong about the rationale behind using Multiprogramming?',
      options: [
        'It has shorter response time and helps to have improved throughputs',
        "It's ease of scheduling implementations",
        'It enables high CPU utilization',
        'It can assign priority to jobs specified',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Multiprogramming improves CPU utilization and throughput but does not inherently guarantee shorter response times.',
    },
    {
      id: '14',
      text: 'Which one of the following is not a penetration test tool for ethical hacking in a Windows environment?',
      options: ['Nmap', 'Raxis', 'Netsparker', 'Burp Suite'],
      correctAnswerIndex: 1,
      explanation:
        'Raxis is not a recognized penetration testing tool, unlike Nmap, Netsparker, and Burp Suite.',
    },
    {
      id: '15',
      text: 'Which one of the following is not a step of requirement engineering?',
      options: ['Documentation', 'Elicitation', 'Design', 'Analysis'],
      correctAnswerIndex: 2,
      explanation:
        'Design is part of the software development phase, not requirement engineering, which focuses on gathering and analyzing requirements.',
    },
    {
      id: '16',
      text: 'Which one is a true statement about LAN and WAN networks?',
      options: [
        'LAN has higher network speed',
        'LAN works on the principle of point-to-point',
        'WAN has less network congestion',
        'WAN has shorter propagation delay',
      ],
      correctAnswerIndex: 0,
      explanation:
        'LANs typically offer higher speeds due to their smaller geographic coverage compared to WANs.',
    },
    {
      id: '17',
      text: 'Which one is a true statement about OSI and TCP/IP?',
      options: [
        'TCP/IP is a vertical approach',
        'TCP/IP model was developed prior to the OSI model',
        'OSI is protocol dependent',
        'OSI model was developed prior to the TCP/IP model',
      ],
      correctAnswerIndex: 1,
      explanation:
        'The TCP/IP model was developed before the OSI model, which was created later as a reference framework.',
    },
    {
      id: '18',
      text: 'Which technology is used for storing session data and maintaining user state in a web-based application?',
      options: ['PHP', 'JavaScript', 'CSS', 'HTML'],
      correctAnswerIndex: 0,
      explanation:
        'PHP provides session management capabilities to store user data across multiple page requests.',
    },
    {
      id: '19',
      text: 'Which testing technique is responsible for representing the actions of the software application when contrasting input values are given to the identical function?',
      options: [
        'Cause-effect graph testing',
        'State-transition testing',
        'All pair testing',
        'Decision table testing',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Decision table testing systematically evaluates different input combinations and their corresponding outcomes.',
    },
    {
      id: '20',
      text: 'Which type of software testing requires the checking of each and every single line of code by the developer?',
      options: [
        'Gray box testing',
        'White box testing',
        'Black box testing',
        'None',
      ],
      correctAnswerIndex: 1,
      explanation:
        'White box testing involves examining internal code structures, requiring line-by-line verification by developers.',
    },
    {
      id: '21',
      text: 'Which web development terminologies are important for building and integrating different web applications?',
      options: [
        'Cache Management',
        'Frontend Development',
        'Application Program Interfaces (APIs)',
        'Backend Development',
      ],
      correctAnswerIndex: 2,
      explanation:
        'APIs enable communication and integration between different web applications, making them essential for modern web development.',
    },
    {
      id: '22',
      text: 'While assessing your project processes, you have identified some uncontrolled process variations. Which of the following would be the appropriate chart you may use for this purpose?',
      options: [
        'Pareto diagram',
        'PERT chart',
        'HR personnel chart',
        'Control chart',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Control charts are specifically designed to monitor process variations and identify trends or anomalies over time.',
    },
    {
      id: '23',
      text: 'What is the purpose of the return statement in a C++ program?',
      options: [
        'It defines a loop condition',
        'It returns a value from a function',
        'It specifies the exit code of the program',
        'It terminates the program',
      ],
      correctAnswerIndex: 1,
      explanation:
        'The return statement exits a function and optionally passes a value back to the caller.',
    },
    {
      id: '24',
      text: 'When would you use a switch statement instead of an if-else statement?',
      options: [
        'When you need to compare floating-point numbers.',
        'When you need to perform a series of logical operations.',
        'When you want to execute a block of code repeatedly.',
        'When the number of conditions is large and complex.',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Switch statements are more efficient for handling multiple discrete conditions compared to lengthy if-else chains.',
    },
    {
      id: '25',
      text: 'When you decide what is inside and what is outside the context boundary, you are doing what?',
      options: [
        'Defining inputs and outputs',
        'Hiding information',
        'Setting scope',
        'Defining interfaces',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Setting scope involves determining the boundaries of a system or project, including what is included or excluded.',
    },
    {
      id: '26',
      text: 'Which back-end framework is written in PHP and follows the convention over configuration principle?',
      options: ['Ruby on Rails', 'Express', 'Laravel', 'Django'],
      correctAnswerIndex: 2,
      explanation:
        'Laravel is a PHP framework that emphasizes convention over configuration, streamlining development with predefined structures.',
    },
    {
      id: '27',
      text: 'Which cable is used for telephone applications?',
      options: [
        'Coaxial cable',
        'Unshielded twisted pair cable',
        'Shielded twisted pair cable',
        'All',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Unshielded twisted pair (UTP) cables are commonly used in telephone systems due to their cost-effectiveness and adequate performance.',
    },
    {
      id: '28',
      text: 'Which class is used to write binary files in Java?',
      options: [
        'FileWriter',
        'PrintWriter',
        'FileOutputStream',
        'BufferedWriter',
      ],
      correctAnswerIndex: 2,
      explanation:
        'FileOutputStream is designed for writing binary data to files in Java.',
    },
    {
      id: '29',
      text: 'Which from the following represents the correct project cycle?',
      options: [
        'Planning → Initiating → Executing → Closing',
        'Initiating → Executing → Planning → Closing',
        'Initiating → Planning → Executing → Closing',
        'Planning → Executing → Initiating → Closing',
      ],
      correctAnswerIndex: 2,
      explanation:
        'The standard project lifecycle follows Initiating, Planning, Executing, and Closing phases in sequence.',
    },
    {
      id: '30',
      text: 'Which front-end framework is known for its minimalistic approach and lightweight size?',
      options: ['Vue.js', 'Ember.js', 'React', 'Angular'],
      correctAnswerIndex: 0,
      explanation:
        'Vue.js is renowned for its simplicity and small footprint, making it easy to integrate into projects.',
    },
    {
      id: '31',
      text: 'Which function in C++ is used to read input from the standard input stream (keyboard)?',
      options: ['cin.read()', 'cin.get()', 'cin.readln()', 'cin >>'],
      correctAnswerIndex: 3,
      explanation:
        'The extraction operator (>>) with cin is the standard way to read input from the keyboard in C++.',
    },
    {
      id: '32',
      text: 'Which method is used to select an HTML element by its ID in JavaScript?',
      options: [
        'querySelector()',
        'getElementsByTagName()',
        'getElementsByClassName()',
        'getElementById()',
      ],
      correctAnswerIndex: 3,
      explanation:
        'getElementById() is the direct method to select an HTML element using its unique ID in JavaScript.',
    },
    {
      id: '33',
      text: 'Which of the following Android components displays the part of an activity on screen?',
      options: ['Manifest', 'Fragment', 'Intent', 'View'],
      correctAnswerIndex: 1,
      explanation:
        "Fragments represent reusable portions of an activity's UI, allowing modular and flexible screen designs.",
    },
    {
      id: '34',
      text: 'Which of the following is a tool used for processing and analyzing Big Data?',
      options: ['PostgreSQL', 'MySQL', 'Hadoop', 'Oracle'],
      correctAnswerIndex: 2,
      explanation:
        'Hadoop is a distributed framework designed specifically for processing and analyzing large-scale datasets.',
    },
    {
      id: '35',
      text: 'Which of the following is an essential process in which intelligent methods are applied to extract data patterns?',
      options: ['Warehousing', 'Text Mining', 'Data Selection', 'Data Mining'],
      correctAnswerIndex: 3,
      explanation:
        'Data mining involves using algorithms and statistical methods to discover patterns and relationships in large datasets.',
    },
    {
      id: '36',
      text: 'Which of the following is an objective of Information security?',
      options: ['Confidentiality', 'Integrity', 'Availability', 'All'],
      correctAnswerIndex: 3,
      explanation:
        'Information security aims to ensure all three: confidentiality (data privacy), integrity (data accuracy), and availability (data accessibility). Together they form the CIA triad.',
    },
    {
      id: '37',
      text: 'Which of the following is defined as an attempt to steal, spy, damage or destroy computer systems, networks, or their associated information?',
      options: [
        'Digital hacking',
        'Cryptography',
        'Cyber-attack',
        'Computer security',
      ],
      correctAnswerIndex: 2,
      explanation:
        'A cyber-attack is any malicious attempt to compromise systems or data. Computer security refers to defensive measures, while cryptography is an encryption technique.',
    },
    {
      id: '38',
      text: 'Which of the following is not a diagram studied in Requirement Analysis?',
      options: [
        'Activity Diagram',
        'Use Case',
        'State Transition Diagram',
        'Entity Relationship Diagram',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Entity Relationship Diagrams (ERDs) are used in database design, not requirement analysis which focuses on system behavior modeling through use cases, activities, and state transitions.',
    },
    {
      id: '39',
      text: 'Which of the following is not a part of Software evolution?',
      options: [
        'Maintenance activities',
        'Negotiating with client',
        'Development activities',
        'Re-engineering activities',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Client negotiation occurs during initial requirements gathering. Software evolution involves ongoing development, maintenance (bug fixes), and re-engineering (improving existing systems).',
    },
    {
      id: '40',
      text: 'Which of the following is not defined in a good Software Requirement Specification (SRS) document?',
      options: [
        'Goals of implementation',
        'Functional Requirement',
        'Nonfunctional Requirement',
        'Algorithm for software implementation',
      ],
      correctAnswerIndex: 3,
      explanation:
        'An SRS specifies what the system should do (requirements) but not how (implementation details like algorithms).',
    },
    {
      id: '41',
      text: 'Which of the following is the correct structure of a basic C++ program?',
      options: [
        'int main() { }',
        'main() {}',
        'int main(void) {}',
        'void main() {}',
      ],
      correctAnswerIndex: 0,
      explanation:
        'The standard entry point in C++ is int main(), which returns an integer status code. void main() is non-standard and may cause compiler warnings.',
    },
    {
      id: '42',
      text: 'Which of the following is the correct syntax for dynamically allocating memory for an integer variable in C++?',
      options: [
        'int num = malloc(int);',
        'int num = new int;',
        'int* num = malloc(sizeof(int));',
        'int* num = new int();',
      ],
      correctAnswerIndex: 3,
      explanation:
        'In C++, new int() dynamically allocates memory and returns a pointer. The parentheses initialize the integer to 0. malloc() is a C-style function.',
    },
    {
      id: '43',
      text: 'The word which describes the importance of software design is?',
      options: ['Efficiency', 'Complexity', 'Accuracy', 'Quality'],
      correctAnswerIndex: 3,
      explanation:
        'Quality encompasses all good design attributes: efficiency, maintainability, reliability, and more.',
    },
    {
      id: '44',
      text: 'If you want to ensure wise use of resource efficiency specific to Time and memory resources, what is your recommendation as a baseline?',
      options: [
        'Focus on Operating System features',
        "Focus on the system's hardware parameters",
        'Focus on Application Program Interfaces',
        "Focus on system's software parameters",
      ],
      correctAnswerIndex: 3,
      explanation:
        'Optimizing software parameters (algorithms, data structures) has the most direct impact on time/memory efficiency. Hardware and OS provide the foundation but software determines resource usage.',
    },
    {
      id: '45',
      text: 'Unauthorized access over a web server, or database and making a change in the information is called:',
      options: [
        'Email hacking',
        'Website hacking',
        'Computer hacking',
        'Password hacking',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Website hacking specifically targets web servers/databases to alter content. Computer hacking is broader, while password/email hacking focus on specific components.',
    },
    {
      id: '46',
      text: 'What is a constructor?',
      options: [
        'It is a method that initializes an object',
        'It is a keyword in Java',
        'It is a method that returns data',
        'It is a variable that holds data',
      ],
      correctAnswerIndex: 0,
      explanation:
        "A constructor is a special method called when an object is created (e.g., new MyClass()). It initializes object state but doesn't return data.",
    },
    {
      id: '47',
      text: 'What is a disaster recovery plan?',
      options: [
        'A plan for reducing data redundancy',
        'A plan for optimizing database performance',
        'A plan for restoring the database in case of a disaster',
        'A plan for securing database data',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Disaster recovery plans outline procedures to restore systems/data after events like hardware failures, cyberattacks, or natural disasters.',
    },
    {
      id: '48',
      text: 'What is method overriding?',
      options: [
        'Having multiple methods with same name/parameters in a class',
        'Overriding a method in a subclass that was defined in the superclass',
        'Having multiple methods with same name but different parameters',
        'Having multiple methods with same name in a class',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Method overriding allows a subclass to provide its own implementation of a method inherited from a superclass (polymorphism).',
    },
    {
      id: '49',
      text: 'What is a system context diagram?',
      options: [
        'A high-level map of a system and its surrounding environment',
        'A system that generates diagrams for a company',
        'A diagram showing how external entities relate to each other',
        "A company's in-house method for diagramming systems",
      ],
      correctAnswerIndex: 0,
      explanation:
        'System context diagrams define system boundaries and interactions with external entities (users, other systems). They are part of requirements analysis.',
    },
    {
      id: '50',
      text: 'What is an activity in Android?',
      options: [
        'Android class',
        'A single screen in an application with supporting Java code',
        'Android package',
        'None of the above',
      ],
      correctAnswerIndex: 1,
      explanation:
        'An Activity represents a single screen with UI components (like a window). Apps typically have multiple activities (e.g., login screen, main screen).',
    },
    {
      id: '51',
      text: 'What is data normalization?',
      options: [
        'The process of organizing data in the database',
        'The process of securing database data',
        'The process of backing up database data',
        'The process of optimizing database performance',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Normalization structures database tables to minimize redundancy (e.g., splitting data into related tables with foreign keys).',
    },
    {
      id: '52',
      text: 'What is database optimization?',
      options: [
        'The process of deleting unnecessary data from the database',
        'The process of improving database performance',
        'The process of securing database data',
        'The process of backing up database data',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Database optimization involves tuning queries, adding indexes, and restructuring tables to improve speed/efficiency.',
    },
    {
      id: '53',
      text: 'What is garbage collection?',
      options: [
        'It is the process of allocating memory to objects when they are created',
        'It is the process of creating a memory location',
        'It is the process of releasing memory used by objects that are no longer in use',
        'All',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Garbage collection automatically reclaims memory from objects no longer referenced (e.g., in Java, C#). It prevents memory leaks.',
    },
    {
      id: '54',
      text: 'What is inheritance?',
      options: [
        'It is the process of creating new classes from existing classes',
        'It is the process of creating new objects from existing objects',
        'It is the process of creating new objects from classes',
        'It is the process of creating new interfaces from existing interfaces',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Inheritance allows a subclass to inherit fields/methods from a superclass (e.g., class Dog extends Animal).',
    },
    {
      id: '55',
      text: 'What is performance tuning?',
      options: [
        'The process of organizing data in the database',
        'The process of securing database',
        'The process of backing up database data',
        'The process of optimizing database performance',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Performance tuning improves database speed through query optimization, indexing, and configuration adjustments.',
    },
    {
      id: '56',
      text: 'What is polymorphism?',
      options: [
        'It is the ability of objects to have many methods',
        'It is the ability of objects to have many constructors',
        'It is the ability of objects to take on many forms',
        'It is the ability of objects to have many attributes',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Polymorphism allows objects of different classes to be treated as objects of a common superclass (e.g., Animal animal = new Dog()).',
    },
    {
      id: '57',
      text: 'What is the output of: int i = 10; if (i > 5) {cout << "A";} if (i > 7) { cout << "B";} if (i > 12) { cout << "C";}',
      options: ['CB', 'A', 'C', 'AB'],
      correctAnswerIndex: 3,
      explanation:
        'Since i=10, it satisfies i>5 (prints A) and i>7 (prints B), but not i>12 (skips C). Output is AB.',
    },
    {
      id: '58',
      text: 'What is the output of: int i = 0; while (i < 5) {cout << i << " "; i++;}',
      options: ['0 1 2 3 4 5', '1 2 3 4 5', 'Infinite loop', '0 1 2 3 4'],
      correctAnswerIndex: 3,
      explanation:
        'The loop runs while i<5, printing 0 through 4. When i=5, the condition fails and the loop exits.',
    },
    {
      id: '59',
      text: 'What is the primary advantage of a relational model over hierarchical and network models?',
      options: [
        'Relational models are easier to use and understand',
        'Relational models are more flexible and adaptable to changing requirements',
        'Relational models can handle larger amounts of data',
        'Relational models are more efficient for complex queries',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Relational models use tables that can be easily modified without restructuring the entire database, unlike rigid hierarchical/network structures.',
    },
    {
      id: '60',
      text: 'What is the primary difference between a hierarchical and a network model?',
      options: [
        'In a hierarchical model, nodes are organized in a tree-like structure, while in a network model, nodes are organized in a graph-like structure',
        'In a hierarchical model, nodes represent instances or records, while in a network model, nodes represent relationships',
        'In a hierarchical model, nodes can have multiple relationships to other nodes, while in a network model, each node can have only one parent',
        'In a hierarchical model, each node can have only one parent, while in a network model, a node can have multiple relationships to other nodes',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Hierarchical models enforce a strict tree structure (one parent per node), while network models allow complex many-to-many relationships.',
    },
    {
      id: '61',
      text: 'What is the process of examining large and varied data sets to uncover hidden patterns, unknown correlations, market trends, customer preferences, and other useful information?',
      options: [
        'Data Mining',
        'Data Integration',
        'Data Warehousing',
        'Data Processing',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Data mining applies statistical/machine learning techniques to discover patterns in large datasets.',
    },
    {
      id: '62',
      text: 'What is the process of storing and managing data in a way that allows for efficient retrieval and analysis?',
      options: [
        'Data Mining',
        'Data Integration',
        'Data Warehousing',
        'Data Processing',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Data warehousing consolidates data from multiple sources into an analysis-ready repository.',
    },
    {
      id: '63',
      text: 'If your computer interrupts short periodic jobs to run longer ones repeatedly, the problem is:',
      options: [
        'Failure to respond',
        'Starvation',
        'Deadlocks',
        'Limited throughput',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Starvation occurs when some processes are consistently denied CPU time in favor of others (often due to improper scheduling).',
    },
    {
      id: '64',
      text: 'If you need to pass data back from an activity, which method should you use?',
      options: [
        'startActivity()',
        'startActivityForResult()',
        'ActivityForResult()',
        'None',
      ],
      correctAnswerIndex: 1,
      explanation:
        'startActivityForResult() launches an activity and expects a result to be returned (handled in onActivityResult()).',
    },
    {
      id: '65',
      text: 'In Android Studio, which callback is called when an activity starts interacting with the user?',
      options: ['onResume()', 'onStop()', 'onCreate()', 'onDestroy()'],
      correctAnswerIndex: 0,
      explanation:
        'onResume() is called when the activity comes to the foreground and becomes interactive (after onCreate() or onRestart()).',
    },
  ],
}

export default exitModel3
