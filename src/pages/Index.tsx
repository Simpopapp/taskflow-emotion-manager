import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MoodTracker } from '@/components/MoodTracker';
import { TaskList } from '@/components/TaskList';
import { AddTask } from '@/components/AddTask';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [mood, setMood] = useState('neutral');
  const [energy, setEnergy] = useState('medium');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-4">
      <Card className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">TaskFlow</h1>
          <MoodTracker setMood={setMood} setEnergy={setEnergy} />
          <Tabs defaultValue="tasks" className="mt-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tasks">Tarefas</TabsTrigger>
              <TabsTrigger value="add">Adicionar Tarefa</TabsTrigger>
            </TabsList>
            <TabsContent value="tasks">
              <TaskList tasks={tasks} mood={mood} energy={energy} />
            </TabsContent>
            <TabsContent value="add">
              <AddTask addTask={addTask} />
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  );
};

export default Index;