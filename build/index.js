let el=document.getElementById("ques")
el=Array.from(el.children)
let ques=el.filter((el,i)=>i%2===0)
ques.forEach((el,i)=>{
    let btn=el.children[1]
    el.addEventListener("click",function(){
        if(btn.innerText==='+'){
            btn.innerText='x'
            let divel=document.getElementById(`ans-${i}`)
            divel.classList.add('p-3')
            divel.classList.remove("opacity-0")
            divel.classList.add("opacity-100")
            if(i===0){
                divel.innerHTML+=`
                    <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                    </p>

                    <p>
                    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                    </p>
                `
            }
            else if(i===1){
                divel.innerHTML+=`
                <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                </p>
                `
            }
            else if(i===2){
                divel.innerHTML+=`
                    <p>
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                    </p>
                `
            }
            else if(i===3){
                divel.innerHTML+=`
                    <p>
                    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                    </p>
                `
            }
            else if(i===4){
                divel.innerHTML=`
                    <p>
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                    </p>
                `
            }
           
        }
        else if(btn.innerText==='x'){
            btn.innerText='+'
            let divel=document.getElementById(`ans-${i}`)
            divel.classList.remove("p-3")
            divel.classList.remove("opacity-100")
            divel.classList.add("opacity-0")
            divel.innerHTML=''
        }
    })
})