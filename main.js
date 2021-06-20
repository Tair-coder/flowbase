// const bioOne = document.querySelector('.bioOne')
// const bioTwo = document.querySelector('.bio-2') 
// const bioThree = document.querySelector('.bio-3')
// const bioParagraph = document.querySelectorAll
// bioOne.addEventListener('click',()=>{
//     bioTwo.classList.remove('active')
//     bioThree.classList.remove('active')
//     bioOne.classList.add('active')
// })
// bioTwo.addEventListener('click',()=>{
//     bioTwo.classList.add('active')
//     bioOne.classList.remove('active')
//     bioThree.classList.remove('active')
// })
// bioThree.addEventListener('click',()=>{
//     bioThree.classList.add('active')
//     bioTwo.classList.remove('active')
//     bioOne.classList.remove('active')
// })

// const description = document.querySelector('.question-description')
// const arrowPlay = document.querySelector('.arrow-pink')



// function arrow(){
//     if(description.style.display === 'flex'){
//         arrowPlay.style.transform = 'rotate(' + 0 + 'deg)'
//         description.style.display = 'none'
//     }else{
//     description.style.display = 'flex'
//      arrowPlay.style.transform = 'rotate(' + 180 + 'deg)'
//     }
// }


const questionsTopics = document.getElementsByClassName('questions-topics')

for (let i = 0; i < questionsTopics.length; i++) {
    questionsTopics[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
    
}


const socialNetworks = document.getElementsByClassName('s')

for (let i = 0; i < socialNetworks.length; i++) {
    socialNetworks[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
    
}