const iframeTag = document.querySelector('iframe')

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
    scrollTo(0,2000)
})})

document.querySelector('.mainTextInfo button').addEventListener('click',()=>{
    window.open('https://wa.me/5527998282603?text=olá gostaria de fazer um orçamento de seu serviço!')
})




