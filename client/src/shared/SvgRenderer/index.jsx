/* eslint-disable react/prop-types */
import "./index.css";

function SvgRenderer({ svgImage, helperText = "" }) {
  return (
    <>
      <div style={{ padding: "40px" }}>
        <span className="svg-wrapper">
          <img src={svgImage} className="svg-styles" />
        </span>
        {helperText !== "" && <h5 className="no-notes-text">{helperText}</h5>}
      </div>
    </>
  );
}

export default SvgRenderer;
