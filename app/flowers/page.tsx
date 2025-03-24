import { CSSProperties } from "react";

const data: number[][] = [
   [3, 2.2, 3.4, 3.6],
   [3.6, 3.8, 4, 4.2],
   [4, 4.2, 4.4, 4.6],
   [4, 4.2, 3, 3.6],
   [4, 4.2, 3, 3.6],
   [4, 4.2, 3, 3.6],
   [4.2, 4.4, 4.6, 4.8],
   [3, 3.2, 3.5, 3.6],
];

const Flowers = () => {
   return [...Array(3)].map((_, i) => (
      <div key={i} className={`flower flower--${i + 1}`}>
         <div className={`flower__leafs flower__leafs--${i + 1}`}>
            {[...Array(4)].map((_, i) => (
               <div
                  key={i}
                  className={`flower__leaf flower__leaf--${i + 1}`}
               ></div>
            ))}

            <div className="flower__white-circle"></div>

            {[...Array(8)].map((_, i) => (
               <div
                  key={i}
                  className={`flower__light flower__light--${i + 1}`}
               ></div>
            ))}
         </div>
         <div className="flower__line">
            {[...Array(6)].map((_, i) => (
               <div
                  key={i}
                  className={`flower__line__leaf flower__line__leaf--${i + 1}`}
               ></div>
            ))}
         </div>
      </div>
   ));
};

const GrowingGrass = () => {
   return [...Array(2)].map((_, i) => (
      <div key={i} className="growing-grass">
         <div className={`flower__grass flower__grass--${i + 1}`}>
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            {[...Array(8)].map((_, i) => (
               <div
                  key={i}
                  className={`flower__grass__leaf flower__grass__leaf--${
                     i + 1
                  }`}
               ></div>
            ))}
            <div className="flower__grass_overlay"></div>
         </div>
      </div>
   ));
};

const FlowerGFront = () => {
   return [...Array(8)].map((_, i) => (
      <div
         key={i}
         className={`flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--${
            i + 1
         }`}
      >
         <div className="flower__g-front__leaf"></div>
      </div>
   ));
};

const FlowerGFr = () => {
   return [...Array(8)].map((_, i) => (
      <div
         key={i}
         className={`flower__g-fr__leaf flower__g-fr__leaf--${i + 1}`}
      ></div>
   ));
};

export default function Page() {
   return (
      <main className="flex justify-center min-h-dvh items-end overflow-hidden perspective-[1000px]">
         <div className="night"></div>
         <div className="flowers">
            <Flowers></Flowers>
            <div
               className="grow-ans"
               style={{ "--d": "1.2s" } as CSSProperties}
            >
               <div className="flower__g-long">
                  <div className="flower__g-long__top"></div>
                  <div className="flower__g-long__bottom"></div>
               </div>
            </div>
            <GrowingGrass></GrowingGrass>
            <div
               className="grow-ans"
               style={{ "--d": "2.4s" } as CSSProperties}
            >
               <div className="flower__g-right flower__g-right--1">
                  <div className="leaf"></div>
               </div>
            </div>
            <div
               className="grow-ans"
               style={{ "--d": "2.8s" } as CSSProperties}
            >
               <div className="flower__g-right flower__g-right--2">
                  <div className="leaf"></div>
               </div>
            </div>
            <div
               className="grow-ans"
               style={{ "--d": "2.8s" } as CSSProperties}
            >
               <div className="flower__g-front">
                  <FlowerGFront></FlowerGFront>
                  <div className="flower__g--front__line"></div>
               </div>
            </div>
            <div
               className="grow-ans"
               style={{ "--d": "3.2s" } as CSSProperties}
            >
               <div className="flower__g-fr">
                  <div className="leaf"></div>
                  <FlowerGFr></FlowerGFr>
               </div>
            </div>
            {data.map((delays, i) => (
               <div key={i} className={`long-g long-g--${i}`}>
                  {delays.map((delay, j) => (
                     <div
                        key={j}
                        className="grow-ans"
                        style={{ "--d": `${delay}s` } as CSSProperties}
                     >
                        <div className={`leaf leaf--${j}`}></div>
                     </div>
                  ))}
               </div>
            ))}
         </div>
      </main>
   );
}
