import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import React from 'react';
import { IoMdPaw } from 'react-icons/io';

const AdoptMe = ({ pet, user, isOpen, setIsOpen }) => {
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
                                <form className="flex flex-col gap-4">
                                    <TextField
                                        className="w-full"
                                        name="name"
                                        value={pet?.petName}
                                        variant="secondary"
                                        readOnly>
                                        <Label>Pet Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField 
                                    className="w-full" 
                                    name="name" 
                                    value={user?.name}
                                     variant="secondary">
                                        <Label>Owner Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField 
                                    className="w-full" 
                                    name="email" 
                                    type="email" 
                                    variant="secondary"
                                    value={user?.email}>
                                        <Label>Owner Email</Label>
                                        <Input placeholder="Enter your email" />
                                    </TextField>
                                    <TextField 
                                    className="w-full" 
                                    name="Price" 
                                    type="number" 
                                    variant="secondary"
                                    value={pet?.adoptionFee}
                                    readOnly>
                                        <Label>Pet Price</Label>
                                        <Input placeholder="Enter the pet's price" />
                                    </TextField>
                                    <TextField 
                                    className="w-full" 
                                    name="Pickup date" 
                                    type="date" 
                                    variant="secondary">
                                        <Label>Pet Price</Label>
                                        <Input placeholder="Enter the pet's price" />
                                    </TextField>


                                </form>
                            </Surface>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>
                            <Button className='bg-green-500 hover:bg-green-600 text-white' slot="close">Adopt Now</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default AdoptMe;