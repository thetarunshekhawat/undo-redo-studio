import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import {execFileSync} from 'node:child_process';
const dir='public/assets/portfolio';
await fs.mkdir('/tmp/undo-redo-research/originals',{recursive:true});
for(const name of await fs.readdir(dir)){
 const src=path.join(dir,name);if(!/\.(png|jpg|gif)$/.test(name))continue;
 const base=name.replace(/\.[^.]+$/,'');
 await sharp(src).resize({width:1600,withoutEnlargement:true}).webp({quality:85}).toFile(path.join(dir,base+'.webp'));
 if(name.endsWith('.gif'))execFileSync('ffmpeg',['-hide_banner','-loglevel','error','-y','-i',src,'-vf','scale=1280:-2,fps=24','-c:v','libx264','-pix_fmt','yuv420p','-crf','24','-movflags','+faststart','-an',path.join(dir,base+'.mp4')]);
 await fs.rename(src,path.join('/tmp/undo-redo-research/originals',name));
}
const names=(await fs.readdir(dir)).filter(x=>x.endsWith('.webp')&&!x.includes('motion')&&!x.includes('detail'));
const thumbs=await Promise.all(names.map(async(name,i)=>({input:await sharp(path.join(dir,name)).resize(280,158,{fit:'contain',background:'#fff'}).extend({bottom:25,background:'#fff'}).composite([{input:Buffer.from(`<svg width="280" height="25"><text x="6" y="18" font-size="14">${name}</text></svg>`),top:158,left:0}]).png().toBuffer(),left:(i%4)*280,top:Math.floor(i/4)*183})));
await sharp({create:{width:1120,height:Math.ceil(names.length/4)*183,channels:3,background:'#fff'}}).composite(thumbs).jpeg().toFile('/tmp/undo-redo-research/contact-sheet.jpg');
console.log('Optimized',names.length,'covers and all motion assets');
