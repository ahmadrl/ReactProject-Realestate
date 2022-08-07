import React from 'react'
import { Fragment } from 'react'

export default function sidebar() {
  return (
    <Fragment>
    
    
  
        

          <aside
            id="layout-menu"
            class="layout-menu menu-vertical menu bg-menu-theme"
          >


            <div class="menu-inner-shadow"></div>

            <ul class="menu-inner py-1">
            <li class="menu-header small text-uppercase">
                <span class="menu-header-text">Users</span>
              </li>
              {/* <!-- Dashboard --> */}
              <li class="menu-item">
                <a href="/usertable" class="menu-link">
                  <i class="menu-icon tf-icons bx bx-user"></i>
                  <div data-i18n="Analytics">Show Users</div>
                </a>
              </li>

      
            

              <li class="menu-header small text-uppercase">
                <span class="menu-header-text">Properties</span>
              </li>
              <li class="menu-item ">
                <a href="/adcreate" class="menu-link ">
                  <i class="menu-icon tf-icons bx bx-detail"></i>
                  <div data-i18n="Account Settings">Add Properties </div>
                </a>
             
              </li>
              <li class="menu-item ">
                <a href="/adtable" class="menu-link menu-toggl">
                  <i class="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Authentications">Show Properties</div>
                </a>
               
              </li>

              {/* <!-- Forms & Tables --> */}
              <li class="menu-header small text-uppercase">
                <span class="menu-header-text"> Posts</span>
              </li>
           
            
              <li class="menu-item ">
                <a href="/posttable" class="menu-link ">
                  <i class="menu-icon tf-icons bx bx-table"></i>
                  <div data-i18n="Form Layouts"> ShowPosts</div>
                </a>
               
              </li>

              <li class="menu-header small text-uppercase">
                <span class="menu-header-text"> Comments</span>
              </li>

              <li class="menu-item ">
                <a href="/posttable" class="menu-link ">
                  <i class="menu-icon tf-icons bx bx-table"></i>
                  <div data-i18n="Form Layouts"> ShowComments</div>
                </a>
               
              </li>

            </ul>
          </aside>
    
    
    </Fragment>
  )
}
