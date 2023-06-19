import {Component} from "react";
class Body extends Component
{
    constructor(props)
    {
        super(props);
        this.state={word_count:0}
    }
    handleChange=(e)=>{
        let changes = e.target.value;
        
        let count=(change)=>{
            if (changes.length === 0) {
                return 0;
              } else {
                changes = changes.trim(); 
                let wordCount = changes.split(/\s+/).length; 
                return wordCount;
              }
              
            
        }

        this.setState({word_count: count(changes)});
    }
    render()
    {
        return(
            <div>
                <textarea rows="4" cols="42" onChange={this.handleChange} style={{border:"2px solid black", borderRadius:"5px"}}></textarea>
                <p>Word count: {this.state.word_count}</p>
            </div>
        )
    }
}
export default Body;