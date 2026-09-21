import { TrashBin } from '@gravity-ui/icons';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import { toast } from 'react-toastify';

const DeletePet = ({ pet, deletePet, onDeleted }) => {
    const handleDelete = async (id) => {
        try {
            const res = await deletePet(id);
            if (res?.deletedCount > 0 || res?.acknowledged) {
                toast.success('Pet deleted successfully!');
                onDeleted?.(id);
            } else {
                toast.error('Failed to delete pet.');
            }
        } catch (error) {
            console.error('Error deleting pet:', error);
            toast.error('An error occurred while deleting.');
        }
    };

    return (
        <div>
            <AlertDialog>
                <Button className="w-full" variant="danger">
                    <TrashBin className="size-4" /> Delete
                </Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Want to delete this pet?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    Are you sure you want to delete <span className="font-semibold">{pet.petName}</span>? This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={() => handleDelete(pet._id)} slot="close" variant="danger">
                                    Delete Pet
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeletePet;