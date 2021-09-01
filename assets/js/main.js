
let suspect,weapon,room;
function getRandomInt(min, max) { //random number generator
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };


const suspectsArray = [
    {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45,
    description: 'He has a lot of connections',
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color:'green'
    },
    {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color:'white'  
    },
    {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Designer',
    age: 22,
    description: 'Billionaire video game designer',
    image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color:'purple'  
    },
    {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actress',
    age: 31,
    description:' She is an A-list movie star with a dark past',
    image: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/07/04/10/cluedo-miss-scarlett.jpg',
    color:'red'
    },
    {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description:' She is from a wealthy family and uses her status and money to earn popularity',
    image:' https://pm1.narvii.com/6722/3bd0d86d367315d9e81a12390c17343a27d8a4d9_hq.jpg',
    color: 'blue'
    },
    {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description:' He is a former football player who tries to get by on his former glory',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow'
    }];

const weaponsArray=[
        {
            name:'rope',
            weight: 10,
        },
        {
            name: 'knife',
            weight: 8,
        },
        {
            name:'candlestick',
            weight: 2,
        },
        {
            name: 'dumbbell',
            weight: 30
        },
        {
            name:'poison',
            weight:2,
        },
        {
            name:'axe',
            weight:13
        },
        {
            name:'bat',
            weight:13
        },
        {
            name:'trophy',
            weight:25
        },
        {
            name:'pistol',
            weight:20
        }
    ]

const roomsArray=[
    {
        name:'Dining Room'
    },
    {
        name:'Conservatory'
    },
    {
        name:'Kitchen'
    },
    {
        name:'Study'
    },
    {
        name:'Library'
    },
    {
        name:'Billiard Room'
    },
    {
        name:'Ballroom'
    },
    {
        name:'Hall'
    },
    {
        name:'Spa'
    },
    {
        name:'Living Room'
    },
    {
        name:'Observatory'
    },
    {
        name:'Theater'
    },
    {
        name:'Guest House'
    },
    {
        name:'Patio'
    }
]
//Zufallsauswahl
function selectRandom(array){
    return array[getRandomInt(0, array.length)];
}
function pickMystery(){
    
    suspect=selectRandom(suspectsArray);
    weapon=selectRandom(weaponsArray);
    room=selectRandom(roomsArray);
    
}
pickMystery();
console.log(suspect.image)
function revealMystery(){
    pickMystery();
    document.getElementById("appear").style.visibility="visible";//hier erscheint der block der auf none gestellt wurde wieder
    document.getElementById("suspectImg").src=suspect.image;
    document.getElementById("suspectData").innerHTML=`${suspect.firstName}  ${suspect.lastName}  (${suspect.age})`
    document.getElementById("suspectDescription").innerHTML=`${suspect.occupation}<br>${suspect.description}` //charakter card

    document.getElementById("weaponName").innerHTML=`${weapon.name}`
    document.getElementById('weaponWeight').innerHTML=`Weight : ${weapon.weight}`//Weapon card

    document.getElementById("room").innerHTML=`${room.name}`//room card
    document.getElementById("mystery").innerHTML=`<span id="changeColor">${suspect.firstName}  ${suspect.lastName}</span> killed Mr. Boddy using the ${weapon.name} in the ${room.name}! ` //die mystery line
    document.getElementById("changeColor").style.color=suspect.color; //Farbchange vom eingefügten span 

}





