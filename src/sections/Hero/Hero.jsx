import styles from './HeroStyles.module.css'

import heroImg from "../../assets/final-hero-image.png"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import twitterLight from "../../assets/twitter-light.svg"
import linkedinLight from "../../assets/linkedin-light.svg"
import githubLight from "../../assets/github-light.svg"
import twitterDark from "../../assets/twitter-dark.svg"
import linkedinDark from "../../assets/linkedin-dark.svg"
import githubDark from "../../assets/github-dark.svg"
import CV from "../../assets/Zacharia_Dolal.pdf"
import {useTheme} from "../../common/ThemeContext.jsx";

const Hero = () => {
    const {theme,toggleTheme} = useTheme()

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img
                    src={heroImg}
                    className={styles.hero}
                    alt="Profile picture of Harris Johnsen"
                />
                <img
                    className={styles.colorMode}
                    src={themeIcon}
                    alt="Color mode icon"
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>
                    Zacharia
                    <br />
                    Dolal
                </h1>
                <h2>Fullstack Developer</h2>
                <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
                <p className={styles.description}>
                    Driven by a passion for building full-stack applications
                    with modern frontends and robust backend solutions tailored
                    for commercial businesses.
                </p>
                <a href={CV} download>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Hero







//
// import heroImg from "../assets/hero-img.png";
// import sun from "../assets/sun.svg";
// import moon from "../assets/moon.svg";
// import twitterLight from "../assets/twitter-light.svg";
// import linkedinLight from "../assets/linkedin-light.svg";
// import githubLight from "../assets/github-light.svg";
// import twitterDark from "../assets/twitter-dark.svg";
// import linkedinDark from "../assets/linkedin-dark.svg";
// import githubDark from "../assets/github-dark.svg";
// import CV from "../assets/Zacharia_Dolal.pdf";
// import { useTheme } from "../common/ThemeContext.jsx";
//
// const Hero = () => {
//     const { theme, toggleTheme } = useTheme();
//     const themeIcon = theme === "light" ? sun : moon;
//     const twitterIcon = theme === "light" ? twitterLight : twitterDark;
//     const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
//     const githubIcon = theme === "light" ? githubLight : githubDark;
//
//     return (
//         <section
//             id="hero"
//             className="flex flex-col justify-center gap-5 text-center h-[100dvh] min-h-[500px] md:flex-row-reverse md:items-center md:justify-evenly"
//         >
//             <div className="relative">
//                 <img
//                     className="max-w-[200px] md:max-w-[350px] md:w-[350px] lg:max-w-[400px] lg:w-[400px]"
//                     src={heroImg}
//                     alt="Profile picture of the portfolio owner"
//                 />
//                 <img
//                     className="absolute right-0 w-6 cursor-pointer"
//                     src={themeIcon}
//                     alt="Color mode icon"
//                     onClick={toggleTheme}
//                 />
//             </div>
//
//             <div className="flex flex-col gap-5">
//                 <h1 className="text-[32px] font-sans font-bold text-primary">
//                     Zacharia
//                     <br />
//                     Dolal
//                 </h1>
//                 <h2 className="text-lg font-mono text-secondary">Fullstack Developer</h2>
//                 <div className="flex justify-center gap-6">
//                     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//                         <img className="w-8" src={twitterIcon} alt="Twitter icon" />
//                     </a>
//                     <a
//                         href="https://www.linkedin.com/in/zacharia-dolal/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         <img className="w-8" src={linkedinIcon} alt="LinkedIn icon" />
//                     </a>
//                     <a
//                         href="https://github.com/zacharia0"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         <img className="w-8" src={githubIcon} alt="Github icon" />
//                     </a>
//                 </div>
//                 <a href={CV} download>
//                     <button className="bg-primary text-white rounded-full w-[126px] h-[50px] text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200 active:translate-y-[2px] active:shadow-md">
//                         Resume
//                     </button>
//                 </a>
//             </div>
//         </section>
//     );
// };
//
// export default Hero;









//
// import heroImg from "../assets/hero-img.png";
// import sun from "../assets/sun.svg";
// import moon from "../assets/moon.svg";
// import twitterLight from "../assets/twitter-light.svg";
// import linkedinLight from "../assets/linkedin-light.svg";
// import githubLight from "../assets/github-light.svg";
// import twitterDark from "../assets/twitter-dark.svg";
// import linkedinDark from "../assets/linkedin-dark.svg";
// import githubDark from "../assets/github-dark.svg";
// import CV from "../assets/Zacharia_Dolal.pdf";
// import { useTheme } from "../common/ThemeContext.jsx";
//
// const Hero = () => {
//     const { theme, toggleTheme } = useTheme();
//     const themeIcon = theme === "light" ? sun : moon;
//     const twitterIcon = theme === "light" ? twitterLight : twitterDark;
//     const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
//     const githubIcon = theme === "light" ? githubLight : githubDark;
//
//     return (
//         <section
//             id="hero"
//             className="flex flex-col items-center justify-center text-center min-h-screen h-[100dvh] md:flex-row-reverse md:justify-evenly"
//         >
//             {/* Hero Image and Theme Toggle */}
//             <div className="relative">
//                 <img
//                     className="max-w-[200px] md:max-w-[350px] lg:max-w-[400px]"
//                     src={heroImg}
//                     alt="Profile picture of the portfolio owner"
//                 />
//                 <img
//                     className="absolute right-0 w-6 cursor-pointer md:w-8"
//                     src={themeIcon}
//                     alt="Color mode icon"
//                     onClick={toggleTheme}
//                 />
//             </div>
//
//             {/* Info Section */}
//             <div className="flex flex-col items-center gap-5">
//                 <h1 className="text-4xl font-bold font-rubik ">
//                     Zacharia
//                     <br />
//                     Dolal
//                 </h1>
//                 <h2 className="text-lg font-roboto">Fullstack Developer</h2>
//                 {/*<h1 className="text-4xl font-bold font-rubik text-black dark:text-white">*/}
//                 {/*    Zacharia*/}
//                 {/*    <br/>*/}
//                 {/*    Dolal*/}
//                 {/*</h1>*/}
//                 {/*<h2 className="text-lg font-roboto text-black dark:text-white">*/}
//                 {/*    Fullstack Developer*/}
//                 {/*</h2>*/}
//
//                 <div className="flex gap-6">
//                     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//                         <img className="w-8" src={twitterIcon} alt="Twitter icon"/>
//                     </a>
//                     <a
//                         href="https://www.linkedin.com/in/zacharia-dolal/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         <img className="w-8" src={linkedinIcon} alt="LinkedIn icon"/>
//                     </a>
//                     <a
//                         href="https://github.com/zacharia0"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         <img className="w-8" src={githubIcon} alt="Github icon"/>
//                     </a>
//                 </div>
//                 <a href={CV} download>
//                     <button
//                         className="px-6 py-2 text-lg font-bold text-white bg-blue-500 rounded-full shadow hover:scale-105 active:translate-y-1 active:shadow-md transition-transform">
//                         Resume
//                     </button>
//                 </a>
//             </div>
//         </section>
//     );
// };
//
// export default Hero;
//
