import React from "react";

const CheckBox = ({ label, onchange }) => {
  const style = {
    marginTop: "1rem",
    padding: "1rem",
    color: "black",
    fontSize: "1rem",
    fontWeight: "700",
    display:"flex",
    alignItems:"center",
    boxShadow: "0px 0px 3px 2px black",
  };

  const labelStyle = {
    marginLeft: "1rem",
  };

  return (
    <>
      <div style={style}>
        <input
          style={{ width: "30px", height: "30px", border: "2px solid red" }}
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={() => {
            onchange();
          }}
        />
        <label style={labelStyle}>{label}</label>
      </div>
    </>
  );
};

export default CheckBox;