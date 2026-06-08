import { TrashBin } from '@gravity-ui/icons';
import { AlertDialog, Button } from '@heroui/react';
// import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const DeletePet = ({ pet, deletePet }) => {
  // const router = useRouter()
    const handelDelete = async(id) => {
     
        await deletePet(id);
        toast.error('Pet Deleted Successful!')
        // router.push('/dashboard/my-listings')
        // router.refresh();
        // window.location.reload();
        
    }
    return (
        <div>
           <AlertDialog>
      <Button className='w-full' variant="danger"> <TrashBin className="size-4" /> Delete</Button>
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
                Are you sure you want to accept this pet? This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={()=> handelDelete(pet._id)} slot="close" variant="danger">
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