import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useClassSelected = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();

  const { refetch, data: selectClasses = [] } = useQuery({
    queryKey: ["course", user?.email],
    enabled: !loading,

    queryFn: async () => {
      const res = await axiosSecure.get(
        `http://localhost:5000/student/classes?email=${user?.email}`
      );
      return res.data;
    },
  });

  return [selectClasses, refetch];
};
export default useClassSelected;
