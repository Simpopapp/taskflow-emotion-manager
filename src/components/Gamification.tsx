import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export const Gamification = ({ points }) => {
  const [level, setLevel] = useState(1);
  const pointsToNextLevel = 100 * level;
  const progress = (points / pointsToNextLevel) * 100;

  return (
    <Card className="p-4">
      <h2 className="text-xl font-semibold mb-4">Seu Progresso</h2>
      <div className="flex justify-between items-center mb-2">
        <span>Nível {level}</span>
        <span>{points}/{pointsToNextLevel} pontos</span>
      </div>
      <Progress value={progress} className="mb-4" />
      <p className="text-sm text-gray-600 mb-2">
        Complete tarefas para ganhar pontos e subir de nível!
      </p>
    </Card>
  );
};