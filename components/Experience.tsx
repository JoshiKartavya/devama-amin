"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/MovingBorders";
import { getWorkExperience } from "@/sanity/sanity-utils";
import 'remixicon/fonts/remixicon.css'

const Experience = () => {
  const [workExperience, setWorkExperience] = useState<
    { id: number; title: string; desc: string; className: string; certificate?: string }[] // Note the optional `certificate` type
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getWorkExperience();
        setWorkExperience(data);
      } catch (error) {
        console.error("Error fetching work experience:", error);
      }
    }

    fetchData();
  }, []);

  const openModal = (image: string | undefined) => {
    if (image) {
      setSelectedImage(image);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-row justify-between lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className={`lg:ms-5 ${card.certificate ? 'w-[70%]' : 'w-full'} text-left`}>
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
              {card.certificate && (
                <div className="img relative w-[50px] h-[50px]">
                  <Image
                  src="/certificate.png"
                  alt="certificate"
                  fill
                  className="cursor-pointer"
                  onClick={() => openModal(card.certificate)}
                />
                </div>
              )}
            </div>
          </Button>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative p-4 md:p-6 w-[95vw] md:w-[50vw] h-[40vh] md:h-[60vh] rounded-lg backdrop-blur-2xl bg-black-100 border-2 border-[#6e6e6e]">
            <button
              onClick={closeModal}
              className="absolute top-2 md:top-3 right-2 md:right-3 text-black text-lg font-bold"
            >
              <i className="ri-close-circle-fill text-3xl md:text-4xl text-[#d9d9d9]"></i>
            </button>
            <div className="flex flex-col items-start mt-6 md:mt-8 justify-start relative w-full h-full gap-2 md:gap-4">
              <div className="img relative w-full h-[85%] md:h-[90%] rounded-lg">
                <Image
                  src={selectedImage || "/fallback.png"}
                  alt="Selected"
                  className="object-contain md:object-cover rounded-lg"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
