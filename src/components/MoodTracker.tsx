import React from 'react';
import { Button } from "@/components/ui/button"

const moods = ['muito ruim', 'ruim', 'neutro', 'bom', 'muito bom'];
const energyLevels = ['baixo', 'médio', 'alto'];

const moodColors = {
  'muito ruim': 'bg-red-500 hover:bg-red-600',
  'ruim': 'bg-orange-500 hover:bg-orange-600',
  'neutro': 'bg-yellow-500 hover:bg-yellow-600',
  'bom': 'bg-green-500 hover:bg-green-600',
  'muito bom': 'bg-blue-500 hover:bg-blue-600'
};

const energyColors = {
  'baixo': 'bg-red-500 hover:bg-red-600',
  'médio': 'bg-yellow-500 hover:bg-yellow-600',
  'alto': 'bg-green-500 hover:bg-green-600'
};

export const MoodTracker = ({ setMood, setEnergy }) => {
  return (
    <div className="mb-6 p-4 bg-gradient-to-r from-pink-100 to-indigo-100 dark:from-pink-900 dark:to-indigo-900 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-300">Como você está se sentindo hoje?</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {moods.map((m) => (
          <Button
            key={m}
            onClick={() => setMood(m)}
            className={`capitalize text-white ${moodColors[m]}`}
          >
            {m}
          </Button>
        ))}
      </div>
      <h2 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-300">Seu nível de energia:</h2>
      <div className="flex gap-2">
        {energyLevels.map((e) => (
          <Button
            key={e}
            onClick={() => setEnergy(e)}
            className={`capitalize text-white ${energyColors[e]}`}
          >
            {e}
          </Button>
        ))}
      </div>
    </div>
  );
};