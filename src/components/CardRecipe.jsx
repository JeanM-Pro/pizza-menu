import { motion } from "framer-motion";

export const CardRecipe = ({ titulo, recipe, price }) => {
  return (
    <div className="flex text-white justify-between w-full mb-4 z-20">
      <div>
        <p className="uppercase font-bold text-lg">{titulo}</p>
        <p>{recipe}</p>
      </div>

      <motion.p
        initial={{ y: -5 }}
        animate={{
          y: 5,
          transition: {
            duration: 1.5,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        className="text-xl font-bold"
      >
        R${price}
      </motion.p>
    </div>
  );
};
