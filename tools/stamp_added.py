"""Fyller src/added_0.js med datum för nya kort (idag), så att varje kort visar när det lades till.

Kör före commit:  python3 tools/stamp_added.py [ÅÅÅÅ-MM-DD]
Befintliga datum rörs aldrig. Ids hittas i karnor.html, src/ideas_*.js och src/big_*.js (även stora kärnor).
"""
import datetime, glob, os, re, sys
base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
path = os.path.join(base, "src", "added_0.js")
cur = {}
if os.path.exists(path):
    cur = dict(re.findall(r'ADDED\["([^"]+)"\]="([^"]+)"', open(path, encoding="utf-8").read()))
ids = []
for f in [os.path.join(base, "karnor.html")] + sorted(glob.glob(os.path.join(base, "src", "ideas_*.js"))) + sorted(glob.glob(os.path.join(base, "src", "big_*.js"))):
    ids += re.findall(r'\bid:\s*"([A-Za-z]{1,3}\d{1,3})"', open(f, encoding="utf-8").read())
today = sys.argv[1] if len(sys.argv) > 1 else datetime.date.today().isoformat()
new = [i for i in ids if i not in cur]
for i in new:
    cur[i] = today
keys = sorted(cur, key=lambda k: (cur[k], re.sub(r"\d", "", k), int(re.sub(r"\D", "", k))))
open(path, "w", encoding="utf-8").write("/* Datum då varje småkärna lades till. Fylls av tools/stamp_added.py. */\n" + "".join('ADDED["%s"]="%s";\n' % (k, cur[k]) for k in keys))
print("nya:", len(new), "totalt:", len(cur))
