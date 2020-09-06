import React from "react";
import { Link } from "react-router-dom";

const prompts = [
    'or see',
    'check out',
    'there\'s also'
]

export default function AllProjectsPrompt() {
    const prompt = prompts[Math.floor((Math.random() * prompts.length))]

  return (
    <div className="p-4 text-center">
      {prompt}{" "}
      <Link
        to="/projects/all"
        className="bg-black text-white rounded p-2 px-4 transition duration-200 hover:bg-teal-200"
      >
        All Projects
      </Link>
    </div>
  );
}
