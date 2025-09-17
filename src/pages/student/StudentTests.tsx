import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TestTube, Clock, Calendar, Trophy, Play, CheckCircle } from "lucide-react";
import { mockTests } from "@/data/mockData";

export function StudentTests() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-success" />;
      case 'upcoming': return <Calendar className="h-4 w-4 text-primary" />;
      case 'missed': return <Clock className="h-4 w-4 text-destructive" />;
      default: return <TestTube className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'secondary';
      case 'upcoming': return 'default';
      case 'missed': return 'destructive';
      default: return 'secondary';
    }
  };

  const upcomingTests = mockTests.filter(t => t.status === 'upcoming');
  const completedTests = mockTests.filter(t => t.status === 'completed');
  const averageScore = completedTests.length > 0 
    ? Math.round(completedTests.reduce((sum, test) => sum + (test.score || 0), 0) / completedTests.length)
    : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-2">My Tests 🧪</h1>
        <p className="text-primary-foreground/90">Take tests and track your performance</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <TestTube className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">{mockTests.length}</p>
            <p className="text-sm text-muted-foreground">Total Tests</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">{upcomingTests.length}</p>
            <p className="text-sm text-muted-foreground">Upcoming</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <CheckCircle className="h-8 w-8 text-success mx-auto mb-2" />
            <p className="text-2xl font-bold">{completedTests.length}</p>
            <p className="text-sm text-muted-foreground">Completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">{averageScore}%</p>
            <p className="text-sm text-muted-foreground">Average Score</p>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Tests */}
      {upcomingTests.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-primary" />
              Upcoming Tests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTests.map((test) => (
                <div key={test.id} className="flex items-center justify-between p-4 bg-accent/20 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">{test.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{new Date(test.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{test.duration}</span>
                        <span>•</span>
                        <span>{test.className}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gradient-primary text-primary-foreground">
                    <Play className="mr-2 h-4 w-4" />
                    Start Test
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Tests */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TestTube className="mr-2 h-5 w-5 text-primary" />
            All Tests
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockTests.map((test) => (
              <div key={test.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/10 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {getStatusIcon(test.status)}
                  </div>
                  <div>
                    <h3 className="font-semibold">{test.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{new Date(test.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{test.duration}</span>
                      <span>•</span>
                      <span>{test.className}</span>
                      {test.score && (
                        <>
                          <span>•</span>
                          <span className="text-primary font-medium">Score: {test.score}%</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Badge variant={getStatusColor(test.status)}>
                    {test.status}
                  </Badge>
                  <Button 
                    size="sm" 
                    variant={test.status === 'upcoming' ? 'default' : 'outline'}
                    className={test.status === 'upcoming' ? 'bg-gradient-primary text-primary-foreground' : ''}
                  >
                    {test.status === 'upcoming' ? 'Start' : 
                     test.status === 'completed' ? 'Review' : 'View'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Practice Test Section */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary-light/10 border-primary/20">
        <CardContent className="p-8 text-center">
          <TestTube className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Practice Tests</h3>
          <p className="text-muted-foreground mb-6">
            Take unlimited practice tests to improve your performance
          </p>
          <Button className="bg-gradient-primary text-primary-foreground">
            <Play className="mr-2 h-4 w-4" />
            Start Practice Test
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}