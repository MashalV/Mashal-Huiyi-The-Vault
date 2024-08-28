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
    <section classname = "Homepage container">
      <div>
          <img src={Logo} className="logo react" alt="React logo" />
      </div>
      <h2 className='Homepage__title'>Welcome to the Vault!</h2>
      <div className="card">
        <form className="Search__form" onSubmit= {handleSubmit}>
            <input type="text" placeholder= "Search" value ={search} onChange= {handleInputChange}/>
            <button>search</button>
        </form>
       
        <button id='Visitor' onClick={() => setCount((count) => count + 1)}>
          Museum Visitors {count}
        </button>
      </div>
    </section>
  )
}

export default HomePage
