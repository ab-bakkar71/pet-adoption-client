import { adoptionRequest } from '@/lib/data';
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import React from 'react';
import { IoMdPaw } from 'react-icons/io';
import { toast } from 'react-toastify';

const AdoptMe = ({ pet, user, isOpen, setIsOpen }) => {

    const handleAdoption = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formFields = Object.fromEntries(formData.entries());
        const adoptionData = {
            ...formFields,
            petId: pet._id,
            petImage: pet.imageUrl,
            adopterName: user?.name,
            adopterEmail: user?.email,
            status: "pending",

        }
        const result = await adoptionRequest(adoptionData);
        if(result.insertedId){
            toast.success("Adoption request submitted successfully!")
        }

    }

    return (
        <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <IoMdPaw className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Adoption Request</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below to express your interest in adopting <span className="font-bold text-md">{pet.petName}</span>. Our team will review your application and get back to you shortly.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handleAdoption} className="flex flex-col gap-4">
                                    <TextField
                                        className="w-full"
                                        name="petName"
                                        value={pet?.petName}
                                        variant="secondary"
                                        readOnly>
                                        <Label>Pet Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField
                                        className="w-full"
                                        name="ownerName"
                                        value={pet?.ownerName}
                                        variant="secondary">
                                        <Label>Owner Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField
                                        className="w-full"
                                        name="ownerEmail"
                                        type="email"
                                        variant="secondary"
                                        value={pet?.ownerEmail}>
                                        <Label>Owner Email</Label>
                                        <Input placeholder="Enter your email" />
                                    </TextField>
                                    <TextField
                                        className="w-full"
                                        name="adoptionFee"
                                        type="number"
                                        variant="secondary"
                                        value={pet?.adoptionFee}
                                        readOnly>
                                        <Label>Pet Price</Label>
                                        <Input placeholder="Enter the pet's price" />
                                    </TextField>
                                    <TextField
                                        required
                                        className="w-full"
                                        name="pickupDate"
                                        type="date"
                                        variant="secondary">
                                        <Label>Pickup Date</Label>
                                        <Input placeholder="Select a date" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" className='bg-green-500 hover:bg-green-600 text-white' slot="close">Adopt Now</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default AdoptMe;