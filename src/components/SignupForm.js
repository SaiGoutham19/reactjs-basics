import { useState } from "react";

function SignupForm(){
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[submitted,setSubmitted]=useState(false);

    function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
   }

    return(
        <div>
            {submitted ?(
                <h2> welcome,{username} !</h2>
            ):(
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Username:
                        </label>
                        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)}/>

                        </div>
                        <div>
                            <label>
                                password:
                                </label>
                                <input type ="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <button type="submit">Sign up</button>
                </form>
            )}
        </div>
    );

    

}
export default SignupForm;