// full version
javascript:(function(){
  var info = ['廖建銘', 'Tex Liao', '36.1'];
  document.getElementsByTagName('input').forEach((e, i) => {e.value = info[i]});
  [/^2021\//,/R&D/,/在家工作/,/無不適/,/否/].forEach(e => ff(e));
  document.getElementsByTagName('button')[0].click();
  function ff(regex){
    return Array.from(document.querySelectorAll('span')).filter(e => regex.test(e.innerText)).forEach((e, i) => !(i % 2) && e.children[0].click());
  }
})()

// oneline version

