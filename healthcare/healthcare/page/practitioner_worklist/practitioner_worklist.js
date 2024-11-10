frappe.pages['practitioner-worklist'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Practitioner Worklist',
		single_column: true
	});
}