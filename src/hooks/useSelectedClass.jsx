import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSelectedClass = () => {
  const { user } = useAuth();
  // console.log(user);

   const {
     data: selected = [],
     refetch,
     isLoading: loading,
   } = useQuery({
     queryKey: ["selected"],
      queryFn: async () => {
        const res = await fetch(
          `https://summer-camp-school-server-bajlar.vercel.app/selected/${user?.email}`
        );
        return res.json();
      },
   });

   return [selected, refetch, loading];
};

export default useSelectedClass;