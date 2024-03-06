import React, { Component} from "react";
import { TypeAnimation } from 'react-type-animation';
import './home.css'

const Home = () => {
	
		return (		
			<div className="body">
				
				<div className="welcomeMsg">
					<TypeAnimation
						sequence={[
							'Welcome to our weekly 🏸 Iplay Tuesday Night Badminton Event!',
							() => {
							console.log('Sequence completed');
							},
						]}
						wrapper="span"
						cursor={true}
						repeat={0}
						style={{ display: 'inline-block', fontSize: 12, paddingTop: 10}}
					/>
				</div>

				<div className="intro">
					 <div>Doubles Rule </div>				
				</div>

				<div className="rules" >
					<div>
						Best of 3 games of 21 points <br/><br/>
					</div>
					<div>
						10:0  Women's Double  🆚  Men's Double 
					</div>

					<div>
						5:0  Women's Double  🆚  Mix Double   
					</div>

					<div>
						5:0  Mix Double  🆚  Men's Double  
					</div>

				</div>
				

				<div className="intro">
					 Singles Rule (in case of monthly tie)<br/>
				</div>

				<div className="rules" >
				<div>
						1 game of 11 points<br/><br/>
					</div>

					<div>
						6:0  Women's Single  🆚  Men's Single 
					</div>
				</div>
				
			</div>
		);
	};

export default Home

