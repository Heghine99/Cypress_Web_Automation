import React from 'react';
import { Link } from "react-router-dom";
import "../css/main.css";

export default function AnotherPage() {
  return (
    <div className='test'> <Link to="/"><button className="testBtn">goTest</button></Link> </div>
  )
}
