"use client"


import { authClient } from '@/lib/auth-client';
import { Button, Fieldset, Form, Select, Input, Label, ListBox, TextArea, TextField, FieldError } from '@heroui/react';

import React from 'react';
import { toast } from 'react-toastify';

const adoptPage = () => {

  // get user
      const userinfo = authClient.useSession();
      const user = userinfo?.data?.user;

  const onSubmit = async(e)=>{
      e.preventDefault()
      const fromData = new FormData(e.currentTarget)
      const adoptPet = Object.fromEntries(fromData.entries())

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/adopt`,{
        method: 'post',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(adoptPet)
      })
      const data =await res.json()
       if(data.insertedId){
        toast.success("Pet Added Successful")
    }
    return data
  }


  return (
    
    <section className='py-12 bg-gray-50 dark:bg-slate-950 min-h-screen flex items-center transition-colors duration-300'>

      <form onSubmit={onSubmit} className="p-6 sm:p-10 space-y-8 max-w-4xl mx-auto w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 shadow-xl rounded-2xl transition-all">
        
        <div className="text-center mb-2">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Adopt a Pet</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Discover your new best friend and give a loving home to a pet in need.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Pet Name */}
          <TextField name="petName" isRequired className="flex flex-col gap-1.5">
            <Label className="block text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Pet Name</Label>
            <Input 
              placeholder="e.g., Daisy, Buddy" 
              className="w-full px-4 py-2.5 rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600" 
            />
            <FieldError className="text-red-500 text-xs mt-1" />
          </TextField>

          {/* Species */}
          <TextField name="species" isRequired className="flex flex-col gap-1.5">
            <Label className="block text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Species</Label>
            <Input 
              placeholder="Dog, Cat, Bird, etc." 
              className="w-full px-4 py-2.5 rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600" 
            />
            <FieldError className="text-red-500 text-xs mt-1" />
          </TextField>

          {/* Breed */}
          <TextField name="breed" isRequired className="flex flex-col gap-1.5">
            <Label className="block text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Breed</Label>
            <Input 
              placeholder="e.g., Golden Retriever, Siamese" 
              className="w-full px-4 py-2.5 rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600" 
            />
            <FieldError className="text-red-500 text-xs mt-1" />
          </TextField>

          {/* Age */}
          <TextField name="age" isRequired className="flex flex-col gap-1.5">
            <Label className="block text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Age</Label>
            <Input 
              placeholder="e.g., 2 Years / 5 Months" 
              className="w-full px-4 py-2.5 rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600" 
            />
            <FieldError className="text-red-500 text-xs mt-1" />
          </TextField>

          {/* Gender - Dropdown */}
          <div className="flex flex-col gap-1.5">
            <Select name="gender" isRequired className="w-full" placeholder="Select gender">
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
          <TextField name="location" isRequired className="flex flex-col gap-1.5">
            <Label className="block text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Location</Label>
            <Input 
              placeholder="e.g., Mirpur, Dhaka" 
              className="w-full px-4 py-2.5 rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600" 
            />
            <FieldError className="text-red-500 text-xs mt-1" />
          </TextField>

          {/* Health Status */}
          <TextField name="healthStatus" isRequired className="flex flex-col gap-1.5">
            <Label className="block text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Health Status</Label>
            <Input 
              placeholder="e.g., Healthy, Under Medication" 
              className="w-full px-4 py-2.5 rounded-xl text-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600" 
            />
            <FieldError className="text-red-500 text-xs mt-1" />
          </TextField>

          {/* Vaccination Status - Dropdown */}
          <div className="flex flex-col gap-1.5">
            <Select name="vaccinationStatus" isRequired className="w-full" placeholder="Select vaccination status">
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
          <TextField name="adoptionFee" type="number" isRequired className="flex flex-col gap-1.5">
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
            <TextField name="imageUrl" isRequired className="flex flex-col gap-1.5">
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
            <TextField name="description" isRequired className="flex flex-col gap-1.5">
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
            <TextField name="ownerEmail" className="flex flex-col gap-1.5">
              <Label className="block text-left text-sm font-semibold text-slate-400 dark:text-slate-500">O</Label>
              <Input
                type="text"
                value={user.name}
                readOnly
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed outline-hidden"
              />
            </TextField>
          </div>



        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold h-11 rounded-xl transition-all shadow-md active:scale-[0.99] cursor-pointer text-sm"
        >
          Adopt Now
        </Button>
      </form>
    </section>



    // <section className='py-12 bg-gray-50 dark:bg-slate-900 min-h-screen '>

    //   <form
    //     className="p-10 space-y-8 max-w-3xl mx-auto bg-surface "
    //   >
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
    //       {/* pet Name */}
    //       <div className="md:col-span-2">
    //         <TextField name="petName" isRequired>
    //           <Label>Pet Name</Label>
    //           <Input placeholder="Daisy, Buddy" className="rounded-2xl" />
    //           <FieldError />
    //         </TextField>
    //       </div>

    //       {/* Country */}
    //       <TextField name="country" isRequired>
    //         <Label>Country</Label>
    //         <Input placeholder="Indonesia" className="rounded-2xl" />
    //         <FieldError />
    //       </TextField>

    //       {/* Category - Updated Select Component */}
    //       <div>
    //         <Select
    //           name="category"
    //           isRequired
    //           className="w-full"
    //           placeholder="Select category"
    //         >
    //           <Label>Category</Label>
    //           <Select.Trigger className="rounded-2xl">
    //             <Select.Value />
    //             <Select.Indicator />
    //           </Select.Trigger>
    //           <Select.Popover>
    //             <ListBox>
    //               <ListBox.Item id="Beach" textValue="Beach">
    //                 Beach
    //                 <ListBox.ItemIndicator />
    //               </ListBox.Item>
    //               <ListBox.Item id="Mountain" textValue="Mountain">
    //                 Mountain
    //                 <ListBox.ItemIndicator />
    //               </ListBox.Item>
    //               <ListBox.Item id="City" textValue="City">
    //                 City
    //                 <ListBox.ItemIndicator />
    //               </ListBox.Item>
    //               <ListBox.Item id="Adventure" textValue="Adventure">
    //                 Adventure
    //                 <ListBox.ItemIndicator />
    //               </ListBox.Item>
    //               <ListBox.Item id="Cultural" textValue="Cultural">
    //                 Cultural
    //                 <ListBox.ItemIndicator />
    //               </ListBox.Item>
    //               <ListBox.Item id="Luxury" textValue="Luxury">
    //                 Luxury
    //                 <ListBox.ItemIndicator />
    //               </ListBox.Item>
    //             </ListBox>
    //           </Select.Popover>
    //         </Select>
    //       </div>

    //       {/* Price */}
    //       <TextField name="price" type="number" isRequired>
    //         <Label>Price (USD)</Label>
    //         <Input
    //           type="number"
    //           placeholder="1299"
    //           className="rounded-2xl"
    //         />
    //         <FieldError />
    //       </TextField>

    //       {/* Duration */}
    //       <TextField name="duration" isRequired>
    //         <Label>Duration</Label>
    //         <Input
    //           placeholder="7 Days / 6 Nights"
    //           className="rounded-2xl"
    //         />
    //         <FieldError />
    //       </TextField>

    //       {/* Departure Date */}
    //       <div className="md:col-span-2">
    //         <TextField name="departureDate" type="date" isRequired>
    //           <Label>Departure Date</Label>
    //           <Input type="date" className="rounded-2xl" />
    //           <FieldError />
    //         </TextField>
    //       </div>

    //       {/* Image URL - Removed preview */}
    //       <div className="md:col-span-2">
    //         <TextField name="imageUrl" isRequired>
    //           <Label>Image URL</Label>
    //           <Input
    //             type="url"
    //             placeholder="https://example.com/bali-paradise.jpg"
    //             className="rounded-2xl"
    //           />
    //           <FieldError />
    //         </TextField>
    //       </div>

    //       {/* Description */}
    //       <div className="md:col-span-2">
    //         <TextField name="description" isRequired>
    //           <Label>Description</Label>
    //           <TextArea
    //             placeholder="Describe the travel experience..."
    //             className="rounded-3xl"
    //           />
    //           <FieldError />
    //         </TextField>
    //       </div>
    //     </div>

    //     {/* Buttons */}

    //     <Button
    //       type="submit"
    //       variant="outline"

    //       className=" rounded-none w-full bg-cyan-500 text-white"
    //     >
    //         Adopt Now
    //     </Button>
    //   </form>

    // </section>
  );
};

export default adoptPage;