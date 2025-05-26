const wuExitMock5 = {
  id: 'mock5',
  title: 'WU Mock 5',
  year: 2024,
  type: 'model',
  image: 'wu.png',
  questions: [
    {
      id: '1',
      text: 'The address of the next instruction to be executed by the current process is provided by____',
      options: [
        'Process Stack',
        'CPU Register',
        'Process Heap',
        'Instruction Pipe',
        'Program Counter',
      ],
      correctAnswerIndex: 4,
      explanation:
        'The Program Counter (PC) holds the memory address of the next instruction to be executed.',
    },
    {
      id: '2',
      text: 'Which functions typically need to be implemented inside the Trusted Computing Base (TCB) for building a secure operating system?',
      options: ['i only', 'i and ii', 'ii and iii', 'iii and iv'],
      correctAnswerIndex: 1,
      explanation:
        'Process context switches and file reads are security-critical operations that must be part of the TCB.',
    },
    {
      id: '3',
      text: 'Under what conditions may mutual exclusion not be sufficient to ensure correct operation with sharable resources?',
      options: [
        'i and iii',
        'ii and iv',
        'i and ii',
        'iii and iv',
        'ii and iii',
      ],
      correctAnswerIndex: 0,
      explanation:
        "Mutual exclusion alone can't prevent deadlocks with multiple resources requiring atomic updates.",
    },
    {
      id: '4',
      text: 'Which is/are good examples of "producer-consumer" problems?',
      options: [
        'Only (I)',
        'Only (II)',
        'Both (I) and (II)',
        'Both (I) and (III)',
        'All are true',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Audio buffering and printer spooling are classic producer-consumer scenarios with bounded buffers.',
    },
    {
      id: '5',
      text: 'In Short-Job-First Scheduling, if the next CPU bursts of two processes are the same, ___ scheduling is used to break the tie?',
      options: [
        'Shortest-Job-First Scheduling',
        'First-Come, First-Served Scheduling',
        'Priority Scheduling',
        'Round-Robin Scheduling',
      ],
      correctAnswerIndex: 1,
      explanation:
        'FCFS is the standard tiebreaker when SJF burst times are equal.',
    },
    {
      id: '6',
      text: 'For short-term schedulers which of the following is/are true?',
      options: [
        'I only',
        'II and III only',
        'I, II, and IV only',
        'I and III only',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Short-term schedulers frequently select ready processes for CPU allocation (I & III).',
    },
    {
      id: '7',
      text: 'Which best describes the effectiveness of the Spiral model for complex projects?',
      options: [
        'Highly effective due to iterative risk analysis',
        'Less effective due to lack of structure',
        'Equally effective as other models',
        'Depends on project requirements',
      ],
      correctAnswerIndex: 0,
      explanation:
        'The Spiral model excels in complex projects through iterative risk assessment and mitigation.',
    },
    {
      id: '8',
      text: 'What should you do in version control to avoid conflicts with team members?',
      options: [
        'Commit directly to main branch',
        'Merge without reviewing',
        'Create a branch and submit pull request',
        'Share changes via email',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Branching with PRs enables code review before integration, reducing conflicts.',
    },
    {
      id: '9',
      text: 'Which activities are common to all software process models?',
      options: [
        'Coding, Testing, Maintenance',
        'Requirement gathering, analysis and validation',
        'Risk assessment, validation, maintenance',
        'Specification, development, validation, evolution',
      ],
      correctAnswerIndex: 3,
      explanation:
        'These four activities form the core of all software process models.',
    },
    {
      id: '10',
      text: 'Which methodology suits yearly deployment of working systems for enterprise automation?',
      options: [
        'RAD model',
        'Incremental model',
        'Spiral model',
        'V-shape model',
      ],
      correctAnswerIndex: 1,
      explanation:
        'The Incremental model delivers working subsystems in stages (e.g., yearly).',
    },
    // Questions 11-25
    {
      id: '11',
      text: 'With a Negotiation pattern, which is NOT true?',
      options: [
        'Client agent can propose a service',
        'Service agent can offer in response to proposal',
        'Client agent can request a service',
        'Service agent can offer without request',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Service agents only respond to client requests/proposals in negotiation patterns.',
    },
    {
      id: '12',
      text: 'What is an ethical responsibility regarding user data privacy?',
      options: [
        'Selling user data',
        'Implementing security measures',
        'Sharing without consent',
        'Unauthorized targeted ads',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Engineers must implement robust security to protect user privacy.',
    },
    {
      id: '13',
      text: 'Purpose of robots.txt?',
      options: [
        'Display site map',
        'Prevent search indexing',
        'Store credentials',
        'Track behavior',
      ],
      correctAnswerIndex: 1,
      explanation:
        'robots.txt instructs web crawlers which pages to exclude from indexing.',
    },
    {
      id: '14',
      text: 'Benefit of using a CDN?',
      options: [
        'Increased server load',
        'Slower performance',
        'Faster content delivery',
        'Decreased security',
      ],
      correctAnswerIndex: 2,
      explanation: 'CDNs cache content globally for reduced latency.',
    },
    {
      id: '15',
      text: 'Which is NOT a valid HTTP status code?',
      options: [
        '200 OK',
        '404 Not Found',
        '503 Service Unavailable',
        '300 Multiple Choices',
      ],
      correctAnswerIndex: 3,
      explanation:
        '300 is not a standard HTTP status code (should be 300 Multiple Redirects).',
    },
    {
      id: '16',
      text: 'Which is NOT a valid JavaScript data type?',
      options: ['String', 'Boolean', 'Integer', 'Object'],
      correctAnswerIndex: 2,
      explanation:
        'JavaScript uses Number instead of distinct Integer/Float types.',
    },
    {
      id: '17',
      text: 'Purpose of a CDN?',
      options: [
        'Test device performance',
        'Optimize for SEO',
        'Distribute assets globally',
        'Secure data access',
      ],
      correctAnswerIndex: 2,
      explanation:
        'CDNs use edge servers for geographically distributed content delivery.',
    },
    {
      id: '18',
      text: 'Role of cookies in web development?',
      options: [
        'Secure DB connections',
        'Store session data',
        'Compress images',
        'Validate forms',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Cookies maintain state/session information across requests.',
    },
    {
      id: '19',
      text: 'HTTP method for retrieving data?',
      options: ['POST', 'PUT', 'DELETE', 'GET'],
      correctAnswerIndex: 3,
      explanation:
        'GET is the standard method for safe, idempotent data retrieval.',
    },
    {
      id: '20',
      text: 'Purpose of sessions?',
      options: [
        'Persistent client storage',
        'Cross-page user state',
        'Content caching',
        'Data encryption',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Sessions track user state/interactions across multiple pages.',
    },
    {
      id: '21',
      text: 'Purpose of RESTful APIs?',
      options: [
        'Secure login',
        'HTTP-based system communication',
        'UI design',
        'Query optimization',
      ],
      correctAnswerIndex: 1,
      explanation:
        'REST enables stateless resource exchange between systems via HTTP.',
    },
    {
      id: '22',
      text: 'GSM feature for data confidentiality?',
      options: [
        'Authentication',
        'Ciphering',
        'Key management',
        'Registration',
      ],
      correctAnswerIndex: 1,
      explanation: 'Ciphering encrypts voice/data during transmission.',
    },
    {
      id: '23',
      text: 'Role of EIR in GSM security?',
      options: [
        'Manage resources',
        'Authenticate devices',
        'Store subscriber info',
        'Identify stolen devices',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Equipment Identity Register tracks stolen/unauthorized handsets.',
    },
    {
      id: '24',
      text: 'Consideration for offline mobile apps?',
      options: [
        'Device diversity',
        'Cross-platform support',
        'Device integration',
        'Local data sync',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Offline functionality requires local storage and sync mechanisms.',
    },
    {
      id: '25',
      text: 'Benefit of cross-platform frameworks?',
      options: [
        'Enhanced UX',
        'Multi-platform development',
        'Improved security',
        'Efficient storage',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Single codebase deployment to multiple platforms saves development effort.',
    },
    {
      id: '26',
      text: 'UMTS is associated with which mobile generation?',
      options: ['3G', '2G', '4G', '5G'],
      correctAnswerIndex: 0,
      explanation:
        'UMTS (WCDMA) was the primary 3G mobile technology standard.',
    },
    {
      id: '27',
      text: 'Primary objective of Facade pattern?',
      options: [
        'One-to-many dependency',
        'Unified subsystem interface',
        'Single instance control',
        'Encapsulate requests',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Facade provides a simplified interface to complex subsystems.',
    },
    {
      id: '28',
      text: 'Key factor for distributed system performance?',
      options: ['Scalability', 'Redundancy', 'Network Topology', 'Security'],
      correctAnswerIndex: 2,
      explanation:
        'Network topology directly impacts communication latency between nodes.',
    },
    {
      id: '29',
      text: 'Purpose of Observer pattern?',
      options: [
        'Centralized access',
        'State change notifications',
        'Single instance',
        'Interface conversion',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Observer notifies dependents of state changes automatically.',
    },
    {
      id: '30',
      text: 'Best architecture for many concurrent users?',
      options: ['Monolithic', 'Microservices', 'Client-Server', 'Layered'],
      correctAnswerIndex: 1,
      explanation:
        'Microservices scale horizontally to handle concurrent loads efficiently.',
    },
    {
      id: '31',
      text: 'Which architectural style divides systems into independent services?',
      options: [
        'Layered architecture',
        'Microservices architecture',
        'Client-server architecture',
        'Component-based architecture',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Microservices architecture decomposes systems into small, independent services communicating via lightweight protocols.',
    },
    {
      id: '32',
      text: 'Which statement about software testing is true?',
      options: [
        'Re-testing identifies fault causes',
        'Test planning is mobile-only',
        'ISO 9000 standards are immutable',
        'White box testing examines code',
      ],
      correctAnswerIndex: 3,
      explanation:
        'White box testing involves analyzing internal code structure during testing.',
    },
    {
      id: '33',
      text: 'As a tester in a large team, you should:',
      options: [
        'Work independently',
        'Collaborate with team members',
        'Seek personal recognition',
        'Transfer difficult tasks',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Effective testing requires collaboration and knowledge sharing within the team.',
    },
    {
      id: '34',
      text: 'Which ISO standard applies to Software Engineering?',
      options: ['ISO 9000', 'ISO 9001', 'ISO 9003', 'ISO 9004'],
      correctAnswerIndex: 1,
      explanation:
        'ISO 9001 specifies quality requirements for software development processes.',
    },
    {
      id: '35',
      text: 'If 8 of 30 test cases escaped detection, test effectiveness is:',
      options: ['73.3%', '78.9%', '12.9%', '26.7%'],
      correctAnswerIndex: 0,
      explanation:
        'Effectiveness = (Total - Escaped)/Total = (30-8)/30 = 73.3%.',
    },
    {
      id: '36',
      text: 'Black-box testing focuses on:',
      options: [
        'GUI errors',
        'Missing functions',
        'Performance errors',
        'All of these',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Black-box testing examines all external behaviors without viewing internal code.',
    },
    {
      id: '37',
      text: 'SVM kernel function purpose:',
      options: [
        'Increase dimensionality',
        'Count support vectors',
        'Compute accuracy',
        'Enable linear separation',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Kernel functions transform data into higher dimensions for linear separability.',
    },
    {
      id: '38',
      text: 'Purpose of feature scaling:',
      options: [
        'Expand feature space',
        'Normalize feature ranges',
        'Add non-linearity',
        'Reduce dimensions',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Scaling ensures features contribute equally regardless of original magnitude.',
    },
    {
      id: '39',
      text: 'False statement about train_test_split:',
      options: [
        'random_state ensures reproducibility',
        'random_state sets shuffle seed',
        'Requires sklearn.model_selection',
        'Default split is 75/25',
        "Feature/label order doesn't matter",
      ],
      correctAnswerIndex: 4,
      explanation:
        'Feature/label order (X,Y) is critical for correct model training.',
    },
    {
      id: '40',
      text: 'Purpose of neural network activation function:',
      options: [
        'Compute gradients',
        'Set learning rate',
        'Initialize weights',
        'Introduce non-linearity',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Activation functions enable networks to learn complex patterns.',
    },
    {
      id: '41',
      text: 'Which is NOT a non-linear classifier?',
      options: ['SVM', 'KNN', 'Decision Tree', 'Naïve Bayes'],
      correctAnswerIndex: 3,
      explanation:
        'Naïve Bayes is a linear classifier based on probability theory.',
    },
    {
      id: '42',
      text: 'Given 192.168.1.0/27, which is correct?',
      options: [
        '8 subnets, 30 hosts each',
        '4 subnets, 64 hosts each',
        '8 subnets, 32 hosts each',
        '32 subnets, 8 hosts each',
      ],
      correctAnswerIndex: 0,
      explanation:
        '/27 leaves 5 host bits (2^5-2=30 hosts) and creates 8 subnets.',
    },
    {
      id: '43',
      text: 'Subnets possible with 193.169.10.10/30?',
      options: ['32', '8', '64', '24'],
      correctAnswerIndex: 2,
      explanation: '/30 provides 64 subnets (2^(30-24)=64) with 2 hosts each.',
    },
    {
      id: '44',
      text: 'TCP variant for selective retransmission:',
      options: ['TCP Reno', 'TCP SACK', 'TCP/IP', 'None'],
      correctAnswerIndex: 1,
      explanation:
        'TCP Selective Acknowledgment (SACK) retransmits only lost packets.',
    },
    {
      id: '45',
      text: 'Subnets and hosts for 172.16.0.0/19:',
      options: [
        '7 subnets, 2046 hosts',
        '8 subnets, 2046 hosts',
        '7 subnets, 30 hosts',
        '8 subnets, 8190 hosts',
      ],
      correctAnswerIndex: 1,
      explanation:
        '/19 provides 8 subnets (2^(19-16)) with 13 host bits (2^13-2=8190 hosts).',
    },
    {
      id: '46',
      text: 'Protocol converting IP to MAC addresses:',
      options: ['ARP', 'RARP', 'BOOTP', 'ICMP'],
      correctAnswerIndex: 0,
      explanation:
        'Address Resolution Protocol (ARP) maps IP addresses to physical MAC addresses.',
    },
    {
      id: '47',
      text: 'Error detection using checksums:',
      options: ['Cut-Through', 'CRC', 'Parity bit', 'Fragment-Free'],
      correctAnswerIndex: 1,
      explanation:
        'Cyclic Redundancy Check (CRC) uses polynomial checksums for error detection.',
    },
    {
      id: '48',
      text: 'Stack pseudocode output for "AASTU":',
      options: ['AASTU', 'AASTUAASTU', 'UTSAA', 'UTSAAASTU'],
      correctAnswerIndex: 2,
      explanation:
        'Stacks reverse input via LIFO (Last-In-First-Out) ordering.',
    },
    {
      id: '49',
      text: 'Hash table insertion order question:',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswerIndex: 1,
      explanation:
        'Linear probing resolves collisions by sequential searching.',
    },
    {
      id: '50',
      text: 'Hash table advantage:',
      options: [
        'Easy implementation',
        'Fast data access',
        'Good locality',
        'Efficient for small data',
      ],
      correctAnswerIndex: 1,
      explanation: 'Hash tables provide O(1) average-case access time.',
    },
    {
      id: '51',
      text: 'Data structure allowing dual-end operations:',
      options: ['Priority queue', 'Dequeue', 'Circular queue', 'Queue'],
      correctAnswerIndex: 1,
      explanation:
        'Deque (Double-ended queue) allows insertions/deletions at both ends.',
    },
    {
      id: '52',
      text: 'Best sort for random linked list:',
      options: ['Insertion Sort', 'Quick Sort', 'Heap Sort', 'Merge Sort'],
      correctAnswerIndex: 3,
      explanation:
        "Merge Sort's O(n log n) performance and stability suit linked lists.",
    },
    {
      id: '53',
      text: 'Best storage for score frequencies:',
      options: [
        'Array of 50',
        'Array of 100',
        'Array of 500',
        'Dynamic array of 550',
      ],
      correctAnswerIndex: 0,
      explanation: 'Scores above 50 need only 51 indices (50-100).',
    },
    {
      id: '54',
      text: 'Data structure allowing dual-end operations:',
      options: ['Priority queue', 'Dequeue', 'Circular queue', 'Queue'],
      correctAnswerIndex: 1,
      explanation:
        'Deque (Double-ended queue) allows insertions/deletions at both ends.',
    },
    {
      id: '55',
      text: 'Best sort for random linked list:',
      options: ['Insertion Sort', 'Quick Sort', 'Heap Sort', 'Merge Sort'],
      correctAnswerIndex: 3,
      explanation:
        "Merge Sort's O(n log n) performance and stability suit linked lists.",
    },
    {
      id: '56',
      text: 'Best storage for score frequencies:',
      options: [
        'Array of 50',
        'Array of 100',
        'Array of 500',
        'Dynamic array of 550',
      ],
      correctAnswerIndex: 0,
      explanation: 'Scores above 50 need only 51 indices (50-100).',
    },
    {
      id: '57',
      text: 'Steps for inventory management program:',
      options: [
        'Requirements → Data types → Algorithm → Coding → Docs → Testing',
        'Analysis → Algorithm → Coding → Data types → Docs → Testing',
        'Requirements → Algorithm → Data types → Coding → Testing → Docs',
        'Analysis → Docs → Algorithm → Coding → Data types → Testing',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Standard SDLC sequence with testing before final documentation.',
    },
    {
      id: '58',
      text: 'Ineffective continuous learning strategy:',
      options: [
        'Large LinkedIn network',
        'Attending workshops',
        'Online communities',
        'Training programs',
      ],
      correctAnswerIndex: 0,
      explanation: "Networking alone doesn't guarantee skill development.",
    },
    {
      id: '59',
      text: 'Joining programming communities demonstrates:',
      options: [
        'Problem-solving',
        'Continuous learning',
        'Skill improvement',
        'Networking',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Community engagement shows commitment to ongoing education.',
    },
    {
      id: '60',
      text: 'User-defined types aid modular programming by:',
      options: [
        'Simplifying debugging',
        'Enhancing reusability',
        'Increasing speed',
        'Eliminating comments',
      ],
      correctAnswerIndex: 1,
      explanation: 'Custom types encapsulate logic for reuse across modules.',
    },
    {
      id: '61',
      text: 'Static data member initialization:',
      options: ['Inside class', 'Outside class', 'At runtime', 'Never'],
      correctAnswerIndex: 1,
      explanation:
        'Static members require separate definition outside class declaration.',
    },
    {
      id: '62',
      text: 'Output of reference variable program:',
      options: ['9', '10', '11', 'Error'],
      correctAnswerIndex: 1,
      explanation:
        'Reference variable aref reflects changes to original variable a.',
    },
    {
      id: '63',
      text: 'Correct default argument declaration:',
      options: [
        'int f(int x, int y=3, int z=2)',
        'int f(int x=3, int y=2, int z)',
        'int f(int x=3, int y, int z=2)',
        'int f(int x, int y, int z)',
      ],
      correctAnswerIndex: 0,
      explanation: 'Default arguments must trail non-default parameters.',
    },
    {
      id: '64',
      text: 'False statement about C++ references:',
      options: [
        'Must be initialized',
        'Cannot be reassigned',
        'Cannot be NULL',
        'Cannot reference constants',
      ],
      correctAnswerIndex: 3,
      explanation: 'References can bind to constants via const references.',
    },
    {
      id: '65',
      text: 'Best database security measure:',
      options: [
        'Strong passwords',
        'Regular backups',
        'Data encryption',
        'Role-based access',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Access control provides fundamental security at the permission level.',
    },
    {
      id: '66',
      text: 'Database normalization:',
      options: [
        'Combine tables',
        'Reduce redundancy',
        'Encrypt data',
        'Optimize queries',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Normalization minimizes duplication through table decomposition.',
    },
    {
      id: '67',
      text: 'Best model for JSON data:',
      options: ['Relational', 'Hierarchical', 'Object-oriented', 'Document'],
      correctAnswerIndex: 3,
      explanation: 'Document databases natively store JSON/BSON documents.',
    },
    {
      id: '68',
      text: 'DBMS consists of:',
      options: ['Translators', 'Programs', 'Keys', 'Language activity'],
      correctAnswerIndex: 1,
      explanation: 'DBMS software manages database creation/maintenance.',
    },
    {
      id: '69',
      text: 'Database instance refers to:',
      options: ['Independence', 'Current data state', 'Schema', 'Data domain'],
      correctAnswerIndex: 1,
      explanation: 'An instance is the database content at a specific time.',
    },
    {
      id: '70',
      text: 'Defines overall database design:',
      options: ['Application', 'DDL', 'Schema', 'Source code'],
      correctAnswerIndex: 2,
      explanation: 'Schema describes database structure and constraints.',
    },
    {
      id: '71',
      text: 'Fundamental purpose of infosec:',
      options: [
        'Prevent unauthorized access',
        'Enhance performance',
        'Improve UX',
        'Increase speed',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Information security primarily ensures data confidentiality/integrity.',
    },
    {
      id: '72',
      text: 'Data breach consequences:',
      options: [
        'Reputation damage',
        'Financial loss',
        'Regulatory fines',
        'All',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Breaches impact organizations in multiple dimensions simultaneously.',
    },
    {
      id: '73',
      text: 'Secure coding practices include:',
      options: [
        'Library updates',
        'Security reviews',
        'Data encryption',
        'All',
      ],
      correctAnswerIndex: 3,
      explanation: 'Comprehensive security requires multiple defensive layers.',
    },
    {
      id: '74',
      text: 'Software security definition:',
      options: [
        'Virus protection',
        'Smooth operation',
        'Resource protection',
        'UX enhancement',
      ],
      correctAnswerIndex: 2,
      explanation: 'Software security protects systems and information assets.',
    },
    {
      id: '75',
      text: 'Software security vs cybersecurity:',
      options: [
        'Focuses on programs',
        'Broader protection scope',
        'Neither',
        'Both',
      ],
      correctAnswerIndex: 3,
      explanation: 'Software security is a subset of broader cybersecurity.',
    },
    {
      id: '76',
      text: 'Feature supporting class reusability:',
      options: ['Inheritance', 'Polymorphism', 'Overloading', 'All'],
      correctAnswerIndex: 3,
      explanation:
        'All these OOP features promote code reuse and extensibility.',
    },
    {
      id: '77',
      text: 'When is a destructor mandatory?',
      options: [
        'Multiple objects',
        'Most classes',
        'Copy constructor exists',
        'Dynamic objects',
      ],
      correctAnswerIndex: 3,
      explanation: 'Destructors must free dynamically allocated resources.',
    },
    {
      id: '78',
      text: 'Incorrect constructor type:',
      options: [
        'Friend constructor',
        'Default constructor',
        'Parameterized constructor',
        'Copy constructor',
      ],
      correctAnswerIndex: 0,
      explanation: 'Constructors cannot be declared as friend functions.',
    },
    {
      id: '79',
      text: 'Variable existence determined by:',
      options: ['Data type', 'Storage class', 'Scope', 'All'],
      correctAnswerIndex: 2,
      explanation: 'Scope dictates variable lifetime and visibility.',
    },
    {
      id: '80',
      text: 'Protected inheritance behavior:',
      options: [
        "Won't compile",
        'Derived class body undefined',
        'Compiles successfully',
        'Depends on data',
      ],
      correctAnswerIndex: 2,
      explanation: 'Empty class definitions are valid in C++.',
    },
    {
      id: '81',
      text: 'False statement about knowledge:',
      options: [
        'Machines need knowledge',
        'Easy to capture knowledge',
        'Multiple representation methods',
        'All false',
        'None',
      ],
      correctAnswerIndex: 1,
      explanation: 'Knowledge acquisition remains challenging in AI systems.',
    },
    {
      id: '82',
      text: 'Recognize-act-cycle characterizes:',
      options: ['Frames', 'Semantic nets', 'Rules', 'Production rules'],
      correctAnswerIndex: 3,
      explanation: 'Production systems continuously match and fire rules.',
    },
    {
      id: '83',
      text: 'If P→R when P→Q and Q→R, this rule is:',
      options: [
        'Modus Ponens',
        'Resolution',
        'Disjunctive Syllogism',
        'Hypothetical Syllogism',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Hypothetical syllogism chains implications: ((P→Q)∧(Q→R))⇒(P→R).',
    },
    {
      id: '84',
      text: 'Expert system limitation:',
      options: [
        'Problem-solving',
        'Prediction',
        'Knowledge refinement',
        'Solution justification',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Traditional expert systems cannot autonomously refine knowledge.',
    },
    {
      id: '85',
      text: 'DFS space complexity:',
      options: ['O(bm)', 'O(b^m)', 'O(2bm)', 'O(b+m)'],
      correctAnswerIndex: 0,
      explanation: 'DFS stores only current path (branch length × depth).',
    },
    {
      id: '86',
      text: 'Requirements document describes:',
      options: [
        'System services',
        'Constraints',
        'Domain information',
        'All',
        'None',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Requirements capture functional needs, limits, and context.',
    },
    {
      id: '87',
      text: 'Not a context-free inception question:',
      options: [
        'Economic benefit',
        'Project sponsor',
        'Funding source',
        'End users',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Economic analysis comes after establishing project viability.',
    },
    {
      id: '88',
      text: 'Non-UML analysis diagram:',
      options: ['Activity', 'Class', 'Dataflow', 'State'],
      correctAnswerIndex: 2,
      explanation: 'Dataflow diagrams belong to structured analysis methods.',
    },
    {
      id: '89',
      text: 'Agile Scrum definition:',
      options: [
        'Incremental progress',
        'Decremental progress',
        'Neutral progress',
        'No progress',
      ],
      correctAnswerIndex: 0,
      explanation: 'Scrum delivers working increments iteratively.',
    },
    {
      id: '90',
      text: 'SRS with verifiable requirements:',
      options: ['Verifiable', 'Traceable', 'Complete', 'Modifiable'],
      correctAnswerIndex: 0,
      explanation: 'Verifiable requirements can be objectively tested.',
    },
    {
      id: '91',
      text: 'Optionally delegated project task:',
      options: ['Planning', 'Execution', 'Control', 'Feasibility'],
      correctAnswerIndex: 3,
      explanation:
        'Feasibility studies often precede formal project initiation.',
    },
    {
      id: '92',
      text: 'Task involving corrective actions:',
      options: ['Planning', 'Execution', 'Control', 'Closure'],
      correctAnswerIndex: 2,
      explanation: 'Project control monitors and corrects deviations.',
    },
    {
      id: '93',
      text: 'Avoiding development frustration:',
      options: [
        'Team autonomy',
        'Centralized control',
        'Withholding bad news',
        'Productivity rewards',
      ],
      correctAnswerIndex: 0,
      explanation: 'Empowered teams show higher motivation and satisfaction.',
    },
    {
      id: '94',
      text: 'Process improvement sub-process:',
      options: [
        'Process introduction',
        'Process analysis',
        'De-processification',
        'Process distribution',
      ],
      correctAnswerIndex: 1,
      explanation: 'Analysis identifies improvement opportunities.',
    },
    {
      id: '95',
      text: 'Effective project management focuses on:',
      options: [
        'People, performance, payoff, product',
        'People, product, performance, process',
        'People, product, process, project',
        'People, process, payoff, product',
      ],
      correctAnswerIndex: 2,
      explanation: 'The 4Ps framework: People → Product → Process → Project.',
    },
    {
      id: '96',
      text: 'Taute Maintenance Model changes:',
      options: ['6', '7', '8', '9'],
      correctAnswerIndex: 1,
      explanation: 'Taute model defines 7 maintenance change types.',
    },
    {
      id: '97',
      text: 'Maintenance for environmental changes:',
      options: ['Corrective', 'Adaptive', 'Perfective', 'Preventive'],
      correctAnswerIndex: 1,
      explanation: 'Adaptive maintenance accommodates external changes.',
    },
    {
      id: '98',
      text: 'True refactoring statement:',
      options: [
        'Language-agnostic',
        'Changes functionality',
        'Requires special tools',
        'Increases feature cost',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Refactoring improves code structure without altering behavior.',
    },
    {
      id: '99',
      text: 'Incremental Reengineering advantage:',
      options: [
        'Faster components',
        'Easier debugging',
        'Visible progress',
        'All correct',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Incremental approaches offer multiple benefits simultaneously.',
    },
    {
      id: '100',
      text: 'Legacy system evolution technique:',
      options: [
        'Forward engineering',
        'Reverse Engineering',
        'Reengineering',
        'Both B and C',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Reverse engineering extracts specs for forward reimplementation.',
    },
  ],
}

export default wuExitMock5
