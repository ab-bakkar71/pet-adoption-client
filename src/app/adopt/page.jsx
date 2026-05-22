import { Card, CardHeader, Form, Input } from '@heroui/react';
import React from 'react';
import { GiPawPrint } from 'react-icons/gi';

const petAdoptPage = () => {
    return (
        <div className='min-h-screen max-w-7xl mx-auto flex items-center justify-center p-6 bg-[#0f1117]'>
           <Card className='w-full max-w-2xl bg-[#161b27] border border-white/10 shadow-2xl rounded-2xl'>
           <CardHeader className="flex items-center gap-2 px-6 pt-6 pb-0">
          <GiPawPrint size={20} className="text-red-400" />
          <h1 className="text-white font-semibold text-lg tracking-tight">Pet Information</h1>
        </CardHeader>

        <div className="px-6 py-5">
            <Form className="flex flex-col gap-5">
                <Input
                label="Pet Name"
                labelPlacement="outside"
                placeholder="e.g. Buddy"
                isRequired
                // value={form.petName}
                // onValueChange={handleChange('petName')}
                // classNames={inputClasses}
              />
            </Form>
          
        </div>
      </Card>
    </div>
  );
};

export default petAdoptPage;