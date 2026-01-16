export default defineNuxtRouteMiddleware((to, from) => {
  const { token } = useAuth();

  if (!token.value && to.path !== '/login' && to.path !== '/register') {
    return navigateTo('/login');
  }
});
