import react from 'react';
import propTypes from 'prop-types'


function Greeting({name,age}){
    return(
        <div>
            <h1> hello, {name}</h1>
            <p>you are {age} years old</p>
        </div>
    );
}
Greeting.propTypes={
    name:propTypes.string.isRequired,
    age:propTypes.number.isRequired,
};
export default Greeting;