import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, FileText, TestTube, TrendingUp, Calendar, Plus } from "lucide-react";

export function TeacherDashboard() {
  const stats = [
    { label: "Active Students", value: 156, icon: Users, color: "text-blue-600", change: "+12%" },
    { label: "Avg Progress", value: "67%", icon: TrendingUp, color: "text-green-600", change: "+5%" },
    { label: "Assignments Submitted", value: 234, icon: FileText, color: "text-orange-600", change: "+23" },
    { label: "Tests Completed", value: 45, icon: TestTube, color: "text-purple-600", change: "+8" },
  ];

  const recentActivities = [
    { student: "Rahul Kumar", action: "Submitted assignment", subject: "Mathematics", time: "2 hours ago" },
    { student: "Priya Sharma", action: "Completed test", subject: "Physics", time: "3 hours ago" },
    { student: "Arjun Patel", action: "Started lesson", subject: "Chemistry", time: "5 hours ago" },
    { student: "Sneha Reddy", action: "Submitted assignment", subject: "Biology", time: "1 day ago" },
  ];

  const upcomingTasks = [
    { task: "Grade Physics Test Papers", dueDate: "Today", priority: "high" },
    { task: "Create Math Assignment", dueDate: "Tomorrow", priority: "medium" },
    { task: "Review Chemistry Lessons", dueDate: "Jan 20", priority: "low" },
    { task: "Prepare Biology Quiz", dueDate: "Jan 22", priority: "medium" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-primary text-primary-foreground rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-2">Teacher Dashboard 👩‍🏫</h1>
        <p className="text-primary-foreground/90">Manage your classes and track student progress</p>
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
                  <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Plus className="mr-2 h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <FileText className="h-6 w-6 text-primary" />
                <span className="text-sm">Create Assignment</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <TestTube className="h-6 w-6 text-primary" />
                <span className="text-sm">Create Test</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <span className="text-sm">Add Lesson</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Users className="h-6 w-6 text-primary" />
                <span className="text-sm">View Students</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Student Activities */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-primary" />
              Recent Student Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-accent/20 rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">{activity.student}</h4>
                    <p className="text-xs text-muted-foreground">
                      {activity.action} • {activity.subject}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card className="hover:shadow-md transition-shadow lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-primary" />
              Upcoming Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-accent/20 rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">{task.task}</h4>
                    <p className="text-xs text-muted-foreground">Due: {task.dueDate}</p>
                  </div>
                  <Badge 
                    variant={task.priority === 'high' ? 'destructive' : 
                            task.priority === 'medium' ? 'default' : 'secondary'}
                  >
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Class Performance Overview */}
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-5 w-5 text-primary" />
            Class Performance Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Performance analytics will appear here</p>
            <p className="text-sm">Connect to Supabase to enable real-time analytics</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}