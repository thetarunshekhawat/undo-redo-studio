'use client';
import {useState} from 'react';
import {AnimatePresence,motion} from 'framer-motion';
import {services} from '@/data/studio';
export default function ServiceList(){const[active,setActive]=useState<number|null>(0);return <div className="service-list">{services.map((service,i)=><div className={`service-row ${active===i?'expanded':''}`} key={service.name}><button aria-expanded={active===i} aria-controls={`service-${i}`} onClick={()=>setActive(active===i?null:i)}><small>{service.number}</small><span>{service.name}</span><b>{active===i?'−':'+'}</b></button><AnimatePresence initial={false}>{active===i&&<motion.div id={`service-${i}`} initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.4}}><div className="service-content"><p>{service.description}</p><ul>{service.items.map(item=><li key={item}>{item}</li>)}</ul></div></motion.div>}</AnimatePresence></div>)}</div>}
