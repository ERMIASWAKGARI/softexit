const amuModel = {
  id: 'amumodel',
  title: 'AMU model',
  year: 2024,
  type: 'model',
  image: 'amu.png',
  questions: [
    {
      id: '1',
      text: 'Data Definition language (DDL) is not to:',
      options: [
        'Alter table in the database',
        'Rename the table name',
        'Create information table in the database',
        'Truncate tuples in the table',
      ],
      correctAnswerIndex: 3,
      explanation:
        'DDL is used for defining database structures, not manipulating data. Truncating tuples is a data manipulation operation.',
    },
    {
      id: '2',
      text: 'Concentrates on what the user does, not what the product does is ______.',
      options: [
        'Validation Testing',
        'Fault-Based Testing',
        'Scenario-Based Testing',
        'Random Class Testing',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Scenario-Based Testing focuses on user actions and workflows rather than internal product functionality.',
    },
    {
      id: '3',
      text: 'Which of the following is NOT a common technique used for software requirement validation?',
      options: [
        'Reviews with stakeholders',
        'Prototyping',
        'User interface mockups',
        'Unit testing',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Unit testing is a development activity, not a requirement validation technique.',
    },
    {
      id: '4',
      text: 'Which of the following statements is not true?',
      options: [
        'A protected member of a class can be accessed from its derived class.',
        'A private member of a class cannot be accessed from its derived class',
        'A public member of a class can be accessed in all the packages',
        'A private member of a class cannot be accessed by the methods of the same class',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Private members can be accessed by methods within the same class. This is fundamental to encapsulation.',
    },
    {
      id: '5',
      text: 'What is the time complexity of binary search in the worst case?',
      options: ['O(n log n)', 'O(n)', 'O(1)', 'O(log n)'],
      correctAnswerIndex: 3,
      explanation:
        'Binary search halves the search space each iteration, resulting in logarithmic time complexity.',
    },
    {
      id: '6',
      text: 'Which operator is used for assignment in C++?',
      options: ['=', '/=', '==', '+='],
      correctAnswerIndex: 0,
      explanation:
        'The single equals sign (=) is the assignment operator in C++.',
    },
    {
      id: '7',
      text: 'Which of the following is not a typical operation that can be defined for an ADT?',
      options: ['Delete', 'Search', 'Insert', 'Compile'],
      correctAnswerIndex: 3,
      explanation:
        'Compilation is a language processing operation, not an ADT operation.',
    },
    {
      id: '8',
      text: 'Which one of the following requirements could represent a functional requirement?',
      options: [
        'The user interface should be easy to navigate for beginners',
        'The login system must validate usernames and passwords',
        'The software should be accessible for users with disabilities',
        'The software must be able to run on a Windows operating system',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Functional requirements describe what the system should do, like validating credentials.',
    },
    {
      id: '9',
      text: 'In First order predicate logic a Statement contains_____.',
      options: [
        'Predicate and Preposition',
        'Predicate and Subject',
        'Subject and an Object',
        'True/False statement',
      ],
      correctAnswerIndex: 1,
      explanation:
        'First-order logic statements consist of predicates applied to subjects.',
    },
    {
      id: '10',
      text: 'What is the role of a project manager in fostering effective communication within a software project team?',
      options: [
        'Restricting access to project information',
        'Minimizing stakeholder involvement',
        'Avoiding team meetings',
        'Encouraging transparency and open dialogue',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Effective project managers promote open communication and information sharing.',
    },
    {
      id: '11',
      text: 'Which subfield of AI is used for visual perception?',
      options: [
        'Speech recognition',
        'Computer vision',
        'Natural language processing',
        'Reinforcement learning',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Computer vision deals with enabling computers to interpret visual information.',
    },
    {
      id: '12',
      text: 'The PEAS in the task environment is about ______.',
      options: [
        'Performance, Actuator, Sensor, Environment',
        'Perceiving, Environment, Actuator, Sensor',
        'Peer, Environment, Actuator, Sensor',
        'Performance, Environment, Actuator, Sensor',
      ],
      correctAnswerIndex: 3,
      explanation:
        'PEAS stands for Performance, Environment, Actuators, and Sensors in AI task environments.',
    },
    {
      id: '13',
      text: 'Suppose you have received a scrambled message from your friend. Which program would you use to read it?',
      options: [
        'Secret key',
        'Encryption program',
        'Plaintext',
        'Decryption program',
        'Cipher text',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Decryption programs reverse the scrambling process to make messages readable.',
    },
    {
      id: '14',
      text: 'How can you pass the value of a function by value in C++?',
      options: [
        'By assigning the value to a global variable',
        'By using the "return" statement in the function',
        'By passing the value directly as a function argument',
        'By declaring a pointer variable as a function parameter',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Passing arguments directly (without pointers/references) is pass-by-value in C++.',
    },
    {
      id: '15',
      text: 'Which agile practice involves estimating the effort required for each user story?',
      options: [
        'Backlog grooming',
        'Sprint planning',
        'Daily stand-up meetings',
        'Story pointing',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Story pointing assigns effort estimates to user stories in Agile development.',
    },
    {
      id: '16',
      text: 'In the TCP/IP model, which layer of the OSI reference model corresponds to the TCP/IP Host to Host network layer?',
      options: ['Network', 'Physical', 'Transport', 'Physical and Data Link'],
      correctAnswerIndex: 2,
      explanation:
        'The TCP/IP Host-to-Host layer maps to the OSI Transport layer (TCP/UDP).',
    },
    {
      id: '17',
      text: 'What is the purpose of the address operator (&) in C++?',
      options: [
        'To access the value of a variable',
        'To assign a value to a variable',
        'To obtain the memory address of a variable',
        'To declare a variable',
      ],
      correctAnswerIndex: 2,
      explanation:
        'The & operator returns the memory address of its operand in C++.',
    },
    {
      id: '18',
      text: 'What does the projection operation (π) in relational algebra result in?',
      options: [
        'vertical partitioning',
        'The removal of duplicate tuples from the relation',
        'The selection of specific rows based on a given condition',
        'horizontal partitioning',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Projection selects specific columns (vertical partitioning) from a relation.',
    },
    {
      id: '19',
      text: 'Which one of the following is not part of Toast.makeText method signature?',
      options: ['message', 'context', 'time span', 'none'],
      correctAnswerIndex: 2,
      explanation:
        'Toast.makeText takes context, message text, and duration (not time span) as parameters.',
    },
    {
      id: '20',
      text: 'What does the term "float" refer to in project scheduling?',
      options: [
        "The amount of time an activity can be delayed without delaying the project's finish date",
        'The amount of time allocated for each project team member',
        'The difference between the planned and actual duration of an activity',
        'The total time available for completing a project',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Float (or slack) is the scheduling flexibility without affecting project completion.',
    },
    {
      id: '21',
      text: 'Which resource is typically time multiplexed in an operating system?',
      options: ['CPU', 'Memory', 'Compact Disk', 'Network'],
      correctAnswerIndex: 0,
      explanation:
        'The CPU is time-shared among processes via scheduling algorithms.',
    },
    {
      id: '22',
      text: 'Which is the following activities is NOT typically part of Goal Based Requirement Engineering?',
      options: [
        'Unit testing the developed software',
        'Conducting interviews with stakeholders',
        'Decomposing high-level goals into subgoals',
        'Defining system functionalities',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Unit testing is a development activity, not a requirements engineering activity.',
    },
    {
      id: '23',
      text: 'Which operator is used to increment a variable by a specific value in C++?',
      options: ['++', '=', '+=', '*='],
      correctAnswerIndex: 2,
      explanation:
        'The += operator adds a value to a variable (e.g., x += 5 increments x by 5).',
    },
    {
      id: '24',
      text: 'What is the primary purpose of a variance analysis in project cost management?',
      options: [
        'To compare actual project performance against the planned performance',
        'To allocate additional resources to the project',
        'To avoid project delays',
        'To identify deviations from the project scope',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Variance analysis compares planned vs. actual performance metrics.',
    },
    {
      id: '25',
      text: 'Which method is used to retrieve a value from SharedPreferences?',
      options: [
        'getAll()',
        'getBoolean(0,"key")',
        'getInt("key")',
        'getString("key",null)',
      ],
      correctAnswerIndex: 3,
      explanation:
        'SharedPreferences.getString() is the correct method signature for retrieving string values.',
    },
    {
      id: '26',
      text: 'Which one of the following is the technique used in black box testing?',
      options: [
        'Equivalence partitioning',
        'Control flow based testing',
        'A and C',
        'Boundary value analysis',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Equivalence partitioning is a black-box testing technique that divides input data into equivalent partitions.',
    },
    {
      id: '27',
      text: 'In android OS stack HAL acts a runtime environment replacing the earlier DVM.',
      options: ['All', 'false', 'true', 'None'],
      correctAnswerIndex: 1,
      explanation:
        "HAL (Hardware Abstraction Layer) doesn't replace DVM. ART replaced DVM in Android.",
    },
    {
      id: '28',
      text: 'Which loop statement is used when the number of iterations is known in advance?',
      options: [
        'If...else statement',
        'While loop statement',
        'Switch statement',
        'For loop statement',
      ],
      correctAnswerIndex: 3,
      explanation:
        'For loops are ideal when iteration count is known beforehand.',
    },
    {
      id: '29',
      text: 'Which one of the following is Candidate Key?',
      options: ['Name', 'ID and Address', 'Email Address', 'Name and ID'],
      correctAnswerIndex: 2,
      explanation:
        'A candidate key must uniquely identify tuples. Email often serves this purpose.',
    },
    {
      id: '30',
      text: 'Which of the following is an example of a knowledge-based authentication factor?',
      options: [
        'Smart card',
        'Username and password',
        'Facial detection',
        'One-time password (OTP)',
        'Fingerprint scan',
      ],
      correctAnswerIndex: 1,
      explanation: 'Knowledge factors are something you know, like passwords.',
    },
    {
      id: '31',
      text: 'An entity in A is associated with at least one entity in B, and an entity in B is associated with at most one entity in A. This is called as ______?',
      options: ['One-to-many', 'One-to-one', 'Many-to-one', 'Many-to-many'],
      correctAnswerIndex: 2,
      explanation: 'This describes a many-to-one relationship from A to B.',
    },
    {
      id: '32',
      text: 'Which search algorithm is better suited for searching in a dynamic, frequently updated dataset?',
      options: [
        'Linear search',
        'Both linear and binary search are equally suitable',
        'Binary search',
        'Neither linear nor binary search is suitable',
      ],
      correctAnswerIndex: 0,
      explanation:
        "Linear search works better for dynamic data as it doesn't require sorting.",
    },
    {
      id: '33',
      text: 'Which operator is used to compare two values for equality in C++?',
      options: ['/=', '==', '=', '+='],
      correctAnswerIndex: 1,
      explanation: 'The == operator checks for equality in C++.',
    },
    {
      id: '34',
      text: 'Which design activity involves defining the relationships and interactions between software components?',
      options: [
        'Architectural design',
        'High-level design',
        'Detailed design',
        'Functional design',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Architectural design focuses on component relationships and system structure.',
    },
    {
      id: '35',
      text: 'Which sorting algorithm is considered the most efficient for small data sets?',
      options: ['Merge sort', 'Insertion sort', 'Radix sort', 'Heapsort'],
      correctAnswerIndex: 1,
      explanation:
        'Insertion sort performs well on small datasets due to its low overhead.',
    },
    {
      id: '36',
      text: 'Which one of the following requirements could represent a non-functional requirement?',
      options: [
        'The system shall allow users to search for books by title, author, or keyword.',
        'The system shall be compatible with all major web browsers and operating systems.',
        'The system shall allow users to browse products by category',
        'The system shall allow users to create a profile and upload a photo.',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Non-functional requirements describe how the system works rather than what it does. Compatibility with browsers and OS is a quality attribute, making it non-functional.',
    },
    {
      id: '37',
      text: 'What is the primary goal of requirements elicitation?',
      options: [
        'To write the software code',
        'To gather information about the desired system',
        'To define the software architecture',
        'To test the software functionality',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Requirements elicitation focuses on gathering information from stakeholders to understand what the system should do.',
    },
    {
      id: '38',
      text: 'Which activity involves breaking down high-level requirements into detailed, specific requirements?',
      options: [
        'Validating requirements',
        'Documenting requirements',
        'Eliciting requirements',
        'Analyzing requirements',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Requirements analysis involves refining high-level requirements into more detailed and specific ones.',
    },
    {
      id: '39',
      text: 'What is the time complexity for inserting a new element at the end of a singly linked list?',
      options: ['O(n^2)', 'O(n)', 'O(1)', 'O(log n)'],
      correctAnswerIndex: 2,
      explanation:
        'If we maintain a tail pointer, insertion at the end of a singly linked list can be done in constant time O(1).',
    },
    {
      d: '40',
      text: 'Social media platforms leverage big data to:',
      options: [
        'Personalize user experience and targeted advertising',
        'Censor user comments',
        'Enhance data security measures',
        'Restrict user access to certain content',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Social media platforms primarily use big data for personalization and targeted advertising based on user behavior analysis.',
    },
    {
      id: '41',
      text: 'The technique used in user-centered interaction design to evaluate a product by testing it on users is called?',
      options: [
        'Usability testing',
        'Unit testing',
        'Software testing',
        'Black box testing',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Usability testing involves evaluating a product by testing it with representative users to identify usability issues.',
    },
    {
      id: '42',
      text: 'Runtime polymorphism feature in java is',
      options: [
        'Method overloading',
        'Constructor overloading',
        'Operator overloading',
        'Method overriding',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Runtime polymorphism in Java is achieved through method overriding, where the JVM determines which method to call at runtime.',
    },
    {
      id: '43',
      text: 'Which network security issue shows the level of weakness in networks and devices?',
      options: ['Vulnerability', 'Threat', 'Attack', 'Risk', 'Availability'],
      correctAnswerIndex: 0,
      explanation:
        'A vulnerability is a weakness in a system that could potentially be exploited by threats.',
    },
    {
      id: '44',
      text: 'Which of the following is NOT an objective of software security assurance?',
      options: [
        'Detecting and preventing vulnerabilities in software',
        'Protecting software from physical damage or theft',
        'Protecting develop and implement robust software',
        'Ensuring the confidentiality and integrity of software',
        'Verifying that software meets security requirements',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Software security assurance focuses on the software itself, not physical protection of devices.',
    },
    {
      id: '45',
      text: 'A functional dependency is a relationship between/among ______',
      options: ['Rows', 'Attributes', 'Entities', 'Tables'],
      correctAnswerIndex: 1,
      explanation:
        'Functional dependency describes relationships between attributes (columns) in a database relation.',
    },
    {
      id: '46',
      text: 'What is the responsibility of the operating system in allocating resources to various applications?',
      options: [
        'A virtual machine',
        'A multiplexer',
        'An extended machine',
        'A resource manager',
      ],
      correctAnswerIndex: 3,
      explanation:
        'The OS acts as a resource manager, allocating CPU time, memory, and other resources to applications.',
    },
    {
      id: '47',
      text: 'What is the main benefit of using asymptotic analysis when comparing algorithms?',
      options: [
        'It determines the memory usage of the algorithms',
        'It focuses on the long-term behavior of the algorithms',
        'It provides the exact running time of the algorithms',
        'It measures the communication bandwidth',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Asymptotic analysis focuses on how algorithms perform as input size grows toward infinity, ignoring constant factors.',
    },
    {
      id: '48',
      text: 'In procurement management, what is the purpose of performing a vendor evaluation?',
      options: [
        'To increase project risks',
        'To limit vendor participation in the project',
        'To ensure vendors are excluded from the project',
        'To compare potential vendors and select the most suitable one',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Vendor evaluation helps select the best vendor by comparing their capabilities, offerings, and track records.',
    },
    {
      id: '49',
      text: 'What is the purpose of role-based access control (RBAC)?',
      options: [
        'To prevent unauthorized access to a system',
        'To monitor and detect suspicious activities or attacks',
        "To assign permissions based on users' job functions or roles",
        'To encrypt data at rest',
        'To encrypt data on the transmission',
      ],
      correctAnswerIndex: 2,
      explanation:
        'RBAC assigns system permissions based on organizational roles rather than individual users.',
    },
    {
      id: '50',
      text: 'Which of the following is a common way to represent the flow of control in an algorithm?',
      options: [
        'Using variables',
        'Using data structures',
        'Using conditional statements and loops',
        'Using mathematical equations',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Control flow in algorithms is typically represented through conditionals (if-else) and loops (for, while).',
    },
    {
      id: '51',
      text: 'Among the provided options, the SQLiteDatabase methods that returns a cursor is',
      options: ['rawQuery()', 'execQuery()', 'update()', 'execSQL()'],
      correctAnswerIndex: 0,
      explanation:
        'rawQuery() executes a SQL query and returns a Cursor object for navigating through the result set.',
    },
    {
      id: '52',
      text: 'Which software development model involves a linear, sequential approach with distinct phases?',
      options: ['Spiral model', 'Waterfall model', 'Agile model', 'RAD model'],
      correctAnswerIndex: 1,
      explanation:
        'The waterfall model follows a strict linear sequence of phases: requirements, design, implementation, testing, deployment.',
    },
    {
      id: '53',
      text: 'What is the major characteristic of a computer virus?',
      options: [
        'It replicates by attaching itself to other files',
        'It steals sensitive data from a system',
        'It encrypts files and demands ransom for their release',
        'It spreads through email attachments',
        'It spreads through network connections',
      ],
      correctAnswerIndex: 0,
      explanation:
        'The defining characteristic of a virus is its ability to replicate by attaching to other executable files or documents.',
    },
    {
      id: '54',
      text: 'In a software project, what is the primary purpose of a communication plan?',
      options: [
        'To exclude project sponsors from communication channels',
        'To limit communication among team members',
        'To delay the exchange of project information',
        'To facilitate effective communication among stakeholders',
      ],
      correctAnswerIndex: 3,
      explanation:
        'A communication plan ensures all stakeholders receive the right information at the right time through appropriate channels.',
    },
    {
      id: '55',
      text: 'If the method is not static; how to invoke in the java programming language?',
      options: [
        'Variablename.methodname',
        'Objectname.methodname()',
        'Classname.methodname()',
        'Methodname()',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Non-static (instance) methods must be called on an object instance using the dot notation.',
    },
    {
      id: '56',
      text: 'Which type of agent is most suitable for dynamic and unknown environments where the state of the world changes frequently?',
      options: [
        'Learning agent',
        'Reflex agent',
        'Rational agent',
        'Goal-based agent',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Learning agents can adapt to changing environments by modifying their behavior based on experience.',
    },
    {
      id: '57',
      text: 'Intent filter is used to define',
      options: [
        'data type used by the app component',
        'All',
        'relationship between the app component and intent',
        'category of app',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Intent filters declare how a component can be invoked by specifying the types of intents it can respond to.',
    },
    {
      id: '58',
      text: 'In 2NF, which form of dependency is removed?',
      options: ['Functional', 'Associative', 'Transitive', 'Partial'],
      correctAnswerIndex: 3,
      explanation:
        'Second Normal Form (2NF) eliminates partial dependencies by ensuring non-key attributes depend on the entire primary key.',
    },
    {
      id: '59',
      text: 'Which method is used to stop a bound service?',
      options: ['System.exit(0)', 'stopService()', 'None', 'selfStop()'],
      correctAnswerIndex: 1,
      explanation:
        'stopService() is used to stop a started service, while bound services are typically stopped by unbinding all clients.',
    },
    {
      id: '60',
      text: 'Which of the following best describes the purpose of normalization in database management systems (DBMS)?',
      options: [
        'To eliminate data redundancy and ensure data integrity.',
        'To improve data inconsistency and integrity.',
        'To increase data redundancy and duplication.',
        'To simplify database maintenance and updates.',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Normalization primarily aims to minimize redundancy and prevent anomalies while maintaining data integrity.',
    },
    {
      id: '61',
      text: 'Which industry is NOT typically associated with Big Data applications?',
      options: [
        'Manufacturing',
        'Healthcare',
        'Agriculture',
        'Small retail shops',
      ],
      correctAnswerIndex: 3,
      explanation:
        "Small retail shops typically don't generate or require the volume of data that characterizes Big Data applications.",
    },
    {
      id: '62',
      text: '______ is one of the basic principles of object oriented programming that use one object in multiple forms.',
      options: [
        'None of the above',
        'Inheritance',
        'Encapsulation',
        'Interface',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Polymorphism (though not listed) is the correct concept, but inheritance enables polymorphic behavior in OOP.',
    },
    {
      id: '63',
      text: 'What is the primary goal of data mining?',
      options: [
        'To visualize data through graphs and charts',
        'To extract useful patterns and insights from data',
        'To ensure data security and privacy',
        'To store and manage large volumes of data',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Data mining focuses on discovering hidden patterns and relationships in large datasets.',
    },
    {
      id: '64',
      text: 'Which of the following algorithms uses a recursive implementation?',
      options: [
        'Linear/sequential search',
        'Binary search',
        'Heap sort',
        'Insertion sort',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Binary search naturally lends itself to recursive implementation by repeatedly dividing the search space.',
    },
    {
      id: '65',
      text: 'What is a PRIMARY factor that distinguishes Big Data from traditional data management approaches?',
      options: [
        'Requirement for specialized data processing tools',
        'Inability to handle complex data formats',
        'Focus on analyzing historical trends',
        'Limited data storage capacity',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Big Data requires specialized tools like Hadoop and Spark to handle volume, velocity, and variety characteristics.',
    },
    {
      id: '66',
      text: 'In a software project, the planned value (PV) is $50,000, the earned value (EV) is $40,000, and the actual cost (AC) is $45,000. Calculate the schedule variance (SV).',
      options: ['$2,000', '$10,000', '-$10,000', '$4,000'],
      correctAnswerIndex: 2,
      explanation:
        'SV = EV - PV = $40,000 - $50,000 = -$10,000 (negative indicates behind schedule)',
    },
    {
      id: '67',
      text: 'Which term refers to the process of summarizing data to improve efficiency in data warehousing?',
      options: [
        'Data mashing',
        'Data mining',
        'Data aggregation',
        'Data scrubbing',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Data aggregation combines data from multiple sources into a summarized format for analysis.',
    },
    {
      id: '68',
      text: 'Among the reasons that lead to deadlock in operating systems, which one is used to solve the inter-process communication problem?',
      options: [
        'Hold and Wait Condition',
        'Circular wait',
        'No preemption',
        'Mutual exclusion',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Mutual exclusion ensures only one process can access a resource at a time, solving IPC synchronization issues.',
    },
    {
      id: '69',
      text: 'Which communication channel is most suitable for conveying complex technical information to a distributed team?',
      options: [
        'Email',
        'Video conference',
        'Instant messaging',
        'Telephone call',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Video conferences allow for visual aids and real-time discussion of complex technical matters.',
    },
    {
      id: '70',
      text: 'Which one of the following computers can be most secured compared to the rest?',
      options: [
        'A computer connected to the Internet having strong intrusion detection system',
        'A computer connected to the Internet and the latest anti-virus installed on it',
        'A computer that is not connected to the Internet',
        'A computer connected to the Internet with the latest firewall system',
        'A computer connected to the Internet having strong software firewall system',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Air-gapped systems (disconnected from networks) have the highest security as they eliminate remote attack vectors.',
    },
    {
      id: '71',
      text: 'Which class does the IP address 172.16.1.20 belong to?',
      options: ['Class D', 'Class A', 'Class B', 'Class C'],
      correctAnswerIndex: 2,
      explanation:
        '172 falls within the Class B range (128-191) in traditional IP address classification.',
    },
    {
      id: '72',
      text: 'During Software Requirement Management, which two types of requirements typically receive the highest priority?',
      options: [
        'Enduring Requirements and Volatile Requirements',
        'User Stories and Bug Fixes',
        'Security Requirements and Performance Requirements',
        'Functional Requirements and Non-Functional Requirements',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Functional (what the system does) and non-functional (how it performs) are fundamental requirement categories.',
    },
    {
      id: '73',
      text: 'Which machine learning models are trained to make decision based on the reward and feedback they receive from their action.',
      options: [
        'Reinforcement learning',
        'Unsupervised learning',
        'Supervised learning',
        'All of the above',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Reinforcement learning uses reward signals to train agents through trial and error.',
    },
    {
      id: '74',
      text: 'What is the purpose of classless addressing in IP networks?',
      options: [
        'To allocate IP addresses based on geographical location.',
        'To classify IP addresses into different classes for easier routing.',
        'To improve the security of IP addresses by encrypting them.',
        'To provide more flexible allocation of IP addresses by allowing variable-length subnet masks.',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Classless Inter-Domain Routing (CIDR) allows efficient address allocation using VLSM, replacing rigid class-based addressing.',
    },
    {
      id: '75',
      text: 'What is the purpose of a change control board (CCB) in project management?',
      options: [
        'To prevent any changes from being made to the project',
        'To approve or reject changes to the project scope, schedule, and cost',
        'To allocate project resources',
        'To escalate all project issues to senior management',
      ],
      correctAnswerIndex: 1,
      explanation:
        'The CCB evaluates change requests to assess impacts on scope, schedule and cost before approving/rejecting.',
    },
    {
      id: '76',
      text: 'Which one of the following search algorithm requires less memory?',
      options: [
        'Depth First Search',
        'Optimal Search',
        'Breadth-First Search',
        'Linear Search',
      ],
      correctAnswerIndex: 0,
      explanation:
        'DFS requires O(d) memory (where d is depth) compared to BFS which requires O(b^d) (where b is branching factor).',
    },
    {
      id: '77',
      text: 'What does validation ensure in software development?',
      options: [
        'That the software is free from defects',
        'That the software conforms to its specifications',
        'That the software meets the requirements and fulfills its intended purpose',
        'That the software is written according to coding standards',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Validation confirms we built the right product that satisfies user needs.',
    },
    {
      id: '78',
      text: 'Which of the following is NOT an input to the process of scope management?',
      options: [
        'Cost Baseline',
        'Project Charter',
        'Work Breakdown Structure (WBS)',
        'Project Management Plan',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Cost baseline is an output, not input, of scope management processes.',
    },
    {
      id: '79',
      text: 'Which scheduling technique involves identifying dependencies between project activities?',
      options: [
        'Agile sprint planning',
        'Gantt charts',
        'Critical Path Method (CPM)',
        'Earned Value Management (EVM)',
      ],
      correctAnswerIndex: 2,
      explanation:
        'CPM analyzes task dependencies to determine the critical path.',
    },
    {
      id: '80',
      text: 'In software testing, what is the term for testing performed by end-users before release?',
      options: [
        'Alpha Testing',
        'Regression Testing',
        'Beta Testing',
        'Smoke Testing',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Beta testing involves real users testing in production-like environments.',
    },
    {
      id: '81',
      text: 'Which AI approach defines AI as "The art of creating machines that perform functions requiring human intelligence"?',
      options: [
        'Thinking rationally',
        'Thinking humanly',
        'Acting humanly',
        'Acting rationally',
      ],
      correctAnswerIndex: 2,
      explanation:
        'The "acting humanly" approach focuses on Turing Test-like behavior.',
    },
    {
      id: '82',
      text: 'What is the purpose of access control in security mechanisms?',
      options: [
        'To detect and remove malware',
        'To prevent unauthorized access to resources',
        'To encrypt digital assets at rest',
        'To encrypt data during transmission',
        'To monitor network traffic',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Access control regulates who can access what resources in a system.',
    },
    {
      id: '83',
      text: 'How can a project manager promote teamwork and collaboration?',
      options: [
        'Celebrate individual achievements only',
        'Encourage competition among team members',
        'Promote a supportive and inclusive team environment',
        'Foster a blame culture',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Psychological safety and collaboration spaces enhance teamwork.',
    },
    {
      id: '84',
      text: 'Which programming paradigm emphasizes breaking programs into reusable components?',
      options: [
        'Functional programming',
        'Object-oriented programming',
        'Procedural programming',
        'Aspect-oriented programming',
      ],
      correctAnswerIndex: 1,
      explanation:
        'OOP focuses on objects (components) with encapsulated data and behavior.',
    },
    {
      id: '85',
      text: 'Which team structure involves members reporting to both functional and project managers?',
      options: [
        'Matrix teams',
        'Functional teams',
        'Hierarchical teams',
        'Agile teams',
      ],
      correctAnswerIndex: 0,
      explanation: 'Matrix organizations have dual reporting relationships.',
    },
    {
      id: '86',
      text: 'Which statement about round-robin scheduling is false?',
      options: [
        "It's the fairest and most widely used algorithm",
        'Characterized by its non-preemptive nature',
        'Has higher context switch overhead',
        'Uses a quantum number for scheduling',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Round-robin is preemptive - it forcibly switches tasks after quantum expires.',
    },
    {
      id: '87',
      text: 'Which control statement executes different code blocks based on multiple conditions?',
      options: [
        'If...else statement',
        'While loop statement',
        'Switch statement',
        'For loop statement',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Switch statements handle multiple discrete condition cases efficiently.',
    },
    {
      id: '88',
      text: 'What type of traceability shows how a requirement is designed and implemented?',
      options: [
        'Forward traceability',
        'Horizontal traceability',
        'Vertical traceability',
        'Backward traceability',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Vertical traceability links requirements to design/implementation artifacts.',
    },
    {
      id: '89',
      text: 'Which SQL statement contains an error?',
      options: [
        'SELECT empid FROM emp;',
        'SELECT * FROM emp WHERE empid = 1001;',
        'SELECT empid WHERE empid = 1002 AND lastname = Abebe;',
        'SELECT empid FROM emp WHERE empid = 1003',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Missing FROM clause makes this statement syntactically invalid.',
    },
    {
      id: '90',
      text: 'What is the main focus of Goal-Based Requirement Engineering?',
      options: [
        'Eliciting and refining stakeholder goals',
        'Writing efficient code',
        'Defining technical specifications',
        'Identifying user interface elements',
      ],
      correctAnswerIndex: 0,
      explanation:
        'GBRE centers on understanding and decomposing high-level goals.',
    },
    {
      id: '91',
      text: 'Which of the following is not an OOPS concept?',
      options: ['Exception', 'Encapsulation', 'Polymorphism', 'Abstraction'],
      correctAnswerIndex: 0,
      explanation:
        'Exception handling is a general programming concept, not unique to OOP.',
    },
    {
      id: '92',
      text: 'Which software engineering approach focuses on capturing requirements from stakeholders?',
      options: ['RAD', 'CASE', 'JAD', 'RUP'],
      correctAnswerIndex: 2,
      explanation:
        'Joint Application Development emphasizes collaborative requirements gathering.',
    },
    {
      id: '93',
      text: 'Design, development and maintenance of mobile applications is called:',
      options: [
        'Developing mobile apps',
        'Mobile computing',
        'Mobile software engineering',
        'Software engineering',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Mobile software engineering specializes in mobile platform constraints.',
    },
    {
      id: '94',
      text: 'Using First Fit algorithm with partitions: A=100KB, B=200KB, C=150KB, D=300KB, E=250KB - where would P1=120KB, P2=250KB, P3=180KB be allocated?',
      options: [
        'P1: Block B, P2: Block D, P3: Block E',
        'P1: Block D, P2: Block E, P3: not allocated',
        'P1: Block A, P2: Block D, P3: Block E',
        'P1: Block B, P2: Block E, P3: Block A',
      ],
      correctAnswerIndex: 0,
      explanation:
        'First Fit allocates to first sufficient block: B(200)>120, D(300)>250, E(250)>180.',
    },
    {
      id: '95',
      text: 'Which component defines a service in AndroidManifest.xml?',
      options: ['<service>', '<provider>', '<receiver>', '<activity>'],
      correctAnswerIndex: 0,
      explanation:
        'The <service> tag declares background services in the manifest.',
    },
    {
      id: '96',
      text: 'In Android, the superclass for all ViewGroup is:',
      options: ['Activity', 'View', 'All', 'Object'],
      correctAnswerIndex: 1,
      explanation:
        'ViewGroup extends View, which is the fundamental UI building block.',
    },
    {
      id: '97',
      text: 'When a stakeholder complains a requirement is unclear, what should you do?',
      options: [
        'Ignore the complaint',
        'Refine the requirement to be specific',
        'Delegate clarification to developers',
        "Explain why it's written that way",
      ],
      correctAnswerIndex: 1,
      explanation: 'Requirements should be clarified and made unambiguous.',
    },
    {
      id: '98',
      text: 'Which technique documents project roles and responsibilities?',
      options: [
        'Resource leveling',
        'Resource histogram',
        'Responsibility assignment matrix',
        "Maslow's Hierarchy",
      ],
      correctAnswerIndex: 2,
      explanation: 'RAM (RACI) matrices clearly define role responsibilities.',
    },
    {
      id: '99',
      text: 'Which document solicits proposals from vendors?',
      options: [
        'Statement of Work',
        'Request for Proposal',
        'Request for Information',
        'Invitation to Bid',
      ],
      correctAnswerIndex: 1,
      explanation: 'RFPs formally request vendor proposals for comparison.',
    },
    {
      id: '100',
      text: 'What is the time complexity of: for(i=1;i<n;i=i/2){ statement; }',
      options: ['O(log n)', 'O(n log n)', 'O(n)', 'O(n²)'],
      correctAnswerIndex: 0,
      explanation: 'Loop runs log₂n times due to halving increment.',
    },
  ],
}

export default amuModel
