import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage";
import { AuthForm } from "./components/auth/auth-form";
import { StudentLayout } from "./pages/student/StudentLayout";
import { TeacherLayout } from "./pages/teacher/TeacherLayout";
import { StudentDashboard } from "./pages/student/StudentDashboard";
import { StudentSubjects } from "./pages/student/StudentSubjects";
import { StudentLeaderboard } from "./pages/student/StudentLeaderboard";
import { StudentAssignments } from "./pages/student/StudentAssignments";
import { StudentTests } from "./pages/student/StudentTests";
import { TeacherDashboard } from "./pages/teacher/TeacherDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher';
  classId?: string;
  language: string;
}

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedRole, setSelectedRole] = useState<'student' | 'teacher' | null>(null);

  const handleRoleSelect = (role: 'student' | 'teacher') => {
    setSelectedRole(role);
  };

  const handleLogin = (userData: any) => {
    const newUser: User = {
      id: '1',
      name: userData.name || 'Demo User',
      email: userData.email,
      role: userData.role,
      classId: userData.classId || '9', // Default to 9th class
      language: userData.language || 'english'
    };
    setUser(newUser);
  };

  const handleLogout = () => {
    setUser(null);
    setSelectedRole(null);
  };

  const handleBack = () => {
    setSelectedRole(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {!user ? (
            // Authentication Flow
            !selectedRole ? (
              <WelcomePage onRoleSelect={handleRoleSelect} />
            ) : (
              <AuthForm 
                role={selectedRole} 
                onBack={handleBack} 
                onLogin={handleLogin} 
              />
            )
          ) : (
            // Authenticated User Routes
            <Routes>
              {user.role === 'student' ? (
                <Route path="/student" element={<StudentLayout onLogout={handleLogout} />}>
                  <Route index element={<StudentDashboard userClass={user.classId || '9'} />} />
                  <Route path="subjects" element={<StudentSubjects userClass={user.classId || '9'} />} />
                  <Route path="assignments" element={<StudentAssignments />} />
                  <Route path="tests" element={<StudentTests />} />
                  <Route path="leaderboard" element={<StudentLeaderboard />} />
                  <Route path="profile" element={<div className="p-8 text-center text-muted-foreground">Profile feature coming soon!</div>} />
                </Route>
              ) : (
                <Route path="/teacher" element={<TeacherLayout onLogout={handleLogout} />}>
                  <Route index element={<TeacherDashboard />} />
                  <Route path="subjects" element={<div className="p-8 text-center text-muted-foreground">Classes & Subjects management coming soon!</div>} />
                  <Route path="assignments" element={<div className="p-8 text-center text-muted-foreground">Assignment management coming soon!</div>} />
                  <Route path="tests" element={<div className="p-8 text-center text-muted-foreground">Test management coming soon!</div>} />
                  <Route path="analytics" element={<div className="p-8 text-center text-muted-foreground">Analytics feature coming soon!</div>} />
                  <Route path="profile" element={<div className="p-8 text-center text-muted-foreground">Profile feature coming soon!</div>} />
                </Route>
              )}
              
              {/* Redirect based on user role */}
              <Route 
                path="/" 
                element={
                  <Navigate 
                    to={user.role === 'student' ? '/student' : '/teacher'} 
                    replace 
                  />
                } 
              />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
