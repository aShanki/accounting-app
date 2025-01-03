### **Project Overview: Accounting Automation Application**

#### **Objective**
To develop a web or mobile application that automates the functionality of the "Home" sheet in the provided Excel workbook. The app will handle transaction logging and automatically update balances for various accounts (GCash, Cash, Bank, PayPal) as well as the overall running balance. It will retain the simplicity of the original sheet without introducing unnecessary complexity.

---

### **Core Features**
#### 1. **Transaction Management**
   - Users can add, edit, and delete transactions.
   - Each transaction has the following fields:
     - **Date**: The date of the transaction.
     - **Amount**: The transaction amount.
     - **Note**: A description of the transaction.
     - **Type**: "Income" or "Expense."
     - **Location**: User-defined location for the transaction.
   - Editing a transaction will dynamically recalculate all affected balances.

#### 2. **Location Management**
   - Users can create, edit, and delete custom locations (e.g., Bank accounts, E-wallets, Cash).
   - Each location tracks its own balance.
   - System prevents deletion of locations that have associated transactions.

#### 3. **Dynamic Balance Calculation**
   - Automatic computation of:
     - **Individual Location Balances**
     - **Running Total Balance**
   - Balances are recalculated dynamically whenever a transaction is added, edited, or deleted.

#### 4. **Data Display**
   - A central table displaying:
     - **Date**
     - **Amount**
     - **Note**
     - **Type**: Income/Expense
     - **Location**
     - **Current Balances** (GCash, Cash, Bank, PayPal)
     - **Running Balance**
   - Features for sorting and filtering by columns, such as Date, Type, or Location.

#### 5. **Basic Filters**
   - Users can filter transactions by:
     - A date range.
     - Transaction type (Income or Expense).
     - Location (GCash, Cash, Bank, PayPal).

#### 6. **Data Backup and Export**
   - **Export Functionality**: Users can export all transactions to an Excel file for offline use.
   - **Automatic Backups**: Daily backups to secure the data.

---

### **Technical Requirements**
#### **Frontend**
- **Framework**: React.js or Vue.js (responsive and interactive UI).
- **UI Styling**: Tailwind CSS or Bootstrap for simplicity and clarity.
- **Components**:
  - **Transaction Form**: A form to add or edit transactions.
  - **Table View**: A responsive table displaying all transactions.

#### **Backend**
- **Framework**: Node.js (Express.js) or Python (Django/Flask).
- **Database**: MariaDB for structured data storage.
  - **Schema**:
    - **Locations Table**:
      - `id`: Unique identifier for the location
      - `name`: Name of the location
      - `description`: Optional description
      - `current_balance`: Current balance for this location
      
    - **Transactions Table**:
      - `id`: Unique identifier for the transaction
      - `date`: Date of the transaction
      - `amount`: Transaction amount
      - `note`: Description or notes about the transaction
      - `type`: Income or Expense
      - `location_id`: Foreign key to locations table
      - `running_balance`: Total financial balance after this transaction

#### **Authentication**
- Optional if the app is for single-user use.
- For multi-device usage:
  - User login with basic credentials.
  - Secure password storage using bcrypt or a similar hashing mechanism.

#### **Deployment**
- **Web Hosting**: Host on a service like Vercel or Netlify for the frontend, and a cloud provider like AWS or DigitalOcean for the backend.
- **Mobile Compatibility**: Build the app as a PWA (Progressive Web App) for mobile responsiveness and offline support.

---

### **Workflow**
1. **User adds a transaction**: The transaction is entered via a form and saved in the database.
2. **Balances update**: The backend recalculates balances for all accounts and the running total.
3. **Data is displayed**: The updated data is reflected in the transaction table on the dashboard.
4. **Filtering/Exporting**: Users can filter transactions or export data to Excel.

---

### **Deliverables**
1. A fully functional web/mobile application replicating the "Home" sheet functionality.
2. Clear, maintainable codebase with documentation for future updates.
3. Deployment instructions for hosting and maintaining the app.