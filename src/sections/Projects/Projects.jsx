import styles from "./ProjectsStyles.module.css"
import Care_log_Hub from "../../assets/Care_log_Hub.png"
import Applicatiofy from "../../assets/Applicatiofy.png"
import ProjectCard from "../../common/ProjectCard.jsx";
const Projects = () => {

    return (
        <section id ="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>

                <ProjectCard
                    src ={Care_log_Hub}
                    h3 = "Care Log Hub"
                    p = "Group Home Observation App"
                    link = "https://github.com/zacharia0/careLogHub"
                />

                <ProjectCard
                    src ={Applicatiofy}
                    h3 = "applicatiofy"
                    p = "Job application tracking App"
                    link = "https://github.com/zacharia0/applicatiofy"
                />
            </div>

        </section>

    )
}

export default Projects