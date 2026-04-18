import { useLogout } from "@/hooks/auth.hook";
import { useNavigate } from "react-router";
import { useEffectOnce } from "react-use";

export default function Logout() {
  const logout = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout.mutate();
  };

  useEffectOnce(() => {
    handleLogout();
    navigate("/");
  });

  return <></>;
}
