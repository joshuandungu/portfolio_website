'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { projects } from '@/lib/constants';
import { staggerContainer, fadeInScale } from '@/lib/motion';
import { ProjectCard } from '@/components/project-card';

export function ProjectsPreview() {
	// Only show the first 3 projects in the preview
	const previewProjects = projects.slice(0, 3);

	return (
		<section className= "py-16 md:py-24 bg-muted/30" >
		<div className="container px-4" >
			<SectionHeader
					title="Featured Projects"
	description = "Explore some of my recent engineering projects and technical work."
		/>

		<motion.div
					variants={ staggerContainer() }
	initial = "hidden"
	whileInView = "show"
	viewport = {{ once: true }
}
className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
	>
{
	previewProjects.map((project, index) => (
		<ProjectCard key= { project.title } project = { project } index = { index } />
					))
}
	</motion.div>

	< div className = "flex justify-center mt-10" >
		<Button asChild >
		<Link href="/projects" >
			View All Projects < ArrowRight className = "ml-2 h-4 w-4" />
				</Link>
				</Button>
				</div>
				</div>
				</section>
	);
}