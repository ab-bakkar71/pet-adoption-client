"use client"
import { authClient } from '@/lib/auth-client';
import { getAdoptionRequestByEmail } from '@/lib/data';
import { CircleCheckFill, Clock } from '@gravity-ui/icons';
import { AlertDialog, Avatar, Button, Chip } from '@heroui/react';
import React, { useEffect, useState } from 'react';
import { FaCircleXmark } from 'react-icons/fa6';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { CircleLoader } from 'react-spinners';

const MyAdoptionClient = () => {
    const [myAdoptions, setMyAdoptions] = useState([]);
    const [loading, setLoading] = useState(true)

    // get user
    const userinfo = authClient.useSession();
    const user = userinfo?.data?.user;
    const email = user?.email;

    useEffect(() => {
        const fetchData = async () => {
            if (!email) return;
            setLoading(true)
            const data = await getAdoptionRequestByEmail(email);
            setMyAdoptions(data);
            setLoading(false)


        };
        fetchData();

    }, [email])

    console.log(myAdoptions);


    return (
        <>
            {
                loading ? (<div className="flex flex-col items-center justify-center gap-2 min-h-screen">
                    <CircleLoader color="#00bd56" />
                </div>) : (
                    <>
                        <div className="rounded-2xl border bg-white border-slate-200 shadow-sm dark:bg-slate-900/40 dark:border-slate-800/80 overflow-hidden">
                            <div className="p-5 border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                                <div>
                                    <h3 className="font-bold text-base text-slate-900 dark:text-white">My Adoption Request</h3>
                                    <p className="text-xs text-slate-400 mt-0.5">My requesting pets for adoption.</p>
                                </div>
                            </div>
                        </div>

                        <div className="my-5 p-5 rounded-2xl border border-slate-200 bg-white shadow-sm dark:bg-slate-900/40 dark:border-slate-800/80 overflow-hidden">
                            {

                                myAdoptions.length === 0 ? (
                                    <div className="h-[60vh] flex items-center justify-center">
                                        <h2 className="text-4xl font-bold">You did not add any pets.</h2>


                                    </div>
                                ) : (
                                    <div className='overflow-x-auto'>
                                        <table className="w-full text-left text-sm border-collapse">
                                            <thead>
                                                <tr className="bg-slate-50/70 dark:bg-slate-900/20 text-slate-400 dark:text-slate-500 font-semibold border-b border-slate-100 dark:border-slate-800/60">
                                                    <th className="p-4">Pet Image</th>
                                                    <th className="p-4">Pet Name</th>
                                                    <th className="p-4">Owner Name / Email</th>
                                                    <th className="p-4">Adoption Fee</th>
                                                    <th className="p-4">Status</th>
                                                    <th className="p-4">Pickup Date</th>
                                                    <th className="p-4 text-right">Actions</th>
                                                </tr>
                                            </thead>

                                            <tbody className='divide-y divide-slate-100 dark:divide-slate-800/40'>
                                                {myAdoptions.map(request => (
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
                                                            <span className="font-medium text-slate-700 dark:text-slate-300">{request.ownerName}</span>
                                                            <span className="block text-xs">{request.ownerEmail}</span>
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
                                                                    <Button color="success"> <IoCheckmarkCircle className='size-4' /> Accept</Button>
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
                                                                </AlertDialog>) : (<Button color="success" isDisabled> <IoCheckmarkCircle className='size-4' />Accept</Button>)
                                                            }

                                                        </td>

                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>


                                )
                            }
                        </div>
                    </>
                )}
        </>
    );
};

export default MyAdoptionClient;