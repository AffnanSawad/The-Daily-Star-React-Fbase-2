import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
           
      <img src={logo} alt="" />

      <p className='font-bold text-xl'>Journalism without Fear and Favour</p>

      <p className='text-2xl font-poppins' >{moment().format('MMMM Do YYYY, h:mm:ss a')} </p>

        </div>
    );
};

export default Header;