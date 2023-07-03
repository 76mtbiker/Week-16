import React from 'react';




export default function About() {
  return (
    <div>
      <h1>75 Day Challenge (back to back)</h1>
      <Button />
      <LoginForm />
      <Footer />
      <Navigation />
  
  
    </div>
  );
}


function LoginForm() {
  return (
    <div className="login-form">
      <h3 className="login-header">Log In</h3>
      <form>
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button type="submit" className="login-button">Log In</button>
      </form>
    </div>
  );
}
function Button() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}


function Footer() {
  return (
    <footer className="footer2">
         <footer className="footers"></footer>
  <nav>
    <p><i>I'm proud and happy of what i have learned in the Promineo Tech Bootcamp. I created my own 100 day challenge. The challenge consisted of doing coding everyday, along with go for a walk or Yoga.  I completely understand the imposter syndrome. I feel like i still have it with coding. I have been really challenged during this time in the Promineo Bootcamp. My goal is to improve at the material we learned, build my own website, apply and land a Entry level front end job.    </i> </p>
    <p>&copy; 2023 Baby Steps Created.</p>
    <a href="https://www.lifehack.org/762937/how-to-set-short-term-goals/">Short Term</a><br></br>
    <a href="https://learn.rumie.org/jR/bytes/differentiating-between-short-long-term-goals/">Long Term</a><br></br>
    <a href="https://www.lifehack.org/815579/dream-life">Dream life</a><br>
    </br>
  </nav>
</footer>
  );
}

function Navigation() {
  return (
    <nav>
      <nav className="navbar">
        <a href="https://abrotherabroad.com/75-hard-challenge-rules-pdf/">75 Day Challenge</a>
        <br />
        <a href="https://andyfrisella.com/blogs/realaf-podcast">Why a 75 Day Challenge?</a>
        <br />
        <a href="https://www.performancebike.com/">Make Coding a 75 day challenge</a>
        <br />
      </nav>
      <img
        src="https://www.lollydaskal.com/wp-content/uploads/2018/06/getty_478389113_970647970450091_99776.jpg"
        alt="Example Image"
        className="small-image"
      />
    </nav>
  );
}

