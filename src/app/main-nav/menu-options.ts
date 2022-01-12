export  const menuOptions = [
  {
    name: 'Academics',
    shortName: 'Academics',
    route: ['', 'summary', 'loans'],
    description: 'View summary of loans by time and members',
    icon: 'academics',
    children: [
      {name: 'Class', route: 'class'},
      {name: 'Sections', route: 'sections'},
      {
        name: 'Subjects',
        route: 'subjects',
        children: [
          { name: 'List of Subjects', route: 'subject-list' },
          { name: 'Class Subject', route: 'class-subject' },
          { name: 'Section subject teacher', route: 'section-subject-teachet' }
        ]
      },
      {
        name: 'Grading',
        route: 'grading',
        children: [
          { name: 'Default Grading', route: 'Special' },
          { name: 'Special Grading',  route: 'class-subject' },
          { name: 'Special Grade Name', route: 'section-subject-teachet' }
        ]
      },
      { name: 'Terms', route: 'terms' },
      { name: 'Exams', route: 'exams', children: [
          { name: 'Setting', route: 'schedule' },
          { name: 'exam Schedule', route: '' },
          { name: 'Reports', route: 'report' },
          { name: 'Student Characters', route: 'report' },
          { name: 'Minor School Exams', route: 'report' }
        ]
      },
      { name: 'Character', route: 'character', children: [
          { name: 'Category', route: 'category' },
          { name: 'List of Character', route: 'list-of-character' },
          { name: 'Character Grade', route: 'character-grade' },
          { name: 'General Assessment', route: 'general-assessment' },
          { name: 'Reports', route: 'reports' }
        ]
      },
      { name: 'Mark', route: 'mark', }
    ]
  },
  {
    name: 'Teachers & Students',
    shortName: 'Users',
    route: ['', 'summary',  'contributions'],
    description: 'View summary of contributions by time and members',
    icon: 'teaching',
    children: [
      {name: 'Students', route: 'students'},
      {name: 'Parents', route: 'parents'},
      {name: 'Teachers', route: 'teachers'},
      {name: 'Supporting Staff', route: 'Supporting Staff'},
    ]
  },
  {
    name: 'Finance Management',
    shortName: 'Finance',
    route: ['', 'summary',  'fines'],
    description: 'View summary of fines by time or members',
    icon: 'finance',
    children: [
      {name: 'Fees', route: 'fees', children: [
          {name: 'Installments', route: 'installments'},
          {name: 'Definition', route: 'definition'},
          {name: 'Fee Structure', route: 'fee-structure'},
          {name: 'Discount', route: 'discount'},
          {name: 'Unsubscribed Student', route: 'unsubscribed-student'}
        ]
      },
      {name: 'Invoices', route: 'invoices'},
      {name: 'Transactions', route: 'transactions', children: [
          {name: 'Revenue', route: 'revenue'},
          {name: 'Expense', route: 'expense'},
          {name: 'Fixed Asset', route: 'fixed asset'},
          {name: 'Current Asset', route: 'current Asset'},
          {name: 'Liabilities', route: 'liabilities'},
          {name: 'Capital', route: 'capital'},
          {name: 'Cash Request', route: 'cash-request'},
          {name: 'Reconciliation', route: 'reconciliation'},
        ]
      },
      {name: 'Inventory', route: 'inventory', children: [
          {name: 'Vendors', route: 'Vendors'},
          {name: 'Items', route: 'items'},
          {name: 'Purchase', route: 'Purchase'},
          {name: 'Usage', route: 'usage'},
          {name: 'Pocket Money', route: 'Pocket Money'},
        ]
      },
      {name: 'Payroll', route: 'payroll', children: [
          {name: 'Salaries', route: 'salaries'},
          {name: 'Tax Status', route: 'tax-status'},
          {name: 'Pension Fund', route: 'pension-fund'},
          {name: 'Allowances', route: 'allowances'},
          {name: 'Deductions', route: 'Deductions'},
          {name: 'Loan Types', route: 'loan-types'},
          {name: 'Borrowers', route: 'borrowers'},
        ]
      },
      {name: 'Reports', route: 'repors'},
      {name: 'Settings', route: 'settings', children: [
          {name: 'Banking', route: 'banking'},
          {name: 'Account Groups', route: 'account-groups'},
          {name: 'Chart of Accounts', route: 'chart-of-accounts'},
          {name: 'Opening Balance', route: 'opening-balance'},
          {name: 'Import/Export', route: 'import-export'},
          {name: 'Invoice Guide', route: 'invoice-guide'},
        ]
      },
    ]
  },
  {
    name: 'Operations',
    shortName: 'Operations',
    route: ['', 'summary',  'expenses'],
    description: 'View summary of expenses by time or members',
    icon: 'school-bus',
    children: [
      {name: 'Promotions', children: 'promotions'},
      {name: 'Hostel', route: 'hostel', children: [
          {name: 'Hostel', route: 'hostel'},
          {name: 'Members', route: 'members'},
        ]
      },
      {name: 'Transport', route: 'transport', children: [
          {name: 'Vehicle', route: 'vehicle'},
          {name: 'Transport Route', route: 'transport-route'},
          {name: 'Member Details', route: 'member-details'},
        ]
      },
      {name: 'Library', route: 'library', children: [
          {name: 'Members', route: 'members'},
          {name: 'Books', route: 'books'},
          {name: 'Issue', route: 'issue'},
          {name: 'Library Report', route: 'library-report'},
        ]
      },
      {name: 'Attendance', route: 'attendance', children: [
          {name: 'Student Attendance', route: 'student-attendance'},
          {name: 'Employee Attendance', route: 'employee-attendance'},
          {name: 'Exam Attendance', route: 'exam-attendance'},
          {name: 'Teacher on Duty', route: 'teacher-on-duty'},
          {name: 'Attendance Report', route: 'attendance-report'},
        ]
      },
      {name: 'Routine', route: 'routine', children: [
          {name: 'Class Routine', route: 'class-routine'},
          {name: 'Daily Routine', route: 'daily-routine'},
        ]
      },
    ]
  },
  {
    name: 'Digital Learning',
    shortName: 'Digital',
    route: ['', 'summary',  'loan-queue'],
    description: 'View list of members who are waiting to get loan',
    icon: 'digital-learning',
    children: [
      {name: 'Files', route: 'files'},
      {name: 'Live Studies', route: 'live-studies'},
      {name: 'Class Notes', route: 'class-notes'},
      {name: 'Online Exams', route: 'online-exams'},
      {name: 'Home Packages', route: 'home-packages'},
      {name: 'Online Discussion', route: 'online-discussion'},
    ]
  },
  {
    name: 'Communication',
    shortName: 'Communication',
    route: ['', 'summary',  'export'],
    description: 'Export data in excel format for sharing with other members',
    icon: 'summary',
    children: [
      {name: 'Email/SMS', route: 'emaim-sms'},
      {name: 'Messages', route: 'messages'},
    ]
  },
  //
  // {
  //   name: 'Adjustments',
  //   route: ['', 'summary',  'adjustments'],
  //   description: 'Summary of adjustments performed in accounts',
  //   image: 'adjustment.png'
  // },
  // {
  //   name: 'Cash Transfers',
  //   route: ['', 'summary', 'cash-transfers'],
  //   description: 'Summary of cash transfers from one account to another',
  //   image: 'money-transfer.png'
  // },
];
