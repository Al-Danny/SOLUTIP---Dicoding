import React, { useState } from "react";
import { useParams } from "react-router";
import ConsulDetail from "../../components/consultation/ConsulDetail";
import {
  // getAllConsul,
  getConsul,
  // getActiveConsul,
} from "../../utils/konsul-data";

function DetailConsul () {
  const { id } = useParams();
  const [Consul_Detail] = useState(getConsul(id));

  return (
    <>
      <ConsulDetail {...Consul_Detail} />
    </>
  )
}

export default DetailConsul;