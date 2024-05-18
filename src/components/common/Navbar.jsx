import React, { useEffect, useState } from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import logo from '../../assets/Logo/Logo-Full-Light.png'
import {NavbarLinks} from "../../data/navbar-links"
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { apiConnector } from '../../services/apiconnector'
import { categories } from '../../services/apis'
import { FaChevronDown } from 'react-icons/fa'
const Navbar = () => {
  
  const {token}=useSelector((state)=>state.auth);
  const {user}=useSelector((state)=>state.profile);
  const {totalItem}=useSelector((state)=>state.cart)
  const location = useLocation();
  const matchRoute=(route)=>{
    return matchPath({path:route},location.pathname)
  }
  // const [subLink,setSubLink]=useState([]);
  // const fetchSublink=async()=>{
  //     try {
  //       const result=await apiConnector("GET",categories.CATEGORIES_API);
  //       setSubLink(result.data.data);
  //       console.log(result);
  //     } catch(error){
  //       console.log("Could not fetch the category")
  //     }
  //   }

  // useEffect( ()=>{
  //   fetchSublink();
  // },[])
  return (
    <div className='flex h-14 items-center  justify-center border-b-[1px] border-b-richblack-700'>
      <div className='flex w-11/12 max-w-maxContent items-center justify-between'>

        {/* IMAGE LOGO */}
        <Link to="/">
           <img src={logo} width={160} height={42} alt=''/>
        </Link>

        {/* Nav Links */}
        <nav>
            <ul className='flex gap-x-6 text-richblack-25'>
              {
                NavbarLinks.map((ele,i)=>{
                    return(
                        <li key={i}>
                            {
                                ele.title==="Catalog"?(
                                  <div className='flex items-center gap-1 group relative'>
                                    <p>{ele.title}</p>
                                    <FaChevronDown />
                                    <div className='invisible absolute opacity-0 flex w-[150px] group-hover:visible h-11 bg-richblack-5 group-hover:opacity-100 '>

                                    </div>
                                  </div>
                                ):
                                (<Link to={ele.path}>
                                <p className={`${matchRoute(ele?.path)?"text-yellow-25":"text-richblack-5"}`}>{ele.title}</p>
                                </Link>)
                            }
                        </li>
                    )
                })

              }
            </ul>
        </nav>
        
        {/* login/signup/dashboard */}
        <div className='flex gap-4 items-center'>
          {
            user && user?.accountType!=="Instructor" && (
              <Link to="/dashboard/cart" className='relative'>
                <AiOutlineShoppingCart/>
                {
                  totalItem>0 && (
                    <span>
                      {totalItem}
                    </span>
                  )
                }
              </Link>
            )
          }

          {
            token===null && (
              <Link to="/login">
                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                  Log in
                </button>
              </Link>
            )
          }

          {
            token===null && (
              <Link to="/signup">
                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                  Sign Up
                </button>
              </Link>
            )
          }

          {
            token!==null && <ProfileDropDown/>
          }
        </div>

      </div>
    </div>
  )
}

export default Navbar
