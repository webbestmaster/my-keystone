var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product', {
	map: {
		name: 'title'
	},
	singular: 'Product',
	plural: 'Products',
	autokey: {
		path: 'slug',
		from: 'title',
		unique: true
	}
});

var imageStorage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'public/files/images',
		publicPath: '/public'
	}
});

Product.add({
	title: {type: String, required: true},
	price: {type: Number},
	qty: {type: Number},
	description: {type: Types.Html, wysiwyg: true, height: 300},
	image: {
		type: Types.File,
		storage: imageStorage
	},
	publishedDate: {type: Date, default: Date.now}
});

Product.register();
