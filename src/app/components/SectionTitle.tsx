import React from 'react';

const SectionTitle = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <div className='text-center pt-10 pb-5'>
            <h2 className="lg:text-4xl font-bold text">{title}</h2>
            <h4 className="lg:text-2xl font-semibold">{subtitle}</h4>
        </div>
    );
};

export default SectionTitle;