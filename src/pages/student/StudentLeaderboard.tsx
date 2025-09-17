import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Medal, Award, Crown, Star } from "lucide-react";
import { mockStudents } from "@/data/mockData";

export function StudentLeaderboard() {
  const sortedStudents = [...mockStudents].sort((a, b) => b.points - a.points);
  const currentUser = sortedStudents[0]; // Assuming first student is current user for demo

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2: return <Trophy className="h-6 w-6 text-gray-400" />;
      case 3: return <Medal className="h-6 w-6 text-amber-600" />;
      default: return <Award className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'from-yellow-400 to-yellow-600';
      case 2: return 'from-gray-300 to-gray-500';
      case 3: return 'from-amber-400 to-amber-600';
      default: return 'from-muted to-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-2">Leaderboard 🏆</h1>
        <p className="text-primary-foreground/90">See how you stack up against your classmates</p>
      </div>

      {/* Current User Stats */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary-light/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="mr-2 h-5 w-5 text-primary" />
            Your Stats
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">#1</p>
              <p className="text-sm text-muted-foreground">Current Rank</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{currentUser.points}</p>
              <p className="text-sm text-muted-foreground">Total Points</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{currentUser.badges.length}</p>
              <p className="text-sm text-muted-foreground">Badges Earned</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top 3 Podium */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">🏆 Top Performers 🏆</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center items-end space-x-4 mb-8">
            {/* 2nd Place */}
            {sortedStudents[1] && (
              <div className="text-center">
                <div className={`w-20 h-24 bg-gradient-to-t ${getRankColor(2)} rounded-t-lg flex items-end justify-center pb-2`}>
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div className="mt-2">
                  <p className="font-semibold text-sm">{sortedStudents[1].name}</p>
                  <p className="text-xs text-muted-foreground">{sortedStudents[1].points} pts</p>
                </div>
              </div>
            )}

            {/* 1st Place */}
            <div className="text-center">
              <div className={`w-24 h-32 bg-gradient-to-t ${getRankColor(1)} rounded-t-lg flex items-end justify-center pb-2`}>
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <div className="mt-2">
                <p className="font-semibold">{sortedStudents[0].name}</p>
                <p className="text-sm text-muted-foreground">{sortedStudents[0].points} pts</p>
              </div>
            </div>

            {/* 3rd Place */}
            {sortedStudents[2] && (
              <div className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-t ${getRankColor(3)} rounded-t-lg flex items-end justify-center pb-2`}>
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div className="mt-2">
                  <p className="font-semibold text-sm">{sortedStudents[2].name}</p>
                  <p className="text-xs text-muted-foreground">{sortedStudents[2].points} pts</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Full Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle>Class Rankings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {sortedStudents.map((student, index) => {
              const rank = index + 1;
              const isCurrentUser = student.id === currentUser.id;
              
              return (
                <div 
                  key={student.id} 
                  className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                    isCurrentUser 
                      ? 'bg-primary/10 border-primary/30' 
                      : 'bg-card hover:bg-accent/20'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10">
                      {getRankIcon(rank)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className={`font-semibold ${isCurrentUser ? 'text-primary' : ''}`}>
                          {student.name}
                        </h3>
                        {isCurrentUser && (
                          <Badge variant="secondary" className="text-xs">You</Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{student.points} points</span>
                        <span>•</span>
                        <span>{student.badges.length} badges</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right min-w-[100px]">
                    <p className="text-lg font-bold">#{rank}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Progress 
                        value={(student.completedLessons / student.totalLessons) * 100} 
                        className="w-16 h-2" 
                      />
                      <span className="text-xs text-muted-foreground">
                        {Math.round((student.completedLessons / student.totalLessons) * 100)}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Achievement Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="mr-2 h-5 w-5 text-primary" />
            Achievement Goals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-accent/20 rounded-lg">
              <h4 className="font-semibold mb-2">🎯 Weekly Goal</h4>
              <p className="text-sm text-muted-foreground mb-2">Complete 10 lessons this week</p>
              <Progress value={70} className="w-full" />
              <p className="text-xs text-muted-foreground mt-1">7/10 lessons completed</p>
            </div>
            
            <div className="p-4 bg-accent/20 rounded-lg">
              <h4 className="font-semibold mb-2">⚡ Streak Goal</h4>
              <p className="text-sm text-muted-foreground mb-2">Study for 5 consecutive days</p>
              <Progress value={60} className="w-full" />
              <p className="text-xs text-muted-foreground mt-1">3/5 days completed</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}