import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './HomePage.scss'


function HomePage() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search);
    navigate('/Result', { state: { search } });
  };

  return (
    <>
      <div>
          <img src={Logo} className="logo react" alt="React logo" />
      </div>
      <h2>Welcome to the Art Institute of Chicago!</h2>
      <div className="card">
        <form onSubmit= {handleSubmit}>
            <input type="text" placeholder= "Search Some Art Work..." value ={search} onChange= {handleInputChange}/>
            <button>search</button>
        </form>
       
        <button onClick={() => setCount((count) => count + 1)}>
          Museum Visitors {count}
        </button>
      </div>
    </>
  )
}

export default HomePage
