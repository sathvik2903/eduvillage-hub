import { RoleCard } from "@/components/ui/role-card";

interface WelcomePageProps {
  onRoleSelect: (role: 'student' | 'teacher') => void;
}

export function WelcomePage({ onRoleSelect }: WelcomePageProps) {
  const studentFeatures = [
    "Access learning materials for grades 6-10",
    "Watch video lessons and complete assignments",
    "Take tests and track your progress",
    "Earn badges and compete on leaderboards",
    "Learn in multiple languages (English, Hindi, Telugu)"
  ];

  const teacherFeatures = [
    "Create and manage classes and subjects",
    "Upload lessons, assignments, and tests",
    "Track student progress with analytics",
    "AI-powered content generation tools",
    "Community sharing with other teachers"
  ];

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🎓</div>
          <h1 className="text-5xl font-bold text-white mb-4">V.E.D.A</h1>
          <h2 className="text-2xl text-white/90 mb-6">Digital Learning Platform for Rural Students</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Empowering education through technology. Choose your role to begin your learning journey.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <RoleCard
            title="Student"
            description="Join thousands of students learning online"
            icon="🎓"
            features={studentFeatures}
            onClick={() => onRoleSelect('student')}
            className="transform hover:scale-105 transition-transform duration-300"
          />
          
          <RoleCard
            title="Teacher"
            description="Create engaging content and track student progress"
            icon="👩‍🏫"
            features={teacherFeatures}
            onClick={() => onRoleSelect('teacher')}
            className="transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Features Highlight */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-white/90">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-lg font-semibold mb-2">Offline-First</h3>
              <p className="text-sm text-white/70">
                Access content even without internet connection
              </p>
            </div>
            
            <div className="text-white/90">
              <div className="text-3xl mb-3">🗣️</div>
              <h3 className="text-lg font-semibold mb-2">Multilingual</h3>
              <p className="text-sm text-white/70">
                Learn in English, Hindi, or Telugu
              </p>
            </div>
            
            <div className="text-white/90">
              <div className="text-3xl mb-3">🎮</div>
              <h3 className="text-lg font-semibold mb-2">Gamified</h3>
              <p className="text-sm text-white/70">
                Earn badges and compete with classmates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}