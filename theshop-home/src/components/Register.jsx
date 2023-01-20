import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'



const Register =() =>{


    const [user, setUser] = useState({
        username : "",
        email : "",
        password : ""
    });

    //Inputs
    const handleInput = (event) =>{
        let name = event.target.name;
        let value = event.target.value;


        setUser({...user, [name]:value});
    }

//Handle Submit

const handleSubmit = async(event) =>{
    event.preventDefault();
    //Store Object Data
    const{username,email, password} = user;
    try {
        const res = await fetch('/register', {
            method : "POST",
            mode : 'cors',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                username,email, password
            })
        })

        if(res.status === 400 || !res){
            window.alert("Use different credentials. Already in use")
        }else{
            window.alert("Sucessfull Registration ");
            window.History.pushState('/login');
        }
        
    } catch (error) {
        console.log(error);
        
    }
}

  return (
    <div>
    <Navbar/>
            <section class="background-radial-gradient overflow-hidden">

  <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div class="row gx-lg-5 align-items-center mb-5">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <h1 class="my-5 display-5 fw-bold ls-tight">
          The best offer <br />
          <span>for your business</span>
        </h1>
        <p class="mb-4 opacity-70">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
        </p>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

        <div class="card bg-glass">
          <div class="card-body px-4 py-5 px-md-5">
            <form onSubmit={handleSubmit} method="POST">
 
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example1" class="form-control" />
                    <label class="form-label" for="form3Example1">Name</label>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input 
                    type="text" 
                    id="form3Example2" 
                    class="form-control"
                    name="username"
                    value={user.username}
                    onChange={handleInput}
                     />
                    <label class="form-label" for="form3Example2">Last name</label>
                  </div>
                </div>
              </div>

              <div class="form-outline mb-4">
                <input 
                    type="email"
                    id="form3Example3" 
                    class="form-control"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                 />
                <label class="form-label" for="form3Example3">Email address</label>
              </div>

              <div class="form-outline mb-4">
                <input 
                    type="password" 
                    id="form3Example4" 
                    class="form-control" 
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    />
                <label class="form-label" for="form3Example4">Password</label>
              </div>

              <div class="form-check d-flex justify-content-center mb-4">
                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                <label class="form-check-label" for="form2Example33">
                  Subscribe to our newsletter
                </label>
              </div>

              <button type="submit" class="btn btn-primary btn-block mb-4">
                Sign up
              </button>

              <div class="text-center">
                <p>or sign up with:</p>
                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-github"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            
    </div>
  )
}

export default Register