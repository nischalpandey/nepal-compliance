// Copyright (c) 2024, njsubedi, Mukesh and contributors
// For license information, please see license.txt

frappe.query_reports["Monthly Sales Register"] = {
	"filters": [
        {
            "fieldname": "from_date",
            "label": __("From Date"),
            "fieldtype": "Date",
            "default": frappe.datetime.add_days(frappe.datetime.nowdate(), -30)
        },
        {
            "fieldname": "to_date",
            "label": __("To Date"),
            "fieldtype": "Date",
            "default": frappe.datetime.nowdate()
        },
		{
            "fieldname": "from_nepali_date",
            "label": __("From Nepali Date"),
            "fieldtype": "Data",
		},
		{
			"fieldname": "to_nepali_date",
            "label": __("To Nepali Date"),
            "fieldtype": "Data",
		}
	]
};