import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/hooks/use-toast"

export const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
            toast({
              title: "Pomodoro concluído!",
              description: "Hora de fazer uma pausa.",
            });
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, isPaused, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
    setIsPaused(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setMinutes(25);
    setSeconds(0);
  };

  const progress = ((25 * 60 - (minutes * 60 + seconds)) / (25 * 60)) * 100;

  return (
    <Card className="p-4">
      <h2 className="text-xl font-semibold mb-4">Assistente de Foco</h2>
      <div className="text-4xl font-bold text-center mb-4">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <Progress value={progress} className="mb-4" />
      <div className="flex justify-center space-x-2">
        <Button onClick={toggleTimer}>{isActive ? 'Pausar' : 'Iniciar'}</Button>
        <Button onClick={resetTimer} variant="outline">Reiniciar</Button>
      </div>
    </Card>
  );
};