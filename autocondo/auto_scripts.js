const auto_tab = document.querySelectorAll('.credits-tabs button');
const auto_content = document.querySelectorAll('.credits-panel');

auto_tab.forEach((button) => { // THIS is the clicked button

    button.addEventListener("click", () => {

        auto_tab.forEach((tab) => { // ALL the buttons
            tab.classList.remove("active");
        });

        button.classList.add("active"); // clicked button only

        auto_content.forEach((panel) => {
            panel.style.display = "none";
        })

        const target = button.getAttribute("data-tab");

        const target_panel = document.querySelector("#" + target);

        target_panel.style.display = "block";



        
    })
});