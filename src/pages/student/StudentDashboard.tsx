import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, FileText, TestTube, Trophy, Clock, ArrowRight } from "lucide-react";
import { mockSubjects, mockAssignments, mockTests, mockBadges } from "@/data/mockData";

interface StudentDashboardProps {
  userClass: string;
}

export function StudentDashboard({ userClass }: StudentDashboardProps) {
  const subjects = mockSubjects.filter(s => s.classId === userClass);
  const recentAssignments = mockAssignments.slice(0, 3);
  const upcomingTests = mockTests.filter(t => t.status === 'upcoming').slice(0, 2);
  const earnedBadges = mockBadges.slice(0, 2);

  const stats = [
    { label: "Subjects Enrolled", value: subjects.length, icon: BookOpen, color: "text-blue-600" },
    { label: "Assignments Due", value: recentAssignments.filter(a => a.status === 'pending').length, icon: FileText, color: "text-orange-600" },
    { label: "Tests This Week", value: upcomingTests.length, icon: TestTube, color: "text-green-600" },
    { label: "Badges Earned", value: earnedBadges.length, icon: Trophy, color: "text-purple-600" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-primary text-primary-foreground rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Student! 👋</h1>
        <p className="text-primary-foreground/90">Ready to continue your learning journey?</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Next Lesson Recommendation */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5 text-primary" />
              Continue Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Mathematics - Polynomials</h4>
                  <p className="text-sm text-muted-foreground">Next: Types of Polynomials</p>
                </div>
                <Badge variant="secondary">16 min</Badge>
              </div>
              <Progress value={65} className="w-full" />
              <p className="text-sm text-muted-foreground">65% complete</p>
              <Button className="w-full bg-gradient-primary text-primary-foreground">
                Continue Lesson <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Assignments */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5 text-primary" />
              Recent Assignments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentAssignments.map((assignment) => (
                <div key={assignment.id} className="flex items-center justify-between p-3 bg-accent/20 rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">{assignment.title}</h4>
                    <p className="text-xs text-muted-foreground flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      Due: {new Date(assignment.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                  <Badge 
                    variant={assignment.status === 'pending' ? 'destructive' : 
                            assignment.status === 'submitted' ? 'default' : 'secondary'}
                  >
                    {assignment.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tests */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TestTube className="mr-2 h-5 w-5 text-primary" />
              Upcoming Tests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingTests.length > 0 ? (
                upcomingTests.map((test) => (
                  <div key={test.id} className="p-3 bg-accent/20 rounded-lg">
                    <h4 className="font-medium text-sm">{test.title}</h4>
                    <p className="text-xs text-muted-foreground">
                      {new Date(test.date).toLocaleDateString()} • {test.duration}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground text-center py-4">No upcoming tests</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Badges */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-primary" />
              Recent Badges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {earnedBadges.map((badge) => (
                <div key={badge.id} className="flex items-center space-x-3 p-3 bg-accent/20 rounded-lg">
                  <div className="text-2xl">{badge.icon}</div>
                  <div>
                    <h4 className="font-medium text-sm">{badge.name}</h4>
                    <p className="text-xs text-muted-foreground">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}