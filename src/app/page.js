"use client";

import homeStyles from "@/app/page.module.css";

export default function Home() {
  return (
    <main>
      <nav className={homeStyles.nav}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="content" style={{
        width:'100%', backgroundColor:'beige', display:'flex', flexDirection:'row', alignContent: 'center', justifyContent:'space-evenly', paddingTop:'20px'
      }}>
        <div className="leftContent">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0IwZiPGK3EJdGaM6wU-gsQGBeDAXZ_xaz7w&s" style={{height:'400px'}}></img>
          <h2>Item One</h2>
          <p>$200</p>
        </div>
        <div className="rightContent">
          <img src="https://i5.walmartimages.com/asr/24d665f8-d419-47ac-bd7e-fa6549db11f8.d1c9bf17152098f64db4d14979790853.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" style={{height:'400px'}}></img>
          <h2>Item Two</h2>
          <p>$150</p>
        </div>
      </div>
    </main>
  );
}
