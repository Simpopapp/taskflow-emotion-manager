import React from 'react';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { motion } from "framer-motion";

const PremiumSubscription = () => {
  return (
    <Card className="p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold mb-2">Upgrade para Premium</h3>
      <p className="mb-4">Desbloqueie recursos exclusivos e aumente sua produtividade!</p>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 transition-colors duration-300">
            Assinar Agora
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-transparent border-none shadow-none">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <img
              src="/premium-thank-you.png"
              alt="Obrigado por assinar!"
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default PremiumSubscription;