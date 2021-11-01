const expandMenu = () => {
  const menuOverlay = document.getElementsByClassName("menu-overlay")[0];
  document.body.classList?.toggle("no-scroll");
  menuOverlay?.classList?.toggle("open");
}