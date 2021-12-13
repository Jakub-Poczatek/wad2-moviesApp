import { useEffect, useState } from "react";
import {getShow} from '../api/tmdb-api'

const useShow = id => {
  const [show, setShow] = useState(null);
  useEffect(() => {
    getShow(id).then(show => {
      setShow(show);
    });
  }, [id]);
  return [show, setShow];
};

export default useShow