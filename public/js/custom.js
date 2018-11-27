var wrapper_container = document.createElement("div");
wrapper_container.className = "container";

var wrapper_sidebar = document.createElement("div");
wrapper_sidebar.className = "sidebar";

var text_sidebar = document.createElement("h2");
text_sidebar.className = "style_name";
text_sidebar.innerHTML = "Mochamad Teguh";

var image_sidebar = document.createElement("img");
image_sidebar.className = "imgme";
image_sidebar.src = "./images/me_small.jpg";

wrapper_sidebar.appendChild(text_sidebar);
wrapper_sidebar.appendChild(image_sidebar);

var wrapper_menu = document.createElement("div");
wrapper_menu.className = "menu";

var text_menu = document.createElement("span");
text_menu.className = "menu_title";
text_menu.innerHTML = "Mobile Web Specialist - Learning";

var icon_menu = document.createElement("i");
icon_menu.className = "fas fa-bars nodisplay icon_menu";

wrapper_menu.appendChild(text_menu);
wrapper_menu.appendChild(icon_menu);

var wrapper_konten = document.createElement("div");
wrapper_konten.className = "konten";

var wrapper_material_container = document.createElement("div");
wrapper_material_container.className = "material-container columns4";

var wrapper_material_item_parent = document.createElement("div");
wrapper_material_item_parent.className = "material-item-wrapper material-item-wrapper-style2 row";
 
var wrapper_material_item_container = document.createElement("div");
wrapper_material_item_container.className = "material-item-container ent";

var wrapper_material_item = document.createElement("div");
wrapper_material_item.className = "material-item";

var wrapper_material_item_detail = document.createElement("div");
wrapper_material_item_detail.className = "material-item-details";

var wrapper_row = document.createElement("div");
wrapper_row.className = "row";

var wrapper_row_content = document.createElement("div");
wrapper_row_content.className = "row_content";

var text_row_content = document.createElement("h6");
text_row_content.className = "heading-alt-style13 material-item-name";
text_row_content.innerHTML = "Kalkulator";

var button_detail_row_content = document.createElement("a");
button_detail_row_content.className = "link_det";
button_detail_row_content.innerHTML = "Lihat";
button_detail_row_content.href = "project1/calculator.html";

wrapper_row_content.appendChild(text_row_content);
wrapper_row_content.appendChild(button_detail_row_content);
wrapper_row.appendChild(wrapper_row_content);
wrapper_material_item_detail.appendChild(wrapper_row);
wrapper_material_item.appendChild(wrapper_material_item_detail);
wrapper_material_item_container.appendChild(wrapper_material_item);

var wrapper_material_item_container_second = document.createElement("div");
wrapper_material_item_container_second.className = "material-item-container ent";

var wrapper_material_item_second = document.createElement("div");
wrapper_material_item_second.className = "material-item";

var wrapper_material_item_detail_second = document.createElement("div");
wrapper_material_item_detail_second.className = "material-item-details";

var wrapper_row_second = document.createElement("div");
wrapper_row_second.className = "row";

var wrapper_row_content_second = document.createElement("div");
wrapper_row_content_second.className = "row_content";

var text_row_content_second = document.createElement("h6");
text_row_content_second.className = "heading-alt-style13 material-item-name";
text_row_content_second.innerHTML = "Lokasi Istimewa dengan Mapbox";

var button_detail_row_content_second = document.createElement("a");
button_detail_row_content_second.className = "link_det";
button_detail_row_content_second.innerHTML = "Lihat";
button_detail_row_content_second.href = "project2/peta.html";

wrapper_row_content_second.appendChild(text_row_content_second);
wrapper_row_content_second.appendChild(button_detail_row_content_second);
wrapper_row_second.appendChild(wrapper_row_content_second);
wrapper_material_item_detail_second.appendChild(wrapper_row_second);
wrapper_material_item_second.appendChild(wrapper_material_item_detail_second);
wrapper_material_item_container_second.appendChild(wrapper_material_item_second);

wrapper_material_item_parent.appendChild(wrapper_material_item_container);
wrapper_material_item_parent.appendChild(wrapper_material_item_container_second);
wrapper_material_container.appendChild(wrapper_material_item_parent);
wrapper_konten.appendChild(wrapper_material_container);

