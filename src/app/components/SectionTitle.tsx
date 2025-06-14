import React from 'react';

const SectionTitle = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <div className='text-center pt-10 pb-5'>
            <h2 className=" text-2xl lg:text-4xl font-bold text">{title}</h2>
            <h4 className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</h4>
        </div>
    );
};

export default SectionTitle;