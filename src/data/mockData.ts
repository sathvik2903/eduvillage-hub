// Mock data for V.E.D.A platform

export interface Class {
  id: string;
  name: string;
  grade: number;
}

export interface Subject {
  id: string;
  name: string;
  classId: string;
  icon: string;
  color: string;
  topicsCount: number;
}

export interface Topic {
  id: string;
  name: string;
  subjectId: string;
  lessonsCount: number;
  completed: boolean;
}

export interface Lesson {
  id: string;
  name: string;
  topicId: string;
  duration: string;
  type: 'video' | 'text' | 'quiz';
  completed: boolean;
}

export interface Assignment {
  id: string;
  title: string;
  subjectId: string;
  className: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  description: string;
}

export interface Test {
  id: string;
  title: string;
  subjectId: string;
  className: string;
  date: string;
  duration: string;
  status: 'upcoming' | 'completed' | 'missed';
  score?: number;
}

export interface Student {
  id: string;
  name: string;
  classId: string;
  points: number;
  badges: string[];
  completedLessons: number;
  totalLessons: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: string;
}

// Mock Classes (6th to 10th)
export const mockClasses: Class[] = [
  { id: '6', name: '6th Class', grade: 6 },
  { id: '7', name: '7th Class', grade: 7 },
  { id: '8', name: '8th Class', grade: 8 },
  { id: '9', name: '9th Class', grade: 9 },
  { id: '10', name: '10th Class', grade: 10 },
];

// Mock Subjects for each class
export const mockSubjects: Subject[] = [
  // 6th Class
  { id: 's6-1', name: 'Mathematics', classId: '6', icon: '🔢', color: 'bg-blue-500', topicsCount: 12 },
  { id: 's6-2', name: 'Science', classId: '6', icon: '🧪', color: 'bg-green-500', topicsCount: 10 },
  { id: 's6-3', name: 'English', classId: '6', icon: '📚', color: 'bg-purple-500', topicsCount: 8 },
  { id: 's6-4', name: 'Social Studies', classId: '6', icon: '🌍', color: 'bg-orange-500', topicsCount: 9 },
  
  // 9th Class (example for user's grade)
  { id: 's9-1', name: 'Mathematics', classId: '9', icon: '🔢', color: 'bg-blue-500', topicsCount: 15 },
  { id: 's9-2', name: 'Physics', classId: '9', icon: '⚡', color: 'bg-yellow-500', topicsCount: 12 },
  { id: 's9-3', name: 'Chemistry', classId: '9', icon: '🧪', color: 'bg-green-500', topicsCount: 11 },
  { id: 's9-4', name: 'Biology', classId: '9', icon: '🌱', color: 'bg-emerald-500', topicsCount: 10 },
  { id: 's9-5', name: 'English', classId: '9', icon: '📚', color: 'bg-purple-500', topicsCount: 13 },
  { id: 's9-6', name: 'Hindi', classId: '9', icon: '🇮🇳', color: 'bg-red-500', topicsCount: 9 },
  { id: 's9-7', name: 'Social Studies', classId: '9', icon: '🌍', color: 'bg-orange-500', topicsCount: 14 },
];

// Mock Topics
export const mockTopics: Topic[] = [
  // Math 9th Class
  { id: 't9m-1', name: 'Number Systems', subjectId: 's9-1', lessonsCount: 5, completed: true },
  { id: 't9m-2', name: 'Polynomials', subjectId: 's9-1', lessonsCount: 6, completed: true },
  { id: 't9m-3', name: 'Coordinate Geometry', subjectId: 's9-1', lessonsCount: 4, completed: false },
  { id: 't9m-4', name: 'Linear Equations', subjectId: 's9-1', lessonsCount: 7, completed: false },
  
  // Physics 9th Class
  { id: 't9p-1', name: 'Motion', subjectId: 's9-2', lessonsCount: 8, completed: true },
  { id: 't9p-2', name: 'Force and Laws of Motion', subjectId: 's9-2', lessonsCount: 6, completed: false },
  { id: 't9p-3', name: 'Gravitation', subjectId: 's9-2', lessonsCount: 5, completed: false },
];

