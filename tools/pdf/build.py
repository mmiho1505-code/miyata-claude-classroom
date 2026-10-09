import sys
from playwright.sync_api import sync_playwright
src, out = sys.argv[1], sys.argv[2]
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 960, "height": 540})
    pg.goto("file://" + src)
    pg.evaluate("document.fonts.ready")
    pg.wait_for_timeout(800)
    over = pg.evaluate("""() => [...document.querySelectorAll('.slide')].map((s, i) => {
      const foot = s.querySelector('.foot'); const footTop = foot ? foot.getBoundingClientRect().top : s.getBoundingClientRect().bottom;
      let maxB = 0; s.querySelectorAll(':scope > *:not(.foot):not(.who)').forEach(el => { maxB = Math.max(maxB, el.getBoundingClientRect().bottom); });
      return { slide: i + 1, gap: Math.round(footTop - maxB), wide: s.scrollWidth > s.clientWidth };
    })""")
    fonts = pg.evaluate("[...document.fonts].filter(f => f.status === 'loaded').map(f => f.family + ' ' + f.weight).filter((v, i, a) => a.indexOf(v) === i)")
    pg.pdf(path=out, width="960px", height="540px", print_background=True, prefer_css_page_size=True)
    b.close()
print("fonts:", fonts)
for o in over: print(o)
