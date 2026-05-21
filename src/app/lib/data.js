export const getPets = async()=>{
    const res= await fetch(`${process.env.PUBLIC_URL}/pets`);
    const data= await res.json();
    return data;
}