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
						style={{ display: 'inline-block', fontSize: 20}}
					/>
				</div>

				<div className="intro">
					 Score rules 比赛让分规则
				</div>

				<div className="rules" >
					<div>
						10:0  Women's Double  🆚  Men's Double 
					</div>

					<div>
						5:0  Women's Double  🆚  Mix Double   
					</div>

					<div>
						5:0  Mix Double  🆚  Men's Double  
					</div>

					<div>
						0:0   Men's Double  🆚  Men's Double  
					</div>

					<div>
						0:0  Mix Double  🆚  Mix Double 
					</div>

					<div>
						0:0  Women's Double  🆚  Women's Double 
					</div>

				</div>
				<div class="ruleInChinese">
					<div>
						10:0  女双  🆚  男双 
					</div>

					<div>
						5:0   女双  🆚  混双  
					</div>

					<div>
						5:0  混双  🆚  男双  
					</div>

					<div>
						0:0  男双  🆚  男双 
					</div>

					<div>
						0:0  混双  🆚  混双 
					</div>

					<div>
						0:0  女双  🆚  女双
					</div>

				</div>
		
			</div>
		);
	};

export default Home

