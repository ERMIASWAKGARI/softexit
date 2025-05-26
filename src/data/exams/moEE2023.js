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
  ],
}

export default moEE2023
