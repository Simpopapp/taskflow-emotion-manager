import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion";

const PremiumSubscription = ({ onSubscribe }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleSubscribe = () => {
    setIsSubscribed(true);
    onSubscribe();
    setTimeout(() => setIsVisible(false), 3000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <Card className="p-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Premium AKALIBRE</h3>
              <AnimatePresence>
                {!isSubscribed ? (
                  <Button
                    className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 transition-colors duration-300 text-sm px-3 py-1"
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
                    <p className="text-sm font-bold">Obrigado por assinar!</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PremiumSubscription;