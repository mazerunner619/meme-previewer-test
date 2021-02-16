import React from 'react'
import Header from './header.js'
import Memer from './memer.js'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      topT : "" , bottomT : "" , imageURL : "" 
    }
    this.handleChange = this.handleChange.bind(this)
  }



  handleChange(event){
    const name = event.target.name
    const value = event.target.value
   this.setState({
     [name] : value
   })
   }


  render(){
  return(
         <div>
           <Header/>
           <p className = "note"><b>NOTE : </b>paste the image URL to laod picture</p>
           <form>
           <input  className = "addr" placeholder = "paste image-url" type =  "text" name = "imageURL" value = {this.state.imageURL} onChange = {this.handleChange}/>
            <input className = "dmns" placeholder = "enter top-text" type =  "text" name = "topT" value = {this.state.topT} onChange = {this.handleChange}/>
           <input className = "dmns"placeholder = "enter bottom-text" type =  "text" name = "bottomT" value = {this.state.bottomT} onChange = {this.handleChange}/>
           </form>

           <Memer imageURL = {this.state.imageURL} toptext = {this.state.topT} bottomtext = {this.state.bottomT}/>
           <footer><p className = "author"><tt>by Atif</tt></p></footer>
           </div>
          )
        }
     }

export default App;
