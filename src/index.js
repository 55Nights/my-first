import react from "react";
import reactDom from "react-dom";

function Booklist(){
    return(
        <section>
        <h1>heloooo</h1>
        <Author/>
        <BookImage/>
        </section>
    );   
 }
 const BookImage=()=> <img src="./booki.jpg/"/>
 const Author=()=> <p>Mary mum</p>
 const price=()=> <p>120</p>

 
 
reactDom.render(<Booklist/>,document.getElementById('root'));