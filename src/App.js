import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  AiFillDingtalkCircle,
  AiFillCodeSandboxCircle,
  AiFillMediumCircle,
  AiFillSketchCircle,
} from "react-icons/ai";

const Container = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr;
  top: 0;
  left: 0;
`;

const TextBox = styled.div`
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  padding-left: 40px;

  h1 {
    color: white;
    font-size: 40px;
  }

  p {
    color: white;
    font-size: 24px;
  }
`;

const Button = styled(motion.button)`
  background-color: white;
  color: red;
  padding: 1rem 5rem;
  font-weight: bold;
  font-size: 20px;
  border-radius: 5px;
  outline: none;
  border: 1px solid red;
`;

const AnimationBox = styled.div`
  justify-content: center;
  background-color: royalblue;
  flex-direction: column;
  display: flex;
  padding-right: 40px;
  span {
    position: absolute;
    font-size: 14rem;

    :nth-child(1) {
      color: blue;
      top: 0;
      right: 0;
    }

    :nth-child(2) {
      color: red;
      top: 50%;
    }

    :nth-child(3) {
      color: green;
      top: 10px;
    }

    :nth-child(4) {
      color: orange;
      bottom: 0;
      right: 0;
    }
  }
`;

const App = () => {
  const h1Motion = {
    init: { opacity: 0, y: -100 },
    after: { opacity: 1, y: 0 },
  };

  const pMotion = {
    init: { opacity: 0, x: -100 },
    after: { opacity: 1, x: 0 },
  };

  return (
    <Container>
      <TextBox>
        <motion.h1
          variants={h1Motion}
          initial={"init"}
          animate={"after"}
          transition={{ duration: 3 }}
        >
          Create dynamic animation
        </motion.h1>

        <motion.p
          variants={pMotion}
          initial={"init"}
          animate={"after"}
          transition={{ duration: 2, delay: 0.5 }}
        >
          Drag the ball
        </motion.p>
        <Button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          whileTap={{
            scale: 1.05,
            backgroundColor: "black",
            color: "white",
          }}
        >
          Get Start
        </Button>
      </TextBox>
      <AnimationBox>
        <motion.span
          drag={true}
          whileTap={{ scale: 2 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AiFillDingtalkCircle />
        </motion.span>

        <motion.span
          whileTap={{ scale: 2 }}
          drag={true}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AiFillCodeSandboxCircle />
        </motion.span>

        <motion.span
          whileTap={{ scale: 2 }}
          drag={true}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AiFillMediumCircle />
        </motion.span>

        <motion.span
          whileTap={{ scale: 2 }}
          drag={true}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AiFillSketchCircle />
        </motion.span>
      </AnimationBox>
    </Container>
  );
};

export default App;
