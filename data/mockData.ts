import { MLA, Speech, AssemblySession } from '@/types';

export const mockMLAs: MLA[] = [
  {
    id: 'mla-001',
    name: 'Arvind Kejriwal',
    constituency: 'New Delhi',
    party: 'Aam Aadmi Party',
    email: 'arvind.kejriwal@delhi.gov.in',
    bio: 'Chief Minister of Delhi and MLA from New Delhi constituency. Known for his work in education, healthcare, and governance reforms.',
    achievements: [
      'Implemented Mohalla Clinics across Delhi',
      'Improved government school infrastructure',
      'Introduced free electricity scheme',
      'Launched free bus travel for women'
    ],
    committees: ['Cabinet Committee', 'Education Committee'],
    tenure: {
      start: '2015-02-14',
    }
  },
  {
    id: 'mla-002',
    name: 'Manish Sisodia',
    constituency: 'Patparganj',
    party: 'Aam Aadmi Party',
    bio: 'Former Deputy Chief Minister and Education Minister. Played a key role in transforming Delhi\'s education system.',
    achievements: [
      'Transformed government schools',
      'Introduced Happiness Curriculum',
      'Improved teacher training programs'
    ],
    committees: ['Education Committee', 'Finance Committee'],
    tenure: {
      start: '2015-02-14',
      end: '2023-03-09'
    }
  },
  {
    id: 'mla-003',
    name: 'Atishi',
    constituency: 'Kalkaji',
    party: 'Aam Aadmi Party',
    bio: 'Education Minister and MLA from Kalkaji. Focused on improving education quality and infrastructure.',
    achievements: [
      'Enhanced school infrastructure',
      'Implemented digital learning initiatives',
      'Improved teacher-student ratio'
    ],
    committees: ['Education Committee'],
    tenure: {
      start: '2020-02-11',
    }
  }
];

export const mockSpeeches: Speech[] = [
  {
    id: 'speech-001',
    mlaId: 'mla-001',
    date: '2024-01-15',
    session: 'Budget Session 2024',
    topic: 'Delhi Budget and Development',
    content: 'Honorable Speaker, I rise to present the budget for the financial year 2024-25. This budget focuses on education, healthcare, and infrastructure development. We have allocated significant funds for improving government schools and expanding healthcare facilities...',
    summary: 'Budget presentation focusing on education, healthcare, and infrastructure'
  },
  {
    id: 'speech-002',
    mlaId: 'mla-002',
    date: '2023-12-10',
    session: 'Winter Session 2023',
    topic: 'Education Reforms',
    content: 'The education system in Delhi has seen remarkable improvements. Our government schools now compete with private schools in terms of infrastructure and quality. The Happiness Curriculum has been well received by students and parents alike...',
    summary: 'Discussion on education reforms and improvements in government schools'
  },
  {
    id: 'speech-003',
    mlaId: 'mla-003',
    date: '2024-02-20',
    session: 'Budget Session 2024',
    topic: 'Digital Education Initiatives',
    content: 'We are introducing new digital learning platforms to enhance the educational experience. These initiatives will help students access quality education resources and prepare them for the digital age...',
    summary: 'Introduction of digital learning platforms and educational technology'
  }
];

export const mockSessions: AssemblySession[] = [
  {
    id: 'session-001',
    date: '2024-01-15',
    sessionNumber: 'Budget Session 2024',
    agenda: [
      'Budget Presentation',
      'Education Policy Discussion',
      'Healthcare Infrastructure',
      'Transportation Updates'
    ]
  },
  {
    id: 'session-002',
    date: '2023-12-10',
    sessionNumber: 'Winter Session 2023',
    agenda: [
      'Education Reforms',
      'Water Supply Issues',
      'Electricity Distribution',
      'Public Safety'
    ]
  }
];

