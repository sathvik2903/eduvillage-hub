import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Clock, Upload, CheckCircle, AlertCircle } from "lucide-react";
import { mockAssignments } from "@/data/mockData";

export function StudentAssignments() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-success" />;
      case 'submitted': return <Upload className="h-4 w-4 text-primary" />;
      case 'pending': return <AlertCircle className="h-4 w-4 text-warning" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'graded': return 'secondary';
      case 'submitted': return 'default';
      case 'pending': return 'destructive';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-2">My Assignments 📝</h1>
        <p className="text-primary-foreground/90">Submit your assignments and track your progress</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">{mockAssignments.length}</p>
            <p className="text-sm text-muted-foreground">Total Assignments</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <AlertCircle className="h-8 w-8 text-warning mx-auto mb-2" />
            <p className="text-2xl font-bold">{mockAssignments.filter(a => a.status === 'pending').length}</p>
            <p className="text-sm text-muted-foreground">Pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <CheckCircle className="h-8 w-8 text-success mx-auto mb-2" />
            <p className="text-2xl font-bold">{mockAssignments.filter(a => a.status === 'submitted').length}</p>
            <p className="text-sm text-muted-foreground">Submitted</p>
          </CardContent>
        </Card>
      </div>

      {/* Assignments List */}
      <div className="space-y-4">
        {mockAssignments.map((assignment) => (
          <Card key={assignment.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {getStatusIcon(assignment.status)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{assignment.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{assignment.description}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Due: {new Date(assignment.dueDate).toLocaleDateString()}
                      </span>
                      <span>•</span>
                      <span>{assignment.className}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Badge variant={getStatusColor(assignment.status)}>
                    {assignment.status}
                  </Badge>
                  <Button 
                    size="sm" 
                    variant={assignment.status === 'pending' ? 'default' : 'outline'}
                    className={assignment.status === 'pending' ? 'bg-gradient-primary text-primary-foreground' : ''}
                  >
                    {assignment.status === 'pending' ? 'Submit' : 'View'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Upload Area (for demo) */}
      <Card className="border-2 border-dashed border-border hover:border-primary/50 transition-colors">
        <CardContent className="p-12 text-center">
          <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">Submit New Assignment</h3>
          <p className="text-muted-foreground mb-4">
            Drag and drop your assignment files here, or click to browse
          </p>
          <Button className="bg-gradient-primary text-primary-foreground">
            Choose Files
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}