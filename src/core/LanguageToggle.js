import LogoScalable from "./LogoScalable";
export const LanguageToggle = ({ toggleLanguaje, languaje }) => {
  return (
    <div onClick={toggleLanguaje}>
      <div className="wrapp¨er-languajes">
        <li className="item-idiom">
          <div className="flex-row-nav">
            <p>{languaje.idiom}</p>
            <LogoScalable
              imagenImg={languaje.flag}
              customHeight={"1.3rem"}
              customWidth={"1.3rem"}
            ></LogoScalable>
          </div>
        </li>
      </div>
    </div>
  );
};
export default LanguageToggle;
