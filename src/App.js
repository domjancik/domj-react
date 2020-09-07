import React from "react";
import Layout from "./hoc/Layout/Layout";
import Projects from "./components/Projects/Projects";
import Hero from "./components/Hero/Hero";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import AuthStore from "./store/AuthStore/AuthStore";
import Navigation from "./components/Layout/Navigation/Navigation";
import CollectionDetail from "./components/Collections/CollectionDetail/CollectionDetail";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const pageVariants = {
  initial: {
    opacity: 0,
    y: "-4rem",
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "4rem",
  },
};

const pageTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.5
};

const pageTransitionOut = {
  type: "tween",
  ease: "easeIn",
  duration: 10
}

function MotionDiv(props) {
  const [animationComplete, setAnimationComplete] = useState(false)

  const onAnimationComplete = () => {
    setAnimationComplete(true)
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      onAnimationComplete={onAnimationComplete}
      transition={animationComplete ? pageTransitionOut : pageTransition}
      {...props}
    >
      {props.children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <AuthStore>
      <Layout>
        <Hero />
        <Navigation />
        <div className="min-h-screen">
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                path="/projects/:id"
                children={
                  <MotionDiv>
                    <CollectionDetail />
                  </MotionDiv>
                }
              />
              <Route
                path="/projects"
                children={
                  <MotionDiv>
                    <Projects />
                  </MotionDiv>
                }
              />
              <Route path="/" children={<Redirect to="/projects" />} />
            </Switch>
          </AnimatePresence>
        </div>
      </Layout>
    </AuthStore>
  );
}
export default App;
