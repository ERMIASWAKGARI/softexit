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
  ],
}

export default wuExitMock4
