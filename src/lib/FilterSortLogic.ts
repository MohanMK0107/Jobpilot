type FilterType = {
  source:string;
  status:string;
  appliedDays:string;
}

type DataType = {
  company:string;
  role:string;
  source:string;
  appliedDate:string;
  status:string;
}

const filterDays = (filterDay:string)=>{
  switch(filterDay){
    case'Last 24 hours': return 1;
    case 'Last 3 days' : return 3;
    case 'Last 7 days':return 7;
    case 'Last 30 days':return 30;
    default:
      return null;
}
}

const calculateDate = (applData: string) => {
  const currDate = new Date();
  const appliedDate = new Date(applData);
  const dateDiff = Math.abs(currDate.getTime() - appliedDate.getTime());
  return Math.floor(dateDiff / (1000 * 60 * 60 * 24));
};

export function Filter(data:any,filters:FilterType){
  return data.filter((appl:any)=>{
   const sourceMatch = !filters.source || appl.source === filters.source;
   const statusMatch = !filters.status || appl.status === filters.status;
   const daysLimit = filterDays(filters.appliedDays);
   const daysMatch = !filters.appliedDays || daysLimit === null ? true : calculateDate(appl.appliedDate) < daysLimit;
   return sourceMatch && statusMatch && daysMatch ;    
  })
}


export function SortDataFuntion(applData:any,sort:string){
  if(sort === "Applied (Newest)") return applData.sort((a:any,b:any)=> new Date(b.appliedDate).getTime() - new Date(a.appliedDate).getTime())
  else if(sort === "Applied (Oldest)") return applData.sort((a:any,b:any)=> new Date(a.appliedDate).getTime() - new Date(b.appliedDate).getTime())
  else if(sort === "Company (Z–A)") return applData.sort((a:any,b:any)=> b.company.localeCompare(a.company))
  else if(sort === "Company (A–Z)") return applData.sort((a:any,b:any)=> a.company.localeCompare(b.company))
  else return applData;
}



