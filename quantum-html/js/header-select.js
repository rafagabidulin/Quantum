const selectAllElements = document.querySelectorAll("[data-select]");



selectAllElements.forEach(function(item) {
    item.addEventListener("click", function(){
        const realSelect = this.nextElementSibling;



        if (event.target.hasAttribute("data-select-item")) {
            // Нашли заголовок у данного дропдауна и записали в его текстовое наполнение значение из дата атрибута data-select-item
            var itemTitle = event.target.getAttribute("data-select-item");
            this.querySelector("[data-select-title]").textContent = itemTitle;

            // Скрываем дропдаун
            this.querySelector(".header-select__dropdown").classList.toggle("hidden");

            // Связка с главным селектом
            // изменяем значение value у реального селекта
            if (realSelect) {
                realSelect.value = itemTitle;
            }
            } else {
        // Если кликнули по заголовку
        //Скрываем или открываем дропдаун
        this.querySelector(".header-select__dropdown").classList.toggle("hidden");
            
        }
    });
});
