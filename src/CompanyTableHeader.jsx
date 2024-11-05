import React from 'react';
import './CompanyTableHeader.scss';

const CompanyTableHeader = () => {
    return (
        <div className="table-header">
            <div className="header-item">ID</div>
            <div className="header-item">Company</div>
            <div className="header-item">Overall Rating</div>
            <div className="header-item">Good Reviews</div>
            <div className="header-item">Bad Reviews</div>
            <div className="header-item">Recommended By</div>
            <div className="header-item">Not Recommended By</div>
            <div className="header-item">View</div>
        </div>
    );
};

export default CompanyTableHeader;
