const animations = (
  currEl,
  setFullScreen,
  setNavBarStage,
  setCompanyTextAnimation
) => {
  if (typeof currEl.firstS === "object") setNavBarStage("nav-top");
  if (typeof currEl.second === "object") {
    if (typeof currEl.green_form === "object") {
      setFullScreen("gs-wrap form-full-screen");
      setNavBarStage("nav-top black-nav disabled");
      document.querySelectorAll("video")[0].attributes.style.value =
        "opacity: 0";
    } else {
      setNavBarStage("nav-top black-nav");
    }
  }
  if (typeof currEl.company_text_animation === "object") {
    setCompanyTextAnimation("about-company-text animated");
  }
};
export default animations;
