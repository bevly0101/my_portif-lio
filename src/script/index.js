
// levar usuário ate sessão sobre mim
document.querySelectorAll(".btnAboutMe").forEach(e=>{
    e.addEventListener('click',i=>{
        // anula reload da tag "a"
        i.preventDefault()

        // rolagem ate sessão "sobre mim"
        scrollTo(0,400)
    })
})
    
// levar usuário até sessão de serviços
document.querySelectorAll('.btnServices').forEach(e=>{
    e.addEventListener('click',i=>{
    // anula reload da tag "a"
    i.preventDefault()
    
    // rolagem ate sessão "serviços"
    scrollTo(0,2400)
})})
document.querySelectorAll('.btnProjects').forEach(e=>{
    e.addEventListener('click',i=>{
    // anula reload da tag "a"
    i.preventDefault()
    
    // rolagem ate sessão "serviços"
    scrollTo(0,1500)
})})
document.querySelectorAll('.homeBtn').forEach(e=>{
    e.addEventListener('click',i=>{
    // anula reload da tag "a"
    i.preventDefault()
    
    // rolagem ate sessão "serviços"
    scrollTo(0,0)
})})

// variaveis para link de direcionamento para whatsapp
const number = '5527998282603';
const message = 'Olá gostaria de fazer um orçamento de seu serviço!';
const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

document.querySelectorAll('.contratarBtn').forEach(e=>{
    e.addEventListener('click',i=>{
        // anula reload da tag "a"
        i.preventDefault()
        window.open(url, '_blank')
})})




