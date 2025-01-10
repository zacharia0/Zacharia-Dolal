
const SkillList = ({skillList,checkMarkIcon,})=>{
    return(

        <span>
            <div>{skillList.map((skill,index) =>(

                <p key ={index}>
                    <img src={checkMarkIcon} alt=""/>
                    {skill}
                    <div>

                        {index + 1 === 3 || index+ 1 === 6 || index + 1 === 9 ? <hr/>:""}
                    </div>
                </p>
            )) } </div>
        </span>

    )
}
export default SkillList