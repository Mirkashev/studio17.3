const quizLocomotive = (
  currEl,
  isMobile,
  setAnimationStatus,
  setAnimationStatus1,
  setAnimationStatus2,
  setAnimationStatus3
) => {
  let mobileSense = 0;
  let firstFrameStartPosition = 0.23;
  let secondFrameStartPosition = 0.25;
  if (isMobile) {
    mobileSense = 0.017;
    firstFrameStartPosition = 0.31;
    secondFrameStartPosition = 0.33;
  }
  if (typeof currEl.quiz === "object") {
    const frames = document.querySelectorAll(".frame");
    const quizProgress = currEl.quiz.progress;
    const progressBars = document.querySelectorAll(".progress-bar-children");
    let progressBarScale = "";
    // console.log(quizProgress);
    if (quizProgress < firstFrameStartPosition + mobileSense) {
      frames[0].classList = "frame active";
      if (isMobile) {
        if (quizProgress > 0.16) {
          setAnimationStatus(false);
          progressBarScale = `scale3d(${-12 * (0.16 - quizProgress)}, 1, 1)`;
          frames[0].classList = "frame active visuals_active";
          progressBars[0].style.transform = progressBarScale;
        } else {
          frames[0].classList = "frame active";
          setAnimationStatus(true);
        }
      } else {
        if (quizProgress > 0.01) {
          progressBarScale = `scale3d(1, ${-9.5 * (0.02 - quizProgress)}, 1)`;
          frames[0].classList = "frame active visuals_active";
          progressBars[0].style.transform = progressBarScale;
          setAnimationStatus(false);
        } else {
          frames[0].classList = "frame active";
          setAnimationStatus(true);
        }
      }
    } else {
      frames[0].classList = "frame";
      setAnimationStatus(true);
    }
    if (
      quizProgress > secondFrameStartPosition &&
      quizProgress < 0.48 + mobileSense
    ) {
      frames[1].classList = "frame active visuals_active";
      progressBarScale = `scale3d(1, ${-9.5 * (0.25 - quizProgress)}, 1)`;
      if (isMobile) {
        progressBarScale = `scale3d(${-12 * (0.33 - quizProgress)}, 1, 1)`;
      }
      progressBars[1].style.transform = progressBarScale;
      setAnimationStatus1(false);
    } else {
      frames[1].classList = "frame";
      setAnimationStatus1(true);
    }
    if (quizProgress > 0.5 && quizProgress < 0.73 + mobileSense) {
      frames[2].classList = "frame active visuals_active";
      progressBarScale = `scale3d(1, ${-9.5 * (0.5 - quizProgress)}, 1)`;
      if (isMobile) {
        progressBarScale = `scale3d(${8.2 * (0.5 - quizProgress)}, 1, 1)`;
      }
      progressBars[2].style.transform = progressBarScale;
      setAnimationStatus2(false);
    } else {
      frames[2].classList = "frame";
      setAnimationStatus2(true);
    }
    if (quizProgress > 0.75) {
      frames[3].classList = "frame active visuals_active";
      progressBarScale = `scale3d(1, ${-9.5 * (0.75 - quizProgress)}, 1)`;
      if (isMobile) {
        progressBarScale = `scale3d(${-15 * (0.75 - quizProgress)}, 1, 1)`;
      }
      progressBars[3].style.transform = progressBarScale;
      setAnimationStatus3(false);
    } else {
      frames[3].classList = "frame";
      setAnimationStatus3(true);
    }
  }
};
export default quizLocomotive;
