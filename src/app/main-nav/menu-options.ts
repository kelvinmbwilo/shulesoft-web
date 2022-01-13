export  const menuOptions = [

  {
    name: 'Administration',
    shortName: 'Administration',
    route: ['', 'module',  'users'],
    pathRoute: ['', 'module',  'users', 'students'],
    description: ' Manage users (students, parents, teachers, non-teaching staff), User ID cards, Staff Reports, etc',
    icon: 'teaching',
    children: [
      {name: 'Dashboard', route: ['', 'module',  'users', 'dashboard'], icon: 'shule_soft_dashboard' },
      {name: 'Students', route: ['', 'module',  'users', 'students'], icon: 'students' },
      {name: 'Parents', route: ['', 'module',  'users', 'parents'], icon: 'icon_user'},
      {name: 'Teachers', route: ['', 'module',  'users', 'teachers'], icon: 'teaching' },
      {name: 'Supporting Staff', route: ['', 'module',  'users', 'supporting-staff'], icon: 'shule_soft_users' },
    ]
  },
  {
    name: 'Accounting',
    shortName: 'Accounting',
    route: ['', 'module',  'finance'],
    pathRoute: ['', 'module',  'finance', 'dashboard'],
    description: 'Setting fee structure, create invoices (control no), recording expenditures, managing assets, payroll, etc',
    icon: 'finance',
    children: [
      {name: 'Dashboard', route: ['', 'module',  'finance', 'dashboard'], icon: 'shule_soft_dashboard'},
      {name: 'Fees', key: 'fees', route: ['', 'module',  'finance', 'fees'], icon: 'fees', children: [
          {name: 'Installments', route: ['', 'module',  'finance', 'fees', 'installments'] },
          {name: 'Definition', route: ['', 'module',  'finance', 'fees', 'definition'] },
          {name: 'Fee Structure', route: ['', 'module',  'finance', 'fees', 'fee-structure'] },
          {name: 'Discount', route: ['', 'module',  'finance', 'fees', 'discount'] },
          {name: 'Unsubscribed Student', route: ['', 'module',  'finance', 'fees', 'unsubscribed-student'] }
        ]
      },
      {name: 'Invoices', route: ['', 'module',  'finance', 'invoices'], icon: 'invoice'},
      {name: 'Transactions', key: 'transactions', route: ['', 'module',  'finance', 'transactions'], icon: 'transaction', children: [
          {name: 'Revenue', route: ['', 'module',  'finance', 'transactions', 'revenue'] },
          {name: 'Expense', route: ['', 'module',  'finance', 'transactions', 'expense'] },
          {name: 'Fixed Asset', route: ['', 'module',  'finance', 'transactions', 'fixed-asset'] },
          {name: 'Current Asset', route: ['', 'module',  'finance', 'transactions', 'current-asset'] },
          {name: 'Liabilities', route: ['', 'module',  'finance', 'transactions', 'liabilities'] },
          {name: 'Capital', route: ['', 'module',  'finance', 'transactions', 'capital'] },
          {name: 'Cash Request', route: ['', 'module',  'finance', 'transactions', 'cash-request'] },
          {name: 'Reconciliation', route: ['', 'module',  'finance', 'transactions', 'reconciliation'] },
        ]
      },
      {name: 'Inventory', key: 'inventory', route: ['', 'module',  'finance', 'inventory'], icon: 'inventory', children: [
          {name: 'Vendors', route: ['', 'module',  'finance', 'inventory', 'vendors'] },
          {name: 'Items', route: ['', 'module',  'finance', 'inventory', 'items'] },
          {name: 'Purchase', route: ['', 'module',  'finance', 'inventory', 'purchase'] },
          {name: 'Usage', route: ['', 'module',  'finance', 'inventory', 'usage'] },
          {name: 'Pocket Money', route: ['', 'module',  'finance', 'inventory', 'pocket-money'] },
        ]
      },
      {name: 'Payroll', key: 'payroll', route: ['', 'module',  'finance', 'payroll'], icon: 'payroll', children: [
          {name: 'Salaries', route: ['', 'module',  'finance', 'payroll', 'salaries'] },
          {name: 'Tax Status', route: ['', 'module',  'finance', 'payroll', 'tax-status'] },
          {name: 'Pension Fund', route: ['', 'module',  'finance', 'payroll', 'pension-fund'] },
          {name: 'Allowances', route: ['', 'module',  'finance', 'payroll', 'allowances'] },
          {name: 'Deductions', route: ['', 'module',  'finance', 'payroll', 'deductions'] },
          {name: 'Loan Types', route: ['', 'module',  'finance', 'payroll', 'loan-types'] },
          {name: 'Borrowers', route: ['', 'module',  'finance', 'payroll', 'borrowers'] },
        ]
      },
      {name: 'Reports', route: ['', 'module',  'finance', 'reports'], icon: 'view_charts'},
      {name: 'Settings', key: 'settings', route: ['', 'module',  'finance', 'settings'], icon: 'settings', children: [
          {name: 'Banking', route: 'banking'},
          {name: 'Account Groups', route: ['', 'module',  'finance', 'settings', 'account-groups'] },
          {name: 'Chart of Accounts', route: ['', 'module',  'finance', 'settings', 'chart-of-accounts'] },
          {name: 'Opening Balance', route: ['', 'module',  'finance', 'settings', 'opening-balance'] },
          {name: 'Import/Export', route: ['', 'module',  'finance', 'settings', 'import-export'] },
          {name: 'Invoice Guide', route: ['', 'module',  'finance', 'settings', 'invoice-guide'] },
        ]
      },
    ]
  },
  {
    name: 'Academics',
    shortName: 'Academics',
    route: ['', 'module', 'academics'],
    pathRoute: ['', 'module', 'academics', 'dashboard'],
    description: 'Enter marks, generate academic reports, set subjects, competence based report, etc',
    icon: 'academics',
    children: [
      {name: 'Dashboard', route: ['', 'module', 'academics', 'dashboard'], icon: 'dashboard'},
      {name: 'Class', route: ['', 'module', 'academics', 'class'], icon: 'class'},
      {name: 'Sections', route: ['', 'module', 'academics', 'sections'], icon: 'sections'},
      {
        name: 'Subjects',
        key: 'subjects',
        icon: 'subject',
        route: ['', 'module', 'academics', 'subjects'],
        children: [
          { name: 'List of Subjects', route: ['', 'module', 'academics', 'subjects', 'subject-list'] },
          { name: 'Class Subject', route: ['', 'module', 'academics', 'subjects', 'class-subject'] },
          { name: 'Section subject teacher', route: ['', 'module', 'academics', 'subjects','section-subject-teacher'] }
        ]
      },
      {
        name: 'Grading',
        route: 'grading',
        key: 'grading',
        icon: 'grading',
        children: [
          { name: 'Default Grading', route: 'Special' },
          { name: 'Special Grading',  route: 'class-subject' },
          { name: 'Special Grade Name', route: 'section-subject-teachet' }
        ]
      },
      { name: 'Terms', route: 'terms', icon: 'terms' },
      { name: 'Exams', route: 'exams', icon: 'exams', children: [
          { name: 'Settings', route: 'settings', children: [
              { name: 'Exam Group', route: 'exam-group' },
              { name: 'School Exams', route: 'school-exams' },
              { name: 'Class Allocation', route: 'class-allocation' },
            ]
          },
          { name: 'exam Schedule', route: 'exam-schedule' },
          { name: 'Reports', route: 'report', children: [
              { name: 'Single Reports', route: 'single-report' },
              { name: 'Combined Report', route: 'combined-report' },
              { name: 'CA Report', route: 'ca-report' },
              { name: 'Reports Created', route: 'reports-created' },
            ]
          },
          { name: 'Student Characters', route: 'student-characters'},
          { name: 'Minor School Exams', route: 'minor-school-exams' }
        ]
      },
      { name: 'Character', route: 'character', icon: 'shule_soft_checklist', children: [
          { name: 'Category', route: 'category' },
          { name: 'List of Character', route: 'list-of-character' },
          { name: 'Character Grade', route: 'character-grade' },
          { name: 'General Assessment', route: 'general-assessment' },
          { name: 'Reports', route: 'reports' }
        ]
      },
      { name: 'Mark', route: 'mark', icon: 'mark' }
    ]
  },
  {
    name: 'Communication',
    shortName: 'Communication',
    route: ['', 'summary',  'export'],
    description: 'Send BulkSMS, phone SMS, whatsapp messages, Telegram message, check sms reports, emails, etc',
    icon: 'summary',
    children: [
      {name: 'Email/SMS', route: 'emaim-sms'},
      {name: 'Messages', route: 'messages'},
    ]
  },
  {
    name: 'Operations',
    shortName: 'Operations',
    route: ['', 'module',  'operations'],
    pathRoute: ['', 'module',  'operations'],
    description: 'Attendance, Library, Hostel Management, Transport Management',
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
    route: ['', 'summary',  'digital-learning'],
    pathRoute: ['', 'module',  'digital-learning', 'files'],
    description: 'Files management, Class notes, Video live streaming, Online discussion, Home package, etc',
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
