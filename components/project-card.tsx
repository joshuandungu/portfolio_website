'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { type Project } from '@/lib/constants';
import { fadeInScale } from '@/lib/motion';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div variants= { fadeInScale(index * 0.1) } className = "flex" >
            <Card className="flex flex-col h-full card-gradient" >
                <div className="relative h-48 w-full" >
                    <Image
						src={ project.image }
    alt = { project.title }
    fill
    className = "object-cover rounded-t-lg"
    sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        </div>
        < CardContent className = "flex-grow p-6" >
            <h3 className="font-bold text-xl mb-2" > { project.title } </h3>
                < p className = "text-muted-foreground mb-4" > { project.description } </p>
                    < div className = "flex flex-wrap gap-2" >
                    {
                        project.tags.map(tag => (
                            <Badge key= { tag } variant = "secondary" >
                            { tag }
                            </Badge>
                        ))
                    }
                        </div>
                        </CardContent>
                        < CardFooter className = "p-6 pt-0 gap-2" >
                        {
                            project.link && (
                                <Button size="sm" variant = "outline" asChild>
                            <Link href={ project.link } target = "_blank" rel = "noreferrer" >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                    Demo
                                    </Link>
                                    </Button>
					)
}
{
    project.repo && (
        <Button size="sm" variant = "outline" asChild >
            <Link href={ project.repo } target = "_blank" rel = "noreferrer" >
                <Github className="h-4 w-4 mr-2" />
                    Repo
                    </Link>
                    </Button>
					)
}
</CardFooter>
    </Card>
    </motion.div>
	);
}