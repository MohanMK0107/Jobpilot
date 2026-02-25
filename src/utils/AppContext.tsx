"use client";

import { createContext, useState } from "react";

interface AuthForm {
  username: string;
  email: string;
  password: string;
}

type SideBarLink = "Dashboard" | "Applications" | "Calendar" | "Saved";


interface Filters {
  source:string;
  appliedDays:string;
  status:string;
}

interface AppContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  
  sort:string;
  setSort: React.Dispatch<React.SetStateAction<string>>;

  sideBarCollapsed: boolean;
  toggleSidebar: () => void;

  sideBarLink: SideBarLink;
  setSideBarLink: React.Dispatch<React.SetStateAction<SideBarLink>>;

  authForm: AuthForm;
  onChangeAuthForm: (field: keyof AuthForm, value: string) => void;

  addnewapplication:boolean;
  toggleAddNewApplication:()=>void;

  filters:Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export const AppContext = createContext<AppContextProps | null>(null);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  {/*sideBar*/}
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);

  {/*LoadingState*/}
  const [loading,setLoading] = useState<boolean>(false);


  const [sideBarLink, setSideBarLink] =
    useState<SideBarLink>("Applications");

  const toggleSidebar = () => {
    setSideBarCollapsed((prev) => !prev);
  };
  

  {/*Auth form*/}
  const [authForm, setAuthForm] = useState<AuthForm>({
    username: "",
    email: "",
    password: "",
  });

  const onChangeAuthForm = (field: keyof AuthForm, value: string) => {
    setAuthForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  {/*Add new Applcation*/}
  const [addnewapplication,setAddNewApplication]=useState<boolean>(false);

  const toggleAddNewApplication=()=>{
    setAddNewApplication(!addnewapplication);
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
        sideBarCollapsed,
        toggleSidebar,
        sideBarLink,
        setSideBarLink,
        authForm,
        onChangeAuthForm,
        addnewapplication,
        toggleAddNewApplication,
        filters,
        setFilters,
        loading,
        setLoading,
        sort,
        setSort
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
