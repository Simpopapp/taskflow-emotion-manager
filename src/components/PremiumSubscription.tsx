import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion";

const PremiumSubscription = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000); // Reset after 3 seconds
  };

  return (
    <Card className="p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold mb-2">Upgrade para Premium</h3>
      <p className="mb-4">Desbloqueie recursos exclusivos e aumente sua produtividade!</p>
      <AnimatePresence>
        {!isSubscribed ? (
          <Button
            className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 transition-colors duration-300"
            onClick={handleSubscribe}
          >
            Assinar Agora
          </Button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-xl font-bold mb-2">Obrigado por assinar!</p>
            <p className="text-sm">Aproveite seus novos recursos premium!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default PremiumSubscription;