export interface Instructor {
  name: string;
  role: string;
  organization: string;
  avatar: string;
}

export interface Exercise {
  id: string;
  title: string;
  scenario: string; // Caso de estudio real
  taskInstructions: string;
  options?: string[];
  correctOptionIndex?: number;
  explanationQuick: string; // Análisis estratégico y solución
  xpPoints: number;
}

export interface CourseModule {
  id: string;
  title: string;
  summary: string;
  durationMinutes: number;
  exercises: Exercise[];
}

export interface PracticalModule {
  id: string;
  title: string;
  subtitle?: string;
  tagline: string;
  category: 'Tecnología' | 'Negocios' | 'Diseño' | 'Marketing' | 'Liderazgo';
  icon: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado' | 'Ejecutivo';
  estimatedHours: number;
  rating: number; // Ej. 4.9
  reviewCount: number; // Ej. 340
  enrolledCount: number; // Ej. 12450
  instructor: Instructor;
  learningOutcomes: string[];
  modules: CourseModule[];
  exercises: Exercise[]; // Para compatibilidad plana
  completedCount: number;
  totalCount: number;
}

export interface UserSkillStats {
  level: number;
  currentXp: number;
  nextLevelXp: number;
  dayStreak: number;
  completedPractices: number;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  estimatedHours?: number;
  difficulty?: 'Principiante' | 'Intermedio' | 'Avanzado' | 'Ejecutivo';
  icon?: string;
  topics?: string[];
  courses?: PracticalModule[];
}

export interface LearningCategory {
  id: string;
  title: string;
  icon?: string;
  description?: string;
  paths?: LearningPath[];
  courses?: PracticalModule[];
}

export interface Faculty {
  id: string;
  code: string;
  romanNumeral: string;
  name: string;
  latinMotto: string;
  description: string;
  icon: string;
  coverImage: string;
  keyCompetencies: string[];
  dean: Instructor;
  stats: {
    coursesCount: number;
    studentsCount: number;
    tracksCount: number;
  };
  courses: PracticalModule[];
  categories?: LearningCategory[];
}
