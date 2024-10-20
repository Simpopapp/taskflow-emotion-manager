import React, { useState } from 'react';
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MoodTracker } from '@/components/MoodTracker';
import { TaskList } from '@/components/TaskList';
import { AddTask } from '@/components/AddTask';
import { PomodoroTimer } from '@/components/PomodoroTimer';
import { ProgressAnalysis } from '@/components/ProgressAnalysis';
import { MotivationRecovery } from '@/components/MotivationRecovery';
import { Gamification } from '@/components/Gamification';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [mood, setMood] = useState('neutro');
  const [energy, setEnergy] = useState('médio');
  const [points, setPoints] = useState(0);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setPoints(points + 10); // Adiciona pontos ao adicionar uma tarefa
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-4">
      <Card className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">TaskFlow</h1>
          <MoodTracker setMood={setMood} setEnergy={setEnergy} />
          <Tabs defaultValue="tasks" className="mt-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="tasks">Tarefas</TabsTrigger>
              <TabsTrigger value="add">Adicionar</TabsTrigger>
              <TabsTrigger value="focus">Foco</TabsTrigger>
              <TabsTrigger value="progress">Progresso</TabsTrigger>
              <TabsTrigger value="motivation">Motivação</TabsTrigger>
            </TabsList>
            <TabsContent value="tasks">
              <TaskList tasks={tasks} mood={mood} energy={energy} />
            </TabsContent>
            <TabsContent value="add">
              <AddTask addTask={addTask} />
            </TabsContent>
            <TabsContent value="focus">
              <PomodoroTimer />
            </TabsContent>
            <TabsContent value="progress">
              <ProgressAnalysis tasks={tasks} moodHistory={[]} />
            </TabsContent>
            <TabsContent value="motivation">
              <MotivationRecovery />
            </TabsContent>
          </Tabs>
          <div className="mt-6">
            <Gamification points={points} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;