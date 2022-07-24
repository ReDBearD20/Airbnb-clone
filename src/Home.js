import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
//ES7 snippets rfce
function Home(){
    return(
        <div className='home'>
        <Banner />
        <div className='home_section'>
        <Card 
            src="https://a0.muscache.com/im/pictures/8ec4dc38-bbbe-4c39-a069-ba2bc7eba9fa.jpg?im_w=960"
            title="Online Experience"
            description="Unique activities we can do together, led by a world of hosts."
        />
        <Card 
            src="https://a0.muscache.com/im/pictures/ea4e543a-941b-4d26-9c1a-351276848feb.jpg?im_w=960"
            title="Unique stays"
            description="Spaces that are more than just a place to sleep."
        />
        <Card 
            src="https://a0.muscache.com/im/pictures/miso/Hosting-551238307613226909/original/98d94635-8ad0-4e4c-b239-ec3120cc97e1.jpeg?im_w=1200"
            title="Entire homes"
            description="Comforatable private places with room fro friends and family."
        />
        </div>
        <div className='home_section'>
        <Card 
            src="https://a0.muscache.com/im/pictures/c7ce5561-d968-4f96-af51-f700e51563f5.jpg?im_w=960"
            title="Hidden leaf village"
            description="Unique activities we can do together, led by a world of hosts."
            price="$500/night"
        />
        <Card 
            src="https://a0.muscache.com/im/pictures/miso/Hosting-45301042/original/c6751fd6-755b-4e5b-8b37-57366942d3f7.jpeg?im_w=720"
            title="KOnoha village"
            description="Unique activities we can do together, led by a world of hosts."
            price="$300/night"
        />
        <Card 
            src="https://a0.muscache.com/im/pictures/1ec28c35-2fd1-4988-a7b5-110d4dc55239.jpg?im_w=720"
            title="Village hidden in cloud"
            description="Unique activities we can do together, led by a world of hosts."
            price="$200/night"
        />
        </div>
        </div>
    )
}

export default Home;