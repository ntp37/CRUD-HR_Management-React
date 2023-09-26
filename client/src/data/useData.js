import useSWR from "swr";
import Axios from "axios";

const getAllEmployee = () => {
    const fetcher = (url) => Axios.get(url).then((res) => res.data);
    const { data, error, isLoading } = useSWR(import.meta.env.VITE_API + "employee/all",fetcher);

    return {
      data: data,
      isLoading,
      isError: error,
    }
}
  
const getPersonal = (id) => Axios.get(import.meta.env.VITE_API + "employee/" + id)

export { getAllEmployee, getPersonal }