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
  ],
}

export default wuExitMock5
