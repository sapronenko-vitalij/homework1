import User from './User'
import './Main.css';

const Main = (props) => {
    return(
      <div className="main">
        {props.arrUser.map(user => {
          return <User user = {user} key={user.id} />
        })}
        
      </div>
    )
  }

  export default Main