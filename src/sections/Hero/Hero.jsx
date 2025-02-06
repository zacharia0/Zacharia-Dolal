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
