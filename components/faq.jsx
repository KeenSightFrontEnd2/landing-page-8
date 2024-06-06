"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const defaultContent = "Here is the content of the accordion. You can put any elements here.";

  const faq = {
    header: `FAQ`,
    questions: [
      {
        question: `Is it accessible?`,
        answer: `Yes. It adheres to the WAI-ARIA design pattern.`,
      },
      {
        question: `How do I get started?`,
        answer: `Simply fill out the contact form on our website, and we'll be in touch.`,
      },
      {
        question: `What are your rates?`,
        answer: `Our rates are competitive and tailored to the unique needs of each client.`,
      },
      {
        question: `Do you offer ongoing support?`,
        answer: `Yes. We provide ongoing support and maintenance to ensure optimal performance.`,
      },
    ],
  };

  return (
    <section className="relative max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col gap-3 justify-center items-center"
      >
        <h4 className="text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text">
          FAQ
        </h4>
        <p className="max-w-xl text-foreground/80 text-center">
          Here are some of our frequently asked questions. If you have any other questions you would
          like answered please feel free to email us.
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="max-w-2xl w-full border border-foreground/50 rounded-md p-1"
      >
        <Accordion
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          {faq.questions.map((question, index) => {
            return (
              <AccordionItem key={index} aria-label={question.question} title={question.question}>
                {question.answer}
              </AccordionItem>
            );
          })}
        </Accordion>
      </motion.div>
      <div className="absolute w-40 h-40 border bg-light -left-28 top-0 blur-[200px]"></div>
    </section>
  );
}
