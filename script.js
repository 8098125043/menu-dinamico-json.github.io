
fetch('menuDatos.json')
  .then(response => response.json())
  .then(data => {
    const menuContainer = document.getElementById("menu");

    data.menuItems.forEach(item => {
      const menuItem = document.createElement("li");
      const link = document.createElement("a");
      link.textContent = item.title;
      link.href = item.link;
      menuItem.appendChild(link);

      menuContainer.appendChild(menuItem);
    });
  })
  .catch(error => console.error(error));
