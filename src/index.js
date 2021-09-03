import React from 'react';

import sales from './sales.svg';
import leadcustomer from './leadcustomer.svg';
import customer from './customer.svg';
import hr from './hr.svg';
import staff from './staff.svg';
import documents from './documents.svg';
import googledocs from './google-docs.svg';
import googleforms from './google-forms.svg';
import googlesheets from './google-sheets.svg';
import administration from './administration.svg';
import house from './house.svg';
import group from './group.svg';
import lawyer from './lawyer.svg';
import bank from './bank.svg';
import finance from './finance.svg';
import sale from './sale.svg';
import wallet from './wallet.svg';
import mpesa from './mpesa.svg';
import sto from './sto.svg';
import invoice from './invoice.svg';
import masterdata from './master-data.svg';

const SvgIcon = ({ size, icon: Icon, style, ...props }) => (
  <img
    alt=""
    src={Icon}
    style={{ height: size, width: size, margin: 2.5, ...style }}
    {...props}
  />
);

SvgIcon.defaultProps = {
  size: 24,
};

export const AdminIcon = (props) => (
  <SvgIcon icon={administration} {...props} />
);
export const MasterDataIcon = (props) => (
  <SvgIcon icon={masterdata} {...props} />
);
export const BankIcon = (props) => <SvgIcon icon={bank} {...props} />;
export const LawyerIcon = (props) => <SvgIcon icon={lawyer} {...props} />;
export const HouseIcon = (props) => <SvgIcon icon={house} {...props} />;
export const GoogleDocsIcon = (props) => (
  <SvgIcon icon={googledocs} {...props} />
);
export const GoogleFormsIcon = (props) => (
  <SvgIcon icon={googleforms} {...props} />
);
export const GoogleSheetsIcon = (props) => (
  <SvgIcon icon={googlesheets} {...props} />
);
export const DocumentsIcon = (props) => <SvgIcon icon={documents} {...props} />;
export const SalesIcon = (props) => <SvgIcon icon={sales} {...props} />;
export const StaffIcon = (props) => <SvgIcon icon={staff} {...props} />;
export const GroupIcon = (props) => <SvgIcon icon={group} {...props} />;
export const HrIcon = (props) => <SvgIcon icon={hr} {...props} />;
export const LeadCustomerIcon = (props) => (
  <SvgIcon icon={leadcustomer} {...props} />
);
export const CustomerIcon = (props) => <SvgIcon icon={customer} {...props} />;
export const FinanceIcon = (props) => <SvgIcon icon={finance} {...props} />;
export const WalletIcon = (props) => <SvgIcon icon={wallet} {...props} />;
export const MpesaIcon = (props) => <SvgIcon icon={mpesa} {...props} />;
export const SaleIcon = (props) => <SvgIcon icon={sale} {...props} />;
export const StoIcon = (props) => <SvgIcon icon={sto} {...props} />;
export const InvoiceIcon = (props) => <SvgIcon icon={invoice} {...props} />;
