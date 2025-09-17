import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, BookOpen, Play, CheckCircle } from "lucide-react";
import { mockSubjects, mockTopics, mockLessons } from "@/data/mockData";

interface StudentSubjectsProps {
  userClass: string;
}

export function StudentSubjects({ userClass }: StudentSubjectsProps) {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const subjects = mockSubjects.filter(s => s.classId === userClass);
  const topics = selectedSubject ? mockTopics.filter(t => t.subjectId === selectedSubject) : [];
  const lessons = selectedTopic ? mockLessons.filter(l => l.topicId === selectedTopic) : [];

  const getCurrentView = () => {
    if (selectedTopic) return 'lessons';
    if (selectedSubject) return 'topics';
    return 'subjects';
  };

  const renderBreadcrumb = () => {
    const subject = subjects.find(s => s.id === selectedSubject);
    const topic = topics.find(t => t.id === selectedTopic);
    
    return (
      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
        <Button 
          variant="link" 
          className="p-0 h-auto text-muted-foreground hover:text-primary"
          onClick={() => {
            setSelectedSubject(null);
            setSelectedTopic(null);
          }}
        >
          Subjects
        </Button>
        {subject && (
          <>
            <span>/</span>
            <Button 
              variant="link" 
              className="p-0 h-auto text-muted-foreground hover:text-primary"
              onClick={() => setSelectedTopic(null)}
            >
              {subject.name}
            </Button>
          </>
        )}
        {topic && (
          <>
            <span>/</span>
            <span className="text-foreground font-medium">{topic.name}</span>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-primary text-primary-foreground rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-2">My Subjects 📚</h1>
        <p className="text-primary-foreground/90">
          {getCurrentView() === 'lessons' ? 'Watch lessons and track your progress' :
           getCurrentView() === 'topics' ? 'Explore topics and start learning' :
           'Choose a subject to begin your learning journey'}
        </p>
      </div>

      {renderBreadcrumb()}

      {/* Subjects View */}
      {getCurrentView() === 'subjects' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Card 
              key={subject.id} 
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/50"
              onClick={() => setSelectedSubject(subject.id)}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{subject.icon}</div>
                <CardTitle className="text-xl">{subject.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                  <span>{subject.topicsCount} Topics</span>
                  <span>•</span>
                  <span>45 Lessons</span>
                </div>
                <Progress value={Math.floor(Math.random() * 80) + 20} className="w-full" />
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Topics View */}
      {getCurrentView() === 'topics' && (
        <div className="space-y-4">
          {topics.map((topic) => (
            <Card 
              key={topic.id} 
              className="group hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedTopic(topic.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {topic.completed ? (
                        <CheckCircle className="h-8 w-8 text-success" />
                      ) : (
                        <BookOpen className="h-8 w-8 text-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{topic.name}</h3>
                      <p className="text-sm text-muted-foreground">{topic.lessonsCount} lessons</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {topic.completed && (
                      <Badge variant="secondary" className="bg-success/10 text-success">
                        Completed
                      </Badge>
                    )}
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Lessons View */}
      {getCurrentView() === 'lessons' && (
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <Card 
              key={lesson.id} 
              className="group hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {lesson.completed ? (
                        <CheckCircle className="h-8 w-8 text-success" />
                      ) : (
                        <Play className="h-8 w-8 text-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{lesson.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{lesson.duration}</span>
                        <span>•</span>
                        <span className="capitalize">{lesson.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {lesson.completed && (
                      <Badge variant="secondary" className="bg-success/10 text-success">
                        Completed
                      </Badge>
                    )}
                    <Button 
                      size="sm" 
                      className="bg-gradient-primary text-primary-foreground"
                    >
                      {lesson.completed ? 'Review' : 'Watch'} <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {lessons.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="text-lg font-semibold mb-2">No lessons available yet</h3>
                <p className="text-muted-foreground">
                  Lessons for this topic will be added soon. Check back later!
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}