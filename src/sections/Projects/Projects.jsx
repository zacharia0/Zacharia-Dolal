import styles from "./ProjectsStyles.module.css"
import Viberr from "../../assets/viberr.png"
import hipsster from "../../assets/hipsster.png"
import ProjectCard from "../../common/ProjectCard.jsx";
const Projects = () => {

    return (
        <section id ="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>

                <ProjectCard
                    src ={Viberr}
                    h3 = "Care Log Hub"
                    p = "Group Home Observation App"
                    link = "https://github.com/zacharia0/careLogHub"
                />

                <ProjectCard
                    src ={hipsster}
                    h3 = "applicatiofy"
                    p = "Job application tracking App"
                    link = "https://github.com/zacharia0/applicatiofy"
                />
            </div>

        </section>

    )
}

export default Projects