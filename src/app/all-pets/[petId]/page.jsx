import { getPetById } from "@/lib/data";

const PetIdPage = async({ params }) => {
    const { petId } = await params
    const pet = await getPetById(petId);

    return (
        <div>
            pet by id: {pet.petName}
        </div>
    );
};

export default PetIdPage;