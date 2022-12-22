export interface ExperienceDTO {
  organization: string;
  position: string;
  organizationDescription: string;
  majorRole: string;
  roles: string[];
  technologies: string[];
  languages: string[];
}

export const experiences: ExperienceDTO[] = [
  {
    organization: 'COYDOE',
    position: 'Working as Full-stack Developer mainly NestJs and React',
    organizationDescription:
      "Consortium of Youth Dev't organization in Ethiopia is a regional and global (NGO) working with youths achieve their goal through different trainings.",
    majorRole: 'Senior Software Engineer ',
    roles: ['Software Development', 'Team Leader'],
    technologies: ['Docker', 'CI/CD', 'Redux Toolkit', 'Scrum', 'Git', 'Linux'],
    languages: ['Typescript', 'React', 'NestJs', 'MongoDB'],
  },
  {
    organization: 'Jimma Institute of Technologies',
    position: 'Working as java developer for ICT Development center',
    organizationDescription:
      'Jimma Institute of Technology (JIT) is a leading institution of technology in Ethiopia and an emerging regional and global hub of innovative research and teaching activity.',
    majorRole: 'Junior Software Engineer (Intern)',
    roles: ['Software Development', 'Application Development'],
    technologies: [
      'Agile',
      'Google Maps',
      'Open street Maps',
      'Location API',
      'Git',
      'Linux',
    ],
    languages: ['Java', 'Servlet', 'MySQL', 'Bash_Script'],
  },
  {
    organization: 'Backend development for Freelance',
    position: 'Working as Backend developer',
    organizationDescription:
      'Developing A Restful API for E-commerce system using Node.js with Test driven Development Pattern with clean coding and proper documentation.',
    majorRole: 'Software Engineer,Programmer',
    roles: ['Software Development', 'Database Designer', 'Tester'],
    technologies: ['TDD', 'Agile', 'Swagger', 'JWT', 'Git', 'Linux'],
    languages: ['Node.js', 'Express', 'MongoDB', 'Jest'],
  },
];
