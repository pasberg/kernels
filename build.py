"""Bygger index.html av mallen (karnor.html) och innehållet i src/.

Kör:  python3 build.py
"""
import glob
import os

base = os.path.dirname(os.path.abspath(__file__))


def read(path):
    with open(path, encoding="utf-8") as f:
        return f.read()


tpl = read(os.path.join(base, "karnor.html"))
ideas = "".join(read(f) for f in sorted(glob.glob(os.path.join(base, "src", "ideas_*.js"))))
big = "".join(read(f) for f in sorted(glob.glob(os.path.join(base, "src", "big_*.js"))))
art = "".join(read(f) for f in sorted(glob.glob(os.path.join(base, "src", "art_*.js"))))
deep = "".join(read(f) for f in sorted(glob.glob(os.path.join(base, "src", "deep_*.js"))))

out = tpl.replace("//@@NEWIDEAS@@", ideas).replace("//@@DEEP@@", deep).replace("//@@BIG@@", big).replace("//@@ART@@", art)
assert "@@" not in out, "Platshållare kvar i mallen"

page = (
    '<!doctype html>\n<html lang="sv">\n<head>\n'
    '<meta charset="utf-8">\n'
    '<meta name="viewport" content="width=device-width, initial-scale=1">\n'
    + out + "\n</html>\n"
)
with open(os.path.join(base, "index.html"), "w", encoding="utf-8") as f:
    f.write(page)
print("Byggde index.html (%d byte)" % len(page.encode("utf-8")))
