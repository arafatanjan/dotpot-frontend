import React from "react";
import com from "../../assets/company.png";

const companies = [
  {
    name: "Machic",
    rating: 41,
    review: "Good quality product can only be found in good stores.",
  },
  {
    name: "Blonwe",
    rating: 37,
    review: "All kinds of grocery products are available in our store.",
  },
  {
    name: "Bacola",
    rating: 35,
    review: "Our work can definitely support the local economy.",
  },
  {
    name: "Medibazar",
    rating: 30,
    review: "Save your time – save your money – shop from our grocery store.",
  },
];

const Popularcompanies = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <h3>Popular Companies</h3>
          <p style={{ color: "#a19c9c", paddingTop: "5px" }}>
            Some of the new products arriving this week.
          </p>
        </div>
        <div>
          <button
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              color: "#007bff",
            }}
          >
            View All &rarr;
          </button>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "left", gap: "0px" }}>
        {companies.map((company, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "0px",
              padding: "10px",
              width: "24%",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                alignItems: "left",
                gap: "5px",
                marginBottom: "10px",
              }}
            >
              <div>
                <img
                  src={com}
                  alt="User"
                  style={{ width: "50px", borderRadius: "50%" }}
                />
              </div>
              
              <div>
                <h4>{company.name}</h4>
                <p style={{ color: "#888", fontSize: "12px" }}>Featured</p>
                <div style={{}}>
                  <span>{company.rating}</span>
                  <div style={{ color: "#FFD700", fontSize: "16px" }}>
                    ★★★★★★
                  </div>
                </div>
              </div>
            </div>
            <p style={{ fontSize: "12px", textAlign: "left" }}>
              {company.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popularcompanies;
