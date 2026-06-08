import MyListingClient from "@/components/MyListingClient";
import { deletePet } from "@/lib/action";

const myListingsPage = async() => { 
    return (
        <>
        <MyListingClient deletePet= {deletePet}/>
        </>
    );
};

export default myListingsPage;