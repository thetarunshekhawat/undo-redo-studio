import type {Metadata} from 'next';
import WorkArchive from '@/components/WorkArchive';
export const metadata:Metadata={title:'Our work'};
export default function Work(){return <main id="main"><section className="page-hero"><span className="eyebrow">THE PROOF IS IN THE PROJECTS</span><h1>Different worlds.<br/>Same <i>curiosity.</i></h1><p>A selection of brands we’ve imagined, shaped and brought to life. Take a look around. Get a little curious.</p></section><WorkArchive/></main>}
