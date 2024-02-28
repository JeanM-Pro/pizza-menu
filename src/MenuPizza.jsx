import { CardRecipe } from "./components/CardRecipe";
import { menus } from "./utils/menus";
import { GiFullPizza } from "react-icons/gi";
import hoja from "./images/hoja.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Footer } from "./components/Footer";

export const MenuPizza = () => {
  const controls = useAnimation();

  useEffect(() => {
    const rotateAnimation = async () => {
      while (true) {
        await controls.start({ rotate: -90, transition: { duration: 2 } }); // Gira 90 grados a la izquierda
        await controls.start({ rotate: 90, transition: { duration: 2 } }); // Gira 90 grados a la derecha
      }
    };

    rotateAnimation();

    // Limpieza del efecto para evitar fugas de memoria
    return () => {
      controls.stop();
    };
  }, [controls]);
  return (
    <>
      <div className="bg-[#c81b16] w-full h-[95vh] flex justify-center relative overflow-hidden">
        <img
          src={hoja}
          alt="hoja"
          className="absolute bottom-[10px] left-5 z-20 h-[100px] rotate-[-20deg] "
        />

        <img
          src="https://i.ibb.co/fN2bHqq/pizza2.png"
          alt="pizza imagen"
          className="absolute bottom-[-40px] right-[-80px]  h-[100px]"
        />
        <div className="w-[25%] pt-6 h-screen relative flex justify-center">
          <p className="absolute top-[50%] m-0 p-0 transform -translate-y-1/2 h-[25rem] left-[-300px] font-black text-[#ab1c18] text-[12rem] rotate-90">
            PIZZA
          </p>
          <img
            src="https://i.ibb.co/64zj2kM/pizza.png"
            alt="pizza"
            className="absolute top-[50%] transform -translate-y-1/2 h-[25rem] left-[-14px]"
          />

          <div className="text-white relative z-30">
            <motion.span animate={controls} style={{ display: "inline-block" }}>
              <GiFullPizza size={50} className="my-0 mx-auto" />
            </motion.span>

            <p className="uppercase font-semibold text-center">Jean's</p>
            <p className="uppercase font-semibold text-center mt-[-5px]">
              pizza
            </p>
          </div>
        </div>
        <div className="w-[75%] pt-4 pr-4 h-screen">
          <div className="relative mt-8">
            <motion.p
              initial={{ x: 200 }}
              transition={{ duration: 1 }}
              animate={{ x: 0 }}
              className="text-white font-black text-[5rem] leading-4 z-40"
            >
              PIZZA
            </motion.p>
            <motion.p
              initial={{ x: -200 }}
              transition={{ duration: 1 }}
              animate={{ x: 0 }}
              className="text-[#ffde59] font-black text-[5rem] "
            >
              MENU
            </motion.p>
          </div>

          <div className="w-full max-h-[73%] overflow-auto relative">
            {menus.map((menu, index) => {
              return (
                <CardRecipe
                  key={index}
                  titulo={menu.titulo}
                  recipe={menu.recipe}
                  price={menu.price}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-[50px] bg-white w-full px-4 py-1">
        <Footer />
      </div>
    </>
  );
};
