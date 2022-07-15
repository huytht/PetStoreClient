import React from 'react'
import NewPet from '../components/PetDetails/NewPet'
import PetDetails from '../components/PetDetails/PetDetails'
import Accordion from "../components/Accordion/Accordion";
import { useDispatch, useSelector } from "react-redux";

const PetDetailPage = () => {
  return (
    <>
        <PetDetails/>
        <NewPet/>     
    </>
  )
}

export default PetDetailPage