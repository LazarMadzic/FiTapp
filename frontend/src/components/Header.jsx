import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
//import { logout, reset } from '../features/auth/authSlice'

function Header() {
 // const navigate = useNavigate()
  //const dispatch = useDispatch()
  //const { user } = useSelector((state) => state.auth)

  //const onLogout = () => {
  //  dispatch(logout())
 //   dispatch(reset())
  //  navigate('/')
 // }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>
        <img width="30" height="30" padding="0" src={require('..\\frontend\\src\\images\\logo.png')} alt='FiT app' />
        
        </Link>
        </div>
        <ul>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>

        </ul>
      
    </header>
  )
}

export default Header