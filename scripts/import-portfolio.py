import re,json,pathlib,urllib.request,concurrent.futures
source=pathlib.Path('/tmp/undo-redo-research/edit.html').read_text()
urls={k:json.loads('"'+v+'"') for k,v in re.findall(r'"(s-blob-v1-IMAGE-[^"]+)":"([^"]+)"',source)}
items=[]
for m in re.finditer(r'\[3,"([^"]+)",3,.*?"(s-blob-v1-IMAGE-[^"]+)".*?\[44,"\1","([^"]+)"',source):
 if m[2] in urls:items.append({'name':m[3],'url':urls[m[2]],'blob':m[2]})
pathlib.Path('/tmp/undo-redo-research/media.json').write_text(json.dumps(items,indent=2))
print('Found',len(items),'original media assets')
for i,x in enumerate(items):print(i,x['name'])
selected={6:'reaz',11:'reaz-detail',14:'aureum',20:'aureum-motion',22:'aureum-photo',23:'kasheda',27:'kasheda-motion',29:'trb',33:'trb-motion',36:'elora',38:'elora-motion',43:'sensho',44:'sensho-detail',49:'dosed-motion',50:'dosed-detail',52:'ky',57:'kaladhaara',59:'kaladhaara-motion',64:'sukhmani',69:'sukhmani-motion',71:'giriraj',77:'oer',78:'oer-motion',85:'nutty-gritties',88:'nutty-detail',91:'asian-paints',94:'asian-paints-chai',95:'asian-paints-dad',96:'fig',100:'khanna',109:'wrong-room',111:'tgdc',116:'yara',119:'fig-motion',125:'liberty',127:'liberty-detail',130:'edrio',132:'edrio-detail',134:'handbags-motion'}
out=pathlib.Path('public/assets/portfolio');out.mkdir(exist_ok=True)
def get(pair):
 i,name=pair;item=items[i];ext='.gif' if '.gif' in item['name'] else '.jpg' if '.jpg' in item['name'] else '.png';path=out/(name+ext)
 if not path.exists():
  with urllib.request.urlopen(item['url'],timeout=80) as r:path.write_bytes(r.read())
 return str(path),path.stat().st_size
if '--download' in __import__('sys').argv:
 with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
  for r in pool.map(get,selected.items()):print(r)
