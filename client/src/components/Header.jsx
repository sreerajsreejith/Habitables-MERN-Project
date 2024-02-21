import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className='bg-orange-500 shadow-md'>
      <div className='flex justify-between items-center max-w-7xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-white text-3xl'>Habitables</span>
            <span className='text-3xl text-gray-200'>-Real Estate</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-40  sm:w-60 '
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-6'>
          <Link to='/'>
            <li className='hidden font-semibold text-3xl sm:inline text-slate-100  hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden font-semibold text-3xl sm:inline text-slate-100 hover:underline'>
              About
            </li>
          </Link>
          <Link to='./profile'>
            {currentUser ? (
              <img
                className='rounded-full h-10 w-10 object-cover'
                src={currentUser.avatar}
                alt="profile"
              />
              
            ) : (
              <li className='text-3xl  text-slate-100 font-semibold hover:underline'> Sign In</li>
            )}
          </Link>
          
        </ul>
      </div>
    </header>
  );
}