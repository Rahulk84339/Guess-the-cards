// function doSomething() {
//     for (i = 0; i <= 5; i++)
//      {
//         console.log('i');
//     }
//      console.log(i);
// }
// doSomething();

let cards = [
    {
        image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJoZXJvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value: 1,
        status: "closed"
    },
    {
        image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJoZXJvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value: 1,
        status: "closed"
    },
    {
        image: "https://c4.wallpaperflare.com/wallpaper/591/844/1024/spider-man-spider-video-games-superhero-wallpaper-preview.jpg",
        value: 2,
        status: "closed"
    },
    {
        image: "https://c4.wallpaperflare.com/wallpaper/591/844/1024/spider-man-spider-video-games-superhero-wallpaper-preview.jpg",
        value: 2,
        status: "closed"
    },
    {
        image: "https://i2.wp.com/www.smartprix.com/bytes/wp-content/uploads/2018/02/Webp.net-resizeimage-4.jpg?ssl=1",
        value: 3,
        status: "closed"
    },
    {
        image: "https://i2.wp.com/www.smartprix.com/bytes/wp-content/uploads/2018/02/Webp.net-resizeimage-4.jpg?ssl=1",
        value: 3,
        status: "closed"
    },
    {
        image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VwZXJoZXJvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value: 4,
        status: "closed"
    },
    {
        image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VwZXJoZXJvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value: 4,
        status: "closed"
    },
    {
        image: "https://wallpapercave.com/wp/wp2564726.jpg",
        value: 5,
        status: "closed"
    },
    {
        image: "https://wallpapercave.com/wp/wp2564726.jpg",
        value: 5,
        status: "closed"
    },
]

for(let i=cards.length-1;i>=0;i--){

    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}


let cardsCopy=cards;




function displayCards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCards(${index})">
                </div>
            </div>     
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;

}



displayCards(cards);


let cardCount=1;
let val1=null,val2=null;
let score=0;

function openCards(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount==2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // reset after one guess
            val1=null;
            val2=null;
            cardCount=1;
        }
        else{
            alert("GAME OVER");
            location.reload();
        }

    }

    displayCards(cards);

}