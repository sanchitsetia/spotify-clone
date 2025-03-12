import { axiosInstance } from "@/lib/axios";
import { useAuth } from "@clerk/clerk-react";
import { get } from "axios";
import React, { useEffect, useState } from "react";
import { Loader } from "lucide-react";

const updateApiToken = (token: string | null) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

const AuthProviders = ({ children }: { children: React.ReactNode }) => {
  const { getToken } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = await getToken();
        updateApiToken(token);
      } catch (error) {
        updateApiToken(null);
        console.log("Error in initAuth", error);
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, [getToken]);

  if (loading)
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Loader className="size-8 text-emerald-500 animate-spin" />
      </div>
    );

  return <div>{children}</div>;
};

export default AuthProviders;
