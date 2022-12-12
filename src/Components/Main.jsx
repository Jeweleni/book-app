import {useState}from "react"
import Card from "./Card"
import axios from "axios";
const Main=()=>{
  const [search, setSearch]=useState('');
  const [bookData, setData]=useState([]);
  const searchBook=(evt)=>{
    if(evt.key==='Enter')
    {
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDls3bQLT_RbA5djy7oxQPM-G-Y-0N3LqY'+'&maxResults=40')
      .then(res=>setData(res.data.items))
      .catch(err=>console.log(err))
    }
  }
  return(
    <>
      <div className='header'>
        <div className='row1'>
          <h1>If fairytales were real<br/>I'd be the little match girl.</h1>
        </div>
        <div className='row2'>
          <h2> Find Your Book</h2>
          <div className='search'>
            <input type='text' placeholder='Enter Your Book Name'
              value={search} onChange={e=>setSearch(e.target.value)}
              onKeyPress={searchBook}/>
            <button><i className="fa-brands fa-searchengin"></i></button>
          </div>
          <img src='./images/childrenofbloodandbones2.jpg'alt=''/>
          <img src='./images/DearIjeawele.jpg'alt=''/>
          <img src='./images/markofathena.jpg'alt=''/>
          <img src='./images/heroesofolympus.jpg'alt=''/>
        </div>
      </div>
  
      <div className='container'>
        {
          <Card book={bookData}/>
        } 
      </div>
    </>
  )
}
export default Main;