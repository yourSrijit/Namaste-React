import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        // How we can able to use State variable 
        this.state={
            count:0,
            userInfo:{
             name:"dummy",
             location:"default",
             avatar_url:"demo"
            },
        };
        console.log('Child constructor'); // this will print first cause constructor are called at the farst
    }
    async componentDidMount(){
        console.log('Child Component did mount 1'); // this will print last

        //used to API call as it caled at the last one insted of using useEffect we used componentDidMount

        const data=await fetch("https://api.github.com/users/yourSrijit");
        const json=await data.json();
        console.log(json);
        this.setState({
          userInfo:json,
        });

       this.timee=setInterval(()=>{
            console.log('Namaste React class');
        },1000);
    }
    
    componentWillUnmount(){
        clearInterval(this.timee);
        console.log('ComponentwillUnmount is invoked inside classbased componnet');
    }


    /////////////////
    render(){
        console.log('Child Rendering'); // this will print second
        const{ name, location,avatar_url}=this.state.userInfo;
        return(
            <div className="user-card">
                <h1>Using ClassBased Component</h1>
                <h2>Name:{name} (from git api)</h2>
               
                <img src={avatar_url}  style={{width:"230px",borderRadius:"50%"}}/>
                <p>Feel free to contact us on Instagram for geniun review</p>
                <h2>Count ={this.state.count}</h2>
                {/* How we can set the state variable  */}
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    });
                }}>Click to Increase</button>
            </div>
        );
    }
}
export default UserClass;

/*
 -------Mounting---*
  * Constructor
  * Render (dummy)
  *     <HTML (dummy) >
  *  ComponentDidMount()
  *  <API call>
  * <this.setState> ->State variable is updated
  * 
  * 
  * ----Updating
  *  Render( API Data)
  * <HTML (new API data>)
  * ComponentDidUpdate()


*/