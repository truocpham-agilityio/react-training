import { Link } from 'react-router-dom'
import packageJson from '../../package.json'

const About = () => {
  return (
    <div>
      <h4>{`Version ${packageJson.version}`}</h4>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default About
