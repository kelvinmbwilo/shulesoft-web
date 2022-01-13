import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShuleSoftFinanceComponent} from './shule-soft-finance.component';
import {FinanceMenuComponent} from './finance-menu/finance-menu.component';
import {InstallmentsComponent} from "./fees/installments/installments.component";
import {DefinitionComponent} from "./fees/definition/definition.component";
import {FeeStructureComponent} from "./fees/fee-structure/fee-structure.component";
import {DiscountComponent} from "./fees/discount/discount.component";
import {InvoiceComponent} from "./invoice/invoice.component";
import {RevenueComponent} from "./transactions/revenue/revenue.component";
import {ReconciliationComponent} from "./transactions/reconciliation/reconciliation.component";
import {CashRequestComponent} from "./transactions/cash-request/cash-request.component";
import {CapitalComponent} from "./transactions/capital/capital.component";
import {LiabilitiesComponent} from "./transactions/liabilities/liabilities.component";
import {CurrentAssetComponent} from "./transactions/current-asset/current-asset.component";
import {FixedAssetComponent} from "./transactions/fixed-asset/fixed-asset.component";
import {ExpenseComponent} from "./transactions/expense/expense.component";
import {VendorsComponent} from "./inventory/vendors/vendors.component";
import {ItemsComponent} from "./inventory/items/items.component";
import {PurchaseComponent} from "./inventory/purchase/purchase.component";
import {UsageComponent} from "./inventory/usage/usage.component";
import {PocketMoneyComponent} from "./inventory/pocket-money/pocket-money.component";
import {SalariesComponent} from "./payroll/salaries/salaries.component";
import {TaxStatusComponent} from "./payroll/tax-status/tax-status.component";
import {PensionFundComponent} from "./payroll/pension-fund/pension-fund.component";
import {AllowancesComponent} from "./payroll/allowances/allowances.component";
import {DeductionsComponent} from "./payroll/deductions/deductions.component";
import {LoanTypesComponent} from "./payroll/loan-types/loan-types.component";
import {BorrowersComponent} from "./payroll/borrowers/borrowers.component";
import {ReportsComponent} from "./reports/reports.component";
import {ChartOfAccountsComponent} from "./settings/chart-of-accounts/chart-of-accounts.component";
import {InvoiceGuideComponent} from "./settings/invoice-guide/invoice-guide.component";
import {ImportExportComponent} from "./settings/import-export/import-export.component";
import {OpeningBalanceComponent} from "./settings/opening-balance/opening-balance.component";
import {AccountGroupsComponent} from "./settings/account-groups/account-groups.component";
import {BankingComponent} from "./settings/banking/banking.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: FinanceMenuComponent,
    data: {state: 'dashboard', title: 'Finance Dashboard'}
  },
  {
    path: 'fees',
    component: InstallmentsComponent,
    data: {state: 'fees', title: 'Fees'}
  },
  {
    path: 'fees/installments',
    component: InstallmentsComponent,
    data: {state: 'installments', title: 'Installments'}
  },
  {
    path: 'fees/definition',
    component: DefinitionComponent,
    data: {state: 'definition', title: 'Definition'}
  },
  {
    path: 'fees/fee-structure',
    component: FeeStructureComponent,
    data: {state: 'fee-structure', title: 'Fee Structure'}
  },
  {
    path: 'fees/discount',
    component: DiscountComponent,
    data: {state: 'discount', title: 'Discount'}
  },
  {
    path: 'fees/unsubscribed-student',
    component: FinanceMenuComponent,
    data: {state: 'unsubscribed-student', title: 'Unsubscribed Student'}
  },
  {
    path: 'invoices',
    component: InvoiceComponent,
    data: {state: 'invoices', title: ''}
  },
  {
    path: 'transactions',
    component: RevenueComponent,
    data: {state: 'transactions', title: 'Transactions'}
  },
  {
    path: 'transactions/revenue',
    component: RevenueComponent,
    data: {state: 'revenue', title: 'Revenue'}
  },
  {
    path: 'transactions/expense',
    component: ExpenseComponent,
    data: {state: 'expense', title: 'Expense'}
  },
  {
    path: 'transactions/fixed-asset',
    component: FixedAssetComponent,
    data: {state: 'fixed-asset', title: 'Fixed Asset'}
  },
  {
    path: 'transactions/current-asset',
    component: CurrentAssetComponent,
    data: {state: 'current-asset', title: 'Current Asset'}
  },
  {
    path: 'transactions/liabilities',
    component: LiabilitiesComponent,
    data: {state: 'liabilities', title: 'Liabilities'}
  },
  {
    path: 'transactions/capital',
    component: CapitalComponent,
    data: {state: 'capital', title: 'Capital'}
  },
  {
    path: 'transactions/cash-request',
    component: CashRequestComponent,
    data: {state: 'cash-request', title: 'Cash Request'}
  },
  {
    path: 'transactions/reconciliation',
    component: ReconciliationComponent,
    data: {state: 'reconciliation', title: 'Reconciliation'}
  },
  {
    path: 'inventory',
    component: VendorsComponent,
    data: {state: 'vendors', title: 'Vendors'}
  },
  {
    path: 'inventory/vendors',
    component: VendorsComponent,
    data: {state: 'vendors', title: 'Vendors'}
  },
  {
    path: 'inventory/items',
    component: ItemsComponent,
    data: {state: 'items', title: 'Items'}
  },
  {
    path: 'inventory/purchase',
    component: PurchaseComponent,
    data: {state: 'purchase', title: 'Purchase'}
  },
  {
    path: 'inventory/usage',
    component: UsageComponent,
    data: {state: 'usage', title: 'Usage'}
  },
  {
    path: 'inventory/pocket-money',
    component: PocketMoneyComponent,
    data: {state: 'pocket-money', title: 'Pocket Money'}
  },
  {
    path: 'payroll',
    component: SalariesComponent,
    data: {state: 'payroll', title: 'Payroll'}
  },
  {
    path: 'payroll/salaries',
    component: SalariesComponent,
    data: {state: 'salaries', title: 'Salaries'}
  },
  {
    path: 'payroll/tax-status',
    component: TaxStatusComponent,
    data: {state: 'tax-status', title: 'Tax Status'}
  },
  {
    path: 'payroll/pension-fund',
    component: PensionFundComponent,
    data: {state: 'pension-fund', title: 'Pension Fund'}
  },
  {
    path: 'payroll/allowances',
    component: AllowancesComponent,
    data: {state: 'allowances', title: 'Allowances'}
  },
  {
    path: 'payroll/deductions',
    component: DeductionsComponent,
    data: {state: 'deductions', title: 'Deductions'}
  },
  {
    path: 'payroll/loan-types',
    component: LoanTypesComponent,
    data: {state: 'loan-types', title: 'Loan Types'}
  },
  {
    path: 'payroll/borrowers',
    component: BorrowersComponent,
    data: {state: 'borrowers', title: 'Borrowers'}
  },
  {
    path: 'reports',
    component: ReportsComponent,
    data: {state: 'reports', title: 'Reports'}
  },
  {
    path: 'settings',
    component: BankingComponent,
    data: {state: 'settings', title: 'Settings'}
  },
  {
    path: 'banking',
    component: BankingComponent,
    data: {state: 'banking', title: 'Banking'}
  },
  {
    path: 'account-groups',
    component: AccountGroupsComponent,
    data: {state: 'account-groups', title: 'Account Groups'}
  },
  {
    path: 'chart-of-accounts',
    component: ChartOfAccountsComponent,
    data: {state: 'chart-of-accounts', title: 'Chart of Accounts'}
  },
  {
    path: 'opening-balance',
    component: OpeningBalanceComponent,
    data: {state: 'opening-balance', title: 'Opening Balance'}
  },
  {
    path: 'import-export',
    component: ImportExportComponent,
    data: {state: 'import-export', title: 'Import Export'}
  },
  {
    path: 'invoice-guide',
    component: InvoiceGuideComponent,
    data: {state: 'invoice-guide', title: 'Invoice Guide'}
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShuleSoftFinanceRoutingModule { }
