import React from "react";
import './App.css'
import ListItemS  from './listItems.js';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';


library.add(faTrash);
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:"",
                key:""
            }
            }
            this.handleinput=this.handleinput.bind(this);
            this.addItem=this.addItem.bind(this);
            this.deleteItem=this.deleteItem.bind(this);
            this.setUpdate=this.setUpdate.bind(this);
    }
    handleinput(e){
        this.setState({
            currentItem:{
                text:e.target.value,
                key:Date.now()
            }
        });

    }
    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem.text!==""){
            const newItems=[...this.state.items,newItem];
            this.setState({
                items:newItems,
                currentItem:{
                    text:"",
                    key:""
                }

            }

            );
        }
    }
    deleteItem(key){
        const filtereditems = this.state.items.filter(item =>
            item.key!==key); 
            this.setState({
                items:filtereditems
            });
    }
    setUpdate(text,key){
        const items = this.state.items;
        items.map(item =>{
            if(item.key===key){
                item.text=text;

            }
        });
            this.setState({
                items: items
            });
    }



    render(){
        return(
            <div className="App">
           <header>
               <form id="to-do-form" onSubmit={this.addItem}>
                   <input type="text" placeholder="Type Here"
                   value={this.state.currentItem.text}
                   onChange={this.handleinput}/>
                   <button type="submit">Add</button>
                   <div>You can Edit the list of your Choice by typing directly</div>

               </form>
           </header>
           <ListItemS items={this.state.items} 
            deleteItems={this.deleteItem}
            setUpdate={this.setUpdate}></ListItemS>
          
           </div>
        )
    }
}
export default App;