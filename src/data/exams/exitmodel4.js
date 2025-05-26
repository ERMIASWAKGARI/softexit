const exitModel4 = {
  id: 'exitExamModel4',
  title: 'Exit Model 4',
  year: 2023,
  type: 'model',
  image: 'moe.png',
  questions: [
    {
      id: '1',
      text: '______ is type of software architecture in which subsystems can act both as a client or as servers that each subsystem can request and provide services.',
      options: [
        'Pipe and Filter Architecture',
        'Client/Server Architecture',
        'Central Repository Architecture',
        'Peer to Peer Architecture',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Peer-to-Peer (P2P) architecture allows subsystems to function as both clients and servers, enabling decentralized service requests and provisions.',
    },
    {
      id: '2',
      text: 'What kind of linked list is best to answer questions like "What is the item at position n?"',
      options: [
        'Array implementation of linked list',
        'Singly linked list',
        'Doubly linked list',
        'Circular linked list',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Array implementation allows O(1) random access to elements by index, unlike traditional linked lists which require O(n) traversal.',
    },
    {
      id: '3',
      text: 'Which of the following sorting compares adjacent elements in a list and switches whenever necessary?',
      options: [
        'Quick sort',
        'Bubble sort',
        'Selection sort',
        'None of the above',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Bubble sort repeatedly compares adjacent elements and swaps them if they are in the wrong order.',
    },
    {
      id: '4',
      text: 'Which of the following data structures is best suited for implementing a hash table?',
      options: ['Stack', 'Queue', 'Linked list', 'Array'],
      correctAnswerIndex: 3,
      explanation:
        'Arrays provide O(1) access time using indices, making them ideal for hash table implementations where keys are mapped to array indices.',
    },
    {
      id: '5',
      text: 'In database state update operation, INSERT operation may violate ______ constraints.',
      options: [
        'Domain constraint',
        'Key constraint',
        'Entity integrity constraint',
        'All of the above',
      ],
      correctAnswerIndex: 3,
      explanation:
        'INSERT can violate domain (invalid data type), key (duplicate primary key), or entity integrity (null primary key) constraints.',
    },
    {
      id: '6',
      text: 'What is the purpose of responsive web design?',
      options: [
        'To improve search engine optimization',
        'To enhance user experience across different devices',
        'To prevent cross-site scripting attacks',
        'To optimize website performance',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Responsive design ensures websites adapt to various screen sizes (mobile, tablet, desktop) for better UX.',
    },
    {
      id: '7',
      text: 'Which one of the following is Not an example of embedded software product?',
      options: [
        'Keypad control of a security system',
        'Digital function of dashboard display in a car',
        'Pattern recognition',
        'Fire alarm System',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Pattern recognition is a general AI/ML technique, not specific to embedded systems like the other hardware-bound examples.',
    },
    {
      id: '8',
      text: 'Which one of the following is not the output of the resource estimation process in project time management?',
      options: [
        'Activity cost estimates',
        'Resource breakdown structure',
        'Activity resource requirements',
        'Project documents updates',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Activity cost estimates are part of cost management, not resource estimation which focuses on identifying required resources.',
    },
    {
      id: '9',
      text: 'Which one of the following tool is commonly used in almost all project KA management processes?',
      options: [
        'Expert judgment',
        'Project management information systems',
        'Brainstorming',
        'Management meeting',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Expert judgment is universally applied across knowledge areas (KA) for decision-making in project management.',
    },
    {
      id: '10',
      text: 'For registration use case in the User Name field the system accepts 8 to 15 alpha characters. Using BVA technique ______ will be the possible input values for the test case.',
      options: ['8,9,15,16', '7,8,14,15', '8,9,10,15,16,17', '7,8,9,14,15,16'],
      correctAnswerIndex: 3,
      explanation:
        'Boundary Value Analysis (BVA) tests values at boundaries (7,8,15,16) and just beyond (9,14) to validate input constraints.',
    },
    {
      id: '11',
      text: 'Which web development technology is used for creating dynamic and interactive web pages?',
      options: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      correctAnswerIndex: 2,
      explanation:
        'JavaScript enables dynamic content updates and user interactions, while HTML/CSS handle structure and styling.',
    },
    {
      id: '12',
      text: 'Which HTML element is used to display an image?',
      options: ['<image>', '<img>', '<picture>', '<figure>'],
      correctAnswerIndex: 1,
      explanation:
        '<img> is the standard HTML tag for embedding images with src and alt attributes.',
    },
    {
      id: '13',
      text: '______ is software design describing how the software elements, hardware elements, and end-users communicate with one another.',
      options: [
        'Architectural Design',
        'Component level Design',
        'Interface Design',
        'Detailed Design',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Interface Design specifies interactions between software components, hardware, and users (APIs, UIs, protocols).',
    },
    {
      id: '14',
      text: 'How is time complexity measured?',
      options: [
        'By counting number of operations on a given input size',
        'By counting the input data size',
        'By counting the number of algorithm',
        'All of the above mentioned',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Time complexity analyzes how the number of operations grows relative to input size (e.g., O(n), O(log n)).',
    },
    {
      id: '15',
      text: 'Which one of the following best defines Artificial Intelligence (AI)?',
      options: [
        'AI is a field of study that aims to solve repetitive tasks.',
        'AI is a field of study that aims to make humans more intelligent.',
        'AI is a field of study that aims to make intelligent machines and systems.',
        'AI is a field of study that aims to enhance machine performance.',
      ],
      correctAnswerIndex: 2,
      explanation:
        'AI focuses on creating systems that exhibit human-like intelligence (learning, reasoning, problem-solving).',
    },
    {
      id: '16',
      text: 'In a graph of n nodes and n edges, how many cycles will be present?',
      options: ['At most 1', 'At most 2', 'Depends on the graph', 'Exactly 1'],
      correctAnswerIndex: 3,
      explanation:
        'A connected graph with n nodes and n edges will always contain exactly one cycle (cycle rank = edges - nodes + 1).',
    },
    {
      id: '17',
      text: 'Requirement approval and customer sign-off must be conducted before the project starts, this type of r/ship is?',
      options: [
        'External dependency',
        'Discretional dependency',
        'Mandatory dependency',
        'All',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Mandatory dependencies are legally/contractually required (e.g., sign-offs) before proceeding.',
    },
    {
      id: '18',
      text: 'Which of the following is not a basic data type in C++?',
      options: ['int', 'float', 'char', 'decimal'],
      correctAnswerIndex: 3,
      explanation:
        'C++ has no built-in "decimal" type; floating-point numbers use float/double.',
    },
    {
      id: '19',
      text: 'Routers and core switch can be used for delivering routing services. According to the OSI reference model to which layer do you categorize this network devices?',
      options: [
        'Physical Layer',
        'Data Link Layer',
        'Network Layer',
        'Transport Layer',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Routers operate at Layer 3 (Network) for IP routing, while switches typically work at Layer 2 (Data Link).',
    },
    {
      id: '20',
      text: 'Which one of the following is a good practice during requirement change management process?',
      options: [
        'Communicate changes only for requirement designer, because next step is software design',
        'Remove inconsistent requirements from a system',
        'Documenting and Tracking changes to requirement',
        'None',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Change management requires thorough documentation and tracking to maintain requirement consistency and traceability.',
    },
    {
      id: '21',
      text: '______ states primary key value must not be null value.',
      options: ['Entity integrity', 'Domain integrity', 'Unique', 'All'],
      correctAnswerIndex: 0,
      explanation:
        'Entity integrity ensures primary keys are unique and non-null to uniquely identify tuples.',
    },
    {
      id: '22',
      text: 'What is the maximum number of return values that can be returned from a C++ function?',
      options: ['One', 'Two', 'Three', 'Unlimited'],
      correctAnswerIndex: 0,
      explanation:
        'C++ functions can return only one value directly, though multiple values can be returned via pointers/references or structures.',
    },
    {
      id: '23',
      text: 'In which HTML element, we put the JavaScript code?',
      options: [
        '<javascript>...</javascript>',
        '<js>...</js>',
        '<script>...</script>',
        '<css>...</css>',
      ],
      correctAnswerIndex: 2,
      explanation:
        '<script> tags embed or reference JavaScript code in HTML documents.',
    },
    {
      id: '24',
      text: 'Which of the following are not the concerns of AI that confront society?',
      options: ['Inequality', 'Bias', 'Security and privacy', 'None of these'],
      correctAnswerIndex: 3,
      explanation:
        'AI raises societal concerns including bias in algorithms, privacy violations, and economic inequality.',
    },
    {
      id: '25',
      text: 'What is a common method for preventing buffer overflow vulnerabilities in software?',
      options: [
        'Implementing proper input validation',
        'Allowing unlimited input',
        'Using weak encryption',
        'Ignoring security patches',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Input validation restricts data length/type to prevent overwriting memory buffers.',
    },
    {
      id: '26',
      text: 'In case of a large search space, which search strategy would be preferred?',
      options: [
        'Adversarial search',
        'Informed search',
        'Uninformed search',
        'None of the above',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Informed searches (e.g., A*) use heuristics to efficiently navigate large spaces, unlike brute-force uninformed methods.',
    },
    {
      id: '27',
      text: 'Which of the following data structures is best suited for implementing a priority queue?',
      options: ['Heap', 'Array', 'Stack', 'Linked list'],
      correctAnswerIndex: 0,
      explanation:
        'Heaps provide O(log n) insertion/extraction of highest-priority elements, ideal for priority queues.',
    },
    {
      id: '28',
      text: 'Among the event handling mechanisms in android, which option is better to handle more complex kinds of events',
      options: [
        'Using the xml onclick attribute',
        'Using event listener interfaces',
        'Using the java onclick listener',
        'All of the above',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Listener interfaces (e.g., OnClickListener) offer flexible event handling for complex interactions.',
    },
    {
      id: '29',
      text: 'Which of the following can be a multivalued attribute?',
      options: ['Phone-number', 'Name', 'Date-of-birth', 'Age'],
      correctAnswerIndex: 0,
      explanation:
        'A person may have multiple phone numbers (multivalued), while other attributes are typically single-valued.',
    },
    {
      id: '30',
      text: 'Which of the following is a C++ operator used for multiplication?',
      options: ['*', '×', '/', '+'],
      correctAnswerIndex: 0,
      explanation:
        'The asterisk (*) serves as both multiplication operator and pointer dereference in C++.',
    },
    {
      id: '31',
      text: 'The structural evolutionary prototyping model of software development process is',
      options: [
        'The best approach to use for projects with large development teams',
        'It is not important for creating awareness of additional needed functionality',
        'A reasonable approach when requirement is well defined',
        'A useful approach when a customer cannot define requirements clearly',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Evolutionary prototyping iteratively refines prototypes when requirements are unclear or evolving.',
    },
    {
      id: '32',
      text: 'Among the following, one is the scope of product development life cycle (PDLC)?',
      options: ['Project resource', 'Cost', 'Schedule', 'System design'],
      correctAnswerIndex: 3,
      explanation:
        'PDLC focuses on system design/development, while resources/cost/schedule fall under project management.',
    },
    {
      id: '33',
      text: 'Which of the following statement is false about round robin scheduling algorithm.',
      options: [
        'Characterized by using quantum number for the scheduling',
        'Characterized by its non-preemptive nature.',
        'Have higher Context switch overhead.',
        'It’s the fairest algorithm and most widely used algorithm.',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Round Robin is preemptive—it forcibly switches processes after each time quantum.',
    },
    {
      id: '34',
      text: 'In a system using virtual memory, the physical memory is divided into ______ and the virtual address space is divided in into equally-sized partitions called ______.',
      options: [
        'Pages, Page frames',
        'Page frames, pages',
        'Segment, page',
        'Page, Segment',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Physical memory is divided into page frames; virtual memory uses pages of equal size mapped to frames.',
    },
    {
      id: '35',
      text: 'Which one of the followings is/are incorrect about first normal forms?',
      options: [
        'It is used to disallow the multivalued attributes',
        'Composite attributes cannot be used in 1NF',
        'Relations can be created in a relation',
        'The only attribute values allowed are atomic values',
      ],
      correctAnswerIndex: 2,
      explanation:
        '1NF requires atomic values (no nested relations) but allows composite attributes (e.g., "name" as first+last).',
    },
    {
      id: '36',
      text: 'What is the role of back-end technology in web development?',
      options: [
        'To handle client-side operations and user interactions',
        'To implement the visual design of a website',
        'To ensure compatibility across different web browsers',
        'To manage server-side operations and database interactions',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Back-end technologies (e.g., Node.js, Django) handle server logic, databases, and APIs—unlike front-end which manages UI.',
    },
    {
      id: '37',
      text: 'Which class does the IP address 172.16.1.20 belongs to?',
      options: ['Class C', 'Class D', 'Class A', 'Class B'],
      correctAnswerIndex: 3,
      explanation:
        'Class B ranges from 128.0.0.0 to 191.255.255.255. 172 falls within this range.',
    },
    {
      id: '38',
      text: 'Alpha testing is:',
      options: [
        'Post-release testing by end user representatives at the developer’s site',
        'Post-release testing by testing team at the developer’s site',
        'Pre-release testing by end user representatives at their sites',
        'Pre-release testing by testing team at the developer’s site',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Alpha testing is internal testing by the development team before releasing to external testers (beta).',
    },
    {
      id: '39',
      text: 'A started service will in a running state when one of the following service life cycle method is invoked',
      options: [
        'onStartCommand()',
        'onBind()',
        'startService()',
        'bindService()',
      ],
      correctAnswerIndex: 0,
      explanation:
        'onStartCommand() is called when the service is explicitly started (not bound), transitioning it to the running state.',
    },
    {
      id: '40',
      text: 'Which one of the following is Not True?',
      options: [
        'Coupling is the level of inter-dependability among modules.',
        'Cohesive module focuses on a single function.',
        'If two modules are tightly coupled, one can function completely without the presence of other.',
        'Abstraction is the process of creating a detailed design specification for each component of a system.',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Tight coupling implies high interdependence—modules cannot function independently.',
    },
    {
      id: '41',
      text: 'Which of the following statements is Not correct?',
      options: [
        'A test set that achieves 100% branch coverage will also achieve 100% statement coverage.',
        'A minimal test set that achieves 100% branch coverage will generally detect more faults than one that achieves 100% statement coverage.',
        'A minimal test set that achieves 100% statement coverage will generally detect more faults than one that achieves 100% branch coverage',
        'None',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Branch coverage is stricter than statement coverage - it requires testing both true/false outcomes of conditions, making it more likely to detect faults.',
    },
    {
      id: '42',
      text: 'What is the purpose of threat modeling in software security?',
      options: [
        'To identify potential threats and vulnerabilities in software',
        'To test the functionality of the software',
        'To validate the software against industry standards',
        'To document the software for future reference',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Threat modeling systematically identifies potential security threats during design to implement appropriate countermeasures.',
    },
    {
      id: '43',
      text: 'For some relations, changing the data can have undesirable consequences called',
      options: [
        'Referential integrity constraints',
        'Modification anomalies',
        'Normal forms',
        'Transitive dependencies',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Modification anomalies occur when updating data leads to inconsistencies due to poor database design (e.g., duplicate data).',
    },
    {
      id: '44',
      text: 'The ______ operation, allows us to find tuples that are in one relation but are not in another.',
      options: ['Union', 'Set-difference', 'Difference', 'Intersection'],
      correctAnswerIndex: 1,
      explanation:
        "Set-difference (A - B) returns elements in A that aren't in B, useful for comparing datasets.",
    },
    {
      id: '45',
      text: 'What is a typical threat to software security?',
      options: ['User error', 'Hardware failure', 'Power outage', 'Malware'],
      correctAnswerIndex: 3,
      explanation:
        'Malware (viruses, worms) is specifically designed to compromise software security, unlike accidental failures.',
    },
    {
      id: '46',
      text: 'What does the following relational algebra expression do? σ amount > 1200 (Loan)',
      options: [
        'Finds all the tuples in Loan',
        'Retrieve the amount attribute in Loan where the amount is greater than 1200',
        'Finds all the tuples in Loan where the amount is greater than 1200',
        'All are answer',
      ],
      correctAnswerIndex: 2,
      explanation:
        'The σ (sigma) operator performs selection, returning entire tuples that satisfy the condition amount > 1200.',
    },
    {
      id: '47',
      text: 'Variables defined inside methods, constructors or blocks are called ______.',
      options: [
        'Local variables',
        'Instance variables',
        'Class variables',
        'All',
      ],
      correctAnswerIndex: 0,
      explanation:
        "Local variables have scope limited to the block where they're declared, unlike instance/class variables.",
    },
    {
      id: '48',
      text: 'Is a process in which an overridden method is called through the reference variable of super class.',
      options: [
        'Method overloading',
        'Method overriding',
        'Inheritance',
        'Applet',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Method overriding enables polymorphism - superclass references can invoke subclass implementations.',
    },
    {
      id: '49',
      text: 'What is the purpose of the << operator in C++?',
      options: [
        'To input data from the keyboard',
        'To output data to the console',
        'To perform a logical AND operation',
        'None of the above',
      ],
      correctAnswerIndex: 1,
      explanation:
        '<< is the stream insertion operator (e.g., cout << "text") for output, while >> is used for input.',
    },
    {
      id: '50',
      text: 'Is a description of a kind of object.',
      options: ['Class', 'String', 'Inheritance', 'Method'],
      correctAnswerIndex: 0,
      explanation:
        'A class defines the blueprint for objects, specifying their properties (attributes) and behaviors (methods).',
    },
    {
      id: '51',
      text: 'Open System Interconnection model is an example of ______ architecture.',
      options: ['MVC', 'Pipe and filter', 'Layered', 'Client-server'],
      correctAnswerIndex: 2,
      explanation:
        'The OSI model uses 7 distinct layers (Physical to Application) with well-defined interfaces between them.',
    },
    {
      id: '52',
      text: 'Which protocol is commonly used in the client-server architecture for web-based applications?',
      options: [
        'Simple Mail Transfer Protocol (SMTP)',
        'Hyper Text Transfer Protocol (HTTP)',
        'File Transfer Protocol (FTP)',
        'Network News Transfer Protocol (NNTP)',
      ],
      correctAnswerIndex: 1,
      explanation:
        'HTTP is the foundation of web communication, enabling browser-server interactions for websites.',
    },
    {
      id: '53',
      text: 'Which of the following cable can be used to interconnect two computers for formulating pear to pear network?',
      options: [
        'Straight through cable',
        'Console cable',
        'Coaxial cable',
        'Cross over cable',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Crossover cables directly connect two devices (computer-to-computer) by crossing transmit/receive wires.',
    },
    {
      id: '54',
      text: 'Which of the following is used to execute a specific block of code based on the value of a variable or expression in C++?',
      options: [
        'if statement',
        'switch statement',
        'else statement',
        'for loop',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Switch statements efficiently handle multiple conditions by matching an expression against case labels.',
    },
    {
      id: '55',
      text: 'Which one of the following is an example of stakeholder in requirement engineering?',
      options: [
        'A software Developer',
        'A project Manager',
        'An end user of system',
        'All',
      ],
      correctAnswerIndex: 3,
      explanation:
        'All these roles are stakeholders - anyone affected by or influencing the system requirements.',
    },
    {
      id: '56',
      text: 'Which of the following is not a type of loop in C++?',
      options: ['while loop', 'for loop', 'repeat loop', 'do-while loop'],
      correctAnswerIndex: 2,
      explanation:
        'C++ has while, for, and do-while loops but no built-in "repeat" loop construct.',
    },
    {
      id: '57',
      text: 'Which design pattern is commonly used in the client-server architecture to decouple the client application from server-specific implementation details?',
      options: [
        'Factory Method Pattern',
        'Decorator Pattern',
        'Adapter Pattern',
        'Facade Pattern',
      ],
      correctAnswerIndex: 2,
      explanation:
        'The Adapter Pattern allows incompatible interfaces to work together by wrapping the server interface.',
    },
    {
      id: '58',
      text: 'The part of operating system that is responsible for managing the memory hierarchy in computer system is called ______.',
      options: [
        'Memory Management Unit',
        'Memory Manager',
        'Translation Look aside Buffer',
        'Memory abstraction unit',
      ],
      correctAnswerIndex: 1,
      explanation:
        'The Memory Manager handles allocation/deallocation, virtual memory, and paging across the memory hierarchy.',
    },
    {
      id: '59',
      text: 'The android graphics package has support for',
      options: ['Canvas', 'Bitmap', 'Paints', 'All of the above'],
      correctAnswerIndex: 3,
      explanation:
        "Android's graphics package includes Canvas (drawing surface), Bitmap (images), and Paint (styles/colors).",
    },
    {
      id: '60',
      text: 'Which component in the Model-View-Controller (MVC) architectural pattern is responsible for interacting with the data source?',
      options: ['Model', 'View', 'Controller', 'Middleware'],
      correctAnswerIndex: 0,
      explanation:
        'The Model manages data, business logic, and interactions with databases/APIs in MVC.',
    },
    {
      id: '61',
      text: 'If a class has multiple methods having the same name but different parameters, it is called ______.',
      options: [
        'Inheritance',
        'Applet',
        'Method overriding',
        'Method overloading',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Method overloading provides multiple implementations differentiated by parameter types/numbers.',
    },
    {
      id: '62',
      text: 'A diagramming analysis technique used to select the best course of action when future outcomes are uncertain is?',
      options: [
        'Impact matrix',
        'Critical chain scheduling',
        'Decision tree',
        'Gant chart',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Decision trees model possible decisions/chance events as branches to evaluate optimal paths.',
    },
    {
      id: '63',
      text: 'As ______ operating system is responsible for allocating resources to the various applications so that access to the resources is synchronized and operations are correct and consistent.',
      options: [
        'An extended machine',
        'A resource manager',
        'A virtual Machine',
        'A multiplexer',
      ],
      correctAnswerIndex: 1,
      explanation:
        'The OS acts as a resource manager for CPU, memory, I/O devices to prevent conflicts between processes.',
    },
    {
      id: '64',
      text: 'Which of the following is limitations of the manual approach?',
      options: [
        'Data dependency on the application',
        'Lengthy development and maintenance time',
        'Duplication or redundancy of data',
        'All',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Manual approaches suffer from all these issues, which databases help resolve through centralization.',
    },
    {
      id: '65',
      text: 'An entity that does not have a key attribute and that is identification-dependent on another entity type:',
      options: [
        'Entity type',
        'Weak entity type',
        'Relationship type',
        'Relation',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Weak entities (e.g., ORDER_ITEM) depend on strong entities (ORDER) for identity via foreign keys.',
    },
    {
      id: '66',
      text: 'Which design pattern is used to provide a way of handling a request by passing it through a series of handlers until it is handled or rejected?',
      options: [
        'Bridge Pattern',
        'Chain of Responsibility Pattern',
        'Command Pattern',
        'Builder Pattern',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Chain of Responsibility links handler objects that can either process requests or pass them along.',
    },
    {
      id: '67',
      text: 'The main concern of performance quality attributes is ______.',
      options: [
        'Fault recovery',
        'Latency',
        'Resource management',
        'Reducing coupling',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Performance primarily focuses on response time (latency) and throughput under workload.',
    },
    {
      id: '68',
      text: 'Which of the following is a type of function that is expanded in place at the point of call in C++?',
      options: [
        'Static function',
        'Inline function',
        'Virtual function',
        'External function',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Inline functions avoid call overhead by inserting code directly at call sites (compiler optimization).',
    },
    {
      id: '69',
      text: 'Which of the following is an example of a back-end technology?',
      options: ['CSS', 'JavaScript', 'PHP', 'Bootstrap'],
      correctAnswerIndex: 2,
      explanation:
        'PHP is a server-side language for back-end logic, unlike front-end technologies (CSS, JS, Bootstrap).',
    },
    {
      id: '70',
      text: 'During a software testing process, what happened if an expected result is not specified',
      options: [
        'It may be difficult to run the test',
        'It may be difficult to determine if the test has passed or failed',
        'We cannot automate the user input values',
        'We cannot determine the actual result',
      ],
      correctAnswerIndex: 1,
      explanation:
        "Without expected results, there's no benchmark to compare against for pass/fail determination.",
    },
    {
      id: '71',
      text: 'Which one of the following is true?',
      options: [
        'Manual testing uses automation tools to execute test cases.',
        'No need for programming skills in automation testing.',
        'Manual testing is suitable for exploratory testing',
        'The initial investment in Automation testing is lower than in manual testing.',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Exploratory testing benefits from human intuition, while automated testing excels at repetitive tasks.',
    },
    {
      id: '72',
      text: '______ states primary key value must not be null value.',
      options: ['Entity integrity', 'Domain integrity', 'Unique', 'All'],
      correctAnswerIndex: 0,
      explanation:
        'Entity integrity ensures primary keys uniquely identify tuples by prohibiting null values.',
    },
    {
      id: '73',
      text: 'The TCP port number 23 describes about the ______',
      options: [
        'Transmission of file from one client to the other one at the presence of FTP service',
        'Hyper Text Transfer Protocol service',
        'The mailing service delivered by using the SMTP',
        'Remote login capability which can be achieved by using the telnet',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Port 23 is reserved for Telnet, an insecure protocol for remote command-line access.',
    },
    {
      id: '74',
      text: 'Unsupervised learning methods can be used in which one of the following scenarios?',
      options: [
        'Given a set of news articles found on the web, group them into a set of articles about the same story.',
        'Given a dataset of reviews of Netflix movie series marked as positive, negative and neutral, classify reviews of a new Netflix movie series.',
        'Given a dataset of emails labeled as spam or not spam, and classify new incoming emails to their right classes.',
        'Given a dataset of patients diagnosed as either having diabetes or not, learn to classify new patients as having diabetes or not.',
      ],
      correctAnswerIndex: 0,
      explanation:
        "Unsupervised learning (e.g., clustering) groups unlabeled data - news article grouping doesn't require pre-labeled categories.",
    },
    {
      id: '75',
      text: 'Among the reasons that lead to deadlock in operating system which one is used to be solution for the inter process communication problem?',
      options: [
        'Hold and Wait Condition',
        'Mutual exclusion',
        'No preemption',
        'Circular wait',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Mutual exclusion ensures only one process accesses a resource at a time, preventing race conditions in IPC.',
    },
    {
      id: '76',
      text: 'The TCP/IP Host to Host network layer corresponds to the ______ layer of the OSI reference model',
      options: ['Physical', 'Physical and Data Link', 'Network', 'Transport'],
      correctAnswerIndex: 3,
      explanation:
        "TCP/IP's Host-to-Host layer (TCP/UDP) maps to OSI's Transport Layer (Layer 4), handling end-to-end communication.",
    },
    {
      id: '77',
      text: 'Identify the slowest sorting technique among the following?',
      options: ['Merge sort', 'Selection sort', 'Quick sort', 'Bubble sort'],
      correctAnswerIndex: 3,
      explanation:
        'Bubble sort has O(n²) complexity in average/worst cases, making it inefficient for large datasets compared to O(n log n) sorts.',
    },
    {
      id: '78',
      text: 'What is the primary goal of software security?',
      options: [
        'To make software faster',
        'To make software more user-friendly',
        'To prevent unauthorized access and protect against attacks',
        'To make software cheaper',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Security focuses on confidentiality, integrity, and availability (CIA triad) - protecting systems from malicious actors.',
    },
    {
      id: '79',
      text: 'Which one of the following is not true about an intelligent agent?',
      options: [
        'The intelligent agent needs user input for solving any problem.',
        'The intelligent agent can be an autonomous entity.',
        'The intelligent agent is the rational agent.',
        'The intelligent agents can solve a problem on its own without any human intervention',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Intelligent agents can operate autonomously (e.g., recommendation systems) without constant user input.',
    },
    {
      id: '80',
      text: 'What is the purpose of a security policy?',
      options: [
        'To prevent all security breaches from occurring',
        'To provide guidance on how to protect information assets',
        'To guarantee complete security of all information assets',
        'To restrict access to all information assets',
      ],
      correctAnswerIndex: 1,
      explanation:
        "Security policies establish rules/procedures for protection, though they can't guarantee absolute security.",
    },
    {
      id: '81',
      text: 'Suppose you have a function that takes in a list of integers and returns the maximum value in the list. The function also prints a message to the console with the maximum value. How many test cases do you need to achieve 100% statement coverage?',
      options: [
        'at least two test cases',
        '1',
        'at least three test cases',
        'Maximum of 3',
      ],
      correctAnswerIndex: 1,
      explanation:
        "A single test case with a non-empty list executes all statements (finding max + printing). Empty list may be needed for robustness but isn't required for basic statement coverage.",
    },
    {
      id: '82',
      text: 'Which of the following is not the application of data structure?',
      options: [
        'Numerical analysis',
        'Operating system',
        'Compiler design',
        'None of the above mentioned',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Data structures are fundamental to all these domains (e.g., stacks in compilers, queues in OS).',
    },
    {
      id: '83',
      text: 'When the switch statement matches the expression with the given labels, how is the comparison done?',
      options: [
        'Both the datatype and the result of the expression are compared.',
        'Only the datatype of the expression is compared',
        'Only the value of the expression is compared',
        'None of the above',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Switch statements match both value and type (e.g., 1 != "1"), unlike loose equality comparisons.',
    },
    {
      id: '84',
      text: 'Which one of the following is not an application of AI?',
      options: [
        'Computer Vision',
        'Expert System',
        'Database Management System',
        'Natural Language Processing',
      ],
      correctAnswerIndex: 2,
      explanation:
        'DBMS focuses on data storage/retrieval without inherent intelligence, unlike AI applications like NLP or computer vision.',
    },
    {
      id: '85',
      text: 'Which design principle suggests that software should be designed in such a way that the different components can be easily changed without affecting other components?',
      options: [
        'Abstraction',
        'Low coupling',
        'Separation of concerns',
        'High cohesion',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Low coupling minimizes dependencies between modules, allowing isolated changes.',
    },
    {
      id: '86',
      text: 'Which one of the following is a Not a characteristic of good design?',
      options: [
        'software engineer must design the modules with the goal of high cohesion and low coupling',
        'A software engineer must design the modules with the goal of low cohesion and high coupling',
        'A design must implement all explicit requirements from the analysis model and accommodate all implicit requirements desired by the user',
        'A good design should be modular',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Good design aims for high cohesion (related functionality) and low coupling (minimal dependencies), not the opposite.',
    },
    {
      id: '87',
      text: 'Among the following which one is not reasons for introducing the concepts of EER model?',
      options: [
        'It avoids describing similar concepts more than once.',
        'It adds more semantic information to the design.',
        'Handle complex systems',
        'None',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Enhanced Entity-Relationship (EER) models provide all these benefits through inheritance, categorization, etc.',
    },
    {
      id: '88',
      text: 'One of the following is not true about project risk management, which one is it?',
      options: [
        'Positive risks are known as threats',
        'Risk management can have positive impact on selecting projects',
        'Risk management can often result in significant improvements in the ultimate success of projects',
        'All',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Positive risks are opportunities, not threats. Threat management handles negative risks.',
    },
    {
      id: '89',
      text: 'The string ______ method compares values lexicographically and returns an integer value.',
      options: ['compareTo()', '==', 'Equals()', 'All'],
      correctAnswerIndex: 0,
      explanation:
        'compareTo() returns negative/zero/positive for lexicographical ordering, while == checks reference equality.',
    },
    {
      id: '90',
      text: 'Which of the following is time multiplexed resource?',
      options: ['Memory', 'CPU', 'Network', 'Compact Disk'],
      correctAnswerIndex: 1,
      explanation:
        'CPU time is multiplexed (shared) across processes via scheduling, unlike dedicated resources like memory or disks.',
    },
    {
      id: '91',
      text: 'Which one of the followings is/are incorrect about first normal forms?',
      options: [
        'It is used to disallow the multivalued attributes',
        'Composite attributes cannot be used in 1NF',
        'Relations can be created in a relation',
        'The only attribute values allowed are atomic values',
      ],
      correctAnswerIndex: 2,
      explanation:
        '1NF prohibits nested relations but allows composite attributes (e.g., address with street/city).',
    },
    {
      id: '92',
      text: "Which of the following is Not categorized under Product Operation of McCall's Software Quality Factors?",
      options: ['Efficiency', 'Reliability', 'Reusability', 'Integrity'],
      correctAnswerIndex: 2,
      explanation:
        'Reusability is a Product Revision factor, while Operation factors include correctness, reliability, etc.',
    },
    {
      id: '93',
      text: 'In android studio, the file which contains list of application permissions and configuration is',
      options: ['Layout', 'strings', 'android manifest', 'Gradle'],
      correctAnswerIndex: 2,
      explanation:
        'AndroidManifest.xml declares app components, permissions, and hardware requirements.',
    },
    {
      id: '94',
      text: 'In android studio file structure, the file which is used to register minSdk, targetSdk and app dependencies is',
      options: [
        'Settings.gradle',
        'Build.gradle',
        'Strings',
        'Android manifest',
      ],
      correctAnswerIndex: 1,
      explanation:
        'build.gradle (Module level) configures SDK versions, dependencies, and build settings.',
    },
    {
      id: '95',
      text: 'What is the purpose of vulnerability scanning in software security?',
      options: [
        'To identify potential vulnerabilities in software',
        'To test the functionality of the software',
        'To validate the software against industry standards',
        'To document the software for future reference',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Vulnerability scanners detect known security weaknesses (e.g., outdated libraries, misconfigurations).',
    },
    {
      id: '96',
      text: 'With use of extends keyword the subclasses will be able to inherit all the properties of the super class except ______.',
      options: ['Private', 'Protected', 'Public', 'Default'],
      correctAnswerIndex: 0,
      explanation:
        'Private members are accessible only within their declaring class, not by subclasses.',
    },
    {
      id: '97',
      text: 'The model which would use the divide and conquer approach is ______.',
      options: [
        'Evolutionary Development Model',
        'Waterfall Model',
        'Incremental Development Model',
        'Prototyping',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Incremental development divides the system into manageable chunks delivered sequentially.',
    },
    {
      id: '98',
      text: 'Which of the following network topology is referenced as an active network topology?',
      options: [
        'Bus Topology',
        'Star Topology',
        'Mesh Topology',
        'Ring Topology',
      ],
      correctAnswerIndex: 3,
      explanation:
        'In ring topologies, each node actively regenerates and retransmits signals (unlike passive bus topologies).',
    },
    {
      id: '99',
      text: 'An android component which listens to android system wide events and notifies the arrival of a new message can be',
      options: [
        'Content provider',
        'Service',
        'Broadcast receiver',
        'Activity',
      ],
      correctAnswerIndex: 2,
      explanation:
        'BroadcastReceivers respond to system-wide announcements (e.g., SMS received, battery low).',
    },
    {
      id: '100',
      text: 'Which of the following is not a requirement for a C++ function to be recursive?',
      options: [
        'Base case',
        'Recursive case',
        'Functions that call themselves',
        'Dynamic variables',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Recursion requires a base case (termination condition) and recursive case (self-call), but not dynamic variables.',
    },
  ],
}

export default exitModel4
