import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react/jsx-runtime';
import Form from './components/Form';
import Header from './components/Header';
import Products from './components/products/Products';
import Button from './components/Button';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
import axios from 'axios';
import Middle from './components/Middle';
function App() {

  // fetch("https://dummyjson.com/users").then((res)=>console.log(res.json())).then(data=>console.log(data)).catch(err=>console.log(err));

  const [result,setresult] = useState([]);
  const shouldlog = useRef(true);

  useEffect(()=>{
    axios.get("https://dummyjson.com/users").then(res=>setresult(res.data.users));
  })

  useEffect(()=>{
    let listener = ()=>{
      console.log("clicked");

    };

    if(shouldlog.current){
      shouldlog.current=false;
document.addEventListener("click",listener)
    }
    
    
   /*  return ()=>{
      document.removeEventListener("click",listener);
    } */
  })

/*   useEffect(()=>{

    const getdata = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setresult(data.users);
    }
    catch (err) {
      console.log(err);

    }

} ;  getdata();
  },[]) */

  

  const products = [
    { title: "pizza", desc: "this is a pizza", price: 120, rate: 4.2 },
    { title: "laptop", desc: "this is laptop", price: 500, rate: 4.5 },
    { title: "mobile", desc: "this is mobile", price: 350, rate: 4.0 }];


  // const [count, setCount] = useState(0);

  // const [name, setName] = useState("fed");

  // const [user,setUser] = useState({firstname:"fady",lastname:"magdy"});


  // const [inp,setinp]= useState("fed");

  // const [user, setuser] = useState("");

  /*  function say(){
     alert("hello");
   } */

  /*   const say2 = (name)=>{
     alert(`hello ${name}`);
   }  */

  return (
    <>
      <Header />
      <Form />
      <Products data={products} />
<Middle />
<ul>
{result.slice(0,3).map((user)=>(
   <li key={user.id}><h3>{user.email}</h3></li>)

)}
</ul>



      {/* <form onSubmit={(e) => {
        e.preventDefault();
        if (user == "") { alert("please fill username") }
        else {
          console.log(user);
        }

      }}>

        <label htmlFor='user'>username : </label>
        <input type='text' name='nm' id='user' onChange={(e) => setuser(e.target.value)} />
        <br></br>
        <label htmlFor='ps'>password : </label>
        <input type='password' name='pass' id='ps' />

        <input type='submit' />
      </form> */}


      {/* <input type='text' placeholder='your name' value={inp} onChange={(e)=>setinp(e.target.value)} />
<h3>{inp}</h3> */}

      {/* <h2>hello {user.firstname}</h2> */}
      {/* <h2>hello {user.lastname}</h2> */}

      {/* <button onClick={()=>setUser({firstname:"fady 2",lastname:"magdy 2"})}>change first name</button> */}

      {/* <button onClick={()=>setUser((prev)=>{
  return {...prev,lastname:"magdy old"}
})}>change last name only</button> */}



      {/* <p>Hello {name}</p> */}
      {/* <button onClick={()=>setName("shed")}>change name</button> */}
      {/*   <p>Count : {count}</p>

      <button onClick={()=>setCount(()=>count+1)}>Add</button>

      <button onClick={()=>setCount((prev) => {
        return prev-1;
      })}>Reduce</button>

      <button onClick={()=>setCount(0)}>Reset</button> */}


      {/* <button onClick={()=>document.getElementById("f").innerHTML="hello fed"}>Click</button> */}
      {/* <h2 id='f'></h2> */}

      {/* <Button text="click 1 " click={()=>{console.log("btn 1")}}/> */}
      {/* <Button click={()=>{console.log("btn 2")}}><span>test btn 2</span></Button> */}


    </>
  );
}

export default App;
