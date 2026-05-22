// for get all data
export const getPets = async()=>{
    const res= await fetch(`${process.env.PUBLIC_URL}/pets`);
    const data= await res.json();
    return data;
}

// for get single data
export const getPetById = async(petId)=>{
    const res= await fetch(`http://localhost:8000/pets/${petId}`);
    const data= await res.json();
    return data;
}