import React from 'react';
import { Card } from "@/components/ui/card"

export const TaskList = ({ tasks, mood, energy }) => {
  // Aqui implementaremos a lógica de priorização baseada no humor e energia
  const prioritizeTasks = (tasks, mood, energy) => {
    // Lógica simplificada de priorização
    return tasks.sort((a, b) => {
      if (energy === 'baixo') {
        return a.priority === 'baixa' ? -1 : 1;
      } else if (energy === 'alto') {
        return a.priority === 'alta' ? -1 : 1;
      }
      return 0;
    });
  };

  const prioritizedTasks = prioritizeTasks(tasks, mood, energy);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Suas Tarefas</h2>
      {prioritizedTasks.length === 0 ? (
        <p>Nenhuma tarefa adicionada ainda.</p>
      ) : (
        prioritizedTasks.map((task, index) => (
          <Card key={index} className="p-4 mb-2">
            <h3 className="font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-600">Prioridade: {task.priority}</p>
            <p className="text-sm text-gray-600">Data: {task.date}</p>
          </Card>
        ))
      )}
    </div>
  );
};