export default defineNuxtRouteMiddleware((to, _from) => {
  const { token } = useAuth();

  if (!token.value && to.path !== '/login' && to.path !== '/register') {
    return navigateTo('/login');
  }
});
