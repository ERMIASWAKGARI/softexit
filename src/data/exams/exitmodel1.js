const exitModel1 = {
  id: 'exitExamModel1',
  title: 'Exit Model 1',
  year: 2023,
  type: 'model',
  image: 'moe.png',
  questions: [
    {
      id: '1',
      text: 'What is the value of p after executing: p = (x++ * y--) + ++z with x=1, y=10, z=-3?',
      options: ['22', '17', '8', '16'],
      correctAnswerIndex: 2,
      explanation:
        'Post-increment x=1 (then becomes 2), pre-increment z=-2, y=10 (then 9). Calculation: (1*10) + (-2) = 8',
    },
    {
      id: '2',
      text: 'What happens when pointers p=&a and q=&b are assigned as p=q?',
      options: [
        'p points to b',
        'a assigned to b',
        'b assigned to a',
        'q points to a',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Pointer assignment makes p reference the same memory as q (which points to b)',
    },
    {
      id: '3',
      text: 'What demonstrates C++ case sensitivity?',
      options: [
        'All variables are identifiers',
        'Requires iostream.h',
        'ExitExam ≠ exitExam',
        'Statements end with semicolon',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Case sensitivity means uppercase/lowercase letters are distinct',
    },
    {
      id: '4',
      text: 'What is true about a=b assignment?',
      options: [
        'Values become equal',
        'b assigned to a with future linkage',
        'Values swap',
        'b assigned to a independently',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Assignment copies value at that moment without creating reference',
    },
    {
      id: '5',
      text: 'True statement about algorithms:',
      options: [
        'Allows ambiguous steps',
        'Cannot solve complex problems',
        'May lack start/end',
        'Must finish in finite time',
      ],
      correctAnswerIndex: 3,
      explanation: 'Key algorithm property: must terminate after finite steps',
    },
    {
      id: '6',
      text: 'Which does NOT increment i by 1?',
      options: ['i+=1', 'i=i+1', 'i=i+i', 'i++'],
      correctAnswerIndex: 2,
      explanation: 'i=i+i doubles current value rather than incrementing by 1',
    },
    {
      id: '7',
      text: 'Pointer assignment p=q with p=&a, q=&b results in:',
      options: [
        'p points to b',
        'b assigned to a',
        'a assigned to b',
        'q points to a',
      ],
      correctAnswerIndex: 0,
      explanation: 'p now references what q references (memory address of b)',
    },
    {
      id: '8',
      text: 'Class C (B→A inheritance) can access:',
      options: [
        'C data + A/B protected/public',
        'Only C/B protected/default/public',
        'C data + A/B public only',
        'Only C protected/default/public',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Public inheritance allows access to base class protected/public members',
    },
    {
      id: '9',
      text: 'How to call non-static Java methods?',
      options: [
        'Methodname()',
        'Classname.methodname()',
        'Objectname.methodname()',
        'Variablename.methodname()',
      ],
      correctAnswerIndex: 2,
      explanation: 'Non-static methods require object instance for invocation',
    },
    {
      id: '10',
      text: 'Overridden method call from subclass:',
      options: [
        'Random selection',
        'Always uses subclass version',
        'Compile error',
        'Always uses superclass version',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Method overriding ensures subclass implementation is called',
    },
  ],
}

export default exitModel1
