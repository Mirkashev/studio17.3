const animationsMobile = (currEl, setNavBarStage, setCompanyTextAnimation) => {
  if (typeof currEl.firstS === "object") setNavBarStage("nav-top");
  if (typeof currEl.second === "object") {
    setNavBarStage("nav-top black-nav");
  }
  if (typeof currEl.company_text_animation === "object") {
    setCompanyTextAnimation("about-company-text animated");
  }
};
export default animationsMobile;
