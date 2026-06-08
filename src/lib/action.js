import { revalidatePath } from "next/cache";


// delete pet data function
export const deletePet = async(id )=>{
    'use server'
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pets/${id}`, {
        method:'DELETE'
    });
    const data = await res.json();

    console.log('after delete', data);
    // revalidate cash
    if(data.deletedCount > 0){
    revalidatePath('/dashboard/my-listings')
    }
    return data;
}

// adoption cancel
export const adoptionCancel = async(id)=> {
    'use server'
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/adoption-requests/user/${id}`, {
        method:'PATCH'
    });
    const data = await res.json();
    return data;
}
