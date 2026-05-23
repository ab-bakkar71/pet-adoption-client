import { getPetById } from "@/lib/data";


const PetIdPage = async({ params }) => {
    const { petId } = await params;
    const pet = getPetById(petId);

    console.log(pet);



    return (
        <div>
            pet by id: {pet.name}
        </div>
    );
};

export default PetIdPage;