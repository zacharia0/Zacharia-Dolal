import styles from "./ContactStyles.module.css"
const Contact = ()=>{
    return(
        <section id = "contact" className={styles.container}>
            <h1 className="sectionTitle"></h1>
            <form action="https://formspree.io/f/xzzzkqkj" method="post">
                <div className="formGroup">
                    <label htmlFor="name" hidden>Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="email" hidden>Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="name" hidden>Message</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        required
                    />
                </div>
                <input className="hover btn"  type ="submit" value="Submit"/>
            </form>
        </section>
    )
}
export default Contact