import './style.css'
import './styles/navbar.css'
import './styles/header.css'
import './styles/section-works.css'
import './styles/partner.css'
import './styles/gallery.css'
import './styles/statistics.css'
import './styles/footer.css'
import './styles/observer.css'

const homeHamb = document.getElementById("home-hamb")

homeHamb.addEventListener("click", function(e){
    e.preventDefault()
    document.body.classList.toggle("menu-open")
})
////////
const ratio = 0.1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
const handleIntersect = (entries, observer) => {
    entries.forEach((entrie) => {
        if(entrie.intersectionRatio > ratio){
            //animation
            entrie.target.classList.remove("observ")
            observer.unobserve(entrie.target)
        }
    })
}
const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll(".observ").forEach((elt) => {
    observer.observe(elt)
})