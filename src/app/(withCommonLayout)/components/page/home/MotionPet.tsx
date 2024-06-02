"use client";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import img from "../../../../../../public/next.svg";
const MotionPet = () => {
  return (
    <div>
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={img}
        width={750}
        height={750}
      />
    </div>
  );
};

export default MotionPet;
