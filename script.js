const row = document.querySelector('.row')
const change = document.querySelector('.change')
const colorBg = document.querySelector('.color-bg')

const array =[
    {src:'./assets/balloon.png', id:1},
    {src:'./assets/balloon.png', id:2},
    {src:'./assets/balloon.png', id:3},
    // {src:'./assets/balloon.png', id:4},
    // {src:'./assets/balloon.png', id:5},
    // {src:'./assets/balloon.png', id:6},
    // {src:'./assets/balloon.png', id:7},
    // {src:'./assets/balloon.png', id:8},
    // {src:'./assets/balloon.png', id:9},
]



row.innerHTML = array.map(item =>{
    return `<div class="col-4">
                <div class="box">
                    <img src="${item.src}" alt="alt">
                </div>
            </div>`
}).join('')

const balloon =document.querySelectorAll('img')
console.log(balloon)
balloon.forEach((item )=>{
    console.log(balloon.length)
    item.addEventListener('click',() =>{
         item.classList.toggle('bg-blue')
        item.classList.toggle('color-bg')
        if(  item.classList.contains('color-bg')   ){
            return change.checked = true
        }else if( ! item.classList.contains('color-bg') ){
            return  change.checked = false
        }

        console.log(item)
    })
    // if( balloon.length !== item.classList.contains('color-bg')   ){
    //     return change.checked = false
    // }else if( balloon.length === item.classList.contains('color-bg') ){
    //     return  change.checked = true
    // }
    // item.addEventListener('click',() =>{
    //
    //
    //     item.classList.toggle('bg-blue')
    //
    //     if(  item.classList.contains('color-bg')   ){
    //         return change.checked = true
    //     }else {
    //         return change.checked = false
    //     }
    // })
    // if(  item.classList.contains('color-bg')   ){
    //     return change.checked = true
    // }else {
    //     return change.checked = false
    // }

    // row.lastChild.addEventListener('click',()=>{
    //     if( item.classList.contains('color-bg')  ){
    //         return change.checked = true
    //     }else {
    //         return change.checked = false
    //     }
    // })
    change.addEventListener('change',()=>{
        item.classList.toggle('color-bg')
        if(item.classList.contains('bg-blue')){
            item.classList.toggle('color-bg')
        }
        // else if( balloon.length === item.classList.contains('color-bg')   ){
        //     return change.checked = true
        // }else {
        //     return change.checked = false
        // }

    })

    })

// function checkedCount(){
//     if(item.classList.contains('color-bg') === array.length)
// }

function checkedCount(){
    const colorBg = document.querySelector('.color-bg')
    change.checked  = colorBg === array.length
}