var wrapper_konten_second = document.createElement("div");
wrapper_konten_second.className = "konten";

var wrapper_material_container_second = document.createElement("div");
wrapper_material_container_second.className = "material-container columns4";

var wrapper_material_item_parent_second = document.createElement("div");
wrapper_material_item_parent_second.className = "material-item-wrapper material-item-wrapper-style2 row";
 
var wrapper_material_item_container_third = document.createElement("div");
wrapper_material_item_container_third.className = "material-item-container ent";

var wrapper_material_item_third = document.createElement("div");
wrapper_material_item_third.className = "material-item";

var wrapper_material_item_detail_third = document.createElement("div");
wrapper_material_item_detail_third.className = "material-item-details";

var wrapper_row_third = document.createElement("div");
wrapper_row_third.className = "row";

var wrapper_row_content_third = document.createElement("div");
wrapper_row_content_third.className = "row_content";

var text_row_content_third = document.createElement("h6");
text_row_content_third.className = "heading-alt-style13 material-item-name";
text_row_content_third.innerHTML = "Fetch JSON";

var button_detail_row_content_third = document.createElement("a");
button_detail_row_content_third.className = "link_det";
button_detail_row_content_third.innerHTML = "Lihat";
button_detail_row_content_third.href = "project3/fetch-json.html";

wrapper_row_content_third.appendChild(text_row_content_third);
wrapper_row_content_third.appendChild(button_detail_row_content_third);
wrapper_row_third.appendChild(wrapper_row_content_third);
wrapper_material_item_detail_third.appendChild(wrapper_row_third);
wrapper_material_item_third.appendChild(wrapper_material_item_detail_third);
wrapper_material_item_container_third.appendChild(wrapper_material_item_third);

wrapper_material_item_parent_second.appendChild(wrapper_material_item_container_third);
wrapper_material_container_second.appendChild(wrapper_material_item_parent_second);
wrapper_konten_second.appendChild(wrapper_material_container_second);

var wrapper_footer = document.createElement("div");
wrapper_footer.className = "footer center";

var wrapper_footer_line = document.createElement("hr");

var wrapper_social = document.createElement("div");
wrapper_social.className = "social";

var link_socmed_github = document.createElement("a");
link_socmed_github.title = "Github";
link_socmed_github.target = "_blank";
link_socmed_github.href = "https://github.com/mteguh81";

var icon_socmed_github = document.createElement("i");
icon_socmed_github.className = "fab fa-github";

link_socmed_github.appendChild(icon_socmed_github);

var link_socmed_linkedin = document.createElement("a");
link_socmed_linkedin.title = "Linkedin";
link_socmed_linkedin.target = "_blank";
link_socmed_linkedin.href = "https://www.linkedin.com/in/mochamad-teguh-b5b1aa7b/";

var icon_socmed_linkedin = document.createElement("i");
icon_socmed_linkedin.className = "fab fa-linkedin";

link_socmed_linkedin.appendChild(icon_socmed_linkedin);

var link_socmed_instagram = document.createElement("a");
link_socmed_instagram.title = "Instagram";
link_socmed_instagram.target = "_blank";
link_socmed_instagram.href = "https://www.instagram.com/mteguh81/";

var icon_socmed_instagram = document.createElement("i");
icon_socmed_instagram.className = "fab fa-instagram";

link_socmed_instagram.appendChild(icon_socmed_instagram);

wrapper_social.appendChild(link_socmed_github);
wrapper_social.appendChild(link_socmed_linkedin);
wrapper_social.appendChild(link_socmed_instagram);

wrapper_footer.appendChild(wrapper_footer_line);
wrapper_footer.appendChild(wrapper_social);

wrapper_container.appendChild(wrapper_sidebar);
wrapper_container.appendChild(wrapper_menu);
wrapper_container.appendChild(wrapper_konten);
wrapper_container.appendChild(wrapper_konten_second);
wrapper_container.appendChild(wrapper_footer);

document.body.insertBefore(wrapper_container, document.body.firstChild);
