import { Spinner } from '@heroui/react';
import React from 'react';
import { CircleLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 min-h-screen">
        <CircleLoader color="#00bd56" />
      </div>
    );
};

export default loading;