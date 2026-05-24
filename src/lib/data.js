// for get all data
export const getPets = async()=>{
    const res= await fetch(`${process.env.PUBLIC_URL}/pets`);
    const data= await res.json();
    return data;
}

 // for feature

 export const featurePet = async()=>{
    const res= await fetch(`${process.env.PUBLIC_URL}/feature`);
    const data = await res.json();
    return data;
 }

// for get single data
export const getPetById = async(petId)=>{
    const res= await fetch(`${process.env.PUBLIC_URL}/pets/${petId}`);
    const data= await res.json();
    return data;
}