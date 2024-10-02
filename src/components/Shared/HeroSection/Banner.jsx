import React from "react";

import b from "../../../assets/d.png";
import a from "../../../assets/a.png";
import c from "../../../assets/b.png";
import d from "../../../assets/c.png";

const featuresData = [
  {
    img: a,
    title: "Payment only online",
    description:
      "Tasigförsamhet betendedesign. Mobile checkout. Yilç kärntorpa.",
  },
  {
    img: b,
    title: "New stocks and sales",
    description:
      "Tasigförsamhet betendedesign. Mobile checkout. Yilç kärntorpa.",
  },
  {
    img: c,
    title: "Quality assurance",
    description:
      "Tasigförsamhet betendedesign. Mobile checkout. Yilç kärntorpa.",
  },
  {
    img: d,
    title: "Delivery from 1 hour",
    description:
      "Tasigförsamhet betendedesign. Mobile checkout. Yilç kärntorpa.",
  },
];

const Banner = () => {
  return (
    <div>
      <div style={styles.container}>
        {featuresData.map((feature, index) => (
          <div key={index} style={styles.featureItem}>
            <div>
            <img src={feature.img} alt={feature.title} style={styles.icon} />
            </div>
            <div>
            <h3 style={styles.title}>{feature.title}</h3>
            <p style={styles.description}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 2fr))",
    gap: "30px",
    padding: "20px",
    alignItems: "start",
  },
  featureItem: {
    display: "flex", // Changed to flexbox for horizontal alignment
    alignItems: "center", // Vertically center the icon and text
    gap: "15px", // Space between icon and text
    color: "#333",
  },
  // icon: {
  //    flow: left
  //  },

  title: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  description: {
    fontSize: "14px",
    color: "#666",
  },
};
