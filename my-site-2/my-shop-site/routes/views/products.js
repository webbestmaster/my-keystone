var keystone = require('keystone');

module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'store';

	// Load products
	view.query('products', keystone.list('Product').model.find());

	// Render view
	view.render('products');
};
