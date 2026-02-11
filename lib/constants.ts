export const siteConfig = {
	name: 'Engineering Portfolio',
	description:
		'A professional portfolio website template for engineering students.',
	profileImage: '/assets/profile/profile.jpg',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Skills',
			href: '/skills',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
		{
			title: 'Certificates',
			href: '/certificates',
		},
		{
			title: 'Blog',
			href: '/blog',
		},
		{
			title: 'Contact',
			href: '/contact',
		},
	],
	links: {
		github: 'https://github.com/joshuandungu',
		linkedin: 'https://linkedin.com/in/yourusername',
		twitter: 'https://twitter.com/yourusername',
		facebook: 'https://facebook.com/yourusername',
		instagram: 'https://instagram.com/yourusername',
		whatsapp: 'https://wa.me/yourphonenumber',
		email: 'mailto:youremail@example.com',
		phone: 'tel:+1234567890',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Modern WiFi Configuration and Installation',
		company: 'Softlife Networks',
		location: 'Kenya',
		startDate: '2026',
		endDate: 'Ongoing',
		description: [
			'Engaged in the configuration and installation of modern WiFi networks.',
			'Provided network solutions and support for various clients.',
		],
		technologies: ['Network Configuration', 'Wireless Installation', 'Troubleshooting'],
	},
	{
		title: 'Engineering Intern',
		company: 'Tech Company',
		location: 'City, Country',
		startDate: 'May 2023',
		endDate: 'Aug 2023',
		description: [
			'Worked on developing and testing software components for embedded systems',
			'Collaborated with senior engineers on project planning and execution',
			'Implemented test procedures for quality assurance',
		],
		technologies: ['C++', 'Python', 'MATLAB', 'Git'],
	},
	{
		title: 'Research Assistant',
		company: 'University Lab',
		location: 'City, Country',
		startDate: 'Jan 2023',
		endDate: 'Apr 2023',
		description: [
			'Assisted in research focusing on advanced materials for mechanical applications',
			'Conducted literature reviews and compiled research findings',
			'Performed data analysis and visualization of experimental results',
		],
		technologies: ['MATLAB', 'CAD', 'Data Analysis', 'Python'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Video Lending Platform',
		description: 'Created a video lending platform using React and Node.js.',
		image: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg',
		tags: ['React', 'Node.js', 'Video Lending'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Product Price Comparison Website',
		description: 'Created a product price comparison website using React, Tailwind CSS, and Node.js.',
		image: 'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg',
		tags: ['React', 'Tailwind CSS', 'Node.js', 'Ecommerce'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Weather Website',
		description: 'Created a weather website using React to display current weather conditions.',
		image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
		tags: ['React', 'Weather', 'API'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Photographer Locator Website',
		description: 'Created a photographer locator website using HTML, CSS, JavaScript, and PHP.',
		image: 'https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg',
		tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Online Car Spare Shop',
		description:
			'Developed an online car spare shop for spare shops to market and sell for free using HTML, CSS, JavaScript, and PHP.',
		image: 'https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg',
		tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Entertainment Hub',
		description:
			'Developed a free-to-use entertainment website for searching and watching TV channels and the latest movies.',
		image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg',
		tags: ['Streaming', 'TV', 'Movies', 'Web Development'],
		link: '#',
		repo: 'https://github.com/joshuandungu/movies-master.git',
	},
	{
		title: 'Online Gas Order and Delivery App',
		description:
			'Final year software project: An online gas ordering and delivery application built using Flutter for frontend and Node.js for backend, integrated with payment services like M-Pesa and Google Pay.',
		image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
		tags: ['Flutter', 'Node.js', 'M-Pesa', 'Google Pay'],
		link: '#',
		repo: 'https://github.com/joshuandungu/GAS_ECCOMERCE_APPLICATION-main.git',
	},
	{
		title: 'Campus Multi-vendor Ecommerce',
		description:
			'Built a multi-vendor online ecommerce website with React for campus students to buy and sell with ease. Integrated with M-Pesa for online payments.',
		image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
		tags: ['React', 'M-Pesa', 'Ecommerce', 'Web Development'],
		link: '#',
		repo: 'https://github.com/joshuandungu/Multi_Vendor_Shop.git',
	},
	{
		title: 'Smart Home Automation System',
		description:
			'Designed and implemented a smart home automation system using IoT technologies to control lighting, temperature, and security features.',
		image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
		tags: ['IoT', 'Arduino', 'C++', 'Mobile App'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Structural Analysis Software',
		description:
			'Developed software for structural analysis of beams and trusses using numerical methods and visualization techniques.',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: ['MATLAB', 'Python', 'FEA', 'Structural Engineering'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Renewable Energy Monitoring',
		description:
			'Created a system to monitor and analyze performance of solar panels and wind turbines for optimal energy production.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['Data Analysis', 'IoT', 'Renewable Energy', 'Visualization'],
		link: '#',
		repo: '#',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor of Science in Software Engineering',
		field: 'Software Engineering',
		institution: 'University of Eastern African, Baraton',
		location: 'Baraton, Kenya',
		startDate: '2021',
		endDate: '2025',
		gpa: '3.3/4.0 (Second Class Upper)',
		achievements: [
			'ALX Software Engineering Certification',
			'BITSA Hackathon Participant',
			'Engaged in University Computer Clinic and Repair',
			'Provided Graphic Design services for school and clients',
		],
	},
	{
		degree: 'KCSE',
		field: 'High School Education',
		institution: 'Nyandarua High School',
		location: 'Nyandarua, Kenya',
		startDate: '2016',
		endDate: '2019',
		gpa: 'B (Plain)',
		achievements: ['Achieved a mean grade of B (Plain) in the Kenya Certificate of Secondary Education.'],
	},
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'ALX Software Engineering',
		issuer: 'ALX Africa',
		date: '2024',
		id: 'ALX-SE-CERT',
		url: '#',
		pdf: '#',
	},
	{
		title: 'Engineering Professional Certification',
		issuer: 'Professional Engineering Association',
		date: 'Nov 2023',
		id: 'CERT-12345',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'CAD Design Specialist',
		issuer: 'Autodesk',
		date: 'Jun 2023',
		id: 'CERT-67890',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'Project Management Fundamentals',
		issuer: 'Project Management Institute',
		date: 'Mar 2023',
		id: 'CERT-24680',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// Technical Skills
	{ name: 'Mechanical Design', level: 9, category: 'technical' },
	{ name: 'Structural Analysis', level: 8, category: 'technical' },
	{ name: 'Thermodynamics', level: 7, category: 'technical' },
	{ name: 'Control Systems', level: 8, category: 'technical' },
	{ name: 'Circuit Design', level: 6, category: 'technical' },

	// Software Skills
	{ name: 'MATLAB', level: 9, category: 'software' },
	{ name: 'AutoCAD', level: 8, category: 'software' },
	{ name: 'SolidWorks', level: 9, category: 'software' },
	{ name: 'Python', level: 7, category: 'software' },
	{ name: 'C++', level: 6, category: 'software' },
	{ name: 'ANSYS', level: 8, category: 'software' },

	// Soft Skills
	{ name: 'Problem Solving', level: 9, category: 'soft' },
	{ name: 'Team Leadership', level: 8, category: 'soft' },
	{ name: 'Project Management', level: 7, category: 'soft' },
	{ name: 'Technical Writing', level: 8, category: 'soft' },
	{ name: 'Presentation', level: 7, category: 'soft' },

	// Languages
	{ name: 'English', level: 10, category: 'language' },
	{ name: 'Spanish', level: 6, category: 'language' },
	{ name: 'French', level: 4, category: 'language' },
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [
	{
		title: 'Advances in Renewable Energy Technologies',
		excerpt: 'Exploring the latest innovations in renewable energy and their impact on sustainable development.',
		date: 'Mar 15, 2024',
		author: 'Joshua Gatehi Ndung\'u',
		image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
		slug: 'advances-in-renewable-energy',
	},
	{
		title: 'The Future of Robotics in Manufacturing',
		excerpt: 'How robotics and automation are revolutionizing the manufacturing industry and creating new opportunities.',
		date: 'Feb 22, 2024',
		author: 'Joshua Gatehi Ndung\'u',
		image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
		slug: 'future-of-robotics-manufacturing',
	},
	{
		title: 'Sustainable Building Materials in Modern Construction',
		excerpt: 'An analysis of eco-friendly building materials and their applications in contemporary architecture.',
		date: 'Jan 10, 2024',
		author: 'Joshua Gatehi Ndung\'u',
		image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
		slug: 'sustainable-building-materials',
	},
];