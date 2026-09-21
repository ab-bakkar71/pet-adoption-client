'use client';
import { getAdoptionRequestsByPetId, updateAdoptionRequestStatus } from '@/lib/data';
import { AlertDialog, Avatar, Button, Chip, Modal } from '@heroui/react';
import React, { useState } from 'react';
import { CircleCheckFill, Clock } from '@gravity-ui/icons';
import { FaCircleXmark } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

const AdoptionRequestClient = ({ pet }) => {
    const [adoptionRequests, setAdoptionRequests] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleOpenModal = async () => {
        setLoading(true);
        try {
            const data = await getAdoptionRequestsByPetId(pet._id);
            setAdoptionRequests(data);
        } catch (error) {
            console.error("Error fetching adoption requests:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAccept = async (id) => {
        try {
            const data = await updateAdoptionRequestStatus(id);
            if (data?.success) {
                toast.success("Adoption request accepted successfully!");
                // Optimistically update the status without hard reload
                setAdoptionRequests((prev) =>
                    prev.map((request) => {
                        if (request._id === id) {
                            return { ...request, status: 'accepted' };
                        }
                        if (request.status === 'pending') {
                            return { ...request, status: 'rejected' };
                        }
                        return request;
                    })
                );
                router.refresh();
            } else {
                toast.error(data?.message || "Failed to accept request.");
            }
        } catch (error) {
            console.error("Error accepting request:", error);
            toast.error("Failed to accept adoption request.");
        }
    };

    return (
        <Modal>
            <Button
                onPress={handleOpenModal}
                className="w-full py-2 bg-transparent border border-slate-300 dark:border-slate-700 font-semibold text-gray-900 dark:text-gray-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-sm text-center cursor-pointer block"
            >
                Requests
            </Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-4xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <h3 className="text-lg font-bold">
                                Adoption Requests for {pet.petName}
                            </h3>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                {loading ? (
                                    <p className="p-8 text-center text-slate-400">Loading requests...</p>
                                ) : adoptionRequests.length === 0 ? (
                                    <p className="text-xl text-slate-500 dark:text-slate-400 p-10 text-center">
                                        No adoption requests found for this pet yet.
                                    </p>
                                ) : (
                                    <div className="overflow-x-auto">
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

                                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40">
                                                {adoptionRequests.map((request) => (
                                                    <tr key={request._id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                                                        <td className="p-4">
                                                            <Avatar className="size-16">
                                                                <Avatar.Image
                                                                    alt={request.petName}
                                                                    src={request.petImage}
                                                                />
                                                                <Avatar.Fallback>Pet</Avatar.Fallback>
                                                            </Avatar>
                                                        </td>
                                                        <td className="p-4 font-bold text-slate-900 dark:text-slate-200">{request.petName}</td>
                                                        <td className="p-4 text-slate-500 dark:text-slate-400">
                                                            <span className="font-medium text-slate-700 dark:text-slate-300">{request.adopterName}</span>
                                                            <span className="block text-xs">{request.adopterEmail}</span>
                                                        </td>
                                                        <td className="p-4 font-semibold">
                                                            {Number(request.adoptionFee) === 0 ? (
                                                                <span className="text-emerald-500 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide bg-emerald-500/10 px-2 py-0.5 rounded-md">Free</span>
                                                            ) : (
                                                                <span className="text-slate-700 dark:text-slate-300">৳ {request.adoptionFee}</span>
                                                            )}
                                                        </td>
                                                        <td className="p-4">
                                                            {request.status === 'accepted' ? (
                                                                <Chip color="success" size="xs" className="font-bold uppercase tracking-wide">
                                                                    <CircleCheckFill className="size-4" />
                                                                    <Chip.Label>{request.status}</Chip.Label>
                                                                </Chip>
                                                            ) : request.status === 'rejected' ? (
                                                                <Chip color="danger" size="xs" className="font-bold uppercase tracking-wide">
                                                                    <FaCircleXmark className="size-4" />
                                                                    <Chip.Label>{request.status}</Chip.Label>
                                                                </Chip>
                                                            ) : (
                                                                <Chip color="warning" size="xs" className="font-bold uppercase tracking-wide">
                                                                    <Clock className="size-4" />
                                                                    <Chip.Label>{request.status}</Chip.Label>
                                                                </Chip>
                                                            )}
                                                        </td>
                                                        <td className="p-4 text-slate-500 dark:text-slate-400">
                                                            {request.pickupDate ? (
                                                                <span>{new Date(request.pickupDate).toLocaleDateString()}</span>
                                                            ) : (
                                                                <span className="text-slate-400 dark:text-slate-500">Not scheduled</span>
                                                            )}
                                                        </td>
                                                        <td className="flex justify-end items-center px-4 py-6 text-right space-x-2">
                                                            {request.status === "pending" ? (
                                                                <AlertDialog>
                                                                    <Button color="success">
                                                                        <IoIosCheckmarkCircleOutline className="size-4" /> Accept
                                                                    </Button>
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
                                                                                        Are you sure you want to accept this adoption request? All other pending requests for this pet will be rejected.
                                                                                    </p>
                                                                                </AlertDialog.Body>
                                                                                <AlertDialog.Footer>
                                                                                    <Button slot="close" variant="tertiary">
                                                                                        Cancel
                                                                                    </Button>
                                                                                    <Button onClick={() => handleAccept(request._id)} slot="close" color="success">
                                                                                        Accept Request
                                                                                    </Button>
                                                                                </AlertDialog.Footer>
                                                                            </AlertDialog.Dialog>
                                                                        </AlertDialog.Container>
                                                                    </AlertDialog.Backdrop>
                                                                </AlertDialog>
                                                            ) : (
                                                                <span className="text-xs text-slate-400 capitalize">{request.status}</span>
                                                            )}
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