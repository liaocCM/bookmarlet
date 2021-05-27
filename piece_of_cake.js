// devtools console
(function(){
  const info = ['廖建銘', 'Tex Liao', '36'];
  const ff = (regex) => Array.from(document.querySelectorAll('span')).filter(e => regex.test(e.innerText)).forEach((e, i) => !(i % 2) && e.children[0].click());
  document.querySelectorAll('input').forEach((e, i) => e.value = info[i]);
  [/^2021\//,/R&D/,/在家工作/,/無不適/,/否/].forEach(e => ff(e));
  document.querySelectorAll('button')[0].click();  
})()

// bookmarlet full version
javascript:(function(){
  const info = ['廖建銘', 'Tex Liao', '36'];
  const ff = (regex) => Array.from(document.querySelectorAll('span')).filter(e => regex.test(e.innerText)).forEach((e, i) => !(i % 2) && e.children[0].click());
  document.querySelectorAll('input').forEach((e, i) => e.value = info[i]);
  [/^2021\//,/R&D/,/在家工作/,/無不適/,/否/].forEach(e => ff(e));
  document.querySelectorAll('button')[0].click();  
})()

// bookmarlet oneline version
javascript:!function(){const e=["廖建銘","Tex Liao","36"];document.querySelectorAll("input").forEach((c,r)=>c.value=e[r]),[/^2021\//,/R&D/,/在家工作/,/無不適/,/否/].forEach(e=>(e=>Array.from(document.querySelectorAll("span")).filter(c=>e.test(c.innerText)).forEach((e,c)=>!(c%2)&&e.children[0].click()))(e)),document.querySelectorAll("button")[0].click()}();