// Mock Lessons
export const mockLessons: Lesson[] = [
  { id: 'l1', name: 'Introduction to Real Numbers', topicId: 't9m-1', duration: '15 min', type: 'video', completed: true },
  { id: 'l2', name: 'Rational and Irrational Numbers', topicId: 't9m-1', duration: '20 min', type: 'video', completed: true },
  { id: 'l3', name: 'Operations on Real Numbers', topicId: 't9m-1', duration: '18 min', type: 'video', completed: false },
  
  { id: 'l4', name: 'Introduction to Polynomials', topicId: 't9m-2', duration: '12 min', type: 'video', completed: true },
  { id: 'l5', name: 'Types of Polynomials', topicId: 't9m-2', duration: '16 min', type: 'video', completed: false },
];

// Mock Assignments
export const mockAssignments: Assignment[] = [
  {
    id: 'a1',
    title: 'Number Systems Practice',
    subjectId: 's9-1',
    className: '9th Class',
    dueDate: '2024-01-15',
    status: 'pending',
    description: 'Solve the given problems on rational and irrational numbers'
  },
  {
    id: 'a2',
    title: 'Motion Numericals',
    subjectId: 's9-2',
    className: '9th Class',
    dueDate: '2024-01-20',
    status: 'submitted',
    description: 'Calculate velocity, acceleration and displacement for given scenarios'
  },
];

// Mock Tests
export const mockTests: Test[] = [
  {
    id: 't1',
    title: 'Mathematics Unit Test 1',
    subjectId: 's9-1',
    className: '9th Class',
    date: '2024-01-25',
    duration: '90 min',
    status: 'upcoming'
  },
  {
    id: 't2',
    title: 'Physics Chapter Test',
    subjectId: 's9-2',
    className: '9th Class',
    date: '2024-01-18',
    duration: '60 min',
    status: 'completed',
    score: 85
  },
];

// Mock Students for Leaderboard
export const mockStudents: Student[] = [
  { id: '1', name: 'Rahul Kumar', classId: '9', points: 1250, badges: ['first-lesson', 'quick-learner'], completedLessons: 45, totalLessons: 60 },
  { id: '2', name: 'Priya Sharma', classId: '9', points: 1180, badges: ['consistent-learner'], completedLessons: 42, totalLessons: 60 },
  { id: '3', name: 'Arjun Patel', classId: '9', points: 1050, badges: ['first-lesson'], completedLessons: 38, totalLessons: 60 },
  { id: '4', name: 'Sneha Reddy', classId: '9', points: 980, badges: ['quick-learner'], completedLessons: 35, totalLessons: 60 },
  { id: '5', name: 'Vikram Singh', classId: '9', points: 920, badges: [], completedLessons: 32, totalLessons: 60 },
];

// Mock Badges
export const mockBadges: Badge[] = [
  { id: 'first-lesson', name: 'First Steps', description: 'Complete your first lesson', icon: '🎯', condition: 'Complete 1 lesson' },
  { id: 'quick-learner', name: 'Quick Learner', description: 'Complete 5 lessons in a day', icon: '⚡', condition: 'Complete 5 lessons in 1 day' },
  { id: 'consistent-learner', name: 'Consistent Learner', description: 'Study for 7 consecutive days', icon: '🔥', condition: 'Study 7 days in a row' },
  { id: 'assignment-master', name: 'Assignment Master', description: 'Submit 10 assignments', icon: '📝', condition: 'Submit 10 assignments' },
  { id: 'test-champion', name: 'Test Champion', description: 'Score above 90% in 3 tests', icon: '🏆', condition: 'Score 90%+ in 3 tests' },
];