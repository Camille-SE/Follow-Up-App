import React from "react";


 const Home = () => {

    return (
      <div>
        <form className= 'homeform'>
          <h1 style={{textShadow: "antiquewhite 2px 2px"}}>What is Follow Up?</h1>
          <p>Simple: I remind you to remind them. </p>
          <p>You're able to input jobs that you've applied for and view them all on one screen, while also setting a reminder to 
            Follow Up on the status of your applications. </p>
          <h1 style={{textShadow: "antiquewhite 2px 2px"}}>Mission Statement</h1>
          <p>Applying for jobs can be tedious but with Follow Up, it doesn’t have to!</p>
          <p>With resourcefulness and determination, we can work together to give your application more consideration than the 
            competition and get you into that interview with the jobs you want. Keeping up with multiple job applications can be 
            a strenuous task. Let us join you in your job search by offering organization and peace of mind. We remind you to follow up with employers on job opportunities.</p> 
          <p>Why does this work? This is something that very few potential candidates do. While the competition waits by the phone, 
            Follow Up reminds you to pick it up and take initiative. Follow Up is your guide to a successful job search experience, 
            everytime.</p> 
          <p>Follow Up, reminding you to remind them.</p>
          <h1 style={{textShadow: "antiquewhite 2px 2px"}}>How do I use it?</h1>
          <p>Step 1: Click 'Form' and enter your job information</p>
          <p>Step 2: Enter the date you want a reminder to follow up with your position</p>
          <p>Step 3: Click 'Follow Up!'</p>
          <p>After that, you leave the rest to me!</p>
        </form>
      </div>
    );
}

document.body.style = 'background-color: rgb(223,230,236)';

export default Home;