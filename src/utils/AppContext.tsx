"use client";

import { createContext, useState } from "react";
import { useRouter , usePathname} from "next/navigation";

interface Filters {
  source:string;
  appliedDays:string;
  status:string;
}

interface AppContextProps {

  isLogin:boolean;

  router:any;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  

  sort:string;
  setSort: React.Dispatch<React.SetStateAction<string>>;

  sideBarCollapsed: boolean;
  toggleSidebar: () => void;

  addnewapplication:boolean;
  toggleAddNewApplication:()=>void;

  filters:Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;

  createNote:boolean;
  toggleCreateNote:()=>void;

  viewNote:boolean;
  toggleViewNote:()=>void;

  pathName:string;
}

export const AppContext = createContext<AppContextProps | null>(null);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  {/*get pathName*/}
  const pathName = usePathname();

  const router = useRouter();

  const [isLogin,setisLogin] = useState<boolean>(true);

  {/*sideBar*/}
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);

  {/*LoadingState*/}
  const [loading,setLoading] = useState<boolean>(false);


  const toggleSidebar = () => {
    setSideBarCollapsed((prev) => !prev);
  };

  {/*Open Create Note component*/}
  const [createNote,setCreateNote] = useState<boolean>(false);

  const toggleCreateNote=()=>{
    setCreateNote(prev=>!prev);
  }
  



  {/*Add new Applcation*/}
  const [addnewapplication,setAddNewApplication]=useState<boolean>(false);

  const toggleAddNewApplication=()=>{
    setAddNewApplication(!addnewapplication);
  }

  const [viewNote,setViewNote] = useState<boolean>(false);

  const toggleViewNote=()=>{
    setViewNote(prev=>!prev);
  }
  {/*filter*/}
  const [filters,setFilters] = useState<Filters>({
    source:'',
    appliedDays:'',
    status:'',
  })

  {/*sort*/}
  const [sort,setSort] = useState<string>('Default')

  return (
    <AppContext.Provider
      value={{
        router,
        isLogin,
        pathName,
        sideBarCollapsed,
        toggleSidebar,
        addnewapplication,
        toggleAddNewApplication,
        filters,
        setFilters,
        loading,
        setLoading,
        sort,
        setSort,
        createNote,
        toggleCreateNote,
        viewNote,
        toggleViewNote,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
