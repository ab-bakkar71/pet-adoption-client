"use client";
import { editPet } from '@/lib/data';
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, Select, TextArea, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';

const EditPet = ({ user, pet }) => {
    const router = useRouter();

    const handleUpdatePet = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
            const token = localStorage.getItem('token');
            const updatedPet = await editPet(pet._id, token, formData);
            console.log('Updated Pet:', updatedPet);

            if(updatedPet.modifiedCount > 0){
                toast.success("Pet information updated successfully!");
                router.refresh();
            }

            
            
        } catch (error) {
            console.error('Error updating pet:', error);
            
        }
    }


    return (
        <div>
            <Modal>
                <Button>
                    <FaRegEdit />
                    Edit
                </Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-4xl">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <FaRegEdit className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>Edit Pet Information</Modal.Heading>
                                <p className="mt-1.5 text-sm leading-5 text-muted">
                                    Fill out the form below and we'll get back to you. The modal adapts automatically
                                    when the keyboard appears on mobile.
                                </p>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={handleUpdatePet} className="p-6 sm:p-10 space-y-8 max-w-4xl mx-auto w-full   transition-all">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                                            {/* Pet Name */}
                                            <TextField name="petName" defaultValue={pet.petName} isRequired className="flex flex-col gap-1.5">
                                                <Label className="block text-left text-sm font-semibold ">Pet Name</Label>
                                                <Input
                                                    name="petName"
                                                    placeholder="e.g., Daisy, Buddy"
                                                    className="w-full px-4 py-2.5 rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                                />
                                                <FieldError className="text-red-500 text-xs mt-1" />
                                            </TextField>

                                            {/* Species */}
                                            <TextField name="species" defaultValue={pet.species} isRequired className="flex flex-col gap-1.5">
                                                <Label className="block text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Species</Label>
                                                <Input
                                                    placeholder="Dog, Cat, Bird, etc."
                                                    className="w-full px-4 py-2.5 rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                                />
                                                <FieldError className="text-red-500 text-xs mt-1" />
                                            </TextField>

                                            {/* Breed */}
                                            <TextField name="breed" defaultValue={pet.breed} isRequired className="flex flex-col gap-1.5">
                                                <Label className="block text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Breed</Label>
                                                <Input
                                                    placeholder="e.g., Golden Retriever, Siamese"
                                                    className="w-full px-4 py-2.5 rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                                />
                                                <FieldError className="text-red-500 text-xs mt-1" />
                                            </TextField>

                                            {/* Age */}
                                            <TextField name="age" defaultValue={pet.age} isRequired className="flex flex-col gap-1.5">
                                                <Label className="block text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Age</Label>
                                                <Input
                                                    placeholder="e.g., 2 Years / 5 Months"
                                                    className="w-full px-4 py-2.5 rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                                />
                                                <FieldError className="text-red-500 text-xs mt-1" />
                                            </TextField>

                                            {/* Gender - Dropdown */}
                                            <div className="flex flex-col gap-1.5">
                                                <Select name="gender" defaultValue={pet.gender} isRequired className="w-full" placeholder="Select gender">
                                                    <Label className="block text-left text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1.5">Gender</Label>
                                                    <Select.Trigger className="w-full flex justify-between items-center px-4 py-2.5 rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100">
                                                        <Select.Value />
                                                        <Select.Indicator className="text-slate-400" />
                                                    </Select.Trigger>
                                                    <Select.Popover className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg">
                                                        <ListBox className="p-1">
                                                            {["Male", "Female"].map((item) => (
                                                                <ListBox.Item key={item} id={item} textValue={item} className="px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-200 cursor-pointer outline-hidden hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-cyan-500 focus:text-white">{item}</ListBox.Item>
                                                            ))}
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            {/* Location */}
                                            <TextField name="location" defaultValue={pet.location} isRequired className="flex flex-col gap-1.5">
                                                <Label className="block text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Location</Label>
                                                <Input
                                                    placeholder="e.g., Mirpur, Dhaka"
                                                    className="w-full px-4 py-2.5 rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                                />
                                                <FieldError className="text-red-500 text-xs mt-1" />
                                            </TextField>

                                            {/* Health Status */}
                                            <TextField name="healthStatus" defaultValue={pet.healthStatus} isRequired className="flex flex-col gap-1.5">
                                                <Label className="block text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Health Status</Label>
                                                <Input
                                                    placeholder="e.g., Healthy, Under Medication"
                                                    className="w-full px-4 py-2.5 rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                                />
                                                <FieldError className="text-red-500 text-xs mt-1" />
                                            </TextField>

                                            {/* Vaccination Status - Dropdown */}
                                            <div className="flex flex-col gap-1.5">
                                                <Select name="vaccinationStatus" defaultValue={pet.vaccinationStatus} isRequired className="w-full" placeholder="Select vaccination status">
                                                    <Label className="block text-left text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1.5">Vaccination Status</Label>
                                                    <Select.Trigger className="w-full flex justify-between items-center px-4 py-2.5 rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100">
                                                        <Select.Value />
                                                        <Select.Indicator className="text-slate-400" />
                                                    </Select.Trigger>
                                                    <Select.Popover className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg">
                                                        <ListBox className="p-1">
                                                            {["Fully Vaccinated", "Partially Vaccinated", "Not Vaccinated"].map((item) => (
                                                                <ListBox.Item key={item} id={item} textValue={item} className="px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-200 cursor-pointer outline-hidden hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-cyan-500 focus:text-white">{item}</ListBox.Item>
                                                            ))}
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            {/* Adoption Fee */}
                                            <TextField name="adoptionFee" type="number" defaultValue={pet.adoptionFee} isRequired className="flex flex-col gap-1.5">
                                                <Label className="block text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Adoption Fee (USD)</Label>
                                                <Input
                                                    type="number"
                                                    placeholder="e.g., 50 (0 for Free)"
                                                    className="w-full px-4 py-2.5 rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                                />
                                                <FieldError className="text-red-500 text-xs mt-1" />
                                            </TextField>

                                            {/* Image URL */}
                                            <div className="md:col-span-2 lg:col-span-3">
                                                <TextField name="imageUrl" defaultValue={pet.imageUrl} isRequired className="flex flex-col gap-1.5">
                                                    <Label className="block text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Image URL</Label>
                                                    <Input
                                                        type="url"
                                                        placeholder="https://imgbb.com/your-uploaded-image.jpg"
                                                        className="w-full px-4 py-2.5 rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                                    />
                                                    <FieldError className="text-red-500 text-xs mt-1" />
                                                </TextField>
                                            </div>

                                            {/* Description */}
                                            <div className="md:col-span-2 lg:col-span-3">
                                                <TextField name="description" defaultValue={pet.description} isRequired className="flex flex-col gap-1.5">
                                                    <Label className="block text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Description</Label>
                                                    <TextArea
                                                        placeholder="Tell us about the pet's behavior, habits, and why it is up for adoption..."

                                                        className="w-full px-4 py-2.5 rounded-xl text-sm min-h-[100px] transition-all focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                                    />
                                                    <FieldError className="text-red-500 text-xs mt-1" />
                                                </TextField>
                                            </div>

                                            {/* Owner Email */}
                                            <div className="md:col-span-2 lg:col-span-3">
                                                <TextField name="ownerEmail" className="flex flex-col gap-1.5">
                                                    <Label className="block text-left text-sm font-semibold text-slate-400 dark:text-slate-500">Your Email</Label>
                                                    <Input
                                                        type="email"
                                                        value={user.email}
                                                        readOnly
                                                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed outline-hidden"
                                                    />
                                                </TextField>
                                            </div>

                                            {/* owner name */}
                                            <div className="md:col-span-2 lg:col-span-3">
                                                <TextField name="ownerName" className="flex flex-col gap-1.5">
                                                    <Label className="block text-left text-sm font-semibold text-slate-400 dark:text-slate-500">Owner name</Label>
                                                    <Input
                                                        type="text"
                                                        value={user.name}
                                                        readOnly
                                                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed outline-hidden"
                                                    />
                                                </TextField>
                                            </div>
                                        </div>
                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button type="submit" slot="close">
                                                Send Message
                                            </Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default EditPet;