import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import StudioShell from '@/components/StudioShell';
const dm = localFont({src:[{path:'../public/fonts/dm-sans-400.ttf',weight:'400'},{path:'../public/fonts/dm-sans-600.ttf',weight:'600'},{path:'../public/fonts/dm-sans-800.ttf',weight:'800'},{path:'../public/fonts/dm-sans-900.ttf',weight:'900'}],variable:'--font-dm',display:'swap'});
export const metadata: Metadata = {title:{default:'Studio Undo/Redo — A little undo. A lot of possibility.',template:'%s — Studio Undo/Redo'},description:'An independent creative studio in New Delhi. Strategy, branding, packaging, art direction and digital experiences by Vedita and Rechael Lakhotia.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en" className={dm.variable}><body><StudioShell>{children}</StudioShell></body></html>}
