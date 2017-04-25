/**
 * Created by dim on 25.4.17.
 */

var keystone = require('keystone');

exposts = module.exports = function (req, res) {

	var view = new keystone.View(req, res);

	var locals = res.locals;

	// Set locals
	locals.section = 'store';

	locals.filters = {
		product: req.params.product
	};

	locals.data = {
		product: []
	};

	view.on('init', function (next) {
		
		var q = keystone.list('Product').model.findOne({
			slug: locals.filters.product
		});

		q.exec(function (err, result) {
			locals.data.product = result;
			next(err);
		});

	});

	// Render View
	view.render('product');

};

