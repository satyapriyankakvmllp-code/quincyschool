"""Generates clearly-labelled placeholder JPGs for every image path used in the app.
Real images: just overwrite the same file names in public/images/. Run: python3 scripts/make-placeholders.py (needs Pillow)."""
import re, os, glob
from PIL import Image, ImageDraw, ImageFont
paths=set()
for f in glob.glob('src/**/*.js*',recursive=True):
    s=open(f).read()
    paths|=set(re.findall(r"'((?:hero|about|academics|activities|facilities|events)/[\w-]+\.jpg)'",s))
paths|=set(re.findall(r"'(gallery/[\w-]+\.jpg)'",open('src/data/content.js').read()))
# facilities + activities are built from templates in content.js
c=open('src/data/content.js').read()
fac=c.split('export const facilities')[1].split('export const activityGroups')[0]
act=c.split('export const activityGroups')[1].split('export const celebrations')[0]
paths|={f'facilities/{f}.jpg' for f in re.findall(r"\['[^']+', '([\w-]+)'\]",fac)}
paths|={f'activities/{f}.jpg' for f in re.findall(r"\['[^']+', '([\w-]+)'(?:, '[^']+')?\]",act)}
hues={'hero':(11,42,91),'about':(11,42,91),'academics':(46,158,107),'activities':(107,79,194),'facilities':(28,90,160),'events':(242,138,48),'gallery':(28,74,148)}
try: font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',44); small=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',28)
except Exception: font=small=ImageFont.load_default()
for p in sorted(paths):
    if os.path.exists(f'public/images/{p}'): continue  # never overwrite real photos
    d,name=p.split('/'); c=hues[d]; w,h=(1600,1067) if d!='hero' else (1600,1200)
    im=Image.new('RGB',(w,h)); px=ImageDraw.Draw(im)
    for y in range(h):
        t=y/h; px.line([(0,y),(w,y)],fill=tuple(int(c[i]*(1-t*.5)+255*t*.35) for i in range(3)))
    px.text((w//2,h//2-20),'PLACEHOLDER',fill='white',font=font,anchor='mm'); px.text((w//2,h//2+40),f'replace: public/images/{p}',fill=(255,235,180),font=small,anchor='mm')
    os.makedirs(f'public/images/{d}',exist_ok=True); im.save(f'public/images/{p}',quality=82)
print(len(paths),'placeholders')
