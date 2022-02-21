import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Run Buddy',
			description:
				'A website that offers fitness training services.',
			image: 'run-buddy.jpg',
			technologies: [
				'HTML/CSS',
			],
			github: 'https://github.com/gwacky/run-buddy',
			deployed: 'https://gwacky.github.io/run-buddy/',
		},
		{
			name: 'Taskinator',
			description:
				'A clean and accurate way to keep track of pending and completed tasks.',
			image: 'taskinator.jpg',
			technologies: [
                'HTML/CSS', 
                'JavaScript',
            ],
			github: 'https://github.com/gwacky/taskinator',
			deployed: 'https://gwacky.github.io/taskinator/',
		},
		{
			name: 'Taskmaster Pro',
			description:
				'Revamped version of Taskinator where the user has the ability to delete tasks. Improved visual appearance.',
			image: 'taskmaster-pro.jpg',
			technologies: [
                'HTML/CSS',
				'JavaScript',
				'JQuery',
			],
			github: 'https://github.com/gwacky/taskmaster-pro',
			deployed: 'https://gwacky.github.io/taskmaster-pro/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'weather-dashboard.jpg',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/gwacky/weather-dashboard',
			deployed: 'https://gwacky.github.io/weather-dashboard/',
		},
		{
			name: 'Password Generator',
			description:
				'This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.',
			image: 'password-generator.jpg',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/gwacky/password-generator',
			deployed: 'https://gwacky.github.io/password-generator/',
		},
		{
			name: 'Note Taker',
			description:
				'This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.',
			image: 'note-taker-app.jpg',
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/gwacky/miniature-eureka',
			deployed: 'https://frozen-forest-68665.herokuapp.com/',
		},
	];

return (
    <section>
        <div className="center">
            <h1 className="page-header">My Portfolio</h1>
        </div>
        <div>
            <ul className="flex-row mobile-row">
                <li className="padding">
                    <Project projects={projects[0]}></Project>
                </li>
                <li className="padding">
                    <Project projects={projects[1]}></Project>
                </li>
            </ul>
            <ul className="flex-row mobile-row">
                <li className="padding">
                    <Project projects={projects[2]}></Project>
                </li>
                <li className="padding">
                    <Project projects={projects[3]}></Project>
                </li>
            </ul>
            <ul className="flex-row mobile-row">
                <li className="padding">
                    <Project projects={projects[4]}></Project>
                </li>
                <li className="padding">
                    <Project projects={projects[5]}></Project>
                </li>
            </ul>
        </div>
    </section>
);
}

export default Portfolio;