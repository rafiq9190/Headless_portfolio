import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"



const query = graphql`
{
  allStrapiJobs {
    nodes {
      company
      date
      description {
        id
        name
      }
      position
      strapiId
    }
  }
}
`
const Jobs = () => {
  const [value,setValue]=React.useState(0)

  const data= useStaticQuery(query)
  console.log('data is coming', data)
  const job=data.allStrapiJobs.nodes
  console.log('destrucing is', job)
  const {company, position, date,description}=job[value]
  console.log('btn testing',company,position,date,description)
  return <section className='section jobs'>
    <Title title="Expriences"/>
    <div className='jobs-center'>
{/* btn Container */}
<div className='btn-container'>
{
  job.map((item,index)=>{
    console.log('item si',item)
    return <button 
    key={item. strapiId} className={`job-btn ${index === value && 
    "active-btn "}`}
    onClick={()=>setValue(index)}
    >
      {item.company}</button>
  })
}
</div>




{/* job info */}
<article className="job-info">
  <h3>{position}</h3>
  <h4>{company}</h4>
  <p className='job-date'>{date}</p>
  {
    description.map((item)=>{
      return <div key={item.id} className='job-desc'>
        <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
        <p>{item.name}</p>

        </div>
    })
  }

</article>
    </div>
<Link  to="/about" className='btn center-btn'>More Info</Link>
  </section>
}

export default Jobs
