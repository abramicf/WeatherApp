import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
//need to import the action handler into this container that talks to redux!

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState( { term: event.target.value } );
    console.log(event.target.value);
  }

  onFormSubmit(event) {
    //tells browser 'don't submit the form!
    event.preventDefault();

    //we need to go and fetch weather data!
    this.props.fetchWeather(this.state.term);
    this.setState( { term: ''} );
  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
           placeholder="Get a five day forecast in your favorite cities"
           className="form-control"
           //two commands below make it a controlled component
           value={this.state.term}
           onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
  //from this.props.fetchWeather
}

export default connect(null, mapDispatchToProps)(SearchBar);

//null means we're just not passing in the state, rather action handlers (which are the second argument!)

//dispatch ensures that the action handler flows into the middleware and the reducers!


//if you have a callback method that includes a reference to 'this', you can
  //wrap that callback in an arrow function inside the JSX
  //bind it in the constructor, as we've done above (as in: this.aFunction = this.aFunction.bind(this) )

//when enter is pressed while a form element child is entered in and a button is pressed or enter is pressed, the browser thinks they're trying to submit an http request and makes a post request to the server.  We don't want the form to submit EVERY TIME THE BUTTON IS HIT OR ENTER IS PRESSED!

//we use FORM because it gives us some functionality for free!  Cuts down on the number of event handlers we need!  Use it for any user input, just remember to put 'prevent default' in there!