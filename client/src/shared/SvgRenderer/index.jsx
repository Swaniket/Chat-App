/* eslint-disable react/prop-types */
import "./index.css";

function SvgRenderer({ svgImage, helperText = "", styles = {} }) {
  return (
    <>
      <div style={{ padding: "40px" }}>
        <span className="svg-wrapper" style={{ ...styles }}>
          <img src={svgImage} className="svg-styles" />
        </span>
        {helperText !== "" && <h5 className="no-notes-text">{helperText}</h5>}
      </div>
    </>
  );
}

export default SvgRenderer;
