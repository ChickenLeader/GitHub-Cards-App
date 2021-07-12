import React, { Component } from 'react';
import Son from './Child';
import ReactDOM from 'react-dom';
import '../src/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'


// const fullData = [{ name: "ahmed", company: "Facebook", age: 25, avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", id: 1 },
// { name: "sameh", company: "Twitter", age: 31, avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", id: 2 },
// { name: "ali", company: "Instagram", age: 19, avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", id: 3 }
// ]




const CardList = (props) => {
  console.log(props);
  return (
    <div>

      {props.profiles.map((profile) => <Card {...profile} key={profile.id} />)}

    </div>
  )
}


class Card extends Component {
  render() {
    const profile = this.props;
    return (
      <div className=" card p-3">
        <img src={profile.avatar_url} />
        <div className="info">
          <h5> <span>Name:</span> {profile.name}</h5>
          <h6> <span>Company:</span>{profile.company}</h6>
          <h6> <span>type:</span>{profile.type}</h6>
        </div>
      </div>
    )
  }
}

class Forma extends Component {
  state = {
    userName: ""
  }
  render() {

    const handleSubmit = async (event) => {
      event.preventDefault();

      const axios = require('axios');
      await axios.get(`https://api.github.com/users/${this.state.userName}`)
        
        .then(resp => { 
          this.props.submit(resp.data)
          this.setState({userName: ""})
        }
        ).catch(error => {window.alert("No username found!")});

    }
    return (
      <form className="form" onSubmit={handleSubmit} >
        <input
          className="form-control mb-3"

          value={this.state.userName}

          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="GitHub Username" required />

        <button className="btn btn-primary">Search</button>
      </form>
    )
  }
}

class App extends Component {

  state = {
    profiles: [],
  }

  render() {

    const addNewProfile = (x) => {
      this.setState({ profiles: [...this.state.profiles, x] })
    }
    return (
      <div className="appHeader">
        <header className="header">{this.props.title}</header>
        <Forma submit={addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    )
  }
}

































// class Forma extends React.Component{
//   render(){
//     return(
//       <form className="form">
//         <input type="text" placeholder="GitHub username" className="form-control mb-3" />
//         <button className="btn btn-primary mb-3">Add Card</button>
//       </form>      
//     )
//   }
// }

// const CardList = (props) => ( 

//   <div>

//     {props.profiles.map( (profile) => <Card {...profile} key={profile.id} />)}

//   </div>

// )

// class Card extends React.Component {
//   render(){
//     const profile = this.props;
//     return(
//       <div className="p-3">
//         <h5>{profile.name}</h5>
//         <h6>{profile.company}</h6>
//         <h6>{profile.age}</h6>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div className="appHeader">
//         <header className="header">{this.props.title}</header>
//         <Forma />
//         <CardList profiles = {fullData} />
//       </div>
//     );
//   }

// }

// ReactDOM.render(<App title="Github Search App"/>, document.getElementById('app'));



export default App;
















// class App extends Component{


  //   state = {
  //     name: 'Zoro',
  //     age: 16,
  //     job: 'accountantssss'
  //   }

  //   clickStart = () => {

  //       console.log(this.state.job);
  //   }

  //   clickEnd = () => {

  //     console.log(this.state.name);
  // }



  //   render(){
  //     return(
  //     <div className="App">
  //         <Son />
  //         <button onClick={this.clickStart}>Region</button>
  //         <button onClick={this.clickEnd}>Name</button>
  //     </div>
  //   );
  // }
  // }
