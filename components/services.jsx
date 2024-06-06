"use client";
import { motion } from "framer-motion";
import { Tooltip } from "@nextui-org/tooltip";
import { Image } from "@nextui-org/react";

export default function Services() {
  const ourServices = [
    {
      header: "Custom Algorithm Development",
      description:
        "Tailored quantitative strategies designed to meet your unique trading goals and risk profile.",
      image: "/custom-algo.svg",
    },
    {
      header: "Rigorous Backtesting and Optimization",
      description: "Ensure the robustness and performance of your algorithms before live trading.",
      image: "/rigor.svg",
    },
    {
      header: "Seamless Platform Integration",
      description: "Effortlessly deploy your algorithms on your preferred trading platforms.",
      image: "/seamless.svg",
    },
    {
      header: "Real-Time Monitoring and Alerts",
      description:
        "Stay informed about your algorithm's performance with real-time monitoring and alerts.",
      image: "/realtime.svg",
    },
    {
      header: "Ongoing Support and Maintenance",
      description:
        "Benefit from our expert support team, ensuring optimal performance and adaptability in evolving markets.",
      image: "/ongoing.svg",
    },
  ];

  return (
    <section className="max-w-screen-lg mx-auto px-4 py-24 gap-12 md:px-8 flex flex-col justify-center items-center bg-[url('/logo-circles.png')] bg-no-repeat bg-center bg-[length:75%]">
      <motion.h2
        initial={{ y: 5, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text"
      >
        Our Services
      </motion.h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
        {ourServices.map((service) => {
          return (
            <Tooltip key={service.header} content={service.header}>
              <motion.article
                initial={{ y: 5, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                // className=" bg-background "
              >
                <div className="h-[30dvh] flex flex-col items-center gap-4 text-center">
                  <Image
                    src={service.image}
                    width={100}
                    height={100}
                    alt={service.header}
                    className="dark-filter dark:invert"
                  />
                  <h3 className="text-3xl font-bold">{service.header}</h3>
                  <p>{service.description}</p>
                </div>
              </motion.article>
            </Tooltip>
          );
        })}
      </div>
    </section>
  );
}
