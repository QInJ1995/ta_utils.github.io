/*
 * @Author: QINJIN
 * @Date: 2023-04-14 10:18:40
 * @LastEditTime: 2023-04-14 11:27:36
 * @LastEditors: QINJIN
 * @Description: index JS
 * @FilePath: /javascript_utils/index_files/index.js
 */
const menus = document.querySelector(".title-body").children;
if (menus && menus.length) {
  for (const menuItem of menus) {
    const menuLink = menuItem.querySelector(".menu-link");
    const childMenu = menuItem.querySelector(".child-menu");
    menuItem.onclick = () => {
      const display = childMenu.style.display;
      childMenu.style.display = display === "none" ? "inherit" : "none";
      const svgPath = menuLink.querySelector("path");
      svgPath.setAttribute(
        "d",
        childMenu.style.display === "none"
          ? "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"
          : "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
      );
    };
    const childMenuChildList = childMenu.children;
    if (childMenuChildList && childMenuChildList.length) {
      for (const child of childMenuChildList) {
        child.onclick = (e) => {
          e.stopPropagation();
          const curPre = document.getElementById(
            child.querySelector("a").textContent
          );
          curPre.scrollIntoView({
            behavior: "smooth",
          });
          const asideActivated = document.querySelector(".aside .title-body .active");
          asideActivated && asideActivated.classList.remove("active");
          child.classList.add("active");
          const bodyActivated = document.querySelector(".body .api-item .active");
          bodyActivated && bodyActivated.classList.remove("active");
          curPre.classList.add("active");
        };
      }
    }
  }
}
