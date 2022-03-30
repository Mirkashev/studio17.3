import LogoPart1 from "../../../public/Vector1.svg";
import LogoPart2 from "../../../public/Vector2.svg";
import LogoPart3 from "../../../public/Vector3.svg";
import LogoPart4 from "../../../public/Group.svg";
import LogoPart5 from "../../../public/Vector5.svg";
import { UserAgent } from "@quentin-sommer/react-useragent";
export default function ParalaxLogo(props) {
  const logoSize = 1050;
  const mLogoSize = 750;
  const paralaxDataScrollOffset = "52%";
  return (
    <>
      <UserAgent mobile tablet>
        <div
          className="vector-figure"
          id="scroll-direction"
          data-scroll
          data-scroll-id={
            props.logoType === "static" ? "" : "paralaxLocomotiveLogo"
          }
          data-scroll-offset={paralaxDataScrollOffset}
        >
          <div className="vector-figure-wrap">
            <LogoPart1
              className="vect-1"
              viewBox={`-220 -100 ${mLogoSize} ${mLogoSize}`}
              style={{ transform: `translate3d(0px, 0px, 0px)` }}
            />
            <LogoPart2
              className="vect-2"
              viewBox={`-25 -215 ${mLogoSize} ${mLogoSize}`}
              style={{ transform: `translate3d(0px, 0px, 0px)` }}
            />
            <LogoPart3
              className="vect-3"
              viewBox={`-555 -350 ${mLogoSize} ${mLogoSize}`}
              style={{ transform: `translate3d(0px, 0px, 0px)` }}
            />
            <LogoPart4
              className="vect-4"
              viewBox={`-20 -345 ${mLogoSize} ${mLogoSize}`}
              style={{ transform: `translate3d(0px, 0px, 0px)` }}
            />
            <LogoPart5
              className="vect-5"
              viewBox={`-355 -550 ${mLogoSize} ${mLogoSize}`}
              style={{ transform: `translate3d(0px, 0px, 0px)` }}
            />
          </div>
        </div>
      </UserAgent>
      <UserAgent computer>
        <div
          className="vector-figure"
          id="scroll-direction"
          data-scroll
          data-scroll-id={
            props.logoType === "static" ? "" : "paralaxLocomotiveLogo"
          }
          data-scroll-offset={paralaxDataScrollOffset}
        >
          <div className="vector-figure-wrap">
            <LogoPart1
              className="vect-1"
              viewBox={`-390 -100 ${logoSize} ${logoSize}`}
              style={{ transform: `translate3d(0px, 0px, 0px)` }}
            />
            <LogoPart2
              className="vect-2"
              viewBox={`-195 -215 ${logoSize} ${logoSize}`}
              style={{ transform: `translate3d(0px, 0px, 0px)` }}
            />
            <LogoPart3
              className="vect-3"
              viewBox={`-725 -350 ${logoSize} ${logoSize}`}
              style={{ transform: `translate3d(0px, 0px, 0px)` }}
            />
            <LogoPart4
              className="vect-4"
              viewBox={`-190 -345 ${logoSize} ${logoSize}`}
              style={{ transform: `translate3d(0px, 0px, 0px)` }}
            />
            <LogoPart5
              className="vect-5"
              viewBox={`-525 -550 ${logoSize} ${logoSize}`}
              style={{ transform: `translate3d(0px, 0px, 0px)` }}
            />
          </div>
        </div>
      </UserAgent>
    </>
  );
}
