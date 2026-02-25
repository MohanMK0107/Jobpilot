export const getDateBefore = (days) => {
  const currDate = new Date();
  currDate.setDate(currDate.getDate() - days)
  return currDate.toISOString().split('T')[0]
}

export let applicationsData = [
  // 🔹 < 1 day
  { company: "Google", role: "SWE", source: "LinkedIn", appliedDate: getDateBefore(0), status: "Applied" },
  { company: "Amazon", role: "Frontend Dev", source: "Referral", appliedDate: getDateBefore(0), status: "Pending" },

  // 🔹 < 3 days
  { company: "Microsoft", role: "Backend Dev", source: "Company Website", appliedDate: getDateBefore(1), status: "Selected" },
  { company: "Meta", role: "Full Stack", source: "LinkedIn", appliedDate: getDateBefore(2), status: "Rejected" },
  { company: "Netflix", role: "UI Dev", source: "Indeed", appliedDate: getDateBefore(2), status: "Pending" },

  // 🔹 < 7 days
  { company: "Swiggy", role: "Product Manager", source: "LinkedIn", appliedDate: getDateBefore(4), status: "Applied" },
  { company: "Zomato", role: "UX Designer", source: "Glassdoor", appliedDate: getDateBefore(5), status: "Selected" },
  { company: "Flipkart", role: "Data Analyst", source: "Naukri", appliedDate: getDateBefore(6), status: "Pending" },
  { company: "Paytm", role: "QA Engineer", source: "Referral", appliedDate: getDateBefore(6), status: "Rejected" },

  // 🔹 < 30 days
  { company: "TCS", role: "System Engineer", source: "Campus Placement", appliedDate: getDateBefore(10), status: "Applied" },
  { company: "Infosys", role: "Full Stack Dev", source: "Internshala", appliedDate: getDateBefore(12), status: "Pending" },
  { company: "Wipro", role: "Backend Dev", source: "LinkedIn", appliedDate: getDateBefore(15), status: "Selected" },
  { company: "HCL", role: "DevOps", source: "Indeed", appliedDate: getDateBefore(18), status: "Rejected" },
  { company: "Capgemini", role: "Analyst", source: "Naukri", appliedDate: getDateBefore(20), status: "Pending" },
  { company: "Cognizant", role: "QA Tester", source: "Glassdoor", appliedDate: getDateBefore(22), status: "Applied" },
  { company: "Accenture", role: "Consultant", source: "Referral", appliedDate: getDateBefore(25), status: "Selected" },
  { company: "Oracle", role: "DB Engineer", source: "Company Website", appliedDate: getDateBefore(28), status: "Pending" },
  { company: "Adobe", role: "UI Engineer", source: "LinkedIn", appliedDate: getDateBefore(29), status: "Rejected" },

  // 🔹 > 30 days (old data)
  { company: "IBM", role: "Cloud Engineer", source: "Indeed", appliedDate: getDateBefore(35), status: "Applied" },
  { company: "Dell", role: "Support Engineer", source: "Naukri", appliedDate: getDateBefore(40), status: "Pending" },
  { company: "HP", role: "Hardware Engineer", source: "Referral", appliedDate: getDateBefore(45), status: "Rejected" },
  { company: "SAP", role: "ERP Dev", source: "Glassdoor", appliedDate: getDateBefore(50), status: "Selected" },
  { company: "Cisco", role: "Network Engineer", source: "LinkedIn", appliedDate: getDateBefore(60), status: "Applied" },
  { company: "Intel", role: "Embedded Engineer", source: "Company Website", appliedDate: getDateBefore(70), status: "Pending" },
  { company: "Nvidia", role: "AI Engineer", source: "Internshala", appliedDate: getDateBefore(80), status: "Selected" },
  { company: "Uber", role: "Mobile Dev", source: "Indeed", appliedDate: getDateBefore(90), status: "Rejected" },
  { company: "Ola", role: "Backend Dev", source: "Referral", appliedDate: getDateBefore(100), status: "Applied" },
  { company: "Byju's", role: "Content Dev", source: "Naukri", appliedDate: getDateBefore(120), status: "Pending" },
  { company: "Unacademy", role: "Frontend Dev", source: "LinkedIn", appliedDate: getDateBefore(150), status: "Rejected" },
]