interface Skill {
  name: string;
  icon: string;
  description: string;
  category: 'frontend' | 'backend' | 'database' | 'cms' | 'other' | '3d';
}

export const skills: Skill[] = [
  {
    name: 'Angular',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    description: 'Enterprise-grade frontend development with Angular framework',
    category: 'frontend'
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'Building modern, interactive user interfaces with React',
    category: 'frontend'
  },
  {
    name: 'Three.js',
    icon: 'https://aws1.discourse-cdn.com/standard17/uploads/threejs/original/2X/b/be2f75f72751c11cbe1593c69a99a52900bf12cb.svg',
    description: 'Creating immersive 3D experiences for the web',
    category: '3d'
  },
  {
    name: 'Go',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg',
    description: 'Building high-performance backend services and microservices',
    category: 'backend'
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    description: 'Server-side JavaScript runtime for scalable applications',
    category: 'backend'
  },
  {
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    description: 'Fast, unopinionated web framework for Node.js',
    category: 'backend'
  },
  {
    name: 'Firebase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    description: 'Google\'s platform for building web and mobile applications',
    category: 'backend'
  },
  {
    name: 'Supabase',
    icon: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png',
    description: 'Open source Firebase alternative with PostgreSQL',
    category: 'backend'
  },
  {
    name: 'Apache Superset',
    icon: 'https://raw.githubusercontent.com/apache/superset/master/superset-frontend/src/assets/images/superset-logo-horiz.svg',
    description: 'Modern data exploration and visualization platform',
    category: 'other'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    description: 'NoSQL database for flexible, scalable data storage',
    category: 'database'
  },
  {
    name: 'SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    description: 'Relational database management and querying',
    category: 'database'
  },
  {
    name: 'HTML/CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    description: 'Creating responsive and accessible web interfaces',
    category: 'frontend'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    description: 'Building interactive and dynamic web applications',
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    description: 'Type-safe JavaScript development for robust applications',
    category: 'frontend'
  },
  {
    name: 'WordPress',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
    description: 'Custom WordPress theme and plugin development',
    category: 'cms'
  },
  {
    name: 'Wix',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Wix.com_website_logo.svg/512px-Wix.com_website_logo.svg.png',
    description: 'Professional website building with Wix platform',
    category: 'cms'
  }
];
