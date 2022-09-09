import React from 'react';

import sales from './assets/sales.svg';
import approve from './assets/approve.svg';
import leadcustomer from './assets/leadcustomer.svg';
import customer from './assets/customer.svg';
import hr from './assets/hr.svg';
import staff from './assets/staff.svg';
import documents from './assets/documents.svg';
import googledocs from './assets/google-docs.svg';
import googleforms from './assets/google-forms.svg';
import googlesheets from './assets/google-sheets.svg';
import administration from './assets/administration.svg';
import accounting from './assets/accounting.svg';
import workflow from './assets/workflow.svg';
import invoice from './assets/invoice.svg';
import house from './assets/house.svg';
import lawyer from './assets/lawyer.svg';
import bank from './assets/bank.svg';
import masterdata from './assets/master-data.svg';
import process from './assets/process.svg';
import production from './assets/production.svg';
import macadamia from './assets/macadamia-nut.svg';
import vegetables from './assets/vegetables.svg';
import search from './assets/search.svg';
import standardcare from './assets/standardcare.svg';
import mediumcare from './assets/mediumcare.svg';
import highcare from './assets/highcare.svg';
import profits from './assets/profits.svg';
import group from './assets/group.svg';
import finance from './assets/finance.svg';
import sale from './assets/sale.svg';
import wallet from './assets/wallet.svg';
import mpesa from './assets/mpesa.svg';
import jhela from './assets/jhela.svg';
import sto from './assets/sto.svg';
import trolley from './assets/trolley.svg';
import rocket from './assets/rocket.svg';

const SvgIcon = ({ size, icon: Icon, ...props }) => (
  <img alt="" src={Icon} style={{ height: size, width: size }} {...props} />
);

SvgIcon.defaultProps = {
  size: 24
};

export const ProcessingIcon = (props) => <SvgIcon icon={process} {...props} />;
export const ProductionIcon = (props) => (
  <SvgIcon icon={production} {...props} />
);

export const AdminIcon = (props) => (
  <SvgIcon icon={administration} {...props} />
);
export const MasterDataIcon = (props) => (
  <SvgIcon icon={masterdata} {...props} />
);
export const ApproveIcon = (props) => <SvgIcon icon={approve} {...props} />;
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
export const HrIcon = (props) => <SvgIcon icon={hr} {...props} />;
export const LeadCustomerIcon = (props) => (
  <SvgIcon icon={leadcustomer} {...props} />
);

export const MacadamiaIcon = (props) => <SvgIcon icon={macadamia} {...props} />;

export const CustomerIcon = (props) => <SvgIcon icon={customer} {...props} />;
export const SearchIcon = (props) => <SvgIcon icon={search} {...props} />;
export const StandardCareIcon = (props) => (
  <SvgIcon icon={standardcare} {...props} />
);
export const MediumCareIcon = (props) => (
  <SvgIcon icon={mediumcare} {...props} />
);
export const HighCareIcon = (props) => <SvgIcon icon={highcare} {...props} />;
export const VegetablesIcon = (props) => (
  <SvgIcon icon={vegetables} {...props} />
);

export const ProfitsIcon = (props) => <SvgIcon icon={profits} {...props} />;

export const FinanceIcon = (props) => <SvgIcon icon={finance} {...props} />;
export const WalletIcon = (props) => <SvgIcon icon={wallet} {...props} />;
export const MpesaIcon = (props) => <SvgIcon icon={mpesa} {...props} />;
export const JhelaIcon = (props) => <SvgIcon icon={jhela} {...props} />;
export const SaleIcon = (props) => <SvgIcon icon={sale} {...props} />;
export const StoIcon = (props) => <SvgIcon icon={sto} {...props} />;
export const InvoiceIcon = (props) => <SvgIcon icon={invoice} {...props} />;
export const GroupIcon = (props) => <SvgIcon icon={group} {...props} />;
export const AccountingIcon = (props) => (
  <SvgIcon icon={accounting} {...props} />
);
export const WorkflowIcon = (props) => <SvgIcon icon={workflow} {...props} />;
export const TrolleyIcon = (props) => <SvgIcon icon={trolley} {...props} />;
export const ProcurementIcon = TrolleyIcon;

export { default as SupplierIcon } from './SupplierIcon';
export { default as FixedAssetsIcon } from './FixedAssetsIcon';
export { default as StockIcon } from './StockIcon';
export { default as PurchaseOrderIcon } from './PurchaseOrderIcon';
export { default as CheckOutIcon } from './PurchaseOrderIcon';
export { default as RocketIcon } from './RocketIcon';
export { default as CubesIcon } from './CubesIcon';
export { default as LetterVIcon } from './LetterVIcon';
export { default as LetterVRoundIcon } from './LetterVRoundIcon';
export { default as AdvanceIcon } from './AdvanceIcon';
export { default as LegalIcon } from './LegalIcon';
