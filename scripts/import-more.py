import json,pathlib,urllib.request,concurrent.futures
items=json.loads(pathlib.Path('/tmp/undo-redo-research/media.json').read_text());out=pathlib.Path('public/assets/portfolio')
selected={19:'aureum-packaging',35:'trb-detail',41:'elora-detail',54:'ky-detail',63:'kaladhaara-detail',70:'sukhmani-detail',74:'giriraj-detail',80:'oer-detail',110:'wrong-room-detail',114:'tgdc-detail',117:'yara-detail',103:'khanna-detail',120:'fig-detail',44:'sensho-detail'}
def get(p):
 i,name=p;ext='.jpg' if items[i]['name'].endswith('.jpg') else '.png';data=urllib.request.urlopen(items[i]['url'],timeout=60).read();(out/(name+ext)).write_bytes(data);print(name,len(data))
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:list(pool.map(get,selected.items()))
