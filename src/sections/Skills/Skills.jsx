import styles from "./SkillsStyles.module.css"
import checkMarkIconLight from "../../assets/checkmark-light.svg"
import checkMarkIconDark from "../../assets/checkmark-dark.svg"
import SkillList from "../../common/SkillList.jsx";
import {useTheme} from "../../common/ThemeContext.jsx";

const Skills = () =>{

    const skillList = ["MongoDB",
        "Express",
        "React",
        "Nodejs",
        "Java",
        "Typescript",
        "Angular",
        "Postgres",
        "Spring Boot",
        "Docker",
        "Git",
        "Tailwind CSS"
    ]
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
    return(
        <section id='skills' className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
                <SkillList
                    skillList = {skillList}
                    checkMarkIcon = {checkMarkIcon}

                />
            </div>
        </section>
    )
}

export default Skills