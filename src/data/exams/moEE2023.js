const moEE2023 = {
  id: 'software_exit_exam',
  title: 'MOEE model',
  year: 2023,
  type: 'model',
  image: 'moe.png',
  questions: [
    {
      id: '1',
      text: 'A process scheduling approach on which decision as to which available process will be executed by the Processor refers to:',
      options: [
        'Long-term scheduling',
        'I/O scheduling',
        'Short-term scheduling',
        'Medium-term scheduling',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Short-term scheduling determines which ready process gets CPU time next.',
    },
    {
      id: '2',
      text: 'Which of the following analysis mechanism defines the input for which the algorithm takes the least time?',
      options: ['Best case', 'Average case', 'Standard Case', 'Worst case'],
      correctAnswerIndex: 0,
      explanation:
        'Best case analysis examines the fastest possible runtime scenario.',
    },
    {
      id: '3',
      text: 'Which of the following UML diagram is not used to represent dynamic behavior of an object during analysis?',
      options: [
        'Instance diagram',
        'Sequence diagram',
        'Collaboration diagram',
        'Activity diagram',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Instance diagrams show static object relationships, not dynamic behavior.',
    },
    {
      id: '4',
      text: 'Assume there is Class A which is extended by Class B and Class C. Class A is abstract with an abstract method welcome(). Which Class B definition will NOT cause a compiler error?',
      options: [
        'public class Class B extends Class A { public String whatObjectAmI() { return "I am a class B object"; } }',
        'public class Class B extends Class A { public void welcome(String str) { } }',
        'public class Class B extends Class A { public String whatObjectAmI() { return "I am a class 8 object"; } }',
        'public class Class B extends Class A { public void welcome(String str) { } }',
      ],
      correctAnswerIndex: 0,
      explanation:
        'The correct option properly implements the abstract method from the parent class.',
    },
    {
      id: '5',
      text: 'Which of the following is not type of Ensemble learning?',
      options: ['Lasso', 'Boosting', 'Bagging', 'Random forest'],
      correctAnswerIndex: 0,
      explanation: 'Lasso is a regression method, not an ensemble technique.',
    },
    {
      id: '6',
      text: 'A technique for generating plans with conditionals and loops are almost identical to those for generating programs from logical specifications is called:',
      options: [
        'Automatic programming',
        'Automatic learning',
        'Automatic monitoring',
        'Automatic recursive',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Automatic programming involves generating code from specifications.',
    },
    {
      id: '7',
      text: 'The CSS property used to specify the transparency of an element is?',
      options: ['Transparency', 'Opacity', 'Background', 'Alpha'],
      correctAnswerIndex: 1,
      explanation: 'The opacity property controls element transparency in CSS.',
    },
    {
      id: '8',
      text: 'Which of the following describes the functionalities of application layer?',
      options: [
        'It deals encapsulation of frames',
        'It deals encapsulation of packets',
        'It deals mechanical, electrical and physical connectivity',
        'It is process to process interaction',
      ],
      correctAnswerIndex: 3,
      explanation:
        'The application layer handles end-to-end process communication.',
    },
    {
      id: '9',
      text: 'Which function is used to serialize an object into a JSON string in Javascript?',
      options: ['parseJson()', 'toJson()', 'stringify()', 'parse()'],
      correctAnswerIndex: 2,
      explanation: 'JSON.stringify() converts objects to JSON strings.',
    },
    {
      id: '10',
      text: 'A TCP/IP port number used by SSH is?',
      options: ['20', '22', '23', '21'],
      correctAnswerIndex: 1,
      explanation: 'SSH default port is 22 for secure shell connections.',
    },
    {
      id: '11',
      text: 'Given code fragment, how many tests are required for 100% decision coverage?',
      options: ['2', '6', '4', '3'],
      correctAnswerIndex: 2,
      explanation:
        '4 tests cover all decision paths in the nested if-else structure.',
    },
    {
      id: '12',
      text: 'Which is true regarding ON UPDATE CASCADE?',
      options: [
        'Sets referencing primary key to NULL',
        'Changes referencing foreign key to updated primary key',
        'Sets referencing primary key to default',
        'Deletes all referencing tuples',
      ],
      correctAnswerIndex: 1,
      explanation: 'CASCADE updates foreign keys when primary keys change.',
    },
    {
      id: '13',
      text: 'Which file system can change kernel parameters at runtime using sysctl?',
      options: ['Ext4', 'Sysfs', 'Procfs', 'Ext3'],
      correctAnswerIndex: 2,
      explanation:
        'Procfs provides runtime kernel parameter access via sysctl.',
    },
    {
      id: '14',
      text: 'A software tool that developers use to support software development activities is:',
      options: ['CASE tools', 'CMMI', 'CMM', 'BPMN'],
      correctAnswerIndex: 0,
      explanation:
        'CASE (Computer-Aided Software Engineering) tools assist development.',
    },
    {
      id: '15',
      text: 'How does a switch forward a frame destined for a recognized unicast MAC address?',
      options: [
        'Matches destination address to MAC table',
        'Matches source address to MAC table',
        'Matches incoming interface to source MAC',
        'Matches destination IP to MAC address',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Switches use destination MAC addresses for forwarding decisions.',
    },
    {
      id: '16',
      text: 'Which of the following is a unique IPV4 address?',
      options: [
        '172.17.17.17/26',
        '172.16.30.0/16',
        '172.16.25.250/16',
        '172.43.17.1/16',
      ],
      correctAnswerIndex: 0,
      explanation:
        '172.17.17.17/26 is a specific host address, not a network range.',
    },
    {
      id: '17',
      text: 'Which is not correct about HTML form elements?',
      options: [
        'Can be of different types',
        'Used for taking user input',
        'Used for displaying outputs',
        'Defined inside <form> tag',
      ],
      correctAnswerIndex: 2,
      explanation: 'Form elements are for input, not output display.',
    },
    {
      id: '18',
      text: 'Which describes functional organization structure?',
      options: [
        'Low-moderate PM authority, part-time PM role',
        'Little/no PM authority, functional manager controls budget',
        'High PM authority, full-time PM staff',
        'Limited PM authority, part-time PM role',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Functional orgs give power to department managers, not PMs.',
    },
    {
      id: '19',
      text: 'What will be the output of: int a=4; System.out.print(++a * 5);',
      options: ['5', '20', '24', '25'],
      correctAnswerIndex: 3,
      explanation: 'Prefix increment makes a=5 before multiplication (5*5=25).',
    },
    {
      id: '20',
      text: 'In a quad-tree each non-leaf node has exactly ______ children.',
      options: ['2', '1', '4', '3'],
      correctAnswerIndex: 2,
      explanation: 'Quad-trees divide space into 4 quadrants at each level.',
    },
    {
      id: '21',
      text: 'Which is used for quality evaluation using plan, check, act approach?',
      options: ['IEEE', 'Capability maturity model', 'Six sigma', 'ISO model'],
      correctAnswerIndex: 2,
      explanation:
        'Six sigma uses DMAIC (Define, Measure, Analyze, Improve, Control).',
    },
    {
      id: '22',
      text: 'Result of: int arr[] = {3,4,5,6,7}; for(int i=0;i<arr.length-2;++i) print(arr[i]);',
      options: ['3 4 5', '3 4 5 6', '3 4', '3 4 5 6 7'],
      correctAnswerIndex: 0,
      explanation: 'Loop runs for indices 0-2 (length-2 = 3 iterations).',
    },
    {
      id: '23',
      text: 'An AI system is composed of:',
      options: [
        'Agent and Environment',
        'Data and Information',
        'Device and Network',
        'Technology and Evolution',
      ],
      correctAnswerIndex: 0,
      explanation: 'AI systems involve agents operating in environments.',
    },
    {
      id: '24',
      text: 'Which is true regarding integration testing?',
      options: [
        'Uses ideal scenario test data',
        'Tests components in isolation',
        'Proves component interaction',
        'Done after system testing',
      ],
      correctAnswerIndex: 2,
      explanation: 'Integration testing verifies component interactions.',
    },
    {
      id: '25',
      text: 'Which describes the leading agile development method?',
      options: ['Sprint', 'Six sigma', 'Extreme programming', 'Scrum'],
      correctAnswerIndex: 3,
      explanation: 'Scrum is the most widely adopted agile framework.',
    },
    {
      id: '26',
      text: 'Which access modifier is suitable if you want your instance variables to be accessible from both the methods of the class and the descendant classes?',
      options: ['Private', 'Inherited', 'Public', 'Protected'],
      correctAnswerIndex: 3,
      explanation:
        'Protected allows access within class and subclasses while maintaining encapsulation.',
    },
    {
      id: '27',
      text: 'Which of the following is not a data link layer technology?',
      options: ['OSPF', 'VLAN', 'PPP', 'Frame-relay'],
      correctAnswerIndex: 0,
      explanation:
        'OSPF is a network layer routing protocol, not data link layer.',
    },
    {
      id: '28',
      text: 'The purpose of <iostream> header file in C++ program is:',
      options: [
        'Makes the code secure',
        'To make the code readable',
        'To provide input/output functionality',
        'To create file streams',
      ],
      correctAnswerIndex: 2,
      explanation:
        '<iostream> provides basic input/output stream capabilities in C++.',
    },
    {
      id: '29',
      text: 'What describes informed search algorithms?',
      options: [
        'They are optimal',
        'They are admissible',
        'They are consistent',
        'They are complete',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Informed searches use heuristics but guarantee completeness (finding a solution if one exists).',
    },
    {
      id: '30',
      text: 'Which one is not an architectural style?',
      options: ['MVC', 'Client server', 'UML', 'OSI layer'],
      correctAnswerIndex: 2,
      explanation: 'UML is a modeling language, not an architectural style.',
    },
    {
      id: '31',
      text: 'As a software tester, which testing principle can save time and cost of testing?',
      options: [
        'Exhaustive testing is not possible',
        'Testing early development process saves time and cost',
        'Prioritize testing based on risk and criticality',
        'Testing the entire development process affect time and cost',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Early testing catches defects when they are cheaper to fix.',
    },
    {
      id: '32',
      text: "Which specifies divergence between Dijkstra's Algorithm (DA) and Uniform Cost Search (UCS)?",
      options: [
        'DA is optimal, but not UCS',
        'UCS finds the optimal solution while DA',
        'DA first collects them into a Queue but UCS discover them as they come',
        'DA discovers nodes as they come while UCS first collects them in a Queue',
      ],
      correctAnswerIndex: 3,
      explanation:
        "Dijkstra's processes nodes as discovered, UCS maintains a priority queue.",
    },
    {
      id: '33',
      text: 'In software testing, relates genuine imperfect segments to absolute number of segments anticipated as faulty:',
      options: ['F-measure', 'Recall', 'Accuracy', 'Precision'],
      correctAnswerIndex: 3,
      explanation:
        'Precision measures correct positive predictions among all positives.',
    },
    {
      id: '34',
      text: 'Which is not true about binary tree?',
      options: [
        'Empty tree is valid binary tree',
        'Consists of root and two disjoint binary trees',
        'Each node has zero, one or two children',
        'Called binary tree only if each node has zero child',
      ],
      correctAnswerIndex: 3,
      explanation: 'Binary trees can have nodes with 0, 1, or 2 children.',
    },
    {
      id: '35',
      text: 'What happens if no break statement follows case labels in switch?',
      options: [
        'All non-matching cases execute',
        'Program generates exception',
        'Default block executes',
        'Program halts',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Without break, execution "falls through" to subsequent cases.',
    },
    {
      id: '36',
      text: 'Security estimation is essential component of ______ process.',
      options: [
        'Software design',
        'Software development',
        'SRS design',
        'Risk management',
      ],
      correctAnswerIndex: 3,
      explanation: 'Security risks are assessed during risk management.',
    },
    {
      id: '37',
      text: 'Which is indirect application of queues?',
      options: [
        'Multiprogramming',
        'OS schedule jobs in arrival order',
        'Auxiliary data structure for algorithms',
        'Simulation of real-world queues',
      ],
      correctAnswerIndex: 2,
      explanation: 'Queues serve as helper structures in many algorithms.',
    },
    {
      id: '38',
      text: 'Which model helps cope with requirement changes to reduce rework cost?',
      options: [
        'Staged delivery',
        'Prototyping',
        'Spiral model',
        'Software Version control',
      ],
      correctAnswerIndex: 2,
      explanation:
        "Spiral model's iterative approach accommodates changes well.",
    },
    {
      id: '39',
      text: 'A temporary endeavor to create a unique product/service/result is:',
      options: ['Program', 'Portfolio', 'Project', 'Process'],
      correctAnswerIndex: 2,
      explanation:
        'PMI defines projects as temporary with unique deliverables.',
    },
    {
      id: '40',
      text: 'Select the odd one out:',
      options: [
        'System design',
        'Requirement validation',
        'Requirement elicitation',
        'Requirement analysis',
      ],
      correctAnswerIndex: 0,
      explanation: 'System design follows requirements activities.',
    },
    {
      id: '41',
      text: 'Which is model optimization technique?',
      options: ['Gradient descent', 'Bagging', 'Lasso', 'Gradient boosting'],
      correctAnswerIndex: 0,
      explanation:
        'Gradient descent optimizes model parameters during training.',
    },
    {
      id: '42',
      text: 'SQL keyword to eliminate duplicate tuples:',
      options: ['UNIQUE', 'DISTINCT', 'Group By', 'PRIMARY'],
      correctAnswerIndex: 1,
      explanation: 'SELECT DISTINCT removes duplicate rows from results.',
    },
    {
      id: '43',
      text: 'Ultimate purpose of inheritance in OOP:',
      options: [
        'Data protection',
        'Code reusability',
        'Resources saving',
        'Providing multiple forms for methods',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Inheritance primarily enables code reuse through extension.',
    },
    {
      id: '44',
      text: 'The base class from which all Java classes inherit:',
      options: [
        'java.lang.class',
        'java.class.inherited',
        'java.lang.Object',
        'java.class.object',
      ],
      correctAnswerIndex: 2,
      explanation: "Object is the root of Java's class hierarchy.",
    },
    {
      id: '45',
      text: 'Which is not an Android layout?',
      options: [
        'Card Layout',
        'Linear Layout',
        'Relative Layout',
        'Frame Layout',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Android has no built-in Card Layout (though libraries add it).',
    },
    {
      id: '46',
      text: 'CSS element for rounded borders:',
      options: [
        'border-circle',
        'border-rounded',
        'border-radius',
        'border-corner',
      ],
      correctAnswerIndex: 2,
      explanation: 'border-radius property creates rounded corners.',
    },
    {
      id: '47',
      text: 'Technique to classify large numbers of ideas into groups:',
      options: [
        'Affinity Diagrams',
        'Activity-on-Node',
        'Activity List',
        'Adaptive Life Cycle',
      ],
      correctAnswerIndex: 0,
      explanation: 'Affinity diagrams group related ideas visually.',
    },
    {
      id: '48',
      text: 'Unauthorized disclosure of information refers to:',
      options: [
        'Integrity',
        'Confidentiality',
        'Authentication',
        'Authorization',
      ],
      correctAnswerIndex: 1,
      explanation: 'Confidentiality protects against unauthorized disclosure.',
    },
    {
      id: '49',
      text: 'Which is not a big data analysis contribution?',
      options: [
        'Introduce new data usage culture',
        'Gain competitive advantage',
        'Cope with volatile market',
        'Satisfy customer need',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Customer needs are addressed by products, not analysis itself.',
    },
    {
      id: '50',
      text: 'Correct structure of for loop statement:',
      options: [
        'for(initialization, condition, increment/decrement)',
        'for(initialization; condition)',
        'for(increment/decrement; initialization; condition)',
        'for(initialization; condition; increment/decrement)',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Standard for loop syntax requires semicolons between clauses.',
    },
    {
      id: '51',
      text: 'Introducing new requirement at the later phase of the project is not recommended due to?',
      options: [
        'Cost of change',
        'Coding complexity',
        'Analysis complexity',
        'Requirement complexity',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Late requirement changes are expensive due to rework needed (cost increases exponentially over project phases).',
    },
    {
      id: '52',
      text: 'To verify integration of messages between different processes communication, a tester would use:',
      options: [
        'Network authorization',
        'Decryption algorithm',
        'Message Digest',
        'Digital Signature',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Message digests (hashes) verify message integrity during process communication.',
    },
    {
      id: '53',
      text: 'Fundamental program structure does NOT include:',
      options: [
        'Back end component',
        'Variable definition',
        'main() method',
        'Input/output features',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Backend components are architectural choices, not fundamental to all program structures.',
    },
    {
      id: '54',
      text: 'Given a hash table with linear probing and identity hash function, which insertion orders are valid?',
      options: [
        '12, 14, 3, 9, 4, 18, 21',
        '9, 14, 4, 18, 12, 3, 21',
        '12, 9, 18, 3, 14, 21, 4',
        '12, 3, 14, 18, 4, 9, 21',
      ],
      correctAnswerIndex: 3,
      explanation:
        'This order maintains proper linear probing without collisions that would displace existing entries.',
    },
    {
      id: '55',
      text: 'When a system continues despite unexpected problems, it demonstrates good:',
      options: ['Integrity', 'Robustness', 'Maintainability', 'Reliability'],
      correctAnswerIndex: 1,
      explanation:
        'Robustness describes system resilience against failures and edge cases.',
    },
    {
      id: '56',
      text: 'In big data, velocity refers to:',
      options: [
        'Speed of storage consumption',
        'Speed of data ingestion',
        'Speed of input data generation',
        'Speed of data processing and storing',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Velocity characterizes how quickly data flows into the system from sources.',
    },
    {
      id: '57',
      text: 'Which Android component displays part of an activity on screen?',
      options: ['Manifest', 'Intent', 'View', 'Fragment'],
      correctAnswerIndex: 3,
      explanation:
        'Fragments represent reusable UI portions within activities.',
    },
    {
      id: '58',
      text: 'In dormitory management database design, if every DORM must have at least one student:',
      options: [
        'STUDENT has total participation',
        'STUDENT has existence dependency',
        'DORM has partial participation',
        'DORM has existence dependency',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Total participation means every STUDENT must be associated with a DORM.',
    },
    {
      id: '59',
      text: 'A program that initializes all system aspects before starting the OS is:',
      options: ['Bootstrap', 'Cache memory', 'Bootloader', 'BIOS'],
      correctAnswerIndex: 2,
      explanation:
        'Bootloader initializes hardware and loads the OS kernel into memory.',
    },
    {
      id: '60',
      text: 'Method overriding demonstrates which OOP principle?',
      options: ['Abstraction', 'Inheritance', 'Encapsulation', 'Polymorphism'],
      correctAnswerIndex: 3,
      explanation:
        'Polymorphism allows subclasses to override superclass methods with specialized implementations.',
    },
    {
      id: '61',
      text: 'Tool to check software meets minimum coding standards:',
      options: [
        'Code Auditor',
        'Documenters',
        'Test Data Generator',
        'Interactive Debuggers',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Code auditors analyze code against standards and best practices.',
    },
    {
      id: '62',
      text: 'System software residing in main memory is:',
      options: ['Compiler', 'Loader', 'Executor', 'Linker'],
      correctAnswerIndex: 1,
      explanation: 'Loader places programs into memory for execution.',
    },
    {
      id: '63',
      text: 'Creating multiple methods with same name but different parameters demonstrates:',
      options: ['Overriding', 'Inheritance', 'Encapsulation', 'Polymorphism'],
      correctAnswerIndex: 3,
      explanation:
        'Method overloading (compile-time polymorphism) allows same method names with different signatures.',
    },
    {
      id: '64',
      text: 'Which is NOT a criteria for selecting programming languages?',
      options: [
        'Modularity',
        'Platform dependency',
        'Portability',
        'Code efficiency',
      ],
      correctAnswerIndex: 1,
      explanation: 'Platform independence is desirable, not dependency.',
    },
    {
      id: '65',
      text: 'Virtual machine used by Android OS:',
      options: ['CLR', 'Docker', 'Dalvik virtual machine', 'JVM'],
      correctAnswerIndex: 2,
      explanation:
        'Android originally used Dalvik (now ART) as its specialized VM.',
    },
    {
      id: '66',
      text: 'First callback invoked during activity lifecycle:',
      options: ['onRestart()', 'onCreate()', 'onClick()', 'onStart()'],
      correctAnswerIndex: 1,
      explanation:
        'onCreate() initializes essential components when activity is first created.',
    },
    {
      id: '67',
      text: 'APK stands for:',
      options: [
        'Android Phone Kit',
        'Android Package Kit',
        'Android Page Kit',
        'Android Platform Kit',
      ],
      correctAnswerIndex: 1,
      explanation: 'APK is the package file format for Android apps.',
    },
    {
      id: '68',
      text: 'Principle stating 80% of problems can be fixed with 20% effort:',
      options: [
        'Pairwise principle',
        'Partition principle',
        'Pareto principle',
        'Parametric principle',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Pareto principle (80/20 rule) observes disproportionate impact distribution.',
    },
    {
      id: '69',
      text: 'Incorrect statement about generalization in system modeling:',
      options: [
        'Lower-level classes inherit higher-level attributes',
        'Higher-level classes are more specific',
        'Facilitates easy data modification',
        'Common info maintained in one place',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Higher-level classes are more general/abstract in generalization hierarchies.',
    },
    {
      id: '70',
      text: 'HTML form action attribute specifies:',
      options: [
        'Auto completion of form',
        'HTTP method used',
        'Current action',
        'Where to submit form',
      ],
      correctAnswerIndex: 3,
      explanation: 'Action attribute defines the URL for form submission.',
    },
    {
      id: '71',
      text: 'Assurance that product meets customer needs is:',
      options: ['Variance', 'SWOT Analysis', 'Validation', 'Verification'],
      correctAnswerIndex: 2,
      explanation:
        'Validation confirms the right product is being built (customer needs).',
    },
    {
      id: '72',
      text: 'Primary key constraint should be:',
      options: ['Non editable', 'NOT NULL', 'Within limited value', 'NULL'],
      correctAnswerIndex: 1,
      explanation:
        'Primary keys must uniquely identify rows and cannot contain NULLs.',
    },
    {
      id: '73',
      text: 'Adding header information as data moves down layers is:',
      options: ['De-capsulation', 'Routing', 'Switching', 'Encapsulation'],
      correctAnswerIndex: 3,
      explanation:
        'Encapsulation adds layer-specific headers as data moves down the OSI stack.',
    },
    {
      id: '74',
      text: 'Emerging technologies mainly lead to:',
      options: [
        'Obsolete existing systems',
        'Demand for new architectures',
        'New testing requirements',
        'Privacy breaches',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Technology shifts often require architectural evolution to leverage new capabilities.',
    },
    {
      id: '75',
      text: 'Software work product associated with test execution:',
      options: ['Test Reports', 'Requirements', 'Test Cases', 'Code'],
      correctAnswerIndex: 0,
      explanation: 'Test reports document execution results and defects found.',
    },
    {
      id: '76',
      text: 'Inappropriate statement about Artificial Intelligence:',
      options: [
        'An agent perceives its environment through effectors',
        'It is a preprogrammed system',
        'AI is a multidisciplinary field',
        'Ability to learn from environment',
      ],
      correctAnswerIndex: 1,
      explanation: 'AI systems adapt/learn beyond preprogrammed behavior.',
    },
    {
      id: '77',
      text: 'Concept describing bootstrapping:',
      options: [
        'Language interprets other language',
        'Language compiles itself',
        'Language compiles other language',
        'All of above',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Bootstrapping refers to compilers written in their own language.',
    },
    {
      id: '78',
      text: 'Which does NOT affect architectural decisions?',
      options: [
        'Architectural style',
        'Application type',
        'Data storage method',
        'Expected performance',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Data storage is an implementation detail, not architectural concern.',
    },
    {
      id: '79',
      text: 'Model fitting too closely to training set performs poorly on new data:',
      options: ['Overfitting', 'Sweet spot', 'Underperforming', 'Underfitting'],
      correctAnswerIndex: 0,
      explanation: 'Overfitting captures noise instead of general patterns.',
    },
    {
      id: '80',
      text: 'For maintainable architecture, there should be:',
      options: [
        'Architectural optimization',
        'Architectural notation',
        'Architectural refactoring',
        'Architectural reverse engineering',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Standard notation enables understanding by other architects.',
    },
    {
      id: '81',
      text: 'Free-list modification storing addresses of n free blocks in first block:',
      options: ['Grouping', 'Counting', 'Linked-list', 'Deadlock'],
      correctAnswerIndex: 0,
      explanation: 'Grouping improves allocation speed for contiguous blocks.',
    },
    {
      id: '82',
      text: 'Architectural approach for performance-critical systems:',
      options: [
        'Increase component communication',
        'Increase components',
        'Localize critical operations',
        'Distribute operations',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Localization minimizes latency for performance-sensitive operations.',
    },
    {
      id: '83',
      text: 'Time complexity of given nested loop function:',
      options: ['O(n⁷)', 'O(n²)', 'O(n⁵)', 'O(n log n)'],
      correctAnswerIndex: 2,
      explanation:
        'Triple nested loops with multiplicative bounds yield O(n⁵).',
    },
    {
      id: '84',
      text: 'Database supporting different user views describes:',
      options: [
        'Parallel transactions',
        'Multiple users',
        'Multiple views',
        'Concurrent transactions',
      ],
      correctAnswerIndex: 2,
      explanation:
        'View mechanism customizes data presentation per user group.',
    },
    {
      id: '85',
      text: 'Checking documented requirements during delivery is:',
      options: [
        'Realism check',
        'Verifiability',
        'Completeness check',
        'Validity check',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Verifiability ensures requirements can be objectively validated.',
    },
    {
      id: '86',
      text: 'Correct statement about local search algorithms:',
      options: [
        'Solution quality depends on starting point',
        'Used for convex optimization',
        'Time complexity independent of problem size',
        'Guarantee global optimum',
      ],
      correctAnswerIndex: 0,
      explanation: 'Local searches are sensitive to initial conditions.',
    },
    {
      id: '87',
      text: 'Not a purpose of software testing:',
      options: [
        'Improving acceptance',
        'Enhancing reliability',
        'Identifying shortcomings',
        'Requesting more design time',
      ],
      correctAnswerIndex: 3,
      explanation: "Testing evaluates quality, doesn't extend timelines.",
    },
    {
      id: '88',
      text: 'False statement about packet/access-list comparison:',
      options: [
        'Compared sequentially',
        'Continues until all lines analyzed',
        'Implicit "deny" at end',
        'Stops after first match',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Packets continue comparing until explicit permit/deny or end.',
    },
    {
      id: '89',
      text: 'Unsolicited commercial email is:',
      options: ['Wana Cry', 'Spam', 'Trash', 'Adware'],
      correctAnswerIndex: 1,
      explanation: 'Spam refers to unwanted bulk electronic messages.',
    },
    {
      id: '90',
      text: 'Android was mainly developed for:',
      options: ['Servers', 'Mobile devices', 'Laptops', 'Desktops'],
      correctAnswerIndex: 1,
      explanation: 'Android is a mobile operating system.',
    },
    {
      id: '91',
      text: 'Not related to data preprocessing:',
      options: [
        'Data transformation',
        'Data cleaning',
        'Data optimization',
        'Data reduction',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Optimization applies to algorithms, not raw data preparation.',
    },
    {
      id: '92',
      text: 'Java class to read data from file:',
      options: [
        'FileOutputStream',
        'PipedInputStream',
        'FileInputStream',
        'RandomAccessFile',
      ],
      correctAnswerIndex: 2,
      explanation: 'FileInputStream reads raw bytes from files.',
    },
    {
      id: '93',
      text: 'Data link sublayer identifying Network layer protocols:',
      options: [
        'Point-to-Point Encapsulation',
        'Media Access Control',
        'Frame relay',
        'Logical Link Control',
      ],
      correctAnswerIndex: 3,
      explanation: 'LLC handles protocol multiplexing and flow control.',
    },
    {
      id: '94',
      text: 'Correct implementation of Payable interface in Invoice class:',
      options: [
        'public class Invoice extends Payable { ... }',
        'public class Invoice implements Payable { ... } (missing return type)',
        'public class Invoice implements Payable { ... } (correct)',
        'public abstract class Invoice implements Payable { ... }',
      ],
      correctAnswerIndex: 2,
      explanation: 'Must use "implements" with complete method signatures.',
    },
    {
      id: '95',
      text: 'SQL to retrieve Hotel names with Room_ids:',
      options: [
        'SELECT Hotel_Name, Room_Id FROM HOTEL, ROOM WHERE ROOM.Hotel_id=HOTEL.Hotel_id',
        'SELECT Hotel_Name, Room_Id FROM HOTEL, ROOM WHERE ROOM.Room_id=HOTEL.Hotel_id',
        'SELECT Hotel_Name, Room_Id FROM HOTEL, ROOM WHERE ROOM.Room_id=HOTEL.Hotel_id AND ROOM.Hotel_id=HOTEL.Hotel_id',
        'SELECT Hotel_Name, Room_Id FROM HOTEL, ROOM',
      ],
      correctAnswerIndex: 0,
      explanation: 'Correctly joins tables on Hotel_id foreign key.',
    },
    {
      id: '96',
      text: 'Different from other requirement activities:',
      options: [
        'Requirement elicitation',
        'Requirements validation',
        'Requirements analysis',
        'Requirements status tracking',
      ],
      correctAnswerIndex: 3,
      explanation: 'Tracking is project management, not core RE activity.',
    },
    {
      id: '97',
      text: 'Keyword to define variables in JavaScript:',
      options: ['const', 'int', 'val', 'let'],
      correctAnswerIndex: 3,
      explanation:
        "let and const are JavaScript variable declarators (int/val aren't).",
    },
    {
      id: '98',
      text: 'Not a requirement elicitation challenge:',
      options: [
        'Conflicting requirements',
        'Obsolete requirement',
        'Requirement change',
        'Negative stakeholders',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Obsolete requirements emerge post-elicitation during maintenance.',
    },
    {
      id: '99',
      text: 'Incorrect output without syntax/runtime errors indicates:',
      options: [
        'Compiling error',
        'Syntax error',
        'Logical error',
        'Runtime error',
      ],
      correctAnswerIndex: 2,
      explanation: 'Logical errors produce wrong results despite valid syntax.',
    },
    {
      id: '100',
      text: 'Against software engineering ethics:',
      options: [
        'Accepting work beyond competence',
        'Staying up-to-date',
        'Respecting confidentiality',
        'Using skills responsibly',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Ethical engineers only accept work within their capabilities.',
    },
  ],
}

export default moEE2023
