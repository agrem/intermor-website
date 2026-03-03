// Retro-subtle: aktywna zakładka + kopiowanie kontaktu + prosty "toast" w konsoli
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
  });

  function copy(text){
    navigator.clipboard?.writeText(text).then(()=>{
      console.log("Skopiowano:", text);
    }).catch(()=>{
      console.log("Nie mogę skopiować automatycznie. Tekst:", text);
    });
  }

  document.querySelectorAll('[data-copy]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      copy(btn.getAttribute('data-copy'));
      btn.textContent = "Skopiowano ✓";
      setTimeout(()=> btn.textContent = btn.getAttribute('data-label') || "Kopiuj", 1200);
    });
  });
})();
