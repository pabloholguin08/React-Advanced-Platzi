import React, { useState, ReactElement } from "react";
import classes from "./CompoundComponents.module.css";

interface TabProps {
  children: React.ReactNode;
}

const Tabs: React.FC<TabProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabElements = React.Children.toArray(children).filter(
    (child): child is ReactElement => React.isValidElement(child)
  )

  return (
    <div className={classes.Tabs}>
      <ul>
        {tabElements.map((child, index) => (
          <li
            key={index}
            className={index === activeTab ? classes.TabActive : ""}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </li>
        ))}
      </ul>
      <p className={classes.TabContent}>
        {tabElements[activeTab]}
      </p>
    </div>
  );
};

export default Tabs;
