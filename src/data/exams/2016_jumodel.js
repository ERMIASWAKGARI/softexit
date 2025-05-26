const juModel2016 = {
  id: '2016JUModel',
  title: '2016JU Model',
  year: 2016,
  type: 'model',
  image: 'ju.png',
  questions: [
    {
      id: '1',
      text: 'Which of the following is NOT a fundamental capability required for an artificial intelligent agent?',
      options: ['A. Perception', 'B. Learning', 'C. Searching', 'D. Thinking'],
      correctAnswerIndex: 2,
      explanation:
        'Searching is a method, not a core capability like perception, learning, or thinking.',
    },
    {
      id: '2',
      text: 'For a Depth-First Search (DFS) implementation, what kind of data structure is typically used to store the unexplored nodes during the exploration process?',
      options: ['A. Apriority queue', 'B. Linked list', 'C. Queue', 'D. Stack'],
      correctAnswerIndex: 3,
      explanation:
        'DFS uses a stack to keep track of the nodes to be explored next.',
    },
    {
      id: '3',
      text: 'Imagine you are working on a Social Network application and want to find all friends of a user within two connections. Which search algorithm is best suited for this task?',
      options: [
        'A. Breadth-First Search (BFS)',
        'B. Depth-First Search (DFS)',
        'C. A* Search',
        'D. Iterative Deepening Search (IDS)',
      ],
      correctAnswerIndex: 0,
      explanation:
        'BFS is ideal for finding shortest path or closest connections like friends of friends.',
    },
    {
      id: '4',
      text: 'In First-Order Logic (FOL), what is the purpose of a universal quantifier (ForAll x or ∀x)?',
      options: [
        'A. Indicate the existence of at least one element satisfying a condition.',
        'B. Indicate that a predicate applies to all things.',
        'C. Represent a disjunction (OR) between two statements.',
        'D. Denote a relationship between two entities.',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Universal quantifier applies a predicate to all members in the domain.',
    },
    {
      id: '5',
      text: 'Suppose you are applying for a competitive job at Apple and the company uses AI to evaluate applications. How do you feel about this?',
      options: [
        'A. AI cannot objectively assess skills and qualifications.',
        'B. AI might overlook unique strengths or experiences for candidates',
        'C. The impersonal nature of AI removes the human touch from the process.',
        'D. AI could eliminate unconscious bias in the selection process.',
      ],
      correctAnswerIndex: 3,
      explanation:
        'One potential benefit of AI in recruitment is reduction of unconscious bias.',
    },
    {
      id: '6',
      text: 'Which of the following is the main goal of supervised learning algorithm?',
      options: [
        'A. To learn a model from labeled data',
        'B. To cluster unlabeled data points',
        'C. To find the most important features in a dataset',
        'D. To learn a model from unlabeled data',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Supervised learning involves training on labeled datasets to predict outcomes.',
    },
    {
      id: '7',
      text: 'Which of the following problems would you apply an Unsupervised learning algorithm?',
      options: [
        'A. Predict crop yields for next year using 10 years of data.',
        'B. Cluster a collection of news articles based on topics.',
        'C. Predict which football team will win tomorrow’s match.',
        'D. A game-playing agent learning to win.',
      ],
      correctAnswerIndex: 1,
      explanation: 'Clustering is a typical unsupervised learning task.',
    },
    {
      id: '8',
      text: 'Suppose your weather station predicts either Sunny, Cloudy, or Rainy. What kind of problem is this?',
      options: ['A. Classification', 'B. Regression', 'C. Both', 'D. Unknown'],
      correctAnswerIndex: 0,
      explanation:
        'Categorizing into fixed labels is a classification problem.',
    },
    {
      id: '9',
      text: 'Which ML algorithm is commonly used for classification tasks and is based on finding the best hyperplane?',
      options: [
        'A. k-Nearest Neighbors (k-NN)',
        'B. Naive Bayes',
        'C. Decision Trees',
        'D. Support Vector Machines (SVM)',
      ],
      correctAnswerIndex: 3,
      explanation:
        'SVM finds the optimal separating hyperplane for classification.',
    },
    {
      id: '10',
      text: 'You are evaluating models predicting continuous values. Which metric is most suitable?',
      options: [
        'A. Accuracy',
        'B. Mean Squared Error',
        'C. Precision',
        'D. Recall',
      ],
      correctAnswerIndex: 1,
      explanation:
        'MSE is used for evaluating regression models by measuring average squared errors.',
    },
    {
      id: '11',
      text: 'Consider a class hierarchy with interfaces and abstract classes. Which of the following statements is CORRECT about implementing polymorphism?',
      options: [
        'A. All concrete subclasses must override methods declared in abstract classes.',
        'B. Interfaces can only define abstract methods, while abstract classes can have concrete implementations.',
        'C. Polymorphism is achieved solely through method overloading within the same class.',
        'D. Interfaces promote tight coupling, allowing unrelated classes to share functionality.',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Interfaces define method signatures only; abstract classes can have implemented methods too.',
    },
    {
      id: '12',
      text: 'Which class is the base class for all Swing components?',
      options: [
        'A. java.awt.Component',
        'B. java.awt.Container',
        'C. javax.swing.JComponent',
        'D. javax.swing.JPanel',
      ],
      correctAnswerIndex: 2,
      explanation:
        'javax.swing.JComponent is the root class for all Swing UI components.',
    },
    {
      id: '13',
      text: 'What will be output of the following Java program?\nclass exception_handling {\n public static void main(String args[]){\n try {\n int a = args.length;\n int b = 10 / a;\n System.out.print(a);\n } catch (ArithmeticException e) {\n System.out.println("1");\n } } }',
      options: ['A. 0', 'B. 1', 'C. Compilation Error', 'D. Runtime Error'],
      correctAnswerIndex: 1,
      explanation:
        'If no args are passed, division by zero occurs, caught by the catch block, outputting "1".',
    },
    {
      id: '14',
      text: 'You want to write data to text and CSV files using polymorphism. What is the best approach?',
      options: [
        'A. Define interface Writable with writeData() method in TextFile and CSVFile classes.',
        'B. Use a base class FileWriter and extend it for specific formats.',
        'C. Use a single FileWriter class with overloaded writeData() methods.',
        'D. Write separate functions for each file format.',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Using interfaces supports polymorphism and allows extensibility for other file types.',
    },
    {
      id: '15',
      text: 'What design principle helps maintainability and scalability in complex software systems?',
      options: [
        'A. Loose coupling through well-defined interfaces',
        'B. Code duplication',
        'C. Tight coupling with direct dependencies',
        'D. Use of global variables for data access',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Loose coupling reduces interdependencies, making systems easier to maintain and scale.',
    },
    {
      id: '16',
      text: 'You’re designing a drawing app supporting circles, rectangles, and triangles with resize/move features. What pattern suits best?',
      options: ['A. Strategy', 'B. Command', 'C. Composite', 'D. Decorator'],
      correctAnswerIndex: 2,
      explanation:
        'Composite pattern treats individual and composite objects uniformly, great for shape hierarchies.',
    },
    {
      id: '17',
      text: 'What is the primary purpose of software architecture and design principles?',
      options: [
        'A. Ensure visual appeal',
        'B. Facilitate development and maintenance',
        'C. Create complex software',
        'D. Ensure legal compliance',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Good architecture improves maintainability and development efficiency.',
    },
    {
      id: '18',
      text: 'Which architectural style is best for security in a patient management system?',
      options: [
        'A. Layered (N-Tier) Architecture',
        'B. Pipe-and-Filter Architecture',
        'C. Microservices Architecture',
        'D. Service-Oriented Architecture (SOA)',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Layered architecture separates concerns, making it easier to secure each layer.',
    },
    {
      id: '19',
      text: 'Which approach is best to gather stakeholder needs during platform design?',
      options: [
        'A. Write technical documents without stakeholder input',
        'B. Interview each stakeholder group',
        'C. Use existing platform designs as templates',
        'D. Facilitate collaborative workshops for prioritization',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Collaborative workshops allow real-time prioritization and align expectations.',
    },
    {
      id: '20',
      text: 'What approach helps design a UI that meets niche market search needs?',
      options: [
        'A. Generic search bar with pre-defined filters',
        'B. User interviews to understand habits',
        'C. Use existing e-commerce data trends',
        'D. Focus on popular search terms',
      ],
      correctAnswerIndex: 1,
      explanation:
        'User interviews help uncover specific search needs and customization preferences.',
    },
    {
      id: '21',
      text: 'Software engineering principles like KIS (Keep It Simple, Stupid) focus on achieving which one of the following?',
      options: [
        'A. Increased software complexity',
        'B. Faster development speed at the cost of quality',
        'C. Improved code maintainability and reusability',
        'D. More visually appealing user interfaces',
      ],
      correctAnswerIndex: 2,
      explanation:
        'KIS aims to simplify solutions for better maintainability and reduced errors.',
    },
    {
      id: '22',
      text: 'The Spiral model combines elements of:',
      options: [
        'A. Waterfall and Agile methodologies',
        'B. Rapid prototyping and user-centered design principles',
        'C. Domain-driven design and object-oriented programming techniques',
        'D. Agile development and DevOps practices for deployment automation',
      ],
      correctAnswerIndex: 0,
      explanation:
        'The Spiral model blends iterative design (like Agile) with structured steps (like Waterfall).',
    },
    {
      id: '23',
      text: 'Agile development methodologies like Scrum emphasize:',
      options: [
        'A. A highly structured and plan-driven approach',
        'B. Short development cycles with frequent delivery and feedback',
        'C. Detailed documentation at every stage',
        'D. A large upfront investment in requirements gathering',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Scrum promotes incremental delivery and continuous customer feedback.',
    },
    {
      id: '24',
      text: 'What type of documentation would be MOST helpful for system administrators?',
      options: [
        'A. User manuals',
        'B. Marketing brochures',
        'C. Technical documentation',
        'D. Online tutorials for basic usage',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Technical documentation covers installation, configuration, and system operations.',
    },
    {
      id: '25',
      text: 'Which tool is best for writing and running unit tests?',
      options: [
        'A. A basic text editor',
        'B. A social media platform',
        'C. A unit testing framework with assertion capabilities',
        'D. A web browser',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Frameworks like JUnit or pytest enable structured unit testing with assertions.',
    },
    {
      id: '26',
      text: 'Your colleague wants to reuse your code, but it wasn’t open-sourced. What should you do?',
      options: [
        'A. Let them copy it without worrying about licensing',
        'B. Refuse to share and ask them to write new code',
        'C. Tell them to claim it as their own',
        'D. Read the license agreement and ensure it allows reuse',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Always review and comply with licensing terms to avoid legal issues.',
    },
    {
      id: '27',
      text: 'All of them are responsibilities of a requirement engineer EXCEPT:',
      options: [
        'A. Communicating requirements to the dev team',
        'B. Translating business needs into technical specs',
        'C. Selecting suitable architecture',
        'D. Ensuring requirements are testable and aligned with goals',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Architecture selection is typically done by system architects, not requirement engineers.',
    },
    {
      id: '28',
      text: 'Which requirement elicitation technique is most suitable for assessing user capability in real scenarios?',
      options: [
        'A. Focus groups',
        'B. Prototyping',
        'C. Scenarios',
        'D. Document analysis',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Scenarios provide realistic, user-centered contexts for evaluating functionality.',
    },
    {
      id: '29',
      text: 'Which technique is most effective for generating innovative ideas during requirements gathering?',
      options: [
        'A. User interviews and focus groups',
        'B. Brainstorming sessions with the team',
        'C. Reviewing technical specs',
        'D. Analyzing past user feedback',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Brainstorming encourages creativity and unconventional thinking within teams.',
    },
    {
      id: '30',
      text: 'How can you ensure the consistency of a requirements document?',
      options: [
        'A. Make sure all major requirements are included',
        'B. Verify each requirement’s source',
        'C. Ensure no contradictions between requirements',
        'D. Interpret requirements in multiple ways',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Consistency checks help avoid conflicting statements or ambiguous requirements.',
    },
    {
      id: '31',
      text: 'Your team is struggling with frequent changes in requirements. What info helps assess impact?',
      options: [
        'A. Traceability information',
        'B. Requirement Volatility information',
        'C. Version of requirement document',
        'D. Requirement stability information',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Traceability links requirements to design/code and helps assess change impact.',
    },
    {
      id: '32',
      text: 'Which HTML tag is used to create a checkbox?',
      options: [
        'A. <input type = "button">',
        'B. <checkbox></checkbox>',
        'C. <input type = "check">',
        'D. <input type = "checkbox">',
      ],
      correctAnswerIndex: 3,
      explanation:
        'The correct syntax to create a checkbox is <input type="checkbox">',
    },
    {
      id: '33',
      text: 'Which statement is incorrect about JavaScript with the DOM?',
      options: [
        'A. JavaScript can change all HTML elements',
        'B. JavaScript can change all HTML attributes',
        'C. JavaScript cannot change all CSS styles',
        'D. JavaScript can add new HTML elements and attributes',
      ],
      correctAnswerIndex: 2,
      explanation:
        'JavaScript can change all styles; so option C is incorrect.',
    },
    {
      id: '34',
      text: 'Given date April 4, 2023 (Monday), what is output of PHP getdate() on S| date[|wday|]?',
      options: [
        'A. Monday-April-4-2023',
        'B. 1-4-April-2023',
        'C. Monday-4-4-2023',
        'D. Wednesday-1-24-2024',
      ],
      correctAnswerIndex: 1,
      explanation:
        'S|date[ |wday|] returns the day index. Monday = 1, hence output is 1-4-April-2023.',
    },
    {
      id: '35',
      text: 'What is the correct HTML for creating a hyperlink?',
      options: [
        'A. <a href="http://www.w3schools.com">W3Schools</a>',
        'B. <a url="http://www.w3schools.com">W3Schools.com</a>',
        'C. <a>http://www.w3schools.com</a>',
        'D. <a name="http://www.w3schools.com">W3Schools.com</a>',
      ],
      correctAnswerIndex: 0,
      explanation: 'Option A is the correct HTML syntax for a hyperlink.',
    },
    {
      id: '36',
      text: 'Which protocol is primarily used to transfer web pages on the internet?',
      options: ['A. FTP', 'B. HTTP', 'C. SMTP', 'D. IMAP'],
      correctAnswerIndex: 1,
      explanation:
        'HTTP is used to deliver web pages from servers to browsers.',
    },
    {
      id: '37',
      text: 'Which statement is FALSE about the alt attribute in img tags?',
      options: [
        'A. ALT is useful for text-only browsers',
        'B. Used when images are disabled',
        'C. Helps when images fail to load',
        'D. It shows a tooltip when hovered',
      ],
      correctAnswerIndex: 3,
      explanation: 'The title attribute shows tooltips, not alt.',
    },
    {
      id: '38',
      text: 'Which PHP array holds file upload data from a client to server?',
      options: [
        'A. S|_COOKIE["fieldname"]["name"]',
        'B. S|_POST["fieldname"]["name"]',
        'C. S|_FILES["fieldname"]["name"]',
        'D. S|_GET["fieldname"]["name"]',
      ],
      correctAnswerIndex: 2,
      explanation: 'S|_FILES is the PHP superglobal for file upload data.',
    },
    {
      id: '39',
      text: 'What does this HTTP header represent?\nHTTP/1.1 200 OK\nContent-Type: text/html;',
      options: [
        'A. A valid HTTP request header',
        'B. A valid HTTP response header',
        'C. An invalid request header due to status code',
        'D. Invalid response header missing Set-Cookie',
      ],
      correctAnswerIndex: 1,
      explanation: '200 OK with content-type is a standard response header.',
    },
    {
      id: '40',
      text: 'What is the output of this PHP function?\nS|op2 = "be";\nfunction exam(S|op1) {\n echo S|op2;\n echo S| p1;\n}\nexam(" awesome");',
      options: ['A. awesome be', 'B. be awesome', 'C. beawesome', 'D. awesome'],
      correctAnswerIndex: 3,
      explanation:
        'The variable S|op2 is outside scope of function, so only " awesome" is printed.',
    },
    {
      id: '41',
      text: 'Which task in software project management is responsible for maintaining vision and managing scope?',
      options: [
        'A. Project Scheduling',
        'B. Risk Management',
        'C. Scope Management',
        'D. Quality Management',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Scope management ensures alignment with business goals and controls project boundaries.',
    },
    {
      id: '42',
      text: 'What is the role of Critical Path Method (CPM) in project scheduling?',
      options: [
        'A. Identifies all risks and categorizes them',
        'B. Calculates longest sequence of dependent tasks',
        'C. Provides hierarchical scope decomposition',
        'D. Integrates cost, time, and resources',
      ],
      correctAnswerIndex: 1,
      explanation:
        'CPM helps identify tasks that directly affect project timeline.',
    },
    {
      id: '43',
      text: 'Which tool visualizes project schedule including task start and end dates?',
      options: [
        'A. Kanban Board',
        'B. Critical Path Method (CPM)',
        'C. Gantt Chart',
        'D. Work Breakdown Structure (WBS)',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Gantt charts are bar charts showing start and end times of project tasks.',
    },
    {
      id: '44',
      text: 'Which item is NOT typically found in a Software Project Management Plan (SPMP)?',
      options: [
        'A. Project Objectives',
        'B. Stakeholder Analysis',
        'C. Code Review Guidelines',
        'D. Risk Management Plan',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Code review guidelines are part of development practice, not SPMP.',
    },
    {
      id: '45',
      text: 'What is the critical path time for the WBS given?\nTasks: A 30, B 60, D 60, H 0',
      options: ['A. 180', 'B. 150', 'C. 120', 'D. 300'],
      correctAnswerIndex: 0,
      explanation:
        'A (30) → B (60) → D (60) → H (0) = 150; but A → B → E → G → H = 180 is longest.',
    },
    {
      id: '46',
      text: 'Which SQL statement selects all columns from "Employees"?',
      options: [
        'A. SELECT * FROM Employees;',
        'B. SELECT Employees;',
        'C. SELECT ALL FROM Employees;',
        'D. SELECT Fields FROM Employees;',
      ],
      correctAnswerIndex: 0,
      explanation: 'SELECT * FROM table_name retrieves all columns.',
    },
    {
      id: '47',
      text: 'How do you add a new "email" column to the employees table?',
      options: [
        'A. MODIFY TABLE employees ADD email VARCHAR(255);',
        'B. UPDATE TABLE employees ADD COLUMN email VARCHAR(255);',
        'C. ALTER TABLE employees ADD COLUMN email VARCHAR(255);',
        'D. INSERT INTO employees ADD COLUMN email VARCHAR(255);',
      ],
      correctAnswerIndex: 2,
      explanation: 'ALTER TABLE ... ADD COLUMN is used to add new columns.',
    },
    {
      id: '48',
      text: 'What is the name of a query used inside a WHERE clause?',
      options: [
        'A. Multi query',
        'B. Sub query',
        'C. Super query',
        'D. Master query',
      ],
      correctAnswerIndex: 1,
      explanation:
        'A subquery is a nested query used within another query’s clause.',
    },
    {
      id: '49',
      text: 'What are the advantages of normalization in database design?',
      options: [
        'A. Reduces data redundancy, improves data integrity',
        'B. Increases complexity, simplifies queries',
        'C. Improves security, reduces space',
        'D. Creates duplicates, enhances performance',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Normalization reduces repetition and maintains consistency.',
    },
    {
      id: '50',
      text: 'What are the benefits of using foreign keys in relational databases?',
      options: [
        'A. Reduces redundancy, simplifies management',
        'B. Improves performance, reduces space',
        'C. Allows complex data, enhances security',
        'D. Enforces integrity, prevents orphaned records',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Foreign keys ensure relational consistency and avoid orphan records.',
    },
    {
      id: '51',
      text: 'A company wants to secure data by restricting access to authorized personnel only. Which technology helps?',
      options: [
        'A. Public Wi-Fi',
        'B. Open network shares',
        'C. Access control systems',
        'D. Simple password policies',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Access control systems limit access to authorized individuals, ensuring security.',
    },
    {
      id: '52',
      text: 'Which modern software testing process emphasizes developer-tester-operations collaboration?',
      options: [
        'A. Waterfall Model',
        'B. Agile Testing',
        'C. DevOps',
        'D. V-Model',
      ],
      correctAnswerIndex: 2,
      explanation:
        'DevOps integrates development, testing, and operations for better quality and reliability.',
    },
    {
      id: '53',
      text: 'What is most important when designing test cases for coverage?',
      options: [
        'A. UI aesthetics',
        'B. Severity of defects',
        'C. Functionalities and scenarios',
        'D. Programming language',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Test coverage should reflect real-world usage and functions.',
    },
    {
      d: '54',
      text: 'Which best describes the execution phase of the testing process?',
      options: [
        'A. Identifying test scope',
        'B. Developing automated scripts',
        'C. Reviewing test strategy',
        'D. Running test cases and logging defects',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Execution involves running test cases and documenting defects found.',
    },
    {
      id: '55',
      text: 'Which of the following best describes a risk mitigation strategy?',
      options: [
        'A. Accepting risk with a backup plan',
        'B. Ignoring risk for immediate tasks',
        'C. Eliminating risk by scope change',
        'D. Transferring risk via insurance',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Mitigation involves reducing the impact and having a contingency plan.',
    },
    {
      id: '56',
      text: 'Which is an essential practice for high-quality software development?',
      options: [
        'A. No peer review',
        'B. Using version control',
        'C. Avoiding automation',
        'D. Ignoring non-functional requirements',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Version control tracks changes and facilitates collaboration.',
    },
    {
      id: '57',
      text: 'Which multithreading benefit allows UI to remain responsive during blocking?',
      options: [
        'A. Scalability',
        'B. Economy',
        'C. Resource sharing',
        'D. Responsiveness',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Responsiveness ensures UI updates even if other threads are blocked.',
    },
    {
      id: '58',
      text: 'What technique checks for deadlock and takes recovery actions?',
      options: [
        'A. Deadlock detection',
        'B. Deadlock avoidance',
        'C. Deadlock prevention',
        'D. Deadlock cycle',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Detection finds deadlocks and tries to recover; prevention avoids them proactively.',
    },
    {
      id: '59',
      text: 'Which techniques are used to manage virtual memory efficiently?',
      options: [
        'A. Paging, segmentation, swapping',
        'B. RAID, mirroring, striping',
        'C. Buffering, spooling, caching',
        'D. Fragmentation, compaction, defragmentation',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Paging, segmentation, and swapping are core memory management strategies.',
    },
    {
      id: '60',
      text: 'Which security measure protects against unauthorized OS access?',
      options: [
        'A. Encryption',
        'B. Fragmentation',
        'C. Buffer overflow',
        'D. Disk scheduling',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Encryption ensures only authorized users can access sensitive data.',
    },
    {
      id: '61',
      text: 'Which component manages resource allocation in a modern operating system?',
      options: ['A. Kernel', 'B. Shell', 'C. GUI', 'D. Compiler'],
      correctAnswerIndex: 0,
      explanation:
        'The kernel is the OS core responsible for managing hardware resources.',
    },
    {
      id: '62',
      text: 'What is the primary purpose of the Memory Management Unit (MMU)?',
      options: [
        'A. Managing user accounts',
        'B. Controlling network access',
        'C. Handling memory allocation and virtual memory',
        'D. Providing GUI support',
      ],
      correctAnswerIndex: 2,
      explanation:
        'The MMU handles address translation and virtual memory mapping.',
    },
    {
      id: '63',
      text: 'Which layer in the TCP/IP model handles formatting and encryption?',
      options: [
        'A. Session',
        'B. Presentation',
        'C. Application',
        'D. Network access',
      ],
      correctAnswerIndex: 1,
      explanation:
        'The Presentation layer manages data encoding, compression, and encryption.',
    },
    {
      id: '64',
      text: 'Given 192.168.1.64/26, which subnetworks support 10 and 18 hosts?',
      options: [
        'A. 192.168.1.16/28 and 192.168.1.64/27',
        'B. 192.168.1.64/27 and 192.168.1.128/27',
        'C. 192.168.1.64/27 and 192.168.1.96/28',
        'D. 192.168.1.96/28 and 192.168.1.192/28',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Subnetting 192.168.1.64/27 and 192.168.1.96/28 allows for 32 and 16 hosts respectively.',
    },
    {
      id: '65',
      text: 'What is the correct order of the protocol stack used by a web client to send a request?',
      options: [
        'A. HTTP, IP, TCP, Ethernet',
        'B. HTTP, TCP, IP, Ethernet',
        'C. Ethernet, TCP, IP, HTTP',
        'D. Ethernet, IP, TCP, HTTP',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Data flows from Application (HTTP) to Transport (TCP), Network (IP), then Link (Ethernet).',
    },
    {
      id: '66',
      text: 'Which Windows command shows the computer’s IP configuration?',
      options: [
        'A. ping',
        'B. ipconfig',
        'C. show interfaces',
        'D. show ip interface brief',
      ],
      correctAnswerIndex: 1,
      explanation:
        'The ipconfig command displays the IP settings of a Windows PC.',
    },
    {
      id: '67',
      text: 'Which transmission medium is most commonly used for LAN communication?',
      options: [
        'A. Coaxial Cable',
        'B. Optical Fiber',
        'C. Twisted Pair Cable',
        'D. Satellite',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Twisted pair is widely used in Ethernet-based LANs for its cost and reliability.',
    },
    {
      id: '68',
      text: 'Which device determines message routing through internetworks?',
      options: ['A. Router', 'B. Firewall', 'C. Web server', 'D. DSL modem'],
      correctAnswerIndex: 0,
      explanation:
        'Routers direct data packets based on their destination IP addresses.',
    },
    {
      id: '69',
      text: 'Which statement about stack data structure is NOT correct?',
      options: [
        'A. Top of the stack contains the newest node.',
        'B. A stack is FIFO.',
        'C. A null link is in the bottom node.',
        'D. Linked lists can implement stacks.',
      ],
      correctAnswerIndex: 1,
      explanation: 'Stacks are LIFO (Last In First Out), not FIFO.',
    },
    {
      id: '70',
      text: 'Which technique is commonly used for designing efficient algorithms?',
      options: [
        'A. Random guessing',
        'B. Linear search without optimization',
        'C. Divide and conquer',
        'D. Brute force without considering complexity',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Divide and conquer breaks problems into smaller sub-problems for efficiency.',
    },
    {
      id: '71',
      text: 'Which statement best describes how data is organized and retrieved in a binary search tree?',
      options: [
        'A. Left child contains greater values',
        'B. Right child contains lesser values',
        'C. BST does not allow duplicates',
        'D. Inorder traversal gives sorted order',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Inorder traversal of a BST returns values in ascending sorted order.',
    },
    {
      id: '72',
      text: 'Which method is commonly used to analyze algorithm efficiency?',
      options: [
        'A. Empirical analysis with real-world data',
        'B. Theoretical analysis using complexity models',
        'C. Trial and error without theory',
        'D. Opinion-based expert judgment',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Time and space complexity give a mathematical model of algorithm performance.',
    },
    {
      id: '73',
      text: 'Which data structure is best for optimizing food delivery routes with time constraints?',
      options: ['A. Stack', 'B. Queue', 'C. Hash Table', 'D. Graph'],
      correctAnswerIndex: 3,
      explanation:
        'Graphs can model locations and distances, ideal for route optimization.',
    },
    {
      id: '74',
      text: 'What are actual parameters in C++?',
      options: [
        'A. Parameters passed when calling functions',
        'B. Parameters defined in function headers',
        'C. Unused variables in functions',
        'D. Parameters ignored in execution',
      ],
      correctAnswerIndex: 0,
      explanation: 'Actual parameters are passed by the caller to a function.',
    },
    {
      id: '75',
      text: 'What is the purpose of testing and debugging?',
      options: [
        'A. Introduce bugs',
        'B. Slow down execution',
        'C. Ensure program works and fix issues',
        'D. Modify runtime without planning',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Testing verifies behavior; debugging fixes discovered errors.',
    },
    {
      id: '76',
      text: 'Which is an example of a recursive function?',
      options: [
        'A. General sorting algorithm',
        'B. Looping structure',
        'C. Calculating factorial',
        'D. Data validation',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Factorial is a classic example of recursion: n! = n × (n-1)!',
    },
    {
      id: '77',
      text: 'Declaration of a pointer reserves memory for:',
      options: ['A. Object', 'B. Pointer', 'C. Both', 'D. None'],
      correctAnswerIndex: 1,
      explanation:
        'Only memory for the pointer (address) is allocated, not the object.',
    },
    {
      id: '78',
      text: 'Which is true about static functions in C++?',
      options: [
        'A. Called when object is destroyed',
        'B. Bound to individual object',
        'C. Can be called using class name',
        'D. Used with dummy objects',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Static functions belong to the class and are called using class name.',
    },
    {
      id: '79',
      text: 'If we create a file using `ifstream`, what is the default mode?',
      options: ['A. ios::out', 'B. ios::in', 'C. ios::app', 'D. ios::binary'],
      correctAnswerIndex: 1,
      explanation: 'ifstream opens files in input mode by default.',
    },
    {
      id: '80',
      text: 'What is a drawback of user-defined data types in C++?',
      options: [
        'A. Limited organization',
        'B. Reduced flexibility',
        'C. Improved maintenance',
        'D. Efficiency issues',
      ],
      correctAnswerIndex: 1,
      explanation:
        'They can limit flexibility due to added abstraction or misuse.',
    },
    {
      id: '81',
      text: 'In modular programming, what is the benefit of separating code into modules?',
      options: [
        'A. Makes code harder to read',
        'B. Limits code reusability',
        'C. Enables easier collaboration',
        'D. Increases compilation time',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Modules allow developers to work on components independently, aiding collaboration.',
    },
    {
      id: '82',
      text: 'How does analyzing real-world problems enhance engagement in a medium-scale application?',
      options: [
        'A. Tailors features to user needs',
        'B. Adds complexity to design',
        'C. Limits functionality',
        'D. Avoids usability testing',
      ],
      correctAnswerIndex: 0,
      explanation:
        'User-centered design ensures relevance and better engagement.',
    },
    {
      id: '83',
      text: 'How does debugging contribute to application quality?',
      options: [
        'A. Adds unnecessary features',
        'B. Makes application complex',
        'C. Ensures code correctness',
        'D. Reduces user satisfaction',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Debugging finds and fixes bugs, ensuring proper functionality.',
    },
    {
      id: '84',
      text: 'How should a programmer stay relevant with a new programming framework?',
      options: [
        'A. Ignore and use old skills',
        'B. Delegate learning',
        'C. Dedicate time to learn it',
        'D. Hope current skills suffice',
      ],
      correctAnswerIndex: 2,
      explanation: 'Staying updated requires actively learning new frameworks.',
    },
    {
      id: '85',
      text: 'Which is NOT a management responsibility in maintenance?',
      options: [
        'A. Enhancing productivity',
        'B. Choosing the right people',
        'C. Reproducing software errors',
        'D. Motivating personnel',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Reproducing errors is a technical task, not a management responsibility.',
    },
    {
      id: '86',
      text: 'Which debugging approach traces code backwards from an error?',
      options: [
        'A. Brute force',
        'B. Backtracking',
        'C. Cause elimination',
        'D. Memory dumps',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Backtracking starts from the error and traces backwards to find its cause.',
    },
    {
      id: '87',
      text: 'Which factor most impacts software maintenance costs?',
      options: [
        'A. Stable team composition',
        'B. Documentation quality',
        'C. Hardware stability',
        'D. Software scope',
      ],
      correctAnswerIndex: 1,
      explanation: 'Good documentation reduces time and cost for maintenance.',
    },
    {
      id: '88',
      text: 'Which characteristic is NOT essential for software reusability?',
      options: [
        'A. Environmental independence',
        'B. High cohesion',
        'C. Complex dependency',
        'D. Adaptability',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Reusability requires loose coupling, not complex dependencies.',
    },
    {
      id: '89',
      text: 'Which process precedes re-engineering by analyzing source code?',
      options: [
        'A. Refactoring',
        'B. Forward engineering',
        'C. Reverse engineering',
        'D. Incremental development',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Reverse engineering extracts design and specs from source code.',
    },
    {
      id: '90',
      text: 'Which Android component handles UI and user interaction?',
      options: [
        'A. Service',
        'B. Broadcast Receiver',
        'C. Content Provider',
        'D. Activity',
      ],
      correctAnswerIndex: 3,
      explanation: 'Activity represents a screen with UI elements.',
    },
    {
      id: '91',
      text: 'When an Activity is destroyed and recreated, which methods are called in order?',
      options: [
        'A. onCreate(), onDestroy()',
        'B. onPause(), onResume()',
        'C. onStop(), onStart()',
        'D. onSaveInstanceState(), onRestoreInstanceState()',
      ],
      correctAnswerIndex: 3,
      explanation: 'These lifecycle methods help save and restore UI state.',
    },
    {
      id: '92',
      text: 'Which Android component is used for long-running background operations?',
      options: [
        'A. Activity',
        'B. Service',
        'C. Broadcast Receiver',
        'D. Content Provider',
      ],
      correctAnswerIndex: 1,
      explanation: 'Services run background tasks without user interface.',
    },
    {
      id: '93',
      text: 'Which is NOT a feature of Android Studio IDE?',
      options: [
        'A. Visual layout editor',
        'B. Gradle build system',
        'C. Firebase integration',
        'D. Microsoft Office integration',
      ],
      correctAnswerIndex: 3,
      explanation: 'Android Studio doesn’t integrate with Microsoft Office.',
    },
    {
      id: '94',
      text: 'Where can you find the project structure and files in Android Studio?',
      options: [
        'A. Project window',
        'B. Run window',
        'C. Logcat window',
        'D. Device Monitor',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Project window displays all code, resources, and module structure.',
    },
    {
      id: '95',
      text: 'Which cryptanalytic attack has the least information?',
      options: [
        'A. Chosen plaintext',
        'B. Chosen ciphertext',
        'C. Known plaintext',
        'D. Ciphertext only',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Ciphertext-only attack assumes no access to plaintext or encryption key.',
    },
    {
      id: '96',
      text: 'You receive an encoded message. What program should you use to read it?',
      options: [
        'A. Ciphertext',
        'B. Secret key',
        'C. Encryption algorithm',
        'D. Decryption algorithm',
      ],
      correctAnswerIndex: 3,
      explanation: 'A decryption algorithm decodes the scrambled message.',
    },
    {
      id: '97',
      text: 'Which security goal is NOT achieved with symmetric key cryptography?',
      options: [
        'A. Integrity',
        'B. Confidentiality',
        'C. Availability',
        'D. Nonrepudiation',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Nonrepudiation requires asymmetric cryptography to verify sender identity.',
    },
    {
      id: '98',
      text: 'Which SDLC phase is most associated with security evaluation?',
      options: [
        'A. Design',
        'B. Implementation',
        'C. Maintenance',
        'D. Requirements gathering',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Security threats are mitigated during design through architecture and policy.',
    },
    {
      id: '99',
      text: 'In public-key cryptography, how can B decrypt a confidential and authenticated message from A?',
      options: [
        'A. B uses his public key, then A’s public key',
        'B. B uses A’s public key, then A’s private key',
        'C. B uses his private key, then A’s public key',
        'D. B uses his private key, then A’s private key',
      ],
      correctAnswerIndex: 2,
      explanation:
        'B uses his private key to decrypt the message, then A’s public key to verify authenticity.',
    },
    {
      id: '100',
      text: 'Which option correctly identifies the goal of nonrepudiation?',
      options: [
        'A. Ensuring data integrity',
        'B. Hiding sensitive data',
        'C. Ensuring availability of resources',
        'D. Preventing denial of message origin',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Nonrepudiation ensures that a sender cannot deny the origin of the message.',
    },
  ],
}

export default juModel2016
