'use client';
import {useState} from 'react';
import Link from 'next/link';
import {StudioProject} from '@/data/portfolio';
import {Tilt,ProjectVideo} from './StudioMotion';
import {useStudioMotion} from './StudioShell';
export default function ProjectCard({project,index=0}:{project:StudioProject;index?:number}){const[hover,setHover]=useState(false);const enabled=useStudioMotion();return <Tilt className="project-card"><Link onPointerEnter={()=>setHover(true)} onPointerLeave={()=>setHover(false)} onFocus={()=>setHover(true)} onBlur={()=>setHover(false)} href={`/work/${project.slug}`} aria-label={`Explore ${project.title}`}><div className="project-image"><img src={project.image} alt={`${project.title} — ${project.tagline}`} loading="lazy" width="1600" height="900"/>{hover&&enabled&&project.video&&<ProjectVideo className="card-motion" src={`/assets/portfolio/${project.video}.mp4`} poster={project.image}/>}<span className="project-open">Explore project ↗</span><span className="project-number">{String(index+1).padStart(2,'0')}</span></div><div className="project-caption"><h3>{project.title}</h3><span>{project.category}</span><b aria-hidden>↗</b></div></Link></Tilt>}
