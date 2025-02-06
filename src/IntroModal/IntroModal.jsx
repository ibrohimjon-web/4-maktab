import "./IntroModal.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import maktab from "../assets/maktab.png";

const IntroModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    const greetingTimer = setTimeout(() => {
      setShowGreeting(false);
    }, 2500); // 1.5 soniya

    const modalTimer = setTimeout(() => {
      setShowModal(false);
    }, 6000); // 4 soniya

    return () => {
      clearTimeout(greetingTimer);
      clearTimeout(modalTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="intro-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {showGreeting ? (
            <motion.h1
              className="greeting-text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Assalomu Aleykum! 👋
            </motion.h1>
          ) : (
            <>
              <motion.div
                className="smoke-effect"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              ></motion.div>
              <div className="particle-container">
                <motion.div
                  className="particles left"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                ></motion.div>
                <motion.div
                  className="particles right"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                ></motion.div>
              </div>
              <motion.div
                className="modal-content"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <motion.img
                  src={maktab}
                  alt="Rasm"
                  className="logo-i"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  4-Maktab Web Sahifasiga Marhamat! 🎉
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                >
                  Innovatsion ta'lim sari bir qadam yaqinroq!
                </motion.p>
                <motion.a
                  className="intro-d"
                  href="https://t.me/ibrohimjon_web"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                >
                  Dasturchi: Ikromjonov Ibrohimjon 🚀
                </motion.a>
              </motion.div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroModal;
