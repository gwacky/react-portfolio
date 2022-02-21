import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/profilePic.JPG')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
                I started my Web Developer journey in 2021 where I enrolled for a Coding Bootcamp offered by KU. Since accepting the challenge, I have been consistently mind-blown by the plethora of knowledge available at my fingertips.
                I am a full stack web developer looking to perfect practiced skills such as JavaScript, CSS, React, Express, MongoDB, Node, and others.
				</p>
            </div>
		</section>
	);
}

export default About;