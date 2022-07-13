import "../css/main.css";
import DisplayTodos from "../components/DisplayTodos";
import Todos from "../components/Todos";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Todo() {
  return (
    <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
      <Link className="link" to="/test"><button className="testBtn">goTest</button></Link> 
    </div>
  );
}

export default Todo;
