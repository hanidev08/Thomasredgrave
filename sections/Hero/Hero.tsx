import Image from "next/image";
import React from "react";

import "./style.scss";
import { sampleData } from "@/sampleData";
 import Button from "@/components/Button";

export const Hero = () => {
  return (
    <section data-scroll-section>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-12 md:gap-x-36 gap-y-16">
          {sampleData.map(({ src, slug, className }, index) => (
            <Button
              href={slug}
              key={index}
              className={`${className} mt-10 md:mt-10 md:mb-10 relative max-md:w-[45vw] max-md:max-w-[350px] aspect-[3/5]
              max-w-[200px] md:w-[10vw] md:aspect-[5/5]  `}
            >
              <Image
                src={src}
                alt={`img${index}`}
                fill
                data-scroll
                className="image object-cover"
              />
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

// import Image from "next/image";
// import React from "react";
// import img1 from "@/public/assets/img1.jpeg";
// import img4 from "@/public/assets/img4.jpeg";
// import img5 from "@/public/assets/img5.jpeg";
// import img6 from "@/public/assets/img6.jpeg";
// import img7 from "@/public/assets/img7.jpeg";
// import img8 from "@/public/assets/img8.jpeg";
// import img9 from "@/public/assets/img9.jpeg";
// import img10 from "@/public/assets/img10.jpeg";
// import img11 from "@/public/assets/img11.jpeg";
// import img12 from "@/public/assets/img12.jpeg";
// import img13 from "@/public/assets/img13.jpeg";
// import img14 from "@/public/assets/img14.jpeg";
// import img15 from "@/public/assets/img15.jpeg";
// import img16 from "@/public/assets/img16.jpeg";
// import img17 from "@/public/assets/img17.jpeg";

// export const Hero = () => {
//   return (
//     <section>
//       <div className="container">
//         <div className=" grid grid-cols-2 md:grid-cols-12 gap-4">
//           <div className=" col-span-2 md:col-span-2 mt-10 relative max-md:w-[45vw] md:w-[10vw] max-w-[200px]  max-md:max-w-[350px] aspect-[3/5] md:aspect-[4/5]">
//             <Image src={img1} alt="img1" fill className=" object-cover" />
//           </div>
//           <div className=" md:col-span-2 mt-10 relative max-md:w-[45vw] md:w-[10vw] max-w-[200px]  max-md:max-w-[350px] aspect-[3/5] md:aspect-[4/5]">
//             <Image src={img10} alt="img1" fill className=" object-cover" />
//           </div>
//           <div className=" md:col-span-2 mt-10 relative max-md:w-[45vw] md:w-[10vw] max-w-[200px]  max-md:max-w-[350px] aspect-[3/5] md:aspect-[4/5]">
//             <Image src={img11} alt="img1" fill className=" object-cover" />
//           </div>
//           <div className=" col-span-2 md:col-span-4 max-md:justify-self-end mt-10 relative max-md:w-[45vw] md:w-[10vw] max-w-[200px]  max-md:max-w-[350px] aspect-[3/5] md:aspect-[4/5]">
//             <Image src={img12} alt="img1" fill className=" object-cover" />
//           </div>
//           <div className=" col-span-2 max-md:justify-self-end md:col-span-2 lg:col-span-2 mt-10 relative max-md:w-[45vw] md:w-[10vw] max-w-[200px]  max-md:max-w-[350px] aspect-[3/5] md:aspect-[4/5]">
//             <Image src={img13} alt="img1" fill className=" object-cover" />
//           </div>
//           <div className=" col-span-2 max-md:justify-self-end md:col-span-2 lg:col-span-2 mt-10 relative max-md:w-[45vw] md:w-[10vw] max-w-[200px]  max-md:max-w-[350px] aspect-[3/5] md:aspect-[4/5]">
//             <Image src={img14} alt="img1" fill className=" object-cover" />
//           </div>
//           <div className=" col-span-2 md:col-span-2 lg:col-span-2 mt-10 relative max-md:w-[45vw] md:w-[10vw] max-w-[200px]  max-md:max-w-[350px] aspect-[3/5] md:aspect-[4/5]">
//             <Image src={img15} alt="img1" fill className=" object-cover" />
//           </div>
//           <div className=" col-span-2 md:col-span-2 lg:col-span-2 mt-10 relative max-md:w-[45vw] md:w-[10vw] max-w-[200px]  max-md:max-w-[350px] aspect-[3/5] md:aspect-[4/5]">
//             <Image src={img16} alt="img1" fill className=" object-cover" />
//           </div>
//           <div className="md:col-span-2 mt-10 relative max-md:w-[45vw] md:w-[10vw] max-w-[200px]  max-md:max-w-[350px] aspect-[3/5] md:aspect-[4/5]">
//             <Image src={img17} alt="img1" fill className=" object-cover" />
//           </div>
//           <div className="md:col-span-2 mt-10 relative max-md:w-[45vw] md:w-[10vw] max-w-[200px]  max-md:max-w-[350px] aspect-[3/5] md:aspect-[4/5]">
//             <Image src={img8} alt="img1" fill className=" object-cover" />
//           </div>
//           <div className=" col-span-2 md:col-span-2 mt-10 relative max-md:w-[45vw] md:w-[10vw] max-w-[200px]  max-md:max-w-[350px] aspect-[3/5] md:aspect-[4/5]">
//             <Image src={img6} alt="img1" fill className=" object-cover" />
//           </div>
//           <div className="md:col-span-2 mt-10 relative max-md:w-[45vw] md:w-[10vw] max-w-[200px]  max-md:max-w-[350px] aspect-[3/5] md:aspect-[4/5]">
//             <Image src={img7} alt="img1" fill className=" object-cover" />
//           </div>
//           <div className="md:col-span-2 mt-10 relative max-md:w-[45vw] md:w-[10vw] max-w-[200px]  max-md:max-w-[350px] aspect-[3/5] md:aspect-[4/5]">
//             <Image src={img9} alt="img1" fill className=" object-cover" />
//           </div>
//           <div className=" col-span-2 md:col-span-4 mt-10 relative max-md:w-[45vw] md:w-[10vw] max-w-[200px]  max-md:max-w-[350px] aspect-[3/5] md:aspect-[4/5]">
//             <Image src={img4} alt="img1" fill className=" object-cover" />
//           </div>
//           <div className=" col-span-2 max-md:justify-self-end md:col-span-2 mt-10 relative max-md:w-[45vw] md:w-[10vw] max-w-[200px]  max-md:max-w-[350px] aspect-[3/5] md:aspect-[4/5]">
//             <Image src={img5} alt="img1" fill className=" object-cover" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// import { sampleData } from "@/sampleData";
// import Image from "next/image";
// import React from "react";

// export const Hero = () => {
//   return (
//     <section>
//       <div className="container mx-auto px-4">
//         {/* ✅ نسخة الجوال: صورة ثم صورتين */}
//         <div className="flex flex-col w-full gap-4 md:hidden">
//           {sampleData.map((item, index) => {
//             if (index % 3 === 0) {
//               return (
//                 <div
//                   key={index}
//                   className="relative w-[80vw] max-w-[400px] aspect-[3/5] mx-auto"
//                 >
//                   <Image
//                     src={item.url}
//                     alt={`img-${index}`}
//                     fill
//                     className="object-cover rounded"
//                   />
//                 </div>
//               );
//             }

//             if (index % 3 === 1) {
//               return (
//                 <div key={index} className="flex gap-4 w-full justify-center">
//                   {[item, sampleData[index + 1]].map(
//                     (img, innerIndex) =>
//                       img && (
//                         <div
//                           key={innerIndex}
//                           className="relative w-[38vw] max-w-[200px] aspect-[3/4]"
//                         >
//                           <Image
//                             src={img.url}
//                             alt={`img-${index + innerIndex}`}
//                             fill
//                             className="object-cover rounded"
//                           />
//                         </div>
//                       )
//                   )}
//                 </div>
//               );
//             }

//             return null;
//           })}
//         </div>

//         {/* ✅ نسخة سطح المكتب: شبكة من 5 أعمدة */}
//         <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-4">
//           {sampleData.map((item, index) => (
//             <div key={index} className="relative aspect-[3/4] w-full">
//               <Image
//                 src={item.url}
//                 alt={`img-${index}`}
//                 fill
//                 className="object-cover rounded"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
