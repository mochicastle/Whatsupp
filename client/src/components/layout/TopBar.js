import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    // <li key="sign-in">
    //   <Link to="/user-sessions/new">Sign In</Link>
    // </li>,
    // <li key="sign-up">
    //   <Link to="/users/new" className="button">
    //     Sign Up
    //   </Link>
    // </li>,
  ];

  const unauthenticatedHome = [
    <li key="unauth-home">
      <Link to="/">Home</Link>
    </li>
  ]

  const authenticatedMenu = [
    <li key="auth-menu">
      <Link to="/menu">Menu</Link>
    </li>
  ]

  const authenticatedEditRegulars = [
    <li key="edit-favorites">
      <Link to="/regulars">Edit Favorites</Link>
    </li>
  ];

  const authenticatedListItems = [
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ];

  return (
    <div className="top-bar">
      <div className="top-bar-left top-bar-styling">
        <ul className="menu">
          {/* <li className="menu-text">WhatSupp</li> */}
        <ul className="menu">{user ? authenticatedMenu : unauthenticatedHome }</ul>
        <ul className="menu">{user ? authenticatedEditRegulars : null }</ul>
        </ul>
      </div>
      <div className="top-bar-right">
      {/* <ul className="menu">{user && authenticatedListItems}</ul> */}
        <ul className="menu">{user ? authenticatedListItems : unauthenticatedListItems}</ul>
      </div>
    </div>
  );
};

export default TopBar;
