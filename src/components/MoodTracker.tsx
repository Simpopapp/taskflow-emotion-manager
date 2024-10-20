import React from 'react';
import { Button } from "@/components/ui/button"

const moods = ['muito ruim', 'ruim', 'neutro', 'bom', 'muito bom'];
const energyLevels = ['baixo', 'médio', 'alto'];

export const MoodTracker = ({ setMood, setEnergy }) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Como você está se sentindo hoje?</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {moods.map((m) => (
          <Button
            key={m}
            onClick={() => setMood(m)}
            variant="outline"
            className="capitalize"
          >
            {m}
          </Button>
        ))}
      </div>
      <h2 className="text-lg font-semibold mb-2">Seu nível de energia:</h2>
      <div className="flex gap-2">
        {energyLevels.map((e) => (
          <Button
            key={e}
            onClick={() => setEnergy(e)}
            variant="outline"
            className="capitalize"
          >
            {e}
          </Button>
        ))}
      </div>
    </div>
  );
};