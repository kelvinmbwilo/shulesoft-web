import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShuleSoftFinanceComponent } from './shule-soft-finance.component';
import {ShuleSoftFinanceRoutingModule} from './shule-soft-finance-routing.module';
import { FinanceMenuComponent } from './finance-menu/finance-menu.component';
import {SharedModule} from "../../shared/shared.module";
import { InstallmentsComponent } from './fees/installments/installments.component';
import { DefinitionComponent } from './fees/definition/definition.component';
import { FeeStructureComponent } from './fees/fee-structure/fee-structure.component';
import { DiscountComponent } from './fees/discount/discount.component';
import { UnsubscribedStudentComponent } from './fees/unsubscribed-student/unsubscribed-student.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { RevenueComponent } from './transactions/revenue/revenue.component';
import { ExpenseComponent } from './transactions/expense/expense.component';
import { FixedAssetComponent } from './transactions/fixed-asset/fixed-asset.component';
import { CurrentAssetComponent } from './transactions/current-asset/current-asset.component';
import { LiabilitiesComponent } from './transactions/liabilities/liabilities.component';
import { CapitalComponent } from './transactions/capital/capital.component';
import { CashRequestComponent } from './transactions/cash-request/cash-request.component';
import { ReconciliationComponent } from './transactions/reconciliation/reconciliation.component';
import { VendorsComponent } from './inventory/vendors/vendors.component';
import { ItemsComponent } from './inventory/items/items.component';
import { PurchaseComponent } from './inventory/purchase/purchase.component';
import { UsageComponent } from './inventory/usage/usage.component';
import { PocketMoneyComponent } from './inventory/pocket-money/pocket-money.component';
import { SalariesComponent } from './payroll/salaries/salaries.component';
import { TaxStatusComponent } from './payroll/tax-status/tax-status.component';
import { TaxPensionFundComponent } from './payroll/tax-pension-fund/tax-pension-fund.component';
import { PensionFundComponent } from './payroll/pension-fund/pension-fund.component';
import { AllowancesComponent } from './payroll/allowances/allowances.component';
import { DeductionsComponent } from './payroll/deductions/deductions.component';
import { LoanTypesComponent } from './payroll/loan-types/loan-types.component';
import { BorrowersComponent } from './payroll/borrowers/borrowers.component';
import { ReportsComponent } from './reports/reports.component';
import { AccountGroupsComponent } from './settings/account-groups/account-groups.component';
import { ChartOfAccountsComponent } from './settings/chart-of-accounts/chart-of-accounts.component';
import { OpeningBalanceComponent } from './settings/opening-balance/opening-balance.component';
import { ImportExportComponent } from './settings/import-export/import-export.component';
import { InvoiceGuideComponent } from './settings/invoice-guide/invoice-guide.component';
import { BankingComponent } from './settings/banking/banking.component';



@NgModule({
    declarations: [
        ShuleSoftFinanceComponent,
        FinanceMenuComponent,
        InstallmentsComponent,
        DefinitionComponent,
        FeeStructureComponent,
        DiscountComponent,
        UnsubscribedStudentComponent,
        InvoiceComponent,
        RevenueComponent,
        ExpenseComponent,
        FixedAssetComponent,
        CurrentAssetComponent,
        LiabilitiesComponent,
        CapitalComponent,
        CashRequestComponent,
        ReconciliationComponent,
        VendorsComponent,
        ItemsComponent,
        PurchaseComponent,
        UsageComponent,
        PocketMoneyComponent,
        SalariesComponent,
        TaxStatusComponent,
        TaxPensionFundComponent,
        PensionFundComponent,
        AllowancesComponent,
        DeductionsComponent,
        LoanTypesComponent,
        BorrowersComponent,
        ReportsComponent,
        AccountGroupsComponent,
        ChartOfAccountsComponent,
        OpeningBalanceComponent,
        ImportExportComponent,
        InvoiceGuideComponent,
        BankingComponent
    ],
    exports: [
        FinanceMenuComponent
    ],
    imports: [
        CommonModule,
        ShuleSoftFinanceRoutingModule,
      SharedModule,
    ]
})
export class ShuleSoftFinanceModule { }
