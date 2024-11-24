frappe.pages["practitioner-worklist"].on_page_load = function (wrapper) {
	frappe.ui.make_app_page({
		parent: wrapper,
		title: __("Practitioner Worklist"),
		single_column: true,
	});
};

frappe.pages["practitioner-worklist"].on_page_show = function (wrapper) {
	load_desk_page(wrapper);
};

function load_desk_page(wrapper) {
	let $parent = $(wrapper).find(".layout-main-section");
	$parent.empty();

	frappe.require("practitioner_worklist.bundle.js").then(() => {
		frappe.practitioner_worklist = new frappe.ui.PractitionerWorklist({
			wrapper: $parent,
			page: wrapper.page,
		});
	});
}