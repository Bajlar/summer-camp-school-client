import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useEnrollmentClass = () => {
  const { user, loading } = useAuth();
  const { refetch, data: enrolledClass = [] } = useQuery({
    queryKey: ["payment", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/enrolledClasses?email=${user?.email}`
      );
      return res.data;
    },
  });

  return [enrolledClass, refetch];
};

export default useEnrollmentClass;
