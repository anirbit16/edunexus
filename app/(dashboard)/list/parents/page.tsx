import React from 'react'
 
import TableSearch from '@/components/TableSearch'
import Image from "next/image";
import Link from "next/link";
import { role, parentsData } from "@/lib/data";
import Table from "@/components/Table";
import Pagination from '@/components/Pagination';
type Parent = {
  id: number;
  name: string;
  email?: string;
  students: string[];
  phone: string;
  address: string;
};


const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Name",
    accessor: "name",
    className: "hidden md:table-cell",
  },
  {
    header: "Email",
    accessor: "email",
    className: "hidden md:table-cell",
  },
  {
    header: "Students",
    accessor: "students",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
 
];
const TeachersListPage = () => {
  const renderRow = (item: Parent) => {
    return (
      <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-custom-Purple-light">
          <td className='flex items-center gap-4 p-4'>
 
            <div className="flex flex-col">
               <h3  className="font-semibold">{item.name}</h3>   
               <p className="text-xs text-gray-500">{item.email}</p>  
            </div>
        

          </td>
          <td className="hidden md:table-cell">
            {item.students.join(",")}
          </td>
        
          <td className="hidden md:table-cell">
            {item.phone}
          </td>
           <td className="hidden md:table-cell">
            {item.address}
           </td>
              <td className="hidden md:table-cell">
<div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
    
        </div>
              </td>

      </tr>
    )
  }
  return (
    <>
      <div className = "bg-white p-4 rounded-md flex-1 m-4 mt-0">
       <div className="flex justify-between items-center">
        <div className ="hidden md:block text-lg font-semibold">  All Parents</div>
         <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
         <TableSearch/>

        <div className="flex items-center gap-4 self-end"> 

  
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-custom-yellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-custom-yellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
        

         </div>
      </div>
      </div>
       <Table columns={columns} renderRow={renderRow} data={parentsData} />
        <Pagination />
      </div>
    </>
  )
}

export default TeachersListPage
