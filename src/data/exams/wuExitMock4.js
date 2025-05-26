const wuExitMock4 = {
  id: 'wumock4',
  title: 'WU Mock 4',
  year: 2016,
  type: 'model',
  image: 'wu.png',
  questions: [
    {
      id: '1',
      text: 'In a______ relationship, one device controls traffic and the others must transmit through it?',
      options: [
        'Peer-to-peer',
        'Point-to-point',
        'Primary-secondary',
        'Full duplex',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Primary-secondary is correct because in this relationship, one device (primary) controls communication while others (secondaries) rely on it for data transmission.',
    },
    {
      id: '2',
      text: 'Which one of the following is different from the other?',
      options: [
        '172.16.35.12',
        '188.17.12.14',
        '130.17.12.24',
        '126.17.12.254',
      ],
      correctAnswerIndex: 0,
      explanation:
        '172.16.35.12 is a private IP address (RFC 1918), while the others are public IP addresses.',
    },
    {
      id: '3',
      text: 'Which of the following is a networking technique that enables us to transfer two or more different data signals simultaneously on the same communication channel?',
      options: ['Switching', 'Layering task', 'Multiplexing', 'None'],
      correctAnswerIndex: 2,
      explanation:
        'Multiplexing combines multiple signals into one channel for efficient transmission.',
    },
    {
      id: '4',
      text: 'What is the prefix length notation for the subnet mask 255.255.255.248?',
      options: ['/30', '/27', '/28', '/29'],
      correctAnswerIndex: 3,
      explanation:
        '255.255.255.248 has 29 network bits (11111111.11111111.11111111.11111000).',
    },
    {
      id: '5',
      text: 'The wireless LAN specification is defined by IEEE, called, ______ which covers the data link and physical layer?',
      options: ['IEEE 802.2', 'IEEE 802.11', 'IEEE 802.3', 'IEEE 802.5'],
      correctAnswerIndex: 1,
      explanation: 'IEEE 802.11 is the standard for wireless LANs (Wi-Fi).',
    },
    {
      id: '6',
      text: 'A network where there is no resource reservation is called?',
      options: [
        'Circuit-switched networks',
        'Message-switched networks',
        'Packet-switched networks',
        'Satellite network',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Packet-switched networks (e.g., the Internet) dynamically allocate bandwidth without prior reservation.',
    },
    {
      id: '7',
      text: 'The whole communication between client and server to transmit a file may take?',
      options: ['2RTT', 'RTT + TRANSMIT TIME', '2RTT + TRANSMIT TIME', 'RTT'],
      correctAnswerIndex: 2,
      explanation:
        'File transfer involves TCP handshake (1 RTT), request/response (1 RTT), and actual data transmission time.',
    },
    {
      id: '8',
      text: 'Routers work at which of the following OSI layers?',
      options: ['Transport', 'Network', 'Presentation', 'Session'],
      correctAnswerIndex: 1,
      explanation:
        'Routers operate at Layer 3 (Network) to route packets between networks.',
    },
    {
      id: '9',
      text: 'Databases threats that are related to unauthorized disclosure are called?',
      options: [
        'Loss of integrity',
        'Loss of availability',
        'Loss of confidentiality',
        'None',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Confidentiality threats involve unauthorized access to sensitive data.',
    },
    {
      id: '10',
      text: 'Which of these statements about serializable schedules is true?',
      options: [
        'Every serializable schedule contains no conflicting actions.',
        'Every serializable schedule is recoverable.',
        'Every 2pl schedule is serializable.',
        'None of the above',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Serializable schedules ensure transaction consistency but may still have conflicts or unrecoverable states.',
    },
    {
      id: '11',
      text: 'Concurrency problem that occurs when one transaction is allowed to see the intermediate results of another transaction before it has committed, which will be failed for some reason is called?',
      options: [
        'Incorrect summary problem',
        'Lost update problem',
        'Dirty read problem',
        'All',
        'None',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Dirty reads occur when a transaction reads uncommitted data from another transaction that later rolls back.',
    },
    {
      id: '12',
      text: 'The purpose of database recovery is?',
      options: [
        'To bring the database into the last consistent state.',
        'To preserve consistency of transactions.',
        'To preserve durability property of transactions.',
        'All',
        'None',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Recovery ensures all three: consistency, durability, and a valid state after failures.',
    },
    {
      id: '13',
      text: 'Which of these statements about recoverable schedules is true?',
      options: [
        'In a recoverable schedule, if a transaction t commits, then any other transaction that t read from must also have committed.',
        'Every recoverable schedule is serializable.',
        'In a recoverable schedule, no transaction will ever be aborted because a transaction that it read from has aborted.',
        'None of the above',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Recoverable schedules prevent cascading aborts by ensuring dependencies are committed first.',
    },
    {
      id: '14',
      text: 'What is a database?',
      options: [
        'A collection of information organized in such a way that a computer program can quickly select desired pieces of data',
        'A collection of unorganized data',
        'A collection of documents',
        'none of the above',
      ],
      correctAnswerIndex: 0,
      explanation:
        'A database is an organized collection of data for efficient access and management.',
    },
    {
      id: '15',
      text: 'Which language is used to query databases?',
      options: ['C++', 'Python', 'SQL', 'Java'],
      correctAnswerIndex: 2,
      explanation:
        'SQL (Structured Query Language) is the standard for database queries.',
    },
    {
      id: '16',
      text: 'What two things do you need to create Web Pages & view them?',
      options: [
        'A text editor and a web browser',
        'A text editor and a compiler',
        'A compiler and a web browser',
        'All of the above',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Web pages are written in HTML (text editor) and rendered by browsers.',
    },
    {
      id: '17',
      text: 'Where in an HTML document is the correct place to refer to an external style sheet?',
      options: [
        'In the <head> section',
        'At the top of the document',
        'In the <body> section',
        'At the end of the document',
      ],
      correctAnswerIndex: 0,
      explanation:
        'External CSS links belong in the <head> for proper loading before rendering.',
    },
    {
      id: '18',
      text: 'What CSS define in HTML?',
      options: [
        'How to save html elements',
        'How to display html elements',
        'How to send html elements',
        'How to made html elements',
      ],
      correctAnswerIndex: 1,
      explanation:
        'CSS (Cascading Style Sheets) controls the visual presentation of HTML elements.',
    },
    {
      id: '19',
      text: 'What does an HTML tag do?',
      options: [
        'It specifies formatting and layout instructions for your web page.',
        'It hides programming instructions from view.',
        'It determines the organizational structure of your web site.',
        'It connects your web site to an operating environment.',
      ],
      correctAnswerIndex: 0,
      explanation:
        'HTML tags define structure and formatting (though CSS now handles most styling).',
    },
    {
      id: '20',
      text: 'Which of the following is not the scope of Variable in PHP?',
      options: ['Local', 'Global', 'Static', 'Extern'],
      correctAnswerIndex: 3,
      explanation:
        'PHP variables have local, global, or static scope; "extern" is not a PHP keyword.',
    },
    {
      id: '21',
      text: 'A function in PHP which starts with ___ (double underscore) is known as?',
      options: [
        'Inbuilt function',
        'Default function',
        'Magic function',
        'User defined function',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Magic methods (e.g., __construct()) have special behavior in PHP classes.',
    },
    {
      id: '22',
      text: 'Where setcookie() function must appear in PHP?',
      options: [
        'Before <html> tag',
        'After <html> tag',
        'In <head> tag',
        'Anywhere',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Cookies must be set before any HTML output due to HTTP header requirements.',
    },
    {
      id: '23',
      text: 'Which principle does checksum verify?',
      options: ['Integrity', 'Authenticity', 'Confidentiality', 'Repudiation'],
      correctAnswerIndex: 0,
      explanation: 'Checksums detect data corruption (integrity check).',
    },
    {
      id: '24',
      text: 'Which is NOT a primary goal of software testing?',
      options: [
        'Finding defects',
        'Meeting requirements',
        'Improving performance',
        'Verifying correctness',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Performance tuning is separate from testing (though testing may identify bottlenecks).',
    },
    {
      id: '25',
      text: 'Which technique compares actual vs. expected results?',
      options: ['White-box', 'Black-box', 'Unit testing', 'Regression testing'],
      correctAnswerIndex: 1,
      explanation:
        'Black-box testing validates functionality without internal knowledge.',
    },
    {
      id: '26',
      text: 'Which of the following requirement represents the existence of the element over time?',
      options: ['Lifeline', 'Messages', 'Communication', 'Activation bar'],
      correctAnswerIndex: 0,
      explanation:
        "In UML, a lifeline shows an object's existence during a sequence diagram.",
    },
    {
      id: '27',
      text: 'Which of the following is derived from the analysis model scenario-based elements, flow-oriented elements, and behavioral elements?',
      options: [
        'Component-level design',
        'Interface design',
        'Data/class design',
        'Architectural design',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Architectural design integrates all analysis model aspects into a high-level structure.',
    },
    {
      id: '28',
      text: 'Which of the following is created by transforming the analysis model class-based elements into classes and data structures required to implement the software?',
      options: [
        'Component-level design',
        'Interface design',
        'Data/class design',
        'Architectural design',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Data/class design focuses on translating analysis classes into implementable structures.',
    },
    {
      id: '29',
      text: 'Which Diagram emphasize on features that do not change with time?',
      options: ['Dynamic', 'Structural', 'Collaboration', 'Activity'],
      correctAnswerIndex: 1,
      explanation:
        'Structural diagrams (e.g., class diagrams) show static system aspects.',
    },
    {
      id: '30',
      text: 'Which of the following Diagram focuses on the individual concepts that are manipulated by the system, their properties, and their relationships?',
      options: [
        'Class based modelling',
        'Structural',
        'Collaboration',
        'Activity',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Class diagrams model objects, their attributes, and relationships.',
    },
    {
      id: '31',
      text: 'Which of the following is invalid relationships in Use Case Diagrams?',
      options: ['Use', 'Generalization', 'Subtyping', 'Include', 'Extend'],
      correctAnswerIndex: 0,
      explanation:
        '"Use" is not a standard UML use case relationship (correct terms: include/extend/generalization).',
    },
    {
      id: '32',
      text: 'Which diagram in UML shows a complete or partial view of the structure of a modeled system at specific time?',
      options: [
        'Sequence diagram',
        'Collaboration diagram',
        'Object diagram',
        'State chart diagram',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Object diagrams capture system snapshots at a moment in time.',
    },
    {
      id: '33',
      text: 'An activity diagram is used to illustrate one of the following?',
      options: [
        'The flow of a complicated use case.',
        'A workflow across use cases.',
        'The logic of an algorithm.',
        'All',
        'None',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Activity diagrams can represent all these scenarios (workflows/algorithms/use cases).',
    },
    {
      id: '34',
      text: 'What is the research-oriented software development?',
      options: [
        'Product-related problems',
        'Process-related problems',
        'People-related problems',
        'Technology-related problems',
        'None',
      ],
      correctAnswerIndex: 4,
      explanation:
        'Research-oriented development addresses novel solutions beyond predefined categories.',
    },
    {
      id: '35',
      text: 'Technical kernel of software engineering?',
      options: ['Testing', 'Requirement analysis', 'Design', 'Implementation'],
      correctAnswerIndex: 2,
      explanation:
        'Design bridges requirements and implementation, forming the technical core.',
    },
    {
      id: '36',
      text: 'What is the preferred order for performing testing on information technology projects?',
      options: [
        'Unit testing, integration testing, system testing, user acceptance testing',
        'Unit testing, system testing, integration testing, user acceptance testing',
        'Unit testing, system testing, user acceptance testing, integration testing',
        'Unit testing, integration testing, user acceptance testing, system testing',
      ],
      correctAnswerIndex: 0,
      explanation:
        'The standard V-model progression: unit → integration → system → acceptance testing.',
    },
    {
      id: '37',
      text: 'Which of the following is not a process in project communications management?',
      options: [
        'Planning communications management',
        'Controlling communications',
        'Managing communications',
        'Managing stakeholders',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Stakeholder management is a separate knowledge area in PMBOK.',
    },
    {
      id: '38',
      text: '______ is an uncertainty that can have a negative or positive effect on meeting project objectives?',
      options: ['Risk utility', 'Risk tolerance', 'Risk management', 'Risk'],
      correctAnswerIndex: 3,
      explanation:
        'Risk is any uncertain event impacting project outcomes (positively or negatively).',
    },
    {
      id: '39',
      text: 'During project execution, a team member is unsure of what work he needs to accomplish. Which document contains detailed descriptions of work packages?',
      options: [
        'Scope management plan',
        'Project scope statement',
        'WBS',
        'Activity list',
      ],
      correctAnswerIndex: 2,
      explanation:
        'The Work Breakdown Structure (WBS) decomposes deliverables into work packages.',
    },
    {
      id: '40',
      text: 'Which of the following is related to the overall functionality of the delivered software?',
      options: [
        'Product-related metrics',
        'Function-related metrics',
        'Size-related metrics',
        'None of the mentioned',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Product metrics assess functionality, quality, and other delivered features.',
    },
    {
      id: '41',
      text: 'Which machine learning algorithm is suitable for solving regression problems?',
      options: [
        'K-means Clustering',
        'Random Forest',
        'K-Nearest Neighbors (KNN)',
        'Apriori Algorithm',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Random Forest can perform both classification and regression tasks effectively.',
    },
    {
      id: '42',
      text: 'What does "overfitting" refer to in machine learning?',
      options: [
        'When a model performs well on the training data but poorly on new data',
        'When a model performs well on new data but poorly on the training data',
        'When a model perfectly fits the training data',
        'When a model is too simple to capture the underlying patterns',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Overfitting occurs when a model memorizes training data noise instead of generalizing.',
    },
    {
      id: '43',
      text: 'Which type of machine learning algorithm aims to mimic the process of human learning?',
      options: [
        'Supervised learning',
        'Unsupervised learning',
        'Reinforcement learning',
        'Deep learning',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Reinforcement learning mimics trial-and-error learning via rewards/punishments.',
    },
    {
      id: '44',
      text: 'What is the purpose of the validation set in machine learning?',
      options: [
        'To train the model',
        'To fine-tune hyperparameters',
        "To test the model's generalization",
        'To provide additional training data',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Validation sets help optimize hyperparameters without touching the test set.',
    },
    {
      id: '45',
      text: 'Which of the following is a supervised learning task?',
      options: [
        'Clustering',
        'Reinforcement learning',
        'Dimensionality reduction',
        'Classification',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Classification uses labeled data to predict categories (supervised learning).',
    },
    {
      id: '46',
      text: 'In machine learning, what is a model?',
      options: [
        'A physical machine that performs computations',
        'A representation of the data',
        'A set of training examples',
        'A type of computer algorithm',
      ],
      correctAnswerIndex: 1,
      explanation:
        'A model is a mathematical representation of patterns in data.',
    },
    {
      id: '47',
      text: 'A computer program that contains expertise in a particular domain is called?',
      options: [
        'Intelligent planner',
        'Automatic processor',
        'Expert system',
        'Operational symbolizer',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Expert systems emulate human expertise in specialized domains (e.g., medical diagnosis).',
    },
    {
      id: '48',
      text: 'An AI technique that allows computers to understand associations between objects and events is called?',
      options: [
        'Heuristic processing',
        'Cognitive science',
        'Relative symbolism',
        'Pattern matching',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Pattern matching identifies relationships in data (e.g., speech recognition).',
    },
    {
      id: '49',
      text: 'Which of the following is the component of the learning system?',
      options: ['Goal', 'Model', 'Learning rules', 'All of the mentioned'],
      correctAnswerIndex: 3,
      explanation:
        'Learning systems require goals, models, and rules to adapt.',
    },
    {
      id: '50',
      text: 'Classifying email as spam, labelling webpages based on their content, and voice recognition are examples of?',
      options: [
        'Supervised learning',
        'Unsupervised learning',
        'Machine learning',
        'Deep learning',
      ],
      correctAnswerIndex: 0,
      explanation:
        'These tasks use labeled data for training (supervised learning).',
    },
    {
      id: '51',
      text: 'The field that investigates the mechanics of human intelligence is?',
      options: ['History', 'Cognitive science', 'Psychology', 'Sociology'],
      correctAnswerIndex: 1,
      explanation:
        'Cognitive science studies human cognition (perception, reasoning, learning).',
    },
    {
      id: '52',
      text: 'What is the goal of artificial intelligence?',
      options: [
        'To solve real-world problems',
        'To solve artificial problems',
        'To explain various sorts of intelligence',
        'To extract scientific causes',
      ],
      correctAnswerIndex: 2,
      explanation:
        'AI aims to understand and replicate intelligence mechanisms.',
    },
    {
      id: '53',
      text: 'Which of the following is NOT a function of an operating system?',
      options: [
        'File management',
        'Memory management',
        'Data analysis',
        'Process management',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Data analysis is an application-level task, not an OS function.',
    },
    {
      id: '54',
      text: 'What is the purpose of the kernel in an operating system?',
      options: [
        "To manage the computer's hardware",
        'To provide a graphical user interface',
        'To run application software',
        'To store files and documents',
      ],
      correctAnswerIndex: 0,
      explanation:
        'The kernel is the core component managing hardware resources.',
    },
    {
      id: '55',
      text: 'Which of the following is NOT a type of operating system?',
      options: [
        'Real-time',
        'Batch processing',
        'Hierarchical',
        'Time-sharing',
      ],
      correctAnswerIndex: 2,
      explanation: '"Hierarchical" describes file systems, not OS types.',
    },
    {
      id: '56',
      text: 'What is virtual memory in an operating system?',
      options: [
        'A memory management technique',
        'A type of physical memory',
        'A form of cache memory',
        'A hardware component',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Virtual memory extends RAM using disk space via paging/segmentation.',
    },
    {
      id: '57',
      text: 'Which of the following is an example of a multi-user operating system?',
      options: ['Windows XP', 'Windows 10 Home Edition', 'Linux', 'Mac OS'],
      correctAnswerIndex: 2,
      explanation:
        'Linux supports multiple concurrent users (unlike some Windows editions).',
    },
    {
      id: '58',
      text: 'What is the purpose of device drivers in an operating system?',
      options: [
        'To manage hardware devices',
        'To edit documents',
        'To run application software',
        'To connect to the internet',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Drivers act as translators between OS and hardware devices.',
    },
    {
      id: '59',
      text: 'In the short term and the long term scheduler the primary distinction between is?',
      options: [
        'The frequency of their execution',
        'The length of their queues',
        'The type of processes they schedule',
        'None',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Short-term scheduler handles CPU allocation; long-term manages job admission.',
    },
    {
      id: '60',
      text: 'The two steps the operating system takes to use a disk to hold its files are ______ and ______?',
      options: [
        'Caching & logical formatting',
        'Logical formatting & swap space creation',
        'Partitioning & logical formatting',
        'None',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Disks are first partitioned, then formatted with a file system.',
    },
    {
      id: '61',
      text: 'Which Android component manages the user interface?',
      options: ['Activity', 'Intent', 'Service', 'Broadcast receiver'],
      correctAnswerIndex: 0,
      explanation:
        'Activities represent single screens with UI in Android apps.',
    },
    {
      id: '62',
      text: 'Which file defines the user interface layout of an Android app?',
      options: ['XML file', 'Java file', 'Gradle file', 'JSON file'],
      correctAnswerIndex: 0,
      explanation: 'UI layouts are defined in XML (e.g., activity_main.xml).',
    },
    {
      id: '63',
      text: 'Which method is called when an Activity is first created in Android?',
      options: ['onCreate()', 'onStart()', 'onResume()', 'onInit()'],
      correctAnswerIndex: 0,
      explanation:
        'onCreate() initializes the Activity (part of the lifecycle).',
    },
    {
      id: '64',
      text: 'What is the purpose of AndroidManifest.xml?',
      options: [
        'Defines UI layout',
        'Contains app configuration',
        'Stores source code',
        'Handles database operations',
      ],
      correctAnswerIndex: 1,
      explanation:
        'The manifest declares app components, permissions, and metadata.',
    },
    {
      id: '65',
      text: 'Which component performs background operations without UI interaction?',
      options: ['Activity', 'Service', 'Intent', 'Broadcast receiver'],
      correctAnswerIndex: 1,
      explanation:
        'Services run long tasks in the background (e.g., music playback).',
    },
    {
      id: '66',
      text: "What is the purpose of 'adb' tool in Android development?",
      options: [
        'To compile code',
        'To debug apps',
        'To manage storage',
        'To design UI',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Android Debug Bridge (adb) facilitates debugging and device communication.',
    },
    {
      id: '67',
      text: 'Which architectural view concerns system functionality for end users?',
      options: [
        'Logical view',
        'Process view',
        'Development view',
        'Physical view',
      ],
      correctAnswerIndex: 0,
      explanation:
        'The logical view shows functional components and interactions.',
    },
    {
      id: '68',
      text: 'Functionality does determine architecture?',
      options: ['True', 'False'],
      correctAnswerIndex: 0,
      explanation:
        'Functional requirements heavily influence architectural design.',
    },
    {
      id: '69',
      text: 'The following can be modifiability tactics except?',
      options: [
        'Localize changes',
        'Prevent ripple effects',
        'Defer binding time',
        'Resource arbitration',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Resource arbitration relates to performance, not modifiability.',
    },
    {
      id: '70',
      text: 'What works similarly to shared public utilities providing water on demand?',
      options: ['Cloud computing', 'HDFS', 'MapReduce', 'Broker', 'MVC'],
      correctAnswerIndex: 0,
      explanation:
        'Cloud computing offers on-demand shared resources like utilities.',
    },
    {
      id: '71',
      text: 'Which design pattern provides a unified interface to a subsystem?',
      options: ['Adapter', 'Façade', 'Factory', 'Iterator'],
      correctAnswerIndex: 1,
      explanation:
        'Façade simplifies complex subsystems with a single interface.',
    },
    {
      id: '72',
      text: 'Which statement is NOT true about software architecture?',
      options: [
        'It defines software elements.',
        'Systems can have multiple structures within architecture.',
        'Every software system has an architecture.',
        'Element behavior is part of architecture only if hidden.',
        'None',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Observed behavior of elements is always part of architecture.',
    },
    {
      id: '73',
      text: 'Which measures the relative functional strength of a module?',
      options: ['Coupling', 'Cohesion', 'Pattern', 'Software procedure'],
      correctAnswerIndex: 1,
      explanation:
        "Cohesion evaluates how closely a module's responsibilities relate.",
    },
    {
      id: '74',
      text: 'In OOP, what describes inheriting properties from another class?',
      options: ['Abstraction', 'Polymorphism', 'Encapsulation', 'Inheritance'],
      correctAnswerIndex: 3,
      explanation:
        'Inheritance allows classes to reuse attributes/methods from parent classes.',
    },
    {
      id: '75',
      text: 'Which is NOT true about the object-oriented approach?',
      options: [
        'Emphasis on data rather than procedure',
        'Data is hidden from external functions',
        'Objects communicate through methods',
        'Supports abstract data but not class',
      ],
      correctAnswerIndex: 3,
      explanation: 'OOP inherently supports classes (blueprints for objects).',
    },
    {
      id: '76',
      text: 'Which feature is also known as run-time binding?',
      options: [
        'Static binding',
        'Dynamic loading',
        'Dynamic binding',
        'Data hiding',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Dynamic binding resolves methods at runtime (e.g., method overriding).',
    },
    {
      id: '77',
      text: 'Which is NOT a necessary condition for constructors?',
      options: [
        'Same name as class',
        'No return type',
        'Must contain a definition body',
        'Can have arguments',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Constructors can have empty bodies (e.g., default constructors).',
    },
    {
      id: '78',
      text: 'What is encapsulation in OOP?',
      options: [
        'Combining data and functions into a unit',
        'Combining functions into a unit',
        'Combining data into a unit',
        'Combining any elements into a unit',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Encapsulation bundles related data and methods within a class.',
    },
    {
      id: '79',
      text: 'What best describes member function overriding?',
      options: [
        'Same name in derived class only',
        'Same name/different signature in main',
        'Same name/signature in base/derived',
        'Same name in base class only',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Overriding redefines a base class method in a derived class with identical signature.',
    },
    {
      id: '80',
      text: 'Computer programming is the process of performing a computation by designing/building?',
      options: ['Code', 'Program', 'File', 'All'],
      correctAnswerIndex: 1,
      explanation: 'A program is an executable implementation of an algorithm.',
    },
    {
      id: '81',
      text: 'The source code of a program is directly executed by?',
      options: ['ALU', 'CPU', 'Main storage', 'None'],
      correctAnswerIndex: 1,
      explanation:
        'The CPU executes compiled machine code derived from source code.',
    },
    {
      id: '82',
      text: 'Which keyword refers to the object that invoked a method?',
      options: ['this', 'catch', 'abstract', 'import'],
      correctAnswerIndex: 0,
      explanation:
        'The "this" keyword references the current object in many OOP languages.',
    },
    {
      id: '83',
      text: 'Which method obtains the length of a String in Java?',
      options: ['length()', 'sizeof()', 'lengthof()', 'limitof()'],
      correctAnswerIndex: 0,
      explanation: 'String.length() returns character count in Java.',
    },
    {
      id: '84',
      text: 'Which is more effective for calling C++ functions?',
      options: [
        'Call by object',
        'Call by pointer',
        'Call by value',
        'Call by reference',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Call by reference avoids copying overhead and allows modification.',
    },
    {
      id: '85',
      text: 'What does sizeof return for a C++ array?',
      options: [
        'Number of elements',
        'Size per element',
        'Total bytes',
        'First element address',
      ],
      correctAnswerIndex: 2,
      explanation: 'sizeof(array) returns total memory occupied (bytes).',
    },
    {
      id: '86',
      text: 'Which is NOT a C++ constructor type?',
      options: ['Default', 'Parameterized', 'Copy', 'Friend'],
      correctAnswerIndex: 3,
      explanation:
        '"Friend" is a keyword for non-member access, not a constructor.',
    },
    {
      id: '87',
      text: 'What is the purpose of a C++ structure?',
      options: [
        'Same-type collection',
        'Different-type collection',
        'Arithmetic',
        'Loop definition',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Structs group heterogeneous data types (like classes but public by default).',
    },
    {
      id: '88',
      text: 'Which is true about C++ structures?',
      options: [
        'Cannot have functions',
        'Always passed by value',
        'Cannot contain arrays',
        'Auto-initialize members',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Structs are value types unless passed by pointer/reference.',
    },
    {
      id: '89',
      text: 'What does "->" do with a structure pointer?',
      options: [
        'Bitwise AND',
        'Logical OR',
        'Member access',
        'Pointer dereference',
      ],
      correctAnswerIndex: 2,
      explanation:
        'ptr->member accesses members via pointer (equivalent to (*ptr).member).',
    },
    {
      id: '90',
      text: 'Which algorithm cannot use Divide and Conquer?',
      options: ['Merge sort', 'Binary search', 'Bubble sort', 'All'],
      correctAnswerIndex: 2,
      explanation:
        'Bubble sort uses iterative comparison, not divide-and-conquer.',
    },
    {
      id: '91',
      text: 'Which data structure represents hierarchical relationships?',
      options: ['Graph', 'Tree', 'Dequeue', 'Priority queue'],
      correctAnswerIndex: 1,
      explanation: 'Trees model parent-child hierarchies (e.g., file systems).',
    },
    {
      id: '92',
      text: 'Which BST traversal displays elements in ascending order?',
      options: ['Inorder', 'Preorder', 'Postorder', 'All'],
      correctAnswerIndex: 0,
      explanation: 'Inorder traversal of a BST yields sorted order.',
    },
    {
      id: '93',
      text: 'Which data structure implements recursive algorithms?',
      options: ['Tree', 'Linked list', 'Queue', 'Stack'],
      correctAnswerIndex: 3,
      explanation: 'Stacks manage function calls/returns in recursion.',
    },
    {
      id: '94',
      text: 'Which is a stack operation?',
      options: ['Insert', 'Push', 'Add', 'Enqueue'],
      correctAnswerIndex: 1,
      explanation: 'Push adds elements to the stack (LIFO structure).',
    },
    {
      id: '95',
      text: 'What evaluates a postfix expression?',
      options: ['Queue', 'Stack', 'Linked-list', 'Array'],
      correctAnswerIndex: 1,
      explanation:
        'Stacks efficiently handle operator precedence in postfix notation.',
    },
    {
      id: '96',
      text: 'A linear list where the last node points to the first is?',
      options: [
        'Singly linked list',
        'Doubly linked list',
        'Circular linked list',
        'Tree',
      ],
      correctAnswerIndex: 2,
      explanation: 'Circular lists form a loop by connecting tail to head.',
    },
    {
      id: '97',
      text: 'Cryptography intercepts ____ type of data accessibility?',
      options: ['Authorized', 'Unauthorized', 'Legitimate', 'All'],
      correctAnswerIndex: 1,
      explanation: 'Cryptography prevents unauthorized access via encryption.',
    },
    {
      id: '98',
      text: 'How many keys does Triple DES use?',
      options: ['2', '4', '3', '5'],
      correctAnswerIndex: 2,
      explanation:
        'Triple DES applies three keys for enhanced security (K1, K2, K1).',
    },
    {
      id: '99',
      text: 'Which folder contains junk emails?',
      options: ['Inbox', 'Unwanted', 'Spam', 'None'],
      correctAnswerIndex: 2,
      explanation: 'Spam folders filter unsolicited emails.',
    },
    {
      id: '100',
      text: 'Which algorithm overcame Triple DES?',
      options: ['AES', 'Blowfish', 'DSA', 'All'],
      correctAnswerIndex: 0,
      explanation:
        'AES replaced Triple DES as the standard symmetric encryption algorithm.',
    },
  ],
}

export default wuExitMock4
