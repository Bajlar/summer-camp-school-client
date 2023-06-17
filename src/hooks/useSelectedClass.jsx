import { useQuery } from "@tanstack/react-query";

const useSelectedClass = () => {
   const {
     data: selected = [],
     refetch,
     isLoading: loading,
   } = useQuery({
     queryKey: ["selected"],
     queryFn: async () => {
       const res = await fetch("http://localhost:5000/selected");
       return res.json();
     },
   });

   return [selected, refetch, loading];
};

export default useSelectedClass;