import React from "react";
import Botones from "./Botones";

const studentName = "Valentino";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // Los componentes son funciones:
  return(<div>
    <h1>Ejercicios 05</h1>
    <h3>{studentName}</h3>
    <ul>
      <li>{techSkills[0]}</li>
      <li>{techSkills[1]}</li>
      <li>{techSkills[2]}</li>
      <li>{techSkills[3]}</li>
      <li>{techSkills[4]}</li>
    </ul>
    <Botones alerts = {alerts}/>
  </div>)
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
