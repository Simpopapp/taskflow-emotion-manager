import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const motivationalPhrases = [
  "Cada pequeno passo é um progresso.",
  "Acredite em você mesmo e tudo será possível.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "A persistência é o caminho do êxito.",
  "Não espere por oportunidades, crie-as.",
];

export const MotivationRecovery = () => {
  const [currentPhrase, setCurrentPhrase] = useState('');

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * motivationalPhrases.length);
    setCurrentPhrase(motivationalPhrases[randomIndex]);
  };

  return (
    <Card className="p-4">
      <h2 className="text-xl font-semibold mb-4">Recuperação de Motivação</h2>
      {currentPhrase && (
        <p className="text-lg text-center mb-4 italic">{currentPhrase}</p>
      )}
      <Button onClick={getRandomPhrase} className="w-full">
        {currentPhrase ? 'Nova Frase Motivacional' : 'Obter Frase Motivacional'}
      </Button>
    </Card>
  );
};