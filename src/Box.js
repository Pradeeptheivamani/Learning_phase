import React from "react";
import "./Box.css";

const Box = () => {
  return (
    <div className="background">
      <div className="box">
        <h1>state vs props</h1>
        <table>
          <thead>
            
            <tr>
              <th>Feature</th>
              <th>State</th>
              <th>props</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Scope</td>
              <td>managed internally within the component</td>
              <td>passed frpm a parent to a child component</td>
              </tr>
            <tr>
              <td>mutable</td>
              <td>yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>owenerShip</td>
              <td>the component itself</td>
              <td>parentcomponent</td>
            </tr>
            <tr>
            <td>purpose</td>
            <td>manage dynamically</td>
            <td>share the between components</td>
            </tr>
            <tr>
            <td>best use case</td>
            <td>passing or external data</td>
            <td>handling user interaction</td>
            </tr>
            <tr>
            <td>default values</td>
            <td>can define or external data</td>
            <td>initial state defined inside component</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Box;