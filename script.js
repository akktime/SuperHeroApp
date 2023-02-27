const baseurl='https://www.superheroapi.com/api.php/580896453900662'

const buttn=document.getElementById('button')
const herodiv=document.getElementById('newhero')
const sbutton=document.getElementById('searchbutton')
const sinput=document.getElementById('searchinput')
// const power=document.getElementById('powerstats')

const getsuperhero=(id,name)=>{

    fetch(`${baseurl}/${id}`)
    .then(response=>response.json())
    .then(json=>{
        console.log(json)
        
        console.log(json.powerstats)
        const superHero = json
        getstats(superHero)
    })
}

const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊',
    combat: '⚔️',
  }

const getstats=(character)=>{
    const name = `<h2>${character.name}</h2>`

    const img = `<img src="${character.image.url}" />`
    
    const stats = Object.keys(character.powerstats).map(stat => {
      return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join('')
    herodiv.innerHTML = `${name}${img}${stats}`
}

// power.inerText=''
const searchsuperhero=(name)=>{
    // console.log(sbutton.value)
    fetch(`${baseurl}/search/${name}`)
    .then(response=>response.json())
    .then(json=>{
        const hero=json.results[0]
        console.log(hero)    
        
        herodiv.innerHTML=`<img src="${hero.image.url}"/>`
        
        getstats(hero)
    })

}


const random=()=>{
    const randomnumber=731 
    return Math.floor(Math.random()*randomnumber)+1
}

sbutton.onclick=()=>
    searchsuperhero(searchinput.value)


buttn.onclick=() =>{
    getsuperhero(random())
}



// const random=(baseurl)=>{
// let randomno=Math.floor(Math.random()*100)
// return baseurl.randomno
// }

// const messege=Number(prompt("Eneter id of the super hero"))



// const img='https://www.superherodb.com/pictures2/portraits/10/100/random.jpg'

// document.querySelector('body').innerHTML+=`<img src="${img}"/>`