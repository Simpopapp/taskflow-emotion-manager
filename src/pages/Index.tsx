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
import PremiumSubscription from '@/components/PremiumSubscription';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [mood, setMood] = useState('neutro');
  const [energy, setEnergy] = useState('médio');
  const [points, setPoints] = useState(0);
  const [isPremium, setIsPremium] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setPoints(points + 10);
  };

  const handleSubscribe = () => {
    setIsPremium(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background dark:from-gray-900 dark:to-purple-900 p-4 relative overflow-hidden">
      {/* Linhas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>
      </div>

      <Card className="max-w-4xl mx-auto bg-card dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden relative">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-center text-foreground dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              TaskFlow
            </h1>
            <ThemeToggle />
            <AnimatePresence>
              {isPremium && (
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="ml-2 text-sm font-semibold bg-yellow-400 text-purple-900 px-2 py-1 rounded-full"
                >
                  PREMIUM
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <MoodTracker setMood={setMood} setEnergy={setEnergy} />
          <Tabs defaultValue="tasks" className="mt-6">
            <TabsList className="grid w-full grid-cols-5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-1 rounded-lg">
              <TabsTrigger value="tasks" className="data-[state=active]:bg-white data-[state=active]:text-purple-700">Tarefas</TabsTrigger>
              <TabsTrigger value="add" className="data-[state=active]:bg-white data-[state=active]:text-purple-700">Adicionar</TabsTrigger>
              <TabsTrigger value="focus" className="data-[state=active]:bg-white data-[state=active]:text-purple-700">Foco</TabsTrigger>
              <TabsTrigger value="progress" className="data-[state=active]:bg-white data-[state=active]:text-purple-700">Progresso</TabsTrigger>
              <TabsTrigger value="motivation" className="data-[state=active]:bg-white data-[state=active]:text-purple-700">Motivação</TabsTrigger>
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
          <div className="mt-6">
            <PremiumSubscription onSubscribe={handleSubscribe} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;