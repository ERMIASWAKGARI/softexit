const moee2 = {
  id: 'moee_model_2',
  title: 'Moee Model 2',
  year: 2023,
  type: 'model',
  image: 'moe.png',
  questions: [
    {
      id: '1',
      text: 'From the following, which one is not among the challenges that are faced by requirement engineers during requirement elicitation?',
      options: [
        'a. Conflicting requirements',
        'b. Obsolete requirement',
        'c. Requirement change',
        'd. Negative stakeholders',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Obsolete requirements are not typically a challenge during elicitation, but rather a maintenance issue that comes later in the process.',
    },
    {
      id: '2',
      text: 'One of the following statements addresses the characteristics of functional organization structure?',
      options: [
        "a. Limited project manager authority, limited resource availability, and a part-time project manager's role",
        'b. High to almost total project manager authority, high to almost total resource availability, and fulltime project management administrative staff',
        'c. Little or no project manager authority, little or no resource availability, and the functional manager control the project budget',
        "d. Low to moderate project manager authority, low to moderate resource availability, and a full-time project manager's role",
      ],
      correctAnswerIndex: 2,
      explanation:
        'In functional organizations, project managers have little authority and resources, with functional managers controlling budgets.',
    },
    {
      id: '3',
      text: 'Which one is not the criteria for selecting best programming language for your problem:',
      options: [
        'a. Code efficiency',
        'b. Modularity',
        'c. Platform dependency',
        'd. Portability',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Platform dependency is generally not a desirable criterion when selecting a programming language.',
    },
    {
      id: '4',
      text: 'As a software tester, which testing principle can save time and cost of testing?',
      options: [
        'A. testing the entire development process affect time and cost',
        'B. Testing early development process saves time and cost',
        'c. Exhaustive testing is not possible',
        'd. Prioritize testing based on risk and criticality',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Early testing helps identify defects when they are cheaper and easier to fix.',
    },
    {
      id: '5',
      text: 'Which of the following statements designates part of the process of how a switch resolves to forward a frame destined for a recognized unicast MAC address?',
      options: [
        'a. It matches the unicast destination address to the bridging, or MAC address, table.',
        'b. It matches the destination IP address to the destination MAC address.',
        "c. It matches the frame's incoming interface to the source MAC entry in the MAC address table.",
        'd. It matches the unicast source address to the bridging, or MAC address, table.',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Switches use MAC address tables to forward frames to the correct destination port.',
    },
    {
      id: '6',
      text: 'A software work product which is associated with the test execution process group is known as:',
      options: [
        'a. Test Cases',
        'b. Code',
        'c. Requirements',
        'd. Test Reports',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Test reports are generated during test execution to document results.',
    },
    {
      id: '7',
      text: 'Which of the following statements is false when a packet is being compared to an-access list?',
      options: [
        'a. There is an implicit "deny" at the end of each access list.',
        'b. Until all lines have been analyzed, the comparison is not over.',
        "c. It's always compared with each line of the access list in sequential order.",
        'd. Once the packet matches the condition on a line of the access list, the packet is',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Access list comparison stops at the first match, not all lines.',
    },
    {
      id: '8',
      text: 'Which one is different from others?',
      options: [
        'a. Requirements analysis',
        'b. Requirements status tracking',
        'c. Requirements validation',
        'd. Requirement elicitation',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Status tracking is a management activity, while others are technical requirements engineering activities.',
    },
    {
      id: '9',
      text: 'The incredible change in business and society as emerging economies develop and new technologies become available mainly:',
      options: [
        'a. Leads to Privacy and security breaches',
        'b. Makes obsolete the already existing software systems',
        'c. Requires new testing on the existing software systems',
        'd. Leads to demand for new software architecture',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Technological changes primarily drive the need for new architectures to support emerging requirements.',
    },
    {
      id: '10',
      text: 'Which of the following is not true about binary tree?',
      options: [
        'a. A tree is called binary tree if and only if each node has zero child.',
        'b. A tree is called binary tree if each node has zero child, one child or two children',
        'c. Empty tree is also a valid binary tree',
        'd. We can visualize a binary tree as consisting of a root and two disjoint binary trees',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Binary trees can have nodes with 0, 1, or 2 children, not strictly zero.',
    },
  ],
}

export default moee2
