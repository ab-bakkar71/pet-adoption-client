'use client';
import { authClient } from '@/lib/auth-client';
import { getAdoptionRequestsByPetId, updateAdoptionRequestStatus } from '@/lib/data';
import { AlertDialog, Avatar, Button, ButtonGroupSeparator, Chip, Modal } from '@heroui/react';
import React, { useEffect, useState } from 'react';
import EditPet from './EditPet';
import { CircleCheckFill, Clock, Rocket, TrashBin } from '@gravity-ui/icons';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { FaCircleXmark } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { TbCurrencyTaka } from 'react-icons/tb';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

const AdoptionRequestClient = ({ pet }) => {
    const [adoptionRequests, setAdoptionRequests] = useState([]);
    const route = useRouter();


    const handelModal = async () => {
        const data = await getAdoptionRequestsByPetId(pet._id);
        setAdoptionRequests(data)

    }


    const handleAccept = async (Id) => {
        const data = await updateAdoptionRequestStatus(Id);
        if (data) {
            toast.success("Adoption request accepted successfully!");
            // route.push('/dashboard/my-request');
            window.location.reload();
        }
    }




    return (

        <Modal>
            <Button
                onPress={handelModal}
                className="w-full py-2 bg-transparent border border-slate-300 dark:border-slate-700 font-semibold text-gray-900 dark:text-gray-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-sm text-center cursor-pointer block"
            >
                Request
            </Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-4xl">
                        <Modal.CloseTrigger />
                        <Modal.Body>
                            {/* data */}
                            <div>
                                {
                                    adoptionRequests.length === 0 ? (
                                        <p className="text-4xl text-slate-500 dark:text-slate-400 p-10 text-center">
                                            No requests found.
                                        </p>
                                    ) : (
                                        <div className='overflow-x-auto'>
                                            <table className="w-full text-left text-sm border-collapse">
                                                <thead>
                                                    <tr className="bg-slate-50/70 dark:bg-slate-900/20 text-slate-400 dark:text-slate-500 font-semibold border-b border-slate-100 dark:border-slate-800/60">
                                                        <th className="p-4">Pet Image</th>
                                                        <th className="p-4">Pet Name</th>
                                                        <th className="p-4">Adopter Name / Email</th>
                                                        <th className="p-4">Adoption Fee</th>
                                                        <th className="p-4">Status</th>
                                                        <th className="p-4">Pickup Date</th>
                                                        <th className="p-4 text-right">Actions</th>
                                                    </tr>
                                                </thead>

                                                <tbody className='divide-y divide-slate-100 dark:divide-slate-800/40'>
                                                    {adoptionRequests.map(request => (
                                                        <tr key={request._id} className='hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors'>
                                                            {/* for image */}
                                                            <td className="p-4">
                                                                <Avatar className="size-16">
                                                                    <Avatar.Image
                                                                        alt={request.petName}
                                                                        src={request.petImage}
                                                                    />
                                                                    <Avatar.Fallback>XL</Avatar.Fallback>
                                                                </Avatar>
                                                            </td>
                                                            {/* Pet Name */}
                                                            <td className="p-4 font-bold text-slate-900 dark:text-slate-200">{request.petName}</td>
                                                            {/* adopter email & name */}
                                                            <td className="p-4 text-slate-500 dark:text-slate-400">
                                                                <span className="font-medium text-slate-700 dark:text-slate-300">{request.adopterName}</span>
                                                                <span className="block text-xs">{request.adopterEmail}</span>
                                                            </td>
                                                            {/* adopt fees */}
                                                            <td className="p-4 font-semibold">
                                                                {request.fee === 0 ? (
                                                                    <span className="text-emerald-500 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide bg-emerald-500/10 px-2 py-0.5 rounded-md">Free</span>
                                                                ) : (
                                                                    <span className="text-slate-700 dark:text-slate-300">৳ {request.adoptionFee}</span>
                                                                )}
                                                            </td>

                                                            {/* status */}
                                                            <td className="p-4">
                                                                {request.status === 'accepted' ? (
                                                                    <Chip color="success" size="xs" className='font-bold uppercase tracking-wide'>
                                                                        <CircleCheckFill className='size-4' />
                                                                        <Chip.Label>{request.status}</Chip.Label>
                                                                    </Chip>
                                                                ) : request.status === 'rejected' ? (
                                                                    <Chip color="danger" size="xs" className='font-bold uppercase tracking-wide'>

                                                                        <FaCircleXmark className='size-4' />
                                                                        <Chip.Label>{request.status}</Chip.Label>
                                                                    </Chip>
                                                                ) : (
                                                                    <Chip color="warning" size="xs" className='font-bold uppercase tracking-wide'>
                                                                        <Clock className='size-4' />
                                                                        <Chip.Label>{request.status}</Chip.Label>
                                                                    </Chip>
                                                                )}
                                                            </td>

                                                            {/* pickup date */}
                                                            <td className="p-4 text-slate-500 dark:text-slate-400">
                                                                {request.pickupDate ? (
                                                                    <span>{new Date(request.pickupDate).toLocaleDateString()}</span>
                                                                ) : (
                                                                    <span className="text-slate-400 dark:text-slate-500">Not scheduled</span>
                                                                )}
                                                            </td>

                                                            {/* actions */}
                                                            <td className="flex justify-end items-center px-4 py-6 text-right space-x-2">
                                                                {
                                                                    request.status === "pending" ? (<AlertDialog>
                                                                        <Button color="success"> <IoIosCheckmarkCircleOutline className='size-4' /> Accept</Button>
                                                                        <AlertDialog.Backdrop>
                                                                            <AlertDialog.Container>
                                                                                <AlertDialog.Dialog className="sm:max-w-[400px]">
                                                                                    <AlertDialog.CloseTrigger />
                                                                                    <AlertDialog.Header>
                                                                                        <AlertDialog.Icon status="success" />
                                                                                        <AlertDialog.Heading>Want to accept this request?</AlertDialog.Heading>
                                                                                    </AlertDialog.Header>
                                                                                    <AlertDialog.Body>
                                                                                        <p>
                                                                                            Are you sure you want to accept this adoption request? This action cannot be undone.
                                                                                        </p>
                                                                                    </AlertDialog.Body>
                                                                                    <AlertDialog.Footer>
                                                                                        <Button slot="close" color="tertiary">
                                                                                            Cancel
                                                                                        </Button>
                                                                                        <Button onClick={() => handleAccept(request._id)} slot="close" color="success">
                                                                                            Accept Request
                                                                                        </Button>
                                                                                    </AlertDialog.Footer>
                                                                                </AlertDialog.Dialog>
                                                                            </AlertDialog.Container>
                                                                        </AlertDialog.Backdrop>
                                                                    </AlertDialog>) : (<Button color="success" isDisabled className='hidden'> <IoIosCheckmarkCircleOutline className='size-4' />Accept</Button>)
                                                                }
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                            </div>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default AdoptionRequestClient;