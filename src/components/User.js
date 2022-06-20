import './User.css';


const User = ({user, ...props}) => {
    console.log(props)
    return(
      <div className="user">
        <div><span className='keys'>user:</span> {user.name}</div>
        <div><span className='keys'>username:</span> {user.username}</div>
        <div><span className='keys'>email:</span> {user.email}</div>
        <div><span className='keys'>address:</span></div>
        <div><span className='keys'>st.</span> {user.address.street}</div>
        <div><span className='keys'>s.</span> {user.address.suite}</div>
        <div><span className='keys'>c.</span> {user.address.city}</div>
        <div><span className='keys'>zip</span> {user.address.zipcode}</div>      
       

      </div>
    )
  }

  export default User