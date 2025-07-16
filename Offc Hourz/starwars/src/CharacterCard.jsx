function CharacterCard({char}){
const[HomeWorld , setHomeWorld] =useState()

async function fetchHomeWorld(){
    try {
        const res = await fetch (char.homeWorld)
        const HomeworlDData =await res.json();
        setHomeWorld(homeWorldData.name)
    }catch (error) {
        console.log(error);
    }    
}
//console.log(char);
fetchHomeWorld()
{char.homeWorld}


  return (
    <>
    <div style={{ border: "1px solid green", margin: "10px"}}>
      <h4>Name: {char.name}</h4>
      <h5>Height: {char.height}</h5>
      <h6>Homeworld: {homeWorld}</h6>
    </div>
    </>
  );
}

export default CharacterCard;

