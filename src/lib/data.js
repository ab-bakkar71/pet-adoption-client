
// for get all data
export const getPets = async()=>{
    const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pets`);
    const data= await res.json();
    return data;
}

 // for feature

 export const featurePet = async()=>{
    const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/feature`);
    const data = await res.json();
    return data;
 }

// for get single data
export const getPetById = async(petId, token)=>{
    const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pets/${petId}`,{
        headers: {
            authorization: `Bearer ${token}` || ""
        }
    });
    const data= await res.json();
    return data;
}

// my listing data fetch
export const myListing = async(email) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/my-listings/${email}`);
    const data = await res.json();
    return data;

}

// edit pet data fetch
export const editPet = async(petId, token, formData) => {
    
    const petData =  Object.fromEntries(formData.entries());

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pets/${petId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}` || ""
        },
        body: JSON.stringify(petData)
    });
    const data = await res.json();
    return data;
}   