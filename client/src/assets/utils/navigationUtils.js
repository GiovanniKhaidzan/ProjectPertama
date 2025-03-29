export const availableRoute = ["/","/Shop"];
export const handleNavigation = (navigate, route) => {
       if (availableRoute.includes(route)) {
              navigate(route)
       } else {
              navigate("/comingSoon")
       }
}